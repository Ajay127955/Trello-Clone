import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkspaceTableView = () => {
  const navigate = useNavigate();
  const [filterActive, setFilterActive] = React.useState(false);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* View Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Workspace</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Cross-functional table view</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {[
              { label: 'Board', path: '/boards-dashboard' },
              { label: 'Table', active: true },
              { label: 'Calendar', path: '/board-calendar-view' }
            ].map((v) => (
              <button 
                key={v.label}
                onClick={() => v.path && navigate(v.path)}
                className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${v.active ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setFilterActive(!filterActive)}
            className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                filterActive 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600'
            }`}
          >
            <span className="material-symbols-outlined text-lg">tune</span>
            <span>Refine</span>
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            Task
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden mb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-10 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] w-[40%]">Resource</th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">State</th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Tags</th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Ownership</th>
                <th className="px-10 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">ETA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {[
                { name: 'System Architecture Audit', status: 'In Flux', statusColor: 'blue', date: 'Oct 24', members: 2 },
                { name: 'Marketing Strategy Phase II', status: 'Pending', statusColor: 'slate', date: 'Oct 18', members: 1, urgent: true },
                { name: 'API Schema Optimization', status: 'Deployed', statusColor: 'green', date: 'Oct 12', members: 3, done: true },
                { name: 'User Experience Research', status: 'In Flux', statusColor: 'blue', date: 'Oct 28', members: 1 }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group cursor-pointer">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors">layers</span>
                      </div>
                      <span className={`font-headline-md text-lg font-black text-slate-900 dark:text-white tracking-tight ${row.done ? 'line-through opacity-30' : ''}`}>{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm ${
                      row.statusColor === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30' :
                      row.statusColor === 'green' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' :
                      'bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/30"></div>
                      <div className={`w-3 h-3 rounded-full ${row.urgent ? 'bg-rose-500 shadow-rose-500/30' : 'bg-slate-200 dark:bg-slate-700'} shadow-lg`}></div>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex -space-x-3">
                      {[...Array(row.members)].map((_, j) => (
                        <div key={j} className="w-10 h-10 rounded-2xl bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all">
                            <img src={`https://i.pravatar.cc/150?u=${row.name}${j}`} alt="Member" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <div className={`flex items-center gap-3 font-black text-[10px] uppercase tracking-widest ${row.urgent ? 'text-rose-500' : row.done ? 'text-slate-300' : 'text-slate-400'}`}>
                      <span className="material-symbols-outlined text-[16px]">{row.urgent ? 'bolt' : row.done ? 'verified' : 'timer'}</span>
                      {row.date}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 dark:bg-blue-600 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between group overflow-hidden relative text-white">
          <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
             <span className="material-symbols-outlined text-[180px] text-white">dataset</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-black text-[10px] text-white/50 uppercase tracking-[0.2em] mb-4">Total Velocity</h3>
            <p className="text-7xl font-black tracking-tighter">42<span className="text-2xl opacity-40 uppercase ml-2">Units</span></p>
          </div>
          <div className="relative z-10 mt-12 flex items-center gap-2 font-black text-[10px] text-emerald-400 uppercase tracking-widest bg-emerald-400/10 w-fit px-5 py-2.5 rounded-2xl">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>+18% efficiency spike</span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-10">Domain Saturation</h3>
          <div className="space-y-8">
            {[
              { label: 'Cloud Architecture', val: '85%', color: 'blue' },
              { label: 'Interface Design', val: '64%', color: 'emerald' },
              { label: 'Security Protocols', val: '92%', color: 'rose' }
            ].map(stat => (
              <div key={stat.label}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">{stat.label}</span>
                  <span className={`text-[11px] font-black text-${stat.color}-500`}>{stat.val}</span>
                </div>
                <div className="w-full bg-slate-50 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className={`bg-${stat.color}-500 h-full rounded-full transition-all duration-1000 shadow-lg shadow-${stat.color}-500/20`} style={{ width: stat.val }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-600 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group text-white">
          <div className="absolute -right-8 -bottom-8 opacity-20 group-hover:scale-110 transition-transform duration-1000">
            <span className="material-symbols-outlined text-[200px] text-white">rocket_launch</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-black text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4">Milestone Pulse</h3>
            <p className="text-4xl font-black tracking-tight leading-none mb-6">Product Launch Phase III</p>
            <p className="text-indigo-100 font-bold text-[13px] opacity-70 leading-relaxed max-w-[200px]">
              Final integration cycle active. 48 hours to production cutoff.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
