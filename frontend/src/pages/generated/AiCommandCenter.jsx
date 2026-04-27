import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AiCommandCenter = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white" data-icon="grid_view">grid_view</span>
<h1 className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</h1>
<nav className="hidden md:flex gap-2 ml-6">
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 font-sans text-sm font-medium tracking-tight" href="#">AI Command Center</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight transition-colors" href="#">Workspace</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 font-sans text-sm font-medium tracking-tight transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-white p-1 hover:bg-white/20 transition-colors rounded-md" data-icon="search">search</button>
<button className="material-symbols-outlined text-white p-1 hover:bg-white/20 transition-colors rounded-md" data-icon="notifications">notifications</button>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center border-2 border-white/20 overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4fsn0cGI-7WOoXd9wBTGShpmrB6k4riL9oYNsayI8Qlsxw8Q3jkL50Vb8nqNpYEiUNetYzQYIzlMf6d06nfn85po-6YWl5YszvPHEO6f5EVb9dbRlIVBwL5wfP76hAS9M32D-ytmarFirrorIZSEAagq2unLv7eQiiUYWdnupRAODIHUmHfXkM8zDBR14AFVdUA7L0jx3c0FJJILCwGxySbDCNq4qx29tASVsp79J52GYS26Vp5S4XJArx-E46jHp7eZGcmbmtb_4"/>
</div>
</div>
</header>
<div className="flex pt-12 min-h-screen">
{/*  NavigationDrawer  */}
<aside className="bg-slate-50 dark:bg-slate-900 h-full w-64 border-r border-slate-200 dark:border-slate-800 fixed left-0 top-12 hidden md:flex flex-col pt-4 pb-20">
<div className="px-4 mb-6">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-white" data-icon="rocket_launch">rocket_launch</span>
</div>
<div>
<p className="text-sm font-bold text-[#091E42] dark:text-white">Enterprise Global</p>
<p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Admin Console</p>
</div>
</div>
</div>
<nav className="space-y-1 px-2">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="dashboard">dashboard</span>
<span>Workspace Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] rounded-l-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="psychology">psychology</span>
<span>AI Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="admin_panel_settings">admin_panel_settings</span>
<span>Enterprise Admin</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="groups">groups</span>
<span>Team Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="insights">insights</span>
<span>Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined text-lg" data-icon="bolt">bolt</span>
<span>Automation Settings</span>
</a>
</nav>
<div className="mt-auto px-4">
<div className="p-4 bg-primary-fixed dark:bg-blue-900/20 rounded-xl">
<p className="text-xs font-bold text-on-primary-fixed-variant mb-1">AI Usage Plan</p>
<div className="w-full bg-white/50 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[65%]"></div>
</div>
<p className="text-[10px] mt-2 text-on-primary-fixed-variant/70">8,420 / 12,000 queries used</p>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 md:ml-64 p-md lg:p-lg max-w-[1400px] mx-auto w-full pb-24 md:pb-12">
{/*  AI Command Input Section  */}
<section className="mb-lg">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden p-6 md:p-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
<div>
<h2 className="font-headline-xl text-headline-xl text-on-surface mb-1 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="auto_awesome">auto_awesome</span>
                                    What can I automate today?
                                </h2>
<p className="font-body-md text-body-md text-on-surface-variant">Type your automation request in plain English.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container-high rounded-full font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="tips_and_updates">tips_and_updates</span>
                                    "When a card moves to Done..."
                                </span>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-surface-container-low border-2 border-outline-variant focus:border-primary focus:ring-0 rounded-xl p-4 text-body-lg font-body-lg resize-none placeholder-slate-400" placeholder="e.g., 'Every Friday, summarize the high priority tasks from Marketing Board and send it to Slack #weekly-brief'" rows="2"></textarea>
<div className="absolute bottom-3 right-3 flex gap-2">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors">
<span className="material-symbols-outlined" data-icon="mic">mic</span>
</button>
<button className="bg-primary text-white px-6 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:bg-primary-container transition-all shadow-md">
<span>Deploy Automation</span>
<span className="material-symbols-outlined text-sm" data-icon="send">send</span>
</button>
</div>
</div>
</div>
</div>
</section>
{/*  Bento Grid: Insights & Summary  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-lg">
{/*  Large Summary Card  */}
<div className="lg:col-span-2 glass-card rounded-2xl p-6 shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="summarize">summarize</span>
                            Board Activity Summary
                        </h3>
