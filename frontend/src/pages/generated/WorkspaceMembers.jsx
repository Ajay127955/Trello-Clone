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
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  const isOwner = currentUser?.username === workspace.owner.username;

  return (
    <div className="p-8 max-w-5xl mx-auto w-full bg-white min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Team Members</h1>
          <p className="text-slate-500 mt-1">Manage access and collaboration permissions for <strong>{workspace.name}</strong>.</p>
        </div>
        <button 
          onClick={() => setIsInviteModalOpen(true)}
          className="flex items-center justify-center bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined mr-2">person_add</span>
          Invite Member
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Member</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {workspace.members && workspace.members.map(member => (
              <tr key={member.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {member.username.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{member.username}</div>
                      <div className="text-xs text-slate-500">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wide ${member.username === workspace.owner.username ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                    {member.username === workspace.owner.username ? 'Owner' : 'Member'}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  {isOwner && member.username !== workspace.owner.username && (
                    <button 
                      onClick={() => removeMember(member.id)}
                      className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors font-bold text-xs flex items-center gap-1 ml-auto"
                    >
                      <span className="material-symbols-outlined text-[18px]">person_remove</span>
                      Remove
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-200">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            Total Members: {workspace.members?.length || 0}
          </p>
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

export default WorkspaceMembers;
