import React, { useEffect, useState, useCallback } from 'react';
import api from '../../services/api';
import { Search, Clock, Zap, UserPlus, CheckCircle, X, Users } from 'lucide-react';

/* ─── Helpers ─────────────────────────────────────── */
const formatRelative = (dateStr) => {
  const diff = Math.floor((Date.now() - new Date(dateStr)) / 1000);
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return new Date(dateStr).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const statusColor = {
  todo: 'bg-slate-100 text-slate-600 border-slate-200',
  doing: 'bg-blue-50 text-blue-700 border-blue-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

const formatMessage = (item) => {
  const name = item.user?.username || 'Someone';
  const task = item.task_title ? `"${item.task_title}"` : 'a task';

  switch (item.action_type) {
    case 'moved':
      return (
        <>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> moved card </span>
          <span className="font-bold text-slate-800">{task}</span>
          <span className="text-slate-500"> from </span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${statusColor[item.from_state?.toLowerCase()] || statusColor.todo}`}>
            {item.from_state || 'TODO'}
          </span>
          <span className="text-slate-400 mx-1">→</span>
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-black uppercase ${statusColor[item.to_state?.toLowerCase()] || statusColor.todo}`}>
            {item.to_state || '—'}
          </span>
        </>
      );
    case 'assigned':
      return (
        <>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> was assigned </span>
          <span className="font-bold text-slate-800">{task}</span>
        </>
      );
    default:
      return (
        <>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> {item.action_type} </span>
          <span className="font-bold text-slate-800">{task}</span>
        </>
      );
  }
};

const getActionIcon = (type) => {
  switch (type) {
    case 'moved': return <Zap size={18} className="text-amber-500" />;
    case 'assigned': return <UserPlus size={18} className="text-blue-500" />;
    case 'completed': return <CheckCircle size={18} className="text-emerald-500" />;
    default: return <Clock size={18} className="text-slate-400" />;
  }
};

/* ─── Component ───────────────────────────────────── */
const ActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);

  const fetchActivities = useCallback(async () => {
    try {
      const res = await api.get('activities/');
      setActivities(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActivities();
    const interval = setInterval(fetchActivities, 10000);
    return () => clearInterval(interval);
  }, [fetchActivities]);

  /* Unique member list derived from activities */
  const members = [...new Map(activities.map(a => [a.user?.id, a.user])).values()].filter(Boolean);

  /* Members matching the search query */
  const matchedMembers = searchQuery.trim()
    ? members.filter(m => m.username.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  /* Activities to display: filtered by selected member, or all */
  const displayedActivities = selectedMember
    ? activities.filter(a => a.user?.id === selectedMember.id)
    : activities;

  /* Member stats for the selected member panel */
  const memberStats = selectedMember
    ? {
        total: displayedActivities.length,
        todo: activities.filter(a => a.user?.id === selectedMember.id && a.action_type === 'assigned').length,
        doing: activities.filter(a => a.user?.id === selectedMember.id && a.to_state?.toLowerCase() === 'doing').length,
        completed: activities.filter(a => a.user?.id === selectedMember.id && a.to_state?.toLowerCase() === 'completed').length,
      }
    : null;

  return (
    <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24 md:pb-12">

      {/* ── Header ──────────────────────────────────── */}
      <div className="mb-10">
        <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-1">Activity Stream</h1>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
          Real-time team operational log
        </p>
      </div>

      {/* ── Search Bar ──────────────────────────────── */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={e => { setSearchQuery(e.target.value); setSelectedMember(null); }}
          placeholder="Search a team member by name to view their activity..."
          className="w-full pl-14 pr-12 py-4 bg-white border-2 border-slate-100 rounded-2xl text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => { setSearchQuery(''); setSelectedMember(null); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* ── Search Results Dropdown ──────────────────── */}
      {searchQuery && matchedMembers.length > 0 && (
        <div className="bg-white border border-slate-100 rounded-2xl shadow-xl mb-6 overflow-hidden">
          <p className="px-5 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50">
            {matchedMembers.length} member{matchedMembers.length > 1 ? 's' : ''} found
          </p>
          {matchedMembers.map(member => {
            const memberActivityCount = activities.filter(a => a.user?.id === member.id).length;
            return (
              <button
                key={member.id}
                onClick={() => { setSelectedMember(member); setSearchQuery(''); }}
                className="w-full flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors text-left border-b border-slate-50 last:border-0"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-sm shrink-0">
                  {member.username.substring(0, 2).toUpperCase()}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900 text-sm">{member.username}</p>
                  <p className="text-[10px] text-slate-400 font-semibold">{memberActivityCount} activities recorded</p>
                </div>
                <span className="text-slate-300 text-xs">View →</span>
              </button>
            );
          })}
        </div>
      )}

      {searchQuery && matchedMembers.length === 0 && (
        <div className="bg-white border border-slate-100 rounded-2xl px-6 py-8 text-center mb-6 shadow-sm">
          <Users size={28} className="text-slate-200 mx-auto mb-3" />
          <p className="text-slate-400 font-bold text-sm">No member found matching "<span className="text-slate-700">{searchQuery}</span>"</p>
        </div>
      )}

      {/* ── Selected Member Panel ────────────────────── */}
      {selectedMember && (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-sm shadow-md">
                {selectedMember.username.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <p className="font-black text-slate-900 text-lg tracking-tight">{selectedMember.username}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Member Activity View</p>
              </div>
            </div>
            <button
              onClick={() => setSelectedMember(null)}
              className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 bg-slate-50 px-4 py-2 rounded-xl transition-all hover:bg-slate-100"
            >
              <X size={14} /> Clear Filter
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Assigned', value: memberStats.todo, color: 'bg-slate-50 text-slate-700 border-slate-200' },
              { label: 'In Progress', value: memberStats.doing, color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { label: 'Completed', value: memberStats.completed, color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
            ].map(stat => (
              <div key={stat.label} className={`rounded-xl border px-4 py-3 text-center ${stat.color}`}>
                <p className="text-2xl font-black">{stat.value}</p>
                <p className="text-[9px] font-black uppercase tracking-widest mt-0.5 opacity-70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Activity Timeline ────────────────────────── */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
              <Zap size={16} className="text-indigo-500" />
            </div>
            <div>
              <p className="font-black text-slate-900 text-sm">
                {selectedMember ? `${selectedMember.username}'s Activity` : 'All Activity'}
              </p>
              <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
                {displayedActivities.length} events
              </p>
            </div>
          </div>
          <button
            onClick={fetchActivities}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all active:scale-95"
          >
            {loading ? 'Updating...' : 'Refresh'}
          </button>
        </div>

        {displayedActivities.length === 0 ? (
          <div className="py-20 text-center">
            <Clock size={36} className="text-slate-200 mx-auto mb-4" />
            <p className="text-slate-400 font-bold text-sm">No activity recorded yet</p>
          </div>
        ) : (
          <div className="relative px-6 py-6 space-y-6">
            {/* Timeline spine */}
            <div className="absolute left-[42px] top-8 bottom-8 w-[2px] bg-slate-50" />

            {displayedActivities.map((item) => (
              <div key={item.id} className="relative flex gap-5 group">
                {/* Icon */}
                <div className="relative z-10 shrink-0 w-10 h-10 rounded-xl bg-white border-2 border-slate-100 shadow-sm flex items-center justify-center group-hover:border-blue-200 group-hover:scale-110 transition-all duration-200">
                  {getActionIcon(item.action_type)}
                </div>

                {/* Card */}
                <div className="flex-1 bg-slate-50/60 hover:bg-white border border-slate-100 hover:border-blue-100 rounded-2xl px-5 py-4 transition-all hover:shadow-md group-hover:-translate-y-px">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 text-[13px] leading-relaxed">
                      {formatMessage(item)}
                    </div>
                    <span className="shrink-0 text-[9px] font-black text-slate-400 uppercase tracking-wider whitespace-nowrap mt-0.5">
                      {formatRelative(item.timestamp)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;
