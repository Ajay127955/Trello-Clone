import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

const MainLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  
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
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm fixed top-0 z-50 flex justify-between items-center w-full px-4 h-14">
        <div className="flex items-center gap-4">
          <Link to="/boards-dashboard" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-2xl font-black">grid_view</span>
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white hidden sm:block">Trello</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1 ml-4">
            <button onClick={() => navigate('/boards-dashboard')} className="px-3 py-1.5 text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Workspaces</button>
            <button onClick={() => navigate('/boards-dashboard')} className="px-3 py-1.5 text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Recent</button>
            <button onClick={() => navigate('/create-board')} className="bg-blue-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition-all text-sm ml-2">Create</button>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative hidden lg:block">
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-64" 
              placeholder="Search boards..." 
              type="text"
            />
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-full transition-colors relative"
            >
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">notifications</span>
              {notifications.some(n => !n.read) && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden z-[100]">
                <div className="p-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">Notifications</h3>
                  <button onClick={handleMarkAllRead} className="text-xs text-blue-600 hover:underline">Mark all as read</button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.length === 0 ? (
                    <div className="p-8 text-center text-slate-400 text-sm">No new notifications</div>
                  ) : (
                    notifications.map(n => (
                      <div key={n.id} className={`p-4 border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors ${!n.read ? 'bg-blue-50/50 dark:bg-blue-900/10' : ''}`}>
                        <p className="text-sm text-slate-700 dark:text-slate-300">{n.message}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{new Date(n.created_at).toLocaleString()}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          <div 
            onClick={() => navigate('/member-profile')}
            className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs cursor-pointer hover:scale-105 transition-transform ml-2"
          >
            {user?.username?.substring(0, 2).toUpperCase() || 'U'}
          </div>
        </div>
      </header>

      <div className="flex pt-14 min-h-screen">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col gap-1 p-3 h-full w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 fixed left-0">
          <nav className="space-y-1">
            <Link to="/boards-dashboard" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-all ${location.pathname === '/boards-dashboard' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'}`}>
              <span className="material-symbols-outlined">dashboard</span>
              <span>Boards</span>
            </Link>
            <Link to="/template-library" className={`flex items-center gap-3 px-3 py-2 rounded-md font-medium text-sm transition-all ${location.pathname === '/template-library' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800'}`}>
              <span className="material-symbols-outlined">description</span>
              <span>Templates</span>
            </Link>
            <Link to="/boards-dashboard" className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-md font-medium text-sm">
              <span className="material-symbols-outlined">trending_up</span>
              <span>Activity</span>
            </Link>
          </nav>

          <div className="mt-8 px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Workspaces</div>
          <nav className="space-y-1">
            <Link to="/workspace-settings" className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-md font-medium text-sm">
              <span className="material-symbols-outlined">settings</span>
              <span>Workspace Settings</span>
            </Link>
          </nav>
        </aside>

        {/* Content Area */}
        <main className="flex-1 lg:ml-64 w-full">
          <Outlet />
        </main>
      </div>

      {/* Floating AI Chat Assistant */}
      <div className="fixed bottom-6 right-6 z-[1000] flex flex-col items-end">
        {isChatOpen && (
          <div className="w-80 sm:w-96 h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-10 duration-300">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-xl">auto_awesome</span>
                <span className="font-bold text-sm tracking-tight">Productive Flow AI</span>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 rounded-tl-none'}`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isAiTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask AI anything..."
                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-all active:scale-90 shadow-lg shadow-blue-100">
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>
        )}
        
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all hover:scale-110 active:scale-90 relative ${isChatOpen ? 'bg-slate-800 rotate-90' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:rotate-12'}`}
        >
          <span className="material-symbols-outlined text-2xl">
            {isChatOpen ? 'close' : 'auto_awesome'}
          </span>
          {!isChatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          )}
        </button>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <Link to="/boards-dashboard" className="flex flex-col items-center justify-center text-slate-500 px-3 py-1">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium">Boards</span>
        </Link>
        <Link to="/notifications" className="flex flex-col items-center justify-center text-slate-500 px-3 py-1">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium">Alerts</span>
        </Link>
        <Link to="/workspace-settings" className="flex flex-col items-center justify-center text-slate-500 px-3 py-1">
          <span className="material-symbols-outlined">settings</span>
          <span className="text-[10px] font-medium">Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default MainLayout;
