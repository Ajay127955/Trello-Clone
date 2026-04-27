import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const StrategicRoadmap = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white flex justify-between items-center w-full px-4 h-12 docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-4">
<button className="hover:bg-white/20 transition-colors p-1.5 rounded">
<span className="material-symbols-outlined text-white" data-icon="grid_view">grid_view</span>
</button>
<h1 className="font-sans text-lg font-black tracking-tight text-white dark:text-blue-500">TaskFlow Enterprise</h1>
<nav className="hidden md:flex items-center gap-1 ml-4">
<button className="text-white bg-white/10 rounded-md px-3 py-1.5 font-sans text-sm font-medium tracking-tight">Workspace Boards</button>
<button className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight transition-colors">Recent</button>
<button className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight transition-colors">Starred</button>
<button className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight transition-colors">Templates</button>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex bg-white/10 rounded-md px-2 py-1 items-center gap-2">
<span className="material-symbols-outlined text-slate-300 text-sm" data-icon="search">search</span>
<input className="bg-transparent border-none text-sm text-white placeholder-slate-400 focus:ring-0 w-32 lg:w-48" placeholder="Search roadmap..." type="text"/>
</div>
<button className="hover:bg-white/20 transition-colors p-1.5 rounded">
<span className="material-symbols-outlined text-white" data-icon="notifications">notifications</span>
</button>
<img alt="User profile" className="h-8 w-8 rounded-full border-2 border-white/20" data-alt="professional headshot of a business executive with a warm smile and neutral office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQxlDZ3gBvx3-wf4jqNYOzNqOeYzODdin7YFbS7CGfetOJFwyQNxhnSzBt2logfKZMnSPq6EGPJ29XmyrnKrIcYkA16r6KuJGWKN-q50rbvR9Te5BaWiwvHwd85pj8MO9PxM9j2p0Swil_XfHLF6JF-jtgOZ18iF6BXEMjyZp_uZ-QRygPMlva_Bqjo1hd2hz2gUb5RO_KoLvgfE4BfEWe6Tn2qHuBMce64BgYP8b8jjG1JX_daw657ZUMCtVsU4lMWWs8yvu4hart"/>
</div>
</header>
<div className="flex h-[calc(100vh-48px)]">
{/*  NavigationDrawer  */}
<aside className="bg-slate-50 dark:bg-slate-900 h-full w-64 border-r border-slate-200 dark:border-slate-800 fixed left-0 top-12 z-40 hidden lg:flex flex-col pt-4 pb-20 overflow-y-auto">
<div className="px-4 mb-6 flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="business">business</span>
</div>
<div>
<h3 className="text-[#091E42] dark:text-white font-sans text-sm font-bold">Enterprise Global</h3>
<p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">Admin Console</p>
</div>
</div>
<div className="space-y-1 px-2">
<a className="bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] flex items-center gap-3 px-3 py-2.5 rounded-l-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-sans text-sm font-semibold">Workspace Boards</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 px-3 py-2.5 rounded-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-sans text-sm font-semibold">AI Command Center</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 px-3 py-2.5 rounded-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="font-sans text-sm font-semibold">Enterprise Admin</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 px-3 py-2.5 rounded-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-sans text-sm font-semibold">Team Management</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 px-3 py-2.5 rounded-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-sans text-sm font-semibold">Analytics</span>
</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 px-3 py-2.5 rounded-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span className="font-sans text-sm font-semibold">Automation Settings</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 lg:ml-64 bg-background p-6 overflow-hidden flex flex-col">
{/*  Strategic Header  */}
<div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="font-headline-xl text-on-surface">Product Strategic Roadmap 2024</h2>
<p className="font-body-md text-on-secondary-container mt-1">High-level milestones and cross-functional dependencies for Enterprise Global.</p>
</div>
<div className="flex items-center gap-3 bg-surface-container-high p-2 rounded-xl border border-outline-variant">
<div className="flex -space-x-2">
<img alt="Team member" className="h-8 w-8 rounded-full border-2 border-surface-container-high" data-alt="close up portrait of a smiling woman with glasses and dark hair in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaeC0ZiyLC7pTC1mim8DzHx9rCPn1L8ajkVFXsihjiRwxwyWdOKH9dsuBhDEevV4AYRHKMfI8Y40Isff0cL-tUdszylrpgNI4Z12Jk9dPH5KkzdBkq7sFdoEXjbrlfLCeEbYcrjQwQTUye6PoGg7eTFiZjITjCE81Hnufk5UZF7uJzdyj8vx-PI318ECZ6XFFMWFztzdnzSQ59Ss7-XOSVR___BKF_Ws21RIoMPoMsl1ANWPw-HzO0fWdPzcTA2uCs6_bUf1bGZs00"/>
<img alt="Team member" className="h-8 w-8 rounded-full border-2 border-surface-container-high" data-alt="headshot of a man with a beard wearing a light blue shirt in a bright office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB1NX4R5EFvs1r5ZdRqZeezAkIIsDUbng75R5nGvuL4JViRfrmw249_arG5evArkzmSKFNi3pyNWQKnmYeqF2QW39VW_LjtUUkF-K-1G2nf50qam5ayJPo44FBXtguVhJ5W_bLS5_zd1RZw63xsz2sz15ZsoXyRMvfDf5N_1-8_C98PTJauDh0ZyeH-zvQ4W7uFkuWX-o3WjALS68vnywAY-4KbTnR2Gj7oq-5uN0hFdGtS0n0MrIsiKwN5A6ZerrA9rchqh6HiALW"/>
<div className="h-8 w-8 rounded-full border-2 border-surface-container-high bg-secondary-container text-on-secondary-fixed text-[10px] flex items-center justify-center font-bold">+12</div>
</div>
<div className="h-6 w-px bg-outline-variant"></div>
<button className="bg-primary-container text-white px-4 py-2 rounded-xl font-label-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="share">share</span>
                        Share Board
                    </button>
