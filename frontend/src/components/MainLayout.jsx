import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Animated Icon Component ──────────────────────────────────────────────────
const DynamicIcon = ({ name, className = "", isActive = false }) => {
  const variants = {
    hover: { scale: 1.2, rotate: 5, color: "#2563eb" },
    tap: { scale: 0.9 },
    active: { scale: 1.1, color: "#2563eb" }
  };

  return (
    <motion.span
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      animate={isActive ? "active" : "initial"}
      className={`material-symbols-outlined transition-colors ${className}`}
    >
      {name}
    </motion.span>
  );
};

const MainLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    // Close sidebar on mobile when navigating
    setIsSidebarOpen(false);
  }, [location.pathname]);

  const fetchNotifications = async () => {
    try {
      const response = await api.get('notifications/');
      setNotifications(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleMarkAllRead = async () => {
    try {
      await api.post('notifications/mark_all_read/');
      fetchNotifications();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const getNavLinkClass = (path) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    return `flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 group ${
      isActive 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none translate-x-1' 
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:translate-x-1'
    }`;
  };


  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950 font-body">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 fixed top-0 z-[60] flex justify-between items-center w-full px-6 h-16 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Hamburger Menu - Visible on Mobile/Tablet */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all active:scale-90"
          >
            <DynamicIcon name={isSidebarOpen ? 'close' : 'menu'} />
          </button>

          <Link to="/boards-dashboard" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-1.5 rounded-lg shadow-lg shadow-blue-200 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-white text-xl font-black">grid_view</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white hidden xs:block font-heading uppercase">Productive</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-2 ml-6">
            <Link to="/boards-dashboard" className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${location.pathname === '/boards-dashboard' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Workspaces</Link>
            <Link to="/activity-log" className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${location.pathname === '/activity-log' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>Activity</Link>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/create-board')} 
              className="bg-blue-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all text-xs ml-2 shadow-lg shadow-blue-100 dark:shadow-none"
            >
              Create
            </motion.button>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="relative hidden lg:block group">
            <DynamicIcon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px] group-focus-within:text-blue-500" />
            <input 
              className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-2 border-transparent rounded-xl text-sm focus:border-blue-500 focus:bg-white outline-none w-48 xl:w-72 transition-all" 
              placeholder="Quick search (Ctrl+K)" 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
          >
            <DynamicIcon name="search" />
          </button>

          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-all relative"
            >
              <DynamicIcon name="notifications" />
              {notifications.some(n => !n.read) && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
              )}
            </button>
            <AnimatePresence>
              {showNotifications && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 rounded-[24px] z-[100] overflow-hidden"
                >
                  <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-black text-slate-900 dark:text-white tracking-tight uppercase text-xs">Notifications</h3>
                    <button onClick={handleMarkAllRead} className="text-[10px] font-black text-blue-600 hover:underline">Mark all as read</button>
                  </div>
                  <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                    {notifications.length === 0 ? (
                      <div className="p-10 text-center text-slate-400">
                        <span className="material-symbols-outlined text-4xl mb-2 opacity-20">notifications_off</span>
                        <p className="text-xs font-bold">All caught up!</p>
                      </div>
                    ) : (
                      notifications.map(n => (
                        <div key={n.id} className={`p-4 border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex gap-3 ${!n.read ? 'bg-blue-50/30 dark:bg-blue-900/5' : ''}`}>
                          <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center ${n.type === 'card_assigned' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                            <span className="material-symbols-outlined text-sm">{n.type === 'card_assigned' ? 'assignment_ind' : 'info'}</span>
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-snug">{n.message}</p>
                            <span className="text-[10px] text-slate-400 font-medium">{new Date(n.created_at).toLocaleTimeString()}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => navigate('/help-center')}
              className="p-2 rounded-xl hover:bg-white dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-all hidden sm:block"
            >
              <DynamicIcon name="help_outline" />
            </button>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/member-profile')}
            className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-xs cursor-pointer transition-all shadow-md ${location.pathname === '/member-profile' ? 'bg-blue-600 shadow-blue-200' : 'bg-slate-800 shadow-slate-200'}`}
          >
            {user?.username?.substring(0, 2).toUpperCase() || 'U'}
          </motion.div>
        </div>
      </header>

      <div className="flex pt-16 min-h-screen">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-16 bottom-0 z-50 w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-all duration-500 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full p-6 overflow-y-auto custom-scrollbar">
            <div className="space-y-1">
              <Link to="/boards-dashboard" className={getNavLinkClass('/boards-dashboard')}>
                <DynamicIcon name="dashboard" isActive={location.pathname === '/boards-dashboard'} />
                <span>Boards Dashboard</span>
              </Link>
              <Link to="/template-library" className={getNavLinkClass('/template-library')}>
                <DynamicIcon name="description" isActive={location.pathname === '/template-library'} />
                <span>Templates</span>
              </Link>
              <Link to="/activity-log" className={getNavLinkClass('/activity-log')}>
                <DynamicIcon name="trending_up" isActive={location.pathname === '/activity-log'} />
                <span>Activity Stream</span>
              </Link>
              <Link to="/views-gallery" className={getNavLinkClass('/views-gallery')}>
                <DynamicIcon name="apps" isActive={location.pathname === '/views-gallery'} />
                <span>View Gallery</span>
              </Link>
            </div>

            <div className="mt-10 mb-2 px-3 text-[11px] font-black text-slate-400 uppercase tracking-widest font-heading">Workspaces</div>
            <div className="space-y-1">
              <Link to="/workspace-members" className={getNavLinkClass('/workspace-members')}>
                <DynamicIcon name="group" isActive={location.pathname === '/workspace-members'} />
                <span>Team Members</span>
              </Link>
              <Link to="/workspace-settings" className={getNavLinkClass('/workspace-settings')}>
                <DynamicIcon name="settings" isActive={location.pathname === '/workspace-settings'} />
                <span>Workspace Settings</span>
              </Link>
            </div>

            <div className="mt-auto pt-8">
              <motion.button 
                whileHover={{ backgroundColor: "rgba(239, 68, 68, 0.1)", x: 5 }}
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 text-red-500 rounded-xl font-bold text-sm transition-all"
              >
                <DynamicIcon name="logout" />
                <span>Sign Out</span>
              </motion.button>
            </div>
          </div>
        </aside>

        {/* Sidebar Mobile Overlay */}
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden transition-all duration-300"
          />
        )}

        {/* Content Area */}
        <main className="flex-1 w-full bg-[#F8FAFC] dark:bg-slate-950">
          <div className="max-w-[1600px] mx-auto p-6 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>


      {/* Mobile Bottom Nav */}
      {!isSearchOpen && (
        <nav className="lg:hidden fixed bottom-0 left-0 w-full z-[55] flex justify-around items-center h-20 px-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
          <Link to="/boards-dashboard" className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-2xl transition-all ${location.pathname === '/boards-dashboard' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-500'}`}>
            <DynamicIcon name="dashboard" isActive={location.pathname === '/boards-dashboard'} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Boards</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="flex flex-col items-center justify-center gap-1 text-slate-500 px-6 py-2"
          >
            <DynamicIcon name="menu_open" />
            <span className="text-[10px] font-black uppercase tracking-tighter">Menu</span>
          </button>
          <Link to="/notifications" className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-2xl transition-all ${location.pathname === '/notifications' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-500'}`}>
            <DynamicIcon name="notifications" isActive={location.pathname === '/notifications'} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Alerts</span>
          </Link>
          <Link to="/workspace-settings" className={`flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-2xl transition-all ${location.pathname === '/workspace-settings' ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'text-slate-500'}`}>
            <DynamicIcon name="settings" isActive={location.pathname === '/workspace-settings'} />
            <span className="text-[10px] font-black uppercase tracking-tighter">Settings</span>
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MainLayout;
