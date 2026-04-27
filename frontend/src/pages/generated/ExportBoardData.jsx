import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExportBoardData = () => {
  const navigate = useNavigate();
  const [includeComments, setIncludeComments] = React.useState(true);
  const [includeAttachments, setIncludeAttachments] = React.useState(false);
  const [anonymizeData, setAnonymizeData] = React.useState(false);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Archival</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Secure telemetry extraction and node backups</p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Export Options */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* JSON Export */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-blue-600/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-blue-600 text-3xl">data_object</span>
              </div>
              <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Protocol JSON</h3>
              <p className="text-[11px] font-bold text-slate-400 leading-relaxed mb-10 uppercase tracking-widest">Full metadata portability. 1:1 Schema fidelity.</p>
              <button className="w-full py-5 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Extract JSON</button>
            </div>

            {/* CSV Export */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-emerald-600/5 transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-emerald-600 text-3xl">table_chart</span>
              </div>
              <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">Matrix CSV</h3>
              <p className="text-[11px] font-bold text-slate-400 leading-relaxed mb-10 uppercase tracking-widest">Optimized for external analytics & reporting.</p>
              <button className="w-full py-5 border border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Extract CSV</button>
            </div>
          </div>

          {/* Configuration */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] overflow-hidden shadow-sm">
            <div className="p-10 border-b border-slate-50 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50">
              <h2 className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">Transmission Parameters</h2>
            </div>
            <div className="p-10 space-y-10">
              {[
                { id: 'comments', label: 'Include Comms Stream', desc: 'Internal discussion nodes and member updates.', state: includeComments, setter: setIncludeComments, icon: 'forum' },
                { id: 'attachments', label: 'Export Binary Blobs', desc: 'Secure links to hosted files. Increases packet size.', state: includeAttachments, setter: setIncludeAttachments, icon: 'cloud_download' },
                { id: 'anonymize', label: 'Anonymize Node Identities', desc: 'Replace real names with generic identifiers for privacy.', state: anonymizeData, setter: setAnonymizeData, icon: 'shield_person' }
              ].map(opt => (
                <div key={opt.id} className="flex items-center justify-between group">
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${opt.state ? 'bg-blue-600 text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}>
                      <span className="material-symbols-outlined text-xl">{opt.icon}</span>
                    </div>
                    <div>
                      <p className="font-headline-md text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">{opt.label}</p>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{opt.desc}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => opt.setter(!opt.state)}
                    className={`w-14 h-8 rounded-full transition-all relative ${opt.state ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-700'}`}
                  >
                    <div className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-all shadow-lg ${opt.state ? 'left-7' : 'left-1'}`}></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* History Sidebar */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl">history_edu</span>
            </div>
            <h2 className="font-headline-md text-sm font-black uppercase tracking-tight mb-10 relative z-10">Extraction Log</h2>
            <div className="space-y-6 relative z-10">
              {[
                { name: 'nexus_core_backup.json', size: '12.4 MB', date: 'Oct 24, 2026', status: 'Success' },
                { name: 'ops_matrix_v2.csv', size: '1.2 MB', date: 'Oct 12, 2026', status: 'Success' },
                { name: 'full_node_snapshot.json', size: '8.9 MB', date: 'Sep 30, 2026', status: 'Expired' }
              ].map((item, i) => (
                <div key={i} className={`p-6 rounded-2xl border transition-all ${item.status === 'Expired' ? 'border-white/5 opacity-50' : 'border-white/10 hover:border-blue-500/50 hover:bg-white/5 cursor-pointer'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[11px] font-black uppercase tracking-widest truncate max-w-[150px]">{item.name}</span>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${item.status === 'Success' ? 'bg-emerald-500' : 'bg-white/20'}`}>{item.status}</span>
                  </div>
                  <div className="flex items-center justify-between text-white/40">
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.date}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl overflow-hidden relative group">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-blue-200" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-blue-100">Security Protocol</span>
            </div>
            <p className="text-sm font-bold leading-relaxed text-blue-50">
              Backups are stored in our secure vault for 30 cycles. Ensure your local storage utilizes at least AES-256 encryption.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportBoardData;
