import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const KeyboardShortcuts = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] dark:bg-slate-950 text-white dark:text-slate-100 border-b border-white/10 shadow-sm">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined hover:bg-white/10 transition-colors p-1 rounded" data-icon="menu">menu</button>
<h1 className="text-lg font-black text-white tracking-tight">Workspace</h1>
</div>
<div className="flex items-center gap-4">
<span className="font-sans text-sm font-medium Inter hidden md:block">Productive Flow</span>
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden border-2 border-white/20">
<img className="w-full h-full object-cover" data-alt="Professional headshot of a user with a friendly expression in a brightly lit studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe4uWDXmfX5CGUQTsXL7d5-uQluB_ycFqFsP8zPG83m-bkuJEKWZYAhhcjtFUYwtAvEsaGf4_SDlKG_PIVDpd2mjy3hgaJ3_kSCNAV-2sJACDVXqUSUf6VcD3ocrwyNZUo6igLGFSuQSZeU3lc8LtnY6lQWRa9usPhWPyKjn2tFUfK6hyY-zCf1yxWqwRcQvH_tYqsIzt_cn-YamilNNEj6N7J5z09duhIIHF6oUbBwt538_DanrCkWLD-Dj45mN6hx2rvC3INn_E8"/>
</div>
</div>
</header>
<div className="flex pt-12 min-h-screen">
{/*  NavigationDrawer Shell  */}
<aside className="hidden md:flex flex-col h-[calc(100vh-48px)] w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 gap-2 sticky top-12">
<div className="mb-4 px-2">
<span className="text-blue-600 dark:text-blue-400 font-bold font-headline-md">Productive Flow</span>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Boards
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span> Members
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span> Workspace Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span> Calendar
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="timeline">timeline</span> Timeline
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span> Dashboard
                </a>
</nav>
<div className="mt-auto pt-4 border-t border-slate-200">
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-md font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span> Help &amp; Shortcuts
                </a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 p-gutter md:p-lg lg:p-xl bg-background overflow-y-auto">
<div className="max-w-5xl mx-auto">
{/*  Header Section  */}
<div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<nav className="flex items-center gap-2 text-outline mb-2 font-label-sm text-label-sm">
<span>Workspace</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>Help Center</span>
</nav>
<h2 className="text-headline-xl font-headline-xl text-on-surface">Keyboard Shortcuts</h2>
<p className="text-body-md font-body-md text-on-surface-variant max-w-2xl mt-2">
                            Master your workflow with Productive Flow's rapid-access commands. Navigate, edit, and organize without ever leaving your keyboard.
                        </p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white font-label-bold text-label-bold hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">print</span>
                            Print PDF
                        </button>
