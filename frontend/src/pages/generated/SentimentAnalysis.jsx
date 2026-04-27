import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SentimentAnalysis = () => {
  const navigate = useNavigate();
  return (
const SentimentAnalysis = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>AI Neural Engine</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Emotional Intelligence</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Sentiment Pulse.</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Real-time emotional monitoring of team communications and workspace friction.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm">
            <span className="material-symbols-outlined text-blue-600">calendar_today</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-300">Last 14 Cycles</span>
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Analytics
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Sentiment Trend Chart */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12 lg:p-16 flex flex-col h-[500px] group">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">Ecosystem Trend.</h2>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Aggregated emotional score across infrastructure.</p>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Positive</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Friction</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 800 200">
              <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="800" y1="0" y2="0" className="text-slate-100 dark:text-slate-800" />
              <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="800" y1="50" y2="50" className="text-slate-100 dark:text-slate-800" />
              <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="800" y1="100" y2="100" className="text-slate-100 dark:text-slate-800" />
              <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="800" y1="150" y2="150" className="text-slate-100 dark:text-slate-800" />
              <line stroke="currentColor" strokeWidth="0.5" x1="0" x2="800" y1="200" y2="200" className="text-slate-100 dark:text-slate-800" />
              <path d="M0,100 Q100,20 200,80 T400,40 T600,60 T800,20" fill="none" stroke="#10b981" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
              <path d="M0,150 Q100,180 200,140 T400,160 T600,130 T800,170" fill="none" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_8px_rgba(244,63,94,0.3)]" />
              <circle cx="400" cy="40" r="6" fill="#10b981" stroke="white" strokeWidth="3" className="shadow-2xl" />
            </svg>
          </div>
          <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mt-12 pt-8 border-t border-slate-50 dark:border-slate-800">
            <span>Cycle 01</span><span>Cycle 04</span><span>Cycle 07</span><span>Cycle 10</span><span>Cycle 14</span>
          </div>
        </div>

        {/* Sentiment Summary Stats */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-10">
          <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-[2.5rem] border border-emerald-100 dark:border-emerald-800/50 p-10 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-white dark:bg-emerald-900 rounded-2xl shadow-xl flex items-center justify-center text-emerald-600">
                <span className="material-symbols-outlined text-3xl">sentiment_very_satisfied</span>
              </div>
              <span className="text-emerald-700 dark:text-emerald-400 font-black text-[10px] uppercase tracking-widest bg-emerald-100 dark:bg-emerald-900/30 px-4 py-1.5 rounded-full">+12.4% VOL</span>
            </div>
            <div>
              <p className="text-emerald-900 dark:text-emerald-100 text-6xl font-black mb-2 tracking-tighter">74%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700/60 dark:text-emerald-400/60">Positive Sentiment</p>
            </div>
          </div>

          <div className="bg-rose-50 dark:bg-rose-950/20 rounded-[2.5rem] border border-rose-100 dark:border-rose-800/50 p-10 flex flex-col justify-between group">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-white dark:bg-rose-900 rounded-2xl shadow-xl flex items-center justify-center text-rose-600">
                <span className="material-symbols-outlined text-3xl">sentiment_very_dissatisfied</span>
              </div>
              <span className="text-rose-700 dark:text-rose-400 font-black text-[10px] uppercase tracking-widest bg-rose-100 dark:bg-rose-900/30 px-4 py-1.5 rounded-full">-2.1% FRICTION</span>
            </div>
            <div>
              <p className="text-rose-900 dark:text-rose-100 text-6xl font-black mb-2 tracking-tighter">12%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-rose-700/60 dark:text-rose-400/60">Friction Detected</p>
            </div>
          </div>
        </div>

        {/* Board Breakdown */}
        <div className="col-span-12 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12 lg:p-16">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white tracking-tight">Board Pulse Matrix.</h2>
            <button className="flex items-center gap-3 text-blue-600 font-black text-[10px] uppercase tracking-widest group hover:translate-x-2 transition-transform">
              Deep Analytics Protocol
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-12 gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 px-8 mb-4">
              <div className="col-span-6">Workspace Nodes</div>
              <div className="col-span-4">Sentiment Entropy</div>
              <div className="col-span-2 text-right">Dominant State</div>
            </div>
            
            {[
              { id: 'QA', name: 'Q4 Infrastructure Migration', info: '42 members • 12 interactions', colors: ['bg-emerald-500 w-[60%]', 'bg-amber-400 w-[25%]', 'bg-rose-500 w-[15%]'], state: 'Confident', stateColor: 'text-emerald-600 bg-emerald-50' },
              { id: 'UI', name: 'Design System Neural Refresh', info: '8 members • 86 interactions', colors: ['bg-emerald-500 w-[20%]', 'bg-amber-400 w-[30%]', 'bg-rose-500 w-[50%]'], state: 'Friction', stateColor: 'text-rose-600 bg-rose-50' }
            ].map((node, i) => (
              <div key={i} className="grid grid-cols-12 gap-8 items-center bg-slate-50/50 dark:bg-slate-950/50 p-8 rounded-3xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all group">
                <div className="col-span-6 flex items-center gap-6">
                  <div className="w-14 h-14 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-blue-600 rounded-2xl flex items-center justify-center font-black shadow-sm group-hover:shadow-lg transition-all">{node.id}</div>
                  <div>
                    <p className="font-black text-slate-900 dark:text-white mb-1">{node.name}</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{node.info}</p>
                  </div>
                </div>
                <div className="col-span-4">
                  <div className="flex h-3 w-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-50 dark:border-slate-700 shadow-inner">
                    {node.colors.map((c, idx) => <div key={idx} className={c}></div>)}
                  </div>
                </div>
                <div className="col-span-2 text-right">
                  <span className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest ${node.stateColor} border border-current opacity-80`}>{node.state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Required */}
        <div className="col-span-12 lg:col-span-5 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm p-12 group">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-50 dark:bg-rose-950/30 rounded-2xl flex items-center justify-center text-rose-500">
              <span className="material-symbols-outlined text-3xl">report_problem</span>
            </div>
            <h2 className="font-headline-xl text-2xl font-black text-slate-900 dark:text-white tracking-tight">Intervention Log.</h2>
          </div>
          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-rose-50/30 dark:bg-rose-950/10 border-l-4 border-rose-500 relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-rose-600">Blocked Workflow Detected</span>
                <span className="text-[10px] font-black text-slate-400">2H AGO</span>
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed mb-8 italic">"I've requested the API documentation three times now and still nothing. This is completely blocking the neural sync."</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white dark:ring-slate-800">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZyS4yLOwwXwHGENGQdllyVQm9ktQb2e-ZdcttnH1LnCNRehN_fhEQup9ySRGkbb2YVUhXhQPKKGnQTsC4dhwAB3nTtqJiRAn_TQHGGhtkiyyvsb_uWbnWh57do90xcMAXHyqfR6kaNcHdYHXV1fWVtbFjobuLF4mm4DtfL6VClSmojzzxzsFtioxKjANn-Uzy9-bRdfkz_4S0Q9HNaIEAjQwUcB9OkgyTaugoCXEae4Cmkas8AX4RpA7CaALo2gdw6DGqmD-vE5i" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400">Marcus Chen</span>
                </div>
                <button className="text-blue-600 font-black text-[9px] uppercase tracking-widest hover:underline">Teleport to Card</button>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recognition */}
        <div className="col-span-12 lg:col-span-7 bg-slate-900 rounded-[3rem] shadow-2xl p-12 text-white relative overflow-hidden group">
          <div className="absolute -right-20 -bottom-20 opacity-10 group-hover:scale-110 transition-transform duration-1000">
            <span className="material-symbols-outlined text-[300px]">psychology</span>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl">lightbulb</span>
              </div>
              <h2 className="font-headline-xl text-3xl font-black tracking-tight">Synergy Detected.</h2>
            </div>
            <p className="text-lg font-medium text-slate-400 max-w-lg mb-12 italic leading-relaxed text-balance">
              The "Enterprise Mobile" team has maintained peak positive sentiment for 10 consecutive cycles. AI suggests immediate recognition of their operational synergy.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Elite Node</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-black text-sm text-white shadow-lg">SL</div>
                  <span className="font-black text-sm">Sarah L.</span>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-400 mb-4">Key Sentiment</p>
                <p className="font-black text-sm italic">"Outstanding Velocity!"</p>
              </div>
            </div>
            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all active:scale-95 shadow-2xl shadow-white/10">
              Broadcast Shout-out Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysis;
