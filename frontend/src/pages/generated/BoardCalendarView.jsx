import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BoardCalendarView = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] text-white shadow-sm border-b border-white/10">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined hover:bg-white/10 transition-colors p-1 rounded-lg">menu</button>
<div className="font-sans text-lg font-black text-white tracking-tight uppercase">Workspace</div>
<nav className="hidden md:flex items-center gap-4 ml-4">
<a className="text-white font-bold border-b-2 border-white pb-1 font-sans text-sm Inter"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-300 hover:text-white transition-colors font-sans text-sm Inter"  onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>
<a className="text-slate-300 hover:text-white transition-colors font-sans text-sm Inter"  onClick={(e) => { e.preventDefault(); navigate('/workspace-settings'); }}>Settings</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
<span className="material-symbols-outlined text-sm">search</span>
</div>
<div className="bg-white/10 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all">
<span className="material-symbols-outlined text-sm">notifications</span>
</div>
<img alt="Profile" className="h-8 w-8 rounded-full border border-white/20" data-alt="Professional headshot of a smiling young male executive with short hair, clean lit studio background, soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOSAnLYm8LWXZlZC2KziAu0N3g00HarfrGf_ePllHj3GfBcynhiqxqMP0uDbD0V8fKDY6wOV_IJ2lE04NEL2QBZBxRtrNoh3mcvE-M17IsPiErTkUQjsHolhLpdeIlAc9yZNfVBFMiIZ_KBQx2KlK_-Ayt_eS6YTPvH-oxZg29r7Fnb0SsHj_qeNzgS6l-JDZUcWQSXZX0e74K5xs26pArl9_Ms3F6CynvCsFjZJEH1x4bBk5_tJB7k02uUCAkfeL4uLJaP18iX9Fl"/>
</div>
</header>
<div className="flex flex-1 pt-12 overflow-hidden">
{/*  NavigationDrawer (Sidebar)  */}
<aside className="hidden md:flex flex-col h-full w-64 border-r border-slate-200 bg-slate-50 p-4 gap-2 shrink-0">
<div className="flex items-center gap-2 mb-6 px-2">
<span className="material-symbols-outlined text-blue-600 font-bold">dashboard</span>
<span className="text-blue-600 font-bold font-headline-md text-headline-md">Productive Flow</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-md font-sans text-sm font-medium" href="#">
<span className="material-symbols-outlined">dashboard</span> Boards
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-md font-sans text-sm font-medium" href="#">
<span className="material-symbols-outlined">group</span> Members
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-md font-sans text-sm font-medium" href="#">
<span className="material-symbols-outlined">settings</span> Workspace Settings
            </a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 font-semibold rounded-md font-sans text-sm" href="#">
<span className="material-symbols-outlined">calendar_today</span> Calendar
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-md font-sans text-sm font-medium" href="#">
<span className="material-symbols-outlined">timeline</span> Timeline
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all rounded-md font-sans text-sm font-medium" href="#">
<span className="material-symbols-outlined">analytics</span> Dashboard
            </a>
<div className="mt-auto border-t border-slate-200 pt-4">
<div className="px-3 py-2">
<p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">My Collections</p>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-xs py-1 text-slate-600 cursor-pointer hover:text-blue-600 transition-colors">
<span className="w-2 h-2 rounded-full bg-error"></span> Marketing
                        </div>
<div className="flex items-center gap-2 text-xs py-1 text-slate-600 cursor-pointer hover:text-blue-600 transition-colors">
<span className="w-2 h-2 rounded-full bg-primary"></span> Engineering
                        </div>
</div>
</div>
</div>
</aside>
{/*  Main Content (Calendar)  */}
<main className="flex-1 flex flex-col bg-white overflow-hidden">
{/*  Calendar Header/Toolbar  */}
<section className="h-14 px-6 flex items-center justify-between border-b border-slate-200 shrink-0">
<div className="flex items-center gap-4">
<h1 className="font-headline-md text-headline-md text-on-surface">October 2023</h1>
<div className="flex bg-surface-container-low rounded-lg p-1 border border-outline-variant">
<button className="px-3 py-1 text-label-sm font-label-sm bg-white shadow-sm rounded-md border border-outline-variant text-primary">Today</button>
<div className="flex ml-2">
<button className="p-1 hover:bg-surface-container transition-colors rounded-l-md"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="p-1 hover:bg-surface-container transition-colors rounded-r-md border-l border-outline-variant"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</div>
<div className="flex items-center gap-3">
{/*  View Toggles  */}
<div className="flex bg-surface-container-high rounded-full p-1">
<button className="px-4 py-1 text-label-sm font-label-bold bg-white text-primary rounded-full shadow-sm">Month</button>
<button className="px-4 py-1 text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-colors rounded-full">Week</button>
</div>
<div className="h-6 w-[1px] bg-outline-variant mx-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant rounded-lg hover:bg-surface-container transition-all text-body-md">
<span className="material-symbols-outlined text-sm">filter_list</span>
<span>Filter</span>
</button>
<button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg font-label-bold text-label-bold hover:opacity-90 active:scale-95 transition-all">
                        + Add Card
                    </button>
