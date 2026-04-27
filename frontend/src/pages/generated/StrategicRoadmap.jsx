import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StrategicRoadmap = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12 h-full flex flex-col">
      {/* Strategic Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>Enterprise Strategy</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Global Roadmap 2024</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Operational Horizon.</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">High-level milestones and cross-functional dependencies for the global matrix.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shadow-lg ring-1 ring-slate-100/50">
                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 text-white text-[10px] font-black flex items-center justify-center shadow-lg">+12</div>
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">share</span>
            Share Nexus
          </button>
        </div>
      </div>

      {/* Progress Tracker Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 px-10 py-8 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-10">
          <div className="flex-1">
            <div className="flex justify-between items-end mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Global Progress Protocol</span>
              <span className="font-black text-slate-900 dark:text-white tracking-tighter text-xl">64% COMPLETE</span>
            </div>
            <div className="w-full bg-slate-50 dark:bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800 shadow-inner">
              <div className="bg-blue-600 h-full shadow-[0_0_15px_rgba(37,99,235,0.4)]" style={{ width: '64%' }}></div>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="text-center">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Resolved</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">18</p>
            </div>
            <div className="h-10 w-px bg-slate-100 dark:bg-slate-800 self-center"></div>
            <div className="text-center">
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">Active</p>
              <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter text-blue-600">07</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 bg-slate-900 dark:bg-blue-600 px-10 py-8 rounded-[3rem] text-white flex items-center justify-between shadow-2xl shadow-blue-600/20 group cursor-pointer hover:scale-[1.02] transition-transform">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined text-white">auto_awesome</span>
            </div>
            <div>
              <p className="font-black text-[10px] uppercase tracking-widest text-blue-400 dark:text-blue-200 mb-1 tracking-tighter">AI Synthesis</p>
              <p className="font-black text-lg tracking-tight">Strategic Insights</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </div>
      </div>

      {/* Fluid Roadmap Grid */}
      <div className="flex-1 overflow-x-auto pb-12 -mx-10 px-10 scrollbar-hide">
        <div className="flex gap-10 h-full items-start min-w-max">
          {/* Milestone Columns */}
          {[
            { 
              title: 'Q1: Foundation & Scale', 
              color: 'bg-emerald-500', 
              cards: [
                { title: 'Global Infra Migration', desc: 'Move primary data clusters to Tier-1 availability zones.', tags: ['CORE', 'DONE'], status: 'emerald' },
                { title: 'Security Compliance Audit', desc: 'Complete SOC2 Type II and GDPR renewal certifications.', tags: ['LEGAL'], status: 'slate' }
              ] 
            },
            { 
              title: 'Q2: AI & Orchestration', 
              color: 'bg-blue-600', 
              cards: [
                { title: 'GenAI Assistant Launch', desc: 'Synthesize context-aware task assistance for all nodes.', tags: ['STRATEGIC', 'ACTIVE'], status: 'blue', blocked: 'Blocked by Infra Migration' },
                { title: 'Project Canvas Redesign', desc: 'High-fidelity workspace visualization protocols.', tags: ['DESIGN'], status: 'slate', progress: 35 }
              ] 
            },
            { 
              title: 'Q3: Global Expansion', 
              color: 'bg-slate-300', 
              cards: [
                { title: 'APAC Regional Hub', desc: 'Establish data centers in Tokyo and Singapore.', tags: ['FUTURE'], status: 'slate', future: true }
              ] 
            }
          ].map((col, i) => (
            <div key={i} className="w-[420px] bg-white dark:bg-slate-900/50 rounded-[3rem] p-4 flex flex-col border border-slate-100 dark:border-slate-800 shadow-sm max-h-full">
              <div className="flex justify-between items-center mb-8 px-6 pt-6">
                <div className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${col.color} shadow-[0_0_10px_currentColor]`}></div>
                  <h3 className="font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">{col.title}</h3>
                </div>
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <span className="material-symbols-outlined">more_horiz</span>
                </button>
              </div>
              
              <div className="space-y-6 overflow-y-auto px-4 pb-4">
                {col.cards.map((card, idx) => (
                  <div key={idx} className={`bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group ${card.future ? 'opacity-50 grayscale' : ''}`}>
                    <div className="flex gap-3 mb-6">
                      {card.tags.map(tag => (
                        <span key={tag} className="px-4 py-1 rounded-full bg-slate-50 dark:bg-slate-800 text-[8px] font-black tracking-[0.2em] text-slate-400 border border-slate-100 dark:border-slate-700">{tag}</span>
                      ))}
                    </div>
                    <h4 className="font-headline-xl text-xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">{card.title}</h4>
                    <p className="text-sm font-medium text-slate-400 leading-relaxed italic mb-8">{card.desc}</p>
                    
                    {card.blocked && (
                      <div className="bg-rose-50 dark:bg-rose-950/20 p-4 rounded-2xl mb-8 border border-rose-100 dark:border-rose-800/50 flex items-center gap-3">
                        <span className="material-symbols-outlined text-rose-500 text-lg">link_off</span>
                        <p className="text-[10px] font-black uppercase tracking-widest text-rose-700 dark:text-rose-400 italic">{card.blocked}</p>
                      </div>
                    )}

                    {card.progress && (
                      <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-1.5 bg-slate-50 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-100 dark:border-slate-800">
                          <div className="bg-blue-600 h-full" style={{ width: `${card.progress}%` }}></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-400">{card.progress}%</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-symbols-outlined text-lg">comment</span>
                        <span className="text-[10px] font-black">12 SYNCED</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-white dark:border-slate-900 overflow-hidden shadow-md">
                        <img src={`https://i.pravatar.cc/100?u=${idx + i}`} className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
                
                <button className="w-full py-6 rounded-[2rem] border-2 border-dashed border-slate-100 dark:border-slate-800 text-slate-400 font-black text-[10px] uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Inject Milestone
                </button>
              </div>
            </div>
          ))}
          
          <div className="w-[420px] h-[300px] border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem] flex items-center justify-center group cursor-pointer hover:border-blue-600 transition-all bg-slate-50/30 dark:bg-slate-950/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600 text-3xl">add</span>
              </div>
              <p className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600">New Strategic Dimension</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Action Protocol */}
      <button className="fixed right-12 bottom-12 bg-slate-900 dark:bg-blue-600 text-white w-20 h-20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-blue-600/40 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 rotate-3">
        <span className="material-symbols-outlined text-4xl">add_task</span>
      </button>
    </div>
  );
};

export default StrategicRoadmap;
