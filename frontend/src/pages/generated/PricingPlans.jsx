import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PricingPlans = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm docked full-width top-0 z-40 fixed left-0 right-0">
<div className="flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400" data-icon="grid_view" onClick={() => navigate('/boards-dashboard')} className="cursor-pointer">grid_view</span>
<span className="text-xl font-black text-blue-600 dark:text-blue-400 cursor-pointer" onClick={() => navigate('/boards-dashboard')}>Workspace Settings</span>
</div>
<div className="hidden md:flex gap-6 items-center">
<nav className="flex gap-4">
<a className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 font-sans text-sm tracking-tight px-1 h-12 flex items-center" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>Pricing</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-sans text-sm font-semibold tracking-tight px-1 h-12 flex items-center" href="#" onClick={(e) => { e.preventDefault(); navigate('/billing-invoices'); }}>Billing</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-sans text-sm font-semibold tracking-tight px-1 h-12 flex items-center" href="#" onClick={(e) => { e.preventDefault(); navigate('/workspace-members/1'); }}>Members</a>
</nav>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold cursor-pointer" title="User Profile" onClick={() => navigate('/member-profile')}>UP</div>
</div>
</div>
</header>
{/*  Side Navigation (Web)  */}
<aside className="hidden md:flex fixed left-0 top-12 h-[calc(100vh-3rem)] w-64 flex-col py-4 bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 transition-all duration-200 ease-in-out">
<div className="px-6 mb-6">
<h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">Admin Console</h2>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center px-6 py-3 gap-3 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-semibold border-r-4 border-blue-600 text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Pricing
            </a>
<a className="flex items-center px-6 py-3 gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); navigate('/billing-invoices'); }}>
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                Billing
            </a>
<a className="flex items-center px-6 py-3 gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); navigate('/workspace-members/1'); }}>
<span className="material-symbols-outlined" data-icon="group">group</span>
                Members
            </a>
<a className="flex items-center px-6 py-3 gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); navigate('/archived-items'); }}>
<span className="material-symbols-outlined" data-icon="archive">archive</span>
                Archive
            </a>
<a className="flex items-center px-6 py-3 gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-all duration-200 ease-in-out text-sm font-medium Inter" href="#" onClick={(e) => { e.preventDefault(); navigate('/workspace-settings/1'); }}>
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="pt-20 pb-24 md:pb-12 md:pl-64 min-h-screen bg-white">
<div className="max-w-7xl mx-auto px-container-padding">
{/*  Hero Section  */}
<div className="text-center mb-xl">
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-sm">Plans for every team size</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                    From solo projects to global enterprise operations, choose the workspace that grows with your productivity.
                </p>
<div className="mt-lg flex justify-center items-center gap-md">
<span className="font-label-bold text-label-bold">Monthly</span>
<button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                        Yearly <span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">SAVE 20%</span>
</span>
</div>
</div>
{/*  Bento Grid Pricing Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-xl">
{/*  Free Tier  */}
<div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col hover:border-blue-200 transition-all group">
<div className="mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <span className="material-symbols-outlined text-slate-600">person</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Free</h3>
<p className="text-sm text-slate-500 mt-1">Individuals & Small Teams</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$0</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Up to 10 boards per workspace
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Unlimited cards & lists
                        </li>
</ul>
<button onClick={() => navigate('/boards-dashboard')} className="w-full py-4 bg-slate-100 text-slate-900 font-black rounded-2xl hover:bg-slate-200 transition-all">Get started</button>
</div>

{/*  Standard Tier  */}
<div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col hover:border-blue-200 transition-all group">
<div className="mb-6">
<div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-green-600">groups</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Standard</h3>
<p className="text-sm text-slate-500 mt-1">Teams scaling collaboration</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$5</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Unlimited boards
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            WIP limits & custom fields
                        </li>
</ul>
<button onClick={() => navigate('/billing-invoices')} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">Sign up now</button>
</div>

