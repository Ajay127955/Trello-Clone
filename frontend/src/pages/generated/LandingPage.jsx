import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none fixed top-0 w-full z-50 flex justify-between items-center px-4 h-14 antialiased">
<div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
<span className="material-symbols-outlined text-blue-600 dark:text-blue-400" data-icon="grid_view">grid_view</span>
<span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Trello</span>
<nav className="hidden md:flex items-center gap-6 ml-6">
<a className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1" href="#" onClick={(e) => e.preventDefault()}>Features</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#" onClick={(e) => e.preventDefault()}>Solutions</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>Plans</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>Pricing</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="text-slate-600 dark:text-slate-400 font-medium px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded" onClick={() => navigate('/login')}>Log in</button>
<button className="bg-primary text-on-primary font-bold px-4 py-1.5 rounded-lg hover:opacity-90 active:scale-95 transition-all" onClick={() => navigate('/sign-up')}>Get Trello for free</button>
</div>
</header>
<main className="pt-14">
<section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container min-h-[795px] flex items-center">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
</div>
<div className="container-padding max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
<div className="text-white">
<h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                        Trello brings all your tasks, teammates, and tools together
                    </h1>
<p className="font-body-lg text-lg md:text-xl text-on-primary-container opacity-90 mb-10 max-w-xl">
                        Keep everything in the same place—even if your team isn’t. Join over 2,000,000 teams worldwide who are using Trello to get more done.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<input className="flex-grow max-w-md px-4 py-4 rounded-lg text-on-surface border-none focus:ring-2 focus:ring-secondary-container" placeholder="Email" type="email"/>
