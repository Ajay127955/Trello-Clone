import React, { useState } from 'react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';
import { X, UserPlus, FileText, CheckCircle } from 'lucide-react';

const CreateTaskModal = ({ isOpen, onClose, boardId, categoryId, members, onTaskCreated }) => {
  const { showToast } = useToast();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState([]);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const toggleMember = (id) => {
    setSelectedUserIds(prev => 
      prev.includes(id) ? prev.filter(mid => mid !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
        showToast('Title is required', 'error');
        return;
    }
    
    setLoading(true);
    try {
      await api.post('tasks/', { 
        title, 
        description, 
        category: categoryId,
        assigned_user_ids: selectedUserIds
      });
      showToast('Task created and assigned!', 'success');
      setTitle('');
      setDescription('');
      setSelectedUserIds([]);
      onTaskCreated();
      onClose();
    } catch (err) {
      console.error(err);
      showToast('Failed to create task', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
               <UserPlus className="text-white" size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Generate Task</h2>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">Define project objectives & assignments</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all group">
            <X className="text-slate-400 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">
                <CheckCircle size={14} className="text-blue-500" />
                Task Title
            </label>
            <input 
              required
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Implement WebSocket Auth"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-[1.2rem] focus:border-blue-500 focus:bg-white outline-none font-bold text-slate-900 transition-all shadow-inner"
            />
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">
                <UserPlus size={14} className="text-indigo-500" />
                Select Assignees
            </label>
            <div className="grid grid-cols-2 gap-3 max-h-48 overflow-y-auto p-2 custom-scrollbar bg-slate-50/50 rounded-[1.5rem] border-2 border-dashed border-slate-200">
              {members.map(user => (
                <button
                  key={user.id}
                  type="button"
                  onClick={() => toggleMember(user.id)}
                  className={`flex items-center gap-3 p-3 rounded-2xl border-2 transition-all text-left ${
                    selectedUserIds.includes(user.id) 
                      ? 'bg-white border-blue-500 shadow-md scale-95' 
                      : 'bg-white border-transparent hover:border-slate-300'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-xl flex items-center justify-center text-[10px] font-black uppercase shadow-sm transition-all ${selectedUserIds.includes(user.id) ? 'bg-blue-600 text-white rotate-12' : 'bg-slate-100 text-slate-400'}`}>
                    {user.username.substring(0, 2)}
                  </div>
                  <span className={`text-xs font-bold truncate ${selectedUserIds.includes(user.id) ? 'text-blue-600' : 'text-slate-600'}`}>{user.username}</span>
                </button>
              ))}
              {members.length === 0 && (
                <p className="col-span-full py-4 text-center text-slate-400 text-[10px] font-black uppercase">No members found</p>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">
                <FileText size={14} className="text-emerald-500" />
                Project Specification
            </label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detail the technical requirements and success criteria..."
              rows="4"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-[1.2rem] focus:border-blue-500 focus:bg-white outline-none font-bold text-slate-900 resize-none transition-all shadow-inner"
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-black shadow-2xl shadow-slate-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.3em] text-xs"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <CheckCircle size={18} />
                  Confirm Action
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
