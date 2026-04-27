import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OnboardingWelcome = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // Since there's only one onboarding page implemented, we'll go to the dashboard
    navigate('/boards-dashboard');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSkip = () => {
    navigate('/boards-dashboard');
  };

  return (
    <>
      
{/*  Top Bar for Branding (Context: Onboarding)  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-lg h-16 bg-white border-b border-surface-container-highest">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
<span className="material-symbols-outlined text-white" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
</div>
<span className="font-headline-md text-primary tracking-tight">Productive Flow</span>
</div>
<button 
  onClick={handleSkip}
  className="font-label-sm text-on-surface-variant hover:text-primary transition-colors"
>
  Skip intro
</button>
</header>
<main className="flex-grow flex items-center justify-center pt-16 px-gutter">
<div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-xl bg-white rounded-xl shadow-sm border border-surface-container-high overflow-hidden">
{/*  Left Side: Visual Content  */}
<div className="bg-surface-container-low p-xl flex flex-col items-center justify-center relative overflow-hidden min-h-[400px]">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent"></div>
</div>
{/*  Illustration Frame  */}
<div className="relative z-10 w-full aspect-video rounded-lg shadow-xl bg-white border border-surface-container p-sm flex flex-col gap-sm">
{/*  Boards Illustration  */}
<div className="flex flex-col h-full gap-gutter" id="step-visual-1">
<div className="h-6 w-1/3 bg-surface-container-highest rounded"></div>
<div className="flex gap-gutter h-full">
<div className="flex-1 bg-surface-container-low rounded-lg p-sm border border-dashed border-outline-variant flex flex-col gap-xs">
<div className="h-4 w-full bg-white rounded shadow-sm"></div>
<div className="h-4 w-4/5 bg-white rounded shadow-sm"></div>
</div>
<div className="flex-1 bg-surface-container-low rounded-lg p-sm border border-dashed border-outline-variant flex flex-col gap-xs">
<div className="h-4 w-full bg-white rounded shadow-sm"></div>
</div>
</div>
</div>
<img className="hidden absolute inset-0 w-full h-full object-cover" data-alt="Modern workspace dashboard layout with organized project boards and colorful task management cards in a clean minimalist interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIti2S-UBcEl6kWKV5uHz9kh7EE_Ez3crQWU10kgXMgpt0s9r152ZUxWRW0tqXIz_ZCLHpln4l7gaXdu5KuJ960tcd8zRMmLULzovalwPRVRsn818XVsb2UxnOIXxAvUwGpgSKGYLQTfQWeh8LpccqKOsOr65hDbcxCOYV_R8rmgh209vnRslURhhx9I1ycN0icAuahtcx5Inq37c79ofe4ZAFKAFHHQv55bHgfOSxsOP0htEgCJZN2VheG3gWLREBN2TZbzTDz6mu"/>
</div>
{/*  Floating Decor Elements  */}
<div className="mt-lg flex gap-md">
<span className="material-symbols-outlined text-primary-container text-4xl opacity-50">view_kanban</span>
<span className="material-symbols-outlined text-secondary-container text-4xl opacity-50">checklist</span>
<span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl opacity-50">sticky_note_2</span>
</div>
</div>
{/*  Right Side: Content & Stepper  */}
<div className="p-xl flex flex-col justify-between h-full">
<div>
{/*  Stepper Indicators  */}
<div className="flex gap-sm mb-xl">
<div className="h-1 flex-1 bg-primary rounded-full"></div>
<div className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>
<div className="h-1 flex-1 bg-surface-container-highest rounded-full"></div>
</div>
<div className="space-y-md">
<span className="font-label-bold text-primary uppercase tracking-widest text-[10px]">Step 1 of 3</span>
<h1 className="font-headline-xl text-on-surface">Start with a Board</h1>
<p className="font-body-lg text-on-surface-variant leading-relaxed">
                            A board is where the magic happens. It's your project's command center. Organize tasks, track progress, and collaborate with your team all in one place.
                        </p>
</div>
{/*  Feature Tags  */}
<div className="mt-xl flex flex-wrap gap-sm">
<div className="flex items-center gap-xs px-sm py-xs bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-medium">
<span className="material-symbols-outlined text-sm">groups</span>
                            Team Sync
                        </div>
<div className="flex items-center gap-xs px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-xs font-medium">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
                            Smart Filters
                        </div>
</div>
</div>
{/*  Navigation Controls  */}
<div className="mt-xl flex items-center justify-between">
<button 
  onClick={handleBack}
  className="font-label-bold text-on-surface-variant flex items-center gap-xs hover:text-on-surface transition-colors"
>
<span className="material-symbols-outlined">arrow_back</span>
                        Back
                    </button>
<button 
  onClick={handleNext}
  className="bg-primary hover:bg-on-primary-fixed-variant text-white px-xl py-md rounded-xl font-label-bold flex items-center gap-sm transition-all shadow-md active:scale-95"
>
                        Continue
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</main>
{/*  Detailed Feature Section (Introductory Grid)  */}
<section className="max-w-5xl mx-auto py-xl px-gutter grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
<div className="bg-white p-lg rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-primary-fixed rounded-lg flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-on-primary-fixed">view_column</span>
</div>
<h3 className="font-headline-md mb-sm">Lists</h3>
<p className="font-body-md text-on-surface-variant">The stages of your workflow. Drag tasks from 'To Do' to 'Done' seamlessly.</p>
</div>
<div className="bg-white p-lg rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-secondary-fixed rounded-lg flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-on-secondary-fixed">description</span>
</div>
<h3 className="font-headline-md mb-sm">Cards</h3>
<p className="font-body-md text-on-surface-variant">Your building blocks. Each card holds descriptions, comments, and files.</p>
</div>
<div className="bg-white p-lg rounded-xl border border-surface-container-high shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-on-tertiary-fixed">speed</span>
</div>
<h3 className="font-headline-md mb-sm">Velocity</h3>
<p className="font-body-md text-on-surface-variant">Track your team's momentum with built-in analytics and reports.</p>
</div>
</section>
{/*  Footer Action  */}
<footer className="mt-auto py-lg text-center bg-surface-container-lowest border-t border-surface-container-high">
<p className="font-label-sm text-on-surface-variant">Already have an account? <Link className="text-primary font-bold hover:underline" to="/login">Log in here</Link></p>
</footer>
{/*  FAB (Suppressed for Onboarding as per instructions, but placeholder logic if needed for later screens)  */}
{/*  Onboarding screens should prioritize the center flow  */}

    </>
  );
};

export default OnboardingWelcome;
