import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ArchivedItems = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm docked full-width top-0 z-40 fixed left-0 right-0">
<div className="flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400" data-icon="grid_view">grid_view</span>
<h1 className="font-sans text-sm font-semibold tracking-tight text-blue-600 dark:text-blue-400">Workspace Settings</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors p-1 rounded" data-icon="search">search</button>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold" title="User Profile">
                    UP
                </div>
</div>
</div>
</header>
{/*  NavigationDrawer  */}
<aside className="fixed left-0 top-12 h-[calc(100vh-3rem)] flex flex-col py-4 bg-slate-50 dark:bg-slate-950 docked h-full w-64 border-r border-slate-200 dark:border-slate-800 hidden md:flex">
<div className="px-4 mb-6">
<span className="text-lg font-bold text-slate-900 dark:text-slate-100">Admin Console</span>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center px-4 py-2 text-sm font-medium Inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3" data-icon="payments">payments</span>
                Pricing
            </a>
<a className="flex items-center px-4 py-2 text-sm font-medium Inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3" data-icon="receipt_long">receipt_long</span>
                Billing
            </a>
<a className="flex items-center px-4 py-2 text-sm font-medium Inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3" data-icon="group">group</span>
                Members
            </a>
<a className="flex items-center px-4 py-2 text-sm font-medium Inter bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold border-r-4 border-blue-600 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3" data-icon="archive">archive</span>
                Archive
            </a>
<a className="flex items-center px-4 py-2 text-sm font-medium Inter text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
                Settings
            </a>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="md:ml-64 mt-12 pb-20 md:pb-8 p-gutter lg:p-container-padding min-h-screen">
<div className="max-w-6xl mx-auto">
{/*  Screen Header  */}
<div className="mb-8">
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-2">Archive Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage and restore your archived boards and individual task cards.</p>
</div>
{/*  Custom Tabs  */}
<div className="flex items-center space-x-1 border-b border-outline-variant mb-6 overflow-x-auto whitespace-nowrap">
<button className="px-6 py-3 font-label-bold text-label-bold text-primary border-b-2 border-primary">
                    Archived Boards
                </button>
<button className="px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">
                    Archived Cards
                </button>
</div>
{/*  Bento Grid - Boards Section  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Board Card 1  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
<div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 relative overflow-hidden" data-alt="abstract geometric pattern with blue and indigo gradients and subtle light flares">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
</div>
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Product Roadmap Q1</h3>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-label-sm font-label-sm text-on-surface-variant">Board</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Legacy product goals and milestone tracking for the initial launch phase.</p>
<div className="flex items-center gap-2 mb-6 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                            Archived 12 days ago
                        </div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-on-primary font-label-bold text-label-bold py-2 rounded transition-all active:scale-95 hover:bg-on-primary-fixed-variant flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="unarchive">unarchive</span>
                                Send to Board
                            </button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-error text-error hover:bg-error-container transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
{/*  Board Card 2  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
<div className="h-24 bg-gradient-to-r from-tertiary-container to-on-tertiary-fixed-variant relative overflow-hidden" data-alt="minimalist architectural shadows on a smooth concrete wall with cool morning light">
<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
</div>
<div className="p-md">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Marketing Assets</h3>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-label-sm font-label-sm text-on-surface-variant">Board</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Old branding materials, logos, and high-resolution campaign imagery.</p>
<div className="flex items-center gap-2 mb-6 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
                            Archived 3 weeks ago
                        </div>
<div className="flex items-center gap-2">
<button className="flex-1 bg-primary text-on-primary font-label-bold text-label-bold py-2 rounded transition-all active:scale-95 hover:bg-on-primary-fixed-variant flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="unarchive">unarchive</span>
                                Send to Board
                            </button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-error text-error hover:bg-error-container transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
{/*  Card Style Item 1  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow p-md flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">User Feedback Logs</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-label-sm font-label-sm text-on-surface-variant">Card</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Initial interviews from the beta testing group regarding the navigation overhaul.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Feedback</span>
<span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-800">Q4 2023</span>
</div>
</div>
<div className="flex items-center gap-2 pt-4 border-t border-outline-variant">
<button className="flex-1 bg-primary text-on-primary font-label-bold text-label-bold py-2 rounded transition-all active:scale-95 hover:bg-on-primary-fixed-variant flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="unarchive">unarchive</span>
                            Send to Board
                        </button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-error text-error hover:bg-error-container transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
{/*  Card Style Item 2  */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow p-md flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-headline-md text-on-surface">Design System V1.0</h3>
<span className="px-2 py-0.5 rounded bg-surface-container text-label-sm font-label-sm text-on-surface-variant">Card</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Archive of the original component library before the Material 3 migration.</p>
<div className="flex items-center gap-3 mb-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-secondary text-[8px] flex items-center justify-center text-white border border-white">JD</div>
<div className="w-6 h-6 rounded-full bg-primary-container text-[8px] flex items-center justify-center text-on-primary-container border border-white">AS</div>
</div>
<span className="text-label-sm text-on-surface-variant italic">+2 more</span>
</div>
</div>
<div className="flex items-center gap-2 pt-4 border-t border-outline-variant">
<button className="flex-1 bg-primary text-on-primary font-label-bold text-label-bold py-2 rounded transition-all active:scale-95 hover:bg-on-primary-fixed-variant flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="unarchive">unarchive</span>
                            Send to Board
                        </button>
<button className="w-10 h-10 flex items-center justify-center rounded border border-error text-error hover:bg-error-container transition-colors">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</div>
</div>
{/*  Async Layout Filler - Stats Card  */}
<div className="bg-blue-600 rounded-xl p-md flex flex-col justify-center text-on-primary lg:col-span-1 shadow-lg relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 opacity-10">
<span className="material-symbols-outlined text-[120px]" data-icon="inventory_2">inventory_2</span>
</div>
<h4 className="font-label-bold text-label-bold mb-1 opacity-80 uppercase tracking-widest">Storage Status</h4>
<div className="text-4xl font-black mb-4">84% Full</div>
<p className="font-body-md text-body-md opacity-90 mb-4">You have 4.2GB of archived content. Items older than 90 days are flagged for permanent deletion.</p>
<div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
<div className="w-[84%] bg-white h-full"></div>
</div>
</div>
{/*  Empty State Helper (Hidden by default, shown for concept)  */}
<div className="hidden lg:flex bg-surface-container rounded-xl border border-dashed border-outline border-2 items-center justify-center p-xl opacity-60">
<div className="text-center">
<span className="material-symbols-outlined text-4xl text-outline mb-2" data-icon="auto_delete">auto_delete</span>
<p className="font-label-bold text-label-bold text-on-surface-variant">Scheduled cleanup active</p>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile only)  */}
<nav className="fixed bottom-0 w-full flex justify-around items-center h-16 px-2 pb-safe bg-white dark:bg-slate-900 md:hidden z-50 rounded-t-lg border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 tap-highlight-transparent active:opacity-70" href="#">
<span className="material-symbols-outlined" data-icon="sell">sell</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Pricing</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 tap-highlight-transparent active:opacity-70" href="#">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Billing</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 tap-highlight-transparent active:opacity-70" href="#">
<span className="material-symbols-outlined" data-icon="people">people</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Members</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 scale-110 tap-highlight-transparent active:opacity-70" href="#">
<span className="material-symbols-outlined" data-icon="more_horiz" style={{"fontVariationSettings":"'FILL' 1"}}>more_horiz</span>
<span className="text-[10px] font-medium tracking-wide uppercase">More</span>
</a>
</nav>

    </>
  );
};

export default ArchivedItems;
