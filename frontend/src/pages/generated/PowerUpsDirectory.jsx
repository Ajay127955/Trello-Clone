import React from 'react';
import { useNavigate } from 'react-router-dom';

const PowerUpsDirectory = () => {
    const navigate = useNavigate();
    const [installed, setInstalled] = React.useState(['GitHub', 'Calendar']);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [activeCategory, setActiveCategory] = React.useState('Featured');

    const toggleInstall = (name) => {
        setInstalled(prev => 
            prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
        );
    };

    const categories = [
        { name: 'Featured', icon: 'star' },
        { name: 'Analytics', icon: 'analytics' },
        { name: 'Communication', icon: 'forum' },
        { name: 'Developer Tools', icon: 'developer_board' },
        { name: 'File Management', icon: 'category' }
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/*  Category Sidebar  */}
            <aside className="w-full lg:w-64 shrink-0 h-fit lg:sticky lg:top-24">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="mb-8">
                        <h2 className="font-headline-sm text-lg font-black text-slate-900 dark:text-white mb-1 tracking-tight">Directory</h2>
                        <p className="font-label-sm text-[10px] text-slate-500 font-black uppercase tracking-widest">Connect your tools</p>
                    </div>
                    <nav className="space-y-1">
                        {categories.map((cat) => (
                            <button 
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-sm font-bold ${
                                    activeCategory === cat.name 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                            >
                                <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                                {cat.name}
                            </button>
                        ))}
                        
                        <div className="pt-8 mb-2">
                             <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] px-4">Resources</p>
                        </div>
                        <button onClick={() => navigate('/automation-butler')} className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all text-sm font-bold">
                            <span className="material-symbols-outlined text-xl">bolt</span>
                            Automation
                        </button>
                        <button onClick={() => navigate('/help-center')} className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all text-sm font-bold">
                            <span className="material-symbols-outlined text-xl">help</span>
                            Help Center
                        </button>
                    </nav>
                </div>
            </aside>

            {/*  Main Content  */}
            <main className="flex-1 min-w-0">
                {/*  Header Section  */}
                <div className="mb-12">
                    <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Enhance your workflow</h1>
                    <p className="font-body-lg text-lg text-slate-500 dark:text-slate-400 font-bold max-w-2xl leading-relaxed">Connect your favorite tools to ProductiveFlow and turn your boards into a unified workstation.</p>
                </div>

                {/*  Featured Banner Bento  */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="md:col-span-2 relative h-80 rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-slate-100 dark:border-slate-800">
                        <img alt="Collaboration" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTJPbHqXPBo1ZzOADVZiJMIfO_5VroqBK5SnXsGdUL02HVVqtaUaHm720BlF-RKa4iVG_gCrf_CIV8hvnqqC4vmua6rJJUlTaimTzj4wzwvxozQkWWVOCaZ-BayepnVxJl4OtouTxfZ3LcnZUVFtV7EygHa-Kacu2CBaWjf9gpyH6Kl5QTF_BlRefN3QItC3cm__RA_18wHsfUspq5S3ubbtU-aeA1HuRQv1JPig-IbYu7CnKZ0B2nc5nvgOO_8ZwvkbppPBO2ZMjQ" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-center p-12">
                            <span className="inline-block px-4 py-1.5 bg-blue-600 text-white font-black text-[10px] rounded-full mb-6 w-fit tracking-[0.2em] shadow-lg shadow-blue-600/40">FEATURED</span>
                            <h2 className="text-white text-4xl font-black mb-4 tracking-tight">Slack Integration</h2>
                            <p className="text-slate-200 text-lg font-bold max-w-xs mb-8 opacity-90 leading-relaxed">Manage tasks directly from Slack channels.</p>
                            <button onClick={() => toggleInstall('Slack')} className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black text-sm hover:bg-blue-50 transition-all w-fit shadow-2xl active:scale-95">
                                {installed.includes('Slack') ? 'Installed' : 'Connect Slack'}
                            </button>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-2xl shadow-blue-600/20 border border-white/10 relative overflow-hidden group">
                        <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
                             <span className="material-symbols-outlined text-9xl">auto_awesome</span>
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                                <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                            </div>
                            <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">AI Powered Automations</h3>
                            <p className="text-blue-100 text-base font-bold opacity-90 leading-relaxed">Unlock smart task suggestions and summaries.</p>
                        </div>
                        <button onClick={() => navigate('/automation-butler')} className="relative z-10 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest hover:translate-x-2 transition-transform w-fit bg-white/10 px-6 py-3 rounded-xl backdrop-blur-sm border border-white/10">
                            Explore Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>

                {/*  Search & Filters  */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
                    <div className="relative w-full sm:w-[450px] group">
                        <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">search</span>
                        <input 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] text-sm font-bold text-slate-900 dark:text-white focus:border-blue-500 focus:shadow-xl focus:shadow-blue-500/10 transition-all outline-none" 
                            placeholder="Search 142 Power-Ups..." 
                            type="text" 
                        />
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-8 py-4.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:border-blue-600 transition-all shadow-sm">
                            <span className="material-symbols-outlined text-lg">filter_list</span> Filter
                        </button>
                        <button className="flex-1 sm:flex-none px-8 py-4.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:border-blue-600 transition-all shadow-sm">
                            Popular <span className="material-symbols-outlined text-lg">expand_more</span>
                        </button>
                    </div>
                </div>

                {/*  Grid of Power-Ups  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    {[
                        { id: 'slack', name: 'Slack', desc: 'Bring communication and tasks together with the Slack Power-Up.', color: 'bg-indigo-600', icon: 'chat' },
                        { id: 'drive', name: 'Google Drive', desc: 'Attach files directly to cards and get real-time previews.', color: 'bg-blue-500', icon: 'add_to_drive' },
                        { id: 'github', name: 'GitHub', desc: 'Track pull requests, commits, and issues within your cards.', color: 'bg-slate-900', icon: 'code' },
                        { id: 'jira', name: 'Jira', desc: 'Connect your boards with Jira Software projects.', color: 'bg-blue-600', icon: 'architecture' },
                        { id: 'mailchimp', name: 'Mailchimp', desc: 'Manage email campaigns and subscriber lists.', color: 'bg-amber-400', icon: 'mail' },
                        { id: 'dropbox', name: 'Dropbox', desc: 'Quickly access and attach Dropbox folders and files.', color: 'bg-blue-600', icon: 'cloud_download' },
                        { id: 'butler', name: 'Butler', desc: 'Create powerful automation with buttons and rules.', color: 'bg-blue-700', icon: 'smart_toy' },
                        { id: 'calendar', name: 'Calendar', desc: 'Visualize all your card due dates in a beautiful calendar view.', color: 'bg-rose-500', icon: 'calendar_month' }
                    ].filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).map((p) => (
                        <div key={p.id} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col group h-full">
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-lg ${p.color}`}>
                                    <span className="material-symbols-outlined text-3xl text-white">{p.icon}</span>
                                </div>
                                <button 
                                    onClick={() => toggleInstall(p.name)}
                                    className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${
                                        installed.includes(p.name) 
                                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-500' 
                                        : 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white'
                                    }`}
                                >
                                    {installed.includes(p.name) ? 'Added' : 'Add'}
                                </button>
                            </div>
                            <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors tracking-tight">{p.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mb-8 flex-grow leading-relaxed tracking-tight">{p.desc}</p>
                            <div className="flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <span className="material-symbols-outlined text-xs text-amber-400" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
                                        <span className="text-[11px] font-black">4.8</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-400">
                                        <span className="material-symbols-outlined text-xs">download</span>
                                        <span className="text-[11px] font-black">2M+</span>
                                    </div>
                                </div>
                                <button onClick={() => navigate('/power-up-details')} className="material-symbols-outlined text-slate-300 hover:text-blue-600 transition-colors cursor-pointer">arrow_forward</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/*  Bottom Load More  */}
                <div className="mt-20 flex flex-col items-center gap-4">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Viewing 8 of 142 Power-Ups</p>
                    <button className="px-12 py-4.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-[1.5rem] font-black text-sm text-slate-900 dark:text-white hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all active:scale-95">
                        Load More Power-Ups
                    </button>
                </div>
            </main>

            {/*  Suggest Button  */}
            <button 
                onClick={() => alert('Suggest a new Power-Up coming soon!')}
                className="fixed right-8 bottom-24 w-16 h-16 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
            >
                <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
                <div className="absolute right-20 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-2xl">
                    Suggest New
                </div>
            </button>
        </div>
    );
};

export default PowerUpsDirectory;
