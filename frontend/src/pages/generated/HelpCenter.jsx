import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HelpCenter = () => {
  const navigate = useNavigate();
  return (
    <>

      {/*  TopAppBar  */}
      <header className="bg-white dark:bg-[#091E42] border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none fixed top-0 z-50 w-full">
        <div className="flex justify-between items-center w-full px-4 h-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#0065FF] dark:text-[#4C9AFF]" data-icon="grid_view">grid_view</span>
            <span className="text-xl font-black text-[#091E42] dark:text-white flex items-center gap-2">ProductiveFlow</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-[#0065FF] border-b-2 border-[#0065FF] pb-1 font-['Inter'] text-sm font-medium tracking-tight" href="#">Help Center</a>
            <a className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-['Inter'] text-sm font-medium tracking-tight px-2 py-1 rounded" onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
            <a className="text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors font-['Inter'] text-sm font-medium tracking-tight px-2 py-1 rounded" href="#">Community</a>
          </nav>
          <div className="flex items-center gap-3">
            <img alt="User Profile Avatar" className="w-8 h-8 rounded-full object-cover" data-alt="Professional headshot of a friendly support representative in a clean office environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAxRZdZHiIB2J6KwJrZlyBd_3jmd1gtDFocwOT86nTEuHD49gpwTziOIzaSzI1HcCr1Cp6b9sAObrL5ff87zUAY_wIpc1P7fym2SGkDMjIQC-5tXPynWcd9_AgM1xfy0XJw-CO33gHpxLXtXlxnX7bZIp4ImfQpN8cl3y-9zkz0rOf4IwDF47LcmB-l3Y0KzKBq_rXrB8h8PBwE47Ashc4POS6D3oKUMlFrjSfCEzVRRzN4N0meEaFQmskD7yA8uSYFBWIVPWs1Qdz" />
          </div>
        </div>
      </header>
      {/*  NavigationDrawer (Suppressed for focused Help Center experience per shell visibility rules, but structure exists)  */}
      <aside className="fixed left-0 top-12 bottom-0 flex flex-col p-3 space-y-1 h-full w-64 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#172B4D] hidden xl:flex">
        <div className="text-lg font-bold text-[#091E42] dark:text-slate-100 mb-4 px-2">Workspace Alpha</div>
        <div className="flex flex-col space-y-1">
          <button className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span>Boards</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5">
            <span className="material-symbols-outlined" data-icon="calendar_view_day">calendar_view_day</span>
            <span>Views</span>
          </button>
          <button className="flex items-center gap-3 px-3 py-2 text-slate-700 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-white/5 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5">
            <span className="material-symbols-outlined" data-icon="bolt">bolt</span>
            <span>Automation</span>
          </button>
          <button className="bg-[#E6FCFF] dark:bg-[#0065FF]/20 text-[#0065FF] dark:text-[#4C9AFF] font-semibold rounded-md flex items-center gap-3 px-3 py-2 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-[14px] leading-5">
            <span className="material-symbols-outlined" data-icon="help">help</span>
            <span>Help Center</span>
          </button>
        </div>
      </aside>
      <main className="xl:ml-64 pt-12 min-h-screen">
        {/*  Hero Section  */}
        <section className="relative bg-[#004fcb] overflow-hidden py-16 md:py-24 px-6">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ffffff_0%,transparent_50%)]"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-headline-xl text-headline-xl text-white mb-6">How can we help?</h1>
            <div className="relative max-w-2xl mx-auto">
              <input className="w-full h-14 pl-14 pr-6 rounded-xl bg-white border-none shadow-xl text-on-surface focus:ring-2 focus:ring-[#0065FF] transition-all font-body-md text-body-md" placeholder="Search for articles, guides, and more..." type="text" />
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" data-icon="search">search</span>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="text-primary-fixed font-label-sm text-label-sm">Popular:</span>
              <a className="text-white underline font-label-sm text-label-sm hover:text-secondary-fixed" href="#">Single Sign-On</a>
              <a className="text-white underline font-label-sm text-label-sm hover:text-secondary-fixed" href="#">Card Limits</a>
              <a className="text-white underline font-label-sm text-label-sm hover:text-secondary-fixed" href="#">Workspace Billing</a>
            </div>
          </div>
        </section>
        {/*  Category Grid  */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/*  Category Card 1  */}
            <div className="group bg-white p-lg rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-12 h-12 bg-primary-fixed rounded-lg flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary" data-icon="rocket_launch">rocket_launch</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Getting Started</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">New to ProductiveFlow? Learn the basics of boards, cards, and workflows.</p>
            </div>
            {/*  Category Card 2  */}
            <div className="group bg-white p-lg rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary" data-icon="payments">payments</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Account &amp; Billing</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Manage your subscription, invoices, and team workspace settings.</p>
            </div>
            {/*  Category Card 3  */}
            <div className="group bg-white p-lg rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-md group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary" data-icon="construction">construction</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">Troubleshooting</h3>
              <p className="text-on-surface-variant font-body-md text-body-md">Having technical issues? Find solutions for common bugs and errors.</p>
            </div>
          </div>
        </section>
        {/*  Promoted Articles (Asymmetric Bento Style)  */}
        <section className="bg-surface-container py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface">Promoted Articles</h2>
              <a className="text-primary font-label-bold text-label-bold flex items-center gap-1 hover:underline" href="#">
                View all <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {/*  Featured Article  */}
              <div className="md:col-span-8 bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:border-primary transition-colors cursor-pointer flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2 py-1 bg-[#E6FCFF] text-primary rounded font-label-sm text-label-sm mb-4">NEW GUIDE</span>
                  <h3 className="font-headline-xl text-headline-md text-on-surface mb-4">Mastering the Automation Engine</h3>
                  <p className="text-on-surface-variant font-body-lg text-body-lg mb-6">Discover how to eliminate repetitive tasks by building advanced Butler rules and command strings for your workspace.</p>
                </div>
                <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                  <img alt="Author" className="w-10 h-10 rounded-full" data-alt="Close up portrait of a male support engineer smiling, wearing glasses and a headset" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4_eX39eQ3HoPtcrM3GkhYy68EQZuhC8KLXTpSpMgzUEcTuyyUVIvjjPIDfITJNxLWWebBpQ-u4Xn6Gshtjp93sWHDzFO9dzsH3-5XMIQZj__Q89MQNyu3b669tTu2dIg-FHp1a7LGqrlzyplTdG62iqe6Dzjdz9tcQHFYOyKKK17CQQQITybC_6yXMJogZV2X_kSkMH9THOaswMeGhGJhk-1ivg9RzDWCseJzuAW0vKu-c-4bFcvKgs4HdG21VKRaVo_-l02VTWRZ" />
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">Written by Alex Rivera</p>
                    <p className="font-label-sm text-label-sm text-on-surface-variant">Last updated 2 days ago</p>
                  </div>
                </div>
              </div>
              {/*  Article List Column  */}
              <div className="md:col-span-4 flex flex-col gap-gutter">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                  <h4 className="font-headline-md text-body-lg font-bold text-on-surface mb-2">Changing your workspace visibility</h4>
                  <p className="text-on-surface-variant font-label-sm text-label-sm line-clamp-2">Control who can see your boards and workspace details...</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                  <h4 className="font-headline-md text-body-lg font-bold text-on-surface mb-2">Deleting a ProductiveFlow account</h4>
                  <p className="text-on-surface-variant font-label-sm text-label-sm line-clamp-2">Step-by-step guide to permanently removing your personal data...</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors cursor-pointer">
                  <h4 className="font-headline-md text-body-lg font-bold text-on-surface mb-2">Power-Ups and Integrations</h4>
                  <p className="text-on-surface-variant font-label-sm text-label-sm line-clamp-2">Connect Slack, Jira, and Google Drive to your boards...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Contact Support / Community Section  */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-[#091E42] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 text-white flex flex-col justify-center">
              <h2 className="font-headline-xl text-headline-xl mb-4">Still need help?</h2>
              <p className="text-slate-300 font-body-lg text-body-lg mb-8">Our support team is available 24/7. Connect with an expert or ask the community for quick answers.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0065FF] hover:bg-[#0054d7] text-white px-8 py-3 rounded-md font-label-bold text-body-md transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="mail">mail</span>
                  Contact Support
                </button>
                <button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-label-bold text-body-md transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined" data-icon="forum">forum</span>
                  Ask Community
                </button>
              </div>
            </div>
            <div className="md:w-1/2 bg-slate-100 relative min-h-[300px]">
              <img alt="Support Team" className="absolute inset-0 w-full h-full object-cover" data-alt="A diverse team of collaborative professionals working together in a modern, bright office with glass walls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6X-PR5o_JsU3BGV025FWn2btREoWxF7AVNiRoAl8o29ftCW1ApW5IBWOFtMpYMWYJU986voetwupG_mDpJXLpjjF3d-C2B4yIH5iWrMik1OCRDvbEJ3waQr0blAzGpSb1_4UcM3OGXX5Vch5FSrnS_2rCJOrX5K1fyHk8s0LrhXJqXxDDdwNGDOcJZjEdLIar0i71l6bKZWdR2NUOI3t6cx-N41E5AWfNQsLThLyjbe2xhXHeiRlDslhf1Fn_U0TOO3F-yHzlN4oK" />
            </div>
          </div>
        </section>
        {/*  Footer  */}
        <footer className="border-t border-slate-200 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-[#091E42] dark:text-white">ProductiveFlow</span>
            </div>
            <div className="flex gap-8 text-on-surface-variant font-label-sm text-label-sm">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Cookie Settings</a>
            </div>
            <p className="text-on-surface-variant font-label-sm text-label-sm">© 2024 ProductiveFlow Inc.</p>
          </div>
        </footer>
      </main>
      {/*  Floating Action Button  */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group z-50">
        <span className="material-symbols-outlined" data-icon="chat" data-weight="fill" style={{ "fontVariationSettings": "'FILL' 1" }}>chat</span>
        <div className="absolute right-16 bg-white text-on-surface px-4 py-2 rounded-lg shadow-lg font-label-bold text-label-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-200">
          Chat with us
        </div>
      </button>

    </>
  );
};

export default HelpCenter;