</div>
</section>
{/*  Calendar Grid Container  */}
<section className="flex-1 overflow-y-auto bg-surface-container-lowest">
{/*  Day Labels  */}
<div className="grid grid-cols-7 border-b border-slate-200 bg-surface-container-low/50 sticky top-0 z-10">
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Sun</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Mon</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Tue</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Wed</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Thu</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest border-r border-slate-200">Fri</div>
<div className="py-2 text-center text-label-sm font-label-bold text-on-surface-variant uppercase tracking-widest">Sat</div>
</div>
{/*  Month Grid  */}
<div className="calendar-grid w-full">
{/*  Week 1  */}
<div className="border-r border-b border-slate-200 p-2 bg-slate-50/50">
<span className="text-label-sm text-slate-400 font-medium">26</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-slate-50/50">
<span className="text-label-sm text-slate-400 font-medium">27</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-slate-50/50">
<span className="text-label-sm text-slate-400 font-medium">28</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-slate-50/50">
<span className="text-label-sm text-slate-400 font-medium">29</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-slate-50/50">
<span className="text-label-sm text-slate-400 font-medium">30</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">1</span>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-primary-container text-white text-[10px] font-bold rounded shadow-sm border border-primary/20 truncate cursor-pointer hover:brightness-110">Design Sprint Kickoff</div>
</div>
</div>
<div className="border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">2</span>
</div>
{/*  Week 2  */}
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">3</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">4</span>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-tertiary text-white text-[10px] font-bold rounded shadow-sm truncate">Review Backend Architecture</div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">5</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-blue-50/30">
<div className="flex justify-between items-center">
<span className="text-label-sm text-blue-600 font-bold">6</span>
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
</div>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-white border border-slate-200 text-on-surface text-[10px] font-bold rounded shadow-sm flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-error" style={{"fontVariationSettings":"'FILL' 1"}}>priority_high</span>
                                Critical Patch Release
                            </div>
<div className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded shadow-sm truncate">QA Regression</div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">7</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">8</span>
</div>
<div className="border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">9</span>
</div>
{/*  Week 3 (Today Row)  */}
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">10</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">11</span>
</div>
<div className="border-r border-b border-slate-200 p-2 bg-primary-fixed/20 relative">
<span className="text-label-sm text-primary font-black">12</span>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded shadow-sm flex items-center justify-between">
<span>Project Deadline</span>
<span className="material-symbols-outlined text-[10px]">timer</span>
</div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">13</span>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-on-tertiary-fixed-variant text-white text-[10px] font-bold rounded shadow-sm truncate">Team Offsite</div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">14</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">15</span>
</div>
<div className="border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">16</span>
</div>
{/*  Week 4  */}
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">17</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">18</span>
<div className="mt-2 flex flex-col gap-1">
<div className="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded shadow-sm truncate">User Research Sessions</div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">19</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">20</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">21</span>
<div className="mt-2 flex items-center justify-center gap-1">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<div className="w-2 h-2 rounded-full bg-error"></div>
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">22</span>
</div>
<div className="border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">23</span>
</div>
{/*  Week 5  */}
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">24</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">25</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">26</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">27</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">28</span>
</div>
<div className="border-r border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">29</span>
</div>
<div className="border-b border-slate-200 p-2">
<span className="text-label-sm text-on-surface-variant font-bold">30</span>
</div>
</div>
</section>
</main>
</div>
{/*  BottomNavBar (Mobile only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white border-t border-slate-200 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] pb-safe">
<button className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-medium Inter uppercase">Home</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">search</span>
<span className="text-[10px] font-medium Inter uppercase">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-blue-600">
<span className="material-symbols-outlined">add_box</span>
<span className="text-[10px] font-medium Inter uppercase">Create</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="text-[10px] font-medium Inter uppercase">Alerts</span>
</button>
</nav>
{/*  FAB (Only on main dashboard context)  */}
<button className="fixed bottom-20 right-6 md:bottom-8 md:right-8 w-14 h-14 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined text-3xl">add</span>
</button>

    </>
  );
};

export default BoardCalendarView;
