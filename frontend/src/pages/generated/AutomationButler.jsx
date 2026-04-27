import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AutomationButler = () => {
  const navigate = useNavigate();
  const [rules, setRules] = React.useState([
    { id: 1, title: 'Archive Completed Tasks', type: 'Movement', enabled: true, usage: 142, lastRun: '2h ago' },
    { id: 2, title: 'Auto-Assign Urgent Tasks', type: 'Card Added', enabled: true, usage: 892, lastRun: '12m ago' }
  ]);

  const toggleRule = (id) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  const deleteRule = (id) => {
    if (window.confirm('Are you sure you want to delete this rule?')) {
      setRules(prev => prev.filter(r => r.id !== id));
    }
  };

const AutomationButler = () => {
  const navigate = useNavigate();
  const [rules, setRules] = React.useState([
    { id: 1, title: 'Archive Completed Tasks', type: 'Movement', enabled: true, usage: 142, lastRun: '2h ago' },
    { id: 2, title: 'Auto-Assign Urgent Tasks', type: 'Card Added', enabled: true, usage: 892, lastRun: '12m ago' }
  ]);

  const toggleRule = (id) => {
    setRules(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r));
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Automation Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Butler</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Intelligent board automation</p>
        </div>
        <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
          <span className="material-symbols-outlined text-lg">bolt</span>
          New Automation
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-10 border-b border-slate-100 dark:border-slate-800 mb-12 overflow-x-auto no-scrollbar">
        {['Rules', 'Buttons', 'Email Reports', 'Schedules'].map((tab, i) => (
          <button key={tab} className={`pb-6 text-[10px] font-black uppercase tracking-widest transition-all relative ${i === 0 ? 'text-blue-600' : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}>
            {tab}
            {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-full shadow-sm shadow-blue-600/50"></div>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Rules Engine */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {rules.map(rule => (
            <div key={rule.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-3xl flex items-center justify-center ${rule.id === 1 ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-500'}`}>
                    <span className="material-symbols-outlined text-3xl">
                      {rule.id === 1 ? 'move_to_inbox' : 'priority_high'}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white tracking-tight">{rule.title}</h4>
                    <p className="font-black text-[9px] text-slate-400 uppercase tracking-widest mt-1">Rule ID: 00{rule.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`font-black text-[10px] uppercase tracking-widest ${rule.enabled ? 'text-emerald-500' : 'text-slate-400'}`}>
                    {rule.enabled ? 'Active' : 'Offline'}
                  </span>
                  <button 
                    onClick={() => toggleRule(rule.id)}
                    className={`relative w-14 h-8 rounded-full transition-all duration-300 ${rule.enabled ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'}`}
                  >
                    <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 shadow-md ${rule.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
                  </button>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-8 space-y-6 mb-8 border border-slate-50 dark:border-slate-800">
                <div className="flex gap-6">
                  <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest mt-1.5 w-16">Trigger</span>
                  <div className="flex-1 font-bold text-sm text-slate-700 dark:text-slate-300">
                    When a card is {rule.id === 1 ? 'moved to Done stage' : 'marked as High Priority'}
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest mt-1.5 w-16">Actions</span>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 text-sm font-black text-blue-600">
                      <span className="material-symbols-outlined text-lg">subdirectory_arrow_right</span>
                      {rule.id === 1 ? 'Archive entities immediately' : 'Notify @SarahChen'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-slate-50 dark:border-slate-800">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-sm">history</span>
                    <span className="font-black text-[9px] uppercase">Last run {rule.lastRun}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <span className="material-symbols-outlined text-sm">analytics</span>
                    <span className="font-black text-[9px] uppercase">{rule.usage} Events</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-lg">edit_note</span>
                  </button>
                  <button className="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors">
                    <span className="material-symbols-outlined text-lg">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intelligence Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-slate-900 dark:bg-indigo-950 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group text-white">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <span className="material-symbols-outlined text-[200px] text-white">smart_toy</span>
            </div>
            <div className="relative z-10">
              <span className="font-black text-[10px] text-white/40 uppercase tracking-[0.2em] mb-4 block">Operations Usage</span>
              <div className="text-6xl font-black tracking-tighter mb-6">85<span className="text-2xl opacity-40">%</span></div>
              <p className="font-bold text-[11px] text-white/60 leading-relaxed mb-10">Your workspace is nearing its monthly automation limit. Upgrade to Enterprise for unlimited triggers.</p>
              <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                <div className="w-[85%] bg-white h-full rounded-full transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h4 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest mb-8">Active Integrations</h4>
            <div className="space-y-6">
              {[
                { name: 'Slack', icon: 'chat', color: 'purple' },
                { name: 'Gmail', icon: 'mail', color: 'rose' },
                { name: 'Lambda', icon: 'cloud', color: 'orange' }
              ].map(app => (
                <div key={app.name} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-xl bg-${app.color}-500/10 flex items-center justify-center text-${app.color}-600`}>
                      <span className="material-symbols-outlined text-lg">{app.icon}</span>
                    </div>
                    <span className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-wider">{app.name}</span>
                  </div>
                  <span className="material-symbols-outlined text-slate-200 dark:text-slate-700 group-hover:text-blue-600 transition-colors">chevron_right</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
