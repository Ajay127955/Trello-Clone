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
      fetchWorkspace();
    }
  }, [id]);

  const fetchWorkspace = async () => {
    try {
      const response = await api.get(`workspaces/${id}/`);
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
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  return (
    <div className="p-8 max-w-5xl mx-auto w-full bg-white min-h-screen">
      <header className="mb-10">
        <h1 className="text-3xl font-black text-slate-900 mb-2">Workspace Settings</h1>
        <p className="text-slate-500">Manage your workspace profiles, member permissions, and overall visibility.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section className="lg:col-span-8 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">edit_square</span>
              Workspace Profile
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="h-24 w-24 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-bold shadow-inner">
                  {workspace ? workspace.name[0].toUpperCase() : 'W'}
                </div>
                <div className="flex-1 w-full">
                  <label className="text-sm font-bold text-slate-600 mb-2 block">Workspace Name</label>
                  <input 
                    className="w-full bg-slate-50 p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-600 mb-2 block">Short Bio</label>
                <textarea 
                  className="w-full bg-slate-50 p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all" 
                  placeholder="Tell your team what this workspace is about..." 
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button 
                  onClick={handleSaveChanges}
                  disabled={saving || !id}
                  className={`bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 ${saving ? 'opacity-50 cursor-wait' : ''}`} 
                  type="button"
                >
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">group</span>
                Members Overview
              </h2>
              {id && (
                <button onClick={() => navigate(`/workspace-members/${id}`)} className="text-blue-600 font-bold text-sm hover:underline">
                  Manage All
                </button>
              )}
            </div>
            <div className="space-y-4">
              {(workspace?.members?.slice(0, 3) || []).map(member => (
                <div key={member.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">
                      {member.username?.substring(0, 2).toUpperCase() || '??'}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{member.username}</div>
                      <div className="text-xs text-slate-500">{member.email}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${member.username === workspace?.owner?.username ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                    {member.username === workspace?.owner?.username ? 'Owner' : 'Member'}
                  </span>
                </div>
              ))}
              {!id && <p className="text-slate-500 text-sm">Please select a workspace from the dashboard to manage settings.</p>}
            </div>
          </div>
        </section>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Visibility</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-blue-600 bg-blue-50/30 flex gap-4 relative">
                <span className="material-symbols-outlined text-blue-600">lock</span>
                <div>
                  <p className="font-bold text-sm text-slate-900">Private</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">Only workspace members can see and edit boards.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl shadow-xl text-white">
            <span className="material-symbols-outlined mb-4 text-3xl">auto_awesome</span>
            <h3 className="text-lg font-bold mb-2">Upgrade to Pro</h3>
            <p className="text-sm opacity-90 mb-4">Get unlimited boards and advanced permissions.</p>
            <button 
              onClick={() => navigate('/pricing-plans')}
              className="w-full bg-white text-blue-600 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              Learn More
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default WorkspaceSettings;
