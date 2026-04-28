const PricingPlans = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = React.useState('monthly');
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/*  Hero Section  */}
      <div className="text-center mb-16 pt-8">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 font-heading tracking-tight">Plans for every team size</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-bold">
          From solo projects to global enterprise operations, choose the workspace that grows with your productivity.
        </p>
        
        {/*  Billing Toggle  */}
        <div className="mt-10 flex justify-center items-center gap-6">
          <span className={`text-sm font-black uppercase tracking-widest ${billingPeriod === 'monthly' ? 'text-blue-600' : 'text-slate-400'}`}>Monthly</span>
          <button 
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="relative w-14 h-7 bg-slate-200 dark:bg-slate-800 rounded-full p-1 transition-colors duration-300"
          >
            <div className={`w-5 h-5 bg-blue-600 rounded-full transition-transform duration-300 ${billingPeriod === 'yearly' ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm font-black uppercase tracking-widest flex items-center gap-2 ${billingPeriod === 'yearly' ? 'text-blue-600' : 'text-slate-400'}`}>
            Yearly <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-[10px] font-black">SAVE 20%</span>
          </span>
        </div>
      </div>
      {/*  Bento Grid Pricing Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-xl">
{/*  Free Tier  */}
<div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col hover:border-blue-200 transition-all group">
<div className="mb-6">
<div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
    <span className="material-symbols-outlined text-slate-600">person</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Free</h3>
<p className="text-sm text-slate-500 mt-1">Individuals & Small Teams</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$0</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Up to 10 boards per workspace
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Unlimited cards & lists
                        </li>
</ul>
<button onClick={() => navigate('/boards-dashboard')} className="w-full py-4 bg-slate-100 text-slate-900 font-black rounded-2xl hover:bg-slate-200 transition-all">Get started</button>
</div>

{/*  Standard Tier  */}
<div className="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm flex flex-col hover:border-blue-200 transition-all group">
<div className="mb-6">
<div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-green-600">groups</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Standard</h3>
<p className="text-sm text-slate-500 mt-1">Teams scaling collaboration</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$5</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            Unlimited boards
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-green-500 text-[18px]">check_circle</span>
                            WIP limits & custom fields
                        </li>
</ul>
<button onClick={() => navigate('/billing-invoices')} className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">Sign up now</button>
</div>

{/*  Premium Tier  */}
<div className="bg-white border-4 border-blue-600 p-8 rounded-[2rem] shadow-2xl flex flex-col scale-105 z-10 relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>
<div className="mb-6">
<div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
    <span className="material-symbols-outlined text-blue-600">rocket_launch</span>
</div>
<h3 className="text-2xl font-black text-slate-900">Premium</h3>
<p className="text-sm text-slate-500 mt-1">Advanced visuals & automation</p>
</div>
<div className="mb-8 flex items-baseline gap-1">
<span className="text-5xl font-black text-slate-900">$10</span>
<span className="text-sm font-bold text-slate-400">USD /mo</span>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                            Planner & Calendar view
                        </li>
<li className="flex gap-3 items-center text-sm font-bold text-slate-600">
<span className="material-symbols-outlined text-blue-600 text-[18px]">check_circle</span>
                            Workspace-level automation
                        </li>
</ul>
<button onClick={() => navigate('/billing-invoices')} className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-black rounded-2xl hover:opacity-90 shadow-xl shadow-blue-200 transition-all">Start free trial</button>
</div>
</div>
{/*  Comparison Table Section  */}
<section className="mt-xl bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="p-lg border-b border-slate-100 flex items-center justify-between">
<h2 className="font-headline-md text-headline-md">Detailed Comparison</h2>
<span className="font-label-sm text-label-sm text-primary flex items-center gap-1 cursor-pointer" onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Collapse' : 'Expand All'} <span className="material-symbols-outlined text-sm">{expanded ? 'expand_less' : 'expand_more'}</span>
</span>
</div>
<div className={`overflow-x-auto transition-all ${expanded ? 'max-h-[1000px]' : 'max-h-[400px]'}`}>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50">
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant w-1/3">Feature</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Free</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Standard</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Premium</th>
<th className="p-gutter font-label-bold text-label-bold text-on-surface-variant">Enterprise</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="p-gutter font-body-md text-body-md font-semibold">Boards</td>
<td className="p-gutter font-body-md text-body-md">10</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
</tr>
<tr>
<td className="p-gutter font-body-md text-body-md font-semibold">Automation (Butler)</td>
<td className="p-gutter font-body-md text-body-md">250 runs</td>
<td className="p-gutter font-body-md text-body-md">1,000 runs</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
<td className="p-gutter font-body-md text-body-md">Unlimited</td>
</tr>
{expanded && (
    <>
    <tr>
    <td className="p-gutter font-body-md text-body-md font-semibold">Security Administration</td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    </tr>
    <tr>
    <td className="p-gutter font-body-md text-body-md font-semibold">Organization-wide permissions</td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-slate-300">remove</span></td>
    <td className="p-gutter"><span className="material-symbols-outlined text-blue-600">check</span></td>
    </tr>
    </>
)}
</tbody>
</table>
</div>
</section>
{/*  Testimonial Section  */}
<div className="mt-xl grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
<div className="aspect-video rounded-xl bg-slate-200 relative overflow-hidden shadow-md">
<img alt="Team collaborating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-lg">
<p className="text-white font-medium italic">"Switching to the Premium plan was the single best decision for our team's productivity."</p>
</div>
</div>
<div className="p-lg">
<h2 className="font-headline-md text-headline-md mb-md">Trusted by 2,000,000+ teams</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-lg">
                        Join companies like Google, Fender, and Squarespace who use our platform to manage their most ambitious projects.
                    </p>
<div className="grid grid-cols-3 gap-md opacity-50 grayscale">
<div className="h-8 bg-slate-300 rounded"></div>
<div className="h-8 bg-slate-300 rounded"></div>
<div className="h-8 bg-slate-300 rounded"></div>
</div>
</div>
</div>
{/*  Footer-style CTA  */}
<div className="mt-xl py-xl text-center border-t border-slate-200">
<h2 className="font-headline-md text-headline-md mb-md">Still have questions?</h2>
<button onClick={() => navigate('/help-center')} className="px-lg py-sm bg-white border border-slate-300 rounded-lg font-bold hover:bg-slate-50 transition-colors">View FAQ</button>
</div>
</div>

  );
};

export default PricingPlans;
