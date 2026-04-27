import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ViewsGallery = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 sticky">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-lg hover:bg-white/20 dark:hover:bg-slate-800 transition-colors p-1 rounded cursor-pointer" data-icon="grid_view">grid_view</span>
<h1 className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</h1>
<nav className="hidden md:flex gap-2 ml-4">
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 transition-colors" href="#">Workspace Boards</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Views Gallery</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Enterprise Admin</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-white/20">
<img alt="User profile" className="w-full h-full object-cover" data-alt="close-up portrait of a professional male executive in a neutral studio setting with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFH-PvmTxEB6dV8D5hfACb98JzinQgTl-hvfalIrCk8oTauLSOu-CBr_eHlMfDhpnTK51oV314oVY_etGP0wR6uX3GQ-ymuKApLDXqCKdCX3JSlGNCCBaYtPeAMQhD1Y4wlIvJGdNLRLvb-muBbeO4mErlGnhr5UQimg9bduJp4oq9QGNDstRu-lyLqXcAIgcEtWlhX2FWRiV0kTKMZJo6BMGigGikD3CqcFfPkhxrEx3gjRX69F8Bv5oIOv9A8bhzzPwNqZuRI5bJ"/>
</div>
</div>
</header>
<div className="flex min-h-screen">
{/*  NavigationDrawer (Sidebar)  */}
<aside className="hidden md:flex flex-col h-screen pt-4 pb-20 bg-slate-50 dark:bg-slate-900 font-sans text-sm font-semibold h-full w-64 border-r fixed left-0 top-12 border-r border-slate-200 dark:border-slate-800 z-40">
<div className="px-4 mb-6 flex items-center gap-3">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<div className="text-xl font-bold text-[#091E42] dark:text-white">Enterprise Global</div>
<div className="text-xs font-medium text-slate-500">Admin Console</div>
</div>
</div>
<nav className="flex-1 space-y-1 px-2">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors" data-icon="dashboard">dashboard</span>
<span>Workspace Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] transition-all" href="#">
<span className="material-symbols-outlined" data-icon="grid_on">grid_on</span>
<span>Views Gallery</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors" data-icon="psychology">psychology</span>
<span>AI Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors" data-icon="groups">groups</span>
<span>Team Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors" data-icon="insights">insights</span>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors" data-icon="bolt">bolt</span>
<span>Automation Settings</span>
</a>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 md:ml-64 p-md lg:p-xl bg-background min-h-screen pb-24 md:pb-12">
{/*  Hero Header Section  */}
<section className="max-w-7xl mx-auto mb-xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-lg">
<div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-fixed text-on-primary-fixed mb-sm">
                            WORKSPACE POWER-UP
                        </span>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Views Gallery</h2>
<p className="font-body-lg text-body-lg text-on-secondary-container mt-xs max-w-2xl">
                            Unlock new dimensions of productivity. Visualize your team's workload from every angle to identify bottlenecks and celebrate progress.
                        </p>
</div>
<button className="flex items-center justify-center gap-2 px-md py-sm bg-primary text-on-primary font-label-bold text-label-bold rounded-xl shadow-lg hover:shadow-xl transition-all scale-100 active:scale-95">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                        Create Custom View
                    </button>
</div>
{/*  Bento Grid Layout for Views  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Feature: Table View (Large Asymmetric)  */}
<div className="md:col-span-8 group relative overflow-hidden rounded-full bg-surface-container-lowest shadow-sm hover:shadow-md transition-all duration-300">
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 p-md lg:p-lg">
<div className="flex items-center gap-sm mb-sm text-primary">
<span className="material-symbols-outlined" data-icon="table_chart">table_chart</span>
<span className="font-label-bold text-label-bold uppercase tracking-wider">Table View</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Master your data landscape</h3>
<p className="text-body-md text-on-secondary-container mb-md">
                                    A multi-board spreadsheet experience. Sort, filter, and bulk-edit across your entire workspace in a single, high-density pane.
                                </p>
