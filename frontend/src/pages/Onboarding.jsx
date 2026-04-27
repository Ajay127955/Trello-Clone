import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-sans">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
          </div>
          <span className="font-bold text-primary tracking-tight text-xl">Productive Flow</span>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-sm font-bold text-slate-500 hover:text-primary transition-colors"
        >
          Skip intro
        </button>
      </header>

      <main className="flex-grow flex items-center justify-center pt-16 px-4">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-slate-50 p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 w-full aspect-video rounded-xl shadow-2xl bg-white border border-slate-100 p-4 flex flex-col gap-4">
              <div className="flex flex-col h-full gap-4">
                <div className="h-6 w-1/3 bg-slate-100 rounded"></div>
                <div className="flex gap-4 h-full">
                  <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300 flex flex-col gap-2">
                    <div className="h-4 w-full bg-white rounded shadow-sm"></div>
                    <div className="h-4 w-4/5 bg-white rounded shadow-sm"></div>
                  </div>
                  <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-dashed border-slate-300 flex flex-col gap-2">
                    <div className="h-4 w-full bg-white rounded shadow-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <span className="material-symbols-outlined text-blue-400 text-4xl opacity-50">view_kanban</span>
              <span className="material-symbols-outlined text-blue-600 text-4xl opacity-50">checklist</span>
              <span className="material-symbols-outlined text-slate-400 text-4xl opacity-50">sticky_note_2</span>
            </div>
          </div>

          <div className="p-12 flex flex-col justify-between h-full">
            <div>
              <div className="flex gap-2 mb-8">
                <div className="h-1 flex-1 bg-primary rounded-full"></div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
                <div className="h-1 flex-1 bg-slate-200 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-black text-primary uppercase tracking-widest">Step 1 of 3</span>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Start with a Board</h1>
                <p className="text-slate-500 leading-relaxed font-medium">
                  A board is where the magic happens. It's your project's command center. Organize tasks, track progress, and collaborate with your team all in one place.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <div className="flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">groups</span>
                  Team Sync
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-[10px] font-black uppercase tracking-wider">
                  <span className="material-symbols-outlined text-sm">auto_awesome</span>
                  Smart Filters
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center justify-between">
              <button 
                onClick={() => navigate('/landing')}
                className="text-xs font-black text-slate-400 flex items-center gap-1 hover:text-slate-900 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">arrow_back</span>
                Back
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-xl font-black text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95"
              >
                Continue
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="max-w-5xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <OnboardingFeature 
          icon="view_column" 
          title="Lists" 
          desc="The stages of your workflow. Drag tasks from 'To Do' to 'Done' seamlessly."
          color="bg-blue-100 text-blue-600"
        />
        <OnboardingFeature 
          icon="description" 
          title="Cards" 
          desc="Your building blocks. Each card holds descriptions, comments, and files."
          color="bg-slate-100 text-slate-600"
        />
        <OnboardingFeature 
          icon="speed" 
          title="Velocity" 
          desc="Track your team's momentum with built-in analytics and reports."
          color="bg-blue-50 text-blue-500"
        />
      </section>

      <footer className="mt-auto py-8 text-center bg-white border-t border-slate-100">
        <p className="text-xs font-medium text-slate-500">
          Already have an account? <button onClick={() => navigate('/login')} className="text-primary font-black hover:underline">Log in here</button>
        </p>
      </footer>
    </div>
  );
};

const OnboardingFeature = ({ icon, title, desc, color }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
    <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center mb-4`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Onboarding;