</div>
</div>
{/*  Bento Grid Layout for Shortcuts  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Navigation Category (Large Span)  */}
<section className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-primary" data-icon="explore">explore</span>
<h3 className="text-headline-md font-headline-md">Navigation</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-lg gap-y-sm">
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Open Quick Search</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">K</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Go to My Boards</span>
<div className="flex gap-1">
<span className="kbd-capsule">G</span>
<span className="kbd-capsule">B</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Toggle Sidebar</span>
<div className="flex gap-1">
<span className="kbd-capsule">[</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Back to Home</span>
<div className="flex gap-1">
<span className="kbd-capsule">G</span>
<span className="kbd-capsule">H</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Open Notifications</span>
<div className="flex gap-1">
<span className="kbd-capsule">N</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Previous Board</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">[</span>
</div>
</div>
</div>
</section>
{/*  Quick Help (Narrow Span)  */}
<section className="md:col-span-4 bg-[#E6FCFF] dark:bg-slate-800 rounded-xl border border-secondary-container p-md flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-sm">
<span className="material-symbols-outlined text-[#0065FF]" data-icon="lightbulb">lightbulb</span>
<h3 className="text-label-bold font-label-bold text-[#0065FF]">Pro Tip</h3>
</div>
<p className="text-body-md font-body-md text-[#485980] mb-4 leading-relaxed">
                                You can press <span className="kbd-capsule font-bold">?</span> anywhere in the app to toggle this quick reference guide instantly.
                            </p>
</div>
<div className="relative rounded-lg overflow-hidden h-32 w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
<img className="w-full h-full object-cover" data-alt="Modern minimalist keyboard on a wooden desk with soft natural window lighting, clean aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_JtXQ9qq8QzJyWL8G1ok6IH4sWfygP7b_GeS_3mLqPVnhx2jpRQgTt0ZKXK19-8EiXO65taz1C97C4CUZU0x6ioZ8aR3pSe0yQ6mMTAQ8l0ACrp3CDT80h7CH7gNhIXp5iMjGJNVRBfRycdJrImpcvqRcDMuFXOdATZrJJTxZ3xtny1JJtPIsUWrABQUhctgjRTwSMK5Hpmwx7KZD-TR00FFjz8HS1oDC19vifYXErNgsHJfIaK9UzTDLNDhEKXdzPo3arpXqco91"/>
</div>
</section>
{/*  Cards Actions  */}
<section className="md:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-primary" data-icon="view_agenda">view_agenda</span>
<h3 className="text-headline-md font-headline-md">Card Operations</h3>
</div>
<div className="space-y-sm">
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Create New Card</span>
<span className="kbd-capsule">C</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Archive Selected Card</span>
<span className="kbd-capsule">C</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Move Card Up/Down</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">↑/↓</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Quick Edit Card Title</span>
<span className="kbd-capsule">E</span>
</div>
</div>
</section>
{/*  Team & Collaboration  */}
<section className="md:col-span-6 bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-primary" data-icon="group_add">group_add</span>
<h3 className="text-headline-md font-headline-md">Collaboration</h3>
</div>
<div className="space-y-sm">
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Assign Self to Card</span>
<span className="kbd-capsule">Space</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Invite Member</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">I</span>
</div>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Open Comments</span>
<span className="kbd-capsule">M</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-surface-container">
<span className="text-body-md font-body-md">Toggle Labels View</span>
<span className="kbd-capsule">L</span>
</div>
</div>
</section>
{/*  System Actions (Full Width Bottom)  */}
<section className="md:col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-primary" data-icon="terminal">terminal</span>
<h3 className="text-headline-md font-headline-md">Global Actions</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-lg gap-y-xs">
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Undo Action</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">Z</span>
</div>
</div>
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Redo Action</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">Shift</span>
<span className="kbd-capsule">Z</span>
</div>
</div>
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Save Changes</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">S</span>
</div>
</div>
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Copy Link</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">L</span>
</div>
</div>
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Escape / Cancel</span>
<span className="kbd-capsule">Esc</span>
</div>
<div className="flex justify-between items-center py-2 group hover:bg-surface-container-low px-2 rounded-lg transition-colors">
<span className="text-body-md font-body-md">Toggle Dark Mode</span>
<div className="flex gap-1">
<span className="kbd-capsule">⌘</span>
<span className="kbd-capsule">D</span>
</div>
</div>
</div>
</section>
</div>
{/*  Footer Support  */}
<div className="mt-xl p-lg bg-surface-container rounded-xl text-center">
<h4 className="text-headline-md font-headline-md mb-2">Still need help?</h4>
<p className="text-body-md font-body-md text-on-surface-variant mb-md">Our support team is available 24/7 for any questions about shortcuts or board management.</p>
<div className="flex justify-center gap-md">
<button className="px-gutter py-2 border border-outline rounded-lg font-label-bold text-label-bold hover:bg-surface-container-high transition-colors">Documentation</button>
<button className="px-gutter py-2 bg-primary text-white rounded-lg font-label-bold text-label-bold hover:opacity-90 transition-opacity">Contact Support</button>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar for Mobile  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] pb-safe">
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-medium Inter">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-medium Inter">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="add_box">add_box</span>
<span className="text-[10px] font-medium Inter">Create</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="text-[10px] font-medium Inter">Help</span>
</a>
</nav>

    </>
  );
};

export default KeyboardShortcuts;
