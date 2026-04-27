import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterpriseAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Command Center</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Global oversight across 12 active clusters and 2,400+ authorized personnel.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">file_download</span>
            Export Analytics
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">person_add</span>
            Authorize Personnel
          </button>
        </div>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {[
          { label: 'Total Occupancy', value: '2,482 / 3,000', icon: 'person', trend: '+12 today', progress: 82, color: 'blue' },
          { label: 'Active Synchronization', value: '94.2%', icon: 'trending_up', trend: '+2.4% monthly', color: 'emerald' },
          { label: 'Active Clusters', value: '1,124', icon: 'hub', trend: 'Global scan active', color: 'purple' },
          { label: 'Security Protocol', value: 'Nexus Access', icon: 'verified_user', trend: 'SCIM Active', color: 'orange' }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all group overflow-hidden relative">
            <div className={`absolute -right-4 -top-4 w-20 h-20 bg-${stat.color}-600/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
            <div className="flex justify-between items-start mb-8 relative z-10">
              <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest">{stat.label}</span>
              <span className={`material-symbols-outlined text-${stat.color}-600`}>{stat.icon}</span>
            </div>
            <div className="relative z-10">
              <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full bg-${stat.color}-600`}></span>
                {stat.trend}
              </div>
              {stat.progress && (
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-6 overflow-hidden">
                  <div className={`bg-${stat.color}-600 h-full w-[${stat.progress}%]`}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left: Cluster Management */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-12 py-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
              <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em]">Operational Clusters</h3>
              <button className="text-blue-600 font-black text-[9px] uppercase tracking-widest hover:underline">View All Matrices</button>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800">
              {[
                { name: 'Engineering Global', members: 452, boards: 84, initial: 'EN', color: 'blue', status: 'High Velocity' },
                { name: 'Marketing Creative', members: 210, boards: 32, initial: 'MK', color: 'purple', status: 'Optimal' },
                { name: 'Operations & Logistics', members: 128, boards: 15, initial: 'OP', color: 'orange', status: 'Critical Path' }
              ].map((ws, i) => (
                <div key={i} className="p-10 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
                  <div className="flex items-center gap-8">
                    <div className={`w-16 h-16 bg-${ws.color}-600/5 rounded-2xl flex items-center justify-center text-${ws.color}-600 font-black text-xl shadow-inner group-hover:scale-110 transition-transform`}>
                      {ws.initial}
                    </div>
                    <div>
                      <div className="font-headline-md text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{ws.name}</div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{ws.members} Personnel • {ws.boards} Operational Nodes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="text-right hidden sm:block">
                      <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">Status</div>
                      <div className={`text-[10px] font-black uppercase tracking-widest text-${ws.color}-600`}>{ws.status}</div>
                    </div>
                    <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-xl transition-all">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-12 py-8 border-b border-slate-50 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-50 dark:bg-slate-950/50">
              <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em]">Personnel Activity</h3>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
                <input className="pl-14 pr-8 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest w-full md:w-80 focus:ring-2 focus:ring-blue-600 outline-none transition-all shadow-inner" placeholder="Search Personnel..." type="text" />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/50">
                    <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">ID / Name</th>
                    <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">Primary Cluster</th>
                    <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">Clearance</th>
                    <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest text-right">Ops</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                  {[
                    { name: 'Alex Rivera', email: 'alex.r@enterprise.com', cluster: 'Engineering Global', role: 'Workspace Admin', time: '2 mins ago', img: 'https://i.pravatar.cc/100?img=1' },
                    { name: 'Jordan Smyth', email: 'jordan.s@enterprise.com', cluster: 'Marketing Creative', role: 'Personnel', time: '1 hour ago', img: 'https://i.pravatar.cc/100?img=2' }
                  ].map((m, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
                      <td className="px-12 py-8 flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl ring-2 ring-blue-600/10 group-hover:scale-110 transition-transform">
                          <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{m.name}</div>
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{m.email}</div>
                        </div>
                      </td>
                      <td className="px-12 py-8 font-bold text-sm text-slate-600 dark:text-slate-300">{m.cluster}</td>
                      <td className="px-12 py-8">
                        <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${m.role === 'Workspace Admin' ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                          {m.role}
                        </span>
                      </td>
                      <td className="px-12 py-8 text-right">
                        <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-xl transition-all">
                          <span className="material-symbols-outlined text-lg">tune</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Security & Feed */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">security</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <span className="material-symbols-outlined text-blue-400">gpp_maybe</span>
                <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-blue-300">Security Synthesis</h3>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'SCIM Provisioning', status: 'Sync Active', sub: 'Last pulse: 12m ago', color: 'emerald' },
                  { label: 'Domain Verification', status: 'Verified', sub: '4 Domains authorized', color: 'blue' }
                ].map((s, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all cursor-default">
                    <div className="font-black text-[10px] uppercase tracking-widest mb-1">{s.label}</div>
                    <div className={`text-[9px] font-black uppercase tracking-widest text-${s.color}-400 flex items-center gap-2`}>
                      <span className={`w-1.5 h-1.5 rounded-full bg-${s.color}-400 animate-pulse`}></span>
                      {s.status}
                    </div>
                  </div>
                ))}
                <button className="w-full py-5 rounded-2xl border-2 border-white/10 hover:border-white/30 font-black text-[9px] uppercase tracking-widest text-white transition-all active:scale-95">
                  Nexus Security Settings
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative">
            <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-10">Audit Log Stream</h3>
            <div className="space-y-8">
              {[
                { user: 'Sarah Chen', action: 'initialized workspace', target: '"Global Design Ops"', time: '2:45 PM', icon: 'history', color: 'blue' },
                { user: 'System', action: 'updated global', target: 'permissions', time: '10:12 AM', icon: 'policy', color: 'slate' },
                { user: 'Security', action: 'failed login', target: 'attempts detected', time: 'Yesterday', icon: 'warning', color: 'red' }
              ].map((log, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-${log.color}-600/5 flex items-center justify-center text-${log.color}-600 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-lg">{log.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="text-slate-900 dark:text-white font-black">{log.user}</span> {log.action} <span className="italic">{log.target}</span>
                    </p>
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1 block">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-12 py-4 text-center text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
              Expand Full Audit Stream
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

    </>
  );
};

export default EnterpriseAdminDashboard;
