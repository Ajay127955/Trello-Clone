import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const WorkspaceTableView = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-[#091E42] border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none docked full-width top-0 z-50 fixed flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<button className="text-[#0065FF] dark:text-[#4C9AFF] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors p-1.5 rounded-lg">
<span className="material-symbols-outlined">grid_view</span>
</button>
<div className="text-xl font-black text-[#091E42] dark:text-white flex items-center gap-2">
                ProductiveFlow
            </div>
<nav className="hidden md:flex items-center gap-6 ml-4">
<a className="text-[#0065FF] border-b-2 border-[#0065FF] pb-1 font-['Inter'] text-sm font-medium tracking-tight" href="#">Workspaces</a>
<a className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-['Inter'] text-sm font-medium tracking-tight px-2 py-1 rounded" href="#">Recent</a>
<a className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-['Inter'] text-sm font-medium tracking-tight px-2 py-1 rounded" href="#">Starred</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-2 top-1.5 text-slate-400 text-lg">search</span>
<input className="pl-8 pr-3 py-1.5 bg-slate-100 border-none rounded-md text-sm focus:ring-2 focus:ring-[#0065FF] w-64" placeholder="Search..." type="text"/>
</div>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-slate-200" data-alt="professional portrait of a creative professional smiling softly against a neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFwijH-rl3yYoZm0JwRWdCqnFsF9uZKEGcCg_RqcfkfS4E5Vv0mbtJi8xDacyqVE2iJIxrvgcnMPi90E7MP-AsB5te7Dk2qysvBCQJyntQVvQ1T4fiOBVa63wu1BWn9EqxVZzSt76u-mZHJeOloUpaRgcCDd88BbdmxLqos8868z0RdmwnrJ_Y4mIXgOkDn4C_Zmv2xHbb9ILH4rtJMdbUDGWnY9UeqhlKXp6UG2oDOs6pO6esSW9oZLicSGwNjcnpXICjyNxI7Y-u"/>
</div>
</header>
{/*  Sidebar / NavigationDrawer  */}
<aside className="bg-slate-50 dark:bg-[#172B4D] border-r border-slate-200 dark:border-slate-800 h-full w-64 fixed left-0 top-12 bottom-0 flex flex-col p-3 space-y-1">
<div className="px-3 py-2 mb-2">
<h2 className="text-lg font-bold text-[#091E42] dark:text-slate-100">Workspace Alpha</h2>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">dashboard</span>
<span>Boards</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-[#E6FCFF] dark:bg-[#0065FF]/20 text-[#0065FF] dark:text-[#4C9AFF] font-semibold rounded-md hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">calendar_view_day</span>
<span>Views</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">bolt</span>
<span>Automation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">extension</span>
<span>Power-Ups</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
<span>Workspace Settings</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5" href="#">
<span className="material-symbols-outlined text-xl">help</span>
<span>Help Center</span>
</a>
</nav>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 pt-12 min-h-screen">
{/*  View Toolbar  */}
<div className="px-6 py-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
<div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
<button className="px-4 py-1.5 font-label-sm text-label-sm text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all">Board</button>
<button className="px-4 py-1.5 font-label-bold text-label-sm bg-white text-primary shadow-sm rounded-md transition-all">Table</button>
<button className="px-4 py-1.5 font-label-sm text-label-sm text-slate-600 hover:bg-white hover:shadow-sm rounded-md transition-all">Calendar</button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant hover:bg-slate-50 rounded-lg text-slate-700">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
<span className="font-label-sm text-label-sm">Filter</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-outline-variant hover:bg-slate-50 rounded-lg text-slate-700">
<span className="material-symbols-outlined text-[20px]">sort</span>
<span className="font-label-sm text-label-sm">Sort</span>
</button>
<div className="w-[1px] h-6 bg-slate-200 mx-1"></div>
<button className="bg-primary hover:bg-[#004fcb] text-white px-4 py-2 rounded-lg font-label-bold text-label-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Create Card
                </button>
</div>
</div>
{/*  Table Content  */}
<div className="p-6">
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 border-b border-slate-200">
<th className="px-6 py-4 font-label-bold text-label-bold text-slate-500 uppercase tracking-wider w-[40%]">Card Name</th>
<th className="px-4 py-4 font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">List</th>
<th className="px-4 py-4 font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">Labels</th>
<th className="px-4 py-4 font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">Members</th>
<th className="px-4 py-4 font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">Due Date</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
{/*  Row 1  */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">description</span>
<span className="font-body-md text-body-md font-medium text-slate-900">Design System Audit &amp; Update</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 bg-blue-50 text-blue-600 rounded font-label-sm text-label-sm border border-blue-100">In Progress</span>
</td>
<td className="px-4 py-4">
<div className="flex flex-wrap gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-[#4bce97]" title="Design"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#f5cd47]" title="Priority"></span>
</div>
</td>
<td className="px-4 py-4">
<div className="flex -space-x-2">
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a woman with glasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3rbnErrovFh08sMKnmNdIrBY_usaVvgj0zHhENqFSPs4I8M6CdMkwgZlmXR7ZikSzNINuK4Az-Hi-fPP6GE5C0l37Ytxa2mw-ivai0t5MUnLvNpgDD66LGhqUWPixcku9FBL3fGuIzd6VLN5rGJfnjwPLbDe48j3ON8ayBhfwJLy_cflxvsihL1xtH-eC0P157j0xZ8RAbDezGPC_HjL58P9kVU3eMU0MG8qvSHFY4mXWO1tsayTPGzldVcw7d2sZRg9ebRjVJL9J"/>
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a man with a beard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFbJr18pDfrIsyKxeOJ41TGK4xEXhw-zr_f-SBogKMYDRdNMGsuy4TQrg_tNOvFFlu24IV60xC1AK7KUpk8jy6kuN-7IVEyZX2Fb6bUJ8yEE8k2N-AtyLuOwvg2eb70rzlWBbpPETKlHIPa7-wlmDtoygI6u5XpdziQjYFGhpZY-KR7Zx-I-2T9CO5HpaCTOWVxuMKSt0b7Vt-Gwe8WjpYOBejS0zqt-tUkS7JrQK49YIThDKv0035lFWX5405SGAHlB2Ai2AjRqFd"/>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2 text-slate-500 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                    Oct 24
                                </div>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">description</span>
<span className="font-body-md text-body-md font-medium text-slate-900">Q4 Marketing Strategy Deck</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 bg-slate-100 text-slate-600 rounded font-label-sm text-label-sm border border-slate-200">To Do</span>
</td>
<td className="px-4 py-4">
<div className="flex flex-wrap gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-[#f87168]" title="Urgent"></span>
</div>
</td>
<td className="px-4 py-4">
<div className="flex -space-x-2">
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a woman with short hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVCDvsaCznab1J8PC3X5-HvQ_wuIFWak4wjDGY6vjc3kLGsyAkYO9XBC-_Yemfp74dyHHy6VKb29kCSUrwFs4wRCQDsCIjQ437tPr4NnX9j-05XN8w_6wrdvjd-ap3FQ2MYsSct_eQeIdwrGRwuRqotZCqqG7jU4Dh0_0YFsbbW1WMHHOgMotKMHuycKFQ3q0wE7O2tNky_GHur6YO4R7bIgdhC2sXmXJ9Yv8pQXl21vDBjN8EeUXzHlJTPhJtEtzB1ceBqw8SKI64"/>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2 text-error font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">error</span>
                                    Oct 18
                                </div>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">description</span>
<span className="font-body-md text-body-md font-medium text-slate-900">API Documentation Refactor</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 bg-green-50 text-green-600 rounded font-label-sm text-label-sm border border-green-100">Done</span>
</td>
<td className="px-4 py-4">
<div className="flex flex-wrap gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-[#579dff]" title="Development"></span>
</div>
</td>
<td className="px-4 py-4">
<div className="flex -space-x-2">
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a man wearing a cap" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjeraKL1jW2s9hgRqzvBJKiC3F5euKNPFX1gC1Z7zteWmxAsnxkoGpVMCh5AoJ9PIzw9_ZDvRU-3xoQIULVLLDxwCCTN9UqUHuo8ZQjf0xjCp1o7kVgNZzZc6rZ6WIGkN4CaPQpbWjFKujnnbHBMLIW2odNwqhZK4W54GdSOULUhHGQi6UBzLGZIa2SqMevBM9tH7Y-bZSsQfXMjxEHte8geAM3cfrdVP-nlDACZvkp0tLtGAEmy18pOKwH7cZVFfI0iNvN5iKSdGr"/>
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a woman with long wavy hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2qrJwqsUxBETzf5aE1SeDAYNvdwIdDZkrTYrMpKzqJpXUCJmCf4DZwCxYkFyQfGfrWHNJvI5-eRObcWdDYwP4RmpdMIrb0KZsfB0fGODCFB4d5JKMVEL8F3b3Az_I6RK81LKnU5mSyiSMJv393aFe46YoPPG1r5Eok610CJzGTwXYtxRaBpuBunx3NtRIA-nwwj2N-brgMLjI3uLhUEsncUnhg9RvH1d-ZAjqRVdZTZhb2WHPmHPoFbKFNiAx-fILfr5c3X6Cy0Ek"/>
<div className="w-7 h-7 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">+1</div>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2 text-slate-400 font-label-sm text-label-sm line-through">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                                    Oct 12
                                </div>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">description</span>
<span className="font-body-md text-body-md font-medium text-slate-900">User Interview Insights Summary</span>
</div>
</td>
<td className="px-4 py-4">
<span className="px-2 py-1 bg-blue-50 text-blue-600 rounded font-label-sm text-label-sm border border-blue-100">In Progress</span>
</td>
<td className="px-4 py-4">
<div className="flex flex-wrap gap-1">
<span className="w-2.5 h-2.5 rounded-full bg-[#9f8fef]" title="Research"></span>
</div>
</td>
<td className="px-4 py-4">
<div className="flex -space-x-2">
<img alt="Member" className="w-7 h-7 rounded-full border-2 border-white" data-alt="professional avatar of a person with glasses and a friendly expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqwTR2kvYIBXSvOPtP-m_pQDZ7T2uNv_Y4Mq9Q4mh_lHbJvrRewgcWEBHARI8CUC27itc7YUIgNV4OhWQnxsabYB8reYUq0rcFXDhkejDdS3dXOfwhLzvvPzCAfRaW5EFKgruvz9q3jMMyUoZw07_oIAoUJM09bhDj1IHQwrzi6bw5Y5WcYQy6nATIkHj9mIdeiBGvNydRXN18J4LT8DXg2EBJjGrGj7K3wBs404lVpttMhXzuWrkso_UJFDGnFZNk-oOSBi9m8E2S"/>
</div>
</td>
<td className="px-4 py-4">
<div className="flex items-center gap-2 text-slate-500 font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                                    Oct 28
                                </div>
</td>
</tr>
{/*  Empty Action Row  */}
<tr>
<td className="px-6 py-3" colspan="5">
<button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                                    Add a new card...
                                </button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Dashboard Stats / Bento Grid Elements  */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-primary text-white p-6 rounded-xl shadow-md flex flex-col justify-between">
<div>
<h3 className="font-label-bold text-label-bold opacity-80 uppercase tracking-widest">Active Tasks</h3>
<p className="font-headline-xl text-headline-xl mt-2">12</p>
</div>
<div className="mt-4 flex items-center gap-2 font-label-sm text-label-sm">
<span className="material-symbols-outlined">trending_up</span>
<span>24% increase from last week</span>
</div>
</div>
<div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
<h3 className="font-label-bold text-label-bold text-slate-500 uppercase tracking-widest">Team Availability</h3>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-body-md font-medium">Design Team</span>
<span className="text-label-bold text-green-600">85%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full">
<div className="bg-green-500 h-1.5 rounded-full w-[85%]"></div>
</div>
<div className="flex items-center justify-between mt-2">
<span className="text-body-md font-medium">Dev Team</span>
<span className="text-label-bold text-amber-500">42%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full">
<div className="bg-amber-500 h-1.5 rounded-full w-[42%]"></div>
</div>
</div>
</div>
<div className="bg-secondary-fixed text-on-secondary-fixed p-6 rounded-xl shadow-sm relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-label-bold text-label-bold opacity-80 uppercase tracking-widest">Upcoming Deadline</h3>
<p className="font-headline-md text-headline-md mt-2">Product Launch V2</p>
<p className="font-label-sm text-label-sm mt-1 opacity-70">3 days remaining</p>
</div>
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] opacity-10">rocket_launch</span>
</div>
</div>
</div>
</main>
{/*  FAB (Suppressed on this view as per relevance check, but keeping placeholder logic if needed for mobile)  */}
<div className="md:hidden fixed bottom-6 right-6">
<button className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center">
<span className="material-symbols-outlined text-[32px]">add</span>
</button>
</div>

    </>
  );
};

export default WorkspaceTableView;