<div className="flex gap-xs">
<span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium">Bulk Editing</span>
<span className="px-2 py-1 rounded bg-surface-container-high text-xs font-medium">Custom Fields</span>
</div>
</div>
<div className="flex-1 min-h-[240px] relative bg-slate-100 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="clean UI interface of a data spreadsheet with blue and white accents showing business metrics and rows of information" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvSdw74LPWh2ogvhuqa8p8OCWACZgKonD8GsuXLT41mSoXcqI92BWJ2XYHNHhwr3E-m0q6LoeZCt3efWjKj27Q8q88934fYwHD3Jk46FTvLIjeZQcuvcgoAhzq_QR48Q7CmDy7O-asAiDsl-4riVxBBQYtiX1FZpqjDUyBu_zo2f_Ijsf2HMNO17KOO8rVsgBQ29Id6M5CyIc4yzwhEC3Cl4TWDQD2bBVvlA8JrVJlqQ_156r0HC8n8x2rix95F2JdtXhxCn2n1Iz9"/>
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface-container-lowest/20"></div>
</div>
</div>
</div>
{/*  Feature: Calendar View  */}
<div className="md:col-span-4 group bg-surface-container-lowest p-md rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="h-40 mb-md rounded-lg overflow-hidden bg-secondary-container/20">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="top down view of a clean minimal desk with a monthly paper calendar and soft daylight shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwnZY6S6ayzLfzIjQZJDIoBoNMVb4fgL-qEVWITtibBMe95OEZssgAy9oo5tFtHRdZUAe1Ov2P3gwfJ9-T7P4LSU6jesohcAbYGhWWnb8T74cpydrrbfmvZsTtoOugDLaPf-MJzJtUZ8pnQA0j5lvXd4sU2mDnbwrUVbP-wx2N6QFwNkAsljD9UlNqwfzgtfRfDODF8Bh7QURC2nBbCtf4FlnP5KDj3xdL8fMylneP5-u7WCiwmhxfYNERxtq-0WltbN7ocSBw9D1F"/>
</div>
<div className="flex items-center gap-sm mb-xs text-primary">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span className="font-label-bold text-label-bold uppercase tracking-wider">Calendar</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Sync with time</h3>
<p className="text-body-md text-on-secondary-container">
                            Map out deadlines and milestones. The perfect bird's-eye view for editorial calendars and event planning.
                        </p>
</div>
{/*  Feature: Timeline View  */}
<div className="md:col-span-4 group bg-surface-container-lowest p-md rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/10">
<div className="h-40 mb-md rounded-lg overflow-hidden bg-tertiary-container/10">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="close-up of a digital gantt chart on a screen with colorful progress bars and project timelines" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRjBWkwXxwdbgckiDjnM4rj4nWCoFxEQnt0AouPy3gElPxIs6B_RSJBzoMLRiRD--z-Eav36ONisasdzMm2IRb9qULvmFvAX1c6RBO1RzHDqO3ZDibhYdGc4SZtqhcL1xM0p3ciLHR_JsVI2_x2iw_7SyZbfnijLVgc8qFtu9JYCbQs6Toxs9L2oHAe6X8MQFPnYxeO7xz4wZmc4_M_zpr6JrXZC9LxBRn2bUokuQdUoNPqW5pNLH2rJ9VLaWOe7_XPIOMoLYdox-e"/>
</div>
<div className="flex items-center gap-sm mb-xs text-primary">
<span className="material-symbols-outlined" data-icon="view_timeline">view_timeline</span>
<span className="font-label-bold text-label-bold uppercase tracking-wider">Timeline</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-xs">Bridge the dependencies</h3>
<p className="text-body-md text-on-secondary-container">
                            Visualize project phases and overlaps. Manage resources and shift dates with simple drag-and-drop actions.
                        </p>
