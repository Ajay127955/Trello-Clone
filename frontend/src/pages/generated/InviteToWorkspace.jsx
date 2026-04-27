import React from 'react';
import { useNavigate } from 'react-router-dom';

const InviteToWorkspace = () => {
  const navigate = useNavigate();
  const [role, setRole] = React.useState('member');

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Invite</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Deploy new nodes to the cluster</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        {/* Form Body */}
        <div className="p-10 space-y-12">
          {/* Email Input Section */}
          <div className="space-y-4">
            <label className="font-black text-[10px] text-slate-400 uppercase tracking-widest block px-2">Associates [Email or Handles]</label>
            <div className="relative group">
              <textarea 
                className="w-full min-h-[160px] p-8 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all font-bold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-700 resize-none" 
                placeholder="e.g. sarah@cluster.io, dev-ops@nexus.com..."
              ></textarea>
              <div className="absolute bottom-6 right-6 flex gap-2">
                <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-xl text-[10px] font-black border border-blue-600/10 uppercase tracking-widest shadow-sm">3 targets identified</span>
              </div>
            </div>
          </div>

          {/* Role Selection */}
          <div className="space-y-6">
            <label className="font-black text-[10px] text-slate-400 uppercase tracking-widest block px-2">Protocol Access Level</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { id: 'admin', label: 'Admin', desc: 'Full root access to all nodes.' },
                { id: 'member', label: 'Member', desc: 'Read/Write access for operations.' },
                { id: 'observer', label: 'Observer', desc: 'Read-only telemetry access.' }
              ].map(r => (
                <label key={r.id} onClick={() => setRole(r.id)} className={`relative flex flex-col p-8 rounded-[2rem] cursor-pointer transition-all border-2 ${role === r.id ? 'bg-blue-600/5 border-blue-600 shadow-2xl shadow-blue-600/10' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-blue-600/30'} group`}>
                  <input className="sr-only" name="role" type="radio" value={r.id} checked={role === r.id} readOnly />
                  <span className={`font-headline-md text-sm font-black uppercase tracking-tight mb-2 ${role === r.id ? 'text-blue-600' : 'text-slate-900 dark:text-white'}`}>{r.label}</span>
                  <span className="text-[10px] font-bold text-slate-400 leading-relaxed">{r.desc}</span>
                  {role === r.id && <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div>}
                </label>
              ))}
            </div>
          </div>

          {/* Share Link Section */}
          <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 space-y-6 relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500" style={{ fontVariationSettings: "'FILL' 1" }}>link</span>
                <span className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">External Access Link</span>
              </div>
              <span className="bg-emerald-500 text-white text-[8px] px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">Active</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 px-1 leading-relaxed">Anyone with this protocol link can join as a Member. You can revoke access anytime.</p>
            <div className="flex gap-4">
              <input 
                className="flex-1 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-6 py-4 text-[11px] font-mono font-black text-slate-900 dark:text-white overflow-ellipsis" 
                readOnly 
                type="text" 
                value="https://productive.flow/join/7a2-f92k-l0p" 
              />
              <button className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined text-sm">content_copy</span>
                Copy
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 py-8 bg-slate-50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="font-black text-[10px] text-slate-400 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-all px-6 py-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800">
            Cancel
          </button>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center gap-3">
            Dispatch Invitations
            <span className="material-symbols-outlined text-sm">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteToWorkspace;
