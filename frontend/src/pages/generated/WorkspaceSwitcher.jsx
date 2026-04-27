import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] dark:bg-slate-950 text-white dark:text-slate-100 border-b border-white/10 shadow-sm font-sans text-sm font-medium Inter">
<div className="flex items-center gap-4">
<button className="hover:bg-white/10 transition-colors p-1 rounded active:opacity-80 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 className="text-lg font-black text-white tracking-tight">Workspace</h1>
<nav className="hidden md:flex items-center gap-6 ml-4">
<a className="text-white font-bold border-b-2 border-white pb-1" href="#">Workspaces</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Recent</a>
<a className="text-slate-300 hover:text-white transition-colors" href="#">Starred</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="hover:bg-white/10 transition-colors p-1 rounded active:opacity-80 duration-150">
<span className="material-symbols-outlined" data-icon="search">search</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional woman with a friendly expression in a brightly lit office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVbll8lMWUIBs6djDfvjbyYF7zHXh8uK64joYvKOj05B7EvyAizsRfflQoC81n_jQ1gNoYAB5g9lMf32gt8r0vrShoz9ir4KUTAMBG7AjTwiX2PVVHjxaNNaiq2LIoMsNlECFbmeJts53c-0NlZAaG1h3p57xtqavb3igl48Z0RPmbiNPDj8PsB-1NJyRoVFgEo_MWfcDD0W4CUSpIxDfHFc590KGts4SucIuvFeu1hGCMazUPMaerTOZUmQJNKk1kpu9vNfENb9wG"/>
</div>
</div>
</header>
<div className="flex pt-12 min-h-screen">
{/*  NavigationDrawer (Sidebar)  */}
<aside className="hidden md:flex flex-col h-[calc(100vh-48px)] w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 gap-2 sticky top-12">
<div className="mb-6 px-2">
<span className="text-blue-600 dark:text-blue-400 font-bold font-headline-md">Productive Flow</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] duration-100 rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-sm text-label-sm">Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] duration-100 rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">Members</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-md active:scale-[0.98] duration-100" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Workspace Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] duration-100 rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-label-sm text-label-sm">Calendar</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] duration-100 rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="timeline">timeline</span>
<span className="font-label-sm text-label-sm">Timeline</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all active:scale-[0.98] duration-100 rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-sm text-label-sm">Dashboard</span>
</a>
<div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4 px-2">
<button className="w-full flex items-center justify-center gap-2 bg-primary text-white font-label-bold text-label-bold py-2 rounded-lg hover:bg-primary-fixed-dim hover:text-on-primary-fixed-variant transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                    Create Workspace
                </button>
</div>
</aside>
{/*  Main Content (Canvas)  */}
<main className="flex-1 p-gutter md:p-lg lg:p-xl bg-background overflow-y-auto">
<div className="max-w-5xl mx-auto">
<header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Your Workspaces</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Switch between different teams and project environments.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-xl text-body-md focus:ring-2 focus:ring-primary focus:border-primary transition-all w-full md:w-64" placeholder="Filter workspaces..." type="text"/>
</div>
</div>
</header>
{/*  Workspace List - Bento Grid Style  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/*  Primary Active Workspace (Large Card)  */}
<div className="lg:col-span-8 workspace-card bg-surface-container-lowest p-gutter md:p-md rounded-xl border border-surface-container-highest shadow-sm transition-all relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 p-4">
<span className="bg-primary-container text-on-primary-container font-label-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider">Current</span>
</div>
<div className="flex items-start gap-4 md:gap-6">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white shadow-md">
<span className="material-symbols-outlined text-4xl" data-icon="rocket_launch">rocket_launch</span>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface">Engineering Global</h3>
<div className="flex flex-wrap items-center gap-4 mt-2">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="group">group</span>
<span className="font-label-sm text-label-sm">42 Members</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="view_kanban">view_kanban</span>
<span className="font-label-sm text-label-sm">12 Boards</span>
</div>
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="schedule">schedule</span>
<span className="font-label-sm text-label-sm">Updated 2h ago</span>
</div>
</div>
<div className="mt-6 flex gap-2">
<button className="bg-primary text-white font-label-bold text-label-bold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                                        Open Workspace
                                        <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="bg-surface-container text-on-surface-variant font-label-bold text-label-bold px-4 py-2 rounded-lg hover:bg-surface-container-high transition-colors">
                                        Settings
                                    </button>
