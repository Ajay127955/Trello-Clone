import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OwnerDashboard = ({ analytics, board, onCardUpdate, onAssign, onCreateTask }) => {
  const [activeTab, setActiveTab] = useState('table'); // 'table', 'team', 'activity'
  const navigate = useNavigate();

  if (!analytics) return (
    <div className="flex-1 flex items-center justify-center bg-white">
      <div className="animate-pulse text-slate-400 font-black uppercase tracking-widest">Loading Task Control Center...</div>
    </div>
  );

  const tasks = analytics.tasks || [];

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-6 space-y-8 custom-scrollbar">
      {/* Header with Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Task Control Center</h2>
          <p className="text-slate-500 font-medium text-sm">Monitor progress and manage assignments across your team.</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onCreateTask}
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-black hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
          >
            <span className="material-symbols-outlined">add</span>
            Create Task
          </button>
        </div>
      </div>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Tasks" value={analytics.total_tasks} icon="assignment" color="text-blue-600" bg="bg-blue-50" />
        <StatCard title="In Progress" value={analytics.doing_tasks} icon="pending" color="text-amber-600" bg="bg-amber-50" />
        <StatCard title="Completed" value={analytics.completed_tasks} icon="check_circle" color="text-emerald-600" bg="bg-emerald-50" />
        <StatCard title="Completion Rate" value={`${analytics.total_tasks > 0 ? Math.round((analytics.completed_tasks / analytics.total_tasks) * 100) : 0}%`} icon="analytics" color="text-purple-600" bg="bg-purple-50" />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Task Monitoring Table */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveTab('table')}
                  className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'table' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Table View
                </button>
                <button 
                  onClick={() => setActiveTab('team')}
                  className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${activeTab === 'team' ? 'bg-white text-primary shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  Team Analytics
                </button>
              </div>
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Last synced: Just now</span>
            </div>

            <div className="p-0">
              {activeTab === 'table' ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Task</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Assignee</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Priority</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Deadline</th>
                        <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {tasks.length > 0 ? tasks.map(task => (
                        <tr key={task.id} className="hover:bg-slate-50/50 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-black text-slate-900 text-sm">{task.title}</p>
                            <p className="text-xs text-slate-500 truncate max-w-[200px]">{task.description || 'No description'}</p>
                          </td>
                          <td className="px-6 py-4">
                            {task.assigned_to && task.assigned_to.length > 0 ? (
                              <div className="flex items-center gap-2">
                                <div className="h-7 w-7 rounded-full bg-slate-900 text-white text-[10px] font-black flex items-center justify-center">
                                  {task.assigned_to[0].username.substring(0, 2).toUpperCase()}
                                </div>
                                <span className="text-xs font-bold text-slate-700">{task.assigned_to[0].username}</span>
                              </div>
                            ) : (
                              <span className="text-xs font-bold text-slate-400 italic">Unassigned</span>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${
                              task.status === 'completed' ? 'bg-emerald-100 text-emerald-600' :
                              task.status === 'doing' ? 'bg-blue-100 text-blue-600' :
                              'bg-slate-100 text-slate-500'
                            }`}>
                              {task.status}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-[10px] font-black uppercase flex items-center gap-1 ${
                              task.priority === 'urgent' ? 'text-red-500' :
                              task.priority === 'high' ? 'text-orange-500' :
                              task.priority === 'medium' ? 'text-blue-500' :
                              'text-slate-400'
                            }`}>
                              <span className="h-1.5 w-1.5 rounded-full bg-current"></span>
                              {task.priority || 'medium'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-xs font-bold text-slate-600">
                              {task.due_date ? new Date(task.due_date).toLocaleDateString() : 'No deadline'}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button 
                              onClick={() => onCardUpdate(task)}
                              className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-900 transition-all"
                            >
                              <span className="material-symbols-outlined text-[20px]">edit</span>
                            </button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan="6" className="px-6 py-12 text-center text-slate-400 font-bold">No tasks found. Create one to get started.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {analytics.employees.map(employee => (
                    <EmployeeCard key={employee.id} employee={employee} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col overflow-hidden h-full">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
              <h3 className="font-black text-slate-900 tracking-tight">Activity Stream</h3>
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[600px] custom-scrollbar">
              {analytics.activities.length > 0 ? (
                analytics.activities.map((activity, i) => (
                  <ActivityItem key={activity.id || i} activity={activity} />
                ))
              ) : (
                <div className="text-center py-12 text-slate-400 font-bold text-sm">No recent activity.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color, bg }) => (
  <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
    <div className={`h-12 w-12 rounded-2xl ${bg} ${color} flex items-center justify-center`}>
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
      <p className="text-2xl font-black text-slate-900">{value}</p>
    </div>
  </div>
);

const EmployeeCard = ({ employee }) => (
  <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 space-y-4 hover:border-blue-200 transition-colors group">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-black text-xs text-white bg-slate-900 shadow-lg relative`}>
          {employee.username.substring(0, 2).toUpperCase()}
          {employee.is_online && (
            <span className="absolute bottom-0 right-0 h-3 w-3 bg-emerald-500 border-2 border-white rounded-full"></span>
          )}
        </div>
        <div>
          <h4 className="font-black text-slate-900 text-sm">{employee.username}</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            {employee.is_online ? 'Active Now' : 'Offline'}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Current Status</p>
        <p className={`text-xs font-black ${employee.current_task === 'Idle' ? 'text-slate-400' : 'text-blue-600'}`}>
          {employee.current_task}
        </p>
      </div>
    </div>

    <div className="space-y-2 pt-2">
      <div className="flex justify-between items-end">
        <p className="text-[10px] font-black text-slate-500 uppercase">Workflow Progress</p>
        <p className="text-sm font-black text-slate-900">{employee.progress}%</p>
      </div>
      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-1000" 
          style={{ width: `${employee.progress}%` }}
        />
      </div>
    </div>

    <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="bg-white p-2 rounded-xl text-center border border-slate-100">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Assigned</p>
        <p className="font-black text-slate-900">{employee.assigned_count}</p>
      </div>
      <div className="bg-white p-2 rounded-xl text-center border border-slate-100">
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Done</p>
        <p className="font-black text-slate-900">{employee.completed_count}</p>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="flex gap-4 group">
    <div className="flex flex-col items-center">
      <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform">
        <span className="material-symbols-outlined text-sm">history</span>
      </div>
      <div className="w-[2px] flex-1 bg-slate-100 mt-2"></div>
    </div>
    <div className="pb-6">
      <p className="text-sm text-slate-600 leading-snug">
        <span className="font-black text-slate-900">{activity.user.username}</span> {activity.action} <span className="font-bold text-blue-600">"{activity.target_name}"</span>
      </p>
      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">
        {new Date(activity.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  </div>
);

export default OwnerDashboard;
