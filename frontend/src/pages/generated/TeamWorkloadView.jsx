import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TeamWorkloadView = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>Enterprise Admin</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Workload Distribution</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Team Matrix</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Real-time telemetry of engineering capacity and pod utilization.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white dark:bg-slate-900 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">filter_list</span>
            Filter Pods
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">bolt</span>
            Auto-Balance
          </button>
        </div>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-12 gap-10 mb-16">
        <div className="col-span-12 lg:col-span-4 bg-rose-50 dark:bg-rose-950/20 p-10 rounded-[3rem] border border-rose-100 dark:border-rose-900/30">
          <div className="flex items-center justify-between mb-10">
            <h3 className="font-black text-[10px] text-rose-900 dark:text-rose-400 uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">warning</span>
              Capacity Alerts
            </h3>
            <span className="bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">3 Nodes Critical</span>
          </div>
          <div className="space-y-6">
            {[
              { name: 'Jordan Diaz', load: '120%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACwST_0K_mp-LUYqyq_-9yE_c8f17ezTehPXgJBQDLLK00N0NmuBZmr4EkCBfOenrHyllhn1oq3yHN1XluoYPOUImgH8PHPdCqPdVjt1Jr_t9B1CY61wyIuGTZqIKJtzXatkMKS-R1KbD2mSDqG2RNOn5tGvdE2VK9L4sjz8R0y7_rLsvwXXBPQ8q1dVf7JdTAQO3FFNjVr86E-X3uMtLhdJtvx6-DcH9idpM-M7AMVlzk81wv8N4V39KhVT0O9Y8xrYK3u6kbr4_8' },
              { name: 'Sarah Chen', load: '115%', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFUYsPt-gq4sIcJ40QAm2IAGkMZWZXunTqWRFr6rnk3uDJS-Q7t7FtYe4nm-jnCcvvTpLZdj2_0vIQlYDxJZrbLh5YGw14L00oAJY-ZrOTgySMJNx12fKuv5BMNu0uUrZreWBApYWAOT_tM-OyHes6MZbR6uG1fPlDxEE1DzRmNBlpsJn7qhtpGdT19uSpLCM1eNAe3eKClnpiQH6Yr_hxVXxM-IAt_45r8eb0y_JVWU89y6Ze73oHgOvSBBtcW-UF0o3GGOEkXM1u' }
            ].map((member, i) => (
              <div key={i} className="bg-white dark:bg-slate-900/50 p-6 rounded-[2rem] flex items-center justify-between border border-rose-100/50 dark:border-rose-900/20 shadow-sm">
                <div className="flex items-center gap-4">
                  <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border-2 border-rose-200" />
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{member.name}</div>
                    <div className="text-[9px] font-black text-rose-600 uppercase tracking-widest mt-0.5">{member.load} Utilization</div>
                  </div>
                </div>
                <button className="w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-rose-600 hover:text-white rounded-xl transition-all">
                  <span className="material-symbols-outlined text-lg">rebase_edit</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-12">
            <h3 className="font-black text-[10px] text-slate-900 dark:text-white uppercase tracking-[0.2em]">Global Pulse Telemetry</h3>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Active</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-600"></div>
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Overload</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-3 pb-4 min-h-[160px]">
            {[40, 60, 95, 75, 45, 55, 30, 85, 45, 65, 90, 40].map((height, i) => (
              <div key={i} className="flex-1 group relative">
                <div 
                  className={`w-full rounded-t-2xl transition-all duration-500 cursor-help ${height > 80 ? 'bg-rose-600/20 group-hover:bg-rose-600' : 'bg-blue-600/20 group-hover:bg-blue-600'}`}
                  style={{ height: `${height}%` }}
                ></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity font-black">
                  {height}%
                </div>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-slate-50 dark:border-slate-800 flex justify-between">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Weekly Velocity: <span className="text-slate-900 dark:text-white">42 Nodes/S</span></div>
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Reserved Cap: <span className="text-blue-600">12%</span></div>
          </div>
        </div>
      </div>

      {/* Kanban Workload View */}
      <div className="flex gap-10 overflow-x-auto pb-12 hide-scrollbar -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16">
        {[
          { 
            name: 'Jordan Diaz', role: 'Senior Developer', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB99iPuThaaT9UMBsj6PVQzp8XkWaZyxbUeeBKpXvvd1q96qWX3pC2zp2d8CvhP4bXD7I8rrZYdHAFy-4sErEbeBo_WkU7S9PlweyOx5fIqvo_AVjLJSKJbHh_uYA2oAZ-ACoHAJkwjx9iLcOb9wZDm4dDc6MsplH9tHfSRtHRh4jn9Mnyy6ARtBev1NcO2vmyRDcAfucKfLjcdSUBDWs49-iiYtq1NkHJsh6gMtHh6sHDknEbnys485JeatIR8MSBRu0oHmtd4zKaV',
            load: 100, count: '12/10', critical: true,
            tasks: [
              { label: 'API', title: 'Refactor Auth Middleware for SSO', status: 'CRITICAL', color: 'rose' },
              { label: 'INFRA', title: 'Database Migration to Aurora Global', status: 'Due Tomorrow', color: 'amber' }
            ]
          },
          { 
            name: 'Alex Morgan', role: 'UI/UX Lead', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYpfpDsy1-HnkV69ydGRA24-r8ikEG7yAMWK7LTWjN5cgs7kJZPUwaF3ZAyW74myExHIuRSXtZs3F5iYY8Mp9NOrgwEVIkPf1OBP71OtohgO8BoDPXRW5LdOj978IgzxQgF_G4JKExy9EqrGyS5it8ZX7oY17BNNSoAric-EiyHppgEhkBkGA9PTC3eV86y1ciHPDQCSu_NjFNn2sVLc2rcmCD1JXuGAeFwJs4EijYSvLUYEhbMa7enfcP0sCprA_DeoayzIZJ8Xn2',
            load: 60, count: '6/10', critical: false,
            tasks: [
              { label: 'DESIGN', title: 'Workload View Fidelity Prototype', status: '8/12 Done', color: 'blue' }
            ]
          },
          { 
            name: 'Taylor Park', role: 'Backend Dev', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfqTwZ7PIt3oInWZQdjdKjwIAH7wktBAviUQ9i1N5lJK5lX_ka4m1QgM_U8m2uTw293cXa1qPKVmIQ_qfW1Ix_YO6sSMysqvSu2jC1DbcwqfKF62wJkkVpeILNx4IBiZUTxSd1SCg3BS5yT0kVa7FWyK3hMkP3CJj7uL0qVDV8mR6HRbBiRhR4IgDC0CWlQhSt_7dAD7jYCV9QjMjiv_X591GhhzhywbknxTdYIhD10_0rpRVkhwoa0KHEJxXlZ6dLt5njJKhEwkMZ',
            load: 30, count: '3/10', critical: false,
            tasks: [
              { label: 'DOCS', title: 'Update Documentation v2.4 Release', status: 'Pending', color: 'emerald' }
            ]
          }
        ].map((lane, i) => (
          <div key={i} className="flex-shrink-0 w-[400px] bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 flex flex-col h-fit shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img src={lane.avatar} alt={lane.name} className={`w-16 h-16 rounded-full border-4 ${lane.critical ? 'border-rose-500 shadow-xl shadow-rose-500/20' : 'border-white dark:border-slate-800 shadow-lg'}`} />
                  {lane.critical && <span className="absolute -bottom-1 -right-1 w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center font-black text-[10px] border-4 border-slate-50 dark:border-slate-900 animate-bounce">!</span>}
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{lane.name}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{lane.role}</div>
                </div>
              </div>
              <button className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-600/5 rounded-2xl transition-all">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
            
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <div className={`text-[9px] font-black uppercase tracking-widest ${lane.critical ? 'text-rose-600' : 'text-blue-600'}`}>{lane.count} Nodes Allocated</div>
                <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{lane.load}% Load</div>
              </div>
              <div className="w-full h-3 bg-white dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
                <div className={`h-full transition-all duration-1000 ${lane.critical ? 'bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.5)]' : 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]'}`} style={{ width: `${lane.load}%` }}></div>
              </div>
            </div>

            <div className="space-y-6">
              {lane.tasks.map((task, j) => (
                <div key={j} className="bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group cursor-pointer relative overflow-hidden">
                  <div className={`absolute left-0 top-0 w-2 h-full bg-${task.color}-600/20 group-hover:bg-${task.color}-600 transition-colors`}></div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-${task.color}-600/10 text-${task.color}-600 rounded-full`}>{task.label}</span>
                  </div>
                  <p className="font-headline-md text-base font-black text-slate-900 dark:text-white leading-tight mb-6">{task.title}</p>
                  <div className="flex items-center justify-between text-slate-400">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">chat_bubble</span>
                        <span className="text-[9px] font-black">4</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[14px]">attach_file</span>
                        <span className="text-[9px] font-black">1</span>
                      </div>
                    </div>
                    <span className={`text-[8px] font-black uppercase tracking-widest ${task.status === 'CRITICAL' ? 'text-rose-600' : 'text-slate-400'}`}>{task.status}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex items-center justify-center gap-3 text-slate-400 hover:text-blue-600 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all group">
                <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform">add</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Allocate Node</span>
              </button>
            </div>
          </div>
        ))}

        <button className="flex-shrink-0 w-[400px] bg-white dark:bg-slate-900/50 border-4 border-dashed border-slate-100 dark:border-slate-800 rounded-[3rem] h-[200px] flex flex-col items-center justify-center gap-4 text-slate-300 dark:text-slate-700 hover:text-blue-600 hover:border-blue-600/30 hover:bg-white dark:hover:bg-slate-900 transition-all group">
          <div className="w-16 h-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">person_add</span>
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Onboard New Resource</span>
        </button>
      </div>
    </div>
  );
};

    </>
  );
};

export default TeamWorkloadView;
