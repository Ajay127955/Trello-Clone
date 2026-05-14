import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const WorkspaceDashboardStats = () => {
  const navigate = useNavigate();
  const [timeRange, setTimeRange] = useState('30d');
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await api.get('analytics/');
      setStats(response.data);
    } catch (err) {
      console.error('Failed to fetch analytics:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center h-screen bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Analytics</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Real-time operational intelligence</p>
        </div>
        <div className="flex items-center gap-6">
          <button onClick={fetchStats} className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-2xl active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">sync</span>
            Refresh Stats
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Tasks', value: stats?.total_cards || 0, color: 'blue' },
          { label: 'Completed', value: stats?.completed_cards || 0, color: 'emerald' },
          { label: 'Active Teams', value: stats?.active_teams || 0, color: 'indigo' },
          { label: 'System Velocity', value: stats?.velocity || '0%', color: 'rose' }
        ].map((metric) => (
          <div key={metric.label} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
            <span className="font-black text-[10px] text-slate-400 uppercase tracking-widest mb-4 block">{metric.label}</span>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{metric.value}</span>
              <div className={`w-8 h-8 rounded-xl bg-${metric.color}-500/10 flex items-center justify-center`}>
                <div className={`w-2 h-2 rounded-full bg-${metric.color}-500`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Informational Section */}
      <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="font-headline-md text-2xl font-black text-slate-900 dark:text-white mb-6">Productivity Summary</h3>
        <p className="text-slate-500 dark:text-slate-400 font-bold leading-relaxed max-w-2xl">
          Based on current board activity, your team has completed {stats?.completed_cards} out of {stats?.total_cards} total tasks. 
          The overall system velocity is tracking at {stats?.velocity}, reflecting the current rate of task transition to COMPLETED lists.
        </p>
      </div>
    </div>
  );
};

export default WorkspaceDashboardStats;
