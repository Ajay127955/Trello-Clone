import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const SearchResults = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const query = searchParams.get('q') || '';
  
  const [results, setResults] = useState({ boards: [], cards: [] });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  const handleSearch = async (q) => {
    setLoading(true);
    try {
      const response = await api.get(`search/?q=${q}`);
      setResults(response.data);
    } catch (err) {
      console.error('Search failed', err);
    } finally {
      setLoading(false);
    }
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-4 h-14">
<div className="flex items-center gap-4">
<button onClick={() => navigate('/boards-dashboard')} className="text-slate-600 dark:text-slate-400 active:scale-95 duration-150 hover:bg-slate-50 dark:hover:bg-slate-800 p-2 rounded-lg">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<h1 onClick={() => navigate('/')} className="text-blue-600 dark:text-blue-400 font-black text-xl font-inter tracking-tight cursor-pointer">Productive Flow</h1>
</div>
<div className="flex-1 max-w-2xl px-8 hidden md:block">
<form onSubmit={onSearchSubmit} className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-body-md" data-icon="search">search</span>
<input 
  className="w-full bg-slate-100 border-none rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 text-sm transition-all" 
  placeholder="Search for cards, boards..." 
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
</form>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {user?.username?.substring(0, 2).toUpperCase() || '??'}
            </div>
</div>
</header>

<main className="mt-14 mb-16 flex-1 w-full max-w-7xl mx-auto p-6">
<div className="mb-8">
<div className="flex items-baseline justify-between gap-4">
<h2 className="text-2xl font-black text-slate-900 dark:text-white">Search Results for <span className="text-blue-600">"{query}"</span></h2>
<span className="text-sm text-slate-500">{results.boards.length + results.cards.length} results found</span>
</div>
</div>

{loading ? (
  <div className="flex justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
  </div>
) : (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  <section className="lg:col-span-8 flex flex-col gap-6">
  <div>
  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Boards</h3>
  {results.boards.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {results.boards.map(board => (
      <div 
        key={board.id}
        onClick={() => navigate(`/board-view/${board.id}`)}
        className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all cursor-pointer group"
      >
      <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-inner">
      <span className="material-symbols-outlined">dashboard</span>
      </div>
      </div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{board.title}</h4>
      <p className="text-xs text-slate-500">{board.workspace_name || 'My Workspace'}</p>
      </div>
    ))}
    </div>
  ) : (
    <p className="text-slate-400 italic">No boards found.</p>
  )}
  </div>

  <div className="mt-8">
  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Cards</h3>
  {results.cards.length > 0 ? (
    <div className="flex flex-col gap-3">
    {results.cards.map(card => (
      <div 
        key={card.id}
        onClick={() => navigate(`/board-view/${card.board_id}?cardId=${card.id}`)}
        className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 transition-all cursor-pointer flex items-center justify-between group"
      >
      <div className="flex flex-col gap-1">
      <h5 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{card.title}</h5>
      <div className="flex items-center gap-3">
      <span className="text-xs text-slate-500 flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">list</span> In: <span className="font-medium">{card.list_name}</span>
      </span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="flex items-center gap-3 text-slate-400">
      {card.description && <span className="material-symbols-outlined text-[18px]">description</span>}
      </div>
      </div>
      </div>
    ))}
    </div>
  ) : (
    <p className="text-slate-400 italic">No cards found.</p>
  )}
  </div>
  </section>

  <aside className="lg:col-span-4 flex flex-col gap-8">
  <section className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
  <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-4">Search Tips</h3>
  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-3">
    <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Search for board titles to find projects</li>
    <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Search for card titles or descriptions</li>
    <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> Use specific keywords for better results</li>
  </ul>
  </section>
  </aside>
  </div>
)}
</main>

    </>
  );
};

export default SearchResults;
