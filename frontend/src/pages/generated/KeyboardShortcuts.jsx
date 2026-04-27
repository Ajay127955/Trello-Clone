const KeyboardShortcuts = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Screen Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Velocity</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Master the interface through rapid commands</p>
        </div>
        <button className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:border-blue-600 transition-all shadow-sm">
          <span className="material-symbols-outlined text-sm">print</span>
          Export Protocol
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Navigation Category */}
        <section className="col-span-12 lg:col-span-8 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-blue-600">explore</span>
            </div>
            <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Navigation</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
            {[
              { label: 'Global Command Palette', keys: ['⌘', 'K'] },
              { label: 'Jump to My Boards', keys: ['G', 'B'] },
              { label: 'Toggle Interface Sidebar', keys: ['['] },
              { label: 'Return to Command Center', keys: ['G', 'H'] },
              { label: 'Broadcast Notifications', keys: ['N'] },
              { label: 'Iterate Previous View', keys: ['⌘', '['] }
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-4 border-b border-slate-50 dark:border-slate-800 group hover:bg-slate-50 dark:hover:bg-slate-950 px-4 rounded-xl transition-all">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{item.label}</span>
                <div className="flex gap-2">
                  {item.keys.map(key => (
                    <span key={key} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-black text-slate-900 dark:text-white shadow-sm">{key}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tip Card */}
        <section className="col-span-12 lg:col-span-4 bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-blue-400" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              <span className="font-black text-[10px] uppercase tracking-widest text-blue-200">Neural Shortcut</span>
            </div>
            <p className="text-lg font-bold leading-relaxed mb-10 text-blue-50">
              Press <span className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-white mx-1">?</span> anywhere in the nexus to toggle this protocol guide instantly.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-video relative">
              <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800" alt="Keyboard" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Card Operations */}
        <section className="col-span-12 md:col-span-6 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-emerald-600">grid_view</span>
            </div>
            <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Node Operations</h3>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Initialize New Node', keys: ['C'] },
              { label: 'Archive Active Node', keys: ['X'] },
              { label: 'Shift Node Vertical', keys: ['⌘', '↑/↓'] },
              { label: 'Edit Metadata Inline', keys: ['E'] }
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-4 border-b border-slate-50 dark:border-slate-800 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950 transition-all">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{item.label}</span>
                <div className="flex gap-2">
                  {item.keys.map(key => (
                    <span key={key} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-black text-slate-900 dark:text-white shadow-sm">{key}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Collaboration */}
        <section className="col-span-12 md:col-span-6 bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/5 flex items-center justify-center">
              <span className="material-symbols-outlined text-purple-600">hub</span>
            </div>
            <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Collaboration</h3>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Synchronize Self to Node', keys: ['Space'] },
              { label: 'Broadcast Invitation', keys: ['⌘', 'I'] },
              { label: 'Open Comms Stream', keys: ['M'] },
              { label: 'Toggle Classifiers', keys: ['L'] }
            ].map(item => (
              <div key={item.label} className="flex justify-between items-center py-4 border-b border-slate-50 dark:border-slate-800 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-950 transition-all">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">{item.label}</span>
                <div className="flex gap-2">
                  {item.keys.map(key => (
                    <span key={key} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-[10px] font-black text-slate-900 dark:text-white shadow-sm">{key}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <div className="col-span-12 mt-12 bg-slate-50 dark:bg-slate-950 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-12 text-center">
          <h4 className="font-headline-xl text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Need Advanced Protocol Support?</h4>
          <p className="text-slate-500 dark:text-slate-400 font-bold mb-10 max-w-2xl mx-auto leading-relaxed">Our operational specialists are on standby 24/7 to help you optimize your neural workflow and master the interface.</p>
          <div className="flex justify-center gap-6">
            <button className="px-10 py-4 border border-slate-200 dark:border-slate-700 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:bg-white dark:hover:bg-slate-800 transition-all">Documentation</button>
            <button className="px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Contact Core Support</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
