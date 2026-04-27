const PowerUpDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-12 pb-24 md:pb-12">
      {/*  Hero Breadcrumb & Header  */}
      <section className="mb-20">
        <nav className="flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
          <button onClick={() => navigate('/power-ups-directory')} className="hover:text-blue-600 transition-colors">Directory</button>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-blue-600">Communication</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-slate-900 dark:text-white">Slack</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          <div className="flex items-start gap-8">
            <div className="w-28 h-28 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center shadow-2xl shrink-0 rotate-3">
              <span className="material-symbols-outlined text-6xl text-white">chat</span>
            </div>
            <div>
              <h1 className="font-headline-xl text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Slack.</h1>
              <p className="font-body-lg text-xl text-slate-400 font-medium max-w-xl leading-relaxed italic">
                Bring communication and orchestration together. Synthesize real-time updates without leaving the nexus.
              </p>
              <div className="flex items-center gap-8 mt-8">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
                  ))}
                  <span className="text-slate-400 font-black text-[9px] uppercase tracking-widest ml-4">4.9 / 2.4K REVIEWS</span>
                </div>
                <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
                <span className="px-5 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-widest rounded-xl border border-blue-100 dark:border-blue-800/50">Enterprise Protocol</span>
              </div>
            </div>
          </div>
          <button className="bg-slate-900 dark:bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 transition-all shadow-2xl hover:shadow-blue-600/20 active:scale-95 self-start md:self-center">
            <span className="material-symbols-outlined text-xl">add_box</span>
            Inject into Board
          </button>
        </div>
      </section>

      {/*  Content Grid  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/*  Gallery  */}
          <div className="grid grid-cols-12 gap-6 h-[450px]">
            <div className="col-span-8 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <img alt="Slack Integration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJP0mXQseAIahEaFdM9RSNRb2E9ueiR_x4Fr56Fg494UjwctqOYe1GmO7glDIWWFGTZ5ctDlVyeoo2r62YEIRFy9ht1wUqBEWY6pZYlqGybL_a5LS5xGEZgigrrs4ZfMI8o4HWmctzCcA0yi22gDhNVXUEMeTNGRk65H11tdJJn9g8SnW33ePSgizdPFCz7T0vsQuwC3mU3JCSsMy7cUwHlNUa7tFT2KE7-XeJ_x8PRBHBh-LIesq0Fjz3iiU-d0NmwRSips2T1LX" />
            </div>
            <div className="col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-[1.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                <img alt="Team" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoA1Lr9xhkP6RwAGhE3swZSnIUujIRzB79di7wbEZX_qRHPHcsFOOw40iiB9qonVnIOwbZvDM1LJuQ-OGKP5mUVlrwpPr0xnfxlX0UNOTHrtSs11N7Ms2j6ZjaRHfEZgi1RTExjgE7usYy_wYg-GdG1GW5cxPIjKLIxaqqwoGQkq7IvBfhwYqxG0_S6ggnqdInNIjjjBLnZjCVYpvsPTprrsS_HJCN3HW8nEl0BzSowu-h7fqUEtVXsquE2V6FEKSKLb-eUMLyUEat" />
              </div>
              <div className="rounded-[1.5rem] overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
                <img alt="Mobile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9iwi91LCQQRrVqxe1q-BxApt5BMcG6wLmP73P8QtDzbBMkMrMA6csYrn-8pQhgBKFoHQc2FiW0A0KY99BHyRSCu_F4zqVnP-XQf6Tv6mpIhSOowaRg21leZj_fKH7gEHlDuLoLcliIhwWbFaKH8NHA1hNZP3t61E40qtac4XIxmyVDXP3d3va2lDT_3YrPoWV8RthK5fq6hhuq9ATacXfrdRzwM5D03J0msDOGu77VAkkuLU8CF_MRM5V69i0aO8vu7_hf0oHImga" />
              </div>
            </div>
          </div>

          {/*  Description  */}
          <div className="bg-white dark:bg-slate-900 p-12 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 className="font-headline-md text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">About Slack for TaskFlow</h2>
            <p className="font-body-lg text-lg text-slate-500 dark:text-slate-400 font-bold leading-relaxed mb-10">
              The Slack Power-Up for TaskFlow turns your boards into a hub of communication. Get relevant notifications from TaskFlow sent directly to your Slack channels, and turn Slack conversations into TaskFlow cards instantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: 'notifications_active', title: 'Interactive Notifications', desc: 'Reply to comments directly from Slack.' },
                { icon: 'link', title: 'Smart Links', desc: 'Paste links in Slack to see rich board previews.' },
                { icon: 'quick_reference_all', title: 'Quick Card Creation', desc: 'Convert any message into a task with one click.' },
                { icon: 'automation', title: 'Auto-Syncing', desc: 'Keep status and assignees updated everywhere.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*  Setup Bento  */}
          <div>
            <h2 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">How to setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'Enable Power-Up', desc: 'Click "Add to Board" and select your workspace.' },
                { step: '02', title: 'Authorize Slack', desc: 'Connect your account and choose channels.' },
                { step: '03', title: 'Configure Alerts', desc: 'Set rules for which actions trigger alerts.' }
              ].map((s, i) => (
                <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800/50">
                  <span className="text-4xl font-black text-blue-600/20 mb-6 block">{s.step}</span>
                  <h4 className="font-black text-slate-900 dark:text-white mb-2 tracking-tight">{s.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-bold leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*  Sidebar Meta  */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-6">Pricing</h3>
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">$0</span>
                <span className="text-slate-400 font-bold">/mo</span>
              </div>
              <p className="text-sm text-slate-500 font-bold mt-2">Free for up to 50 alerts/day</p>
            </div>
            <div className="space-y-4 mb-10">
              {['Unlimited Previews', 'Direct Creation', 'Link Unfurling'].map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
                  {f}
                </div>
              ))}
            </div>
            <button className="w-full py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              Get Started
            </button>
          </div>

          <div className="bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-9xl text-white">bolt</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight relative z-10">Ready to automate?</h3>
            <p className="text-slate-400 font-bold mb-10 leading-relaxed relative z-10">
              Combine Slack with Butler for advanced automated workflows.
            </p>
            <button onClick={() => navigate('/automation-butler')} className="w-full py-4 bg-white/10 text-white font-black text-[10px] uppercase tracking-widest rounded-xl backdrop-blur-md border border-white/10 hover:bg-white hover:text-slate-900 transition-all relative z-10">
              Learn Butler
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerUpDetails;
