import React, { useState } from 'react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';
import { X, Layout, Plus, CheckCircle } from 'lucide-react';

const CreateCategoryModal = ({ isOpen, onClose, boardId, onCategoryCreated }) => {
  const { showToast } = useToast();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
        showToast('Category name is required', 'error');
        return;
    }
    
    setLoading(true);
    try {
      await api.post('categories/', { 
        name, 
        board: boardId
      });
      showToast('Category created successfully!', 'success');
      setName('');
      onCategoryCreated();
      onClose();
    } catch (err) {
      console.error(err);
      showToast('Failed to create category', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in duration-300">
        <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
               <Layout className="text-white" size={24} />
            </div>
            <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">New Category</h2>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-0.5">Organize your project scope</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all group">
            <X className="text-slate-400 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-400 tracking-[0.2em] px-1">
                <Plus size={14} className="text-indigo-500" />
                Category Identifier
            </label>
            <input 
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Design Systems, DevOps, QA"
              className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent rounded-[1.2rem] focus:border-indigo-500 focus:bg-white outline-none font-bold text-slate-900 transition-all shadow-inner"
            />
          </div>

          <div className="pt-4">
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
                  Establish Category
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCategoryModal;
