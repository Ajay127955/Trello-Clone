import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PowerUpDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-lg cursor-pointer" data-icon="grid_view">grid_view</span>
<span className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</span>
<nav className="hidden md:flex gap-2 ml-6">
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Templates</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Marketplace</a>
</nav>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer" data-icon="notifications">notifications</span>
<div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold overflow-hidden">
<img alt="User profile" data-alt="Professional headshot of a smiling man in a business casual shirt with soft natural lighting and neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZW0RKG9vFWcPCx8FRmn1rvWJq4ZJ4-Cl3Dj9JC8WsUsHn44IV68Iqc5BulFtBSLCX3hVy8Pz2mXez_Obob48yMbFAfv1gzHWNhE8dnXuPXIPrv3qak949jYs0wblQkBvULpUGZB7Om5_mCGbFku6UnS0j7sylT_ZvP-JjhWZaVSLcQQot1LD9zr8ZPcrr0UWVAucAXclMrQH6xgT6FnotaNH-5exfldlxFnYhl_GAga2Sos2HPVKo66dQReQWw9-WS-vX38ZK2JkK"/>
</div>
</div>
</header>
<div className="flex pt-12">
{/*  NavigationDrawer (Desktop Only)  */}
<aside className="hidden md:flex flex-col h-screen pt-4 pb-20 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 w-64 fixed left-0 top-12">
<div className="px-md mb-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<p className="text-xl font-bold text-[#091E42] dark:text-white">Enterprise Global</p>
<p className="text-[10px] text-slate-500 font-semibold tracking-wider">ADMIN CONSOLE</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-md py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>Workspace Boards
                </a>
<a className="flex items-center gap-3 px-md py-3 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>Power-Ups
                </a>
<a className="flex items-center gap-3 px-md py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>Team Management
                </a>
<a className="flex items-center gap-3 px-md py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>Analytics
                </a>
<a className="flex items-center gap-3 px-md py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>Enterprise Admin
                </a>
</nav>
</aside>
{/*  Main Content  */}
<main className="flex-1 md:ml-64 pb-24 md:pb-12 bg-[#F7F8F9]">
{/*  Hero Breadcrumb & Header  */}
<section className="px-md md:px-xl py-lg bg-white border-b border-slate-200">
<div className="max-w-5xl mx-auto">
<nav className="flex items-center gap-2 text-on-secondary-container font-label-sm mb-md">
<a className="hover:underline" href="#">Power-Ups</a>
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
<a className="hover:underline" href="#">Communication</a>
<span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
<span className="text-on-surface">Slack for TaskFlow</span>
</nav>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md">
<div className="flex items-start gap-lg">
<div className="w-20 h-20 bg-[#4A154B] rounded-xl flex items-center justify-center shadow-sm shrink-0">
<img alt="Slack Logo" className="w-12 h-12" data-alt="The Slack logo featuring four colorful lines forming a hashtag symbol on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3-HqSSMVUmDIkwvS0oNozEihPm1o1q00XLhRMKlZjvk2pf3J7uAIi1ms_If-M6MRG-wNSTtsVnUymwKpSr0rVsRhZQI0NRUKKwQ60zKcwZZwMdjkHbGZ-YgPb8hQmwzZn0sC3pJBdilBCvbhN7XF-ULzXl5NxuRzm7NgsU0l3YizeCeQZAH177mOUOO9_M038Y1FqUlNgx2hbW3K6ExluWhgolNWUXw7l_gFwF8ZrA-JqamW9L2pbHIIxQu0DwfPdfvtWEJZIhi-R"/>
</div>
<div>
<h1 className="font-headline-xl text-on-surface mb-1">Slack</h1>
<p className="text-body-lg text-on-secondary-container max-w-xl">Bring communication and collaboration together with Slack and TaskFlow. Get real-time updates and take action without switching apps.</p>
<div className="flex items-center gap-md mt-md">
<div className="flex items-center text-yellow-500">
<span className="material-symbols-outlined text-md" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-md" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-md" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-md" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-md" data-icon="star_half" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
<span className="text-on-secondary-container font-label-bold ml-2">4.8 (2.4k reviews)</span>
</div>
<span className="px-2 py-0.5 bg-surface-container-high rounded text-xs font-bold text-on-secondary-container">FREE PLAN AVAILABLE</span>
</div>
</div>
</div>
<button className="bg-primary-container text-on-primary-container hover:bg-primary px-xl py-md rounded-xl font-headline-md flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 self-start md:self-center">
<span className="material-symbols-outlined" data-icon="add">add</span>
                            Add to Board
                        </button>
</div>
</div>
</section>
{/*  Content Grid  */}
<div className="max-w-5xl mx-auto px-md md:px-xl py-xl grid grid-cols-1 lg:grid-cols-3 gap-lg">
{/*  Left Column: Details  */}
<div className="lg:col-span-2 space-y-xl">
{/*  Asymmetric Image Gallery  */}
<div className="grid grid-cols-12 grid-rows-2 gap-md h-[400px]">
<div className="col-span-8 row-span-2 rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img alt="Slack Integration Dashboard" className="w-full h-full object-cover" data-alt="Sleek software dashboard showing task integration between project management cards and a messaging app interface with vibrant data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJP0mXQseAIahEaFdM9RSNRb2E9ueiR_x4Fr56Fg494UjwctqOYe1GmO7glDIWWFGTZ5ctDlVyeoo2r62YEIRFy9ht1wUqBEWY6pZYlqGybL_a5LS5xGEZgigrrs4ZfMI8o4HWmctzCcA0yi22gDhNVXUEMeTNGRk65H11tdJJn9g8SnW33ePSgizdPFCz7T0vsQuwC3mU3JCSsMy7cUwHlNUa7tFT2KE7-XeJ_x8PRBHBh-LIesq0Fjz3iiU-d0NmwRSips2T1LX"/>
</div>
<div className="col-span-4 row-span-1 rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img alt="Team collaborating" className="w-full h-full object-cover" data-alt="Modern office setting with team members discussing work in front of a large digital whiteboard display showing agile workflows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoA1Lr9xhkP6RwAGhE3swZSnIUujIRzB79di7wbEZX_qRHPHcsFOOw40iiB9qonVnIOwbZvDM1LJuQ-OGKP5mUVlrwpPr0xnfxlX0UNOTHrtSs11N7Ms2j6ZjaRHfEZgi1RTExjgE7usYy_wYg-GdG1GW5cxPIjKLIxaqqwoGQkq7IvBfhwYqxG0_S6ggnqdInNIjjjBLnZjCVYpvsPTprrsS_HJCN3HW8nEl0BzSowu-h7fqUEtVXsquE2V6FEKSKLb-eUMLyUEat"/>
</div>
<div className="col-span-4 row-span-1 rounded-xl overflow-hidden shadow-sm border border-slate-200">
<img alt="Slack mobile notification" className="w-full h-full object-cover" data-alt="A smartphone held in hand displaying a professional notification alert with clean UI design and primary blue accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9iwi91LCQQRrVqxe1q-BxApt5BMcG6wLmP73P8QtDzbBMkMrMA6csYrn-8pQhgBKFoHQc2FiW0A0KY99BHyRSCu_F4zqVnP-XQf6Tv6mpIhSOowaRg21leZj_fKH7gEHlDuLoLcliIhwWbFaKH8NHA1hNZP3t61E40qtac4XIxmyVDXP3d3va2lDT_3YrPoWV8RthK5fq6hhuq9ATacXfrdRzwM5D03J0msDOGu77VAkkuLU8CF_MRM5V69i0aO8vu7_hf0oHImga"/>
</div>
</div>
{/*  Description Section  */}
<div className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm">
<h2 className="font-headline-md text-on-surface mb-md">About Slack for TaskFlow</h2>
<p className="text-body-lg text-on-secondary-container leading-relaxed mb-lg">
                            The Slack Power-Up for TaskFlow turns your boards into a hub of communication. Get relevant notifications from TaskFlow sent directly to your Slack channels, and turn Slack conversations into TaskFlow cards instantly. No more context-switching between your team's chat and your project boards.
                        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
<div>
<h4 className="font-label-bold text-on-surface">Interactive Notifications</h4>
<p className="text-body-md text-on-secondary-container">Reply to comments or move cards directly from Slack.</p>
</div>
</div>
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary" data-icon="link">link</span>
<div>
<h4 className="font-label-bold text-on-surface">Smart Links</h4>
<p className="text-body-md text-on-secondary-container">Paste a TaskFlow link in Slack to see rich previews.</p>
</div>
</div>
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary" data-icon="quick_reference_all">quick_reference_all</span>
<div>
<h4 className="font-label-bold text-on-surface">Quick Card Creation</h4>
<p className="text-body-md text-on-secondary-container">Convert any message into a task with one click.</p>
</div>
</div>
<div className="flex gap-md">
<span className="material-symbols-outlined text-primary" data-icon="automation">automation</span>
<div>
<h4 className="font-label-bold text-on-surface">Auto-Syncing</h4>
<p className="text-body-md text-on-secondary-container">Keep status and assignees updated across both platforms.</p>
</div>
</div>
</div>
</div>
{/*  Setup Instructions (Bento Style)  */}
<div className="space-y-md">
<h2 className="font-headline-md text-on-surface">How to setup</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
<span className="text-xl font-black text-primary/30 mb-md block">01</span>
<h4 className="font-label-bold mb-xs">Enable Power-Up</h4>
<p className="text-label-sm text-on-secondary-container">Click "Add to Board" and select your workspace.</p>
</div>
<div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
<span className="text-xl font-black text-primary/30 mb-md block">02</span>
<h4 className="font-label-bold mb-xs">Authorize Slack</h4>
<p className="text-label-sm text-on-secondary-container">Connect your Slack account and choose channels.</p>
</div>
<div className="bg-surface-container-low p-md rounded-xl border border-outline-variant">
<span className="text-xl font-black text-primary/30 mb-md block">03</span>
<h4 className="font-label-bold mb-xs">Configure Alerts</h4>
<p className="text-label-sm text-on-secondary-container">Set rules for which actions trigger notifications.</p>
</div>
</div>
</div>
{/*  Reviews  */}
<div className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-lg">
<h2 className="font-headline-md text-on-surface">User Reviews</h2>
<button className="text-primary font-label-bold hover:underline">Write a review</button>
</div>
<div className="space-y-lg">
<div className="border-b border-slate-100 pb-lg">
<div className="flex justify-between items-start mb-sm">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-slate-200">
<img alt="Reviewer" className="rounded-full" data-alt="Portrait of a woman with a friendly expression in a brightly lit professional setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVOD0fB5i6EgUJMHPnPm2MK5bk1QHVeMGcuWS4jSpiKZUUG7g5_VdHkEiy-GRml4hrnORF2G8QlYovU-g31zb7H0ppj5e2t8X5lvYmeDr3zZEwYYnt-THYpx-yn019gfNfjdznf1Tpv4pmLT1Q-6mrQgJJMUWO-TeWbkxHvIFxMnctF89WZ-dmJjC0MKC8kH9aqARgH6LqLBtfJDUnX6RRBy_uJeapmVWJEbn1ciHME2HUDktfCaJEKRBlWtBR-5_QInJTLoMsjDfk"/>
</div>
<div>
<p className="font-label-bold">Sarah Jenkins</p>
<p className="text-[10px] text-slate-400">Project Manager @ TechFlow</p>
</div>
</div>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
</div>
<p className="text-body-md text-on-secondary-container">The best Power-Up we've added so far. The ability to create cards directly from Slack saved my team at least 5 hours of admin work per week. Highly recommended for remote teams.</p>
</div>
<div>
<div className="flex justify-between items-start mb-sm">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-slate-200">
<img alt="Reviewer" className="rounded-full" data-alt="Portrait of a man in a professional setting with soft lighting and a blurred background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApvBaZ6yuUKX0lOnXS4-jlKlFKf2lX9EXxpFwvpZFnCrd6FxERRO-3AhONXaFpEWKwtE4-Ol8rSZj2xn_IdPP0ZHRbZBA_iuQJhGytuCaShmyNIQy6ntl4uJV-nSbmYj2mVmzFkGffelLnp1LN8wPR9OwUVjwdibPuQpVHx2ypT2L0x6DGAAfHnoJREJKV-xl2hmqA0Mrvd-chWtnt_jqB3CqQ9dArryCGZi_8koDNDZdSFRv32V6JdFbKNxSZMVx_85X7SvkzjFMG"/>
</div>
<div>
<p className="font-label-bold">David Chen</p>
<p className="text-[10px] text-slate-400">CTO @ Innovate</p>
</div>
</div>
<div className="flex text-yellow-500">
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-xs" data-icon="star_outline">star_outline</span>
</div>
</div>
<p className="text-body-md text-on-secondary-container">Great integration, though I wish there were more granular notification filters. Still, it's essential for our workflow.</p>
</div>
</div>
</div>
</div>
{/*  Right Column: Meta & Pricing  */}
<div className="space-y-lg">
{/*  Pricing Card  */}
<div className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm">
<h3 className="font-label-bold text-on-surface uppercase tracking-wider text-[10px] mb-md">Pricing</h3>
<div className="mb-lg">
<div className="flex items-baseline gap-1">
<span className="font-headline-xl text-on-surface">$0</span>
<span className="text-on-secondary-container font-body-md">/per month</span>
</div>
<p className="text-label-sm text-on-secondary-container mt-1">Free for up to 50 notifications/day</p>
</div>
<div className="space-y-sm border-t border-slate-100 pt-md mb-lg">
<div className="flex items-center gap-2 text-label-sm text-on-secondary-container">
<span className="material-symbols-outlined text-green-600 text-sm" data-icon="check_circle">check_circle</span>
                                Unlimited Card Previews
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-secondary-container">
<span className="material-symbols-outlined text-green-600 text-sm" data-icon="check_circle">check_circle</span>
                                Direct Card Creation
                            </div>
<div className="flex items-center gap-2 text-label-sm text-on-secondary-container">
<span className="material-symbols-outlined text-green-600 text-sm" data-icon="check_circle">check_circle</span>
                                Slack Link Unfurling
                            </div>
</div>
<button className="w-full py-md border-2 border-primary text-primary font-label-bold rounded-xl hover:bg-blue-50 transition-colors">
                            Upgrade to Pro ($9/mo)
                        </button>
</div>
{/*  Meta Details  */}
<div className="bg-white p-xl rounded-xl border border-slate-200 shadow-sm space-y-md">
<div>
<h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Developer</h4>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-[#4A154B] flex items-center justify-center text-[10px] text-white font-bold">S</div>
<span className="font-label-bold text-on-surface">Slack Technologies</span>
</div>
</div>
<div>
<h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Last Updated</h4>
<p className="font-body-md text-on-surface">Oct 24, 2023</p>
</div>
<div>
<h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Support</h4>
<a className="text-primary font-body-md flex items-center gap-1 hover:underline" href="#">
<span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
                                Contact Support
                            </a>
</div>
<div className="pt-md border-t border-slate-100">
<h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Categories</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600">COMMUNICATION</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600">COLLABORATION</span>
<span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold text-slate-600">AUTOMATION</span>
</div>
</div>
</div>
{/*  Side Ad/CTA  */}
<div className="bg-gradient-to-br from-primary to-blue-700 p-xl rounded-xl shadow-lg text-white">
<h3 className="font-headline-md mb-sm">Ready to automate?</h3>
<p className="text-body-md opacity-90 mb-lg">Combine Slack with TaskFlow Butler for advanced automated workflows.</p>
<button className="bg-white text-primary px-lg py-sm rounded-lg font-label-bold shadow-sm hover:bg-blue-50 transition-colors">
                            Learn Butler
                        </button>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<footer className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Add</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Admin</span>
</div>
</footer>

    </>
  );
};

export default PowerUpDetails;
