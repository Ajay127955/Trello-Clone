import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SmartLinksManager = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined p-1.5 hover:bg-white/20 transition-colors rounded cursor-pointer" data-icon="grid_view">grid_view</span>
<h1 className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</h1>
</div>
<nav className="hidden md:flex gap-2">
<a className="text-slate-300 hover:text-white px-3 py-1.5 hover:bg-white/20 dark:hover:bg-slate-800 transition-colors rounded-md" href="#">Workspace Boards</a>
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 font-bold" href="#">Smart Links</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 hover:bg-white/20 dark:hover:bg-slate-800 transition-colors rounded-md" href="#">Enterprise Admin</a>
</nav>
<div className="flex items-center gap-3">
<button className="material-symbols-outlined p-1.5 hover:bg-white/20 transition-colors rounded-md" data-icon="search">search</button>
<div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-white/20">
<img alt="User Profile" data-alt="professional headshot of a smiling business executive with soft studio lighting and neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT3EvcV-xZfqWCi0R0f6NjU9wMscXMbPWWjXw2WPR1ty7Sx5Lhqz0OIZ_qRX9F75IJK97HRnQIYZoa11tPe9x-1-a9SZhs1JwhzT7e6uDDo9Ycxo_VXDUSWs-sZdwSj1I5zAUlWldE15kmgUdrNp2sVZdv_e4NcWjBibGhti-fl7d6mzuWrFxD5D9wZD3frEpER3S1wgn0y92OcX6qcT_lI7pIBl9YK2hFd3F6zjx81qg4IwzPllHwWbBVKfvu6CCVYu3zqVl9zEWx"/>
</div>
</div>
</header>
{/*  NavigationDrawer  */}
<aside className="hidden md:flex flex-col h-screen pt-4 pb-20 bg-slate-50 dark:bg-slate-900 font-sans text-sm font-semibold h-full w-64 border-r fixed left-0 top-12 border-r border-slate-200 dark:border-slate-800 z-40">
<div className="px-6 py-4 flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 mb-4">
<div className="h-10 w-10 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="hub">hub</span>
</div>
<div>
<p className="text-xl font-bold text-[#091E42] dark:text-white leading-tight">Enterprise Global</p>
<p className="text-[11px] text-slate-500 font-medium">Admin Console</p>
</div>
</div>
<nav className="flex-1 px-3 space-y-1">
<div className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Workspace Boards</span>
</div>
<div className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span>AI Command Center</span>
</div>
<div className="flex items-center gap-3 px-4 py-2.5 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] rounded-l-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="link">link</span>
<span>Smart Links Manager</span>
</div>
<div className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>Team Management</span>
</div>
<div className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span>Analytics</span>
</div>
<div className="flex items-center gap-3 px-4 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span>Automation Settings</span>
</div>
</nav>
<div className="p-4 mt-auto">
<div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800">
<p className="text-[12px] text-blue-800 dark:text-blue-300 font-bold mb-1">STORAGE QUOTA</p>
<div className="w-full bg-blue-200 dark:bg-blue-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[72%]"></div>
</div>
<p className="text-[10px] text-blue-600 dark:text-blue-400 mt-2">72% of 500GB used</p>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="md:pl-64 pt-12 min-h-screen">
<div className="p-6 lg:p-8 max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<nav className="flex items-center gap-2 text-slate-500 mb-2">
<span className="text-label-sm font-font-label-sm">Integrations</span>
<span className="material-symbols-outlined text-[14px]" data-icon="chevron_right">chevron_right</span>
<span className="text-label-sm font-font-label-sm text-primary">Smart Links Manager</span>
</nav>
<h2 className="text-headline-xl font-font-headline-xl text-[#091E42]">Smart Links Manager</h2>
<p className="text-body-md font-font-body-md text-slate-600 mt-1">Configure live previews and bi-directional syncing for external platforms.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-label-bold font-font-label-bold text-slate-700 hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined" data-icon="history">history</span>
                        Sync Logs
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-label-bold font-font-label-bold hover:bg-blue-700 transition-colors shadow-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                        Connect New Tool
                    </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Status & Active Connections (Large Hero Card)  */}
