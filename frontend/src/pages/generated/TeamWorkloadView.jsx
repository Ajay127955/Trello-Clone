import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TeamWorkloadView = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined hover:bg-white/20 dark:hover:bg-slate-800 transition-colors p-1.5 rounded cursor-pointer" data-icon="grid_view">grid_view</span>
<span className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</span>
<nav className="hidden md:flex items-center gap-2 ml-4">
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Workspace</a>
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 transition-colors" href="#">Team Workload</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Reporting</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-white/10 px-3 py-1 rounded-md border border-white/10">
<span className="material-symbols-outlined text-sm mr-2" data-icon="search">search</span>
<span className="text-xs text-slate-300">Quick search...</span>
</div>
<img alt="User profile" className="w-8 h-8 rounded-full border-2 border-primary-container" data-alt="professional headshot of a team manager in a brightly lit modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVwFHpBTW53STKhxA38qC2eq2vpWY-oa5NlPDkZEvbm5KuU6KjryDloE75uvQjFGA5LwxzZSveZytkIyuyZJKgVxr4T0d71hlAApwtOAHti4t7IIoQUzCBFvQfcpjTtVqp9ugEH3RT7ufnungQa_OSibANaYSat3RNgWv6cVNlG2vLgj59TD95t6naMz2PSYa1m8Sz4fF93-Ufjrl4jgQODw_2VX00JWYKSscnU59_bqox-8cGW4lUONCW-YqQpooIUMjrmOg2tLa-"/>
</div>
</header>
<div className="flex pt-12 min-h-screen">
{/*  NavigationDrawer Shell  */}
<aside className="hidden md:flex bg-slate-50 dark:bg-slate-900 font-sans text-sm font-semibold h-full w-64 border-r fixed left-0 top-12 border-r border-slate-200 dark:border-slate-800 flex flex-col h-screen pt-4 pb-20">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-1">
<img alt="Organization Logo" className="w-8 h-8 rounded-lg" data-alt="minimalist corporate logo using geometric blue shapes on a clean white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGaseqUABrMvOj29VqyfGf9A5DjD8Jqbf57ZiChiTDWkZ2wPMyx4ZdAvdbd5QPtQ_A9yLWYI-2ZkRewDWmOlc2tE5NoSG7B_p6KN0lIPtiwQQ78L1Tsr368b4G0YXfXtlaQWzllHAqfnUGql9E1XzuoN81DPPybD4vrctJ4qkn6OmAKQu83t6avm8PLjTN-WNrxTb6WwJ9ckBtxAbOLkY4wYPHh7HywQjT90jEcfJ9hPoOfQqzEXhqiHoBXrrm2oLZcSYNegy7f7F"/>
<div>
<p className="text-xl font-bold text-[#091E42] dark:text-white leading-tight">Enterprise Global</p>
<p className="text-xs font-normal text-slate-500 uppercase tracking-wider">Admin Console</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="dashboard">dashboard</span>
                    Workspace Boards
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="psychology">psychology</span>
                    AI Command Center
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="admin_panel_settings">admin_panel_settings</span>
                    Enterprise Admin
                </a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF]" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                    Team Management
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="insights">insights</span>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="bolt">bolt</span>
                    Automation Settings
                </a>
</nav>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 md:ml-64 p-gutter lg:p-lg bg-background min-h-screen pb-24">
{/*  Header Section  */}
<div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<h1 className="font-headline-xl text-headline-xl text-on-surface mb-xs">Team Workload Distribution</h1>
<p className="font-body-md text-body-md text-on-secondary-container">Monitor capacity and balance tasks across the Engineering pod for Q3 Sprints.</p>
</div>
<div className="flex gap-sm">
<button className="bg-surface-container-highest px-md py-sm rounded-xl font-label-bold text-label-bold flex items-center gap-xs hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                        Filter Pods
                    </button>
<button className="bg-primary-container text-on-primary-container px-md py-sm rounded-xl font-label-bold text-label-bold flex items-center gap-xs shadow-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                        Allocate Task
                    </button>
</div>
</div>
{/*  Bento Dashboard Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-lg">
{/*  Critical Alert: Over-assigned Members  */}
<div className="lg:col-span-4 bg-white border border-outline-variant/30 rounded-full p-md shadow-sm">
<div className="flex items-center justify-between mb-md">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
                            Capacity Alerts
                        </h3>
