import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PageNotFound404 = () => {
  const navigate = useNavigate();
  return (
    <>
      
<main className="max-w-screen-xl w-full mx-auto flex flex-col items-center">
{/*  Error Container (Level 2 - Elevation Cards)  */}
<div className="relative w-full max-w-2xl bg-surface-container-lowest p-xl rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-outline-variant/30 flex flex-col items-center text-center overflow-hidden">
{/*  Playful Illustration Area  */}
<div className="mb-lg relative w-64 h-64 md:w-80 md:h-80">
<div className="absolute inset-0 bg-secondary-container/20 rounded-full blur-3xl"></div>
<img alt="Playful dog looking lost" className="relative z-10 w-full h-full object-contain mix-blend-multiply opacity-90" data-alt="A friendly brown and white dog wearing a small blue bandana, looking curiously at a scattered pile of colorful digital task cards on a clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Y_8iarNB1QDUsTheQEPSIeWoKYR4jeXRLhLEp7cHpkCTC29tmcKbQaSyqueHFhOiUE3NDXV2sX9LIuXJx5z8VieDgR9Q6fQLbnsBqAa_MS55Bff7ecX4O789k29q3xhvW6dRS6vTxck2540J0yESvEgpK_RCmHQSTPu0HjYbLA4dZSnMzj6c6Mtm3wU0t_rVSVkzQabmK3CkOSxLA8DxQrcmCfMYst5Wx0l7JmLDydrJsM3ids9egA47ubQ7apPfrmRKr8DPQGUi"/>
</div>
{/*  Content Area  */}
<div className="space-y-md max-w-md">
<div className="flex flex-col items-center gap-xs">
<span className="text-primary font-label-bold text-label-bold tracking-widest px-sm py-xs bg-primary-container/10 rounded-lg">ERROR 404</span>
<h1 className="font-headline-xl text-headline-xl text-on-surface">This page is out of scope</h1>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    It looks like the card you're searching for has been archived, deleted, or moved to another board. Even Taco the dog can't find it!
                </p>
{/*  Action Button (Primary)  */}
<div className="pt-md">
<a className="inline-flex items-center justify-center gap-sm bg-primary-container text-on-primary-container px-lg py-md rounded-lg font-headline-md text-headline-md hover:bg-primary transition-all active:scale-[0.98] duration-150 shadow-md" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
                        Back to Workspace
                    </a>
</div>
</div>
{/*  Decorative Elements (Asymmetric Layout Feel)  */}
<div className="absolute -top-12 -left-12 w-32 h-32 bg-primary-fixed-dim/10 rounded-full blur-xl"></div>
<div className="absolute -bottom-12 -right-12 w-48 h-48 bg-secondary-fixed/10 rounded-full blur-2xl"></div>
<div className="hidden md:block absolute top-12 right-12 opacity-10">
<span className="material-symbols-outlined text-[64px]" data-icon="search_off">search_off</span>
</div>
<div className="hidden md:block absolute bottom-12 left-12 opacity-10">
<span className="material-symbols-outlined text-[64px]" data-icon="map">map</span>
</div>
</div>
{/*  Secondary Navigation (Implicitly guided by Productive Flow-style Footer links)  */}
<nav className="mt-xl flex flex-wrap justify-center gap-lg">
<a className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors flex items-center gap-xs" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="help">help</span>
                Visit Help Center
            </a>
<a className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors flex items-center gap-xs" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="status_proxy">identity_aware_proxy</span>
                System Status
            </a>
<a className="font-label-sm text-label-sm text-outline hover:text-primary transition-colors flex items-center gap-xs" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="contact_support">contact_support</span>
                Contact Support
            </a>
</nav>
{/*  Brand Footer  */}
<footer className="mt-xl text-center">
<div className="flex items-center justify-center gap-sm opacity-40">
<span className="material-symbols-outlined text-[20px]" data-icon="category">category</span>
<span className="font-label-bold text-label-bold uppercase tracking-widest">Productive Flow</span>
</div>
</footer>
</main>
{/*  FAB Suppression Applied (As per Logic Filter: No FAB on Error screens)  */}

    </>
  );
};

export default PageNotFound404;