</div>
</div>
</div>
{/*  Background Pattern Decor  */}
<div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
<span className="material-symbols-outlined text-[180px]" data-icon="hub">hub</span>
</div>
</div>
{/*  Quick Stats Side Card  */}
<div className="lg:col-span-4 flex flex-col gap-gutter">
<div className="bg-[#091E42] text-white p-gutter rounded-xl shadow-sm flex flex-col justify-between h-full">
<div className="flex justify-between items-start">
<span className="font-label-bold text-slate-300">Total Activity</span>
<span className="material-symbols-outlined text-blue-400" data-icon="insights">insights</span>
</div>
<div>
<span className="text-3xl font-black">284</span>
<p className="text-slate-400 font-label-sm text-label-sm">Tasks completed this week</p>
</div>
<div className="mt-4 bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-blue-400 h-full w-[75%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-gutter rounded-xl border border-surface-container-highest shadow-sm">
<h4 className="font-label-bold text-label-bold mb-3">Power User Shortcuts</h4>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
<span className="text-body-md font-medium">Switch Board</span>
<span className="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] font-bold group-hover:bg-white transition-colors">⌘ K</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer group">
<span className="text-body-md font-medium">Create Task</span>
<span className="px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] font-bold group-hover:bg-white transition-colors">N</span>
</div>
</div>
</div>
</div>
{/*  Horizontal Divider  */}
<div className="lg:col-span-12 py-4 flex items-center gap-4">
<span className="font-label-bold text-on-surface-variant whitespace-nowrap">Other Workspaces</span>
<div className="h-px bg-surface-container-highest w-full"></div>
</div>
{/*  Other Workspaces List  */}
<div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Workspace Item 2  */}
<div className="workspace-card bg-surface-container-lowest p-md rounded-xl border border-surface-container-highest shadow-sm hover:-translate-y-1 transition-all cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
</div>
<div className="flex-1 overflow-hidden">
<h4 className="font-headline-md text-body-lg font-bold truncate">Marketing Team</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">12 Members</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="M1" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Close-up portrait of a man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuGoyWLXeAEGwcNHx-wUcnna1rhd7LSBIfW2fw-2DjQxuIA8zOaTSQywknyonyIMlmIRVfG_Y_h4u1Fy4Gp5nEn54r-Xuu3KngZQoE5mSqEgaadpVor1SMO3YhetW9Tgv0NB71KaTBUFGndU8z4XupS0XGjX7CKK9tk7agvS1YHisDcov_KEWIpq6Bc6PdCe1_LHVyc7Y6jlMjQxSx5pk3QL7aXGbpbASuw4aLko7NzlkBRxgJAU7hikmDVhqtkyHPrzMRHzINayPu"/>
<img alt="M2" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Headshot of a smiling woman with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBut4u0-_UfDyngYAkjrwoVrTdUJIQ6e8kviCvh-KP665AiarR1EM6R6wHTAz6bYRCtTNydakMAx7-RkhuuOqJ_SGBidaGERYHpvSlII4mZscc_-1e6SobfIVmsLWK87jEgcMh5pVKM2RTfJv26ivET68BK9-H0qv3vxlmajKErjRDxW4jqmfaUhpKfq430FWPXXYY2a7k2ACKYuRXOwrN1JybH6qVpm9td0I8SajFYQ5vIGNs_7OavztakNO4WDGgqHJ-rzn5rHKg_"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+9</div>
</div>
<button className="text-primary hover:bg-primary/5 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
{/*  Workspace Item 3  */}
<div className="workspace-card bg-surface-container-lowest p-md rounded-xl border border-surface-container-highest shadow-sm hover:-translate-y-1 transition-all cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
<span className="material-symbols-outlined" data-icon="design_services">design_services</span>
</div>
<div className="flex-1 overflow-hidden">
<h4 className="font-headline-md text-body-lg font-bold truncate">UX Research Lab</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">8 Members</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="M3" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Headshot of a man with professional glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy_gDiZZMYWqmpgyLk6AokoZJe0xrtk03Sl9Pspwb9Ndxq_HiWEd7R2-afyfXniiOQW0v9gGTxMff8jC4J2CZY_WvFdcHtGHNroxMrkypFMXhyLkYA50Ds6mVaGDeKT_GyyEBPpeBn7KC8eZVRQIjMrsc2TFbw3Yo_2c1kT6rIVsMO862OA8qtGkpCozOhylWAGCwXAJ9ld_oUMwZ-us5DJ1NirSaYOnDKw4gaf_8bG_C2-VEx44uzorAnKLfmHkK5KJl6icl7G6W4"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+5</div>
</div>
<button className="text-primary hover:bg-primary/5 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
{/*  Workspace Item 4  */}
<div className="workspace-card bg-surface-container-lowest p-md rounded-xl border border-surface-container-highest shadow-sm hover:-translate-y-1 transition-all cursor-pointer">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<div className="flex-1 overflow-hidden">
<h4 className="font-headline-md text-body-lg font-bold truncate">Finance &amp; Strategy</h4>
<p className="font-label-sm text-label-sm text-on-surface-variant">5 Members</p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="M4" className="w-6 h-6 rounded-full border-2 border-white" data-alt="Portrait of a female business executive" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjvyeQbNd9Uyqg-9UAhoH8xUQYs0Nqj9n0HyRltsP6aFKGS1Y5F9NplvR9xH1i0kAY6bH7eeGAS00DX7ZKqzmpdyspc1Tj1QuioCPThtG5YUtjCpbuJPm3UrMoSrLTBRoR2cg04swFxhIKYwyccWThOdGzfobBGG_ijvmYWpfgfF29RwKPfVRDYtODJBoY_HRD9g_LC_kYVCYbc8aqZXsxf3_XNDWd3iOD7pZua38eJbqx2OdEhQayLT_QdpgDfO3DSywN9j3w1X5R"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+2</div>
</div>
<button className="text-primary hover:bg-primary/5 p-2 rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
{/*  Create New Placeholder  */}
<div className="border-2 border-dashed border-outline-variant p-md rounded-xl hover:border-primary hover:bg-primary/5 transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2 group min-h-[140px]">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-white transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
</div>
<span className="font-label-bold text-label-bold text-on-surface-variant group-hover:text-primary">Create new workspace</span>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-slate-900 pb-safe border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-medium Inter">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 active:scale-90 duration-200 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-medium Inter">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 active:scale-90 duration-200 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="add_box">add_box</span>
<span className="text-[10px] font-medium Inter">Create</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 active:scale-90 duration-200 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[10px] font-medium Inter">Notifications</span>
</a>
</nav>
{/*  Floating Action Button - Contextual for Mobile  */}
<button className="md:hidden fixed right-4 bottom-20 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40">
<span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>

    </>
  );
};

export default WorkspaceSwitcher;