{/*  Premium Tier  */}
<div className="bg-white border-4 border-blue-600 p-8 rounded-[2rem] shadow-2xl flex flex-col scale-105 z-10 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>
<div className="mb-6">
<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-blue-600">rocket_launch</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Premium</h3>
<p className="text-sm text-slate-500 mt-1">Advanced visuals & automation</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$10</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                            Planner & Calendar view
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                            Workspace-level automation
                        </li>
</ul>
<button onClick={() => navigate('/billing-invoices')} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-black rounded-2xl hover:opacity-90 shadow-xl shadow-blue-200 transition-all">Start free trial</button>
</div>
</div>
{/*  Comparison Table Section  */}
<section className="mt-xl bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-lg border-b border-slate-100 flex items-center justify-between">
<h2 className="font-headline-md text-headline-md">Detailed Comparison</h2>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 cursor-pointer" onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Collapse' : 'Expand All'} <span className="material-symbols-outlined text-sm">{expanded ? 'expand_less' : 'expand_more'}</span>
</span>
</div>
<div className={`overflow-x-auto transition-all ${expanded ? 'max-h-[1000px]' : 'max-h-[400px]'}`}>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant w-1/3">Feature</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Free</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Standard</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Premium</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-gutter font-body-md text-body-md font-semibold">Boards</td>
<td className="p-gutter font-body-md text-body-md">10</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
</tr>
<tr>
<td className="p-gutter font-body-md text-body-md font-semibold">Automation (Butler)</td>
<td className="p-gutter font-body-md text-body-md">250 runs</td>
<td className="p-gutter font-body-md text-body-md">1,000 runs</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
</tr>
{expanded && (
    <>
    <tr>
    <td className="p-gutter font-body-md text-body-md font-semibold">Security Administration</td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    </tr>
    <tr>
    <td className="p-gutter font-body-md text-body-md font-semibold">Organization-wide permissions</td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    </tr>
    </>
)}
</tbody>
</table>
</div>
</section>
{/*  Testimonial Section  */}
<div className="mt-xl grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
<div className="aspect-video rounded-xl bg-slate-200 relative overflow-hidden shadow-md">
<img alt="Team collaborating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-lg">
<p className="text-white font-medium italic">"Switching to the Premium plan was the single best decision for our team's productivity."</p>
</div>
</div>
<div className="p-lg">
<h2 className="font-headline-md text-headline-md mb-md">Trusted by 2,000,000+ teams</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                        Join companies like Google, Fender, and Squarespace who use our platform to manage their most ambitious projects.
                    </p>
<div className="grid grid-cols-3 gap-md opacity-50 grayscale">
<div className="h-8 bg-slate-300 rounded"></div>
<div className="h-8 bg-slate-300 rounded"></div>
<div className="h-8 bg-slate-300 rounded"></div>
</div>
</div>
</div>
{/*  Footer-style CTA  */}
<div className="mt-xl py-xl text-center border-t border-slate-200">
<h2 className="font-headline-md text-headline-md mb-md">Still have questions?</h2>
<button onClick={() => navigate('/help-center')} className="px-lg py-sm bg-white border border-slate-300 rounded-lg font-bold hover:bg-slate-50 transition-colors">View FAQ</button>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 w-full flex justify-around items-center h-16 px-2 pb-safe bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 scale-110" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>
<span className="material-symbols-outlined" data-icon="sell">sell</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Pricing</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500" href="#" onClick={(e) => { e.preventDefault(); navigate('/billing-invoices'); }}>
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Billing</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500" href="#" onClick={(e) => { e.preventDefault(); navigate('/workspace-members/1'); }}>
<span className="material-symbols-outlined" data-icon="people">people</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Members</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-500 hover:text-blue-500" href="#" onClick={(e) => { e.preventDefault(); navigate('/notifications'); }}>
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[10px] font-medium tracking-wide uppercase">Alerts</span>
</a>
</nav>

    </>
  );
};

export default PricingPlans;
