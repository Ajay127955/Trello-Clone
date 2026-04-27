import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PowerUpsDirectory = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-[#091E42] border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none docked full-width top-0 z-50 fixed flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<button className="hover:bg-slate-100 dark:hover:bg-white/10 transition-colors p-1 rounded-md flex items-center justify-center">
<span className="material-symbols-outlined text-slate-600 dark:text-slate-300">grid_view</span>
</button>
<div className="text-xl font-black text-[#091E42] dark:text-white flex items-center gap-2">
                ProductiveFlow
            </div>
<nav className="hidden md:flex items-center gap-6 ml-4">
<a className="text-slate-600 dark:text-slate-300 font-['Inter'] text-sm font-medium tracking-tight hover:bg-slate-100 dark:hover:bg-white/10 transition-colors px-2 py-1 rounded"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-600 dark:text-slate-300 font-['Inter'] text-sm font-medium tracking-tight hover:bg-slate-100 dark:hover:bg-white/10 transition-colors px-2 py-1 rounded" href="#">Templates</a>
<a className="text-[#0065FF] border-b-2 border-[#0065FF] pb-1 font-['Inter'] text-sm font-medium tracking-tight" href="#">Power-Ups</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input className="pl-9 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-[#0065FF] transition-all" placeholder="Search Power-Ups" type="text"/>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden bg-primary-container flex items-center justify-center text-white text-xs font-bold ring-2 ring-offset-2 ring-transparent hover:ring-primary-container transition-all cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="close-up portrait of a professional man in his 30s with a friendly expression and neat hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSpQ2xaokGuO1UnHHtcJIRJB7QbYG-0Lvi2X7l1KpO9Ss4xIKXffrEltLIaSeFyPPnwObBHp9sHFzOCP_8yJhFNGVHZ68B7QP1ZhYPYv56ce1UorDkaH0XML0uJpnlLG_Co7p4aGVIw2eIJSTpIh2AvjMEykm1-K96WghKPRyn6zgDoNCZEuvKtT99mzbt_DnLBnAEDFNGeUTJf8yQY6YtishHn93JlE46hoF5XD9HvwViJ0xmbtCNEwI-MER8Ou2bDwLiGS2bNA_i"/>
</div>
</div>
</header>
{/*  NavigationDrawer  */}
<aside className="fixed left-0 top-12 bottom-0 w-64 bg-slate-50 dark:bg-[#172B4D] border-r border-slate-200 dark:border-slate-800 flex flex-col p-3 space-y-1 z-40">
<div className="px-3 py-4 mb-2">
<h2 className="text-lg font-bold text-[#091E42] dark:text-slate-100 font-['Inter'] leading-5">Directory</h2>
</div>
<nav className="space-y-1 overflow-y-auto custom-scrollbar flex-1">
<div className="text-xs font-bold text-slate-500 dark:text-slate-400 px-3 py-2 uppercase tracking-wider">Categories</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">star</span>
                Featured
            </a>
<a className="flex items-center gap-3 px-3 py-2 bg-[#E6FCFF] dark:bg-[#0065FF]/20 text-[#0065FF] dark:text-[#4C9AFF] font-semibold rounded-md hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">extension</span>
                Power-Ups
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">analytics</span>
                Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">forum</span>
                Communication
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">developer_board</span>
                Developer Tools
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">category</span>
                File Management
            </a>
<div className="pt-6 text-xs font-bold text-slate-500 dark:text-slate-400 px-3 py-2 uppercase tracking-wider">More Tools</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">bolt</span>
                Automation
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">help</span>
                Help Center
            </a>
</nav>
</aside>
{/*  Main Content  */}
<main className="ml-64 mt-12 min-h-screen p-8 bg-background">
<div className="max-w-7xl mx-auto">
{/*  Header Section  */}
<div className="mb-10">
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-2">Enhance your workflow</h1>
<p className="font-body-lg text-body-lg text-on-secondary-container max-w-2xl">Connect your favorite tools to ProductiveFlow and turn your boards into a unified workstation for your team.</p>
</div>
{/*  Featured Banner (Asymmetric Layout/Bento Element)  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-12">
<div className="md:col-span-2 relative h-64 rounded-xl overflow-hidden shadow-sm group cursor-pointer border border-slate-200">
<img alt="Collaboration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="team of diverse professionals working together in a bright modern office with glass walls and minimalist furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNjd2t9j2m3OrpzXgrKx_uD5POCAPEortytM3bAuUJhY5Dj5srIYqTHbJTelTk0WcCdd1XgIRC6T52z9LX-Xj9htj06AkHNr7OqrNB-flzzwe-7hB_UOvemxUSI-mlqkrivqq_DnS9DLyVEKzIvYjGcKiMuiD2DDNxMnFY5Ov7yVfBzWtQZfzJEeL3D31kcc1ZIfVNeKH_8y9rm9PDJhxTXCwgX34BBNKkY4tZcfM3Jz9zVbXCp7yZUVINRjoDaRuqZftMiCgdR-Jz"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#091E42]/90 to-transparent flex flex-col justify-center p-8">
<span className="inline-block px-3 py-1 bg-[#0065FF] text-white font-label-bold text-label-sm rounded mb-4 w-fit">FEATURED</span>
<h2 className="text-white font-headline-md text-headline-md mb-2">Slack Integration</h2>
<p className="text-slate-200 font-body-md text-body-md max-w-xs mb-6">Receive real-time notifications and manage tasks directly from your Slack channels.</p>
<button className="bg-white text-[#091E42] px-6 py-2 rounded-lg font-label-bold text-label-sm hover:bg-slate-100 transition-colors w-fit">Get Started</button>
</div>
</div>
<div className="bg-primary-container rounded-xl p-8 flex flex-col justify-between text-white shadow-sm border border-primary/20">
<div>
<span className="material-symbols-outlined text-4xl mb-4">auto_awesome</span>
<h3 className="font-headline-md text-headline-md mb-2">New: AI Automations</h3>
<p className="font-body-md text-body-md text-blue-100">Unlock the power of smart task suggestions and automated summaries.</p>
</div>
<a className="flex items-center gap-2 font-label-bold text-label-sm hover:underline" href="#">
                        Learn more <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
{/*  Search & Filters  */}
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
<span className="material-symbols-outlined text-lg">filter_list</span> Filter
                    </button>
<button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm">
                        Sort: Popular <span className="material-symbols-outlined text-lg">expand_more</span>
</button>
</div>
<div className="text-sm font-body-md text-slate-500">Showing 142 Power-Ups</div>
</div>
{/*  Grid of Power-Ups  */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
{/*  Card 1: Slack  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-[#4A154B] rounded-lg flex items-center justify-center">
<img alt="Slack Icon" className="w-8 h-8 object-contain" data-alt="simple colorful slack logo on a solid purple background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUgnFVWJvxVqK-JYFtRPthLM1CQrPa-bC0eITfADF4ORM1tWfEBi4NtlHcxkO4tlyo2XxoJ7o9HGmeBLj0_8KswUr1ADsBifB93m2rkqcwly81oirogRtgpl1uSaIcMUvobbPm1RCU5RQrdFOjNvqk2SAGKX4zoesG1htrVSz2PUNS-2VwI8-g7MErboCCxqi17wKeB8SygzheL9Ls7tKdnUSYDrPVcg9teTLjVlxT9BoBhqSvMAsM_Bjwgl4CiwXG6OUXkqfLM6R8"/>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Slack</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Bring your communication and tasks together with the Slack Power-Up.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.8</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">2M+</span>
</div>
</div>
</div>
{/*  Card 2: Google Drive  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
<span className="material-symbols-outlined text-3xl text-blue-500">add_to_drive</span>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Google Drive</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Attach files directly to cards and get real-time previews of documents.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.9</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">5M+</span>
</div>
</div>
</div>
{/*  Card 3: GitHub  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-[#181717] rounded-lg flex items-center justify-center">
<img alt="GitHub Icon" className="w-8 h-8 object-contain brightness-0 invert" data-alt="minimal white github octopus logo on a black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxzn97vnurr_43ec_ki0OsSWc7WO2LHhWeBscJIluusbHDi0LMCpSGcptCK3pkZltSILxZ1mWcK665_MiAng-PUN9eV4gbr_FF3Vsr0F0XEqQSJ2aHis122fFWoqECLLfAqRpcvV-xxSvHmu724ochDtKrMpCzxU0ERHD8XX9p1lXD7f9XXneADuNr60r_wwOrZ8lFC7u9NBJAXfC-MoQjokhw6fW4fQJwiIRs_vmsh0G8vskR_HevkupDLCBoTbZLAG_MpWFGFFyA"/>
</div>
<button className="bg-slate-100 text-slate-400 px-4 py-1.5 rounded-lg font-label-bold text-label-sm cursor-not-allowed">Added</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">GitHub</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Track pull requests, commits, and issues within your cards.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.7</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">1.5M+</span>
</div>
</div>
</div>
{/*  Card 4: Jira  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-[#0052CC] rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-white">architecture</span>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Jira</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Connect your ProductiveFlow boards with Jira Software projects.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.6</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">800K+</span>
</div>
</div>
</div>
{/*  Card 5: Mailchimp  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-[#FFE01B] rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-black">mail</span>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Mailchimp</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Manage email campaigns and subscriber lists from your workspace.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.5</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">450K+</span>
</div>
</div>
</div>
{/*  Card 6: Dropbox  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-[#0061FF] rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-white">cloud_download</span>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Dropbox</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Quickly access and attach Dropbox folders and files to your tasks.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.8</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">3.2M+</span>
</div>
</div>
</div>
{/*  Card 7: Butler  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-white">smart_toy</span>
</div>
<button className="bg-[#E6FCFF] text-[#0065FF] px-4 py-1.5 rounded-lg font-label-bold text-label-sm hover:bg-primary-container hover:text-white transition-all">Add</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Butler</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Create powerful automation with buttons and rules across your boards.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">5.0</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">10M+</span>
</div>
</div>
</div>
{/*  Card 8: Calendar  */}
<div className="bg-white p-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group h-full">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-red-500">calendar_month</span>
</div>
<button className="bg-slate-100 text-slate-400 px-4 py-1.5 rounded-lg font-label-bold text-label-sm cursor-not-allowed">Added</button>
</div>
<h3 className="font-headline-md text-headline-md mb-2 group-hover:text-primary transition-colors">Calendar</h3>
<p className="font-body-md text-body-md text-slate-600 mb-6 flex-grow">Visualize all your card due dates in a beautiful calendar view.</p>
<div className="flex items-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-label-sm text-label-sm">4.9</span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="material-symbols-outlined text-sm">download</span>
<span className="font-label-sm text-label-sm">6.5M+</span>
</div>
</div>
</div>
</div>
{/*  Bottom Load More  */}
<div className="mt-12 flex justify-center">
<button className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-lg font-label-bold text-label-sm text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    Load More Power-Ups
                </button>
</div>
</div>
</main>
{/*  Floating Action Button  */}
<button className="fixed right-8 bottom-8 w-14 h-14 bg-[#0065FF] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </>
  );
};

export default PowerUpsDirectory;
