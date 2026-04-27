import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen">
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none fixed top-0 w-full z-50 flex justify-between items-center px-4 h-14 font-sans Inter antialiased">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">grid_view</span>
          <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">Trello</span>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <a className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1" href="#">Features</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#">Solutions</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#">Plans</a>
            <a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors px-2 py-1 rounded" href="#">Pricing</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/login')}
            className="text-slate-600 dark:text-slate-400 font-medium px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors rounded"
          >
            Log in
          </button>
          <button 
            onClick={() => navigate('/register')}
            className="bg-primary text-on-primary font-bold px-4 py-1.5 rounded-lg hover:opacity-90 active:scale-95 transition-all"
          >
            Get Trello for free
          </button>
        </div>
      </header>

      <main className="pt-14">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-container min-h-[795px] flex items-center">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container-padding max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 relative z-10">
            <div className="text-white px-6">
              <h1 className="font-headline-xl text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Trello brings all your tasks, teammates, and tools together
              </h1>
              <p className="font-body-lg text-lg md:text-xl text-on-primary-container opacity-90 mb-10 max-w-xl">
                Keep everything in the same place—even if your team isn’t. Join over 2,000,000 teams worldwide who are using Trello to get more done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  className="flex-grow max-w-md px-4 py-4 rounded-lg text-slate-900 border-none focus:ring-2 focus:ring-secondary-container outline-none" 
                  placeholder="Email" 
                  type="email"
                />
                <button 
                  onClick={() => navigate('/register')}
                  className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-slate-50 transition-colors text-lg"
                >
                  Sign up - it’s free
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                alt="Productive team working" 
                className="rounded-xl shadow-2xl border-4 border-white/20 rotate-1" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZBEx13NFmETrV45Qh2tl4Gzib6QLCelVPCZxKCq0nVzKQClhwuHjZ5ZJ7MqK440oX801Cu5HXh2RzYKM3vJzLQMtMF1p0UVOhvCfowmAOqjEv7_6PIYj2AULJcMwXmXbmofbBWuRyGRZWxQHPtlrdGN-4NZ7W7KJUoh2e2EhRgGjb4bygFfrpdRd_N7HUsIjub2e3--1d4tjGGiDWZjHXUDanS6YnUciJWmDyY-dHg52bQbU_Vbst4y6YMXhRJ1pDIt4_l4tH57K" 
              />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 bg-white">
          <div className="container-padding max-w-7xl mx-auto">
            <p className="text-center font-label-bold text-slate-500 mb-10 uppercase tracking-widest text-xs">Trusted by the world's best teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="text-2xl font-black text-slate-800 tracking-tighter">VISA</div>
              <div className="text-2xl font-black text-slate-800 tracking-tighter">Zoom</div>
              <div className="text-2xl font-black text-slate-800 tracking-tighter">Fender</div>
              <div className="text-2xl font-black text-slate-800 tracking-tighter">DoorDash</div>
              <div className="text-2xl font-black text-slate-800 tracking-tighter">Squarespace</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-slate-50">
          <div className="container-padding max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">A productivity powerhouse</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
              <FeatureCard 
                icon="dashboard" 
                title="Boards" 
                desc="Trello boards keep tasks organized and work moving forward. In a single glance, see everything from 'things to do' to 'done!'"
                color="bg-blue-100 text-blue-600"
              />
              <FeatureCard 
                icon="list_alt" 
                title="Lists" 
                desc="The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs."
                color="bg-purple-100 text-purple-600"
              />
              <FeatureCard 
                icon="credit_card" 
                title="Cards" 
                desc="Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists."
                color="bg-emerald-100 text-emerald-600"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-10 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="material-symbols-outlined text-blue-600">grid_view</span>
              <span className="font-black text-slate-900 text-lg tracking-tight">Trello</span>
            </div>
            <p className="text-xs font-medium text-slate-500">© 2024 Trello Clone Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy</a>
            <a className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms</a>
            <a className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors" href="#">Support</a>
            <a className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, desc, color }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-6`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default LandingPage;
