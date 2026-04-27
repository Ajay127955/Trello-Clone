import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BillingInvoices = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm docked full-width top-0 z-40 fixed flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400" data-icon="grid_view">grid_view</span>
<h1 className="font-sans text-sm font-semibold tracking-tight text-blue-600 dark:text-blue-400 uppercase">Workspace Settings</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-6 items-center">
<span className="text-slate-600 dark:text-slate-400 font-sans text-sm font-semibold tracking-tight hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer px-2 py-1">Pricing</span>
<span className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 font-sans text-sm tracking-tight px-2 py-1">Billing</span>
<span className="text-slate-600 dark:text-slate-400 font-sans text-sm font-semibold tracking-tight hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer px-2 py-1">Members</span>
</div>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold ring-2 ring-offset-2 ring-slate-100">
                JD
            </div>
</div>
</header>
{/*  NavigationDrawer (Sidebar)  */}
<aside className="fixed left-0 top-12 h-[calc(100vh-3rem)] flex flex-col py-4 bg-slate-50 dark:bg-slate-950 docked h-full w-64 border-r border-slate-200 dark:border-slate-800 hidden md:flex">
<div className="px-6 mb-6">
<h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Admin Console</h2>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Pricing</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold border-r-4 border-blue-600 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span>Billing</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Members</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#">
<span className="material-symbols-outlined" data-icon="archive">archive</span>
<span>Archive</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="md:ml-64 pt-16 pb-24 md:pb-8 px-4 md:px-8 max-w-6xl mx-auto">
<header className="mb-8">
<h2 className="font-headline-xl text-headline-xl text-on-surface">Billing and Invoices</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage your subscription, payment methods, and download your transaction history.</p>
</header>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">
{/*  Left Column: Current Plan & Payment Method  */}
<div className="lg:col-span-2 flex flex-col gap-gutter">
{/*  Current Plan Card  */}
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
<div className="flex justify-between items-start mb-lg">
<div>
<span className="font-label-bold text-label-bold text-primary uppercase tracking-wider bg-primary-fixed px-2 py-0.5 rounded">Active Plan</span>
<h3 className="font-headline-md text-headline-md mt-2">Enterprise Pro</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Professional workspace management for scaling teams.</p>
</div>
<div className="text-right">
<span className="font-headline-md text-headline-md text-on-surface">$149.00</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ month</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md p-md bg-surface-container-low rounded-lg mb-lg">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Next Payment Date</span>
<span className="font-body-lg text-body-lg font-bold">October 24, 2023</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Seats Used</span>
<span className="font-body-lg text-body-lg font-bold">12 / 20 <span className="font-normal text-on-surface-variant text-sm ml-1">(8 remaining)</span></span>
</div>
</div>
<div className="flex flex-wrap gap-sm">
<button className="bg-primary px-lg py-2 rounded-lg text-on-primary font-label-sm text-label-sm flex items-center gap-2 active:scale-95 duration-150 transition-all">
                            Upgrade Plan
                        </button>
<button className="bg-surface-container-highest px-lg py-2 rounded-lg text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2 hover:bg-slate-200 transition-all">
                            Manage Seats
                        </button>
</div>
</div>
{/*  Payment Method Card  */}
<div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
<div className="flex justify-between items-center mb-md">
<h3 className="font-headline-md text-headline-md">Payment Method</h3>
<button className="text-primary font-label-bold text-label-bold flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add New
                        </button>
</div>
<div className="flex items-center justify-between p-md border border-primary-container bg-primary-fixed/30 rounded-xl">
<div className="flex items-center gap-md">
<div className="w-12 h-8 bg-on-surface rounded-md flex items-center justify-center text-on-primary font-black text-[10px]">VISA</div>
<div>
<p className="font-body-md text-body-md font-semibold">Visa ending in •••• 4242</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Expires 12/2025 • Primary</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-error hover:bg-error-container/20 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
</div>
{/*  Right Column: Quick Stats / Bento Sidebar  */}
<div className="lg:col-span-1 flex flex-col gap-gutter">
{/*  Referral Card  */}
<div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-on-primary p-lg rounded-xl shadow-md overflow-hidden relative">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">Save $25 on your next bill</h3>
<p className="font-body-md text-body-md text-blue-100 mb-lg">Invite other teams to join the platform and get credits credited to your account.</p>
<button className="bg-white text-blue-700 font-label-bold text-label-bold px-lg py-2 rounded-lg hover:bg-blue-50 transition-colors">
                            Copy Link
                        </button>
</div>
<div className="absolute -bottom-8 -right-8 opacity-20 transform rotate-12">
<span className="material-symbols-outlined text-[120px]" data-icon="featured_seasonal">featured_seasonal_and_gifts</span>
</div>
</div>
{/*  Contact Support  */}
<div className="bg-surface-container-high border border-outline-variant p-lg rounded-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</div>
<div>
<p className="font-label-bold text-label-bold text-on-surface">Need help?</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">Contact our billing team</p>
</div>
</div>
</div>
</div>
{/*  Invoices Table Section  */}
<section className="mt-xl">
<div className="flex justify-between items-center mb-md">
<h3 className="font-headline-md text-headline-md">Invoice History</h3>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded-lg bg-white flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
<button className="p-2 border border-outline-variant rounded-lg bg-white flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Export All
                    </button>
</div>
</div>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container border-b border-outline-variant">
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Invoice ID</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Date</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Amount</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Status</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
{/*  Row 1  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-09-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Sep 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 2  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-08-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Aug 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 3  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-07-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Jul 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 4  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-06-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Jun 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
</tbody>
</table>
<div className="px-lg py-md bg-surface-container-low flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 4 of 24 invoices</span>
<div className="flex gap-2">
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant disabled:opacity-30" disabled="">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface hover:bg-white">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar (Mobile only)  */}
<nav className="fixed bottom-0 w-full flex justify-around items-center h-16 px-2 pb-safe bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 md:hidden z-50 rounded-t-lg shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 tap-highlight-transparent active:opacity-70">
<span className="material-symbols-outlined" data-icon="sell">sell</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Pricing</span>
</button>
<button className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 scale-110 tap-highlight-transparent active:opacity-70">
<span className="material-symbols-outlined" data-icon="account_balance_wallet" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance_wallet</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Billing</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 tap-highlight-transparent active:opacity-70">
<span className="material-symbols-outlined" data-icon="people">people</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Members</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500 tap-highlight-transparent active:opacity-70">
<span className="material-symbols-outlined" data-icon="more_horiz">more_horiz</span>
<span className="text-[10px] font-medium tracking-wide uppercase">More</span>
</button>
</nav>

    </>
  );
};

export default BillingInvoices;
