import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoardCalendarView = () => {
  const navigate = useNavigate();
  const [viewType, setViewType] = React.useState('month');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12 h-screen flex flex-col">
      {/* Calendar Header */}
      <section className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shrink-0">
        <div className="flex items-center gap-10">
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white tracking-tighter">October 2026</h1>
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            <button className="px-8 py-2.5 text-[10px] font-black uppercase tracking-widest bg-white dark:bg-slate-700 text-blue-600 shadow-xl rounded-xl transition-all active:scale-95">Today</button>
            <div className="flex ml-4">
              <button className="p-3 text-slate-400 hover:text-blue-600 transition-colors active:scale-90"><span className="material-symbols-outlined text-2xl">chevron_left</span></button>
              <button className="p-3 text-slate-400 hover:text-blue-600 transition-colors active:scale-90"><span className="material-symbols-outlined text-2xl">chevron_right</span></button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {['Month', 'Week'].map((v) => (
              <button 
                key={v}
                onClick={() => setViewType(v.toLowerCase())}
                className={`px-10 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${viewType === v.toLowerCase() ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {v}
              </button>
            ))}
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Event
          </button>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col mb-12">
        {/* Day Labels */}
        <div className="grid grid-cols-7 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{day}</div>
          ))}
        </div>
        
        {/* Grid Area */}
        <div className="flex-1 grid grid-cols-7 grid-rows-5 overflow-y-auto scrollbar-hide">
          {/* Week 1 (Partial) */}
          {[26, 27, 28, 29, 30].map((d) => (
            <div key={d} className="border-r border-b border-slate-50 dark:border-slate-800/30 p-8 bg-slate-50/30 dark:bg-slate-950/20">
              <span className="text-[10px] text-slate-300 dark:text-slate-800 font-black">{d}</span>
            </div>
          ))}
          <div className="border-r border-b border-slate-50 dark:border-slate-800/30 p-8 group cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all">
            <div className="flex justify-between items-center">
               <span className="text-[10px] text-slate-900 dark:text-white font-black">1</span>
               <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-lg shadow-blue-600/50"></span>
            </div>
            <div className="mt-6">
              <div className="px-5 py-3 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-2xl shadow-2xl shadow-blue-600/20 truncate">Sprint Initializer</div>
            </div>
          </div>
          <div className="border-b border-slate-50 dark:border-slate-800/30 p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all">
            <span className="text-[10px] text-slate-900 dark:text-white font-black">2</span>
          </div>

          {/* Week 2 */}
          {[3, 4, 5, 6, 7, 8, 9].map((d) => (
            <div key={d} className={`border-r border-b border-slate-50 dark:border-slate-800/30 p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all ${d === 6 ? 'bg-blue-600/5 dark:bg-blue-600/5 relative' : ''}`}>
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[10px] font-black ${d === 6 ? 'text-blue-600' : 'text-slate-900 dark:text-white'}`}>{d}</span>
                {d === 6 && <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.8)] border-2 border-white dark:border-slate-900"></div>}
              </div>
              {d === 4 && <div className="px-5 py-3 bg-slate-900 dark:bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-2xl shadow-2xl truncate">Infra Audit</div>}
              {d === 6 && (
                <div className="space-y-3">
                  <div className="px-5 py-3 bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 text-[9px] font-black uppercase tracking-widest rounded-2xl border border-rose-500/20 truncate">Core Sync</div>
                  <div className="px-5 py-3 bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest rounded-2xl shadow-2xl truncate">Node Launch</div>
                </div>
              )}
            </div>
          ))}

          {/* Week 3 */}
          {[10, 11, 12, 13, 14, 15, 16].map((d) => (
            <div key={d} className={`border-r border-b border-slate-50 dark:border-slate-800/30 p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all ${d === 12 ? 'bg-rose-600/5' : ''}`}>
              <span className={`text-[10px] font-black ${d === 12 ? 'text-rose-500' : 'text-slate-900 dark:text-white'}`}>{d}</span>
              {d === 12 && (
                <div className="mt-6">
                  <div className="px-5 py-3 bg-rose-600 text-white text-[9px] font-black uppercase tracking-widest rounded-2xl shadow-2xl flex items-center justify-between">
                    <span>Deadline</span>
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                  </div>
                </div>
              )}
              {d === 13 && <div className="mt-6 px-5 py-3 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-2xl truncate border border-slate-200 dark:border-slate-700">Team Sync</div>}
            </div>
          ))}

          {/* Fill out the rest */}
          {[...Array(14)].map((_, i) => (
            <div key={i+17} className="border-r border-b border-slate-50 dark:border-slate-800/30 p-8 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all">
              <span className="text-[10px] text-slate-900 dark:text-white font-black">{i+17}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
