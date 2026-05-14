import React, { useState } from 'react';
import api from '../services/api';

const CardDetailModal = ({ card, onClose, listName, boardMembers = [], isManager = false, onCardUpdate, boardOwnerId }) => {
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [description, setDescription] = useState(card.description || '');

  const handleDeleteCard = async () => {
    if (!window.confirm('Are you sure you want to delete this card?')) return;
    try {
      await api.delete(`cards/${card.id}/`);
      if (onCardUpdate) onCardUpdate();
      onClose();
    } catch (err) {
      console.error('Delete Card Error:', err);
      alert('Failed to delete card.');
    }
  };

  const handleUpdatePriority = async (newPriority) => {
    try {
      await api.patch(`cards/${card.id}/`, { priority: newPriority });
      if (onCardUpdate) onCardUpdate();
    } catch (err) {
      console.error('Update Priority Error:', err);
    }
  };

  const handleAssignMember = async (userId) => {
    try {
      await api.post(`cards/${card.id}/assign/`, { user_id: userId });
      if (onCardUpdate) onCardUpdate();
    } catch (err) {
      console.error('Assign Member Error:', err);
      alert('Failed to assign member.');
    }
  };

  const handleSaveDescription = async () => {
    try {
      await api.patch(`cards/${card.id}/`, { description });
      setIsEditingDescription(false);
      if (onCardUpdate) onCardUpdate();
    } catch (err) {
      console.error('Save Description Error:', err);
    }
  };

  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-start justify-center overflow-y-auto pt-12 pb-20 px-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative flex flex-col md:flex-row gap-0 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors z-10 p-2 hover:bg-slate-100 rounded-full"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Main Content Area (Left) */}
        <div className="flex-grow p-8 md:p-10 md:pr-6">
          <header className="flex gap-4 mb-10">
            <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-2xl">task</span>
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{card.title}</h1>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Current Status: <span className="text-primary">{card.status}</span>
              </p>
            </div>
          </header>

          <div className="space-y-12">
            {/* Meta Information Row */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assigned To</h3>
                {card.assigned_to && card.assigned_to.length > 0 ? (
                  <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                    <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-xs uppercase">
                      {card.assigned_to[0].username.substring(0, 2)}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-slate-900">{card.assigned_to[0].username}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Team Member</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-center">
                    <span className="text-xs text-slate-400 font-bold italic">Unassigned</span>
                  </div>
                )}
                {isManager && (
                  <div className="relative group mt-2">
                    <button className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-600 transition-all">
                      Change Assignee
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-2xl border border-slate-100 rounded-2xl hidden group-hover:block z-50 p-2 overflow-hidden animate-in fade-in slide-in-from-top-2">
                      <div className="max-h-48 overflow-y-auto custom-scrollbar">
                        {boardMembers.map(m => (
                          <button 
                            key={m.user.id}
                            onClick={() => handleAssignMember(m.user.id)}
                            className="w-full text-left px-3 py-2.5 hover:bg-blue-50 rounded-xl text-xs font-black text-slate-700 flex items-center gap-2 transition-colors"
                          >
                            <div className="h-6 w-6 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center text-[9px] font-black">
                              {m.user.username.substring(0, 2).toUpperCase()}
                            </div>
                            <span>{m.user.username}</span>
                            {card.assigned_to?.some(a => a.id === m.user.id) && (
                              <span className="material-symbols-outlined text-primary text-xs ml-auto">check</span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Priority Level</h3>
                <div className="flex flex-wrap gap-2">
                  {['low', 'medium', 'high', 'urgent'].map(p => (
                    <button
                      key={p}
                      onClick={() => handleUpdatePriority(p)}
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                        card.priority === p 
                          ? (p === 'urgent' ? 'bg-red-500 text-white' : p === 'high' ? 'bg-orange-500 text-white' : 'bg-primary text-white')
                          : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Deadline</h3>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="material-symbols-outlined text-slate-400 text-sm">calendar_today</span>
                  <span className="text-xs font-black text-slate-700">
                    {card.due_date ? new Date(card.due_date).toLocaleDateString() : 'Not Set'}
                  </span>
                </div>
              </div>
            </section>

            {/* Description Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">notes</span>
                  <h2 className="font-black text-slate-900 tracking-tight">Task Description</h2>
                </div>
                {!isEditingDescription && (
                  <button onClick={() => setIsEditingDescription(true)} className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Edit Details</button>
                )}
              </div>
              
              {isEditingDescription ? (
                <div className="space-y-3">
                  <textarea 
                    autoFocus
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-4 bg-slate-50 border-2 border-primary/10 rounded-2xl font-medium text-sm text-slate-700 resize-none min-h-[150px] outline-none"
                    placeholder="Describe this task in detail..."
                  />
                  <div className="flex gap-2">
                    <button onClick={handleSaveDescription} className="bg-primary text-white px-6 py-2 rounded-xl font-black text-xs shadow-lg shadow-primary/20 hover:opacity-90">Save Changes</button>
                    <button onClick={() => { setIsEditingDescription(false); setDescription(card.description || ''); }} className="bg-slate-100 text-slate-500 px-6 py-2 rounded-xl font-black text-xs hover:bg-slate-200">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50/50 rounded-2xl p-6 min-h-[100px] border border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">
                    {card.description || "No detailed description provided."}
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        {/* Sidebar (Right) */}
        <aside className="md:w-72 bg-slate-50/50 p-8 flex flex-col gap-10 border-l border-slate-100">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Card Actions</h3>
            <div className="flex flex-col gap-2">
              <ActionButton icon="attachment" label="Attachments" />
              <ActionButton icon="check_box" label="Subtasks" />
              <ActionButton icon="history" label="Activity History" />
              <div className="h-px bg-slate-200 my-2"></div>
              <ActionButton icon="delete" label="Delete Task" color="text-red-500" onClick={handleDeleteCard} />
            </div>
          </div>

          <div className="mt-auto space-y-4">
            <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Created By</p>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[9px] font-black">
                  {card.assigned_by?.username.substring(0, 2).toUpperCase() || 'SY'}
                </div>
                <span className="text-xs font-black text-slate-900">{card.assigned_by?.username || 'System'}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, color = "text-slate-600", onClick }) => (
  <button 
    onClick={onClick}
    className="flex items-center gap-3 px-4 py-3 bg-white hover:bg-slate-50 rounded-2xl shadow-sm border border-slate-100 transition-all group w-full text-left"
  >
    <span className={`material-symbols-outlined text-lg ${color} group-hover:scale-110 transition-transform`}>{icon}</span>
    <span className="text-xs font-black text-slate-900">{label}</span>
  </button>
);

export default CardDetailModal;
