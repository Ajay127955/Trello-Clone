import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';
import PromptModal from './PromptModal';

const CardModal = ({ isOpen, onClose, cardId, boardMembers, onCardUpdate }) => {
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingDesc, setEditingDesc] = useState(false);
  const [desc, setDesc] = useState('');
  const [newChecklistTitle, setNewChecklistTitle] = useState('');
  const [showMemberSearch, setShowMemberSearch] = useState(false);
  const [showLabelMenu, setShowLabelMenu] = useState(false);
  const [boardLabels, setBoardLabels] = useState([]);
  const [isExpandingAi, setIsExpandingAi] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = React.useRef(null);
  const { showToast } = useToast();
  
  // Prompt Modal State
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [promptTitle, setPromptTitle] = useState('');
  const [promptLabel, setPromptLabel] = useState('');
  const [promptOnSubmit, setPromptOnSubmit] = useState(() => () => {});

  useEffect(() => {
    if (isOpen && cardId) {
      fetchCard();
      fetchBoardLabels();
    }
  }, [isOpen, cardId]);

  const fetchCard = async () => {
    try {
      const response = await api.get(`cards/${cardId}/`);
      setCard(response.data);
      setDesc(response.data.description || '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBoardLabels = async () => {
    try {
      const response = await api.get('labels/');
      setBoardLabels(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateDescription = async () => {
    try {
      await api.patch(`cards/${cardId}/`, { description: desc });
      setEditingDesc(false);
      onCardUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleExpandWithAi = async () => {
    setIsExpandingAi(true);
    try {
      const response = await api.post(`cards/${cardId}/expand_ai/`);
      setDesc(response.data.description);
      fetchCard();
      onCardUpdate();
    } catch (err) {
      showToast('AI expansion failed.', 'error');
    } finally {
      setIsExpandingAi(false);
    }
  };

  const handleAddChecklist = () => {
    setPromptTitle('Add Checklist');
    setPromptLabel('Title');
    setPromptOnSubmit(() => async (title) => {
      try {
        await api.post('checklists/', { title, card: cardId });
        fetchCard();
        showToast('Checklist added!', 'success');
      } catch (err) {
        showToast('Failed to add checklist', 'error');
      }
    });
    setIsPromptOpen(true);
  };

  const handleAddChecklistItem = async (checklistId, text) => {
    if (!text) return;
    try {
      await api.post('checklist-items/', { text, checklist: checklistId });
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleChecklistItem = async (itemId, completed) => {
    try {
      await api.patch(`checklist-items/${itemId}/`, { completed: !completed });
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleMember = async (memberId) => {
    const currentMemberIds = card.assigned_members.map(m => m.id);
    let newMemberIds;
    if (currentMemberIds.includes(memberId)) {
      newMemberIds = currentMemberIds.filter(id => id !== memberId);
    } else {
      newMemberIds = [...currentMemberIds, memberId];
    }
    try {
      await api.patch(`cards/${cardId}/`, { assigned_member_ids: newMemberIds });
      fetchCard();
      onCardUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleLabel = async (labelId) => {
    const currentLabelIds = card.labels.map(l => l.id);
    let newLabelIds;
    if (currentLabelIds.includes(labelId)) {
      newLabelIds = currentLabelIds.filter(id => id !== labelId);
    } else {
      newLabelIds = [...currentLabelIds, labelId];
    }
    try {
      await api.patch(`cards/${cardId}/`, { label_ids: newLabelIds });
      fetchCard();
      onCardUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateDueDate = async (date) => {
    try {
      await api.patch(`cards/${cardId}/`, { due_date: date });
      fetchCard();
      onCardUpdate();
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_name', file.name);
    formData.append('card', cardId);

    setUploading(true);
    try {
      await api.post('attachments/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      showToast('File attached successfully!', 'success');
      fetchCard();
      onCardUpdate();
    } catch (err) {
      console.error(err);
      showToast('Failed to upload file.', 'error');
    } finally {
      setUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl flex flex-col relative z-10 overflow-hidden">
        {/* Header */}
        <div className="p-6 flex items-start justify-between border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600">credit_card</span>
            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{card?.title || 'Loading...'}</h2>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">in list <span className="text-blue-600">Processing</span></p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <span className="material-symbols-outlined text-slate-400">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-10">
            {/* Metadata Badges */}
            <div className="flex flex-wrap gap-8">
              {card?.assigned_members?.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Members</h4>
                  <div className="flex -space-x-2">
                    {card.assigned_members.map(m => (
                      <div key={m.id} className="h-8 w-8 rounded-full bg-blue-600 border-2 border-white text-white flex items-center justify-center text-[10px] font-bold" title={m.username}>
                        {m.username?.substring(0, 2).toUpperCase() || '??'}
                      </div>
                    ))}
                    <button onClick={() => setShowMemberSearch(!showMemberSearch)} className="h-8 w-8 rounded-full bg-slate-100 border-2 border-white text-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              )}

              {card?.labels?.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Labels</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {card.labels.map(l => (
                      <div key={l.id} className="h-8 px-3 rounded-lg flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider" style={{ backgroundColor: l.color }}>
                        {l.title}
                      </div>
                    ))}
                    <button onClick={() => setShowLabelMenu(!showLabelMenu)} className="h-8 w-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-[18px]">add</span>
                    </button>
                  </div>
                </div>
              )}

              {card?.due_date && (
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Due Date</h4>
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {new Date(card.due_date).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Description */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-600">subject</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">Description</h3>
                </div>
                <button 
                  onClick={handleExpandWithAi}
                  disabled={isExpandingAi}
                  className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest ${isExpandingAi ? 'text-purple-400' : 'text-purple-600 hover:bg-purple-50'} px-3 py-1 rounded-lg transition-all border border-purple-100`}
                >
                  <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                  {isExpandingAi ? 'AI Expanding...' : 'Expand with AI'}
                </button>
              </div>
              {editingDesc ? (
                <div className="space-y-3">
                  <textarea 
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl p-4 text-sm focus:border-blue-600 outline-none min-h-[150px] transition-all"
                    placeholder="Add a more detailed description..."
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    autoFocus
                  />
                  <div className="flex gap-2">
                    <button onClick={handleUpdateDescription} className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all">Save</button>
                    <button onClick={() => setEditingDesc(false)} className="px-6 py-2 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-bold transition-all">Cancel</button>
                  </div>
                </div>
              ) : (
                <div 
                  onClick={() => setEditingDesc(true)}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 text-sm text-slate-700 dark:text-slate-300 min-h-[80px] cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border-2 border-transparent hover:border-slate-200"
                >
                  {card?.description || 'Add a more detailed description...'}
                </div>
              )}
            </section>

            {/* Attachments Section */}
            {card?.attachments?.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-slate-600">attach_file</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">Attachments</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-10">
                  {card.attachments.map(attachment => (
                    <div key={attachment.id} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-blue-300 transition-all group">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <span className="material-symbols-outlined">description</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{attachment.file_name || 'File'}</p>
                        <p className="text-[10px] text-slate-400">Added {new Date(attachment.created_at).toLocaleDateString()}</p>
                      </div>
                      <a href={attachment.file} target="_blank" rel="noreferrer" className="opacity-0 group-hover:opacity-100 p-2 hover:bg-white rounded-lg transition-all">
                        <span className="material-symbols-outlined text-slate-400 text-sm">download</span>
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Checklists */}
            {card?.checklists?.map(checklist => (
              <section key={checklist.id} className="bg-white dark:bg-slate-900 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">check_box</span>
                    <h3 className="font-bold text-slate-900 dark:text-white">{checklist.title}</h3>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-[11px] font-black text-slate-400 w-10 text-right">
                    {checklist.items.length ? Math.round((checklist.items.filter(i => i.completed).length / checklist.items.length) * 100) : 0}%
                  </div>
                  <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 transition-all duration-700" 
                      style={{ width: `${checklist.items.length ? (checklist.items.filter(i => i.completed).length / checklist.items.length) * 100 : 0}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-1 ml-10">
                  {checklist.items.map(item => (
                    <div key={item.id} className="flex items-center gap-4 group py-2 px-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all">
                      <button 
                        onClick={() => handleToggleChecklistItem(item.id, item.completed)}
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${item.completed ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100' : 'border-slate-300 dark:border-slate-600 group-hover:border-blue-400'}`}
                      >
                        {item.completed && <span className="material-symbols-outlined text-[14px] font-black">check</span>}
                      </button>
                      <span className={`text-sm font-medium flex-1 ${item.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-300'}`}>{item.text}</span>
                    </div>
                  ))}
                  <div className="mt-4 px-3">
                    <input 
                      type="text"
                      placeholder="Add an item..."
                      className="w-full text-sm py-2 bg-transparent border-b-2 border-slate-100 dark:border-slate-800 focus:border-blue-600 outline-none transition-all"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleAddChecklistItem(checklist.id, e.target.value);
                          e.target.value = '';
                        }
                      }}
                    />
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar Actions */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Add to card</h4>
              <div className="grid grid-cols-1 gap-2.5">
                <button 
                  onClick={() => setShowMemberSearch(!showMemberSearch)}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-300 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all relative group"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-blue-600 transition-colors">group</span>
                  Members
                  {showMemberSearch && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl z-[110] p-4 animate-in fade-in zoom-in-95">
                      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Board Members</h5>
                      <div className="space-y-1 max-h-60 overflow-y-auto">
                        {boardMembers.map(member => {
                          const isAssigned = card?.assigned_members?.some(m => m.id === member.id);
                          return (
                            <div 
                              key={member.id}
                              onClick={(e) => { e.stopPropagation(); handleToggleMember(member.id); }}
                              className="flex items-center justify-between p-2.5 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl cursor-pointer transition-all"
                            >
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[8px] font-bold">
                                  {member.username?.substring(0, 2).toUpperCase() || '??'}
                                </div>
                                <span className="text-xs font-bold">{member.username}</span>
                              </div>
                              {isAssigned && <span className="material-symbols-outlined text-blue-600 text-sm">check</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </button>

                <button 
                  onClick={() => setShowLabelMenu(!showLabelMenu)}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-300 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all relative group"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-blue-600 transition-colors">label</span>
                  Labels
                  {showLabelMenu && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl z-[110] p-4 animate-in fade-in zoom-in-95">
                      <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Labels</h5>
                      <div className="space-y-2">
                        {boardLabels.map(label => {
                          const isSelected = card?.labels?.some(l => l.id === label.id);
                          return (
                            <div 
                              key={label.id}
                              onClick={(e) => { e.stopPropagation(); handleToggleLabel(label.id); }}
                              className="h-10 rounded-lg flex items-center justify-between px-3 cursor-pointer transition-transform active:scale-95"
                              style={{ backgroundColor: label.color }}
                            >
                              <span className="text-xs font-black text-white uppercase tracking-wider">{label.title}</span>
                              {isSelected && <span className="material-symbols-outlined text-white text-sm">check</span>}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </button>

                <button 
                  onClick={handleAddChecklist}
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-300 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all group"
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-blue-600 transition-colors">check_box</span>
                  Checklist
                </button>

                <button 
                  className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-300 px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all group disabled:opacity-50"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                >
                  <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-blue-600 transition-colors">attach_file</span>
                  {uploading ? 'Attaching...' : 'Attachment'}
                </button>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-indigo-600 via-blue-600 to-purple-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-100/50 relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                  <span className="material-symbols-outlined text-[100px]">auto_awesome</span>
              </div>
              <div className="relative z-10">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-70 mb-3">AI Assistant</p>
                <h5 className="font-black text-xl mb-4 leading-none tracking-tight">Gemini Pro Powered</h5>
                <p className="text-[11px] leading-relaxed font-bold opacity-80">Use AI to generate project structures and professional card descriptions instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PromptModal 
        isOpen={isPromptOpen}
        onClose={() => setIsPromptOpen(false)}
        onSubmit={promptOnSubmit}
        title={promptTitle}
        label={promptLabel}
      />
    </div>
  );
};

export default CardModal;
