import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const WorkspaceSettings = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(id ? true : false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id) {
      fetchWorkspace(id);
    } else {
      fetchDefaultWorkspace();
    }
  }, [id]);

  const fetchDefaultWorkspace = async () => {
    try {
      const response = await api.get('workspaces/');
      if (response.data && response.data.length > 0) {
        // Redirect to the first available workspace
        navigate(`/workspace-settings/${response.data[0].id}`, { replace: true });
      } else {
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const fetchWorkspace = async (workspaceId) => {
    try {
      const response = await api.get(`workspaces/${workspaceId}/`);
      setWorkspace(response.data);
      setName(response.data.name);
      setDescription(response.data.description || '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveChanges = async () => {
    setSaving(true);
    try {
      await api.patch(`workspaces/${id}/`, { name, description });
      alert('Changes saved successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to save changes.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)]">
      <div className="w-12 h-12 rounded-full border-4 border-slate-100 dark:border-slate-800 border-t-blue-600 animate-spin"></div>
    </div>
  );

  if (!workspace) return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)] gap-6">
      <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <span className="material-symbols-outlined text-4xl text-slate-400">settings_suggest</span>
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">No Workspace Found</h2>
        <p className="text-slate-500 text-sm max-w-xs">Create a workspace first to manage its settings.</p>
      </div>
      <button 
        onClick={() => navigate('/boards-dashboard')}
        className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20 active:scale-95 transition-all"
      >
        Go to Dashboard
      </button>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-12">
        <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Workspace Settings</h1>
        <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Profile & Member Management</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <section className="lg:col-span-8 space-y-12">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
            <h2 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white mb-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-blue-600 text-xl">edit_square</span>
              </div>
              Core Profile
            </h2>
            <form className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="h-28 w-28 rounded-3xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-4xl font-black shadow-inner border-2 border-indigo-100 dark:border-indigo-800 shrink-0">
                  {workspace ? workspace.name[0].toUpperCase() : 'W'}
                </div>
                <div className="flex-1 w-full space-y-6">
                  <div>
                    <label className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-3 block">Workspace Display Name</label>
                    <input 
                      className="w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border-2 border-slate-50 dark:border-slate-800 focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white" 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-3 block">Workspace Description</label>
                    <textarea 
                      className="w-full bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border-2 border-slate-50 dark:border-slate-800 focus:border-blue-600 outline-none transition-all font-bold text-slate-900 dark:text-white min-h-[120px]" 
                      placeholder="Define the mission of this workspace..." 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4">
                <button 
                  onClick={handleSaveChanges}
                  disabled={saving || !id}
                  className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all disabled:opacity-30" 
                  type="button"
                >
                  {saving ? 'Synchronizing...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald-600 text-xl">group</span>
                </div>
                Active Members
              </h2>
              {id && (
                <button onClick={() => navigate(`/workspace-members/${id}`)} className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
                  Manage All
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(workspace?.members?.slice(0, 4) || []).map(member => (
                <div key={member.id} className="flex items-center justify-between p-5 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-50 dark:border-slate-800 transition-all hover:bg-white dark:hover:bg-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${member.username}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{member.username}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{member.email.split('@')[0]}</div>
                    </div>
                  </div>
                  <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${member.username === workspace?.owner?.username ? 'bg-amber-100 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                    {member.username === workspace?.owner?.username ? 'Owner' : 'Member'}
                  </span>
                </div>
              ))}
              {!id && <p className="text-slate-500 text-sm italic py-4">No workspace selected.</p>}
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-10">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-6">Workspace Visibility</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl border-2 border-blue-600 bg-blue-50/10 dark:bg-blue-600/5 flex gap-5 relative group cursor-pointer overflow-hidden">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <span className="material-symbols-outlined text-7xl text-blue-600">lock</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-xl">lock</span>
                </div>
                <div className="relative z-10">
                  <p className="font-black text-slate-900 dark:text-white text-sm uppercase tracking-wider">Private</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed font-bold mt-1">Exclusive to members.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <span className="material-symbols-outlined text-[180px] text-white">auto_awesome</span>
            </div>
            <div className="relative z-10">
                <h3 className="font-headline-md text-2xl font-black text-white mb-2 leading-tight">Scale to Enterprise</h3>
                <p className="text-white/60 text-sm font-bold mb-8 leading-relaxed">Unlock multi-workspace controls and SSO integration.</p>
                <button 
                  onClick={() => navigate('/pricing-plans')}
                  className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all active:scale-95"
                >
                  See Pro Features
                </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WorkspaceSettings;
