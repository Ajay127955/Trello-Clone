import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoardTimelineView = () => {
  const navigate = useNavigate();
  const [timeScale, setTimeScale] = React.useState('day');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12 h-screen flex flex-col">
      {/* Timeline Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-10 shrink-0">
        <div className="flex items-center gap-10">
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Timeline</h1>
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {['day', 'week', 'month'].map((scale) => (
              <button 
                key={scale}
                onClick={() => setTimeScale(scale)}
                className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${timeScale === scale ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {scale}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex -space-x-4">
            {[1,2,3].map(i => (
              <div key={i} className="w-12 h-12 rounded-2xl border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all">
                <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-12 h-12 rounded-2xl border-4 border-white dark:border-slate-900 bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-xl">+4</div>
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Deployment
          </button>
        </div>
      </div>

      {/* Timeline Grid Container */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col mb-12">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <div className="min-w-[1800px] h-full flex flex-col">
            {/* Timeline Ruler */}
            <div className="sticky top-0 z-30 flex bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800 h-16">
              <div className="w-80 shrink-0 flex items-center px-10 border-r border-slate-100 dark:border-slate-800 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Node / Sequence</div>
              <div className="flex-1 flex">
                {['MON 12', 'TUE 13', 'WED 14', 'THU 15', 'FRI 16', 'SAT 17', 'SUN 18', 'MON 19', 'TUE 20'].map((day, idx) => (
                  <div key={day} className={`flex-1 flex items-center justify-center border-r border-slate-50 dark:border-slate-800/50 text-[10px] font-black uppercase tracking-widest ${idx === 2 ? 'text-blue-600 bg-blue-600/5 font-black' : 'text-slate-400'}`}>
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Body */}
            <div className="flex-1 flex">
              {/* Sidebar Nodes */}
              <div className="w-80 shrink-0 border-r border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/10">
                {[
                  { name: 'Infrastructure', count: 3, color: 'blue' },
                  { name: 'Core Engine', count: 2, color: 'emerald' },
                  { name: 'Security Audit', count: 1, color: 'rose' }
                ].map((list) => (
                  <div key={list.name} className="border-b border-slate-100 dark:border-slate-800">
                    <div className="px-10 py-6 flex items-center justify-between bg-white/50 dark:bg-slate-900/50">
                      <span className="font-headline-md text-sm font-black text-slate-900 dark:text-white tracking-tight uppercase">{list.name}</span>
                      <span className={`text-[8px] font-black px-2.5 py-1 rounded-lg shadow-sm bg-slate-100 dark:bg-slate-800 text-slate-400`}>{list.count}</span>
                    </div>
                    <div className="px-6 py-4 space-y-3 min-h-[160px]">
                        {[...Array(list.count)].map((_, i) => (
                             <div key={i} className="px-5 py-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm text-[11px] font-bold text-slate-500 dark:text-slate-400 truncate hover:border-blue-600 transition-colors cursor-pointer group flex items-center justify-between">
                               Card Unit {i+1}
                               <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                             </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid Canvas */}
              <div className="flex-1 relative py-10">
                {/* Current Time Indicator */}
                <div className="absolute left-[22.2%] top-0 bottom-0 w-0.5 bg-blue-600 z-10 pointer-events-none shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <div className="bg-blue-600 text-[8px] text-white px-3 py-1.5 rounded-full absolute -left-7 top-6 shadow-2xl font-black uppercase tracking-widest border-2 border-white dark:border-slate-900">SYNC</div>
                </div>

                {/* Task Bars */}
                <div className="space-y-24 pt-12 px-10">
                  {[
                    { label: 'Cloud Distribution Phase', w: '40%', l: '0', c: 'blue' },
                    { label: 'Kernel Optimization Cycle', w: '30%', l: '15%', c: 'emerald' },
                    { label: 'Security Handshake Protocol', w: '35%', l: '40%', c: 'indigo' }
                  ].map((bar, i) => (
                    <div key={i} className="relative h-14">
                      <div className={`absolute left-[${bar.l}] w-[${bar.w}] h-14 bg-${bar.c === 'blue' ? 'blue' : bar.c === 'emerald' ? 'emerald' : 'indigo'}-600 rounded-[1.5rem] shadow-2xl flex items-center px-8 group cursor-pointer hover:scale-[1.02] transition-all active:scale-95`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                        <span className="text-white text-[10px] font-black uppercase tracking-widest truncate relative z-10">{bar.label}</span>
                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                           <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center">
                              <span className="material-symbols-outlined text-[12px] text-white">edit</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardTimelineView;
