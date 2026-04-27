import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArchivedItems = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState('boards');
  const [archivedBoards, setArchivedBoards] = React.useState([
    { id: 1, title: 'Product Roadmap Q1', description: 'Legacy product goals and milestone tracking.', archivedAt: '12 days ago', color: 'blue' },
    { id: 2, title: 'Marketing Assets', description: 'Old branding materials, logos, and high-res imagery.', archivedAt: '3 weeks ago', color: 'emerald' }
  ]);

  const handleRestore = (id) => {
    setArchivedBoards(prev => prev.filter(b => b.id !== id));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Vault</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Archived resources management</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {['boards', 'cards'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button className="bg-rose-50 dark:bg-rose-900/20 text-rose-600 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">delete_sweep</span>
            Purge All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Content List */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          {archivedBoards.map(board => (
            <div key={board.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group flex items-center gap-8">
              <div className={`h-24 w-24 rounded-3xl bg-${board.color}-500/10 flex items-center justify-center shrink-0`}>
                <span className={`material-symbols-outlined text-3xl text-${board.color}-600`}>inventory_2</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white tracking-tight">{board.title}</h3>
                  <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-2 py-0.5 rounded-lg">Board</span>
                </div>
                <p className="font-bold text-[11px] text-slate-400 mb-6">{board.description}</p>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => handleRestore(board.id)}
                    className="flex items-center gap-2 font-black text-[10px] text-blue-600 uppercase tracking-widest hover:underline"
                  >
                    <span className="material-symbols-outlined text-sm">unarchive</span>
                    Restore to active
                  </button>
                  <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-widest">Archived {board.archivedAt}</span>
                </div>
              </div>
              <button className="h-12 w-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))}

          {archivedBoards.length === 0 && (
            <div className="bg-slate-50 dark:bg-slate-950 rounded-[3rem] border-4 border-dashed border-slate-100 dark:border-slate-900 p-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-4xl text-slate-300">auto_delete</span>
              </div>
              <h3 className="font-headline-md text-2xl font-black text-slate-400 mb-2">Clean Slate</h3>
              <p className="font-bold text-xs text-slate-300 uppercase tracking-widest">No archived items found in this category</p>
            </div>
          )}
        </div>

        {/* Sidebar Status */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-slate-900 dark:bg-blue-600 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <span className="material-symbols-outlined text-[200px] text-white">cloud_queue</span>
            </div>
            <div className="relative z-10">
              <span className="font-black text-[10px] text-white/50 uppercase tracking-[0.2em] mb-4 block">Vault Capacity</span>
              <div className="text-6xl font-black tracking-tighter mb-6">84<span className="text-2xl opacity-40">%</span></div>
              <p className="font-bold text-[11px] text-white/70 leading-relaxed mb-10">You have 4.2GB of archived content. Automated purge policies are active for items older than 180 days.</p>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="w-[84%] bg-white h-full rounded-full transition-all duration-1000"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h4 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest mb-6">Policies</h4>
            <div className="space-y-6">
              {[
                { label: 'Auto-Purge', val: '90 Days', icon: 'schedule' },
                { label: 'Compression', val: 'Enabled', icon: 'compress' },
                { label: 'Encryption', val: 'AES-256', icon: 'verified_user' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-slate-400">{stat.icon}</span>
                    <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <span className="font-black text-[10px] text-slate-900 dark:text-white uppercase">{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchivedItems;
