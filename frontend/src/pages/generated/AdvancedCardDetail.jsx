import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdvancedCardDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Back Action */}
      <button 
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-slate-400 hover:text-blue-600 transition-all group font-black text-[10px] uppercase tracking-widest"
      >
        <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
        Back to Operational Board
      </button>

      <div className="grid grid-cols-12 gap-12">
        {/* Left Column: Primary Content */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          {/* Card Header */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-9xl">layers</span>
            </div>
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/5 flex items-center justify-center text-blue-600">
                  <span className="material-symbols-outlined text-3xl">check_box</span>
                </div>
                <div>
                  <h1 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Q4 Infrastructure Scaling Strategy</h1>
                  <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-2">Node: <span className="text-blue-600 underline decoration-2 underline-offset-4 cursor-pointer">Ready for Launch</span></p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-12 mt-12 relative z-10">
              <div>
                <h4 className="font-black text-[9px] text-slate-400 uppercase tracking-widest mb-4">Authorized Personnel</h4>
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 overflow-hidden shadow-2xl">
                      <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-900 dark:bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-2xl">+4</div>
                </div>
              </div>
              <div>
                <h4 className="font-black text-[9px] text-slate-400 uppercase tracking-widest mb-4">Classifiers</h4>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 bg-blue-600/10 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-600/10">Strategic</span>
                  <span className="px-4 py-1.5 bg-purple-600/10 text-purple-600 rounded-full text-[9px] font-black uppercase tracking-widest border border-purple-600/10">Priority 1</span>
                </div>
              </div>
              <div>
                <h4 className="font-black text-[9px] text-slate-400 uppercase tracking-widest mb-4">Deadline Pulse</h4>
                <div className="flex items-center gap-3 px-5 py-2 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <span className="material-symbols-outlined text-lg text-slate-400">schedule</span>
                  <span className="text-[10px] font-black text-slate-600 dark:text-slate-300 uppercase tracking-widest">Dec 15, 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Insights Section */}
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10 flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-blue-400 animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              <h3 className="font-black text-[10px] uppercase tracking-[0.3em] text-blue-300">Nexus AI Logic</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {[
                { title: 'Draft RFC Protocol', sub: 'Linked to Confluence Node', icon: 'history_edu' },
                { title: 'Sync DevOps Cluster', sub: '3 Blocking items in Jira', icon: 'mail' }
              ].map((step, i) => (
                <div key={i} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all cursor-pointer group/item flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-400/10 flex items-center justify-center text-blue-400">
                      <span className="material-symbols-outlined text-xl">{step.icon}</span>
                    </div>
                    <div>
                      <div className="font-black text-[11px] uppercase tracking-widest">{step.title}</div>
                      <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">{step.sub}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-blue-400 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all">chevron_right</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Fields */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative">
            <h3 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">settings_input_component</span> Global Parameters
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Budget Allocation', value: '$125,000', icon: 'payments' },
                { label: 'Deployment Tier', value: 'Tier 1 Global', icon: 'hub' },
                { label: 'Review Cycles', value: '3 of 5', icon: 'sync' }
              ].map((field, i) => (
                <div key={i} className="space-y-3">
                  <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest ml-1">{field.label}</label>
                  <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 rounded-2xl flex items-center justify-between border border-transparent hover:border-blue-600/20 transition-all cursor-pointer shadow-inner">
                    <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{field.value}</span>
                    <span className="material-symbols-outlined text-slate-300 text-lg">{field.icon}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklists */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/5 flex items-center justify-center text-emerald-600">
                  <span className="material-symbols-outlined text-2xl">checklist</span>
                </div>
                <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Infra Checklist</h3>
              </div>
              <button className="bg-slate-900 dark:bg-blue-600 text-white px-6 py-3 rounded-xl font-black text-[9px] uppercase tracking-widest shadow-xl active:scale-95 transition-all">Append Node</button>
            </div>
            
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">60% Sync</span>
                <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full bg-emerald-500 animate-pulse origin-left transition-all duration-1000" style={{ width: '60%' }}></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-6 p-6 hover:bg-slate-50 dark:hover:bg-slate-800/30 rounded-[2rem] transition-all group">
                <div className="mt-1 flex items-center justify-center w-6 h-6 border-2 border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer group-hover:border-blue-600 transition-colors"></div>
                <div className="flex-1">
                  <div className="font-bold text-slate-900 dark:text-white text-sm">Provision AWS Elastic Load Balancer (v2)</div>
                  <div className="flex gap-6 mt-3">
                    <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">person</span> Sarah Jenkins
                    </div>
                    <div className="flex items-center gap-2 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                      <span className="material-symbols-outlined text-sm">calendar_today</span> Oct 24
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-emerald-600/5 rounded-[2rem] group border border-emerald-600/5">
                <div className="mt-1 flex items-center justify-center w-6 h-6 bg-emerald-500 rounded-lg shadow-xl">
                  <span className="material-symbols-outlined text-white text-lg">check</span>
                </div>
                <div className="flex-1">
                  <div className="font-bold text-slate-400 line-through text-sm">Database Sharding Review</div>
                  <div className="ml-6 mt-6 pl-6 border-l-2 border-emerald-500/20 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">PostgreSQL Parameters</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-emerald-500/20 rounded flex items-center justify-center">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Replica Latency Matrix</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Context & Actions */}
        <div className="col-span-12 lg:col-span-4 space-y-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="material-symbols-outlined text-8xl">hub</span>
            </div>
            <h4 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-10 relative z-10">Nexus Ecosystem</h4>
            <div className="space-y-4 relative z-10">
              <div className="p-6 rounded-3xl bg-blue-600/5 border border-blue-600/10 hover:bg-blue-600/10 transition-all cursor-pointer group/link shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-blue-600/20 shadow-inner">
                    <span className="material-symbols-outlined text-blue-600">developer_board</span>
                  </div>
                  <div>
                    <div className="font-black text-[11px] uppercase tracking-widest text-blue-900 dark:text-blue-100">INFRA-402</div>
                    <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mt-1">In Progress • SP: 8</div>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-600 dark:text-slate-400 leading-relaxed italic">"Automated multi-region database failover sequence..."</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all cursor-pointer group/link shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-inner">
                    <span className="material-symbols-outlined text-slate-600">description</span>
                  </div>
                  <div>
                    <div className="font-black text-[11px] uppercase tracking-widest text-slate-900 dark:text-white">Scaling Specs</div>
                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">Updated 2h ago</div>
                  </div>
                </div>
                <p className="text-[10px] font-bold text-slate-500 leading-relaxed">Documenting VPC peering requirements for us-east-1...</p>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-[9px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-3 relative z-10">
              <span className="material-symbols-outlined text-lg">add_link</span>
              Link Resource
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h4 className="font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-10">Operational Controls</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Members', icon: 'person_add' },
                { label: 'Classifiers', icon: 'label' },
                { label: 'Append Node', icon: 'checklist' },
                { label: 'Temporal Sync', icon: 'schedule' },
                { label: 'Attachments', icon: 'attach_file' }
              ].map((btn, i) => (
                <button key={i} className="flex items-center gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all text-left group border border-transparent hover:border-blue-600/20 shadow-sm active:scale-[0.98]">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 transition-colors">{btn.icon}</span>
                  <span className="font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300">{btn.label}</span>
                </button>
              ))}
            </div>
            
            <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-10"></div>
            
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: 'Relocate Node', icon: 'arrow_forward' },
                { label: 'Clone Sequence', icon: 'content_copy' },
                { label: 'Neutralize / Archive', icon: 'archive', color: 'red' }
              ].map((btn, i) => (
                <button key={i} className={`flex items-center gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-900 rounded-2xl transition-all text-left group border border-transparent hover:border-${btn.color || 'blue'}-600/20 shadow-sm active:scale-[0.98]`}>
                  <span className={`material-symbols-outlined text-${btn.color || 'slate'}-400 group-hover:text-${btn.color || 'blue'}-600 transition-colors`}>{btn.icon}</span>
                  <span className={`font-black text-[10px] uppercase tracking-widest text-${btn.color || 'slate'}-600 dark:text-${btn.color || 'slate'}-400`}>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Activity Feed Section */}
      <div className="mt-12 bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden relative">
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-slate-900/5 dark:bg-white/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-lg">list_alt</span>
            </div>
            Node Activity Stream
          </h3>
          <button className="text-slate-400 font-black text-[9px] uppercase tracking-widest hover:text-blue-600 transition-colors">Expand Full History</button>
        </div>

        <div className="flex gap-8 mb-16">
          <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-2xl flex-shrink-0 border-4 border-white dark:border-slate-800 ring-2 ring-blue-600/10">
            <img src="https://i.pravatar.cc/100?img=12" alt="current user" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 relative">
            <textarea className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] p-8 focus:ring-4 focus:ring-blue-600/5 outline-none min-h-[120px] text-sm font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700 shadow-inner" placeholder="Log operational update..."></textarea>
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-4">
                {['alternate_email', 'sentiment_satisfied', 'image'].map(icon => (
                  <button key={icon} className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-xl transition-all">
                    <span className="material-symbols-outlined text-lg">{icon}</span>
                  </button>
                ))}
              </div>
              <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Transmit Message</button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {[
            { user: 'Elena Rodriguez', time: '2 hours ago', sentiment: 'Positive', text: "The database sharding plan looks excellent. I've benchmarked the latency on the staging cluster and it's well within our 200ms target! 🚀", img: 'https://i.pravatar.cc/100?img=5', color: 'emerald' },
            { user: 'Marcus Chen', time: '5 hours ago', sentiment: 'Concern', text: "Are we certain about the Dec 15th deadline for ELB provisioning? The Terraform scripts are still throwing VPC permission errors in us-east-1.", img: 'https://i.pravatar.cc/100?img=8', color: 'amber' }
          ].map((log, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                <img src={log.img} alt={log.user} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{log.user}</span>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{log.time}</span>
                  <div className={`px-4 py-1.5 rounded-full bg-${log.color}-600/10 border border-${log.color}-600/10 flex items-center gap-2`}>
                    <span className={`material-symbols-outlined text-[14px] text-${log.color}-600`} style={{ fontVariationSettings: "'FILL' 1" }}>{log.color === 'emerald' ? 'sentiment_very_satisfied' : 'warning'}</span>
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] text-${log.color}-600`}>{log.sentiment} Analysis</span>
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-950/50 p-8 rounded-[2.5rem] text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed shadow-inner group-hover:bg-white dark:group-hover:bg-slate-900 transition-all border border-transparent group-hover:border-slate-100 dark:group-hover:border-slate-800">
                  {log.text}
                </div>
                <div className="flex gap-6 mt-6 ml-4">
                  <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">Echo Signal (Reply)</button>
                  <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">Edit Parameter</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedCardDetail;
