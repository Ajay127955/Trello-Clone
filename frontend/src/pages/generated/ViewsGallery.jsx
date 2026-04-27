import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ViewsGallery = () => {
  const navigate = useNavigate();
  return (
const ViewsGallery = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>Workspace Power-Up</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Visualizations</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Views Gallery</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Unlock new dimensions of productivity. Visualize the global matrix from every angle.</p>
        </div>
        <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
          <span className="material-symbols-outlined text-lg">add_circle</span>
          Synthesize Custom View
        </button>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Large Feature: Table View */}
        <div className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8 text-blue-600">
                <span className="material-symbols-outlined text-2xl">table_chart</span>
                <span className="font-black text-[10px] uppercase tracking-widest">Protocol: Table</span>
              </div>
              <h3 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Master the data landscape.</h3>
              <p className="text-sm font-medium text-slate-400 leading-relaxed mb-10 max-w-md italic">
                A multi-board spreadsheet experience. Sort, filter, and bulk-edit across the entire infrastructure in a single, high-density pane.
              </p>
              <div className="flex gap-4">
                <span className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-slate-800">Bulk Editing</span>
                <span className="px-5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 dark:border-slate-800">Custom Fields</span>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] relative overflow-hidden bg-slate-50 dark:bg-slate-950">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 dark:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvSdw74LPWh2ogvhuqa8p8OCWACZgKonD8GsuXLT41mSoXcqI92BWJ2XYHNHhwr3E-m0q6LoeZCt3efWjKj27Q8q88934fYwHD3Jk46FTvLIjeZQcuvcgoAhzq_QR48Q7CmDy7O-asAiDsl-4riVxBBQYtiX1FZpqjDUyBu_zo2f_Ijsf2HMNO17KOO8rVsgBQ29Id6M5CyIc4yzwhEC3Cl4TWDQD2bBVvlA8JrVJlqQ_156r0HC8n8x2rix95F2JdtXhxCn2n1Iz9" />
              <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Small Feature: Calendar */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="h-56 mb-10 rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 relative shadow-inner">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 dark:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwnZY6S6ayzLfzIjQZJDIoBoNMVb4fgL-qEVWITtibBMe95OEZssgAy9oo5tFtHRdZUAe1Ov2P3gwfJ9-T7P4LSU6jesohcAbYGhWWnb8T74cpydrrbfmvZsTtoOugDLaPf-MJzJtUZ8pnQA0j5lvXd4sU2mDnbwrUVbP-wx2N6QFwNkAsljD9UlNqwfzgtfRfDODF8Bh7QURC2nBbCtf4FlnP5KDj3xdL8fMylneP5-u7WCiwmhxfYNERxtq-0WltbN7ocSBw9D1F" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600/10">
              <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-2xl flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined text-3xl">play_arrow</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-6 text-blue-600">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-black text-[10px] uppercase tracking-widest">Protocol: Calendar</span>
          </div>
          <h3 className="font-headline-xl text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Sync with time.</h3>
          <p className="text-sm font-medium text-slate-400 leading-relaxed italic">Map out deadlines and milestones. The perfect bird's-eye view for editorial calendars and global launches.</p>
        </div>

        {/* Small Feature: Timeline */}
        <div className="col-span-12 lg:col-span-4 bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group">
          <div className="h-56 mb-10 rounded-[2rem] overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 relative shadow-inner">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80 dark:opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRjBWkwXxwdbgckiDjnM4rj4nWCoFxEQnt0AouPy3gElPxIs6B_RSJBzoMLRiRD--z-Eav36ONisasdzMm2IRb9qULvmFvAX1c6RBO1RzHDqO3ZDibhYdGc4SZtqhcL1xM0p3ciLHR_JsVI2_x2iw_7SyZbfnijLVgc8qFtu9JYCbQs6Toxs9L2oHAe6X8MQFPnYxeO7xz4wZmc4_M_zpr6JrXZC9LxBRn2bUokuQdUoNPqW5pNLH2rJ9VLaWOe7_XPIOMoLYdox-e" />
          </div>
          <div className="flex items-center gap-3 mb-6 text-blue-600">
            <span className="material-symbols-outlined">view_timeline</span>
            <span className="font-black text-[10px] uppercase tracking-widest">Protocol: Timeline</span>
          </div>
          <h3 className="font-headline-xl text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Bridge dependencies.</h3>
          <p className="text-sm font-medium text-slate-400 leading-relaxed italic">Visualize project phases and overlaps. Manage resources and shift dates with fluid drag-and-drop actions.</p>
        </div>

        {/* Large Feature: Dashboard */}
        <div className="col-span-12 lg:col-span-8 bg-slate-900 rounded-[3rem] shadow-2xl overflow-hidden group hover:shadow-blue-600/20 transition-all duration-500 relative">
          <div className="absolute top-0 right-0 p-16 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[200px] text-white">monitoring</span>
          </div>
          <div className="flex flex-col lg:flex-row h-full relative z-10">
            <div className="flex-1 p-12 lg:p-16 flex flex-col justify-center text-white">
              <div className="flex items-center gap-3 mb-8 text-blue-400">
                <span className="material-symbols-outlined text-2xl">monitoring</span>
                <span className="font-black text-[10px] uppercase tracking-widest">Protocol: Dashboard</span>
              </div>
              <h3 className="font-headline-xl text-3xl font-black text-white mb-6 tracking-tight">Data-driven decisions.</h3>
              <p className="text-sm font-medium text-slate-300 leading-relaxed mb-10 max-w-md italic">
                Visualize key telemetry through advanced charting. Real-time reporting that keeps the entire ecosystem aligned on KPIs.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-300">Velocity Tracking</div>
                <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-300">Load Balance</div>
              </div>
            </div>
            <div className="flex-1 min-h-[400px] relative overflow-hidden">
              <img className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwuWVNBC7HKWagd1-K1EAXw_rwl9O5HOEn8z-0JyTFrP2Cp8NE9CaOFavw8i6kQLff4lxcvSv3D1dDYAk21m4FeYVEO3oBBQRQptw31cCcjhghyi1gRVoPqNAorJvXvQwikv3JXmY_lx0hj8JTnqQhIl134EmpN8DG2DAg_Tdd7No4RGYh1x6yemidfKA9_YqUxuFPp7m-5kBjH2wWFwNmO9Byy0qivnHmuk2nKyZTG6tklPM_jgfq_cp1MeKX0D1Xu9MD7ej_v7Lv" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-slate-900"></div>
            </div>
          </div>
        </div>

        {/* Full Width: Map View */}
        <div className="col-span-12 bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 h-80 rounded-[2.5rem] overflow-hidden relative shadow-inner border border-slate-50 dark:border-slate-800">
              <img className="w-full h-full object-cover opacity-80 dark:opacity-30 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqDSlioSYyYg4HmWd1eJjmdzGntXMF4dYLQDJQpc-z8-GNcguIqop17TH3142dCzxBwmIXTwnjt0w4vgOmsuOL_ulN2CsFeT4-nkHisG-Hhd8Jentf9eah9aT-Zt7xf0HgNS3RCidV-ThupqM5Ppx7vLSVlsAX_h8du7tbIU8coCXvNmlCEi49_guUwQ2l9xJdw37kwyOg0WLDhdF7mz9wnAoiRL6xfLtRlTQbiL_TZDZ8my-RL5GmTIsnt_rdCPKLzqlLWVp0_uql" />
              <div className="absolute inset-0 bg-blue-600/5 pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex items-center gap-3 mb-8 text-blue-600">
                <span className="material-symbols-outlined text-2xl">map</span>
                <span className="font-black text-[10px] uppercase tracking-widest">Protocol: Map</span>
              </div>
              <h3 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Context through location.</h3>
              <p className="text-base font-medium text-slate-400 leading-relaxed mb-10 max-w-lg italic">
                Give your nodes a sense of place. Perfect for global logistics, remote team distribution, or infrastructure scouting.
              </p>
              <button className="flex items-center gap-4 text-blue-600 font-black text-[10px] uppercase tracking-widest group/btn hover:translate-x-2 transition-transform">
                Explore Matrix Use Cases
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise CTA */}
      <div className="mt-32 max-w-4xl mx-auto">
        <div className="bg-slate-50 dark:bg-slate-950 p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden group/cta">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 via-emerald-400 to-blue-600"></div>
          <h2 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Need a custom dimension?</h2>
          <p className="text-sm font-medium text-slate-400 max-w-2xl mx-auto mb-12 italic leading-relaxed">
            Enterprise protocols allow for API-driven custom visualizations. Connect proprietary data streams and synthesize views that match your unique operational matrix.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-slate-900 dark:bg-blue-600 px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95">
              Contact Systems Admin
            </button>
            <button className="px-12 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-all active:scale-95">
              Access Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsGallery;
