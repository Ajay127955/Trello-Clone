import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Premium Hero Section */}
      <section className="relative bg-slate-900 dark:bg-blue-600 rounded-[3rem] overflow-hidden py-24 px-10 mb-16 shadow-2xl">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ffffff_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#ffffff_0%,transparent_50%)]"></div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h1 className="font-headline-xl text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">Support Terminal</h1>
          <form onSubmit={handleSearch} className="relative group mb-10">
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-20 pl-16 pr-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white placeholder-white/40 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-0 transition-all font-bold text-lg" 
              placeholder="Search documentation..." 
              type="text" 
            />
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-white/50 text-3xl group-focus-within:text-blue-600 transition-colors">search</span>
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl active:scale-95">
              Submit
            </button>
          </form>
          <div className="flex flex-wrap justify-center gap-8">
            {['API Docs', 'Billing', 'Shortcuts'].map(term => (
              <button key={term} onClick={() => setSearchQuery(term)} className="text-white/60 font-black text-[10px] uppercase tracking-widest hover:text-white transition-all border-b border-white/20 hover:border-white">
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Foundations', desc: 'New to the system? Master the core concepts of boards and automation.', icon: 'rocket_launch', color: 'blue' },
          { title: 'Governance', desc: 'Manage enterprise compliance, billing, and team access policies.', icon: 'shield', color: 'emerald' },
          { title: 'Dev Ops', desc: 'Technical documentation for API integrations and custom webhooks.', icon: 'terminal', color: 'rose' }
        ].map(cat => (
          <div key={cat.title} className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all cursor-pointer group">
            <div className={`w-16 h-16 bg-${cat.color}-500/10 text-${cat.color}-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
              <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
            </div>
            <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">{cat.title}</h3>
            <p className="font-bold text-[11px] text-slate-400 uppercase tracking-widest mb-10 leading-relaxed">{cat.desc}</p>
            <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-widest">
              Browse Articles
              <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
