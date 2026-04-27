import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchResults = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-4 h-14">
<div className="flex items-center gap-4">
<button className="text-slate-600 dark:text-slate-400 active:scale-95 duration-150 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="text-blue-600 dark:text-blue-400 font-black text-xl font-inter tracking-tight">Trello</h1>
</div>
<div className="flex-1 max-w-2xl px-8 hidden md:block">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-body-md" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-none rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary-container text-body-md transition-all" placeholder="Search for cards, boards, or people..." type="text"/>
</div>
</div>
<div className="flex items-center gap-2">
<button className="text-slate-600 dark:text-slate-400 active:scale-95 duration-150 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg md:hidden">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold shadow-sm">
                PU
            </div>
</div>
</header>
{/*  Main Content Area  */}
<main className="mt-14 mb-16 flex-1 w-full max-w-7xl mx-auto p-gutter lg:p-lg">
{/*  Search Header (Mobile/Tablet View Search Focus)  */}
<div className="mb-lg">
<div className="md:hidden mb-md">
<input className="w-full bg-white border border-outline-variant rounded-xl py-3 px-4 shadow-sm focus:ring-2 focus:ring-primary text-body-lg" type="text" value="Marketing Campaign"/>
</div>
<div className="flex items-baseline justify-between gap-4">
<h2 className="font-headline-md text-headline-md text-on-surface">Search Results for <span className="text-primary">"Marketing Campaign"</span></h2>
<span className="text-label-sm font-label-sm text-on-surface-variant">24 results found</span>
</div>
</div>
{/*  Bento Grid for Results  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Category: Boards (Featured Section)  */}
<section className="lg:col-span-8 flex flex-col gap-sm">
<div className="flex items-center justify-between px-2 mb-xs">
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Boards</h3>
<button className="text-primary text-label-sm font-medium hover:underline">View all</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
{/*  Board Card 1  */}
<div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-md">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-inner">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="star">star</span>
</div>
<h4 className="font-headline-md text-body-lg font-semibold mb-xs">Marketing Campaign 2024</h4>
<p className="text-label-sm font-label-sm text-on-surface-variant mb-md">Marketing Workspace • 12 members</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-400"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[8px] flex items-center justify-center text-white">+9</div>
</div>
</div>
{/*  Board Card 2  */}
<div className="bg-white p-md rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all cursor-pointer group">
<div className="flex items-start justify-between mb-md">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-inner">
<span className="material-symbols-outlined" data-icon="auto_graph">auto_graph</span>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors" data-icon="star">star</span>
</div>
<h4 className="font-headline-md text-body-lg font-semibold mb-xs">Global Growth Strategy</h4>
<p className="text-label-sm font-label-sm text-on-surface-variant mb-md">Executive Team • 5 members</p>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-6 h-6 rounded-full border-2 border-white bg-primary-container text-[8px] flex items-center justify-center text-white">+2</div>
</div>
</div>
</div>
{/*  Category: Cards (Deep List)  */}
<div className="mt-lg">
<div className="flex items-center justify-between px-2 mb-xs">
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Cards</h3>
<div className="flex items-center gap-2">
<span className="text-label-sm text-on-surface-variant">Sort by:</span>
<button className="text-label-sm font-bold flex items-center gap-1">Relevance <span className="material-symbols-outlined text-[14px]" data-icon="expand_more">expand_more</span></button>
</div>
</div>
<div className="flex flex-col gap-sm">
{/*  Card Result 1  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:border-primary-container transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-md group">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-primary text-[10px] font-bold uppercase tracking-wide">Marketing</span>
<span className="text-[10px] text-on-surface-variant">ID: T-402</span>
</div>
<h5 className="font-body-lg text-body-lg font-semibold group-hover:text-primary transition-colors">Quarterly Marketing Budget Approval</h5>
<div className="flex items-center gap-3 mt-1">
<span className="flex items-center gap-1 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="list">list</span> In: <span className="underline">To Do</span>
</span>
<span className="flex items-center gap-1 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span> Oct 12
                                    </span>
</div>
</div>
<div className="flex items-center gap-4 border-t md:border-t-0 pt-md md:pt-0">
<div className="flex items-center -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble_outline">chat_bubble_outline</span><span className="text-label-sm">4</span></div>
<div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]" data-icon="attach_file">attach_file</span><span className="text-label-sm">1</span></div>
</div>
</div>
</div>
{/*  Card Result 2  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant hover:border-primary-container transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-md group">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-wide">High Priority</span>
<span className="text-[10px] text-on-surface-variant">ID: T-389</span>
</div>
<h5 className="font-body-lg text-body-lg font-semibold group-hover:text-primary transition-colors">Social Media Marketing Asset Review</h5>
<div className="flex items-center gap-3 mt-1">
<span className="flex items-center gap-1 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="list">list</span> In: <span className="underline">In Review</span>
</span>
<span className="flex items-center gap-1 text-label-sm text-error">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span> Overdue
                                    </span>
</div>
</div>
<div className="flex items-center gap-4 border-t md:border-t-0 pt-md md:pt-0">
<div className="flex items-center -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]" data-icon="chat_bubble_outline">chat_bubble_outline</span><span className="text-label-sm">12</span></div>
<div className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]" data-icon="check_box">check_box</span><span className="text-label-sm">8/10</span></div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Sidebar: Members & Filters  */}
<aside className="lg:col-span-4 flex flex-col gap-lg">
{/*  Category: Members  */}
<section className="bg-white p-md rounded-xl border border-outline-variant shadow-sm">
<div className="flex items-center justify-between mb-md">
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Members</h3>
<span className="bg-surface-container text-on-surface-variant px-2 py-0.5 rounded text-[10px] font-bold">4 Matches</span>
</div>
<div className="flex flex-col gap-md">
{/*  Member 1  */}
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="professional portrait of a creative marketing director with friendly smile in natural daylight studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqjn0Sp3nh0zN0MynLsrx4gyYx-MevUvRor8Zlo7oB1XkoIpQzxDkn8L_dEFmqQ-gCZqez7slPDkRysHop6j4ZPiMyZLu79gT4aGikrSECP_OmhFG7PoisrDOGokOwi7ed7wCkUsttnhAffCp9xzRxYfBrW9TjSCTVzXWCfYQOXujd30_ZRM4lx3XUMOuXeQ-A2fw1WZi1hAdzq9xTgR4J8fXsmmmjBOX_7st-bnVcowiTKaQwLozatVNb88n23d--po7uiJDd831v"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h5 className="text-body-md font-semibold group-hover:text-primary transition-colors">Marketing Mike</h5>
<p className="text-label-sm text-on-surface-variant">Growth Lead</p>
</div>
</div>
{/*  Member 2  */}
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-sm">JS</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 border-2 border-white rounded-full"></div>
</div>
<div>
<h5 className="text-body-md font-semibold group-hover:text-primary transition-colors">Jane Smith</h5>
<p className="text-label-sm text-on-surface-variant">Campaign Designer</p>
</div>
</div>
<button className="w-full mt-2 py-2 border border-outline-variant rounded-lg text-label-sm font-semibold hover:bg-surface-container transition-colors">Search for more people</button>
</div>
</section>
{/*  Refine Search Filters  */}
<section className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-wider mb-md">Refine Search</h3>
<div className="flex flex-col gap-md">
<div className="flex flex-col gap-1.5">
<label className="text-label-sm font-bold">In Workspace</label>
<select className="bg-white border-outline-variant rounded-lg text-body-md py-1.5 focus:ring-primary">
<option>All Workspaces</option>
<option selected="">Marketing Team</option>
<option>Product Dev</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-label-sm font-bold">Created</label>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 rounded-full bg-white border border-outline-variant text-label-sm hover:border-primary">Anytime</button>
<button className="px-3 py-1 rounded-full bg-primary-container text-white text-label-sm font-bold">Past Month</button>
<button className="px-3 py-1 rounded-full bg-white border border-outline-variant text-label-sm hover:border-primary">Custom</button>
</div>
</div>
<div className="flex items-center gap-2 mt-2">
<input className="rounded border-outline-variant text-primary focus:ring-primary" id="archived" type="checkbox"/>
<label className="text-body-md" htmlFor="archived">Include archived items</label>
</div>
</div>
</section>
{/*  Recent Searches (Empty State Hint)  */}
<section>
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-wider mb-sm">Recent Searches</h3>
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between p-2 rounded hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="history">history</span>
<span className="text-body-md">Mobile App Redesign</span>
</div>
<span className="material-symbols-outlined text-[14px] text-outline opacity-0 group-hover:opacity-100" data-icon="close">close</span>
</div>
<div className="flex items-center justify-between p-2 rounded hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline" data-icon="history">history</span>
<span className="text-body-md">Q4 Roadmap</span>
</div>
<span className="material-symbols-outlined text-[14px] text-outline opacity-0 group-hover:opacity-100" data-icon="close">close</span>
</div>
</div>
</section>
</aside>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-white/80 backdrop-blur-md border-t border-slate-200 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 px-3 py-1" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-inter text-[10px] font-medium">Boards</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 bg-blue-50/50 rounded-xl px-3 py-1" href="#">
<span className="material-symbols-outlined" data-icon="search" style={{"fontVariationSettings":"'FILL' 1"}}>search</span>
<span className="font-inter text-[10px] font-bold">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 px-3 py-1" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="font-inter text-[10px] font-medium">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 px-3 py-1" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-inter text-[10px] font-medium">Account</span>
</a>
</nav>

    </>
  );
};

export default SearchResults;
