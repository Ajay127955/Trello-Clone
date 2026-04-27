import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ExportBoardData = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] dark:bg-slate-950 text-white dark:text-slate-100 border-b border-white/10 shadow-sm">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined p-2 hover:bg-white/10 transition-colors rounded-lg">menu</button>
<span className="text-lg font-black text-white tracking-tight">Workspace</span>
</div>
<div className="flex items-center gap-2">
<nav className="hidden md:flex items-center gap-6 mr-6 font-sans text-sm font-medium Inter">
<a className="text-slate-300 hover:text-white transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-300 hover:text-white transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>
<a className="text-white font-bold border-b-2 border-white pb-1" href="#">Workspace Settings</a>
</nav>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-white/20" data-alt="close-up professional headshot of a smiling woman with glasses in a minimalist office setting with natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7qpEJxpohIdGIczc4-c8TYVG_TXZ2BA7-KliHlgMq22CmVXLdmBannONRY5z4NQpUHTEHjxOFyVNPinRUAdTbQ_ehnyQ6DxioL6k84Qr2miq9O3uXXdEz0EW2ral-J1v7vTGD6wRFWtTHn6D6guzjEOt5seiH9dy_7kk_Dy0e4MgS_oMP2p4Hlxaa7Lo9PbspFtFuKPJ6dgvMpz-FOguu9j0Jdo-zoBKooiTs5Y9QoUHDoEVV0Uo-hbWTVou1UXOdg5r0va2LHWd8"/>
</div>
</header>
<div className="flex pt-12 h-screen overflow-hidden">
{/*  NavigationDrawer  */}
<aside className="hidden md:flex flex-col h-full w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 gap-2">
<div className="px-2 py-4 mb-4">
<span className="text-blue-600 dark:text-blue-400 font-bold font-sans text-sm Inter">Productive Flow</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">dashboard</span> Boards
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">group</span> Members
            </a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold rounded-md font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">settings</span> Workspace Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">calendar_today</span> Calendar
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">timeline</span> Timeline
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all font-sans text-sm Inter" href="#">
<span className="material-symbols-outlined">analytics</span> Dashboard
            </a>
