import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SentimentAnalysis = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 sticky">
<div className="flex items-center gap-4">
<button className="hover:bg-white/20 dark:hover:bg-slate-800 transition-colors p-1 rounded">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<span className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</span>
<nav className="hidden md:flex gap-2 ml-4">
<a className="text-white bg-white/10 rounded-md px-3 py-1.5 Active: opacity-80 duration-150"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 hover:bg-white/20 transition-colors" href="#">Activity</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 hover:bg-white/20 transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined cursor-pointer text-slate-300 hover:text-white" data-icon="notifications">notifications</span>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border border-white/20">
<img alt="User profile" data-alt="professional headshot of a team lead with a friendly expression and neutral office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ_7n1-lCz3HUJVes0rkKPMflBx6O9KasjyAuNus7nHpTjth5i5L0MwRYuxQBF52y_1-lDtM0ehzVPbdkGeymVD5BAqAKx9KweREjjj43FMfgmrME-v18Xc8K6kBH8TWEMjFHzZ8DyaqpnZJBlGJyFYvKaNrhimcMhKFBLC4DueVm1feF5hBj96IfoU3PCW8Xh-0nf-1px1jzOVq6dk2QWfcQNKouBE-fg8MSAm2W0ctCjCOFPP_PVDbqj3ajuEwVRkX-_5fd53OUV"/>
</div>
</div>
</header>
<div className="flex">
{/*  NavigationDrawer (Desktop Only)  */}
<aside className="hidden md:flex flex-col h-screen pt-4 pb-20 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full w-64 fixed left-0 top-12 z-40">
<div className="px-md mb-lg">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="business">business</span>
</div>
<div>
<h3 className="text-xl font-bold text-[#091E42] dark:text-white">Enterprise Global</h3>
<p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Admin Console</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<div className="px-3 py-2 flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Workspace Boards</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="psychology" style={{"fontVariationSettings":"'FILL' 1"}}>psychology</span>
<span>AI Command Center</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
<span>Enterprise Admin</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span>Team Management</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span>Analytics</span>
</div>
<div className="px-3 py-2 flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer font-sans text-sm font-semibold">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<span>Automation Settings</span>
</div>
</nav>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 md:ml-64 p-md md:p-xl bg-[#F7F8F9] min-h-screen pb-32">
<div className="max-w-7xl mx-auto">
{/*  Header & Filters  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-lg gap-md">
<div>
<div className="flex items-center gap-2 mb-2 text-primary-container">
<span className="material-symbols-outlined text-md" data-icon="auto_awesome">auto_awesome</span>
<span className="font-label-bold text-label-bold uppercase tracking-widest">AI Insights Engine</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-[#091E42]">Sentiment Analysis Dashboard</h1>
<p className="font-body-md text-body-md text-on-secondary-container mt-1">Real-time emotional monitoring of team communications and workspace friction.</p>
</div>
<div className="flex items-center gap-3">
<div className="bg-white border border-outline-variant rounded-lg px-3 py-2 flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-slate-400" data-icon="calendar_today">calendar_today</span>
<span className="text-body-md font-medium">Last 14 Days</span>
</div>
<button className="bg-primary-container text-white px-md py-2 rounded-lg font-label-bold flex items-center gap-2 shadow-sm hover:opacity-90">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                            Export Report
                        </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Sentiment Trend Chart  */}
<div className="md:col-span-8 bg-white rounded-xl border border-outline-variant shadow-sm p-md flex flex-col h-[400px]">
<div className="flex justify-between items-start mb-md">
<div>
<h2 className="font-headline-md text-headline-md text-[#091E42]">Sentiment Trend</h2>
<p className="text-label-sm text-slate-500">Aggregated score across all boards</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-label-sm">Positive</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<span className="text-label-sm">Negative</span>
</div>
</div>
</div>
<div className="flex-1 relative mt-md">
{/*  Mock Chart Vector  */}
<svg className="w-full h-full overflow-visible" viewbox="0 0 800 200">
{/*  Grid Lines  */}
<line stroke="#f1f5f9" stroke-width="1" x1="0" x2="800" y1="0" y2="0"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="0" x2="800" y1="50" y2="50"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="0" x2="800" y1="100" y2="100"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#f1f5f9" stroke-width="1" x1="0" x2="800" y1="200" y2="200"></line>
{/*  Positive Path  */}
<path className="chart-line" d="M0,100 Q100,20 200,80 T400,40 T600,60 T800,20" fill="none" stroke="#22c55e" stroke-width="3"></path>
{/*  Negative Path  */}
<path className="chart-line" d="M0,150 Q100,180 200,140 T400,160 T600,130 T800,170" fill="none" stroke="#ef4444" stroke-width="3"></path>
{/*  Tooltip Marker  */}
<circle cx="400" cy="40" fill="#22c55e" r="6" stroke="white" stroke-width="2"></circle>
</svg>
</div>
<div className="flex justify-between text-label-sm text-slate-400 mt-md pt-md border-t border-slate-100">
<span>Oct 01</span><span>Oct 04</span><span>Oct 07</span><span>Oct 10</span><span>Oct 14</span>
</div>
</div>
{/*  Sentiment Summary Stats  */}
<div className="md:col-span-4 grid grid-cols-1 gap-gutter">
<div className="bg-green-50 rounded-xl border border-green-100 p-md flex flex-col justify-between">
<div className="flex justify-between">
<span className="material-symbols-outlined text-green-600 bg-white p-2 rounded-lg" data-icon="sentiment_very_satisfied" style={{"fontVariationSettings":"'FILL' 1"}}>sentiment_very_satisfied</span>
<span className="text-green-700 font-label-bold text-xs">+12.4%</span>
</div>
<div>
<p className="text-green-800 text-headline-xl font-black">74%</p>
<p className="text-green-700 text-label-sm font-semibold uppercase tracking-tight">Positive Sentiment</p>
</div>
</div>
<div className="bg-red-50 rounded-xl border border-red-100 p-md flex flex-col justify-between">
<div className="flex justify-between">
<span className="material-symbols-outlined text-red-600 bg-white p-2 rounded-lg" data-icon="sentiment_very_dissatisfied" style={{"fontVariationSettings":"'FILL' 1"}}>sentiment_very_dissatisfied</span>
<span className="text-red-700 font-label-bold text-xs">-2.1%</span>
</div>
<div>
<p className="text-red-800 text-headline-xl font-black">12%</p>
<p className="text-red-700 text-label-sm font-semibold uppercase tracking-tight">Friction Detected</p>
</div>
</div>
<div className="bg-slate-100 rounded-xl border border-slate-200 p-md flex flex-col justify-between">
<div className="flex justify-between">
<span className="material-symbols-outlined text-slate-600 bg-white p-2 rounded-lg" data-icon="chat_bubble_outline">chat_bubble_outline</span>
</div>
<div>
<p className="text-slate-800 text-headline-xl font-black">1,402</p>
<p className="text-slate-600 text-label-sm font-semibold uppercase tracking-tight">Analyzed Comments</p>
</div>
</div>
</div>
{/*  High Friction Boards  */}
<div className="md:col-span-12 bg-white rounded-xl border border-outline-variant shadow-sm p-md">
<div className="flex items-center justify-between mb-lg">
<h2 className="font-headline-md text-headline-md text-[#091E42]">Board Sentiment Breakdown</h2>
<div className="flex items-center gap-2 text-primary text-label-bold cursor-pointer hover:underline">
                                View Detailed Breakdown <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
<div className="space-y-md">
{/*  Table Header  */}
<div className="grid grid-cols-12 gap-4 text-label-sm font-label-bold text-slate-400 uppercase tracking-widest px-md">
<div className="col-span-5">Workspace Board</div>
<div className="col-span-4">Sentiment Distribution</div>
<div className="col-span-3 text-right">Primary Emotion</div>
</div>
{/*  Board Row 1  */}
<div className="grid grid-cols-12 gap-4 items-center bg-slate-50/50 p-md rounded-lg border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<div className="col-span-5 flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold">QA</div>
<div>
<p className="font-label-bold text-[#091E42]">Q4 Infrastructure Migration</p>
<p className="text-label-sm text-slate-500">42 active members • 12 comments today</p>
</div>
</div>
<div className="col-span-4">
<div className="flex h-2 w-full rounded-full overflow-hidden bg-slate-200">
<div className="bg-green-500 w-[60%]"></div>
<div className="bg-yellow-400 w-[25%]"></div>
<div className="bg-red-500 w-[15%]"></div>
</div>
</div>
<div className="col-span-3 text-right">
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-label-sm font-bold">Confident</span>
</div>
</div>
{/*  Board Row 2  */}
<div className="grid grid-cols-12 gap-4 items-center bg-slate-50/50 p-md rounded-lg border border-transparent hover:border-slate-200 hover:bg-white transition-all">
<div className="col-span-5 flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded flex items-center justify-center font-bold">UI</div>
<div>
<p className="font-label-bold text-[#091E42]">Design System Refresh</p>
<p className="text-label-sm text-slate-500">8 active members • 86 comments today</p>
</div>
</div>
<div className="col-span-4">
<div className="flex h-2 w-full rounded-full overflow-hidden bg-slate-200">
<div className="bg-green-500 w-[20%]"></div>
<div className="bg-yellow-400 w-[30%]"></div>
<div className="bg-red-500 w-[50%]"></div>
</div>
</div>
<div className="col-span-3 text-right">
<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-label-sm font-bold">Frustrated</span>
</div>
</div>
</div>
</div>
{/*  Critical Friction Points (Asymmetric)  */}
<div className="md:col-span-5 bg-white rounded-xl border border-outline-variant shadow-sm p-md">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined text-red-500" data-icon="report_problem">report_problem</span>
<h2 className="font-headline-md text-headline-md text-[#091E42]">Action Required</h2>
</div>
<div className="space-y-4">
<div className="p-4 rounded-xl sentiment-gradient-neg border-l-4 border-red-500">
<div className="flex justify-between items-start mb-2">
<span className="text-label-bold text-red-700">Blocked Workflow</span>
<span className="text-xs text-slate-400">2h ago</span>
</div>
<p className="text-body-md text-slate-700 italic mb-3">"I've asked for the API docs three times now and still nothing. This is completely blocking our release."</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Team member" className="w-6 h-6 rounded-full" data-alt="portrait of a software engineer wearing glasses with a focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZyS4yLOwwXwHGENGQdllyVQm9ktQb2e-ZdcttnH1LnCNRehN_fhEQup9ySRGkbb2YVUhXhQPKKGnQTsC4dhwAB3nTtqJiRAn_TQHGGhtkiyyvsb_uWbnWh57do90xcMAXHyqfR6kaNcHdYHXV1fWVtbFjobuLF4mm4DtfL6VClSmojzzxzsFtioxKjANn-Uzy9-bRdfkz_4S0Q9HNaIEAjQwUcB9OkgyTaugoCXEae4Cmkas8AX4RpA7CaALo2gdw6DGqmD-vE5i"/>
<span className="text-xs font-bold text-slate-600">Marcus Chen</span>
</div>
<button className="text-primary text-xs font-bold hover:underline">View Card</button>
</div>
</div>
</div>
</div>
{/*  AI Opportunities (Asymmetric)  */}
<div className="md:col-span-7 bg-[#0054d7] rounded-xl shadow-xl p-md text-white overflow-hidden relative">
{/*  Background Decoration  */}
<div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12">
<span className="material-symbols-outlined text-[160px]" data-icon="psychology">psychology</span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-md">
<span className="material-symbols-outlined" data-icon="lightbulb" style={{"fontVariationSettings":"'FILL' 1"}}>lightbulb</span>
<h2 className="font-headline-md text-headline-md">Win Recognition</h2>
</div>
<p className="text-blue-100 font-body-md mb-lg max-w-md">The "Enterprise Mobile" team has maintained high positive sentiment for 10 consecutive days. AI suggests recognizing their synergy.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
<p className="text-xs text-blue-200 uppercase font-bold tracking-widest mb-1">Top Contributor</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center font-bold text-xs">SL</div>
<span className="font-label-bold">Sarah L.</span>
</div>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
<p className="text-xs text-blue-200 uppercase font-bold tracking-widest mb-1">Key Phrase</p>
<p className="font-label-bold">"Great teamwork!"</p>
</div>
</div>
<button className="mt-lg bg-white text-[#0054d7] font-bold px-lg py-3 rounded-full text-sm hover:bg-blue-50 transition-colors">
                                Send Recognition Shout-out
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 bg-white dark:bg-slate-900 md:hidden z-50 border-t border-slate-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-[#0065FF] dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-xl px-4 py-1">
<span className="material-symbols-outlined" data-icon="smart_toy" style={{"fontVariationSettings":"'FILL' 1"}}>smart_toy</span>
<span className="text-[10px] font-bold tracking-wide uppercase">AI</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400">
<span className="material-symbols-outlined" data-icon="supervisor_account">supervisor_account</span>
<span className="text-[10px] font-bold tracking-wide uppercase">Admin</span>
</div>
</nav>
{/*  FAB (Suppressed based on screen purpose as focused analytics dashboard)  */}

    </>
  );
};

export default SentimentAnalysis;
