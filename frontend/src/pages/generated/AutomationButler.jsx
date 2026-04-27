import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AutomationButler = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-[#091E42] border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none docked full-width top-0 z-50 flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<button className="hover:bg-slate-100 dark:hover:bg-white/10 transition-colors p-1 rounded active:opacity-80 active:scale-[0.99]">
<span className="material-symbols-outlined text-[#0065FF] dark:text-[#4C9AFF]">grid_view</span>
</button>
<h1 className="text-xl font-black text-[#091E42] dark:text-white flex items-center gap-2">ProductiveFlow</h1>
<nav className="hidden md:flex items-center gap-6 ml-4">
<a className="font-['Inter'] text-sm font-medium tracking-tight text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 px-2 py-1 transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="font-['Inter'] text-sm font-medium tracking-tight text-[#0065FF] border-b-2 border-[#0065FF] pb-1" href="#">Automation</a>
<a className="font-['Inter'] text-sm font-medium tracking-tight text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 px-2 py-1 transition-colors" href="#">Analytics</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full">search</button>
<button className="material-symbols-outlined text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full">notifications</button>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold ring-2 ring-white dark:ring-slate-800">
                JD
            </div>
</div>
</header>
<div className="flex">
{/*  NavigationDrawer  */}
<aside className="fixed left-0 top-12 bottom-0 flex flex-col p-3 space-y-1 bg-slate-50 dark:bg-[#172B4D] h-full w-64 border-r border-slate-200 dark:border-slate-800 transition-all">
<div className="mb-4 px-2 py-3">
<h2 className="text-lg font-bold text-[#091E42] dark:text-slate-100 font-['Inter'] text-[14px] leading-5">Workspace Alpha</h2>
</div>
<nav className="flex-1 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">dashboard</span>
<span>Boards</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">calendar_view_day</span>
<span>Views</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 bg-[#E6FCFF] dark:bg-[#0065FF]/20 text-[#0065FF] dark:text-[#4C9AFF] font-semibold rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">bolt</span>
<span>Automation</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">extension</span>
<span>Power-Ups</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">settings</span>
<span>Workspace Settings</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 rounded-md font-['Inter'] text-[14px] leading-5">
<span className="material-symbols-outlined">help</span>
<span>Help Center</span>
</button>
</nav>
<div className="mt-auto border-t border-slate-200 dark:border-slate-800 pt-4 px-2">
<div className="rounded-lg bg-gradient-to-br from-[#0065FF] to-[#004fcb] p-4 text-white shadow-md">
<p className="font-label-bold text-label-bold mb-2">Upgrade to Pro</p>
<p className="font-label-sm text-label-sm opacity-90 mb-3">Get unlimited automation rules and priority support.</p>
<button className="w-full bg-white text-[#004fcb] py-2 rounded font-label-bold text-label-bold hover:bg-opacity-90 transition-all">Learn More</button>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-64 mt-12 w-full p-8 bg-[#F7F8F9] min-h-[calc(100vh-48px)]">
{/*  Automation Header  */}
<div className="flex justify-between items-start mb-8">
<div>
<h2 className="font-headline-xl text-headline-xl text-[#091E42] mb-1">Automation</h2>
<p className="font-body-md text-body-md text-slate-600">Power up your board with triggers, actions, and custom rules.</p>
</div>
<button className="bg-primary hover:bg-primary-container text-on-primary px-6 py-2.5 rounded-lg flex items-center gap-2 shadow-sm transition-all active:scale-95">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="font-label-bold text-label-bold">Create Rule</span>
</button>
</div>
{/*  Tab Navigation  */}
<div className="flex items-center gap-8 border-b border-slate-200 mb-6">
<button className="pb-3 border-b-2 border-primary text-primary font-label-bold text-label-bold">Rules</button>
<button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-label-bold text-label-bold transition-all">Buttons</button>
<button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-label-bold text-label-bold transition-all">Email Reports</button>
<button className="pb-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 font-label-bold text-label-bold transition-all">Schedules</button>
</div>
{/*  Rules Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Main Rules Column  */}
<div className="lg:col-span-2 space-y-gutter">
{/*  Rule Card 1  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-md hover:shadow-md transition-shadow group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
<span className="material-symbols-outlined text-[#0065FF]">move_to_inbox</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-[#091E42]">Archive Completed Tasks</h4>
<p className="font-label-sm text-label-sm text-slate-400 uppercase tracking-wider">Trigger: Movement</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-label-sm font-label-sm text-slate-400 mr-2">Enabled</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-md space-y-3 mb-4">
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-slate-500 w-16">WHEN:</span>
<p className="font-body-md text-body-md bg-white border border-slate-200 px-3 py-1 rounded shadow-sm text-[#091E42]">
                                    a card is moved to <span className="font-bold text-[#0065FF]">Done</span>
</p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-slate-500 w-16">THEN:</span>
<div className="flex-1 space-y-2">
<p className="font-body-md text-body-md bg-white border border-slate-200 px-3 py-1 rounded shadow-sm text-[#091E42]">
<span className="font-bold text-[#0065FF]">archive</span> the card
                                    </p>
<p className="font-body-md text-body-md bg-white border border-slate-200 px-3 py-1 rounded shadow-sm text-[#091E42]">
                                        post a comment <span className="italic text-slate-500">"Task finalized by {username}"</span>
</p>
</div>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-slate-400 text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Last run 2h ago</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-label-sm">
<span className="material-symbols-outlined text-[16px]">equalizer</span>
<span>Used 142 times</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-slate-100 rounded text-slate-500">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 hover:bg-slate-100 rounded text-slate-500">
<span className="material-symbols-outlined text-[20px]">content_copy</span>
</button>
<button className="p-2 hover:bg-red-50 rounded text-error">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
{/*  Rule Card 2  */}
<div className="bg-white rounded-xl border border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)] p-md hover:shadow-md transition-shadow group">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center">
<span className="material-symbols-outlined text-orange-500">priority_high</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-[#091E42]">Auto-Assign Urgent Tasks</h4>
<p className="font-label-sm text-label-sm text-slate-400 uppercase tracking-wider">Trigger: Card Added</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-label-sm font-label-sm text-slate-400 mr-2">Enabled</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-md space-y-3 mb-4">
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-slate-500 w-16">WHEN:</span>
<p className="font-body-md text-body-md bg-white border border-slate-200 px-3 py-1 rounded shadow-sm text-[#091E42]">
                                    a card with <span className="font-bold text-error">High Priority</span> label is added
                                </p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-slate-500 w-16">THEN:</span>
<p className="font-body-md text-body-md bg-white border border-slate-200 px-3 py-1 rounded shadow-sm text-[#091E42]">
                                    add <span className="font-bold text-[#0065FF]">@SarahChen</span> to the card
                                </p>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1 text-slate-400 text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span>Last run 12m ago</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-label-sm">
<span className="material-symbols-outlined text-[16px]">equalizer</span>
<span>Used 892 times</span>
</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-2 hover:bg-slate-100 rounded text-slate-500">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-2 hover:bg-red-50 rounded text-error">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
{/*  Suggestion Box (Bento Style)  */}
<div className="grid grid-cols-2 gap-gutter">
<div className="bg-[#E6FCFF] border border-blue-100 rounded-xl p-md flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-[#0065FF] mb-2">lightbulb</span>
<h5 className="font-label-bold text-label-bold text-[#0065FF] mb-1">Recommended for you</h5>
<p className="font-body-md text-body-md text-slate-700">"Every Friday, move all cards in 'Done' to 'Archive'"</p>
</div>
<button className="mt-4 text-[#0065FF] font-label-bold text-label-bold text-left hover:underline">Apply this rule →</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-md flex items-center justify-center border-dashed group cursor-pointer hover:bg-slate-50 transition-colors">
<div className="text-center">
<span className="material-symbols-outlined text-slate-400 text-3xl mb-2 group-hover:text-primary transition-colors">add_circle</span>
<p className="font-label-bold text-label-bold text-slate-500">Add New Automation</p>
</div>
</div>
</div>
</div>
{/*  Right Sidebar Statistics / Info  */}
<div className="space-y-gutter">
{/*  Usage Summary  */}
<div className="bg-[#091E42] text-white rounded-xl p-md shadow-lg">
<h4 className="font-label-bold text-label-bold opacity-70 mb-4 uppercase tracking-widest">Workspace Usage</h4>
<div className="space-y-4">
<div>
<div className="flex justify-between text-label-sm mb-1">
<span>Commands Run</span>
<span className="font-bold">4,281 / 5,000</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="bg-primary-container h-1.5 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-label-sm mb-1">
<span>Active Rules</span>
<span className="font-bold">12 / 20</span>
</div>
<div className="w-full bg-white/10 rounded-full h-1.5">
<div className="bg-green-400 h-1.5 rounded-full" style={{"width":"60%"}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="font-body-md text-body-md opacity-80 leading-snug">Your workspace is nearing its monthly limit. Automations will stop once limit is reached.</p>
<button className="mt-4 text-white font-label-bold text-label-bold underline underline-offset-4 hover:text-primary-fixed-dim">Manage Billing</button>
</div>
</div>
{/*  Integration Shortcuts  */}
<div className="bg-white rounded-xl border border-slate-200 p-md">
<h4 className="font-label-bold text-label-bold text-[#091E42] mb-4">External Integrations</h4>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">mail</span>
</div>
<span className="font-body-md text-body-md text-slate-700">Gmail</span>
<span className="ml-auto material-symbols-outlined text-slate-300 text-[18px]">chevron_right</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
</div>
<span className="font-body-md text-body-md text-slate-700">Slack</span>
<span className="ml-auto material-symbols-outlined text-slate-300 text-[18px]">chevron_right</span>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors opacity-50">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">cloud</span>
</div>
<span className="font-body-md text-body-md text-slate-700">AWS Lambda</span>
<span className="ml-auto font-label-sm text-label-sm bg-slate-200 px-1.5 py-0.5 rounded text-slate-600 uppercase">Pro</span>
</div>
</div>
</div>
{/*  Help Center Widget  */}
<div className="relative overflow-hidden bg-white border border-slate-200 rounded-xl p-md">
<div className="relative z-10">
<h4 className="font-headline-md text-headline-md text-[#091E42] mb-2">Need help?</h4>
<p className="font-body-md text-body-md text-slate-500 mb-4">Learn how to build complex flows with our Butler guide.</p>
<a className="font-label-bold text-label-bold text-primary flex items-center gap-1 group" href="#">
                                View Tutorials
                                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center opacity-40">
<span className="material-symbols-outlined text-slate-200 text-5xl">auto_fix_high</span>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default AutomationButler;
