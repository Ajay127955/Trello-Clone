import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EnterpriseSecurity = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12 h-full flex flex-col">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
        <div>
          <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
            <span>Enterprise Admin</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-blue-600">Security Protocols</span>
          </nav>
          <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter text-balance">Sentinel Protocol.</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">Configure organization-wide security protocols and data integrity restrictions.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-900 dark:text-white shadow-sm hover:shadow-lg transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">history</span>
            Audit Log
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-2xl hover:shadow-blue-600/20 transition-all active:scale-95 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">save</span>
            Synchronize
          </button>
        </div>
      </div>

      {/* Security Status Ribbon */}
      <div className="mb-16 bg-emerald-500 px-10 py-8 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-500/20">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-xl">
            <span className="material-symbols-outlined text-3xl">shield_locked</span>
          </div>
          <div>
            <p className="font-black text-[10px] uppercase tracking-[0.2em] text-emerald-100 mb-1">Global Security Status</p>
            <p className="font-black text-2xl tracking-tighter">System Fortified. No Active Threats.</p>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-100 mb-1">Encryption</p>
            <p className="text-xl font-black tracking-tight">AES-256</p>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-100 mb-1">Protocol</p>
            <p className="text-xl font-black tracking-tight">TLS 1.3</p>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        {/* Visibility Controls */}
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <h2 className="font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">Board Discovery Protocol</h2>
            </div>

            <div className="space-y-12">
              {[
                { title: 'Restrict Public Board Creation', desc: 'Prevent workspace members from making boards visible to global indexers.', active: true },
                { title: 'Member Search Visibility', desc: 'Hide member profiles from external neural search engines.', active: true },
                { title: 'Guest Access Auto-Revoke', desc: 'Automatically decommission guests inactive for more than 30 cycles.', active: false }
              ].map((setting, i) => (
                <div key={i} className="flex items-start justify-between gap-10">
                  <div className="flex-1">
                    <h4 className="font-black text-lg text-slate-900 dark:text-white mb-2 tracking-tight">{setting.title}</h4>
                    <p className="text-sm font-medium text-slate-400 italic leading-relaxed">{setting.desc}</p>
                  </div>
                  <div className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer ${setting.active ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'}`}>
                    <div className={`w-6 h-6 bg-white rounded-full shadow-lg transition-transform ${setting.active ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-50 dark:border-slate-800">
              <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-800/50">
                <span className="material-symbols-outlined text-blue-600">info</span>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Governance update will synchronize 1,240 existing boards instantly.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-blue-600 p-12 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 translate-x-10 -translate-y-10">
              <span className="material-symbols-outlined text-[240px]">security</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-black text-3xl tracking-tighter mb-4">Run Security Audit</h3>
                <p className="text-blue-200 font-medium italic">Execute a deep-scan of all workspace nodes to identify latent vulnerabilities and external data leaks.</p>
              </div>
              <button className="bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
                Initialize Scan
              </button>
            </div>
          </div>
        </div>

        {/* Content Restrictions */}
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-rose-50 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-600">
                <span className="material-symbols-outlined">attachment</span>
              </div>
              <h2 className="font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">Content Restrictions</h2>
            </div>
            
            <div className="space-y-10">
              <div>
                <label className="font-black text-[10px] uppercase tracking-widest text-slate-400 block mb-4">Max Payload Size</label>
                <select className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 font-black text-sm text-slate-900 dark:text-white appearance-none cursor-pointer focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>UNLIMITED</option>
                  <option>250 MB (STANDARD)</option>
                  <option selected>100 MB (SECURE)</option>
                  <option>10 MB (STRICT)</option>
                </select>
              </div>

              <div>
                <label className="font-black text-[10px] uppercase tracking-widest text-slate-400 block mb-4">File Type Quarantine</label>
                <div className="flex flex-wrap gap-2">
                  {['.exe', '.zip', '.js', '.vbs', '.py'].map(ext => (
                    <span key={ext} className="px-4 py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-black flex items-center gap-2 border border-rose-100 dark:border-rose-900/50">
                      {ext}
                      <span className="material-symbols-outlined text-sm cursor-pointer hover:scale-125 transition-transform">close</span>
                    </span>
                  ))}
                  <button className="px-4 py-2 border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-full text-[10px] font-black text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">+ ADD</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-600">
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <h2 className="font-black text-sm uppercase tracking-widest text-slate-900 dark:text-white">Access Governance</h2>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between p-2">
                <div className="flex-1">
                  <h4 className="font-black text-slate-900 dark:text-white tracking-tight mb-1">Domain Enforcement</h4>
                  <p className="text-[10px] font-medium text-slate-400 italic">Only @enterprise.com</p>
                </div>
                <div className="w-12 h-6 bg-blue-600 rounded-full p-1 flex justify-end items-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full p-6 bg-slate-50 dark:bg-slate-950 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                <p className="font-black text-[9px] uppercase tracking-widest text-slate-400 mb-4">Invitation Policy</p>
                <div className="space-y-3">
                  {['All Members', 'Admins Only', 'Owners Only'].map((opt, i) => (
                    <label key={i} className="flex items-center gap-4 cursor-pointer group">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${i === 1 ? 'border-blue-600 bg-blue-600' : 'border-slate-200 dark:border-slate-800 group-hover:border-blue-600'}`}>
                        {i === 1 && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </div>
                      <span className={`text-xs font-black uppercase tracking-widest ${i === 1 ? 'text-blue-600' : 'text-slate-400'}`}>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EnterpriseSecurity;
