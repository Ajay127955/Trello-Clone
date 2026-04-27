import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterpriseAdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white dark:text-blue-400 cursor-pointer" data-icon="grid_view">grid_view</span>
<span className="text-lg font-black text-white dark:text-blue-500 font-sans tracking-tight">TaskFlow Enterprise</span>
</div>
<nav className="hidden md:flex items-center gap-2">
<a className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight hover:bg-white/20 transition-colors" href="#">Workspace Boards</a>
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 font-sans text-sm font-medium tracking-tight" href="#">Enterprise Admin</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight hover:bg-white/20 transition-colors" href="#">Analytics</a>
</nav>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-300 cursor-pointer" data-icon="notifications">notifications</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-white/20" data-alt="Close-up portrait of a professional male executive in a clean studio environment with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA02Wb2qRoEl3FkqDvKPHW3_0eb5_cAnYssc-nDS8qABI1nxkjr1ppiJw17JJrXQgdgLTWNh4FLLsvAvN2LYy-xuAy5WkNF9IuzUQ2k2mX8pRouYy_x_IVtQaa62WBYbSPzGWh67ilGEhVP7YZjQybOhzQIVqLvYZmwHitwa3hIGx5l8qwLImsyNORAgz0tg2QsLyUSkDQYsLM-vY6LoUQDycbd6BD3Vcz0-XdxC_ZA__blvWa-CCrMHHTHUnkMJNlXGDopdkBdTGGn"/>
</div>
</header>
<div className="flex min-h-screen pt-12">
{/*  NavigationDrawer  */}
<aside className="bg-slate-50 dark:bg-slate-900 h-full w-64 border-r border-slate-200 dark:border-slate-800 fixed left-0 top-12 hidden md:flex flex-col pt-4 pb-20">
<div className="px-6 mb-8 flex flex-col items-start">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<h2 className="text-xl font-bold text-[#091E42] dark:text-white leading-tight">Enterprise Global</h2>
<p className="text-slate-500 dark:text-slate-400 text-xs font-semibold">Admin Console</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span> Workspace Boards
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span> AI Command Center
                </a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span> Enterprise Admin
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span> Team Management
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span> Analytics
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-sans text-sm font-semibold transition-all" href="#">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span> Automation Settings
                </a>
