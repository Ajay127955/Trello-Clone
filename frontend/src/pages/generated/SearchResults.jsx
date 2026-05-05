import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search).get('q') || '';
  const [results, setResults] = useState({ boards: [], cards: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetchResults();
    } else {
      setLoading(false);
    }
  }, [query]);

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await api.get(`search/?q=${encodeURIComponent(query)}`);
      setResults(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="h-12 w-64 bg-slate-100 dark:bg-slate-800 rounded-2xl animate-pulse mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 bg-slate-100 dark:bg-slate-800 rounded-[2rem] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 pb-24">
      <header className="mb-16">
        <h1 className="font-headline-xl text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">
          Search Results
        </h1>
        <p className="font-label-sm text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
          Showing matches for: <span className="text-blue-600">"{query}"</span>
        </p>
      </header>

      {/* BOARDS SECTION */}
      <section className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-blue-600">grid_view</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Boards ({results.boards.length})</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.boards.map(board => (
            <Link 
              key={board.id}
              to={`/board-view/${board.id}`}
              className="group h-40 p-6 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
            >
               <div 
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundColor: board.background_color || '#475569' }}
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="font-black text-slate-900 dark:text-white text-lg leading-tight tracking-tight">{board.title}</h3>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Open Board →</span>
              </div>
            </Link>
          ))}
          {results.boards.length === 0 && (
            <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-800/20 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-400 font-bold text-sm">No boards found matching your query.</p>
            </div>
          )}
        </div>
      </section>

      {/* CARDS SECTION */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-600">layers</span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Cards ({results.cards.length})</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.cards.map(card => (
            <div 
              key={card.id}
              onClick={() => navigate(`/board-view/${card.list_details?.board_id}`)}
              className="p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-black text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{card.title}</h3>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[9px] font-black text-slate-400 uppercase tracking-widest rounded-lg">
                  {card.list_details?.title || 'Card'}
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 italic mb-4">
                {card.description || 'No description provided.'}
              </p>
              <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1">
                   <span className="material-symbols-outlined text-sm">dashboard</span>
                   {card.list_details?.board_title || 'Board'}
                </span>
                {card.due_date && (
                  <span className="flex items-center gap-1 text-blue-600">
                    <span className="material-symbols-outlined text-sm">event</span>
                    {new Date(card.due_date).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          ))}
          {results.cards.length === 0 && (
            <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-800/20 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-slate-400 font-bold text-sm">No cards found matching your query.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SearchResults;