<span className="bg-error-container text-on-error-container text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">3 members over</span>
</div>
<div className="space-y-md">
<div className="flex items-center justify-between p-sm bg-error-container/10 border border-error/10 rounded-xl">
<div className="flex items-center gap-sm">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-error/20" data-alt="professional avatar of a software engineer with glasses and a friendly smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACwST_0K_mp-LUYqyq_-9yE_c8f17ezTehPXgJBQDLLK00N0NmuBZmr4EkCBfOenrHyllhn1oq3yHN1XluoYPOUImgH8PHPdCqPdVjt1Jr_t9B1CY61wyIuGTZqIKJtzXatkMKS-R1KbD2mSDqG2RNOn5tGvdE2VK9L4sjz8R0y7_rLsvwXXBPQ8q1dVf7JdTAQO3FFNjVr86E-X3uMtLhdJtvx6-DcH9idpM-M7AMVlzk81wv8N4V39KhVT0O9Y8xrYK3u6kbr4_8"/>
<div>
<p className="font-label-bold text-label-bold text-on-surface">Jordan Diaz</p>
<p className="text-[10px] text-error font-semibold">120% Assigned</p>
</div>
</div>
<button className="text-error font-label-bold text-label-sm border border-error/20 px-3 py-1 rounded-lg hover:bg-error/10">Rebalance</button>
</div>
<div className="flex items-center justify-between p-sm bg-error-container/10 border border-error/10 rounded-xl">
<div className="flex items-center gap-sm">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-error/20" data-alt="professional avatar of a woman with curly hair and professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFUYsPt-gq4sIcJ40QAm2IAGkMZWZXunTqWRFr6rnk3uDJS-Q7t7FtYe4nm-jnCcvvTpLZdj2_0vIQlYDxJZrbLh5YGw14L00oAJY-ZrOTgySMJNx12fKuv5BMNu0uUrZreWBApYWAOT_tM-OyHes6MZbR6uG1fPlDxEE1DzRmNBlpsJn7qhtpGdT19uSpLCM1eNAe3eKClnpiQH6Yr_hxVXxM-IAt_45r8eb0y_JVWU89y6Ze73oHgOvSBBtcW-UF0o3GGOEkXM1u"/>
<div>
<p className="font-label-bold text-label-bold text-on-surface">Sarah Chen</p>
<p className="text-[10px] text-error font-semibold">115% Assigned</p>
</div>
</div>
<button className="text-error font-label-bold text-label-sm border border-error/20 px-3 py-1 rounded-lg hover:bg-error/10">Rebalance</button>
</div>
</div>
</div>
{/*  Global Workload Health  */}
<div className="lg:col-span-8 bg-white border border-outline-variant/30 rounded-full p-md shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between mb-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Global Utilization</h3>
<div className="flex items-center gap-sm">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-primary"></div>
<span className="text-[10px] font-medium text-on-secondary-container">Productive</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-error"></div>
<span className="text-[10px] font-medium text-on-secondary-container">Overloaded</span>
</div>
</div>
</div>
<div className="flex items-end gap-2 h-24 pb-2">
<div className="flex-1 bg-primary h-[40%] rounded-t-lg opacity-40 hover:opacity-100 transition-opacity relative group">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold hidden group-hover:block">Mon</span>
</div>
<div className="flex-1 bg-primary h-[60%] rounded-t-lg opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="flex-1 bg-error h-[95%] rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"></div>
<div className="flex-1 bg-primary h-[75%] rounded-t-lg opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="flex-1 bg-primary h-[45%] rounded-t-lg opacity-40 hover:opacity-100 transition-opacity"></div>
<div className="flex-1 bg-primary h-[55%] rounded-t-lg opacity-60 hover:opacity-100 transition-opacity"></div>
<div className="flex-1 bg-primary h-[30%] rounded-t-lg opacity-30 hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex justify-between text-[10px] text-on-secondary-container font-medium border-t border-surface-container pt-2">
<span>Current Week Velocity: 42 Tasks</span>
<span>Available Capacity: 12%</span>
</div>
</div>
</div>
{/*  Trello-style Workload Lanes  */}
<div className="flex gap-gutter overflow-x-auto pb-lg hide-scrollbar items-start">
{/*  Member Lane 1 (Overloaded)  */}
<div className="flex-shrink-0 w-72 bg-surface-container-low rounded-xl flex flex-col max-h-[618px] border border-outline-variant/20">
<div className="p-md">
<div className="flex items-center gap-sm mb-sm">
<div className="relative">
<img className="w-10 h-10 rounded-full border-2 border-error" data-alt="headshot of a male developer in a black hoodie" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB99iPuThaaT9UMBsj6PVQzp8XkWaZyxbUeeBKpXvvd1q96qWX3pC2zp2d8CvhP4bXD7I8rrZYdHAFy-4sErEbeBo_WkU7S9PlweyOx5fIqvo_AVjLJSKJbHh_uYA2oAZ-ACoHAJkwjx9iLcOb9wZDm4dDc6MsplH9tHfSRtHRh4jn9Mnyy6ARtBev1NcO2vmyRDcAfucKfLjcdSUBDWs49-iiYtq1NkHJsh6gMtHh6sHDknEbnys485JeatIR8MSBRu0oHmtd4zKaV"/>
<span className="absolute -bottom-1 -right-1 bg-error text-white text-[8px] font-black rounded-full px-1 border-2 border-white">!</span>
</div>
<div className="flex-1">
<p className="font-label-bold text-label-bold text-on-surface">Jordan Diaz</p>
<p className="text-[10px] text-on-secondary-container">Senior Developer</p>
</div>
<span className="material-symbols-outlined text-slate-400 cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-1">
<div className="bg-error h-1.5 rounded-full" style={{"width":"100%"}}></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-error">12/10 Tasks</span>
<span className="text-on-secondary-container">Overloaded</span>
</div>
</div>
<div className="flex-1 overflow-y-auto px-sm space-y-sm pb-md">
{/*  Card  */}
<div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant/10 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-xs">
<span className="bg-secondary-container text-on-secondary-fixed text-[8px] font-black px-1.5 py-0.5 rounded uppercase">API</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-sm">Refactor Auth Middleware for Enterprise SSO</p>
<div className="flex items-center justify-between text-slate-400">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm" data-icon="chat_bubble">chat_bubble</span>
<span className="text-[10px]">4</span>
<span className="material-symbols-outlined text-sm" data-icon="attach_file">attach_file</span>
<span className="text-[10px]">1</span>
</div>
<span className="text-[10px] font-bold text-error">CRITICAL</span>
</div>
</div>
{/*  Card  */}
<div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant/10 cursor-grab hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-xs">
<span className="bg-tertiary-fixed text-on-tertiary-fixed text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Infra</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-sm">Database Migration to Aurora Global</p>
<div className="flex items-center justify-between text-slate-400">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-sm" data-icon="schedule">schedule</span>
<span className="text-[10px]">Due tomorrow</span>
</div>
</div>
</div>
</div>
<div className="p-sm border-t border-outline-variant/10">
<button className="w-full text-left p-2 hover:bg-surface-container-high rounded-lg text-slate-500 font-label-bold text-label-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add a card
                        </button>
