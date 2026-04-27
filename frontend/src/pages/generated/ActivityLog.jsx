import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ActivityLog = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center w-full px-4 h-14 z-50 bg-white dark:bg-[#091E42] border-b border-gray-200 dark:border-slate-800 shadow-sm fixed top-0 left-0">
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-opacity duration-150 ease-in-out text-[#0065FF]">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<h1 className="text-lg font-bold text-[#091E42] dark:text-white font-inter">Productive Flow</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-6 font-inter text-sm font-medium">
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 p-1 px-2"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-[#0065FF] font-bold border-b-2 border-[#0065FF] p-1 px-2" href="#">Activity</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 p-1 px-2"  onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>
<a className="text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 p-1 px-2"  onClick={(e) => { e.preventDefault(); navigate('/workspace-settings'); }}>Settings</a>
</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-surface-container-high">
<img alt="User Profile Avatar" data-alt="portrait of a professional male project manager with a friendly expression in a modern office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTlGQ4KxWGIi_QyFFyQzd3OS_WFcAaE2uUC_y1Ng3AaWQoKuVcP2bbS5NaOHCXkN0-5d3XVkmkKFiDD2TUi0E1-4n-vr_jn4crPNBJtlZn_RYD9iFUJbY7ZmD9fwc3xqNPuw7S4dnUNYFDhUZvMs6VaIH49Es5WUNm19vwSVK8rH_4QL5MVHtY8av003TC6oqYdp9a30rTolPz3n9cm5kHz_IJt_GDM8PbGTgt1NlL6d4kJDZUF5evYkSEtYLC4rVr99DJssE4qdwA"/>
</div>
</div>
</header>
{/*  NavigationDrawer (Desktop Only)  */}
<aside className="fixed left-0 top-0 h-full flex flex-col p-4 bg-white dark:bg-[#091E42] border-r border-gray-200 dark:border-slate-800 w-64 translate-x-0 transition-transform duration-300 hidden md:flex pt-20">
<div className="flex flex-col gap-2 mb-8 px-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</div>
<div>
<p className="text-sm font-semibold text-[#0065FF] font-inter leading-tight">Workspaces</p>
<p className="text-xs text-slate-500 font-inter">Project Management</p>
</div>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-inter text-sm tracking-tight rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 dark:bg-blue-900/20 text-[#0065FF] font-semibold font-inter text-sm tracking-tight rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
<span>Activity</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-inter text-sm tracking-tight rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>Members</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-inter text-sm tracking-tight rounded-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</nav>
</aside>
{/*  Main Content  */}
<main className="md:ml-64 pt-20 pb-20 px-4 md:px-8">
<div className="max-w-4xl mx-auto">
{/*  Header Section  */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h2 className="font-headline-xl text-headline-xl text-on-surface">Activity Log</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time updates across your workspace</p>
</div>
<div className="flex items-center gap-3">
<div className="relative group">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant rounded-lg font-label-sm text-label-sm hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                            Filter by
                            <span className="material-symbols-outlined text-sm" data-icon="expand_more">expand_more</span>
</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-white rounded-lg font-label-bold text-label-bold shadow-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-sm" data-icon="refresh">refresh</span>
                        Sync
                    </button>
</div>
</div>
{/*  Timeline Content  */}
<div className="space-y-gutter">
{/*  Date Header  */}
<div className="flex items-center gap-4 py-2">
<div className="h-[1px] flex-grow bg-outline-variant"></div>
<span className="font-label-bold text-label-bold text-outline uppercase tracking-widest">Today</span>
<div className="h-[1px] flex-grow bg-outline-variant"></div>
</div>
{/*  Bento Grid Style Activity Card  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Major Activity Item (Highlight)  */}
<div className="md:col-span-12 bg-white rounded-xl border border-outline-variant p-md shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-start gap-md">
<div className="flex-shrink-0">
<img alt="Member" className="w-10 h-10 rounded-full border-2 border-primary-fixed" data-alt="professional portrait of a creative director woman with a bright smiling face in a clean minimalist studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM7jH2cmMH2skFTx80J896jsOeCeUit_7afYJWPHZHuzrp9q__VWxuP7Yun5iXeKw68RL-ofOLPEBUmljL2gDQI-kx4K02C994KSXvUczP6SrIKALuQc9kLi3O-LU1My-yI5mRtghmSJlrNmRCFxgjlkkGNGrTnfxvjluergOOvBV3EofQY9cYhAYReMX-Z_xU1olperb6-ZTcWJprMYMSpJjC3eHMkJPhFCEnGSdaNg5xg3Ouu2EMB9TL1P4DSEubI5wY-skQuldc"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md">
<span className="font-bold text-on-surface">Sarah Jenkins</span> 
                                        created a new board 
                                        <a className="text-primary font-semibold hover:underline" href="#">Q3 Marketing Strategy</a>
</p>
<span className="font-label-sm text-label-sm text-on-surface-variant whitespace-nowrap">2m ago</span>
</div>
<div className="mt-md grid grid-cols-2 md:grid-cols-4 gap-sm">
<div className="aspect-video bg-surface-container rounded-lg overflow-hidden relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2 opacity-100 transition-opacity">
<span className="text-[10px] text-white font-medium">Strategy_Deck.pdf</span>
</div>
<div className="w-full h-full bg-blue-100 flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
</div>
</div>
<div className="aspect-video bg-surface-container rounded-lg overflow-hidden relative group cursor-pointer">
<div className="w-full h-full bg-slate-200">
<img className="w-full h-full object-cover" data-alt="abstract architectural building with sharp lines and blue sky reflecting in glass panels" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCcnF58VhPajgVtZzvcZT_HQIOZWbGnUZ86qMVEj1T9bSFuOUVeC9imlLhcEcTmDCtl9IUCogv16X4_pzQXWm2ZQ50DKqB1FNus2XDeJAgPebC5RNhuQ-xyj61tZ4myvkZl2DT06bg-2L9lu2WQASjArK5oLcETtjpV58zepLAN6ENiDMN_ppZRzCM21sCpIux4bSvl3g4IeYrCJeaMkm7xTSODIZ2wLLEF9OoQFaQBoGj6cvsayzuV6gjGOmVGGNj2SdqEk2dTaPC"/>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Compact Activity Items  */}
<div className="md:col-span-8 bg-white rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-start gap-md">
<div className="flex-shrink-0">
<img alt="Member" className="w-10 h-10 rounded-full" data-alt="headshot of a male developer with glasses and a focused friendly gaze" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO4xBaqzc9M-eb4W5k5JzPG_p18gcDnXqukZIaT08MxoScmd9yBTbFNoFI0HFLWtNd_5SRJ3GU3bs-Xo3JH9WAl-0DwcPuSbNCbo_MMZmQjV9HvUyOpvVgLU77_TYWcPanXjBX_HXSgHMOiDjZ36U_vuF6t65Dzniih7sTkdJKfUNtOSrzAkZ63gaGfu4TeucZtzBgNt-dEAYIfy6ZLb4_ggI6JCiFmQ47Kt_fERNZO-gqLBXDZh-NMlTa1sT9yt5pLmWGpbQ89EX3"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md">
<span className="font-bold text-on-surface">Alex Rivera</span> 
                                        moved <a className="font-semibold hover:underline" href="#">API Documentation</a> from 
                                        <span className="px-2 py-0.5 bg-surface-container rounded text-xs">In Progress</span> to 
                                        <span className="px-2 py-0.5 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-xs">Done</span>
</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">15m ago</span>
</div>
<div className="mt-sm flex items-center gap-gutter text-on-surface-variant">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="forum">forum</span>
<span className="font-label-sm text-label-sm">4 comments</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="attach_file">attach_file</span>
<span className="font-label-sm text-label-sm">2 files</span>
</div>
</div>
</div>
</div>
</div>
{/*  Member Addition Side Card  */}
<div className="md:col-span-4 bg-tertiary-container/10 border border-tertiary/20 rounded-xl p-md flex flex-col justify-center">
<div className="flex -space-x-3 mb-3">
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="male team member profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgMVc1NJWiiB0fisaqWsGGuV1T9e0Bn8J5TfoDn1pE_hbiSq4sx97IqUgJzhLb7we3RG229MCt9ZUcxeCfSFnzKP8hepKyH8RFADB897S7FHX-_VGz80T0ROxGqyHfoajkVgQgCC1NmknpIeo0AWbJZcicoyK7LCIqNznGJD2h5XSgQNy5Q1mtUc0tOx2YfVU8h-hpavim9J7D9iAqFgnt8oBW7RyDyOpLd_m6KXPSftiopUZtYz8g90SWDdZWc57P-ZWghcUWIMdY"/>
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="female team member profile photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Q96xZTMJ7vYy6R5yejpacWqzeymPeZRbqPA5ibsVODkexhWxPa3cdSgdzOFB9-WMl7VDWo6Q_gRvkrbv6QWKAGqICZpEEzc14YswowXTN5Ni7K94RhMAL2rBs86vsiAm3ijQ6QaZdq0XXYUhUln4gD1R-ELAuTY9h0vTWse2-P8gdNxks0kg-G5mNVg22X7p9HvlKasPoQTu4UYz2EkkaV-ze1wac9OvOM7EbqGjZS355yOO7c3QFV53nssBxZhlZ76_b1jH7RhS"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">+1</div>
</div>
<p className="font-label-bold text-label-bold text-on-surface">3 members added</p>
<p className="font-label-sm text-label-sm text-on-surface-variant">to "Customer Success" board</p>
<span className="mt-2 font-label-sm text-[10px] text-tertiary font-bold uppercase">45m ago</span>
</div>
{/*  Comment Activity Item  */}
<div className="md:col-span-12 bg-white rounded-xl border border-outline-variant p-md shadow-sm">
<div className="flex items-start gap-md">
<div className="flex-shrink-0">
<img alt="Member" className="w-10 h-10 rounded-full" data-alt="close up headshot of a professional young woman with a thoughtful expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoSUeDYNwP-Fb_4lE05MLxVCGonn3xXY-N0rjaTEZ_OuIotu4k_vLHy9ZeldUwP1LBnm24nkPuuN6RarO9UGq-42H6DiQemqJVxEOsQUlHvg3oHU1oVyKkfqQYoA0W7BPFqNVgjiyQA1DYk-BG0Vk9aGfPoK9Kf9AjyNhpja8qNFXon1YLDUECWWyJPFsOqo2n0rJv4S9WoieAqNSwTBOlBkKc1WSmq1beI-TDZPQzrRUvSIgOXQTy6OX2CPOsGbOP3uhhf-bRtEIa"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<p className="font-body-md text-body-md">
<span className="font-bold text-on-surface">Emma Watson</span> 
                                        commented on <a className="text-primary font-semibold hover:underline" href="#">Homepage Redesign</a>
</p>
<span className="font-label-sm text-label-sm text-on-surface-variant">1h ago</span>
</div>
<div className="mt-sm p-md bg-surface-container-lowest border-l-4 border-primary-container rounded-r-lg italic text-on-surface-variant font-body-md">
                                    "I think we should prioritize the mobile navigation transition before moving to the checkout flow. Thoughts?"
                                </div>
<div className="mt-sm flex gap-2">
<button className="font-label-sm text-label-sm text-primary hover:underline">Reply</button>
<span className="text-outline-variant">•</span>
<button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="thumb_up">thumb_up</span>
                                        2
                                    </button>
</div>
</div>
</div>
</div>
</div>
{/*  Yesterday Section  */}
<div className="flex items-center gap-4 py-2 pt-8">
<div className="h-[1px] flex-grow bg-outline-variant"></div>
<span className="font-label-bold text-label-bold text-outline uppercase tracking-widest">Yesterday</span>
<div className="h-[1px] flex-grow bg-outline-variant"></div>
</div>
<div className="bg-white rounded-xl border border-outline-variant overflow-hidden">
{/*  Repeated List Style Item 1  */}
<div className="p-md flex items-start gap-md hover:bg-surface-container-low transition-colors border-b border-surface-container-high last:border-b-0">
<span className="material-symbols-outlined p-2 bg-blue-50 text-primary rounded-full mt-1" data-icon="add_task">add_task</span>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">Marcus Thorne</span> added 3 tasks to <a className="font-semibold text-primary" href="#">Sprint Backlog</a>
</p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Yesterday at 4:20 PM • Engineering Board</p>
</div>
</div>
{/*  Repeated List Style Item 2  */}
<div className="p-md flex items-start gap-md hover:bg-surface-container-low transition-colors border-b border-surface-container-high last:border-b-0">
<span className="material-symbols-outlined p-2 bg-orange-50 text-orange-600 rounded-full mt-1" data-icon="warning">warning</span>
<div className="flex-grow">
<p className="font-body-md text-body-md text-on-surface">
<span className="font-bold">System</span> archived card <a className="font-semibold text-primary" href="#">Legacy Database Cleanup</a> due to inactivity
                            </p>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Yesterday at 9:15 AM • Maintenance Board</p>
</div>
</div>
</div>
{/*  Load More Section  */}
<div className="flex justify-center py-8">
<button className="px-8 py-3 bg-white border-2 border-outline-variant rounded-full font-label-bold text-label-bold text-on-surface hover:border-primary-container hover:text-primary transition-all flex items-center gap-2">
                        Load more activities
                        <span className="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
</button>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-[#091E42] px-2 md:hidden border-t border-gray-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:bg-slate-100 transition-transform duration-100 scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-inter text-[11px] font-medium">Boards</span>
</a>
<a className="flex flex-col items-center justify-center text-[#0065FF] active:bg-slate-100 transition-transform duration-100 scale-95" href="#">
<span className="material-symbols-outlined" data-icon="notifications" style={{"fontVariationSettings":"'FILL' 1"}}>notifications</span>
<span className="font-inter text-[11px] font-medium font-bold">Activity</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:bg-slate-100 transition-transform duration-100 scale-95" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="font-inter text-[11px] font-medium">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 active:bg-slate-100 transition-transform duration-100 scale-95" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-inter text-[11px] font-medium">Account</span>
</a>
</nav>

    </>
  );
};

export default ActivityLog;
