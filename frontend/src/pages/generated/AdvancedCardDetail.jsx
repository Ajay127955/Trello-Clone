import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdvancedCardDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined hover:bg-white/20 dark:hover:bg-slate-800 transition-colors p-1 rounded cursor-pointer" data-icon="grid_view">grid_view</span>
<span className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</span>
</div>
<nav className="hidden md:flex gap-2">
<span className="text-white bg-white/10 rounded-md px-3 py-1.5 cursor-pointer">Boards</span>
<span className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors cursor-pointer">Search</span>
<span className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors cursor-pointer">AI</span>
<span className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors cursor-pointer">Admin</span>
</nav>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined hover:bg-white/20 transition-colors p-1 rounded cursor-pointer" data-icon="notifications">notifications</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-white/20" data-alt="Professional headshot of a team lead in a corporate environment with soft office lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBulwDV_wYEVN2upSJeIj9MH0RNGyh3n6K0mzavrbs0sGaXsC1LYtzAFHMlHY07AowU0MIQXQepp9wmgydVWWGYY9t5OlUSWInKp4tKajNN63HKFY3TgplJ7ezGwRnvvWb_uYpU2MaJI0JLt1Y_lNRbLcZCBxFnhtqipvGu7AnbrTs1JWMk1CxuJLca2mPKIzxmrDMRJQ_Z3BHfGoHlUOMZ9eh8FrPlTdXZ5QqAsBJc7leIieJpkh4HFkByu4yQtE25BdPFRP-HKCx_"/>
</div>
</header>
<div className="flex">
{/*  NavigationDrawer Shell (Sidebar)  */}
<aside className="hidden md:flex flex-col h-screen pt-4 pb-20 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full w-64 fixed left-0 top-12 z-40">
<div className="px-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<div className="text-xl font-bold text-[#091E42] dark:text-white">Enterprise Global</div>
<div className="text-[10px] uppercase font-bold text-slate-500">Admin Console</div>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<div className="bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-sans text-sm font-semibold">Workspace Boards</span>
</div>
<div className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-sans text-sm font-semibold">AI Command Center</span>
</div>
<div className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span className="font-sans text-sm font-semibold">Enterprise Admin</span>
</div>
<div className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-sans text-sm font-semibold">Team Management</span>
</div>
<div className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-sans text-sm font-semibold">Analytics</span>
</div>
<div className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center px-6 py-3 gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span className="font-sans text-sm font-semibold">Automation Settings</span>
</div>
</nav>
</aside>
{/*  Main Content Area (Trello Card Back Simulation)  */}
<main className="flex-1 md:ml-64 pt-12 pb-20 md:pb-8 min-h-screen">
<div className="max-w-6xl mx-auto px-4 md:px-lg py-gutter">
{/*  Back Action  */}
<div className="mb-gutter flex items-center gap-2 text-on-secondary-container hover:text-primary transition-colors cursor-pointer">
<span className="material-symbols-outlined text-[20px]" data-icon="arrow_back">arrow_back</span>
<span className="font-label-bold text-label-bold">Back to Board</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/*  Left Column: Primary Content  */}
<div className="lg:col-span-8 space-y-lg">
{/*  Card Header  */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#0065FF]" data-icon="check_box">check_box</span>
<h1 className="font-headline-xl text-headline-xl text-[#091E42]">Q4 Infrastructure Scaling Strategy</h1>
</div>
<span className="material-symbols-outlined text-slate-400 cursor-pointer" data-icon="more_horiz">more_horiz</span>
</div>
<p className="font-body-md text-on-secondary-container mb-md">In list <span className="underline cursor-pointer">Ready for Launch</span></p>
<div className="flex flex-wrap gap-md">
<div>
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mb-xs">Members</h4>
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" data-alt="Portrait of a smiling tech architect with glasses in a modern office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDohsZwuiz5G4n8mq6Ab_YnK52X1M2tkV-N4uk_XsHP_djOFmMG2t21HszC287QgQyHl2c5lyUoz0uMAL3f3xwfr3gZrXiS-2iex_UsAeP9PIlMuz1ki3yn4r0cHy4yQBdsJdJTMQdgYKSVeKHzTfH45WE83S-k46YxsWYL4ZQpdPftMJBOwaJp5XlxJJUq_Rmt7yAHCk3T3VOWMh67IwqZKyLz2cIAuca6PDSl9OvUlO8MM5zlrRuXTTcHfqsfEpIQ3riwzitDbR_3"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white" data-alt="Portrait of a professional project manager with a bright, welcoming expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm4yYgEKf1dCxZzWmUUzvLFon7LmUiWgOmjowCpJwUtaNEYH3TT2U--p6WdkC8nHc3WobUsNE0hSyEUPMOVrIsx4M2Ff7twX5DOo1DnJ9PxWJ9THpFkA0GtC8Gu3jboULWcxsOf6Sid1qt3K_136In3TSJXAGyOgc34ggcZjyCeJ3MzV8oOlc3zjcmfucS1kOZ90yAo_fbebl_ZbLHPAyRAjq5dkQOKACfE5IFKolkU1cFKIH-H1SswCsUuFX6p511SZS25KjvLt-H"/>
<div className="w-8 h-8 rounded-full ring-2 ring-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+4</div>
</div>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mb-xs">Labels</h4>
<div className="flex gap-1">
<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-label-sm font-label-bold">Strategic</span>
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-label-sm font-label-bold">Priority 1</span>
</div>
</div>
<div>
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mb-xs">Due Date</h4>
<div className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-lg">
<span className="material-symbols-outlined text-[16px]" data-icon="schedule">schedule</span>
<span className="text-body-md font-medium">Dec 15, 2024</span>
</div>
</div>
</div>
</div>
{/*  AI Suggested Actions (Bento Style)  */}
<div className="bg-blue-50/50 dark:bg-blue-900/10 p-lg rounded-xl border border-blue-200/50">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-primary" data-icon="smart_toy">smart_toy</span>
<h3 className="font-headline-md text-headline-md text-primary">AI Suggested Next Steps</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="bg-white p-md rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-400" data-icon="history_edu">history_edu</span>
<div>
<div className="font-label-bold">Draft RFC Document</div>
<div className="text-[11px] text-slate-500">Based on Confluence link...</div>
</div>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</div>
<div className="bg-white p-md rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex justify-between items-center group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-blue-400" data-icon="mail">mail</span>
<div>
<div className="font-label-bold">Follow up with DevOps</div>
<div className="text-[11px] text-slate-500">3 blocking items in Jira</div>
</div>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
{/*  Custom Fields  */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30">
<h3 className="font-headline-md text-headline-md mb-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="settings_input_component">settings_input_component</span> Custom Fields
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="space-y-1">
<label className="text-label-sm text-slate-500 uppercase font-bold">Budget Allocation</label>
<div className="bg-surface-container px-3 py-2 rounded-lg flex items-center justify-between border border-transparent hover:border-outline transition-colors cursor-pointer">
<span className="font-medium">$125,000</span>
<span className="material-symbols-outlined text-slate-400 text-[18px]" data-icon="edit">edit</span>
</div>
</div>
<div className="space-y-1">
<label className="text-label-sm text-slate-500 uppercase font-bold">Deployment Tier</label>
<div className="bg-surface-container px-3 py-2 rounded-lg flex items-center justify-between border border-transparent hover:border-outline transition-colors cursor-pointer">
<span className="font-medium">Tier 1 Global</span>
<span className="material-symbols-outlined text-slate-400 text-[18px]" data-icon="expand_more">expand_more</span>
</div>
</div>
<div className="space-y-1">
<label className="text-label-sm text-slate-500 uppercase font-bold">Review Cycles</label>
<div className="bg-surface-container px-3 py-2 rounded-lg flex items-center justify-between border border-transparent hover:border-outline transition-colors cursor-pointer">
<span className="font-medium">3 of 5</span>
<span className="material-symbols-outlined text-slate-400 text-[18px]" data-icon="counter_1">counter_1</span>
</div>
</div>
</div>
</div>
{/*  Multi-level Checklists  */}
<div className="space-y-md">
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30">
<div className="flex items-center justify-between mb-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="checklist">checklist</span>
<h3 className="font-headline-md text-headline-md">Core Infrastructure Tasks</h3>
</div>
<button className="bg-surface-container hover:bg-surface-container-high transition-colors px-3 py-1.5 rounded-lg text-label-bold">Add Item</button>
</div>
<div className="mb-md">
<div className="flex items-center gap-3 mb-2">
<span className="text-label-sm font-bold text-slate-500">60%</span>
<div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-primary" style={{"width":"60%"}}></div>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors group">
<div className="mt-1 flex items-center justify-center w-5 h-5 border-2 border-slate-300 rounded cursor-pointer hover:border-primary"></div>
<div className="flex-1">
<div className="font-body-md font-medium">Provision AWS Elastic Load Balancer (v2)</div>
<div className="flex gap-4 mt-2">
<div className="flex items-center gap-1 text-[11px] text-slate-500">
<span className="material-symbols-outlined text-[14px]" data-icon="person">person</span> Sarah Jenkins
                                                </div>
<div className="flex items-center gap-1 text-[11px] text-slate-500">
<span className="material-symbols-outlined text-[14px]" data-icon="calendar_today">calendar_today</span> Oct 24
                                                </div>
</div>
</div>
</div>
<div className="flex items-start gap-3 p-2 bg-blue-50/30 rounded-lg group">
<div className="mt-1 flex items-center justify-center w-5 h-5 bg-primary rounded cursor-pointer">
<span className="material-symbols-outlined text-white text-[16px]" data-icon="check">check</span>
</div>
<div className="flex-1">
<div className="font-body-md font-medium line-through text-slate-400">Database Sharding Documentation Review</div>
{/*  Nested checklist level  */}
<div className="ml-4 mt-3 pl-4 border-l-2 border-slate-200 space-y-2">
<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-primary/20 rounded-sm flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[12px]" data-icon="check">check</span>
</div>
<span className="text-label-sm text-slate-500">PostgreSQL Config Updates</span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 bg-primary/20 rounded-sm flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[12px]" data-icon="check">check</span>
</div>
<span className="text-label-sm text-slate-500">Read Replica Latency Tests</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Attachments & Previews  */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30">
<h3 className="font-headline-md text-headline-md mb-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="attach_file">attach_file</span> Attachments
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="flex items-center gap-md p-sm border border-outline-variant/50 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
<div className="w-24 h-16 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Screenshot of a complex technical dashboard showing server performance metrics and data visualizations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIG3jo8Z_KElgy6FMA20cuut7aQ4tMqXtjrZ1F-9CRU72biFgcxG9aJKO0rEWDlp8NbWSVLELR4CsDOjzcokdzQR5fmMd0EB2XdyZ4bm3T3Es7l26B9piLPFwP1kOhhwZe4ohneWKG-g8fDPb-kIDGu8Owc75eug7qZPUbZjWoWsVeDN8LyE6F8--FozK0kyDSxlqS6C67IJkFYBpvCLJ3t0Gx2kBAiF4IRaF0HuCZDzcH-3VMtRdiN1Vh1Jb3oMdqoW39YXlikabt"/>
</div>
<div className="flex-1 overflow-hidden">
<div className="font-label-bold truncate">Server_Metrics_Oct.png</div>
<div className="text-[11px] text-slate-500">Added Oct 20 • 2.4 MB</div>
<div className="flex gap-2 mt-1">
<span className="text-primary text-[11px] font-bold hover:underline">Download</span>
<span className="text-slate-400 text-[11px]">•</span>
<span className="text-primary text-[11px] font-bold hover:underline">Delete</span>
</div>
</div>
</div>
<div className="flex items-center gap-md p-sm border border-outline-variant/50 rounded-xl hover:bg-slate-50 transition-all cursor-pointer group">
<div className="w-24 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-red-500 text-3xl" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div className="flex-1 overflow-hidden">
<div className="font-label-bold truncate">Q4_Scaling_Plan_Final.pdf</div>
<div className="text-[11px] text-slate-500">Added yesterday • 12.8 MB</div>
<div className="flex gap-2 mt-1">
<span className="text-primary text-[11px] font-bold hover:underline">View</span>
<span className="text-slate-400 text-[11px]">•</span>
<span className="text-primary text-[11px] font-bold hover:underline">Share</span>
</div>
</div>
</div>
</div>
<button className="mt-md w-full py-3 border-2 border-dashed border-slate-200 rounded-xl text-slate-500 font-label-bold hover:border-primary hover:text-primary hover:bg-primary-container/5 transition-all">
                                Add more attachments...
                            </button>
</div>
{/*  Activity Log & Comments  */}
<div className="bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/30">
<div className="flex items-center justify-between mb-lg">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="list_alt">list_alt</span> Activity
                                </h3>
<button className="bg-surface-container hover:bg-surface-container-high px-3 py-1.5 rounded-lg text-label-bold">Show Details</button>
</div>
<div className="space-y-lg">
{/*  Comment Entry  */}
<div className="flex gap-md">
<img alt="" className="w-8 h-8 rounded-full" data-alt="User profile thumbnail for comment input" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4zrvf_49g6PJzhVnitXhajT_5yRMfVo33TcjNSnvVi9dDwxGr5jzJxi_8YjAS2Idxj6yuZ-G1UZpKaM5-uUD3kSVJ3TJQRVSYD4eCjGw8k-D--h7TuP2oM0svF7wjiZdA3MSpHulh9lW46PSpxi6c1le6xa7VmtPK-PXeNcJMmBY7tuJYDFwJ5StQEQSpRbcO66wjD8wrnKg1fKf8D6b9REdImCN9d5B0dKp1hwYo3o3J3S_gmLrGY48Cxmb6-vePzUb5uNF8ZUI4"/>
<div className="flex-1">
<div className="relative">
<textarea className="w-full bg-white border border-outline-variant rounded-xl p-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-h-[80px] text-body-md" placeholder="Write a comment..."></textarea>
<div className="flex justify-between mt-2">
<div className="flex gap-2">
<span className="material-symbols-outlined text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="alternate_email">alternate_email</span>
<span className="material-symbols-outlined text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="sentiment_satisfied">sentiment_satisfied</span>
<span className="material-symbols-outlined text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="image">image</span>
</div>
<button className="bg-primary text-white px-4 py-1.5 rounded-lg font-label-bold shadow-sm">Save</button>
</div>
</div>
</div>
</div>
{/*  Actual Comments with Sentiment Markers  */}
<div className="space-y-md">
<div className="flex gap-md">
<img alt="" className="w-8 h-8 rounded-full" data-alt="Portrait of Elena, a senior engineer providing positive feedback" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQMCArxScvHoROSwUQvHhogaODTwEe_oCm29ZvRQ4OQdUGyg1JXFpyq7AxL7Xrmcaz8wlNNoFSpdVEg7omjHgZ6bt_EzZuVsRE8Lvlw9qAs-xA7z5ZotrCDWq1YXztufeXAnpAI_mf2cnCiY9-u6nGMgKvana8zNIMvC21L_lUQI0b8Vzq6XtNA8daxlu2lkciGDa0twum9BrPMaWghm2R4QzWE_mYFyVjlnhd0f9tzz_7mmCAfcSqOXABK4hmDFV1on-0noptclYz"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-bold text-[#091E42]">Elena Rodriguez</span>
<span className="text-label-sm text-slate-500">2 hours ago</span>
{/*  Sentiment Marker  */}
<span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>sentiment_very_satisfied</span> Positive
                                                </span>
</div>
<div className="bg-white border border-outline-variant/30 p-md rounded-xl shadow-sm text-body-md">
                                                The database sharding plan looks excellent. I've benchmarked the latency on the staging cluster and it's well within our 200ms target! 🚀
                                            </div>
<div className="flex gap-4 mt-2 ml-2">
<span className="text-label-sm text-slate-500 hover:underline cursor-pointer">Reply</span>
<span className="text-label-sm text-slate-500 hover:underline cursor-pointer">Edit</span>
</div>
</div>
</div>
<div className="flex gap-md">
<img alt="" className="w-8 h-8 rounded-full" data-alt="Portrait of Marcus, a technical reviewer expressing concern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQCnFDD6l59mHmb_dm5qEdB5q_zPmqRx9umpce2R-_htokZpfRibKsTrR9istG8SCsMA-dG_TMmGQhYA1C62YUlVo693OMq0Nmjex-Yt5k7EcrYJ_NBoU5bijHcjs18PmFXch7zSVryhKLzJw0_UPjAPgY2ORwGoEDNw2UNkQW1KVre2DRhSzBn4JxNFBxMKymDSeFoA5n8pmJqf4C5CN2tsJNX7BpEBFLIE3xgXgbBGylYm2uXkTbaaI9xgmdeB5L1R3Isq19y-tA"/>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="font-label-bold text-[#091E42]">Marcus Chen</span>
<span className="text-label-sm text-slate-500">5 hours ago</span>
{/*  Sentiment Marker  */}
<span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span> Concern
                                                </span>
</div>
<div className="bg-white border border-outline-variant/30 p-md rounded-xl shadow-sm text-body-md">
                                                Are we certain about the Dec 15th deadline for ELB provisioning? The Terraform scripts are still throwing VPC permission errors in us-east-1.
                                            </div>
<div className="flex gap-4 mt-2 ml-2">
<span className="text-label-sm text-slate-500 hover:underline cursor-pointer">Reply</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Context & Actions  */}
<div className="lg:col-span-4 space-y-lg">
{/*  Smart Link Integration Section  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm">
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mb-md tracking-wider">Enterprise Ecosystem</h4>
<div className="space-y-sm">
<div className="p-md rounded-xl bg-blue-50/50 border border-blue-200/50 hover:bg-blue-100 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-blue-100">
<span className="material-symbols-outlined text-blue-600" data-icon="developer_board">developer_board</span>
</div>
<div>
<div className="font-label-bold text-blue-900">Jira Ticket: INFRA-402</div>
<div className="text-[10px] text-blue-600 font-bold uppercase">In Progress • Story Points: 8</div>
</div>
</div>
<div className="text-xs text-slate-600 line-clamp-2">"Implement automated failover for multi-region database cluster"</div>
</div>
<div className="p-md rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-slate-200">
<span className="material-symbols-outlined text-slate-600" data-icon="description">description</span>
</div>
<div>
<div className="font-label-bold text-slate-900">Confluence: Scaling Specs</div>
<div className="text-[10px] text-slate-500 font-bold uppercase">Last updated: 2h ago</div>
</div>
</div>
<div className="text-xs text-slate-600">Documenting the VPC peering requirements...</div>
</div>
</div>
<button className="mt-md w-full py-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-label-sm font-bold text-slate-700 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="add_link">add_link</span> Link Resource
                            </button>
</div>
{/*  Main Actions Panel  */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30">
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mb-md tracking-wider">Add to Card</h4>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary" data-icon="person_add">person_add</span>
<span className="font-medium text-body-md">Members</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary" data-icon="label">label</span>
<span className="font-medium text-body-md">Labels</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary" data-icon="checklist">checklist</span>
<span className="font-medium text-body-md">Checklist</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary" data-icon="schedule">schedule</span>
<span className="font-medium text-body-md">Dates</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left group">
<span className="material-symbols-outlined text-slate-500 group-hover:text-primary" data-icon="attach_file">attach_file</span>
<span className="font-medium text-body-md">Attachment</span>
</button>
</div>
<h4 className="font-label-bold text-label-bold text-slate-500 uppercase mt-lg mb-md tracking-wider">Actions</h4>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left">
<span className="material-symbols-outlined text-slate-500" data-icon="arrow_forward">arrow_forward</span>
<span className="font-medium text-body-md">Move</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left">
<span className="material-symbols-outlined text-slate-500" data-icon="content_copy">content_copy</span>
<span className="font-medium text-body-md">Copy</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-surface-container-high rounded-lg transition-colors text-left">
<span className="material-symbols-outlined text-slate-500" data-icon="visibility">visibility</span>
<span className="font-medium text-body-md">Watch</span>
</button>
<hr className="border-slate-100 my-1" />
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-error-container hover:text-error transition-colors text-left">
<span className="material-symbols-outlined" data-icon="archive">archive</span>
<span className="font-medium text-body-md">Archive</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container hover:bg-slate-200 transition-colors text-left">
<span className="material-symbols-outlined text-slate-500" data-icon="share">share</span>
<span className="font-medium text-body-md">Share</span>
</button>
</div>
</div>
{/*  Quick Notification Opt-in  */}
<div className="p-lg bg-primary-container rounded-xl text-white shadow-lg overflow-hidden relative">
<div className="relative z-10">
<h4 className="font-headline-md text-headline-md mb-2">Stay in the loop</h4>
<p className="text-label-sm opacity-90 mb-md">Get instant alerts for this card's activity directly in Slack.</p>
<button className="bg-white text-primary px-lg py-md rounded-xl font-label-bold w-full shadow-sm hover:bg-blue-50 transition-colors">
                                    Enable Notifications
                                </button>
</div>
{/*  Abstract decoration  */}
<div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute -left-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar Shell (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 md:hidden z-50 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1 cursor-pointer">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0065FF] cursor-pointer">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0065FF] cursor-pointer">
<span className="material-symbols-outlined" data-icon="smart_toy">smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase">AI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-[#0065FF] cursor-pointer">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Admin</span>
</div>
</nav>

    </>
  );
};

export default AdvancedCardDetail;
