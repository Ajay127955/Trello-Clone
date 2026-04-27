import React from 'react';
import { useNavigate } from 'react-router-dom';

const BoardMapView = () => {
  const navigate = useNavigate();
  const [mapMode, setMapMode] = React.useState('cards');

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-100px)] flex flex-col">
      {/* Map Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 shrink-0">
        <div className="flex items-center gap-6">
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white tracking-tighter">Locations</h1>
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {['cards', 'markers'].map((mode) => (
              <button 
                key={mode}
                onClick={() => setMapMode(mode)}
                className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${mapMode === mode ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500'}`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
        <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
          <span className="material-symbols-outlined text-lg">add_location</span>
          Add Space
        </button>
      </div>

      {/* Map Content Area */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden flex">
        {/* Map Canvas */}
        <div className="flex-1 relative bg-slate-100 dark:bg-slate-950 overflow-hidden">
          <img 
            className="w-full h-full object-cover dark:opacity-40 grayscale-[0.2]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVV_SBGzgWbh_rozTjV-qUyj26JrB5Yt0r06Ob0vsU6vlOmrmeTZDwmKpse7PaT4A1F4i7V7h0h7m8MW2eVtKxuulRMDrue5SlLkx2rHzi13W_RTdPOqMJYoF_0BqQm1gPva3DccrmYGUVRr1E-bLGvqe9LjUUp0sQPtXSHnU5cfVDg_uLvDcDl1mBU9Lf2I-3XiT-F-9nnJN0cY6G3HsDTeesmedUrLuN3TXtJaA2bqk3oQ281FrmDNtpCkJeVTunnunU2t5UMT4" 
            alt="San Francisco Map"
          />
          <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>
          
          {/* Custom Markers */}
          <div className="absolute top-[30%] left-[45%] group cursor-pointer">
            <div className="bg-white dark:bg-slate-800 p-1.5 rounded-2xl shadow-2xl border-2 border-blue-600 active:scale-95 transition-all">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzM_g3rbmzWyzWW2DL0MdB-7tBd5rouWe_REWsz-KEyhjUS8esZERnlcM9mCxrx5hbGUHKCzrL7BvCiUanSnbQr0cdrNlVdv-r0u3XJvjPfWvXg22zRiOon8bt0vyQJnXVLxkVtsQZ2yuYKv3ynC7rEa8B9kdlQgmB8uXR9vjpxwbe8hEIcbIbAZt9n4xRg-YX0ycX48nqPtyPxWFWs_WKyxG6VbLkGYaV6NrnWF7Jvw1swColkZr2NtnOrH2vpLJQKQdbysLUHye4" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 pointer-events-none z-10">
              <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl min-w-[200px]">
                <span className="font-black text-[10px] text-blue-400 uppercase tracking-widest block mb-1">HQ Office</span>
                <p className="font-bold text-sm">Strategy Meeting 01</p>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-8 right-8 flex flex-col gap-3">
            {[
              { icon: 'add', color: 'slate' },
              { icon: 'remove', color: 'slate' },
              { icon: 'my_location', color: 'blue' }
            ].map((btn, idx) => (
              <button key={idx} className={`w-12 h-12 rounded-2xl shadow-2xl flex items-center justify-center transition-all active:scale-90 ${btn.color === 'blue' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-white'}`}>
                <span className="material-symbols-outlined text-xl">{btn.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Location Sidebar */}
        <div className="w-96 bg-slate-50/50 dark:bg-slate-800/30 border-l border-slate-100 dark:border-slate-800 overflow-y-auto hidden xl:block">
          <div className="p-8 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 sticky top-0 z-20">
            <h4 className="font-headline-md text-xl font-black text-slate-900 dark:text-white mb-6">Directory</h4>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input 
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-50 dark:border-slate-800 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold focus:border-blue-600 outline-none transition-all" 
                placeholder="Search venues..." 
                type="text"
              />
            </div>
          </div>
          <div className="p-6 space-y-6">
            {[
              { tag: 'Strategy', title: 'Main Office HQ', desc: 'Q4 planning session', color: 'blue' },
              { tag: 'Dining', title: 'The Bistro Downtown', desc: 'Networking venue visit', color: 'emerald' },
              { tag: 'Event', title: 'Grand Hall Center', desc: 'Keynote stage setup', color: 'purple' }
            ].map((loc, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden">
                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-${loc.color === 'blue' ? 'blue-600' : loc.color === 'emerald' ? 'emerald-500' : 'purple-500'}`}></div>
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${loc.color === 'blue' ? 'bg-blue-50 text-blue-600' : loc.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 'bg-purple-50 text-purple-600'}`}>
                    {loc.tag}
                  </span>
                  <span className="material-symbols-outlined text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">more_horiz</span>
                </div>
                <h5 className="font-black text-sm text-slate-900 dark:text-white mb-2 tracking-tight">{loc.title}</h5>
                <p className="font-bold text-[11px] text-slate-400 line-clamp-2">{loc.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1,2].map(u => (
                        <div key={u} className="w-8 h-8 rounded-xl border-4 border-white dark:border-slate-900 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?u=${u+loc.title}`} className="w-full h-full object-cover" />
                        </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-blue-600 transition-colors">
                    <span className="material-symbols-outlined text-sm">near_me</span>
                    <span className="font-black text-[9px] uppercase">Route</span>
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

export default BoardMapView;