</div>
</div>
{/*  Progress Tracker (Asymmetric Bento Element)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8">
<div className="lg:col-span-8 bg-surface-container-lowest p-5 rounded-full border border-outline-variant shadow-sm flex items-center gap-6">
<div className="flex-1">
<div className="flex justify-between items-end mb-2">
<span className="font-label-bold text-primary">FY24 Overall Roadmap Progress</span>
<span className="font-label-bold text-on-secondary-container">64% Complete</span>
</div>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden flex">
<div className="bg-primary h-full" style={{"width":"64%"}}></div>
</div>
</div>
<div className="flex gap-4">
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Completed</p>
<p className="font-headline-md text-primary">18</p>
</div>
<div className="h-8 w-px bg-outline-variant self-center"></div>
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">In Flight</p>
<p className="font-headline-md text-on-secondary-container">7</p>
</div>
</div>
</div>
<div className="lg:col-span-4 bg-primary-container text-white p-5 rounded-full border border-primary flex items-center justify-between shadow-md">
<div className="flex items-center gap-3">
<div className="bg-white/20 p-2 rounded-full">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</div>
<p className="font-label-bold">Strategic Insights (AI)</p>
</div>
<button className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold">View</button>
</div>
</div>
{/*  Board View (Fluid Grid)  */}
<div className="flex-1 overflow-x-auto roadmap-scrollbar pb-4 -mx-6 px-6">
<div className="flex gap-6 h-full items-start">
{/*  Milestone Column: Q1 Launch  */}
<div className="w-80 flex-shrink-0 bg-surface-container-low rounded-xl p-3 flex flex-col max-h-full">
<div className="flex justify-between items-center mb-4 px-1">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-emerald-500"></span>
<h3 className="font-label-bold text-on-surface">Q1: Foundation &amp; Scale</h3>
</div>
<span className="material-symbols-outlined text-on-secondary-container cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div className="space-y-4 overflow-y-auto pr-1">
{/*  Card 1: Strategic Task  */}
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="flex gap-2 mb-3">
<span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full">CORE</span>
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">DONE</span>
</div>
<h4 className="font-headline-md text-on-surface mb-2">Global Infrastructure Migration</h4>
<p className="text-body-md text-on-secondary-container mb-4 line-clamp-2">Move primary data clusters to Tier-1 availability zones for 99.99% uptime guarantee.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" data-icon="comment">comment</span>
<span className="font-label-sm">12</span>
</div>
<img alt="Assignee" className="h-6 w-6 rounded-full" data-alt="professional portrait of a man in a white shirt against a neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrSC1zLeMaraw6Z-sf4Bcje-AxySP9U7gzFcccOX-fAPRb3ehv4u3ZcNsrDYLsNNeplcEA2V6ZnnZnL-kC4HwXz_KBRZMZ6C9v1BBbRljcZav_5vHaDMR6h-rZvHCS4khZ8IUeu8s1UDcyx3Ul8kdjCfquKhpd56upYabNm93iG3nJtNNLyt4ZpfW6vp3Nnh9mPcK4WxiqqhDrrg_eH3OmX-hHBo5CM8JvDh-YbpDfBFgOOHXrtB7-VvcS8avQl8G0NYoFFv7mY6o4"/>
</div>
</div>
{/*  Card 2: Strategic Task  */}
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="flex gap-2 mb-3">
<span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">LEGAL</span>
</div>
<h4 className="font-headline-md text-on-surface mb-2">Security Compliance Audit</h4>
<p className="text-body-md text-on-secondary-container mb-4">Complete SOC2 Type II and GDPR renewal certifications for enterprise accounts.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-sm" data-icon="attachment">attachment</span>
<span className="font-label-sm">4 Docs</span>
</div>
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-slate-200 border border-white flex items-center justify-center text-[8px] font-bold">JD</div>
<div className="h-6 w-6 rounded-full bg-blue-200 border border-white flex items-center justify-center text-[8px] font-bold">AS</div>
</div>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-on-secondary-container hover:bg-surface-container-high rounded-xl transition-colors font-label-bold">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add Strategic Goal
                        </button>