</div>
</div>
{/*  Member Lane 2 (Healthy)  */}
<div className="flex-shrink-0 w-72 bg-surface-container-low rounded-xl flex flex-col max-h-[618px] border border-outline-variant/20">
<div className="p-md">
<div className="flex items-center gap-sm mb-sm">
<img className="w-10 h-10 rounded-full border-2 border-primary-container" data-alt="professional avatar of a male designer with a short beard and upbeat expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYpfpDsy1-HnkV69ydGRA24-r8ikEG7yAMWK7LTWjN5cgs7kJZPUwaF3ZAyW74myExHIuRSXtZs3F5iYY8Mp9NOrgwEVIkPf1OBP71OtohgO8BoDPXRW5LdOj978IgzxQgF_G4JKExy9EqrGyS5it8ZX7oY17BNNSoAric-EiyHppgEhkBkGA9PTC3eV86y1ciHPDQCSu_NjFNn2sVLc2rcmCD1JXuGAeFwJs4EijYSvLUYEhbMa7enfcP0sCprA_DeoayzIZJ8Xn2"/>
<div className="flex-1">
<p className="font-label-bold text-label-bold text-on-surface">Alex Morgan</p>
<p className="text-[10px] text-on-secondary-container">UI/UX Lead</p>
</div>
<span className="material-symbols-outlined text-slate-400" data-icon="more_horiz">more_horiz</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-1">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"60%"}}></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-primary">6/10 Tasks</span>
<span className="text-on-secondary-container">Optimal</span>
</div>
</div>
<div className="flex-1 overflow-y-auto px-sm space-y-sm pb-md">
{/*  Card  */}
<div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant/10 cursor-grab hover:shadow-md transition-shadow">
<div className="flex gap-1 mb-xs">
<span className="bg-primary-fixed text-on-primary-fixed text-[8px] font-black px-1.5 py-0.5 rounded uppercase">Design</span>
</div>
<p className="font-body-md text-body-md text-on-surface mb-sm">Workload View High Fidelity Prototype</p>
<div className="flex items-center gap-sm text-slate-400">
<span className="material-symbols-outlined text-sm" data-icon="check_box">check_box</span>
<span className="text-[10px]">8/12</span>
</div>
</div>
</div>
<div className="p-sm border-t border-outline-variant/10">
<button className="w-full text-left p-2 hover:bg-surface-container-high rounded-lg text-slate-500 font-label-bold text-label-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add a card
                        </button>
