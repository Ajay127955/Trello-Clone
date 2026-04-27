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
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="h-8 w-48 bg-slate-200 rounded animate-pulse mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 rounded-xl bg-slate-200 animate-pulse" />
        ))}
      </div>
      <div className="h-8 w-40 bg-slate-200 rounded animate-pulse mb-8" />
      <div className="space-y-4">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="h-24 rounded-xl bg-slate-200 animate-pulse" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 max-w-7xl mx-auto w-full bg-white min-h-screen">
      {/* Starred Boards */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-slate-500">star</span>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Starred Boards</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {boards.filter(b => b.is_starred).map(board => (
            <div 
              key={board.id}
              onClick={() => navigate(`/board-view/${board.id}`)}
              className="group h-28 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              style={{ 
                backgroundColor: board.background_color || '#0C66E4',
                backgroundImage: board.background_image ? `url(${board.background_image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <h3 className="text-white font-bold text-base relative z-10">{board.title}</h3>
            </div>
          ))}
          {boards.filter(b => b.is_starred).length === 0 && (
            <div className="col-span-full py-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <p className="text-slate-400 text-sm italic">Star boards to access them quickly here.</p>
            </div>
          )}
        </div>
      </section>

      {/* YOUR BOARDS */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">dashboard</span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">All Boards</h2>
          </div>
          <button 
            onClick={() => navigate('/create-board')}
            className="text-blue-600 hover:bg-blue-50 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors"
          >
            + Create Board
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {boards.map(board => (
            <div 
              key={board.id}
              onClick={() => navigate(`/board-view/${board.id}`)}
              className="group h-28 p-4 rounded-lg cursor-pointer shadow-sm hover:shadow-md transition-all relative overflow-hidden"
              style={{ 
                backgroundColor: board.background_color || '#475569',
                backgroundImage: board.background_image ? `url(${board.background_image})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              <h3 className="text-white font-bold text-base relative z-10">{board.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* WORKSPACES */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500">group</span>
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Your Workspaces</h2>
          </div>
          <button 
            onClick={handleCreateWorkspace}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 flex items-center gap-2 text-sm"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            New Workspace
          </button>
        </div>
        
        <div className="space-y-6">
          {workspaces.map(workspace => (
            <div key={workspace.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col md:flex-row gap-8 items-center shadow-sm hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black text-blue-600">{workspace.name[0].toUpperCase()}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900">{workspace.name}</h3>
                <p className="text-slate-500 text-sm mt-1">{workspace.members.length} members • {workspace.owner.username === user?.username ? 'You own this' : `Owner: ${workspace.owner.username}`}</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <button 
                  onClick={() => navigate(`/workspace-members/${workspace.id}`)}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 border border-slate-200"
                >
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  Members
                </button>
                <button 
                  onClick={() => openInviteModal(workspace.id, workspace.name, 'workspace')}
                  className="bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 border border-blue-100"
                >
                  <span className="material-symbols-outlined text-[18px]">person_add</span>
                  Invite
                </button>
                <button 
                  onClick={() => navigate(`/workspace-settings/${workspace.id}`)}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold transition-colors flex items-center gap-2 border border-slate-200"
                >
                  <span className="material-symbols-outlined text-[18px]">settings</span>
                  Settings
                </button>
              </div>
            </div>
          ))}
          {workspaces.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
              <span className="material-symbols-outlined text-5xl text-slate-300 mb-4">corporate_fare</span>
              <p className="text-slate-500 font-medium">No workspaces yet. Create one to start collaborating!</p>
            </div>
          )}
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
        title="Create Workspace"
        label="Workspace Name"
        placeholder="e.g. Engineering Team"
      />
    </div>
  );
};

export default BoardsDashboard;