<button className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-surface-container-high transition-colors text-lg" onClick={() => navigate('/sign-up')}>Sign up - it's free</button>
</div>
</div>
<div className="hidden lg:block">
<img alt="Productive team working" className="rounded-xl shadow-2xl border-4 border-white/20 rotate-1" data-alt="Modern collaborative workspace with diverse team members using digital boards on large screens in a bright airy office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZBEx13NFmETrV45Qh2tl4Gzib6QLCelVPCZxKCq0nVzKQClhwuHjZ5ZJ7MqK440oX801Cu5HXh2RzYKM3vJzLQMtMF1p0UVOhvCfowmAOqjEv7_6PIYj2AULJcMwXmXbmofbBWuRyGRZWxQHPtlrdGN-4NZ7W7KJUoh2e2EhRgGjb4bygFfrpdRd_N7HUsIjub2e3--1d4tjGGiDWZjHXUDanS6YnUciJWmDyY-dHg52bQbU_Vbst4y6YMXhRJ1pDIt4_l4tH57K"/>
</div>
</div>
</section>
<section className="py-20 bg-white">
<div className="container-padding max-w-7xl mx-auto">
<p className="text-center font-label-bold text-slate-500 mb-10 uppercase tracking-widest">Trusted by the world's best teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
<div className="text-2xl font-black text-slate-800">VISA</div>
<div className="text-2xl font-black text-slate-800">Zoom</div>
<div className="text-2xl font-black text-slate-800">Fender</div>
<div className="text-2xl font-black text-slate-800">DoorDash</div>
<div className="text-2xl font-black text-slate-800">Squarespace</div>
</div>
</div>
</section>
<section className="py-24 bg-surface">
<div className="container-padding max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-xl text-slate-900 mb-4">A productivity powerhouse</h2>
<p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="bg-white p-lg rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-blue-600" data-icon="dashboard">dashboard</span>
</div>
<h3 className="font-headline-md mb-3">Boards</h3>
<p className="font-body-md text-on-surface-variant">Trello boards keep tasks organized and work moving forward. In a single glance, see everything from "things to do" to "done!"</p>
</div>
<div className="bg-white p-lg rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-purple-600" data-icon="list_alt">list_alt</span>
</div>
<h3 className="font-headline-md mb-3">Lists</h3>
<p className="font-body-md text-on-surface-variant">The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs.</p>
</div>
<div className="bg-white p-lg rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-emerald-600" data-icon="credit_card">credit_card</span>
</div>
<h3 className="font-headline-md mb-3">Cards</h3>
<p className="font-body-md text-on-surface-variant">Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white overflow-hidden">
<div className="container-padding max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="bg-blue-600/5 absolute -inset-10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-2 gap-4 relative">
<div className="space-y-4 pt-12">
<div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
<div className="w-full h-2 bg-slate-100 rounded mb-3"></div>
<div className="w-3/4 h-2 bg-slate-100 rounded mb-4"></div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-blue-400"></div>
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
<img alt="Chart visual" className="w-full h-32 object-cover rounded mb-3" data-alt="Clean minimalist business dashboard showing growth charts and data visualization with soft blue accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF_5wO4z32CZzB8l8TQHJkMVHVWBpY5Tc1qxcF3SJEaRtl7Fu2bT1mloujUViAQcA3uS56PyLYUly6PA5dETMRPh2hymEbANk4-vrOkcEfn6drKWW9c4evi6qvPdAIeiCl5pIaRJzSX8nEhDi6B6P1rpPvRpP08-KJhveVJOsBqNP1FHXlxQUM9KH5jD04PX6wFil4pAfBGiN4TGYo0HHNjrsWkz0OAHW8NA8MfsLwb81CiHTq1O48Cv0uubZvZhhECIWxCSZPQARa"/>
<div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
<div className="flex items-center justify-between mb-4">
<span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">DESIGN</span>
<span className="material-symbols-outlined text-slate-400 text-sm" data-icon="more_horiz">more_horiz</span>
</div>
<div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
<div className="w-5/6 h-2 bg-slate-100 rounded"></div>
</div>
<div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100 transform translate-x-4">
<div className="flex items-center gap-2 mb-3">
<span className="material-symbols-outlined text-blue-500" data-icon="check_circle">check_circle</span>
<div className="w-24 h-2 bg-slate-100 rounded"></div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-slate-300" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-lg border border-slate-100">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-blue-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-purple-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-[10px] font-bold text-emerald-800">+5</div>
</div>
</div>
</div>
</div>
</div>
<div>
<h2 className="font-headline-xl text-slate-900 mb-6">Work smarter with Automation</h2>
<p className="font-body-lg text-on-surface-variant mb-8">Let the robots do the work—so your team can focus on work that matters. With Trello’s built-in automation, Butler, reduce the number of tedious tasks (and clicks) on your project board by harnessing the power of automation across your entire team.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="bolt">bolt</span>
<div>
<span className="font-label-bold block">Rule-based triggers</span>
<span className="text-on-surface-variant text-sm">Move cards, post comments, and more automatically.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" data-icon="calendar_today">calendar_today</span>
<div>
<span className="font-label-bold block">Calendar commands</span>
<span className="text-on-surface-variant text-sm">Automate recurring tasks on a schedule.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-24 bg-primary text-white">
<div className="container-padding max-w-4xl mx-auto text-center">
<h2 className="font-headline-xl text-white mb-6">Get started with Trello today</h2>
<p className="font-body-lg text-blue-100 mb-10">Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-primary font-bold px-10 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg" onClick={() => navigate('/sign-up')}>Sign up - it's free</button>
</div>
</div>
</section>
</main>
<footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 w-full">
<div className="flex flex-col md:flex-row justify-between items-center px-8 py-10 w-full max-w-7xl mx-auto">
<div className="mb-8 md:mb-0 text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<span className="material-symbols-outlined text-blue-600" data-icon="grid_view">grid_view</span>
<span className="font-bold text-slate-900 dark:text-white text-lg">Trello</span>
</div>
<p className="text-xs font-normal text-slate-500 dark:text-slate-400">© 2024 Trello Clone Inc. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
<a className="text-xs font-normal text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline" href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
<a className="text-xs font-normal text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline" href="#" onClick={(e) => e.preventDefault()}>Terms</a>
<a className="text-xs font-normal text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline" href="#" onClick={(e) => { e.preventDefault(); navigate('/help-center'); }}>Support</a>
<a className="text-xs font-normal text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:underline" href="#" onClick={(e) => e.preventDefault()}>About</a>
</div>
<div className="mt-8 md:mt-0 flex gap-4">
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="public">public</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="share">share</span>
<span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer" data-icon="mail">mail</span>
</div>
</div>
</footer>
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 pb-safe bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] z-50">
<div className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 font-bold cursor-pointer" onClick={() => navigate('/boards-dashboard')}>
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[11px] font-medium">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer" onClick={() => navigate('/search-results')}>
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[11px] font-medium">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer" onClick={() => navigate('/notifications')}>
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[11px] font-medium">Alerts</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 cursor-pointer" onClick={() => navigate('/member-profile')}>
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[11px] font-medium">Account</span>
</div>
</nav>

    </>
  );
};

export default LandingPage;
