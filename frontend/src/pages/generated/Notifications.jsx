import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm fixed top-0 full-width z-50 flex justify-between items-center w-full px-4 h-14">
<div className="flex items-center gap-sm">
<button 
  onClick={() => navigate('/boards-dashboard')}
  className="material-symbols-outlined text-slate-600 dark:text-slate-400 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-150"
>
  menu
</button>
<h1 
  onClick={() => navigate('/boards-dashboard')}
  className="font-inter text-lg font-semibold tracking-tight text-blue-600 dark:text-blue-400 font-black text-xl cursor-pointer"
>
  Trello
</h1>
</div>
<div className="flex items-center gap-sm">
<button 
  onClick={() => navigate('/search-results')}
  className="material-symbols-outlined text-slate-600 dark:text-slate-400 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-150"
>
  search
</button>
</div>
</header>
<main className="pt-14 pb-20 md:pb-0 md:pl-72 min-h-screen bg-surface-bright">
{/*  Sidebar for Desktop  */}
<aside className="hidden md:flex flex-col fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 shadow-2xl z-40">
<div className="flex flex-col h-full py-4 divide-y divide-slate-100 dark:divide-slate-800">
<div className="px-4 py-6">
<div className="flex items-center gap-md">
<img className="w-10 h-10 rounded-full object-cover" data-alt="professional portrait of a creative designer with clean minimal background and soft studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6D5hymvG9NW0rs2vMnXUL9AaBbcKwHIEtn12SVENPkCogUg7_F7dwRJfTz26e1C-jzkViPmL-ZMWame8BWeLD2f80OQBvN8pDH_ZpFxBTtMoXJMKSQW9Qc1fhm9AWMByr_Z0-woyy4qXeCgbQkuVPnEDy64unCBQyH3BTQo4xmE_CwZXT3-5vp3JWhgVfSw1LdzuEJD8cMSXJUzdNd-3T02CkXV2ULbeFLTbEenKyhXpf5J48YwHXIbYFtN04Z44PRhGCm4Pjf3c"/>
<div>
<p className="font-inter text-sm font-medium text-blue-600 font-bold">Productive User</p>
<p className="text-[10px] text-slate-500">Free Workspace</p>
</div>
</div>
</div>
<nav className="flex-1 py-2 overflow-y-auto custom-scrollbar">
<Link to="/workspace-settings" className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all ease-in-out duration-200">
<span className="material-symbols-outlined">group</span>
<span className="font-inter text-sm font-medium">Workspaces</span>
</Link>
<Link to="/boards-dashboard" className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all ease-in-out duration-200">
<span className="material-symbols-outlined">star</span>
<span className="font-inter text-sm font-medium">Starred</span>
</Link>
<Link to="/template-library" className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all ease-in-out duration-200">
<span className="material-symbols-outlined">dashboard_customize</span>
<span className="font-inter text-sm font-medium">Templates</span>
</Link>
<Link to="/boards-dashboard" className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all ease-in-out duration-200">
<span className="material-symbols-outlined">cloud_off</span>
<span className="font-inter text-sm font-medium">Offline</span>
</Link>
<Link to="/workspace-settings" className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all ease-in-out duration-200">
<span className="material-symbols-outlined">settings</span>
<span className="font-inter text-sm font-medium">Settings</span>
</Link>
</nav>
</div>
</aside>
{/*  Main Content Area  */}
<div className="max-w-4xl mx-auto p-md md:p-xl">
{/*  Header Section  */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md mb-lg">
<div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Notifications</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Stay updated with your workspace activity</p>
</div>
<button className="flex items-center gap-xs px-md py-sm bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm rounded-xl transition-colors">
<span className="material-symbols-outlined text-[18px]">done_all</span>
                    Mark all as read
                </button>
</div>

{/*  Quick Capture  */}
<div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-xl mb-lg text-white">
    <div className="flex items-center gap-2 mb-4">
        <span className="material-symbols-outlined text-white">bolt</span>
        <h3 className="font-bold text-lg">Quick Capture</h3>
    </div>
    <div className="flex gap-2">
        <input 
            type="text" 
            placeholder="Type a task and press Enter to save to Inbox..." 
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all"
            onKeyDown={(e) => {
                if (e.key === 'Enter' && e.target.value) {
                    alert('Task saved to Inbox!');
                    e.target.value = '';
                }
            }}
        />
        <button className="bg-white text-blue-600 px-6 py-2 rounded-xl font-bold hover:bg-blue-50 transition-colors">Capture</button>
    </div>
    <p className="text-[10px] text-white/60 mt-2 italic">Captured tasks are automatically added to your "To Do" list in your primary workspace.</p>
</div>
{/*  Filter Tabs  */}
<div className="flex gap-sm mb-lg border-b border-outline-variant pb-xs">
<button className="px-md py-sm font-label-bold text-label-bold border-b-2 border-primary text-primary">All</button>
<button className="px-md py-sm font-label-bold text-label-bold border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors">Mentions</button>
<button className="px-md py-sm font-label-bold text-label-bold border-b-2 border-transparent text-on-surface-variant hover:text-on-surface transition-colors">Unread</button>
</div>
{/*  Notifications Feed  */}
<div className="space-y-gutter">
{/*  Date Header  */}
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-widest pt-sm">Today</h3>
{/*  Notification Item: Mention  */}
<div className="group relative flex gap-md p-md bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl"></div>
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover" data-alt="close-up portrait of a woman laughing with natural soft lighting and warm autumnal colors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKJRgA8Z5uSB6paopyneUQPZO40SwWL7ckxw77p-tvGxyF5Xd2jjgS9xE3_dg9lTxaKlVygFmueX1CK7JtrMBMjZJSiXTMBVd-3NsFi64sWtZKkMKYjSrw8EOkHS_ELatrjCxm2KpBGxIREU6nu5ze4Ij0MA7Ry0tgBEp-2W2CUhoonn4_pSNoe3a4QijbpJygnxpkHaVMoFP7GldPjtEwtyBALUjiNxeli1PITAhsT3LSXYfPaMVXKYS1fk3EOmSlkET8_v1VRWIp"/>
<div className="absolute -bottom-1 -right-1 bg-primary text-white p-0.5 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>alternate_email</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">Sarah Jenkins</span> mentioned you on <span className="font-bold text-primary underline decoration-primary/30 cursor-pointer">Mobile App Onboarding</span>
</p>
<span className="text-[10px] text-outline font-medium">2m ago</span>
</div>
<div className="mt-sm p-sm bg-surface-container-low rounded-lg border-l-4 border-primary/20">
<p className="font-body-md text-body-md italic text-on-surface-variant">"@user_name, could you review the latest Figma prototypes for the login flow?"</p>
</div>
<div className="mt-sm flex gap-sm">
<button className="text-label-sm font-label-sm text-primary hover:underline">Reply</button>
<button className="text-label-sm font-label-sm text-outline hover:text-on-surface-variant">View Card</button>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-error transition-all p-1">delete</button>
</div>
{/*  Notification Item: Move  */}
<div className="group relative flex gap-md p-md bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover grayscale" data-alt="portrait of a focused software engineer in a modern office with bokeh city lights in background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcg0PyqLIf4qq4w1eCxZrx__Q9tgGSy_kevvhe7vtWqetFV9HTWvqJ74Vi4sTDDO41VOClY-9ANqPmqBithOHgf1rcqqeE-B-LtE8_XYW9aP9ZgLf-5v-QgvlRbL3fkBwelH2in1eqpFbe_qlQqeepmGRAzFrOUws3WZF7x6XOVCrC9hoIhxMKofYWXxibsENt2qksQFwxfT5CNGGDDzOSFd9LJv8mGKPPygbWlqcuFyMc7p7TlM8Nl36o8fw0vmdLPa6JhBnlTnuN"/>
<div className="absolute -bottom-1 -right-1 bg-tertiary text-white p-0.5 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>sync_alt</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">David Chen</span> moved <span className="font-bold text-primary underline decoration-primary/30 cursor-pointer">API Integration Docs</span> to <span className="inline-flex items-center px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase tracking-tight">Done</span>
</p>
<span className="text-[10px] text-outline font-medium">45m ago</span>
</div>
<div className="mt-xs text-[12px] text-outline flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">view_kanban</span>
                            Engineering Backlog
                        </div>
</div>
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-error transition-all p-1">delete</button>
</div>
{/*  Date Header  */}
<h3 className="font-label-bold text-label-bold text-outline uppercase tracking-widest pt-lg">Yesterday</h3>
{/*  Notification Item: Attachment  */}
<div className="group relative flex gap-md p-md bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="relative">
<img className="w-10 h-10 rounded-full object-cover grayscale" data-alt="professional woman in a bright office space with morning sunlight filtering through plants" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kTAfe82jXlvHZ2D8nmJEKqBIJfFdsh7xhCzqf24jKpAkmTekyEdtquxsG8hwlg_tjirng2ZDU07GkkeyQ8ZcurxPS1oxba5xf9G0826gEMbls_RSq6SwJ1kzgZR5c1MV4RdpJ8Uu02WyAbj8LBX48ZlEDm42BYMn0fZ-yyBAovzNSJ1PDSK57CDOUBzp3FZKwasjnL8RJH0Yhrxrp4hmrCeESB9tyKxbcDRNBFXco18ml-53KdYSsgSKCY3kxQapxVNUqMbwA8ih"/>
<div className="absolute -bottom-1 -right-1 bg-secondary text-white p-0.5 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>attach_file</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">Alex Rivera</span> added an attachment to <span className="font-bold text-primary underline decoration-primary/30 cursor-pointer">Q4 Strategy Report</span>
</p>
<span className="text-[10px] text-outline font-medium">1d ago</span>
</div>
<div className="mt-sm flex items-center gap-md p-sm border border-outline-variant rounded-lg bg-surface-bright">
<div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded">
<span className="material-symbols-outlined">picture_as_pdf</span>
</div>
<div>
<p className="text-[12px] font-bold text-on-surface">strategy_v2_final.pdf</p>
<p className="text-[10px] text-outline">2.4 MB</p>
</div>
<button className="ml-auto material-symbols-outlined text-outline hover:text-primary">download</button>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-error transition-all p-1">delete</button>
</div>
{/*  Notification Item: Comment  */}
<div className="group relative flex gap-md p-md bg-white rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">JS</div>
<div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-0.5 rounded-full border-2 border-white">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>chat_bubble</span>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">James Smith</span> commented on <span className="font-bold text-primary underline decoration-primary/30 cursor-pointer">Billing System Bug</span>
</p>
<span className="text-[10px] text-outline font-medium">1d ago</span>
</div>
<p className="mt-xs font-body-md text-body-md text-on-surface-variant line-clamp-2">"I've identified the root cause in the stripe webhook handler. Working on a hotfix now..."</p>
</div>
<button className="opacity-0 group-hover:opacity-100 material-symbols-outlined text-outline hover:text-error transition-all p-1">delete</button>
</div>
</div>
{/*  Load More  */}
<div className="mt-xl flex justify-center">
<button className="font-label-bold text-label-bold text-primary hover:bg-blue-50 px-lg py-sm rounded-full transition-colors">Load older notifications</button>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-white/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<Link to="/boards-dashboard" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 dark:hover:text-blue-300 active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-inter text-[10px] font-medium">Boards</span>
</Link>
<Link to="/search-results" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 dark:hover:text-blue-300 active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">search</span>
<span className="font-inter text-[10px] font-medium">Search</span>
</Link>
<Link to="/notifications" className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl px-3 py-1 active:opacity-80 transition-opacity">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>notifications</span>
<span className="font-inter text-[10px] font-medium">Alerts</span>
</Link>
<Link to="/member-profile" className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 dark:hover:text-blue-300 active:opacity-80 transition-opacity">
<span className="material-symbols-outlined">person</span>
<span className="font-inter text-[10px] font-medium">Account</span>
</Link>
</nav>

    </>
  );
};

export default Notifications;
