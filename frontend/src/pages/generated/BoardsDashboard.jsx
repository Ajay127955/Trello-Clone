import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import InviteModal from '../../components/InviteModal';
import PromptModal from '../../components/PromptModal';

const BoardsDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [boards, setBoards] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = useToast();
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteTarget, setInviteTarget] = useState({ id: null, name: '', type: 'workspace' });
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const [boardsRes, workspacesRes] = await Promise.all([
        api.get('boards/'),
        api.get('workspaces/')
      ]);
      setBoards(boardsRes.data);
      setWorkspaces(workspacesRes.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateWorkspace = () => {
    setIsPromptOpen(true);
  };

  const onWorkspaceSubmit = async (name) => {
    try {
      await api.post('workspaces/', { name });
      showToast('Workspace created successfully!', 'success');
      fetchData();
    } catch (err) {
      showToast('Failed to create workspace', 'error');
    }
  };

  const openInviteModal = (id, name, type) => {
    setInviteTarget({ id, name, type });
    setIsInviteModalOpen(true);
  };

  if (loading) return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="h-12 w-64 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-40 rounded-[2rem] bg-slate-100 dark:bg-slate-800 animate-pulse" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Starred Boards */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-3xl bg-amber-500/10 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-amber-500 text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div>
                <h2 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Favorites</h2>
                <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Priority Workspace Cluster</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {boards.filter(b => b.is_starred).map(board => (
            <div 
              key={board.id}
              onClick={() => navigate(`/board-view/${board.id}`)}
              className="group h-48 p-8 rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden"
              style={{ 
                backgroundColor: board.background_color || '#0C66E4',
                backgroundImage: board.background_image ? `url(${board.background_image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-white font-headline-md text-xl font-black leading-tight tracking-tight">{board.title}</h3>
                <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 group-hover:bg-white group-hover:text-slate-900 transition-all">
                        <span className="material-symbols-outlined text-sm">north_east</span>
                    </span>
                    <span className="material-symbols-outlined text-amber-400 text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
              </div>
            </div>
          ))}
          {boards.filter(b => b.is_starred).length === 0 && (
            <div className="col-span-full py-20 text-center bg-slate-50/50 dark:bg-slate-800/20 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-5xl text-slate-200 dark:text-slate-700 mb-6">workspace_premium</span>
              <p className="text-slate-400 dark:text-slate-500 font-black text-[10px] uppercase tracking-widest">Star boards for direct access in the priority zone.</p>
            </div>
          )}
        </div>
      </section>

      {/* ALL BOARDS */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-3xl bg-blue-600/10 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-blue-600 text-3xl">grid_view</span>
            </div>
            <div>
                <h2 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Infrastructure</h2>
                <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Full project node directory</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/create-board')}
            className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-lg">add_circle</span>
            New Board
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {boards.map(board => (
            <div 
              key={board.id}
              onClick={() => navigate(`/board-view/${board.id}`)}
              className="group h-48 p-8 rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all relative overflow-hidden"
              style={{ 
                backgroundColor: board.background_color || '#475569',
                backgroundImage: board.background_image ? `url(${board.background_image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="text-white font-headline-md text-xl font-black leading-tight tracking-tight">{board.title}</h3>
                <div className="flex items-center justify-end">
                    <span className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-all">
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACES */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-3xl bg-indigo-600/10 flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-indigo-600 text-3xl">corporate_fare</span>
            </div>
            <div>
                <h2 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Organizations</h2>
                <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Multi-tier collaborative hubs</p>
            </div>
          </div>
          <button 
            onClick={handleCreateWorkspace}
            className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-sm hover:shadow-xl active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-lg">domain_add</span>
            New Hub
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-10">
          {workspaces.map(workspace => (
            <div key={workspace.id} className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 flex flex-col md:flex-row gap-10 items-center shadow-sm hover:shadow-2xl transition-all group">
              <div className="w-24 h-24 bg-indigo-600/10 dark:bg-indigo-900/40 rounded-[2rem] flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-700">
                <span className="text-4xl font-black text-indigo-600 dark:text-indigo-400 tracking-tighter">{workspace.name[0].toUpperCase()}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-3">
                    <h3 className="font-headline-md text-3xl font-black text-slate-900 dark:text-white tracking-tight">{workspace.name}</h3>
                    {workspace.owner.username === user?.username && (
                        <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20 shadow-sm">Lead Hub</span>
                    )}
                </div>
                <div className="flex items-center justify-center md:justify-start gap-6">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg text-slate-300">group</span>
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{workspace.members.length} Associates</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800"></div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg text-slate-300">database</span>
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">By @{workspace.owner.username}</span>
                    </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => navigate(`/workspace-members/${workspace.id}`)}
                  className="bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  Directory
                </button>
                <button 
                  onClick={() => openInviteModal(workspace.id, workspace.name, 'workspace')}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-indigo-500/20 hover:bg-indigo-700 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">person_add</span>
                  Authorize
                </button>
                <button 
                  onClick={() => navigate(`/workspace-settings/${workspace.id}`)}
                  className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 flex items-center justify-center transition-all border border-slate-100 dark:border-slate-800 shadow-sm"
                >
                  <span className="material-symbols-outlined text-xl">tune</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <InviteModal 
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        workspaceId={inviteTarget.id}
        targetName={inviteTarget.name}
      />

      <PromptModal 
        isOpen={isPromptOpen}
        onClose={() => setIsPromptOpen(false)}
        onSubmit={onWorkspaceSubmit}
        title="Establish Hub"
        label="Organization Identifier"
        placeholder="e.g. Quantum Engineering"
      />
    </div>
  );
};

export default BoardsDashboard;
