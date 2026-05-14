import React, { useState, useEffect, useCallback } from 'react';
import api from '../services/api';
import { Clock, ArrowRight, UserPlus, CheckCircle, Zap } from 'lucide-react';

// Human-readable action formatter
const formatAction = (activity) => {
  const name = activity.user?.username || 'Someone';
  const task = activity.task_title ? `"${activity.task_title}"` : 'a task';

  switch (activity.action_type) {
    case 'moved':
      return (
        <span>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> moved </span>
          <span className="font-bold text-slate-800">{task}</span>
          <span className="text-slate-500"> from </span>
          <span className="font-black text-amber-600 uppercase">{activity.from_state || '—'}</span>
          <span className="text-slate-500"> → </span>
          <span className="font-black text-blue-600 uppercase">{activity.to_state || '—'}</span>
        </span>
      );
    case 'assigned':
      return (
        <span>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> assigned </span>
          <span className="font-bold text-slate-800">{task}</span>
        </span>
      );
    default:
      return (
        <span>
          <span className="font-black text-slate-900">{name}</span>
          <span className="text-slate-500"> {activity.action_type} </span>
          <span className="font-bold text-slate-800">{task}</span>
        </span>
      );
  }
};

const getIcon = (actionType) => {
  switch (actionType) {
    case 'moved': return <Zap size={15} className="text-amber-500" />;
    case 'assigned': return <UserPlus size={15} className="text-blue-500" />;
    case 'completed': return <CheckCircle size={15} className="text-emerald-500" />;
    default: return <Clock size={15} className="text-slate-400" />;
  }
};

const ActivityStream = ({ boardId }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = useCallback(async () => {
    try {
      const response = await api.get(`activities/?board_id=${boardId}`);
      setActivities(response.data);
    } catch (err) {
      console.error('Failed to fetch activities:', err);
    } finally {
      setLoading(false);
    }
  }, [boardId]);

  useEffect(() => {
    fetchActivities();
    const interval = setInterval(fetchActivities, 8000);
    return () => clearInterval(interval);
  }, [fetchActivities]);

  if (loading && activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-300">
        <div className="w-6 h-6 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin mb-3" />
        <p className="text-[9px] font-black uppercase tracking-widest">Syncing...</p>
      </div>
    );
  }

  if (activities.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-6">
        <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Clock size={28} className="text-slate-200" />
        </div>
        <p className="text-slate-400 font-black text-[9px] uppercase tracking-widest">No Activity Yet</p>
        <p className="text-slate-300 text-[9px] font-bold mt-1">Actions will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {activities.map((activity, idx) => (
        <div key={activity.id} className="relative flex gap-4 group">
          {/* Timeline spine */}
          {idx !== activities.length - 1 && (
            <div className="absolute left-[18px] top-[38px] bottom-[-20px] w-[2px] bg-slate-100 group-hover:bg-blue-100 transition-colors" />
          )}

          {/* Icon bubble */}
          <div className="relative z-10 shrink-0 h-9 w-9 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:border-blue-200 group-hover:scale-110 transition-all duration-200">
            {getIcon(activity.action_type)}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 pt-1">
            <div className="text-[11px] leading-relaxed font-medium">
              {formatAction(activity)}
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider mt-1">
              {new Date(activity.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityStream;