</div>
{/*  Feature: Dashboard View (Large)  */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-on-primary-fixed shadow-sm hover:shadow-md transition-all duration-300 border border-white/5">
<div className="flex flex-col lg:flex-row h-full">
<div className="flex-1 p-md lg:p-lg text-white">
<div className="flex items-center gap-sm mb-sm text-primary-fixed-dim">
<span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span className="font-label-bold text-label-bold uppercase tracking-wider">Dashboard</span>
</div>
<h3 className="font-headline-md text-headline-md text-white mb-xs">Data-driven decisions</h3>
<p className="text-body-md text-slate-300 mb-md">
                                    Visualize key metrics through pie charts, bar graphs, and line charts. Real-time reporting that keeps the whole team aligned on KPIs.
                                </p>
<div className="flex flex-wrap gap-xs">
<span className="px-2 py-1 rounded bg-white/10 text-xs font-medium text-slate-200">Velocity Tracking</span>
<span className="px-2 py-1 rounded bg-white/10 text-xs font-medium text-slate-200">Workload Balance</span>
</div>
</div>
<div className="flex-1 min-h-[240px] relative overflow-hidden bg-slate-900">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" data-alt="professional dark mode dashboard with glowing blue and purple charts and data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwuWVNBC7HKWagd1-K1EAXw_rwl9O5HOEn8z-0JyTFrP2Cp8NE9CaOFavw8i6kQLff4lxcvSv3D1dDYAk21m4FeYVEO3oBBQRQptw31cCcjhghyi1gRVoPqNAorJvXvQwikv3JXmY_lx0hj8JTnqQhIl134EmpN8DG2DAg_Tdd7No4RGYh1x6yemidfKA9_YqUxuFPp7m-5kBjH2wWFwNmO9Byy0qivnHmuk2nKyZTG6tklPM_jgfq_cp1MeKX0D1Xu9MD7ej_v7Lv"/>
</div>
</div>
</div>
{/*  Feature: Map View  */}
<div className="md:col-span-12 group glass-card p-md lg:p-lg rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center gap-lg">
<div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden relative shadow-inner">
<img className="w-full h-full object-cover" data-alt="minimalist world map with subtle pins and connection lines in a professional aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqDSlioSYyYg4HmWd1eJjmdzGntXMF4dYLQDJQpc-z8-GNcguIqop17TH3142dCzxBwmIXTwnjt0w4vgOmsuOL_ulN2CsFeT4-nkHisG-Hhd8Jentf9eah9aT-Zt7xf0HgNS3RCidV-ThupqM5Ppx7vLSVlsAX_h8du7tbIU8coCXvNmlCEi49_guUwQ2l9xJdw37kwyOg0WLDhdF7mz9wnAoiRL6xfLtRlTQbiL_TZDZ8my-RL5GmTIsnt_rdCPKLzqlLWVp0_uql"/>
<div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
</div>
<div className="w-full md:w-1/2">
<div className="flex items-center gap-sm mb-xs text-primary">
<span className="material-symbols-outlined" data-icon="map">map</span>
<span className="font-label-bold text-label-bold uppercase tracking-wider">Map View</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Context through location</h3>
<p className="text-body-lg text-on-secondary-container mb-md max-w-md">
                                Give your tasks a sense of place. Perfect for logistics, real estate, event scouting, or remote team distribution.
                            </p>
<a className="inline-flex items-center gap-2 text-primary font-label-bold hover:underline" href="#">
                                Explore Use Cases
                                <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  Bottom Call to Action Section  */}
<section className="max-w-4xl mx-auto py-xl text-center">
<div className="p-lg bg-surface-container rounded-full border border-outline-variant/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Need something more specific?</h2>
<p className="text-body-md text-on-secondary-container mb-md">
                        Our Enterprise plan allows for API-driven custom views. Connect your own data sources and build a visualization that matches your unique workflow.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-md">
<button className="w-full sm:w-auto px-lg py-sm bg-primary text-on-primary font-label-bold rounded-full shadow hover:bg-primary-container transition-colors">
                            Talk to Enterprise Sales
                        </button>
<button className="w-full sm:w-auto px-lg py-sm border border-outline text-on-surface-variant font-label-bold rounded-full hover:bg-surface-variant transition-colors">
                            View Documentation
                        </button>
</div>
</div>
</section>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 md:hidden z-50 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 group active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Boards</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="grid_on" style={{"fontVariationSettings":"'FILL' 1"}}>grid_on</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Gallery</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Admin</span>
</a>
</nav>

    </>
  );
};

export default ViewsGallery;
