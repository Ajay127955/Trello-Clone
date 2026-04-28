import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SmartLinksManager = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>Integrations</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Smart Links Manager</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Nexus Bridge</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Configure bi-directional synchronization protocols for the global ecosystem.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">history</span>
            Sync Logs
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">add</span>
            Initialize Node
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left Column: Active Connections */}
        <div className="col-span-12 lg:col-span-8 space-y-10">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative group">
            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">hub</span>
            </div>
            <div className="px-12 py-10 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50 relative z-10">
              <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em]">Operational Nodes</h3>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Active Synchronization</span>
              </div>
            </div>
            <div className="divide-y divide-slate-50 dark:divide-slate-800 relative z-10">
              {[
                { name: 'Jira Software', id: 'AT-FINANCE-OPS', status: 'Synced 2m ago', icon: 'developer_board', color: 'blue', stats: '142 Live Nodes' },
                { name: 'Confluence Wiki', id: 'PRODUCT-SPECS', status: 'Synced 14m ago', icon: 'description', color: 'blue', stats: '38 Previews' },
                { name: 'Slack Comms', id: '#ops-updates', status: 'Streaming active', icon: 'forum', color: 'indigo', stats: 'Real-time' }
              ].map((tool, i) => (
                <div key={i} className="p-10 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group/item">
                  <div className="flex items-center gap-8">
                    <div className={`w-16 h-16 bg-${tool.color}-600/5 rounded-2xl flex items-center justify-center text-${tool.color}-600 font-black text-xl shadow-inner group-hover/item:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-3xl">{tool.icon}</span>
                    </div>
                    <div>
                      <div className="font-headline-md text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                        {tool.name}
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      </div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Matrix: {tool.id} • {tool.status}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-12">
                    <div className="text-right hidden sm:block">
                      <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1">{tool.stats}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">Sync Active</div>
                    </div>
                    <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-2xl transition-all">
                      <span className="material-symbols-outlined">settings</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-9xl">sync_alt</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h3 className="font-headline-xl text-3xl font-black mb-4 tracking-tighter text-blue-300">Bi-Directional Core</h3>
                <p className="text-blue-100/60 font-medium text-sm leading-relaxed mb-10 max-w-lg italic">The Nexus Sync Engine automatically harmonizes data across the global infrastructure, ensuring 100% telemetry fidelity.</p>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { label: 'Uptime', value: '99.98%', icon: 'verified' },
                    { label: 'Latency', value: '142ms', icon: 'bolt' },
                    { label: 'Syncs/24h', value: '14.2k', icon: 'cached' }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-[14px] text-blue-400">{stat.icon}</span>
                        <span className="font-black text-[8px] uppercase tracking-widest text-blue-300">{stat.label}</span>
                      </div>
                      <div className="text-xl font-black tracking-tight">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-80 bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] relative group/panel overflow-hidden">
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl group-hover/panel:scale-150 transition-transform duration-1000"></div>
                <h4 className="font-black text-[9px] uppercase tracking-[0.2em] text-blue-300 mb-8 relative z-10">Bridge Hierarchy</h4>
                <div className="space-y-6 relative z-10">
                  {[
                    { label: 'Productive Flow Master', icon: 'priority_high', active: true },
                    { label: 'Nexus Gateway', icon: 'mediation' },
                    { label: 'Auto-Merge Resolve', icon: 'link_off' }
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${step.active ? 'bg-blue-600 border-blue-600 shadow-xl' : 'bg-white/5 border-white/10 opacity-50'}`}>
                        <span className="material-symbols-outlined text-sm">{step.icon}</span>
                      </div>
                      <span className={`text-[11px] font-black uppercase tracking-widest ${step.active ? 'text-white' : 'text-slate-400'}`}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Settings & Security */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative">
            <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-10">Preview Defaults</h3>
            <div className="space-y-8">
              <div>
                <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-4 block ml-1">Visualization Mode</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-6 bg-blue-600 text-white rounded-[1.5rem] text-center shadow-2xl shadow-blue-600/20 active:scale-95 transition-all">
                    <span className="material-symbols-outlined block text-2xl mb-2">dock_to_right</span>
                    <span className="text-[10px] font-black uppercase tracking-widest">Compact</span>
                  </button>
                  <button className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] text-center hover:bg-white dark:hover:bg-slate-900 transition-all active:scale-95">
                    <span className="material-symbols-outlined block text-2xl mb-2 text-slate-400">aspect_ratio</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Expanded</span>
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { label: 'Auto-preview links', active: true },
                  { label: 'Show node metadata', active: true },
                  { label: 'Allow link attachments', active: false }
                ].map((toggle, i) => (
                  <div key={i} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-[11px] font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest group-hover:text-blue-600 transition-colors">{toggle.label}</span>
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${toggle.active ? 'bg-blue-600 shadow-lg shadow-blue-600/20' : 'bg-slate-200 dark:bg-slate-800'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${toggle.active ? 'right-1' : 'left-1'}`}></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-10 border-t border-slate-50 dark:border-slate-800">
                <h4 className="font-black text-[9px] uppercase tracking-widest text-slate-900 dark:text-white mb-4">Security Protocol</h4>
                <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-8 italic">External telemetry is proxied via Nexus Secure Gateway. RSA-4096 encryption active.</p>
                <button className="w-full py-4 text-blue-600 border-2 border-blue-600/20 hover:border-blue-600 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all active:scale-95">Rotate Auth Tokens</button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group/drive">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-600/5 rounded-full blur-3xl group-hover/drive:scale-150 transition-transform duration-1000"></div>
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600/5 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
                  <span className="material-symbols-outlined text-2xl">add_to_drive</span>
                </div>
                <div>
                  <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em]">Drive Stream</h3>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest mt-1">Shared Cluster: Active</p>
                </div>
              </div>
              <button className="text-emerald-600 text-[9px] font-black uppercase tracking-widest hover:underline">Change</button>
            </div>
            <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-6 flex items-center justify-between border border-slate-100 dark:border-slate-800 relative z-10 shadow-inner">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-amber-500 text-2xl">folder</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">/2024-Campaign-Assets</span>
              </div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">1.2 GB</span>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-10">Account Matrix</h3>
            <div className="space-y-6">
              {[
                { label: 'Jira API Stream', status: 'Valid', color: 'emerald' },
                { label: 'Google OAuth Node', status: 'Active', color: 'emerald' },
                { label: 'Slack Webhook', status: 'Ready', color: 'emerald' },
                { label: 'Figma Bridge', status: 'Expired', color: 'amber' }
              ].map((conn, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className={`w-2.5 h-2.5 rounded-full bg-${conn.color}-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:scale-150 transition-transform`}></div>
                  <span className="text-[11px] font-black text-slate-600 dark:text-slate-400 uppercase tracking-widest flex-1">{conn.label}</span>
                  <span className={`text-[9px] font-black uppercase tracking-widest text-${conn.color}-600`}>{conn.status}</span>
                </div>
              ))}
            </div>
            <button className="mt-10 w-full py-4 bg-slate-50 dark:bg-slate-950 text-slate-400 rounded-2xl text-[9px] font-black uppercase tracking-widest border border-slate-100 dark:border-slate-800 hover:bg-slate-900 hover:text-white transition-all active:scale-95">Re-authenticate All Nodes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartLinksManager;
