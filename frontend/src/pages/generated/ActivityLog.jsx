import React from 'react';
import { useNavigate } from 'react-router-dom';

const ActivityLog = () => {
  const navigate = useNavigate();
  const [activities] = React.useState([
    { id: 1, user: 'Sarah Jenkins', action: 'initialized a new board', target: 'Q3 Marketing Strategy', time: '2m ago', type: 'board', avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, user: 'Alex Rivera', action: 'synchronized API Documentation node', target: 'API Documentation', time: '15m ago', type: 'move', avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, user: 'Emma Watson', action: 'broadcasted update on Homepage Redesign', target: 'Homepage Redesign', time: '1h ago', type: 'comment', content: 'The infrastructure migration for the priority nodes is complete. Standing by for QA handshake.', avatar: 'https://i.pravatar.cc/150?u=3' }
  ]);

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Stream</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Real-time operational activity</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:border-blue-600 transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">tune</span>
            Filters
          </button>
          <button onClick={() => window.location.reload()} className="flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-sm">sync</span>
            Refresh
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="space-y-16">
        {/* Today Section */}
        <div className="relative">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] whitespace-nowrap bg-blue-600/5 px-4 py-1.5 rounded-lg border border-blue-600/10">Today</span>
            <div className="h-[2px] w-full bg-slate-50 dark:bg-slate-800/50"></div>
          </div>

          <div className="space-y-10 relative">
            {/* Main Timeline Spine */}
            <div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-slate-50 dark:bg-slate-800/50"></div>

            {activities.map(item => (
              <div key={item.id} className="relative pl-20 group">
                {/* User Avatar Hub */}
                <div className="absolute left-0 top-0 z-10">
                  <div className="w-14 h-14 rounded-2xl border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-800 transition-transform group-hover:scale-110 duration-500">
                    <img src={item.avatar} alt={item.user} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="absolute -right-2 -bottom-2 w-7 h-7 rounded-xl bg-slate-900 dark:bg-blue-600 border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[12px] text-white">
                      {item.type === 'board' ? 'grid_view' : item.type === 'move' ? 'sync' : 'chat_bubble'}
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-sm group-hover:shadow-2xl transition-all group-hover:-translate-x-1">
                  <div className="flex justify-between items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="font-headline-md text-sm font-black text-slate-900 dark:text-white tracking-tight uppercase group-hover:text-blue-600 transition-colors">{item.user}</span>
                        <span className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-widest">• {item.time}</span>
                      </div>
                      <p className="text-slate-500 dark:text-slate-400 font-bold text-sm leading-relaxed mb-6">
                        {item.action}{' '}
                        <span onClick={() => navigate('/boards-dashboard')} className="text-slate-900 dark:text-white font-black hover:text-blue-600 cursor-pointer decoration-blue-600/30 decoration-2 underline-offset-4 hover:underline">
                          {item.target}
                        </span>
                      </p>
                      {item.content && (
                        <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-950/50 rounded-[1.5rem] border border-slate-100 dark:border-slate-800 italic text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed relative overflow-hidden group/content">
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
                          "{item.content}"
                        </div>
                      )}
                      <div className="flex items-center gap-8">
                        <button className="flex items-center gap-2.5 font-black text-[10px] text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-all">
                          <span className="material-symbols-outlined text-lg">reply</span>
                          Reply
                        </button>
                        <button className="flex items-center gap-2.5 font-black text-[10px] text-slate-400 uppercase tracking-widest hover:text-emerald-500 transition-all">
                          <span className="material-symbols-outlined text-lg">thumb_up_off</span>
                          Boost
                        </button>
                        <button className="flex items-center gap-2.5 font-black text-[10px] text-slate-400 uppercase tracking-widest hover:text-rose-500 transition-all">
                          <span className="material-symbols-outlined text-lg">bookmark</span>
                          Save
                        </button>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined">more_horiz</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
