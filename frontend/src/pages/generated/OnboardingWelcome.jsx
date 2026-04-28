import React from 'react';
import { useNavigate } from 'react-router-dom';

const OnboardingWelcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(1);

  const stepsContent = [
    {
      title: "Strategic Boards",
      description: "Your project's command center. Orchestrate complex workflows, track velocity, and align your team in a unified high-fidelity space.",
      icon: "grid_view",
      colorClass: "bg-blue-600",
      tags: ["Team Alignment", "Real-time Sync"]
    },
    {
      title: "Fluid Workflows",
      description: "Visualize progress across intelligent lists. Transition cards through custom stages designed for maximum operational efficiency.",
      icon: "sync_alt",
      colorClass: "bg-emerald-600",
      tags: ["Automation", "Dynamic Lists"]
    },
    {
      title: "Contextual Cards",
      description: "The building blocks of execution. Embed assets, set deadlines, and maintain context-aware conversations within every task.",
      icon: "layers",
      colorClass: "bg-indigo-600",
      tags: ["Asset Management", "Deep Collaboration"]
    }
  ];

  const handleNext = () => {
    if (step < stepsContent.length) {
      setStep(step + 1);
    } else {
      navigate('/boards-dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  const current = stepsContent[step - 1];

  return (
    <div className="min-h-screen flex items-center justify-center p-6 sm:p-12">
      <div className="w-full max-w-6xl bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Visual Showcase */}
        <div className="bg-slate-50 dark:bg-slate-950 p-12 sm:p-24 flex flex-col items-center justify-center relative group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-50"></div>
          
          <div className="relative z-10 w-full aspect-square max-w-[320px] bg-white dark:bg-slate-900 rounded-[3rem] shadow-2xl border-4 border-slate-50 dark:border-slate-800 p-12 flex flex-col justify-center items-center transition-all duration-1000 group-hover:scale-110">
            <div className={`w-24 h-24 rounded-[2rem] ${current.colorClass} flex items-center justify-center shadow-2xl mb-10 transform transition-all duration-700`}>
                <span className="material-symbols-outlined text-5xl text-white">{current.icon}</span>
            </div>
            <div className="space-y-4 w-full">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full mx-auto opacity-50"></div>
                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded-full mx-auto opacity-30"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-400 rounded-3xl shadow-2xl flex items-center justify-center -rotate-12 border-4 border-white dark:border-slate-900">
                <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-2xl shadow-2xl flex items-center justify-center rotate-12 border-4 border-white dark:border-slate-900">
                <span className="material-symbols-outlined text-white text-xl">bolt</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-12 sm:p-24 flex flex-col justify-between bg-white dark:bg-slate-900">
          <div className="space-y-12">
            {/* Stepper */}
            <div className="flex gap-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-2 flex-1 rounded-full transition-all duration-700 ${step >= s ? 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]' : 'bg-slate-100 dark:bg-slate-800'}`}></div>
              ))}
            </div>

            <div className="space-y-8">
              <span className="font-black text-[10px] text-blue-600 uppercase tracking-[0.4em] bg-blue-600/5 px-4 py-2 rounded-lg border border-blue-600/10 inline-block">Node {step} of 3</span>
              <h1 className="font-headline-xl text-5xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tighter leading-none">{current.title}</h1>
              <p className="font-body-lg text-slate-500 dark:text-slate-400 font-bold leading-relaxed text-lg">{current.description}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {current.tags.map(tag => (
                <span key={tag} className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] border border-slate-100 dark:border-slate-800">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-16">
            <button 
              onClick={handleBack}
              className="font-black text-[10px] text-slate-400 uppercase tracking-widest hover:text-slate-900 dark:hover:text-white transition-all flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              <span className="material-symbols-outlined text-lg">west</span>
              Previous
            </button>
            <button 
              onClick={handleNext}
              className="bg-slate-900 dark:bg-blue-600 text-white px-12 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all flex items-center gap-4 hover:translate-x-1"
            >
              {step === 3 ? 'Get Started' : 'Continue'}
              <span className="material-symbols-outlined text-lg">east</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OnboardingWelcome;
