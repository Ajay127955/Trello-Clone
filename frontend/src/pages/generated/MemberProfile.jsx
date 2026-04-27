import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

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

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateUser(formData);
      setIsEditModalOpen(false);
      alert('Profile updated successfully!');
    } catch (err) {
      alert('Failed to update profile. Username might be taken.');
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 mb-20 md:mb-8">
      {/*  Hero Profile Section  */}
      <div className="relative mb-8">
        <div className="h-48 w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 overflow-hidden shadow-lg">
          <div className="absolute inset-0 opacity-10" style={{"backgroundImage":"url('https://www.transparenttextures.com/patterns/cubes.png')"}}></div>
        </div>
        <div className="px-6 -mt-16 flex flex-col md:flex-row items-end gap-6">
          <div className="relative">
            <div className="h-32 w-32 rounded-2xl border-4 border-white dark:border-slate-900 bg-blue-600 shadow-xl overflow-hidden flex items-center justify-center text-white text-4xl font-black">
              {user?.username?.substring(0, 2).toUpperCase() || 'U'}
            </div>
            <button 
              onClick={() => alert('Profile photo upload coming soon!')}
              className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-lg p-1.5 shadow-md hover:bg-blue-700 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
            </button>
          </div>
          <div className="flex-1 pb-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{user?.username || 'Productive User'}</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">@{user?.username?.toLowerCase() || 'user'} • {user?.email}</p>
          </div>
          <div className="flex gap-3 pb-2">
            <button 
              onClick={() => setIsEditModalOpen(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 shadow-blue-200"
            >
              <span className="material-symbols-outlined text-[20px]">edit</span>
              Edit Profile
            </button>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Profile link copied to clipboard!');
              }}
              className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 p-2.5 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/*  Sidebar: Info & Bio  */}
        <div className="lg:col-span-4 space-y-6">
          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">info</span>
              About
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Senior Project Manager focused on streamlining team workflows and implementing agile methodologies. Passionate about productivity tools and clean UI design.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-blue-600 text-sm">location_on</span>
                <span className="text-sm">San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-blue-600 text-sm">link</span>
                <span className="text-sm text-blue-600 hover:underline cursor-pointer">productive-flow.io</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-blue-600 text-sm">calendar_today</span>
                <span className="text-sm">Joined January 2024</span>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600">settings</span>
              Quick Settings
            </h3>
            <div className="space-y-1">
              <button 
                onClick={() => navigate('/workspace-settings')}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">lock</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Account Security</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[18px]">chevron_right</span>
              </button>
              <button 
                onClick={() => navigate('/notifications')}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">notifications</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Notification Preferences</span>
                </div>
                <span className="material-symbols-outlined text-slate-300 text-[18px]">chevron_right</span>
              </button>
            </div>
          </section>
        </div>

        {/*  Main Content: Activity Feed  */}
        <div className="lg:col-span-8">
          <section className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600">history</span>
                Recent Activity
              </h3>
              <button onClick={() => navigate('/activity-log')} className="text-blue-600 font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800">
              <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-blue-600">move_item</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      Moved <span className="font-bold text-blue-600">Homepage Redesign</span> from <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-xs">Doing</span> to <span className="px-2 py-0.5 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs">Done</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-400 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                      2 hours ago • Marketing Board
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 p-4 text-center">
              <button 
                onClick={() => navigate('/activity-log')}
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Load More Activity
              </button>
            </div>
          </section>

          {/*  Stats Bento Grid  */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Completed Tasks</p>
              <p className="text-3xl font-black text-green-600 mt-2">124</p>
              <p className="text-[10px] text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded-full inline-block mt-2">+12% this month</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Active Boards</p>
              <p className="text-3xl font-black text-blue-600 mt-2">12</p>
              <p className="text-[10px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full inline-block mt-2">4 managed</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Comments Made</p>
              <p className="text-3xl font-black text-purple-600 mt-2">567</p>
              <p className="text-[10px] text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded-full inline-block mt-2">High engagement</p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-black text-slate-900 dark:text-white">Edit Profile</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleUpdateProfile} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Username</label>
                <input 
                  type="text" 
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1 ml-1">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button 
                  type="button" 
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 px-4 py-3 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-3 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default MemberProfile;