</div>
</div>
{/*  Member Lane 3 (Available)  */}
<div className="flex-shrink-0 w-72 bg-surface-container-low rounded-xl flex flex-col max-h-[618px] border border-outline-variant/20">
<div className="p-md">
<div className="flex items-center gap-sm mb-sm">
<img className="w-10 h-10 rounded-full border-2 border-primary-fixed" data-alt="professional avatar of a woman with short hair and glasses wearing a smart casual blazer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfqTwZ7PIt3oInWZQdjdKjwIAH7wktBAviUQ9i1N5lJK5lX_ka4m1QgM_U8m2uTw293cXa1qPKVmIQ_qfW1Ix_YO6sSMysqvSu2jC1DbcwqfKF62wJkkVpeILNx4IBiZUTxSd1SCg3BS5yT0kVa7FWyK3hMkP3CJj7uL0qVDV8mR6HRbBiRhR4IgDC0CWlQhSt_7dAD7jYCV9QjMjiv_X591GhhzhywbknxTdYIhD10_0rpRVkhwoa0KHEJxXlZ6dLt5njJKhEwkMZ"/>
<div className="flex-1">
<p className="font-label-bold text-label-bold text-on-surface">Taylor Park</p>
<p className="text-[10px] text-on-secondary-container">Backend Dev</p>
</div>
<span className="material-symbols-outlined text-slate-400" data-icon="more_horiz">more_horiz</span>
</div>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-1">
<div className="bg-secondary h-1.5 rounded-full" style={{"width":"30%"}}></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span className="text-secondary">3/10 Tasks</span>
<span className="text-on-secondary-container">High Capacity</span>
</div>
</div>
<div className="flex-1 overflow-y-auto px-sm space-y-sm pb-md">
{/*  Drop Zone  */}
<div className="border-2 border-dashed border-outline-variant rounded-lg h-32 flex flex-col items-center justify-center text-slate-400">
<span className="material-symbols-outlined mb-2" data-icon="move_to_inbox">move_to_inbox</span>
<p className="text-[10px] font-bold px-md text-center">Drag tasks here to rebalance workload</p>
</div>
<div className="bg-white p-md rounded-lg shadow-sm border border-outline-variant/10 cursor-grab hover:shadow-md transition-shadow">
<p className="font-body-md text-body-md text-on-surface mb-sm">Update Documentation for v2.4 Release</p>
</div>
</div>
<div className="p-sm border-t border-outline-variant/10">
<button className="w-full text-left p-2 hover:bg-surface-container-high rounded-lg text-slate-500 font-label-bold text-label-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                            Add a card
                        </button>
</div>
</div>
{/*  Add Member Column  */}
<button className="flex-shrink-0 w-72 bg-surface-container border-2 border-dashed border-outline-variant/50 rounded-xl h-24 flex items-center justify-center gap-sm text-on-secondary-container hover:bg-surface-container-highest transition-colors font-label-bold">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
                    Add Team Member
                </button>
</div>
</main>
</div>
{/*  BottomNavBar Shell (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 md:hidden border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] z-50">
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

export default TeamWorkloadView;