</aside>
{/*  Main Canvas  */}
<main className="flex-1 overflow-y-auto bg-background p-gutter md:p-lg pb-32 md:pb-lg">
<div className="max-w-5xl mx-auto space-y-lg">
{/*  Header Section  */}
<section className="space-y-xs">
<h1 className="font-headline-xl text-headline-xl text-on-surface">Export Data</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Generate a backup or move your data to another application by exporting your boards and workspace information.</p>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
{/*  Export Options & Settings  */}
<div className="lg:col-span-2 space-y-lg">
{/*  Bento: Primary Export Actions  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/*  JSON Export  */}
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-md">
<div className="bg-primary-container/10 p-sm rounded-lg">
<span className="material-symbols-outlined text-primary">data_object</span>
</div>
<span className="text-[10px] font-bold px-2 py-1 bg-surface-container-highest rounded text-on-surface-variant uppercase tracking-wider">Recommended</span>
</div>
<h3 className="font-headline-md text-headline-md mb-xs">Export as JSON</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Best for developers and data portability. Includes all metadata and relational links.</p>
<button className="w-full py-sm bg-primary text-on-primary rounded-lg font-label-bold text-label-bold hover:bg-primary/90 transition-colors">Start JSON Export</button>
</div>
{/*  CSV Export  */}
<div className="bg-surface-container-lowest border border-outline-variant p-md rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
<div className="flex items-start justify-between mb-md">
<div className="bg-secondary-container/30 p-sm rounded-lg text-secondary">
<span className="material-symbols-outlined">table_view</span>
</div>
</div>
<h3 className="font-headline-md text-headline-md mb-xs">Export as CSV</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Best for spreadsheets and reporting. Includes task lists, dates, and assignees.</p>
<button className="w-full py-sm border border-outline text-primary rounded-lg font-label-bold text-label-bold hover:bg-surface-container transition-colors">Start CSV Export</button>
</div>
</div>
{/*  Configuration Section  */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
<div className="p-md border-b border-outline-variant bg-surface-container-low">
<h2 className="font-headline-md text-headline-md">Export Settings</h2>
</div>
<div className="p-md space-y-md">
{/*  Privacy Toggle  */}
<div className="flex items-center justify-between">
<div className="flex items-start gap-md">
<span className="material-symbols-outlined text-on-surface-variant mt-1">privacy_tip</span>
<div>
<p className="font-label-bold text-label-bold">Include Private Comments</p>
<p className="text-[12px] text-on-surface-variant">Includes internal discussion notes and restricted member updates.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<hr className="border-outline-variant" />
{/*  Attachments  */}
<div className="flex items-center justify-between">
<div className="flex items-start gap-md">
<span className="material-symbols-outlined text-on-surface-variant mt-1">attachment</span>
<div>
<p className="font-label-bold text-label-bold">Export Attachments</p>
<p className="text-[12px] text-on-surface-variant">Includes links to hosted files. Increases export size significantly.</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<hr className="border-outline-variant" />
{/*  Member Mapping  */}
<div className="flex items-center justify-between">
<div className="flex items-start gap-md">
<span className="material-symbols-outlined text-on-surface-variant mt-1">badge</span>
<div>
<p className="font-label-bold text-label-bold">Anonymize Member Data</p>
<p className="text-[12px] text-on-surface-variant">Replaces real names with generic identifiers (e.g., User 1, User 2).</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
{/*  Side Panel: History  */}
<div className="space-y-lg">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="p-md border-b border-outline-variant bg-surface-container-low flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant">history</span>
<h2 className="font-headline-md text-headline-md">Export History</h2>
</div>
<div className="divide-y divide-outline-variant">
{/*  History Item 1  */}
<div className="p-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-label-bold text-label-bold">workspace_backup.json</span>
<span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded uppercase">Success</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
<span className="text-[11px]">Oct 24, 2023</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">database</span>
<span className="text-[11px]">12.4 MB</span>
</div>
</div>
</div>
{/*  History Item 2  */}
<div className="p-md hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="font-label-bold text-label-bold">q3_report_tasks.csv</span>
<span className="text-[10px] bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded uppercase">Success</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
<span className="text-[11px]">Oct 12, 2023</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">database</span>
<span className="text-[11px]">1.2 MB</span>
</div>
</div>
</div>
{/*  History Item 3 - Expired  */}
<div className="p-md opacity-60">
<div className="flex justify-between items-start mb-2">
<span className="font-label-bold text-label-bold">full_export_sep.json</span>
<span className="text-[10px] bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded uppercase">Expired</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span>
<span className="text-[11px]">Sep 30, 2023</span>
</div>
<button className="text-[11px] font-bold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">refresh</span> Re-run
                                        </button>
</div>
</div>
</div>
<div className="p-md bg-surface-container-low">
<p className="text-[11px] text-on-surface-variant italic">Note: Exports are kept for 30 days before being automatically purged from our servers for security.</p>
</div>
</div>
{/*  Data Security Tip  */}
<div className="bg-primary-container text-on-primary-container p-md rounded-xl">
<div className="flex items-center gap-2 mb-sm">
<span className="material-symbols-outlined">security</span>
<span className="font-label-bold text-label-bold">Security Tip</span>
</div>
<p className="text-[12px] leading-relaxed">Always use a secure, encrypted storage solution for your workspace backups. Avoid sharing these files over unsecured public networks.</p>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-slate-900 pb-safe border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-medium Inter">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined">search</span>
<span className="text-[10px] font-medium Inter">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined">add_box</span>
<span className="text-[10px] font-medium Inter">Create</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="text-[10px] font-medium Inter">Notifications</span>
</a>
</nav>

    </>
  );
};

export default ExportBoardData;
