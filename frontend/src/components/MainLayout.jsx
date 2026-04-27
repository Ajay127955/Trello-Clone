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
  
  // AI Chat State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hi ${user?.username || 'there'}! I'm your Productive Flow AI. How can I help you manage your boards today?` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isAiTyping, setIsAiTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

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
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsAiTyping(true);

    try {
      const response = await api.post('ai/chat/', { message: userMessage });
      setMessages(prev => [...prev, { role: 'assistant', content: response.data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Please check your API key." }]);
    } finally {
      setIsAiTyping(false);
    }
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
              <Link to="/billing-invoices" className={getNavLinkClass('/billing-invoices')}>
                <DynamicIcon name="payments" isActive={location.pathname === '/billing-invoices'} />
                <span>Billing & Plans</span>
              </Link>
            </div>

            <div className="mt-10 mb-2 px-3 text-[11px] font-black text-slate-400 uppercase tracking-widest font-heading">Enterprise</div>
            <div className="space-y-1">
              <Link to="/enterprise-admin-dashboard" className={getNavLinkClass('/enterprise-admin-dashboard')}>
                <DynamicIcon name="admin_panel_settings" isActive={location.pathname === '/enterprise-admin-dashboard'} />
                <span>Admin Console</span>
              </Link>
              <Link to="/ai-command-center" className={getNavLinkClass('/ai-command-center')}>
                <DynamicIcon name="psychology" isActive={location.pathname === '/ai-command-center'} />
                <span>AI Insights</span>
              </Link>
              <Link to="/strategic-roadmap" className={getNavLinkClass('/strategic-roadmap')}>
                <DynamicIcon name="map" isActive={location.pathname === '/strategic-roadmap'} />
                <span>Roadmap</span>
              </Link>
              <Link to="/enterprise-security" className={getNavLinkClass('/enterprise-security')}>
                <DynamicIcon name="verified_user" isActive={location.pathname === '/enterprise-security'} />
                <span>Security</span>
              </Link>
            </div>

            <div className="mt-10 mb-2 px-3 text-[11px] font-black text-slate-400 uppercase tracking-widest font-heading">Resources</div>
            <div className="space-y-1">
              <Link to="/power-ups-directory" className={getNavLinkClass('/power-ups-directory')}>
                <DynamicIcon name="bolt" isActive={location.pathname === '/power-ups-directory'} />
                <span>Power-Ups</span>
              </Link>
              <Link to="/team-workload-view" className={getNavLinkClass('/team-workload-view')}>
                <DynamicIcon name="groups" isActive={location.pathname === '/team-workload-view'} />
                <span>Team Insights</span>
              </Link>
              <Link to="/automation-butler" className={getNavLinkClass('/automation-butler')}>
                <DynamicIcon name="robot_2" isActive={location.pathname === '/automation-butler'} />
                <span>Butler AI</span>
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

      {/* Floating AI Assistant */}
      <div className="fixed bottom-8 right-8 z-[1000]">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="w-96 h-[600px] bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden mb-6"
            >
              <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex justify-between items-center shadow-lg shadow-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-heading tracking-tight">Productive AI</h3>
                    <p className="text-[10px] text-white/70 font-bold uppercase tracking-wider">Neural Assistant</p>
                  </div>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-2 rounded-xl transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 dark:bg-slate-950 custom-scrollbar">
                {messages.map((m, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i} 
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'}`}>
                      {m.content}
                    </div>
                  </motion.div>
                ))}
                {isAiTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1.5">
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleSendMessage} className="p-6 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-2xl px-5 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all font-body"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit" 
                  className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg shadow-blue-200"
                >
                  <span className="material-symbols-outlined">send</span>
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-16 h-16 rounded-[24px] flex items-center justify-center text-white shadow-2xl transition-all relative ${isChatOpen ? 'bg-slate-800' : 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-blue-200 shadow-lg'}`}
        >
          <span className="material-symbols-outlined text-3xl">
            {isChatOpen ? 'close' : 'auto_awesome'}
          </span>
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-4 border-white dark:border-slate-950 animate-pulse"></span>
          )}
        </motion.button>
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
