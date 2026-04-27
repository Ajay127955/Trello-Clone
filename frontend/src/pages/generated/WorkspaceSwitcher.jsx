const WorkspaceSwitcher = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Switch</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Transition between project ecosystems</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg group-focus-within:text-blue-600 transition-colors">search</span>
            <input 
              type="text" 
              placeholder="Filter clusters..." 
              className="pl-12 pr-6 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all w-full md:w-80 shadow-sm"
            />
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            New Hub
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Primary Hub (Large Card) */}
        <div className="col-span-12 lg:col-span-8 group cursor-pointer relative overflow-hidden">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 h-full shadow-sm hover:shadow-2xl transition-all relative z-10">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-24 h-24 rounded-[2rem] bg-blue-600 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-5xl text-white">rocket_launch</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h2 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white tracking-tight">Engineering Global</h2>
                  <span className="px-4 py-1.5 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-blue-500/20 border border-white/10">Active Node</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 font-bold mb-8 leading-relaxed max-w-xl">Central infrastructure cluster for all core platform nodes and low-level development streams.</p>
                
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { label: 'Associates', val: '42', icon: 'group' },
                    { label: 'Nodes', val: '12', icon: 'grid_view' },
                    { label: 'Sync Status', val: '2h ago', icon: 'sync' }
                  ].map(stat => (
                    <div key={stat.label} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-[14px] text-slate-400">{stat.icon}</span>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                      </div>
                      <div className="text-lg font-black text-slate-900 dark:text-white">{stat.val}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:translate-x-1 transition-all flex items-center gap-3">
                    Enter Environment
                    <span className="material-symbols-outlined text-sm">east</span>
                  </button>
                  <button className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">settings</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Abstract pattern decor */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none z-0">
            <span className="material-symbols-outlined text-[320px] text-slate-900 dark:text-white">hub</span>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group h-full flex flex-col justify-between">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <span className="font-black text-[10px] text-white/50 uppercase tracking-[0.3em]">Operational Velocity</span>
                <span className="material-symbols-outlined text-2xl text-blue-400">insights</span>
              </div>
              <div className="text-7xl font-black tracking-tighter mb-4">284</div>
              <p className="text-white/60 font-bold text-sm leading-relaxed mb-10">Nodes synchronized across all clusters this operational cycle.</p>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                <div className="h-full bg-white w-[75%] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-1000"></div>
              </div>
              <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-white/40">
                <span>Optimization</span>
                <span>75% Capacity</span>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Hubs Section */}
        <div className="col-span-12 py-10">
           <div className="flex items-center gap-6 mb-12">
              <span className="font-black text-[10px] text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">Cluster Directory</span>
              <div className="h-[2px] w-full bg-slate-50 dark:bg-slate-800/50"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Marketing Hub', members: 12, icon: 'campaign', color: 'bg-orange-500' },
                { name: 'UX Design Lab', members: 8, icon: 'architecture', color: 'bg-purple-600' },
                { name: 'Strategic Ops', members: 5, icon: 'account_balance', color: 'bg-emerald-600' }
              ].map(hub => (
                <div key={hub.name} className="group bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 cursor-pointer">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${hub.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <span className="material-symbols-outlined text-2xl text-white">{hub.icon}</span>
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <h4 className="font-headline-md text-xl font-black text-slate-900 dark:text-white truncate tracking-tight">{hub.name}</h4>
                      <p className="font-black text-[9px] text-slate-400 uppercase tracking-widest">{hub.members} Associates</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-xl border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-sm">
                          <img src={`https://i.pravatar.cc/100?u=${i + hub.name.length}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-xl border-2 border-white dark:border-slate-900 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-[8px] font-black text-slate-400 shadow-sm">+9</div>
                    </div>
                    <button className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-all">
                      <span className="material-symbols-outlined text-lg">north_east</span>
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Add Hub Placeholder */}
              <div className="border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center gap-4 group hover:border-blue-600/50 hover:bg-blue-600/5 transition-all cursor-pointer min-h-[220px]">
                <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest group-hover:text-blue-600">Establish Hub</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSwitcher;
