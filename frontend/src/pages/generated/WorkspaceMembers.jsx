import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import InviteModal from '../../components/InviteModal';

const WorkspaceMembers = () => {
  const { id } = useParams();
  const { user: currentUser } = useAuth();
  const navigate = useNavigate();
  const [workspace, setWorkspace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  useEffect(() => {
    fetchWorkspace();
  }, [id]);

  const fetchWorkspace = async () => {
    try {
      const response = await api.get(`workspaces/${id}/`);
      setWorkspace(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const removeMember = async (memberId) => {
    if (!window.confirm('Are you sure you want to remove this member?')) return;
    try {
      await api.post(`workspaces/${id}/remove_member/`, { user_id: memberId });
      fetchWorkspace();
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to remove member');
    }
  };

  if (loading || !workspace) return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)]">
      <div className="w-12 h-12 rounded-full border-4 border-slate-100 dark:border-slate-800 border-t-blue-600 animate-spin"></div>
    </div>
  );

  const isOwner = currentUser?.username === workspace.owner.username;

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-12">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Collaborators</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-3">Active on {workspace.name}</p>
        </div>
        <button 
          onClick={() => setIsInviteModalOpen(true)}
          className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">person_add</span>
          Invite Talent
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
            <tr>
              <th className="px-8 py-5 font-black text-[10px] text-slate-400 uppercase tracking-widest">Member Entity</th>
              <th className="px-8 py-5 font-black text-[10px] text-slate-400 uppercase tracking-widest">Permission Tier</th>
              <th className="px-8 py-5 font-black text-[10px] text-slate-400 uppercase tracking-widest text-right">Operational Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
            {workspace.members && workspace.members.map(member => (
              <tr key={member.id} className="hover:bg-slate-50/30 dark:hover:bg-slate-800/30 transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-sm border-2 border-indigo-100 dark:border-indigo-800">
                        {member.username?.substring(0, 2).toUpperCase() || '??'}
                    </div>
                    <div>
                      <div className="font-black text-slate-900 dark:text-white text-sm tracking-tight">{member.username}</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${member.username === workspace.owner.username ? 'bg-blue-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                    {member.username === workspace.owner.username ? 'Owner' : 'Member'}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  {isOwner && member.username !== workspace.owner.username ? (
                    <button 
                      onClick={() => removeMember(member.id)}
                      className="bg-red-50 dark:bg-red-900/10 text-red-500 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                    >
                      Revoke Access
                    </button>
                  ) : (
                    <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600 uppercase tracking-widest">Persistent</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-8 py-6 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
            Total Database Records: {workspace.members?.length || 0}
          </p>
          <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Real-time Sync Active</span>
          </div>
        </div>
      </div>

      <InviteModal 
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        workspaceId={id}
        targetName={workspace.name}
      />
    </div>
  );
};
  );
};

export default WorkspaceMembers;
