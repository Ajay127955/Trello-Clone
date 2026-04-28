const BillingInvoices = () => {
  const navigate = useNavigate();
  const [invoices] = React.useState([
    { id: 'INV-2023-09-24', date: 'Sep 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-08-24', date: 'Aug 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-07-24', date: 'Jul 24, 2023', amount: '$149.00', status: 'Paid' },
    { id: 'INV-2023-06-24', date: 'Jun 24, 2023', amount: '$149.00', status: 'Paid' }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      <header className="mb-10 pt-8">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">Billing & Invoices</h2>
        <p className="text-slate-500 dark:text-slate-400 font-bold mt-2">Manage your subscription, payment methods, and transaction history.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mb-16">
        {/*  Current Plan Card  */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-10">
            <div>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-600/5 px-4 py-1.5 rounded-xl border border-blue-600/10 inline-block mb-6">Active Plan</span>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-4">Enterprise Matrix Pro</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-bold max-w-md">Unlimited nodes, advanced telemetry, and dedicated support for large-scale operations.</p>
            </div>
            <div className="text-right">
              <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter">$149</span>
              <span className="text-sm font-black text-slate-400 uppercase tracking-widest ml-2">/ month</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-slate-50 dark:bg-slate-950 rounded-[2rem] mb-10 border border-slate-100 dark:border-slate-800 shadow-inner">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Cycle Reset Date</span>
              <span className="text-xl font-black text-slate-900 dark:text-white">October 24, 2026</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Allocation Status</span>
              <span className="text-xl font-black text-slate-900 dark:text-white">12 / 20 <span className="text-xs font-black text-blue-600 ml-2 uppercase tracking-widest">Nodes Active</span></span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50 dark:border-slate-800">
            <button onClick={() => navigate('/pricing-plans')} className="px-10 py-4 bg-slate-900 dark:bg-blue-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-2xl active:scale-95 transition-all">
              Optimize Plan
            </button>
            <button onClick={() => navigate('/workspace-members')} className="px-10 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-black text-[10px] uppercase tracking-widest rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all">
              Manage Seats
            </button>
          </div>
        </div>

        {/* Payment Methods Sidebar */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-[2.5rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-black text-[11px] text-slate-900 dark:text-white uppercase tracking-widest">Protocol Payment</h3>
              <button className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:underline">Edit</button>
            </div>
            <div className="p-6 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-slate-800 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-[10px]">VISA</div>
                <div>
                  <p className="text-[11px] font-black text-slate-900 dark:text-white uppercase tracking-wider">Visa •••• 4242</p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Expires 12/26</p>
                </div>
              </div>
              <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[8px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20">Primary Method</span>
            </div>
            <button className="w-full py-4 border-2 border-dashed border-slate-100 dark:border-slate-800 text-slate-400 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              New Method
            </button>
          </div>

          <div className="bg-indigo-600 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-1000">
                <span className="material-symbols-outlined text-[150px]">featured_seasonal</span>
            </div>
            <h3 className="font-headline-md text-2xl font-black mb-4 tracking-tight leading-tight relative z-10">Save $25 on your next cycle.</h3>
            <p className="text-indigo-100/60 text-[11px] font-bold mb-8 relative z-10">Invite other teams to join the matrix and get operation credits.</p>
            <button className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:translate-x-1 transition-all relative z-10">
              Copy Referral Link
            </button>
          </div>
        </div>
      </div>

      {/* Invoice History Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-10 py-8 border-b border-slate-50 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-headline-md text-xl font-black text-slate-900 dark:text-white tracking-tight">Transaction History</h3>
          <div className="flex gap-4">
            <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-blue-600 transition-colors">
              <span className="material-symbols-outlined">download</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-950/50">
                <th className="px-10 py-6 font-black text-[9px] text-slate-400 uppercase tracking-[0.2em]">Identifier</th>
                <th className="px-6 py-6 font-black text-[9px] text-slate-400 uppercase tracking-[0.2em]">Cycle Date</th>
                <th className="px-6 py-6 font-black text-[9px] text-slate-400 uppercase tracking-[0.2em]">Amount</th>
                <th className="px-6 py-6 font-black text-[9px] text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-10 py-6 font-black text-[9px] text-slate-400 uppercase tracking-[0.2em] text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {invoices.map((inv) => (
                <tr key={inv.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all cursor-pointer group">
                  <td className="px-10 py-6 font-black text-slate-900 dark:text-white text-[11px] uppercase tracking-wider">{inv.id}</td>
                  <td className="px-6 py-6 text-slate-500 dark:text-slate-400 font-bold text-xs">{inv.date}</td>
                  <td className="px-6 py-6 text-slate-900 dark:text-white font-black text-xs">{inv.amount}</td>
                  <td className="px-6 py-6">
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[8px] font-black uppercase tracking-[0.2em] rounded-full border border-emerald-500/10">
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-10 py-6 text-right">
                    <button className="text-blue-600 font-black text-[9px] uppercase tracking-[0.2em] hover:underline flex items-center gap-2 justify-end ml-auto group-hover:translate-x-1 transition-transform">
                      <span className="material-symbols-outlined text-[16px]">file_download</span>
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-8 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Showing {invoices.length} entries</span>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all disabled:opacity-30" disabled>
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingInvoices;
