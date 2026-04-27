import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = async () => {
    try {
      const response = await api.get('boards/');
      setBoards(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/landing');
  };

  if (loading) return null;

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 shadow-sm flex justify-between items-center w-full px-4 h-14 z-50 fixed top-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-600 cursor-pointer">grid_view</span>
          <span className="text-xl font-black tracking-tight text-slate-900">Trello</span>
          <nav className="hidden md:flex items-center gap-1 ml-4">
            <button className="flex items-center gap-1 px-3 py-1.5 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg">
              <span className="text-sm">Workspaces</span>
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-blue-600 font-black border-b-2 border-blue-600">
              <span className="text-sm">Recent</span>
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 text-slate-600 font-medium hover:bg-slate-100 transition-colors rounded-lg">
              <span className="text-sm">Starred</span>
            </button>
            <button className="bg-primary text-white px-4 py-1.5 rounded-lg font-black hover:opacity-90 active:scale-95 transition-all text-xs ml-2">
              Create
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none w-64" placeholder="Search" type="text" />
          </div>
          <span className="material-symbols-outlined text-slate-600 cursor-pointer p-2 hover:bg-slate-100 rounded-full">notifications</span>
          <div 
            onClick={handleLogout}
            className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xs cursor-pointer hover:opacity-80"
          >
            {user?.username?.substring(0, 2).toUpperCase() || 'JD'}
          </div>
        </div>
      </header>

      <div className="flex pt-14 min-h-screen">
        <aside className="hidden lg:flex flex-col gap-1 p-3 h-full w-64 border-r border-slate-200 bg-slate-50 fixed left-0 h-[calc(100vh-3.5rem)]">
          <div className="px-3 py-4 border-b border-slate-200 mb-2">
            <span className="text-lg font-black text-slate-800">Main Menu</span>
          </div>
          <Link to="/" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl font-black text-sm transition-transform active:translate-x-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Boards</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-xl font-bold text-sm transition-colors" href="#">
            <span className="material-symbols-outlined">group</span>
            <span>Workspaces</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-xl font-bold text-sm transition-colors" href="#">
            <span className="material-symbols-outlined">history</span>
            <span>Recent</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-xl font-bold text-sm transition-colors" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span>Starred</span>
          </a>
          <div className="mt-6 px-3 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">Workspace</div>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 rounded-xl font-bold text-sm" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Settings</span>
          </a>
        </aside>

        <main className="flex-1 lg:ml-64 p-8 max-w-7xl mx-auto w-full">
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-slate-400" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Starred boards</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {boards.slice(0, 2).map((board, idx) => (
                <BoardCard key={board.id} board={board} index={idx} isStarred={true} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-slate-400">person</span>
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Your boards</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {boards.map((board, idx) => (
                <BoardCard key={board.id} board={board} index={idx} />
              ))}
              <div className="group relative h-32 rounded-2xl overflow-hidden cursor-pointer bg-slate-100 hover:bg-slate-200 transition-all flex items-center justify-center border-2 border-dashed border-slate-300 active:scale-95">
                <div className="flex flex-col items-center gap-1 text-slate-600">
                  <span className="text-sm font-black">Create new board</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Free Plan</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Workspaces</h2>
              <button className="text-primary hover:underline text-xs font-black uppercase tracking-widest">View all</button>
            </div>
            <div className="bg-white rounded-2xl border border-slate-100 p-8 flex flex-col md:flex-row gap-8 items-center shadow-sm">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-black text-primary">T</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-black text-slate-900 tracking-tight">Productive Workspace</h3>
                <p className="text-slate-500 text-sm mt-1 font-medium">Manage your team's projects, boards, and members all in one place.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">dashboard</span>
                  Boards
                </button>
                <button className="bg-slate-50 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-xl text-xs font-black transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  Members
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      <button className="fixed bottom-10 right-10 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-40">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

const BoardCard = ({ board, index, isStarred = false }) => {
  const navigate = useNavigate();
  const images = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB1WiKMKxSQgdA8bWza3PXPpzFKBr3x0Q34uYZ5nUu9tl4naqOXISZ2hx9eZZ5jz_QEFoas0EkHK5AWhwA_BCM3eD6aOsA2WxY63eHngBVO-kiVoJDJTKdMBOMTYIQuAgoNZ434qTbusAUU4Kv7vL6Gqcb900iJkMS5-RMMR56EveMxQpjwziYfxKV5vPGWVxO5e-5NnaRiFLtMbyKgO3fXC96nf7N4wOPfC5myNisTCJpntzlTDo3k8-jdDZnVKA0g_BXcsOXrhWZO",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDzFBrc1TRc1Ia77RHMuvSOTBfwpLnIqWux4ogBIlKwjjyhqe9JMzeOURasW2MZ25FGAa6km2eVwVYzSoXCpDZcuaGqZu8kqf2uW99HvzzNtn88umrX-XzbiwdItNga3Vne6A4HzJ4UNKDtpLp_Nt87ysJEFyfbpneRFtR4zkMrUmJ443Ij-Hu1ttdqtGJXgN3x7yQbOYfxGzMPVPM_fvibQUkXO75nJmioospJnM62Ur3PQ9Phelbu-G88wkPZcbgDA5FCMB3O9O1",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBy5v77e7ue2-BqEYnredBgr86PgytQPRVaP_7qMM9JC_A7AEugQ9KXqLQp8FbSEvR087S2DPxUJQaoE8aML7U021JQpZ8xEYz7ztFoz6xyTIRRJ9FvPXVK7plnFwveNZOOLrmg3P4QMHzUNzd1WBxk1TgF376ooHTUvt7yVJRIl9bw146ygvAVWIQ0lolZE_gDREhf3i1bJjbm0gELnTdfmA8xqsCM_fAUsWYeJcjBEbjmlFPS3g3KbXDdQK_sTdxr9wdyx-x-Mlyg"
  ];
  const colors = ["bg-blue-600", "bg-emerald-600", "bg-orange-500", "bg-purple-600"];
  
  const bgImage = images[index % images.length];
  const bgColor = colors[index % colors.length];

  return (
    <div 
      onClick={() => navigate(`/board/${board.id}`)}
      className="group relative h-32 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all active:scale-95 border border-slate-100"
    >
      <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={bgImage} alt={board.title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-between">
        <span className="text-white font-black text-lg tracking-tight">{board.title}</span>
        <div className={`flex justify-between items-center ${isStarred ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
          <span className="material-symbols-outlined text-white/80 hover:text-white" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