</div>
{/*  Milestone Column: Q2 Growth  */}
<div className="w-80 flex-shrink-0 bg-surface-container-low rounded-xl p-3 flex flex-col max-h-full">
<div className="flex justify-between items-center mb-4 px-1">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<h3 className="font-label-bold text-on-surface">Q2: AI &amp; Automation</h3>
</div>
<span className="material-symbols-outlined text-on-secondary-container cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div className="space-y-4 overflow-y-auto pr-1">
{/*  Dependency Visualization Card  */}
<div className="bg-surface-container-lowest p-4 rounded-xl border-l-4 border-l-primary border border-outline-variant shadow-sm">
<div className="flex gap-2 mb-3">
<span className="bg-primary-container text-white text-[10px] font-bold px-2 py-0.5 rounded-full">STRATEGIC</span>
<span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">IN PROGRESS</span>
</div>
<h4 className="font-headline-md text-on-surface mb-2">GenAI Assistant Launch</h4>
<div className="bg-primary/5 p-3 rounded-lg mb-4 border border-primary/20">
<div className="flex items-center gap-2 text-primary mb-1">
<span className="material-symbols-outlined text-xs" data-icon="link">link</span>
<span className="text-[10px] font-bold uppercase tracking-wide">Dependency</span>
</div>
<p className="text-[11px] text-primary-container leading-tight">Blocked by: Infrastructure Migration (Q1)</p>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" data-icon="event">event</span>
<span className="font-label-sm">May 15</span>
</div>
<img alt="Assignee" className="h-6 w-6 rounded-full" data-alt="close up of a woman with short hair and a focused expression in a modern creative studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr6D1_1pv8qVB_JgcaGxmxjMhlofg_7gGIs6T-mw3KpSEBoUN4zfMUIs1wg8yELSkpT3HdA_vgNTX9cg-zwDDNpFAP2xLW_PErRjc7Lt6WTndQDJ0M3rnB208StLVQxlvwUIzjZKGHbtyzT-U2Emv8y-4f3z_YszzZ-GrAeuC1KFw7nXa1LHWmdPm8BGpTca81LiN4JZ65jL3zJ1fFJWFdKoCTyk6A2gxi03k52g71MnqOB5mejSlOz8Hz7SJ4kYaifYPGb-K4L1fH"/>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm">
<div className="flex gap-2 mb-3">
<span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full">DESIGN</span>
</div>
<h4 className="font-headline-md text-on-surface mb-2">Project Canvas Redesign</h4>
<div className="flex items-center gap-3 mt-4">
<div className="flex-1 bg-surface-container h-1.5 rounded-full">
<div className="bg-primary h-full w-1/3"></div>
</div>
<span className="text-[10px] font-bold text-slate-500">35%</span>
</div>
</div>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-on-secondary-container hover:bg-surface-container-high rounded-xl transition-colors font-label-bold">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add Strategic Goal
                        </button>
</div>
{/*  Milestone Column: Q3 Optimization  */}
<div className="w-80 flex-shrink-0 bg-surface-container-low rounded-xl p-3 flex flex-col max-h-full">
<div className="flex justify-between items-center mb-4 px-1">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-slate-300"></span>
<h3 className="font-label-bold text-on-surface">Q3: Global Expansion</h3>
</div>
<span className="material-symbols-outlined text-on-secondary-container cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div className="space-y-4 overflow-y-auto pr-1">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant shadow-sm opacity-70 grayscale-[0.5]">
<div className="flex gap-2 mb-3">
<span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">FUTURE</span>
</div>
<h4 className="font-headline-md text-on-surface mb-2">APAC Regional Hub</h4>
<p className="text-body-md text-on-secondary-container mb-4">Establish dedicated data centers in Tokyo and Singapore for reduced latency.</p>
<div className="flex justify-between items-center">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" data-icon="map">map</span>
<span className="font-label-sm">2 Regions</span>
</div>
</div>
</div>
<div className="bg-white/50 border-2 border-dashed border-outline-variant p-6 rounded-xl flex flex-col items-center justify-center text-center">
<span className="material-symbols-outlined text-slate-400 mb-2" data-icon="rocket_launch">rocket_launch</span>
<p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Drafting Phase</p>
</div>
</div>
<button className="mt-4 w-full py-2 flex items-center justify-center gap-2 text-on-secondary-container hover:bg-surface-container-high rounded-xl transition-colors font-label-bold">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add Strategic Goal
                        </button>
</div>
{/*  Empty/New Column  */}
<div className="w-80 flex-shrink-0 bg-surface-container-low/50 border-2 border-dashed border-outline-variant rounded-xl p-3 h-48 flex items-center justify-center hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="text-center">
<div className="bg-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
<span className="material-symbols-outlined text-slate-400" data-icon="add">add</span>
</div>
<p className="font-label-bold text-slate-500">Add Quarter Milestone</p>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 md:hidden border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
<button className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Boards</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase">AI</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Admin</span>
</button>
</nav>
{/*  FAB: Only for core dashboard actions  */}
<button className="fixed right-6 bottom-20 md:bottom-8 bg-primary-container text-white h-14 w-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-40">
<span className="material-symbols-outlined" data-icon="add_task">add_task</span>
</button>

    </>
  );
};

export default StrategicRoadmap;