<div className="flex gap-1">
<button className="px-3 py-1 text-xs font-bold bg-surface-container-highest rounded-md hover:bg-outline-variant transition-colors">Last 24h</button>
<button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-md transition-colors">Last 7d</button>
</div>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-3">
<div className="p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100/50">
<p className="text-xs font-bold text-primary uppercase tracking-tight mb-1">Velocity Spike</p>
<p className="text-sm text-on-surface leading-relaxed">Marketing team completed <span className="font-bold">14 tasks</span> today, 40% above average. Most activity in the "Campaign Launch" board.</p>
</div>
<div className="p-3 bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-100/50">
<p className="text-xs font-bold text-amber-700 uppercase tracking-tight mb-1">Potential Bottleneck</p>
<p className="text-sm text-on-surface leading-relaxed">"Legal Review" list has 8 cards sitting for 3+ days. AI suggests reassigning 2 cards to Sarah for faster turnaround.</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden min-h-[160px] group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Data visualization dashboard showing colorful bar charts and growth trends in a modern clean business interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG9QFG5RgkZjcMhcooor4Q9OcVoRw7j6LokpOhgvA2wEIudH8U8X-CupRqPn9HyoElLNwOkYOSpZPZghDhDo3Bsc8PwAirYAaFQVdv07rxTEnl1fdE05C8lzU2q_C6rJ5FRLlJwfvOK5QEwiT54GX0n7X5BT_AomJtTyBrIeFzh9KMhM-uGUyCOSLUQODtSBHsWjs-pemjR9vM_BzpewaNGSIVV7beTEDBWkBOIRHOuWF-gLdr1_wwiOwVohbHXf5kItze3QifHsHa"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<button className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="open_in_full">open_in_full</span>
                                    View Full Report
                                </button>
