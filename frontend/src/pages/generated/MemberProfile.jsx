import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ConfirmModal from '../../components/ConfirmModal';
import PromptModal from '../../components/PromptModal';

const MemberProfile = () => {
  const navigate = useNavigate();
  const { user, updateUser } = useAuth();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    first_name: user?.first_name || '',
    last_name: user?.last_name || '',
  });

  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: () => {} });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      setIsEditModalOpen(false);
      setConfirmModal({
        isOpen: true,
        title: 'Success',
        message: 'Your profile has been updated successfully.',
        onConfirm: () => setConfirmModal({ ...confirmModal, isOpen: false })
      });
    } catch (err) {
      setConfirmModal({
        isOpen: true,
        title: 'Update Failed',
        message: 'Could not update profile. The username or email might already be in use.',
        onConfirm: () => setConfirmModal({ ...confirmModal, isOpen: false })
      });
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Premium Profile Hero */}
      <div className="relative mb-20">
        <div className="h-64 w-full rounded-[3rem] bg-slate-900 dark:bg-blue-600 overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 opacity-20" style={{"backgroundImage":"url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
        <div className="px-12 -mt-24 flex flex-col md:flex-row items-end gap-10 relative z-10">
          <div className="relative group">
            <div className="h-48 w-48 rounded-[3rem] border-[12px] border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 shadow-2xl overflow-hidden flex items-center justify-center text-slate-900 dark:text-white text-6xl font-black tracking-tighter">
              {user?.username?.substring(0, 2).toUpperCase() || 'U'}
            </div>
            <button onClick={() => setIsEditModalOpen(true)} className="absolute bottom-4 right-4 h-12 w-12 rounded-2xl bg-white dark:bg-blue-600 text-slate-900 dark:text-white flex items-center justify-center shadow-2xl active:scale-95 transition-all opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-xl">photo_camera</span>
            </button>
          </div>
          <div className="flex-1 pb-4">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white tracking-tighter">{user?.username || 'Productive User'}</h1>
              <span className="bg-blue-500 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg shadow-blue-500/20">Verified</span>
            </div>
            <p className="font-label-sm text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">@{user?.username?.toLowerCase() || 'user'} • Enterprise Associate</p>
          </div>
          <div className="pb-4 flex gap-4">
             <button 
              onClick={() => setIsEditModalOpen(true)}
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition-all border border-slate-100 dark:border-slate-800"
            >
              Modify
            </button>
            <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
              Connect
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Column: Stats & Info */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <section className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest mb-8">Intelligence</h3>
            <div className="space-y-8">
              {[
                { label: 'Network Integrity', val: '98%', icon: 'security', color: 'blue' },
                { label: 'Task Throughput', val: '1.2k', icon: 'speed', color: 'emerald' },
                { label: 'Uptime Protocol', val: '342d', icon: 'timer', color: 'rose' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-xl bg-${stat.color}-500/10 flex items-center justify-center text-${stat.color}-600`}>
                      <span className="material-symbols-outlined text-lg">{stat.icon}</span>
                    </div>
                    <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <span className="font-black text-[11px] text-slate-900 dark:text-white">{stat.val}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
             <h3 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest mb-6">Directory</h3>
             <div className="space-y-4">
               {[
                 { label: 'Email Address', val: user?.email, icon: 'alternate_email' },
                 { label: 'Access Level', val: 'System Administrator', icon: 'verified_user' },
                 { label: 'Session Start', val: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }), icon: 'database' }
               ].map(row => (
                 <div key={row.label} className="group">
                   <p className="text-[9px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest mb-1">{row.label}</p>
                   <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                     <span className="material-symbols-outlined text-blue-600 text-lg">{row.icon}</span>
                     {row.val}
                   </div>
                 </div>
               ))}
             </div>
          </section>
        </div>

        {/* Right Column: Activity & Bento */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
              <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest block mb-2">Total Deployments</span>
              <div className="text-6xl font-black text-slate-900 dark:text-white tracking-tighter">428</div>
            </div>
            <div className="bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
              <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                  <span className="material-symbols-outlined text-[140px] text-white">grade</span>
              </div>
              <div className="relative z-10">
                <span className="font-black text-[10px] text-white/40 uppercase tracking-widest block mb-2">Workspace Ranking</span>
                <div className="text-6xl font-black text-white tracking-tighter">#04</div>
              </div>
            </div>
          </div>

          <section className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-10 border-b border-slate-50 dark:border-slate-800">
              <h3 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest">Chronological Feed</h3>
            </div>
            <div className="p-20 flex flex-col items-center justify-center text-center">
               <div className="h-20 w-20 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8">
                 <span className="material-symbols-outlined text-4xl text-slate-300 animate-pulse">monitoring</span>
               </div>
               <p className="font-black text-[10px] text-slate-300 dark:text-slate-600 uppercase tracking-widest mb-2">Synchronizing with node cluster...</p>
               <p className="font-bold text-xs text-slate-400">Activity logging will update once background jobs complete.</p>
            </div>
          </section>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-900/80 backdrop-blur-md">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden">
            <div className="p-10 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
              <h3 className="font-headline-md text-3xl font-black text-slate-900 dark:text-white tracking-tight">Identity Terminal</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="h-12 w-12 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleUpdateProfile} className="p-10 space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Universal ID</label>
                  <input 
                    type="text" 
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all shadow-inner"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">Email Endpoint</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 dark:text-white focus:border-blue-600 outline-none transition-all shadow-inner"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-6 pt-6">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-8 py-4 rounded-2xl font-black text-[10px] text-slate-400 uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Discard
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-8 py-4 rounded-2xl font-black text-[10px] bg-blue-600 text-white uppercase tracking-widest shadow-2xl shadow-blue-500/20 active:scale-95 transition-all"
                >
                  Authorize Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal 
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal({ ...confirmModal, isOpen: false })}
      />
    </div>
  );
};


export default MemberProfile;
