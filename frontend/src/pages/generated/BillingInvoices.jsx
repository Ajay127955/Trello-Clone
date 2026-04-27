const BillingInvoices = () => {
  const navigate = useNavigate();
  const [invoices] = React.useState([
    { id: 'INV-2023-09-24', date: 'Sep 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-08-24', date: 'Aug 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-07-24', date: 'Jul 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-06-24', date: 'Jun 24, 2023', amount: '$149.00', status: 'Paid' }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-10 pt-8">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white font-heading">Billing and Invoices</h2>
        <p className="text-slate-500 dark:text-slate-400 font-bold mt-2">Manage your subscription, payment methods, and transaction history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
        {/*  Current Plan Card  */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm">
          <div className="flex justify-between items-start mb-8">
            <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">Active Plan</span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-4">Enterprise Pro</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-bold mt-1">Professional workspace management for scaling teams.</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-slate-900 dark:text-white">$149.00</span>
              <span className="text-xs font-bold text-slate-400"> / month</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl mb-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Payment Date</span>
              <span className="text-lg font-black text-slate-900 dark:text-white mt-1">October 24, 2023</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Seats Used</span>
              <span className="text-lg font-black text-slate-900 dark:text-white mt-1">12 / 20 <span className="text-sm font-bold text-slate-400 ml-1">(8 remaining)</span></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate('/pricing-plans')} className="px-6 py-3 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-600/20 hover:scale-105 transition-all">Upgrade Plan</button>
            <button onClick={() => navigate('/workspace-members/1')} className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-black rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Manage Seats</button>
          </div>
        </div>

        {/*  Payment Method Card  */}
        <div className="lg:col-span-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-[2rem] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-black text-slate-900 dark:text-white">Payment</h3>
            <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline">Add New</button>
          </div>
          <div className="p-6 border-2 border-blue-600/20 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-black text-[10px]">VISA</div>
              <div>
                <p className="text-sm font-black text-slate-900 dark:text-white">Visa •••• 4242</p>
                <span className="font-label-bold text-label-bold text-primary uppercase tracking-wider bg-primary-fixed px-2 py-0.5 rounded">Active Plan</span>
                <h3 className="font-headline-md text-headline-md mt-2">Enterprise Pro</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Professional workspace management for scaling teams.</p>
              </div>
              <div className="text-right">
                <span className="font-headline-md text-headline-md text-on-surface">$149.00</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">/ month</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md p-md bg-surface-container-low rounded-lg mb-lg">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Next Payment Date</span>
                <span className="font-body-lg text-body-lg font-bold">October 24, 2023</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Seats Used</span>
                <span className="font-body-lg text-body-lg font-bold">12 / 20 <span className="font-normal text-on-surface-variant text-sm ml-1">(8 remaining)</span></span>
              </div>
            </div>
            <div className="flex flex-wrap gap-sm">
              <button className="bg-primary px-lg py-2 rounded-lg text-on-primary font-label-sm text-label-sm flex items-center gap-2 active:scale-95 duration-150 transition-all">
                Upgrade Plan
              </button>
              <button className="bg-surface-container-highest px-lg py-2 rounded-lg text-on-surface-variant font-label-sm text-label-sm flex items-center gap-2 hover:bg-slate-200 transition-all">
                Manage Seats
              </button>
            </div>
          </div>
          {/*  Payment Method Card  */}
          <div className="bg-surface-container-lowest border border-outline-variant p-lg rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-md">
              <h3 className="font-headline-md text-headline-md">Payment Method</h3>
              <button className="text-primary font-label-bold text-label-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                Add New
              </button>
            </div>
            <div className="flex items-center justify-between p-md border border-primary-container bg-primary-fixed/30 rounded-xl">
              <div className="flex items-center gap-md">
                <div className="w-12 h-8 bg-on-surface rounded-md flex items-center justify-center text-on-primary font-black text-[10px]">VISA</div>
                <div>
                  <p className="font-body-md text-body-md font-semibold">Visa ending in •••• 4242</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Expires 12/2025 • Primary</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
                  <span className="material-symbols-outlined text-[20px]" data-icon="edit">edit</span>
                </button>
                <button className="w-8 h-8 rounded-full flex items-center justify-center text-error hover:bg-error-container/20 transition-colors">
                  <span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  Right Column: Quick Stats / Bento Sidebar  */}
        <div className="lg:col-span-1 flex flex-col gap-gutter">
          {/*  Referral Card  */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-on-primary p-lg rounded-xl shadow-md overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="font-headline-md text-headline-md mb-2">Save $25 on your next bill</h3>
              <p className="font-body-md text-body-md text-blue-100 mb-lg">Invite other teams to join the platform and get credits credited to your account.</p>
              <button className="bg-white text-blue-700 font-label-bold text-label-bold px-lg py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Copy Link
              </button>
            </div>
            <div className="absolute -bottom-8 -right-8 opacity-20 transform rotate-12">
              <span className="material-symbols-outlined text-[120px]" data-icon="featured_seasonal">featured_seasonal_and_gifts</span>
            </div>
          </div>
          {/*  Contact Support  */}
          <div className="bg-surface-container-high border border-outline-variant p-lg rounded-xl flex items-center gap-md">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
            </div>
            <div>
              <p className="font-label-bold text-label-bold text-on-surface">Need help?</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant">Contact our billing team</p>
            </div>
          </div>
        </div>
      </div>
                        Filter
                    </button>
<button className="p-2 border border-outline-variant rounded-lg bg-white flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm hover:bg-slate-50 transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Export All
                    </button>
</div>
</div>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container border-b border-outline-variant">
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Invoice ID</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Date</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Amount</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant">Status</th>
<th className="px-lg py-3 font-label-bold text-label-bold text-on-surface-variant text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
{/*  Row 1  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-09-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Sep 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 2  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-08-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Aug 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 3  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-07-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Jul 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
{/*  Row 4  */}
<tr className="invoice-table-row transition-colors">
<td className="px-lg py-4">
<span className="font-body-md text-body-md font-semibold">INV-2023-06-24</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md text-on-surface-variant">Jun 24, 2023</span>
</td>
<td className="px-lg py-4">
<span className="font-body-md text-body-md">$149.00</span>
</td>
<td className="px-lg py-4">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-label-sm text-[10px] uppercase">Paid</span>
</td>
<td className="px-lg py-4 text-right">
<button className="text-primary font-label-bold text-label-bold hover:underline inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                    PDF
                                </button>
</td>
</tr>
</tbody>
</table>
<div className="px-lg py-md bg-surface-container-low flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Showing 4 of 24 invoices</span>
<div className="flex gap-2">
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant disabled:opacity-30" disabled="">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface hover:bg-white">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
</main>
    </div>
  );
};

export default BillingInvoices;
