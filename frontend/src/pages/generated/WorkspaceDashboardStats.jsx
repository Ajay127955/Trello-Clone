import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkspaceDashboardStats = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = React.useState('30d');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Analytics</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Real-time operational intelligence</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {['7d', '30d', '90d'].map((range) => (
              <button 
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${timeRange === range ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500'}`}
              >
                {range}
              </button>
            ))}
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">download</span>
            Generate Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Cards', value: '1,284', trend: '+12%', color: 'emerald' },
          { label: 'Cycle Time', value: '4.2d', trend: '-0.5d', color: 'rose' },
          { label: 'Active Talent', value: '24', trend: 'Steady', color: 'slate' },
          { label: 'Velocity', value: '87%', trend: '+3%', color: 'blue' }
        ].map((metric) => (
          <div key={metric.label} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
            <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4 block">{metric.label}</span>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{metric.value}</span>
              <span className={`text-[10px] font-black px-2 py-1 rounded-lg flex items-center gap-1 ${metric.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600' : metric.color === 'rose' ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                {metric.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bento Grid Charts */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Velocity Trend */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white">Velocity Trend</h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
                <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                <span className="font-black text-[9px] text-slate-400 uppercase tracking-widest">Target</span>
              </div>
            </div>
          </div>
          <div className="h-72 w-full flex items-end gap-3 px-2">
            {[30, 45, 40, 65, 80, 70, 85, 95].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-slate-900 text-white text-[10px] font-black px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 pointer-events-none">
                  {h}
                </div>
                <div 
                  className="w-full bg-blue-600/10 dark:bg-blue-600/5 group-hover:bg-blue-600/20 rounded-2xl transition-all relative overflow-hidden"
                  style={{ height: `${h}%` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-40"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 px-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'].map(day => (
              <span key={day} className="font-black text-[9px] text-slate-300 dark:text-slate-600 uppercase tracking-tighter">{day}</span>
            ))}
          </div>
        </div>

        {/* Task Distribution */}
        <div className="col-span-12 lg:col-span-4 bg-slate-900 dark:bg-indigo-950 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
              <span className="material-symbols-outlined text-[200px] text-white">donut_large</span>
          </div>
          <div className="relative z-10 h-full flex flex-col">
            <h3 className="font-headline-md text-2xl font-black text-white mb-10">Task Mix</h3>
            <div className="flex-1 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 rounded-full border-[12px] border-white/5 flex items-center justify-center mb-10">
                <div className="absolute inset-0 rounded-full border-[12px] border-t-blue-500 border-r-blue-500 border-b-transparent border-l-transparent rotate-45"></div>
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-black text-white tracking-tighter">342</span>
                  <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em]">Active</span>
                </div>
              </div>
              <div className="w-full space-y-4">
                {[
                  { label: 'Completed', val: '65%', color: 'bg-blue-500' },
                  { label: 'In Flight', val: '20%', color: 'bg-indigo-400' },
                  { label: 'Pending', val: '15%', color: 'bg-white/10' }
                ].map(item => (
                  <div key={item.label} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                        <span className="font-black text-[10px] text-white uppercase tracking-widest">{item.label}</span>
                    </div>
                    <span className="font-black text-[10px] text-white">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Member Workload */}
        <div className="col-span-12 md:col-span-6 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white">Talent Allocation</h3>
            <button className="text-[10px] font-black uppercase tracking-widest text-blue-600 hover:underline">Full Audit</button>
          </div>
          <div className="space-y-8">
            {[
              { name: 'Alex Rivera', tasks: 14, p: 85, color: 'bg-blue-600' },
              { name: 'Sarah Chen', tasks: 9, p: 55, color: 'bg-emerald-500' },
              { name: 'Michael Scott', tasks: 18, p: 95, color: 'bg-rose-500' },
              { name: 'Elena Rodriguez', tasks: 4, p: 25, color: 'bg-indigo-400' }
            ].map(user => (
              <div key={user.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-wider">{user.name}</span>
                  <span className="font-black text-[10px] text-slate-400">{user.tasks} Entities</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                  <div className={`${user.color} h-full rounded-full transition-all duration-1000`} style={{ width: `${user.p}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed Snippet */}
        <div className="col-span-12 md:col-span-6 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white mb-10">Stream Pulse</h3>
          <div className="space-y-6">
            {[
              { user: 'Alex Rivera', action: 'merged', target: 'API Core', time: '2m ago', color: 'indigo' },
              { user: 'Sarah Chen', action: 'cleared', target: 'UX Audit', time: '45m ago', color: 'emerald' },
              { user: 'Michael Scott', action: 'noted', target: 'Q3 Plan', time: '2h ago', color: 'amber' }
            ].map((act, i) => (
              <div key={i} className="flex items-center gap-5 p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-50 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-pointer group">
                <div className={`h-10 w-10 rounded-xl bg-${act.color}-500/10 flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">history</span>
                </div>
                <div className="flex-1">
                  <p className="font-black text-[11px] text-slate-900 dark:text-white tracking-tight uppercase">
                    {act.user} <span className="text-slate-400 font-bold lowercase">just {act.action}</span> {act.target}
                  </p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{act.time}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-700">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
    </div>
  );
};

export default WorkspaceDashboardStats;
