import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';

const WorkspaceTableView = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterActive, setFilterActive] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: 'due_date', direction: 'asc' });

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await api.get('cards/');
      setCards(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedCards = [...cards].sort((a, b) => {
    if (!a[sortConfig.key]) return 1;
    if (!b[sortConfig.key]) return -1;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  if (loading) return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="h-12 w-64 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse mb-12" />
        <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="h-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl animate-pulse" />
            ))}
        </div>
    </div>
  );

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-12">
      {/* View Toolbar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-16">
        <div>
          <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter">Workspace</h1>
          <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Cross-functional table view</p>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1.5 shadow-inner">
            {[
              { label: 'Board', path: '/boards-dashboard' },
              { label: 'Table', active: true },
              { label: 'Calendar', path: '/board-calendar-view' }
            ].map((v) => (
              <button 
                key={v.label}
                onClick={() => v.path && navigate(v.path)}
                className={`px-8 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${v.active ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setFilterActive(!filterActive)}
            className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border-2 ${
                filterActive 
                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-600'
            }`}
          >
            <span className="material-symbols-outlined text-lg">tune</span>
            <span>Refine</span>
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden mb-16">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th 
                  className="px-10 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] w-[40%] cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleSort('title')}
                >
                  Resource {sortConfig.key === 'title' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">List</th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Board</th>
                <th className="px-6 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Ownership</th>
                <th 
                  className="px-10 py-8 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] cursor-pointer hover:text-blue-600 transition-colors"
                  onClick={() => handleSort('due_date')}
                >
                  ETA {sortConfig.key === 'due_date' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
              {sortedCards.map((card) => (
                <tr 
                  key={card.id} 
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group cursor-pointer"
                  onClick={() => navigate(`/board-view/${card.list_details?.board_id}`)}
                >
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-sm">
                        <span className="material-symbols-outlined text-slate-400 group-hover:text-white transition-colors">layers</span>
                      </div>
                      <span className="font-headline-md text-lg font-black text-slate-900 dark:text-white tracking-tight">{card.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-8">
                    <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border shadow-sm bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-100 dark:border-slate-700">
                      {card.list_details?.title || 'No List'}
                    </span>
                  </td>
                  <td className="px-6 py-8">
                     <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{card.list_details?.board_title || 'No Board'}</span>
                  </td>
                  <td className="px-6 py-8">
                    <div className="flex -space-x-3">
                      {card.assigned_to ? (
                         <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-xl font-black text-xs">
                             {card.assigned_to.username.substring(0, 2).toUpperCase()}
                         </div>
                      ) : (
                        <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 border-4 border-white dark:border-slate-900 flex items-center justify-center text-slate-300">
                            <span className="material-symbols-outlined text-sm">person</span>
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <div className={`flex items-center gap-3 font-black text-[10px] uppercase tracking-widest ${card.due_date ? 'text-blue-600' : 'text-slate-300'}`}>
                      <span className="material-symbols-outlined text-[16px]">timer</span>
                      {card.due_date ? new Date(card.due_date).toLocaleDateString() : 'No ETA'}
                    </div>
                  </td>
                </tr>
              ))}
              {sortedCards.length === 0 && (
                <tr>
                    <td colSpan="5" className="py-20 text-center">
                        <p className="text-slate-400 font-bold">No tasks found across your infrastructure.</p>
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Dashboard Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-slate-900 dark:bg-blue-600 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between group overflow-hidden relative text-white">
          <div className="absolute -right-8 -top-8 opacity-10 group-hover:scale-110 transition-transform duration-1000">
             <span className="material-symbols-outlined text-[180px] text-white">dataset</span>
          </div>
          <div className="relative z-10">
            <h3 className="font-black text-[10px] text-white/50 uppercase tracking-[0.2em] mb-4">Total Nodes</h3>
            <p className="text-7xl font-black tracking-tighter">{cards.length}<span className="text-2xl opacity-40 uppercase ml-2">Cards</span></p>
          </div>
          <div className="relative z-10 mt-12 flex items-center gap-2 font-black text-[10px] text-emerald-400 uppercase tracking-widest bg-emerald-400/10 w-fit px-5 py-2.5 rounded-2xl">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>Real-time monitoring active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceTableView;