</div>
</div>
</div>
</div>
{/*  Insights Mini Column  */}
<div className="flex flex-col gap-gutter">
<div className="bg-white dark:bg-slate-900 rounded-2xl p-5 shadow-sm border border-slate-100 flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-primary" data-icon="trending_up" data-weight="fill">trending_up</span>
<span className="font-label-bold text-label-bold">Project Pulse</span>
</div>
<div className="text-2xl font-black text-on-surface">88%</div>
<p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest mt-1">Health Score</p>
<div className="mt-4 flex -space-x-2">
<img alt="Team" className="w-7 h-7 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlW89jQWg-y2o32Js7WME2Qz9dJ7wB19sb2nlgEOEhA9b0u5LIH5l5JqzNYvmYPUrkCuEDBlW0oI0COfr7F64tlMEUDlPZXq-o-jzfwavo95tKNYNryHJNmjMl0J4SXHdg_NSnT5DUkoEfEY6yvcGmGKnVgvLAbARSmpsxtRi-QAP9OHrn4_UVXN76FoLk-p2mg3xTahqiMvfrtmUv8givvq9TzmijTOszvrGcJlM0DGZ7NdG-oqzn4-8LFGeXuLaomUt8TYAQlVgl"/>
<img alt="Team" className="w-7 h-7 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBopNkMOJKzEw4E-Fh4EzOncXLd8MLoLjV6t12R7xxbDxARJK74CDBmfKXYb2CkeqCEsUt5d-D4m51QC89GYt8YgOyq8VwUC58rfyTcOuzlv_sN1MWGODcRKa9ViDzvsT0JEVpCLmlZo_e4himex9Nqz5uIfuB8z-Ei3eqvagGtIRpGMm-D8DnCRwp3Ujin_ihaLjUzTXPJxYJ0E2unmgpGNu1rRlDsavjLlR7y1clL5m1KGxq5SvQqqZu91nNAwvmi6Xx1Aw0uCNKE"/>
<img alt="Team" className="w-7 h-7 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsh4-z_gaED6dtAgSPkjDkGWeHDgWtmhaASwlPHtnzqNtx42-GyNM3pg7r2f1dfiOLoNDPE1-bskqeImnso8GwvXr55K4yPQp6l6C0MY73lCG8Ko-Lc7bQ-XeEZS6diWksTNc9W1y8tV3raatXCclTL7h2wdv8WlNSro9MGagS5agepfiM3mf-MDImYDAtCzBfFM3aMR43x12IeuoxBwKk34G8T3tHRpI2x6DFnL3Op8mM1_w6eK4Sg35JJkBozaM3_6zPkcjJwENk"/>
<div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">+12</div>
</div>
</div>
<div className="bg-primary text-white rounded-2xl p-5 shadow-lg flex flex-col justify-between">
<div>
<span className="material-symbols-outlined mb-2" data-icon="auto_fix_high">auto_fix_high</span>
<h4 className="font-bold text-sm">Smart Suggestion</h4>
<p className="text-xs opacity-90 mt-2">I noticed 4 cards without labels. Want me to categorize them based on content?</p>
</div>
<button className="mt-4 bg-white/20 hover:bg-white/30 transition-colors py-2 rounded-lg text-xs font-bold">Autofill Labels</button>
</div>
</div>
</section>
{/*  Recommended AI Rules (Horizontal Gallery)  */}
<section className="mb-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-md text-headline-md">Recommended AI Rules</h3>
<button className="text-primary font-label-bold flex items-center gap-1 hover:underline">
                        Explore Library
                        <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
{/*  Rule Card 1  */}
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3 text-primary">
<span className="material-symbols-outlined" data-icon="alternate_email">alternate_email</span>
</div>
<h4 className="font-label-bold text-label-bold mb-1">Smart Mentions</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Notify project lead when a high-priority card is overdue by 24h.</p>
<button className="mt-4 w-full py-2 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-outline-variant transition-colors">Add Rule</button>
</div>
{/*  Rule Card 2  */}
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 text-green-600">
<span className="material-symbols-outlined" data-icon="checklist">checklist</span>
</div>
<h4 className="font-label-bold text-label-bold mb-1">Subtask Generator</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Automatically create standard checklists for new cards in "Dev" board.</p>
<button className="mt-4 w-full py-2 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-outline-variant transition-colors">Add Rule</button>
</div>
{/*  Rule Card 3  */}
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3 text-purple-600">
<span className="material-symbols-outlined" data-icon="translate">translate</span>
</div>
<h4 className="font-label-bold text-label-bold mb-1">Language Translation</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Translate incoming user feedback cards into English from any language.</p>
<button className="mt-4 w-full py-2 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-outline-variant transition-colors">Add Rule</button>
</div>
{/*  Rule Card 4  */}
<div className="min-w-[280px] bg-white dark:bg-slate-900 rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
<div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center mb-3 text-amber-600">
<span className="material-symbols-outlined" data-icon="schedule">schedule</span>
</div>
<h4 className="font-label-bold text-label-bold mb-1">Weekly Cleanup</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Archive cards in "Done" that are older than 30 days every Sunday.</p>
<button className="mt-4 w-full py-2 bg-surface-container-high rounded-lg text-xs font-bold hover:bg-outline-variant transition-colors">Add Rule</button>
</div>
</div>
</section>
{/*  Status Dashboard: Current Automations  */}
<section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
<h3 className="font-label-bold text-on-surface uppercase tracking-wider">Active Automations</h3>
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-500">12 Active</span>
</div>
<button className="material-symbols-outlined text-slate-400 p-1 hover:bg-slate-100 rounded-md" data-icon="filter_list">filter_list</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50">
<th className="px-6 py-3 font-label-bold text-[10px] uppercase text-slate-500">Rule Name</th>
<th className="px-6 py-3 font-label-bold text-[10px] uppercase text-slate-500">Trigger</th>
<th className="px-6 py-3 font-label-bold text-[10px] uppercase text-slate-500">Last Run</th>
<th className="px-6 py-3 font-label-bold text-[10px] uppercase text-slate-500">Status</th>
<th className="px-6 py-3 font-label-bold text-[10px] uppercase text-slate-500">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="bolt">bolt</span>
<span className="font-body-md text-on-surface">Auto-assign Bugs</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Card Created in 'QA'</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">2 mins ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase">Success</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-lg" data-icon="edit">edit</button>
<button className="material-symbols-outlined text-slate-400 hover:text-error transition-colors text-lg" data-icon="delete">delete</button>
</div>
</td>
</tr>
<tr>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary text-xl" data-icon="notifications_active">notifications_active</span>
<span className="font-body-md text-on-surface">Slack Briefing</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Scheduled (Daily)</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">9 hours ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded-full uppercase">Success</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-lg" data-icon="edit">edit</button>
<button className="material-symbols-outlined text-slate-400 hover:text-error transition-colors text-lg" data-icon="delete">delete</button>
</div>
</td>
</tr>
<tr className="bg-error-container/10">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-error text-xl" data-icon="sync_problem">sync_problem</span>
<span className="font-body-md text-on-surface">Github Sync</span>
</div>
</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">Commit Pushed</td>
<td className="px-6 py-4 text-sm text-on-surface-variant">1 hour ago</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-error-container text-error text-[10px] font-bold rounded-full uppercase">Failed</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-slate-400 hover:text-primary transition-colors text-lg" data-icon="refresh">refresh</button>
<button className="material-symbols-outlined text-slate-400 hover:text-error transition-colors text-lg" data-icon="delete">delete</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</main>
</div>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] md:hidden z-50">
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Boards</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1 transform scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">AI</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase mt-1">Admin</span>
</button>
</nav>
{/*  FAB for AI shortcut on mobile  */}
<button className="md:hidden fixed right-6 bottom-20 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:scale-105 active:scale-95 transition-all">
<span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
</button>

    </>
  );
};

export default AiCommandCenter;
