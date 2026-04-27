import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const InviteToWorkspace = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 h-12 bg-[#091E42] dark:bg-slate-950 border-b border-white/10 shadow-sm">
<div className="flex items-center gap-3">
<button className="text-white hover:bg-white/10 transition-colors p-1 rounded">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<span className="text-lg font-black text-white tracking-tight">Workspace</span>
</div>
<div className="flex items-center gap-4">
<nav className="hidden md:flex items-center gap-6 text-sm font-sans font-medium">
<a className="text-white font-bold border-b-2 border-white pb-1"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-300 hover:text-white transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/workspace-members'); }}>Members</a>
<a className="text-slate-300 hover:text-white transition-colors"  onClick={(e) => { e.preventDefault(); navigate('/workspace-settings'); }}>Settings</a>
</nav>
<div className="w-8 h-8 rounded-full overflow-hidden border border-white/20">
<img alt="Profile" data-alt="close-up portrait of a professional man in a business setting with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KotK2j6FlwXg-Kw8HRMRDGFCq02YXgpJmnwfCm5x5eJeB7ucSwune5vYFGgWxUkunQvY7gy-5ERSyY_st5wFCVHVzDzaWrMkUKq_IMf9iG_I-DcdSvGvxs03S9zs5UcXesxEQfXdtxnu_5Cio5YJS1uXC9ZJIl7a2Z7wvfbOFuIMaG94aNGET60fOvfsYohwvRNzlzR5AUOkuLthxSfZCgrqn0eoRElOB4Av6Gn2FvpPjWnMOP_YXvjvx4M6KLmPY7JI5yCh28sg"/>
</div>
</div>
</header>
<div className="flex pt-12 min-h-screen">
{/*  NavigationDrawer (Desktop)  */}
<aside className="hidden md:flex flex-col h-[calc(100vh-48px)] w-64 border-r border-slate-200 bg-slate-50 p-4 gap-2 sticky top-12">
<div className="mb-4 px-2">
<span className="text-blue-600 font-bold font-sans text-sm">Productive Flow</span>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm rounded-md" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="dashboard">dashboard</span>
                    Boards
                </a>
<a className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 font-semibold rounded-md font-sans text-sm" href="#">
<span className="material-symbols-outlined text-blue-700" data-icon="group">group</span>
                    Members
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm rounded-md" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="settings">settings</span>
                    Workspace Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm rounded-md" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="calendar_today">calendar_today</span>
                    Calendar
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm rounded-md" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="timeline">timeline</span>
                    Timeline
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-200/50 transition-all font-sans text-sm rounded-md" href="#">
<span className="material-symbols-outlined text-slate-500" data-icon="analytics">analytics</span>
                    Dashboard
                </a>
</nav>
</aside>
{/*  Main Content (Canvas)  */}
<main className="flex-1 p-4 md:p-8 flex items-center justify-center bg-[#F7F8F9]">
{/*  Invite Modal Container  */}
<div className="w-full max-w-xl bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-in fade-in zoom-in duration-300">
{/*  Modal Header  */}
<div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="person_add">person_add</span>
</div>
<div>
<h1 className="font-headline-md text-on-surface">Invite to Workspace</h1>
<p className="font-label-sm text-outline">Collaborate with your team members</p>
</div>
</div>
<button className="text-outline hover:text-on-surface transition-colors">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
{/*  Modal Body  */}
<div className="p-6 space-y-6">
{/*  Email Input Section  */}
<div className="space-y-3">
<label className="block font-label-bold text-on-surface-variant">Email addresses or names</label>
<div className="relative">
<textarea className="w-full min-h-[100px] p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-body-md placeholder:text-outline" placeholder="e.g. sarah@company.com, mike@agency.io..."></textarea>
<div className="absolute bottom-3 right-3 flex gap-2">
<span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-[11px] font-bold border border-blue-100 uppercase tracking-wider">3 addresses</span>
</div>
</div>
</div>
{/*  Role Selection  */}
<div className="space-y-3">
<label className="block font-label-bold text-on-surface-variant">Select workspace role</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
{/*  Admin Role  */}
<label className="relative flex flex-col p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group">
<input className="sr-only peer" name="role" type="radio" value="admin"/>
<div className="peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary absolute inset-0 rounded-lg pointer-events-none"></div>
<span className="font-label-bold text-on-surface mb-1">Admin</span>
<span className="text-[11px] text-outline leading-tight">Full control over settings and members.</span>
</label>
{/*  Member Role (Default)  */}
<label className="relative flex flex-col p-3 border border-primary ring-1 ring-primary rounded-lg cursor-pointer bg-blue-50/30 transition-colors group">
<input checked="" className="sr-only peer" name="role" type="radio" value="member"/>
<div className="peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary absolute inset-0 rounded-lg pointer-events-none"></div>
<span className="font-label-bold text-primary mb-1">Member</span>
<span className="text-[11px] text-on-secondary-container leading-tight">Can create boards and edit tasks.</span>
</label>
{/*  Observer Role  */}
<label className="relative flex flex-col p-3 border border-outline-variant rounded-lg cursor-pointer hover:bg-slate-50 transition-colors group">
<input className="sr-only peer" name="role" type="radio" value="observer"/>
<div className="peer-checked:border-primary peer-checked:ring-1 peer-checked:ring-primary absolute inset-0 rounded-lg pointer-events-none"></div>
<span className="font-label-bold text-on-surface mb-1">Observer</span>
<span className="text-[11px] text-outline leading-tight">View-only access to boards and activity.</span>
</label>
</div>
</div>
{/*  Share Link Section  */}
<div className="p-4 bg-surface-container rounded-xl space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg" data-icon="link">link</span>
<span className="font-label-bold text-on-surface">Share with a link</span>
</div>
<span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Active</span>
</div>
<p className="text-[11px] text-outline px-1">Anyone with the link can join as a Member. You can disable this anytime.</p>
<div className="flex gap-2">
<input className="flex-1 bg-white border border-outline-variant rounded-lg px-3 py-2 text-sm font-mono text-on-surface-variant overflow-ellipsis" readOnly="" type="text" value="https://flow.workspace.com/join/7a2-f92k-l0p"/>
<button className="bg-white border border-outline-variant hover:bg-slate-50 text-on-surface px-4 py-2 rounded-lg transition-colors font-label-bold flex items-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="content_copy">content_copy</span>
<span>Copy</span>
</button>
</div>
</div>
</div>
{/*  Modal Footer  */}
<div className="px-6 py-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
<button className="text-on-surface-variant font-label-bold hover:text-on-surface transition-colors px-4 py-2">
                        Cancel
                    </button>
<button className="bg-primary hover:bg-primary/90 text-white font-label-bold px-8 py-2.5 rounded-lg shadow-sm active:scale-95 transition-all flex items-center gap-2">
                        Send Invitations
                        <span className="material-symbols-outlined text-lg" data-icon="send">send</span>
</button>
</div>
</div>
</main>
</div>
{/*  BottomNavBar (Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-slate-900 border-t border-slate-200 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] pb-safe">
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-medium font-sans">Home</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[10px] font-medium font-sans">Search</span>
</a>
<a className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400" href="#">
<span className="material-symbols-outlined" data-icon="add_box" style={{"fontVariationSettings":"'FILL' 1"}}>add_box</span>
<span className="text-[10px] font-medium font-sans">Create</span>
</a>
<a className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-500 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[10px] font-medium font-sans">Notifications</span>
</a>
</nav>

    </>
  );
};

export default InviteToWorkspace;
