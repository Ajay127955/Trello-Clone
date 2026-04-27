import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterpriseSecurity = () => {
  const navigate = useNavigate();
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#091E42] dark:bg-slate-950 text-white dark:text-blue-400 font-sans text-sm font-medium tracking-tight docked full-width top-0 z-50 border-b border-white/10 dark:border-slate-800 shadow-sm flex justify-between items-center w-full px-4 h-12 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined style_universal_hover p-1 rounded cursor-pointer" data-icon="grid_view">grid_view</span>
<span className="text-lg font-black text-white dark:text-blue-500">TaskFlow Enterprise</span>
<nav className="hidden md:flex gap-1 ml-4">
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">Workspace Boards</a>
<a className="text-slate-300 hover:text-white px-3 py-1.5 transition-colors" href="#">AI Command Center</a>
<a className="text-white bg-white/10 rounded-md px-3 py-1.5" href="#">Enterprise Admin</a>
</nav>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-slate-300 cursor-pointer" data-icon="search">search</span>
<span className="material-symbols-outlined text-slate-300 cursor-pointer" data-icon="notifications">notifications</span>
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-[10px] border border-white/20">JD</div>
</div>
</header>
{/*  Sidebar / NavigationDrawer  */}
<aside className="bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 h-full w-64 fixed left-0 top-12 hidden md:flex flex-col pt-4 pb-20">
<div className="px-6 mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-white">
<span className="material-symbols-outlined" data-icon="corporate_fare">corporate_fare</span>
</div>
<div>
<h3 className="text-sm font-bold text-[#091E42] dark:text-white">Enterprise Global</h3>
<p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Admin Console</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Workspace Boards
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
                AI Command Center
            </a>
<a className="flex items-center gap-3 px-6 py-3 bg-[#E6FCFF] dark:bg-blue-900/30 text-[#0065FF] dark:text-blue-300 border-r-4 border-[#0065FF] font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</span>
                Enterprise Admin
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
                Team Management
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
                Analytics
            </a>
<a className="flex items-center gap-3 px-6 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-sans text-sm font-semibold" href="#">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
                Automation Settings
            </a>
</nav>
<div className="px-6 mt-auto border-t border-slate-200 pt-4">
<div className="p-3 bg-secondary-container/20 rounded-xl">
<p className="text-[10px] font-bold text-on-secondary-container mb-1">SECURITY STATUS</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-semibold text-on-secondary-container">Shield Active</span>
</div>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="md:ml-64 mt-12 pb-24 md:pb-8">
<div className="max-w-6xl mx-auto p-md md:p-lg">
{/*  Page Header  */}
<div className="mb-lg flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
<span className="text-primary font-label-bold uppercase tracking-widest text-[10px]">Governance &amp; Compliance</span>
</div>
<h1 className="font-headline-xl text-on-surface">Security Controls</h1>
<p className="font-body-lg text-on-surface-variant max-w-2xl">Configure organization-wide security protocols, visibility rules, and content restrictions to ensure enterprise data integrity.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface font-label-bold hover:bg-surface-dim transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="history">history</span>
                        Audit Log
                    </button>
<button className="px-4 py-2 rounded-xl bg-primary text-white font-label-bold hover:opacity-90 shadow-md flex items-center gap-2">
<span className="material-symbols-outlined text-lg" data-icon="save">save</span>
                        Save Changes
                    </button>
</div>
</div>
{/*  Settings Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Visibility Controls  */}
<div className="md:col-span-8 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="visibility">visibility</span>
<h2 className="font-headline-md">Board Visibility &amp; Discovery</h2>
</div>
<div className="space-y-6">
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="font-label-bold text-on-surface">Restrict Public Board Creation</h4>
<p className="text-body-md text-on-surface-variant">Prevent workspace members from making boards visible to anyone on the internet.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h4 className="font-label-bold text-on-surface">Member Search Visibility</h4>
<p className="text-body-md text-on-surface-variant">Hide member profiles from external search engines and discovery tools.</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
<div className="mt-md pt-md border-t border-outline-variant/20">
<div className="bg-primary-container/10 p-3 rounded-lg flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-md" data-icon="info">info</span>
<p className="text-label-sm text-primary">Enabling these controls will immediately update visibility settings for all 1,240 existing boards.</p>
</div>
</div>
</div>
{/*  Attachment Restrictions  */}
<div className="md:col-span-4 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="attachment">attachment</span>
<h2 className="font-headline-md">Content &amp; Files</h2>
</div>
<div className="space-y-4">
<div>
<label className="font-label-bold block mb-2">Max Attachment Size</label>
<select className="w-full bg-surface border border-outline-variant rounded-lg p-2 text-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option>Unlimited</option>
<option>250 MB (Standard)</option>
<option selected="">100 MB (Secure)</option>
<option>10 MB (Strict)</option>
</select>
</div>
<div className="pt-2">
<h4 className="font-label-bold mb-2">Disallowed File Types</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-error-container text-on-error-container rounded text-label-sm flex items-center gap-1">.exe <span className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</span></span>
<span className="px-2 py-1 bg-error-container text-on-error-container rounded text-label-sm flex items-center gap-1">.zip <span className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</span></span>
<span className="px-2 py-1 bg-error-container text-on-error-container rounded text-label-sm flex items-center gap-1">.js <span className="material-symbols-outlined text-[14px] cursor-pointer" data-icon="close">close</span></span>
<button className="px-2 py-1 border border-dashed border-outline-variant rounded text-label-sm text-on-surface-variant hover:bg-surface-variant">+ Add</button>
</div>
</div>
</div>
</div>
{/*  Power-Up Whitelisting  */}
<div className="md:col-span-6 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="extension">extension</span>
<h2 className="font-headline-md">Power-Up Management</h2>
</div>
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold">WHITELIST MODE</span>
</div>
<p className="text-body-md text-on-surface-variant mb-4">Only approved integrations can be added to organization boards.</p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-surface rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#F1F6FF] flex items-center justify-center">
<img className="w-6 h-6 object-contain" data-alt="minimalist Slack logo icon on light background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiA_3MlIn8NKlI4CvA6UT0j3i8bGf8NgwLullRlWHMrBwtntgRNy3yDD_5CcNV33Q10PdoGHxe-MTNo7Ru-NhHQmRFlLMGXsudzcILAYtK-t23B6D-vzQDMl2g-sFybHUFoAW3YtVzP9AwL6qihcfvOFKwvPCNIKhQsMZB9c8Iofnn-G3G-60MZzRuCUnhs7Z4P48V72wnnETwmDqrHA5ideSw9Fr6NfnVGOVTd1SwsZI1xVk7lOo44zb8F-wGyNpIYEfNX9Va3aZC"/>
</div>
<div>
<p className="font-label-bold">Slack Enterprise</p>
<p className="text-label-sm text-on-surface-variant">Communication &amp; Alerts</p>
</div>
</div>
<span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface rounded-xl border border-outline-variant/20 hover:border-primary/30 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#F1F6FF] flex items-center justify-center">
<img className="w-6 h-6 object-contain" data-alt="clean Google Drive logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJSWPdhXPkFUZFGSgmqZjMPt_lOci1q0vPo2b11DADn1kHIK6fja-a_7Gz6-jr8wRwq5CmeIrzqbpmNq7gXKOnz2TjFQG5mNQdMmjz5XMAQqHDMDuOWq8-w3Wob3gYfsdEwtlVIRPTQVEJNTQyGAZ9RjgseR-GBjTG6T-h_ST3af3vLNJrDD8FawzlWjjClif6OYfS9QBZI68RQVDxov0BuDmjwsmFVVWrrKI8lJjGm-VBGLJKjf-8CtG28AhuJvW0F7zhFEN2CWVn"/>
</div>
<div>
<p className="font-label-bold">Google Drive</p>
<p className="text-label-sm text-on-surface-variant">Cloud Storage</p>
</div>
</div>
<span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<button className="w-full py-2 border border-dashed border-primary/40 rounded-xl text-primary font-label-bold hover:bg-primary-container/5">
                            + Approve New Power-Up
                        </button>
</div>
</div>
{/*  Member Invitation Permissions  */}
<div className="md:col-span-6 bg-surface-container-lowest p-md rounded-xl border border-outline-variant/30 shadow-sm flex flex-col">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="person_add">person_add</span>
<h2 className="font-headline-md">Invitation Permissions</h2>
</div>
<div className="flex-1 space-y-4">
<div className="p-4 bg-surface rounded-xl border border-outline-variant/20">
<label className="font-label-bold block mb-3">Who can invite guests to boards?</label>
<div className="space-y-2">
<label className="flex items-center gap-3 cursor-pointer">
<input className="w-4 h-4 text-primary focus:ring-primary" name="invite" type="radio"/>
<span className="text-body-md">All workspace members</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input checked="" className="w-4 h-4 text-primary focus:ring-primary" name="invite" type="radio"/>
<span className="text-body-md">Workspace Admins only</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="w-4 h-4 text-primary focus:ring-primary" name="invite" type="radio"/>
<span className="text-body-md">Designated Board Owners</span>
</label>
</div>
</div>
<div className="flex items-start justify-between gap-4 p-2">
<div>
<h4 className="font-label-bold text-on-surface">Domain Restriction</h4>
<p className="text-body-md text-on-surface-variant">Only allow invitations to email addresses ending in <strong>@enterprise.com</strong></p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</div>
</div>
</div>
{/*  Security Recommendations (Full Width)  */}
<div className="md:col-span-12 bg-[#091E42] text-white p-lg rounded-xl flex flex-col md:flex-row items-center gap-lg relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10">
<span className="material-symbols-outlined text-[200px]" data-icon="security">security</span>
</div>
<div className="flex-1 relative z-10">
<h3 className="text-headline-md mb-2">Enhance Enterprise Security</h3>
<p className="text-body-lg text-slate-300">We noticed 42 boards have external members. Consider enabling "Guest Access Auto-Revoke" for accounts inactive for more than 30 days.</p>
</div>
<div className="relative z-10">
<button className="px-6 py-3 bg-white text-[#091E42] font-label-bold rounded-xl hover:bg-slate-100 transition-colors whitespace-nowrap shadow-xl">
                            Run Security Audit
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
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

export default EnterpriseSecurity;
