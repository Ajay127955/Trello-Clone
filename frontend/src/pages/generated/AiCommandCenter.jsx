import React from 'react';
import { useNavigate } from 'react-router-dom';

const AiCommandCenter = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = React.useState('');
  const [activeTab, setActiveTab] = React.useState('7d');

  const handleDeploy = () => {
    if (!prompt.trim()) return;
    alert(`AI processing: "${prompt}"... This would typically create a new Butler rule or trigger an automation flow.`);
    setPrompt('');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* AI Command Input Section */}
      <section className="mb-20">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden p-12 md:p-16 border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
              <div>
                <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter flex items-center gap-4">
                  <span className="material-symbols-outlined text-blue-600 text-5xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                  Nexus AI
                </h1>
                <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Operational Logic Synthesis Engine</p>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-blue-600/5 rounded-full border border-blue-600/10">
                <span className="material-symbols-outlined text-blue-600 text-sm">tips_and_updates</span>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Protocol Gemini-Pro-3.1</span>
              </div>
            </div>
            <div className="relative">
              <textarea 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 border-2 border-slate-100 dark:border-slate-800 focus:border-blue-600 focus:bg-white dark:focus:bg-slate-900 transition-all rounded-[2rem] p-10 text-xl font-bold text-slate-900 dark:text-white resize-none placeholder:text-slate-300 dark:placeholder:text-slate-700 min-h-[160px] shadow-inner" 
                placeholder="e.g., 'Synchronize Marketing Board high-velocity nodes with Slack briefing every Friday at 0900...'"
              />
              <div className="absolute bottom-8 right-8 flex items-center gap-4">
                <button className="w-14 h-14 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-2xl transition-all">
                  <span className="material-symbols-outlined text-2xl">mic</span>
                </button>
                <button 
                  onClick={handleDeploy}
                  className="bg-slate-900 dark:bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-4 hover:shadow-2xl active:scale-95 transition-all shadow-xl group"
                >
                  Synthesize Logic
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">bolt</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Insights */}
      <section className="grid grid-cols-12 gap-8 mb-20">
        {/* Large Summary Card */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] p-12 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col relative overflow-hidden group">
          <div className="flex items-center justify-between mb-12 relative z-10">
            <h3 className="font-headline-md text-2xl font-black flex items-center gap-4 text-slate-900 dark:text-white uppercase tracking-tight">
              <div className="w-10 h-10 rounded-xl bg-blue-600/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">analytics</span>
              </div>
              Cluster Telemetry
            </h3>
            <div className="flex gap-2 bg-slate-50 dark:bg-slate-950 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800">
              <button onClick={() => setActiveTab('24h')} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === '24h' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-xl' : 'text-slate-400'}`}>24h Cycle</button>
              <button onClick={() => setActiveTab('7d')} className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${activeTab === '7d' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-xl' : 'text-slate-400'}`}>7d Cycle</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-6">
              <div className="p-8 bg-blue-600/5 rounded-[2rem] border border-blue-600/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">Velocity Anomaly</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">Marketing node throughput spiked by <span className="text-blue-600">40%</span>. Synchronization with Campaign Launch board recommended.</p>
              </div>
              <div className="p-8 bg-amber-600/5 rounded-[2rem] border border-amber-600/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-600"></div>
                <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">Operational Friction</p>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">Legal Review stack latency exceeds 72h. Nexus suggests load balancing across alternate nodes.</p>
              </div>
            </div>
            <div className="relative rounded-[2.5rem] overflow-hidden min-h-[300px] border border-slate-100 dark:border-slate-800 group shadow-2xl">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Telemetry" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-10">
                <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-all shadow-2xl active:scale-95">
                  <span className="material-symbols-outlined text-sm">open_in_full</span>
                  Expand Matrix View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Column Cards */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group flex-1">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">bolt</span>
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-blue-400">monitoring</span>
                  <span className="font-black text-[10px] uppercase tracking-widest text-blue-300">Nexus Pulse</span>
                </div>
                <div className="text-7xl font-black tracking-tighter mb-4 text-white">94%</div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Aggregate Efficiency</p>
              </div>
              <div className="flex -space-x-4 mt-12">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-800 overflow-hidden shadow-2xl ring-2 ring-blue-600/20">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <h4 className="font-black text-lg mb-4 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-200" style={{ fontVariationSettings: "'FILL' 1" }}>auto_fix_high</span>
                Proactive Logic
              </h4>
              <p className="text-sm font-bold opacity-90 leading-relaxed mb-8">Detected 8 nodes with missing classifiers. Initialize auto-labeling sequence?</p>
              <button className="w-full bg-white text-blue-600 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Deploy Sub-Routine</button>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Table */}
      <section className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-12 py-8 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/50">
          <h3 className="font-black text-slate-900 dark:text-white text-[10px] uppercase tracking-[0.2em]">Active Sub-Routines</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 px-5 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">12 Operational</span>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900">
                <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">Protocol ID</th>
                <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">Trigger Vector</th>
                <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest">Signal Status</th>
                <th className="px-12 py-6 font-black text-[9px] uppercase text-slate-400 tracking-widest text-right">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {[
                { name: 'Bug-Auto-Sync', trigger: "QA Node Initialization", time: '2 mins ago', status: 'Active' },
                { name: 'Weekly-Nexus-Brief', trigger: "Chronos Scheduler", time: '9 hours ago', status: 'Active' },
                { name: 'Git-Nexus-Mirror', trigger: "External Signal (Webhook)", time: '1 hour ago', status: 'Critical' }
              ].map((rule, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-all group">
                  <td className="px-12 py-8">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${rule.status === 'Active' ? 'bg-blue-600/5 text-blue-600 group-hover:bg-blue-600 group-hover:text-white' : 'bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white'}`}>
                         <span className="material-symbols-outlined text-xl">settings_input_component</span>
                      </div>
                      <div>
                        <p className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{rule.name}</p>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Ref: #{idx}029-SYN</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-12 py-8">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{rule.trigger}</span>
                  </td>
                  <td className="px-12 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${rule.status === 'Active' ? 'bg-emerald-500 text-white' : 'bg-red-600 text-white'}`}>
                      {rule.status}
                    </span>
                  </td>
                  <td className="px-12 py-8 text-right">
                    <div className="flex gap-4 justify-end">
                      <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-xl transition-all">
                        <span className="material-symbols-outlined text-lg">tune</span>
                      </button>
                      <button className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-600/5 rounded-xl transition-all">
                        <span className="material-symbols-outlined text-lg">terminal</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default AiCommandCenter;