<div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-headline-md font-font-headline-md text-[#091E42]">Active Board Connections</h3>
<span className="px-2.5 py-1 bg-green-50 text-green-700 rounded-full text-[11px] font-bold border border-green-100 uppercase tracking-wider">All Systems Operational</span>
</div>
<div className="space-y-4">
{/*  Jira Integration  */}
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
<div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined text-2xl" data-icon="developer_board">developer_board</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-bold text-slate-900">Jira Software</h4>
<span className="h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-[11px] text-slate-500 font-medium">Synced 2m ago</span>
</div>
<p className="text-body-md font-font-body-md text-slate-500">Project: AT-FINANCE-OPS</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block text-right">
<p className="text-label-bold font-font-label-bold text-slate-900">142 Live Cards</p>
<p className="text-[11px] text-slate-500">Bi-directional enabled</p>
</div>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</div>
{/*  Confluence Integration  */}
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
<div className="h-12 w-12 bg-blue-400 rounded-lg flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined text-2xl" data-icon="description">description</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-bold text-slate-900">Confluence Wiki</h4>
<span className="h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-[11px] text-slate-500 font-medium">Synced 14m ago</span>
</div>
<p className="text-body-md font-font-body-md text-slate-500">Space: PRODUCT-SPECS</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block text-right">
<p className="text-label-bold font-font-label-bold text-slate-900">38 Previews</p>
<p className="text-[11px] text-slate-500">Rich embed active</p>
</div>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</div>
{/*  Slack Integration  */}
<div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
<div className="h-12 w-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white shrink-0">
<span className="material-symbols-outlined text-2xl" data-icon="forum">forum</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2">
<h4 className="font-bold text-slate-900">Slack Notifications</h4>
<span className="h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-[11px] text-slate-500 font-medium">Streaming active</span>
</div>
<p className="text-body-md font-font-body-md text-slate-500">Channels: #ops-updates, #alerts</p>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:block text-right">
<p className="text-label-bold font-font-label-bold text-slate-900">Real-time</p>
<p className="text-[11px] text-slate-500">Mirroring status</p>
</div>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</div>
</div>
</div>
</div>
{/*  Live Preview Settings (Sidebar Style Card)  */}
<div className="col-span-12 lg:col-span-4 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-headline-md font-font-headline-md text-[#091E42] mb-4">Preview Defaults</h3>
<div className="space-y-6">
<div>
<label className="block text-label-bold font-font-label-bold text-slate-700 mb-2">Default View Type</label>
<div className="grid grid-cols-2 gap-2">
<button className="p-3 border-2 border-primary bg-blue-50 rounded-lg text-center">
<span className="material-symbols-outlined block text-primary mb-1" data-icon="dock_to_right">dock_to_right</span>
<span className="text-[11px] font-bold text-primary uppercase">Compact</span>
</button>
<button className="p-3 border border-slate-200 hover:border-slate-300 rounded-lg text-center transition-colors">
<span className="material-symbols-outlined block text-slate-400 mb-1" data-icon="aspect_ratio">aspect_ratio</span>
<span className="text-[11px] font-bold text-slate-600 uppercase">Expanded</span>
</button>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-body-md font-font-body-md text-slate-700">Auto-preview links</span>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-body-md font-font-body-md text-slate-700">Show card metadata</span>
<div className="w-10 h-5 bg-primary rounded-full relative">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-body-md font-font-body-md text-slate-700">Allow link attachments</span>
<div className="w-10 h-5 bg-slate-200 rounded-full relative">
<div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<div className="pt-6 border-t border-slate-100">
<h4 className="text-label-bold font-font-label-bold text-[#091E42] mb-2 uppercase tracking-wide">Security</h4>
<p className="text-[12px] text-slate-500 mb-4 leading-relaxed">External data is proxied through our secure gateway. OAuth 2.0 tokens are encrypted.</p>
<button className="w-full py-2 text-primary border border-primary rounded-lg text-label-bold font-font-label-bold hover:bg-blue-50 transition-colors">Manage Auth Tokens</button>
</div>
</div>
</div>
{/*  Sync Visualization (Glassmorphic)  */}
<div className="col-span-12 lg:col-span-12 bg-gradient-to-r from-[#0065FF] to-[#004fcb] rounded-xl p-8 text-white relative overflow-hidden">
{/*  Abstract Background Graphic  */}
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full -ml-20 -mb-20 blur-2xl"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<h3 className="text-2xl font-black mb-2">Bi-Directional Sync Engine</h3>
<p className="text-blue-100 max-w-lg mb-6">Changes made in Trello cards are automatically updated in connected Jira issues and Google Drive documents, and vice-versa.</p>
<div className="flex gap-4">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[18px]" data-icon="sync_alt">sync_alt</span>
<span className="text-label-bold font-font-label-bold uppercase">Uptime</span>
</div>
<div className="text-2xl font-bold">99.98%</div>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[18px]" data-icon="bolt">bolt</span>
<span className="text-label-bold font-font-label-bold uppercase">Avg. Latency</span>
</div>
<div className="text-2xl font-bold">142ms</div>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="material-symbols-outlined text-[18px]" data-icon="cached">cached</span>
<span className="text-label-bold font-font-label-bold uppercase">Syncs/Day</span>
</div>
<div className="text-2xl font-bold">14.2k</div>
</div>
</div>
</div>
<div className="shrink-0 bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-2xl w-full md:w-auto min-w-[320px]">
<h4 className="text-label-bold font-font-label-bold mb-4 uppercase">Sync Hierarchy</h4>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/30 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]" data-icon="priority_high">priority_high</span>
</div>
<span className="text-body-md">Trello (Primary Source)</span>
</div>
<div className="w-px h-4 bg-white/20 ml-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]" data-icon="mediation">mediation</span>
</div>
<span className="text-body-md">Enterprise Gateway Proxy</span>
</div>
<div className="w-px h-4 bg-white/20 ml-4"></div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]" data-icon="link_off">link_off</span>
</div>
<span className="text-body-md text-blue-200 italic">Conflict resolution: Auto-merge</span>
</div>
</div>
</div>
</div>
</div>
{/*  Google Drive Component (Bottom Row)  */}
<div className="col-span-12 lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="add_to_drive">add_to_drive</span>
</div>
<div>
<h3 className="font-bold text-slate-900">Google Drive File Stream</h3>
<p className="text-[12px] text-slate-500">Connected to Enterprise Shared Drive</p>
</div>
</div>
<button className="text-primary text-label-bold font-font-label-bold hover:underline">Change Drive</button>
</div>
<div className="bg-slate-50 rounded-lg p-4 flex items-center justify-between border border-slate-100">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-amber-500" data-icon="folder">folder</span>
<span className="text-body-md text-slate-700 font-medium">/2024-Campaign-Assets/Designs</span>
</div>
<span className="text-[11px] text-slate-400">1.2 GB</span>
</div>
</div>
{/*  Connectivity Stats (Bottom Row)  */}
<div className="col-span-12 lg:col-span-6 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="font-bold text-slate-900 mb-4">Account Connectivity Status</h3>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-body-md text-slate-600">Jira API Key (Valid)</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-body-md text-slate-600">Google OAuth (Active)</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-body-md text-slate-600">Slack Webhook (Ready)</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-amber-500"></div>
<span className="text-body-md text-slate-600">Figma Link (Expired)</span>
</div>
</div>
<button className="mt-6 w-full py-2 bg-slate-50 text-slate-600 rounded-lg text-label-bold font-font-label-bold border border-slate-200 hover:bg-slate-100 transition-colors">Re-authenticate All</button>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 z-50 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">AI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Admin</span>
</div>
</nav>

    </>
  );
};

export default SmartLinksManager;
