import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TemplateLibrary = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="bg-white dark:bg-slate-900 shadow-sm fixed top-0 w-full z-50 border-b border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-center w-full px-4 h-14">
<div className="flex items-center gap-md">
<button className="p-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-400">menu</span>
</button>
<div className="text-blue-600 dark:text-blue-400 font-black text-xl">Trello</div>
<nav className="hidden md:flex items-center gap-md ml-lg">
<a className="text-slate-600 dark:text-slate-400 font-inter text-lg font-semibold tracking-tight hover:bg-slate-50 dark:hover:bg-slate-800 px-sm py-xs rounded" href="#">Workspaces</a>
<a className="text-blue-600 dark:text-blue-400 font-bold font-inter text-lg tracking-tight hover:bg-slate-50 dark:hover:bg-slate-800 px-sm py-xs rounded" href="#">Templates</a>
</nav>
</div>
<div className="flex items-center gap-sm">
<button className="p-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-400">search</span>
</button>
<button className="bg-primary-container text-on-primary-container px-md py-sm rounded font-label-bold active:scale-95 transition-transform">Create</button>
</div>
</div>
</header>
<div className="flex pt-14 pb-16 md:pb-0 h-screen overflow-hidden">
{/*  NavigationDrawer Shell  */}
<aside className="hidden md:flex flex-col h-full py-4 bg-white dark:bg-slate-900 w-72 rounded-r-lg shadow-2xl divide-y divide-slate-100 dark:divide-slate-800 shrink-0">
<div className="flex items-center gap-md px-4 py-6">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-white overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional headshot of a smiling product manager in a clean corporate studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR6vj1m6yoRaZ2nacBCgbru4thIj2Tmr0_K3MNv50TVSUSVdEFBlpoGOTdkntI7GgfLJ-pm81AgMLvBDJhw69MebAFwoQKH5jfiNo5XkvLNNtotHksN8wCwUhTlEUaEvvbKqeJ9pXNoEvbZ8Qk06eC5LI4iNJ8lwXODthnMSFGsvURSIiqnWpU-w1LdTNCkaGIEg3k7BgYwLxrVxLJaajW3H7zWdeosthfkO8Z3TEv3lwjq0YO03tRE83Y-hYBIQJj3Kac7X9qoY_W"/>
</div>
<div>
<div className="text-blue-600 font-bold font-inter text-sm">Productive User</div>
<div className="text-slate-500 text-xs">Free Workspace</div>
</div>
</div>
<nav className="flex-1 py-4 flex flex-col">
<a className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-inter text-sm font-medium">Workspaces</span>
</a>
<a className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">star</span>
<span className="font-inter text-sm font-medium">Starred</span>
</a>
<a className="flex items-center gap-md px-4 py-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold border-r-4 border-blue-600 transition-all" href="#">
<span className="material-symbols-outlined">dashboard_customize</span>
<span className="font-inter text-sm font-medium">Templates</span>
</a>
<a className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">cloud_off</span>
<span className="font-inter text-sm font-medium">Offline</span>
</a>
<div className="mt-auto">
<a className="flex items-center gap-md px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-inter text-sm font-medium">Settings</span>
</a>
</div>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 overflow-y-auto bg-surface-bright hide-scrollbar px-lg py-xl">
{/*  Hero Section  */}
<section className="max-w-6xl mx-auto mb-xl">
<div className="relative rounded-xl overflow-hidden h-64 flex items-center px-xl mb-xl bg-gradient-to-r from-primary-container to-blue-800">
<div className="absolute inset-0 opacity-20">
<img className="w-full h-full object-cover" data-alt="clean minimal office workspace with multiple screens and organized desk layout in soft bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFQ_vT32M8_HrCQ0lE_Ilm4fRsoYoO3Ln_z_OsvQoIAtvg0mEhT7ouo5W9pKJyZAdx8qulX2wc4C5Uug_aEtQaKcibqL88ZU58Rfk0Ff8EBFVOqIs86HIqTWRsW0xeNgUtladYBbN0sU9ZvUYMYZA9SsMok2bzaB-2qyYebkUkatkyLTAiuIyUU6gTGTDv4HMP-boVsD1-mSqsjxztZpL-9A0u-JntELyIFRuwNgJCjw6pXBO8WlBrrUAGKIF19j8YXkyRprdKkmUo"/>
</div>
<div className="relative z-10 max-w-xl">
<h1 className="font-headline-xl text-white mb-sm">Template Library</h1>
<p className="font-body-lg text-blue-50">Choose a pre-built layout to jumpstart your project. From agile sprints to classroom planning, we've got you covered.</p>
</div>
</div>
{/*  Categories Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
<div className="md:col-span-8">
<h2 className="font-headline-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">rocket_launch</span>
                            Project Management
                        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
{/*  Template Card 1  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 p-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="rounded-lg h-32 mb-sm overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="kanban board layout with colorful cards representing a software development sprint workflow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIZV01mx2Z3rmbSsnP-QYL2FUUpkg1w4SVZatUP4lmovnAsQpxcZNuIrcBWJ9yNMRFVXcmigsTHRzLdo0wJ_eFzkGyzV4p3-evLOzqUhopqQkfYmo8huBda6Tumaix8bMTc4M6kWBTjE4AAJ13IAXsgHsVj5jzRvZsn3kuQeMl4S9izB8-L3Z3LaL6h8xx6t708pa-I0f53cJWHPmoNlROpYbEhHRspBhXzvEEjXf_b61m1zQz_W0M_b8Afv9XpG5TuH7dXkG2PHbH"/>
</div>
<div className="px-xs">
<h3 className="font-label-bold text-on-surface">Agile Sprint Board</h3>
<p className="text-[10px] text-slate-500 mt-xs">Used by 45k+ teams</p>
</div>
</div>
{/*  Template Card 2  */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 p-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="rounded-lg h-32 mb-sm overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="project timeline with gantt chart elements and colorful status markers for marketing campaign" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDkd02u2xP0c6blCFr34Wrxr5fEgENIBMaG18YqybFxyJ8jV1oBP32UKxitkMlV2fDeAZNANP1hxUVjTnoNzz_f95sby1Bb-BqF3LVbY-lP2WJgrYE6i8CSh0wXHcwk5kwIFyoP93aYdOYXoV5lUBFKRqXO_FDFP5i7mHWksr4l3AiYjqmeaEgpf8n_e5-A8GYRd69Ju6avLJknUkKwan2LuWGiZixpqjwjS5QTP4Tskgsrsnp0Ou_1mGR9inzeO3jJK3totIlPKPh"/>
</div>
<div className="px-xs">
<h3 className="font-label-bold text-on-surface">Marketing Master Plan</h3>
<p className="text-[10px] text-slate-500 mt-xs">Used by 12k+ teams</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-4">
<h2 className="font-headline-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-tertiary">school</span>
                            Education
                        </h2>
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 p-sm hover:shadow-md transition-shadow cursor-pointer group h-full">
<div className="rounded-lg h-48 mb-sm overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="lesson plan board with organized columns for subjects and homework tracking" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_H17fnygNpuSr1laiZNVttDdrEldF35uzuOaKkHWVHUctuZPl9lr-BfzPwcRirCEy-gg2T7NwASOnd2wKG7EIaXN5OF7ZyDH68NtvHlnF_hfIYXiPqqpciMo26Bsw4cVpxKDZ8YutOuS1zq2sKHZHhNXXQt4g7LGbOnXq9zP3cd1VTeRRAFBuuOQ-3Q7cIPdzBMa9YkJLIEtgz_Mc1PwqSwhytki5RcXEdTr77rvPH0_Q-POFcmqpaQ80lJSrvVUXeMoCZEHeSWdq"/>
</div>
<div className="px-xs">
<h3 className="font-label-bold text-on-surface">Classroom Management</h3>
<p className="text-[10px] text-slate-500 mt-xs">Perfect for K-12 Teachers</p>
<button className="mt-md w-full bg-blue-50 text-primary py-sm rounded font-label-sm group-hover:bg-primary group-hover:text-white transition-colors">View Template</button>
</div>
</div>
</div>
</div>
{/*  Secondary Row  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div>
<h2 className="font-headline-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary">person</span>
                            Personal
                        </h2>
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 p-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="rounded-lg h-32 mb-sm overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="bullet journal style board with habit trackers and weekly goal settings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNxUVtg_slMSkP2Ui0IG3Vd_rb0mW6znrYZWnS8eWK4zhwev9rG4KsllHJGzON84ms2AY1CKJxG7aEh1XfnmMrEmuLGNauGGGkODAeZYukriNZ2zwOF3a7_OE82_Skn4-NQNRPccCmxhkpnVxDVvX7Xk7kkElyRNmwMxp46OPoI5-bIutxloMm-SNYJlrAmluEIfZtE6DZyJnUXXXf60vN-S6zI5N3NV7BzPMT27DA5Ut3QQ_la7qRYifsThpYBfmkZ2swtjHpmHN"/>
</div>
<div className="px-xs">
<h3 className="font-label-bold text-on-surface">Daily Habit Tracker</h3>
<p className="text-[10px] text-slate-500 mt-xs">Boost your productivity</p>
</div>
</div>
</div>
<div>
<h2 className="font-headline-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-error">favorite</span>
                            Wellness
                        </h2>
<div className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 p-sm hover:shadow-md transition-shadow cursor-pointer group">
<div className="rounded-lg h-32 mb-sm overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="clean yoga routine board with pose illustrations and duration timers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrtM9KSLpT_zxIwTQJWupq_ELLXYRIJU9Q0w54_u71ulzSXLabmvL3iFYKhSnquxtaTmquSMl9RXbcO3oA2UIouysgnm67DOsWujuEtpvtrdFMd7RSTSJJ6xxwOZJvtOUOTaBECb1vn23OqIQNt5N2ZaMHYovt6LSaUggWyt6x2mcWmr21Hs4fGZikOjMNTzoK_Fgbi01WJN6xW3G3uk5juQQJNNqkTmTZy1B7rDrLMP7VoLQLjwfshwblqR5n7VfzvnzaFBaaODMc"/>
</div>
<div className="px-xs">
<h3 className="font-label-bold text-on-surface">Morning Routine</h3>
<p className="text-[10px] text-slate-500 mt-xs">Start your day right</p>
</div>
</div>
</div>
<div>
<h2 className="font-headline-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">more_horiz</span>
                            Browse More
                        </h2>
<div className="bg-white/50 border-2 border-dashed border-slate-200 rounded-xl h-48 flex flex-col items-center justify-center p-md text-center hover:bg-slate-50 transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-slate-400 text-4xl mb-sm group-hover:scale-110 transition-transform">add_circle</span>
<p className="font-label-bold text-slate-600">Explore 100+ Other Categories</p>
</div>
</div>
</div>
</section>
</main>
</div>
{/*  BottomNavBar Shell (Mobile Only)  */}
<footer className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-2 bg-white/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 transition-opacity active:opacity-80" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-inter text-[10px] font-medium">Boards</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 transition-opacity active:opacity-80" href="#">
<span className="material-symbols-outlined">search</span>
<span className="font-inter text-[10px] font-medium">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl px-3 py-1 transition-opacity active:opacity-80" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard_customize</span>
<span className="font-inter text-[10px] font-medium">Templates</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 px-3 py-1 hover:text-blue-500 transition-opacity active:opacity-80" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-inter text-[10px] font-medium">Account</span>
</a>
</footer>

    </>
  );
};

export default TemplateLibrary;