</nav>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 md:ml-64 p-md lg:p-lg bg-surface-bright mb-16 md:mb-0">
<div className="max-w-7xl mx-auto space-y-lg">
{/*  Dashboard Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div>
<h1 className="font-headline-xl text-headline-xl text-on-surface">Organization Admin Dashboard</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Global oversight across 12 active workspaces and 2,400+ members.</p>
</div>
<div className="flex items-center gap-sm">
<button className="bg-surface-container-high px-md py-sm rounded-xl font-label-bold text-label-bold text-on-surface flex items-center gap-2 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="file_download">file_download</span> Export Report
                        </button>
<button className="bg-primary-container px-md py-sm rounded-xl font-label-bold text-label-bold text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span> Invite Members
                        </button>
</div>
</div>
{/*  Bento Grid Metrics  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="md:col-span-1 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-secondary-container">Total Seats</span>
<span className="material-symbols-outlined text-primary" data-icon="person">person</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface">2,482 / 3,000</div>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-2 overflow-hidden">
<div className="bg-primary h-full w-[82%]"></div>
</div>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-secondary-container">Monthly Active Users</span>
<span className="material-symbols-outlined text-on-secondary-container" data-icon="trending_up">trending_up</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface">94.2%</div>
<div className="text-label-sm text-[#00875A] flex items-center gap-1 font-label-bold">
<span className="material-symbols-outlined text-[14px]" data-icon="arrow_upward">arrow_upward</span> +2.4% from last month
                            </div>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-secondary-container">Active Boards</span>
<span className="material-symbols-outlined text-on-secondary-container" data-icon="view_kanban">view_kanban</span>
</div>
<div>
<div className="text-3xl font-black text-on-surface">1,124</div>
<div className="text-label-sm text-on-surface-variant font-body-md">Across all workspaces</div>
</div>
</div>
<div className="md:col-span-1 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="font-label-bold text-label-bold text-on-secondary-container">SSO Status</span>
<span className="material-symbols-outlined text-[#00875A]" data-icon="verified_user">verified_user</span>
</div>
<div>
<div className="text-xl font-bold text-on-surface">Atlassian Access</div>
<div className="text-label-sm text-[#00875A] font-label-bold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-[#00875A]"></span> SCIM Sync Active
                            </div>
</div>
</div>
</div>
{/*  Main Layout: Sidebar & Content  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
{/*  Left: Workspace Management & Members (Wide)  */}
<div className="lg:col-span-2 space-y-lg">
{/*  Workspace List  */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">
<div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Top Workspaces</h3>
<button className="text-primary font-label-bold text-label-bold hover:underline">View All Workspaces</button>
</div>
<div className="divide-y divide-outline-variant/10">
{/*  Workspace Item  */}
<div className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary font-bold text-lg">EN</div>
<div>
<div className="font-label-bold text-body-lg text-on-surface">Engineering Global</div>
<div className="text-label-sm text-on-surface-variant">452 Members • 84 Boards</div>
</div>
</div>
<div className="flex items-center gap-xl">
<div className="text-right hidden sm:block">
<div className="text-label-sm text-on-surface-variant uppercase tracking-wider">Activity</div>
<div className="font-label-bold text-on-surface">High</div>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</button>
</div>
</div>
{/*  Workspace Item  */}
<div className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-lg">MK</div>
<div>
<div className="font-label-bold text-body-lg text-on-surface">Marketing Creative</div>
<div className="text-label-sm text-on-surface-variant">210 Members • 32 Boards</div>
</div>
</div>
<div className="flex items-center gap-xl">
<div className="text-right hidden sm:block">
<div className="text-label-sm text-on-surface-variant uppercase tracking-wider">Activity</div>
<div className="font-label-bold text-on-surface">Moderate</div>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</button>
</div>
</div>
{/*  Workspace Item  */}
<div className="p-md flex items-center justify-between hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-md">
<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold text-lg">OP</div>
<div>
<div className="font-label-bold text-body-lg text-on-surface">Operations &amp; Logistics</div>
<div className="text-label-sm text-on-surface-variant">128 Members • 15 Boards</div>
</div>
</div>
<div className="flex items-center gap-xl">
<div className="text-right hidden sm:block">
<div className="text-label-sm text-on-surface-variant uppercase tracking-wider">Activity</div>
<div className="font-label-bold text-on-surface">Critical</div>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary" data-icon="more_vert">more_vert</button>
</div>
</div>
</div>
</div>
{/*  Member Table  */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm">
<div className="p-md border-b border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Recent Member Activity</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 border border-outline-variant/30 rounded-xl bg-surface-container-low text-body-md w-full md:w-64 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Search members..." type="text"/>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container text-label-bold text-on-surface-variant">
<tr>
<th className="px-md py-sm">Member</th>
<th className="px-md py-sm">Primary Workspace</th>
<th className="px-md py-sm">Access Role</th>
<th className="px-md py-sm">Last Active</th>
<th className="px-md py-sm"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-md flex items-center gap-3">
<img alt="Member" className="w-8 h-8 rounded-full" data-alt="Professional headshot of a smiling woman with glasses in a minimalist modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3LjsM5g-uFNqUCHC1Re8FpVA7uoMPJqWdswnAIAewo5K2TzG1nnV55mXpwfDr3MGyHUw2N-fopF_mhenXk6RLAeMJPw65KmJrPbjiLhDCTpz_F855sMXqo1uOAIjcuNnRDDTPBy6bLIoPZorVlhTBx6I8pr6Z_-r06NUSfdhdgrvCDbEBeph2AnXF7tQw2ugWtYi3zQLfi6eGvs2pKCKaNFvOQGTvOcwUPZq7McuF5mpGT_X4dcEK0t7X5sXpoqJsj-rYfYAacrI0"/>
<div>
<div className="font-label-bold text-on-surface">Alex Rivera</div>
<div className="text-label-sm text-on-surface-variant">alex.r@enterprise.com</div>
</div>
</td>
<td className="px-md py-md font-body-md text-on-surface">Engineering Global</td>
<td className="px-md py-md">
<span className="px-2 py-1 bg-blue-50 text-primary text-[11px] font-bold rounded uppercase">Workspace Admin</span>
</td>
<td className="px-md py-md font-body-md text-on-surface-variant">2 mins ago</td>
<td className="px-md py-md text-right">
<button className="material-symbols-outlined text-on-surface-variant" data-icon="settings">settings</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-md py-md flex items-center gap-3">
<img alt="Member" className="w-8 h-8 rounded-full" data-alt="Close-up portrait of a male professional with a confident expression and stylish beard in soft focus office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGPGzBHsH990gmemrYW8wj1BD_fO9iz291UoSp80qL_VYuv5gq4eRM9nYMz0_zIBC57QQWVcAeu3yh6ZqNGPT4j3Ywgs0hSp-WM0qWXnQYrI5EHwza4LV-wAPhUbqbXLENklbXqma4bF_CnsXM7FoNUOqe6ZPCujdy63_uMcpsn_H-VgxCN-c_p98Pd-FUAFRCnZtkvH13Q1apIkjOlhtgo1lLDrwixZzX6B7T8pMH6vXVUF-WCFd795I4nXbQQIUD4dFKvnJ31E8y"/>
<div>
<div className="font-label-bold text-on-surface">Jordan Smyth</div>
<div className="text-label-sm text-on-surface-variant">jordan.s@enterprise.com</div>
</div>
</td>
<td className="px-md py-md font-body-md text-on-surface">Marketing Creative</td>
<td className="px-md py-md">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded uppercase">Member</span>
</td>
<td className="px-md py-md font-body-md text-on-surface-variant">1 hour ago</td>
<td className="px-md py-md text-right">
<button className="material-symbols-outlined text-on-surface-variant" data-icon="settings">settings</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Right: Reports & Security Status  */}
<div className="space-y-lg">
{/*  Security & SSO  */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary" data-icon="security">security</span>
<h3 className="font-label-bold text-body-lg text-on-surface">Security &amp; Compliance</h3>
</div>
<div className="space-y-md">
<div className="p-sm bg-surface-container rounded-xl flex items-center gap-md">
<div className="p-2 bg-white rounded-lg">
<span className="material-symbols-outlined text-[#00875A]" data-icon="sync">sync</span>
</div>
<div>
<div className="font-label-bold text-on-surface">SCIM Provisioning</div>
<div className="text-label-sm text-[#00875A]">Last sync: 12m ago</div>
</div>
</div>
<div className="p-sm bg-surface-container rounded-xl flex items-center gap-md">
<div className="p-2 bg-white rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="domain">domain</span>
</div>
<div>
<div className="font-label-bold text-on-surface">Domain Verification</div>
<div className="text-label-sm text-on-surface-variant">4 Domains Verified</div>
</div>
</div>
<button className="w-full py-2 border border-primary text-primary font-label-bold rounded-xl hover:bg-primary-container/5 transition-colors">
                                    Admin Security Settings
                                </button>
</div>
</div>
{/*  Activity Feed  */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-md shadow-sm">
<h3 className="font-label-bold text-body-lg text-on-surface mb-4">Admin Audit Log</h3>
<div className="space-y-md">
<div className="flex gap-md">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-slate-600" data-icon="history">history</span>
</div>
<div className="flex-1">
<p className="text-body-md text-on-surface"><span className="font-bold">Sarah Chen</span> created new workspace "Global Design Ops"</p>
<span className="text-label-sm text-on-surface-variant">Today, 2:45 PM</span>
</div>
</div>
<div className="flex gap-md">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-slate-600" data-icon="policy">policy</span>
</div>
<div className="flex-1">
<p className="text-body-md text-on-surface"><span className="font-bold">System</span> updated global board permissions</p>
<span className="text-label-sm text-on-surface-variant">Today, 10:12 AM</span>
</div>
</div>
<div className="flex gap-md">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px] text-error" data-icon="warning">warning</span>
</div>
<div className="flex-1">
<p className="text-body-md text-on-surface"><span className="font-bold">Security Alert</span>: 5 failed login attempts detected</p>
<span className="text-label-sm text-on-surface-variant">Yesterday</span>
</div>
</div>
</div>
<button className="w-full mt-md text-center text-label-sm text-on-surface-variant hover:text-primary font-label-bold">View Full Audit Log</button>
</div>
{/*  Data Visualization Placeholder  */}
<div className="bg-primary-container rounded-xl p-md text-white shadow-lg overflow-hidden relative">
<div className="relative z-10">
<h4 className="font-headline-md mb-1">Weekly Consumption</h4>
<p className="text-body-md opacity-80 mb-4">Compute &amp; Storage Usage</p>
<div className="flex items-end gap-2 h-24 mb-4">
<div className="bg-white/20 w-full rounded-t" style={{"height":"40%"}}></div>
<div className="bg-white/40 w-full rounded-t" style={{"height":"65%"}}></div>
<div className="bg-white/30 w-full rounded-t" style={{"height":"50%"}}></div>
<div className="bg-white/60 w-full rounded-t" style={{"height":"85%"}}></div>
<div className="bg-white/20 w-full rounded-t" style={{"height":"45%"}}></div>
<div className="bg-white/80 w-full rounded-t" style={{"height":"95%"}}></div>
<div className="bg-white w-full rounded-t" style={{"height":"70%"}}></div>
</div>
<div className="flex justify-between text-xs font-bold opacity-70">
<span>MON</span>
<span>SUN</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-primary to-[#004fcb] opacity-50"></div>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase">AI</span>
</div>
<div className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Admin</span>
</div>
</nav>

    </>
  );
};

export default EnterpriseAdminDashboard;
