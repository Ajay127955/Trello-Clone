import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const CreateBoard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [background, setBackground] = useState({ type: 'image', value: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setLoading(true);
    try {
      const data = { title };
      if (background.type === 'color') data.background_color = background.value;
      if (background.type === 'image') data.background_image = background.value;
      
      const response = await api.post('boards/', data);
      navigate(`/board-view/${response.data.id}`);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-14 px-4 bg-white dark:bg-[#091E42] border-b border-gray-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-[#0065FF] cursor-pointer">grid_view</span>
<h1 className="text-lg font-bold text-[#091E42] dark:text-white">Productive Flow</h1>
</div>
<nav className="hidden md:flex items-center gap-lg">
<span className="font-inter text-sm font-bold text-[#0065FF] border-b-2 border-[#0065FF] px-1 py-4">Boards</span>
<span className="font-inter text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-1 rounded transition-opacity duration-150 ease-in-out cursor-pointer">Activity</span>
<span className="font-inter text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-1 rounded transition-opacity duration-150 ease-in-out cursor-pointer">Members</span>
<span className="font-inter text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-1 rounded transition-opacity duration-150 ease-in-out cursor-pointer">Settings</span>
</nav>
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold">
                JD
            </div>
</div>
</header>
{/*  Main Content: Create Board Modal/Screen Overlay  */}
<main className="min-h-screen pt-24 pb-20 flex items-center justify-center px-container-padding bg-slate-100/50">
<div className="w-full max-w-[840px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
{/*  Left Side: Preview & Background Selection  */}
<div className="w-full md:w-5/12 p-lg bg-surface-container-low flex flex-col gap-md">
<div className="relative w-full aspect-[4/3] rounded-lg shadow-lg overflow-hidden group transition-all">
{background.type === 'image' ? (
  <img alt="Board Preview" className="w-full h-full object-cover" src={background.value}/>
) : (
  <div className="w-full h-full" style={{ backgroundColor: background.value }}></div>
)}
<div className="absolute inset-0 bg-black/20 p-md">
<div className="w-32 h-6 bg-white/30 rounded blur-[1px]"></div>
<div className="flex gap-xs mt-xs">
<div className="w-8 h-10 bg-white/20 rounded"></div>
<div className="w-8 h-10 bg-white/20 rounded"></div>
<div className="w-8 h-10 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="mt-sm">
<h3 className="font-label-bold text-label-bold text-on-surface-variant mb-sm">Background</h3>
<div className="grid grid-cols-4 gap-xs">
{/*  Photo Options  */}
<button 
  type="button"
  onClick={() => setBackground({ type: 'image', value: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80' })}
  className={`aspect-square rounded overflow-hidden border-2 ${background.value === 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent'}`}
>
<img alt="Option 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200&q=80"/>
</button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'image', value: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80' })}
  className={`aspect-square rounded overflow-hidden border-2 ${background.value === 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent'}`}
>
<img alt="Option 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&q=80"/>
</button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'image', value: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80' })}
  className={`aspect-square rounded overflow-hidden border-2 ${background.value === 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent'}`}
>
<img alt="Option 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&q=80"/>
</button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'image', value: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' })}
  className={`aspect-square rounded overflow-hidden border-2 ${background.value === 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80' ? 'border-blue-600 ring-2 ring-blue-100' : 'border-transparent'}`}
>
<img alt="Option 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=200&q=80"/>
</button>
{/*  Color Options  */}
<button 
  type="button"
  onClick={() => setBackground({ type: 'color', value: '#0079BF' })}
  className={`aspect-square rounded bg-[#0079BF] transition-all ${background.value === '#0079BF' ? 'ring-4 ring-blue-200 border-2 border-blue-600' : ''}`}
></button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'color', value: '#D29034' })}
  className={`aspect-square rounded bg-[#D29034] transition-all ${background.value === '#D29034' ? 'ring-4 ring-orange-200 border-2 border-orange-600' : ''}`}
></button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'color', value: '#519839' })}
  className={`aspect-square rounded bg-[#519839] transition-all ${background.value === '#519839' ? 'ring-4 ring-green-200 border-2 border-green-600' : ''}`}
></button>
<button 
  type="button"
  onClick={() => setBackground({ type: 'color', value: '#B04632' })}
  className={`aspect-square rounded bg-[#B04632] transition-all ${background.value === '#B04632' ? 'ring-4 ring-red-200 border-2 border-red-600' : ''}`}
></button>
</div>
</div>
</div>
{/*  Right Side: Form Content  */}
<form className="w-full md:w-7/12 p-xl flex flex-col gap-lg" onSubmit={handleSubmit}>
<div className="flex justify-between items-start">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Create Board</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Start organizing your tasks in one place.</p>
</div>
<button type="button" onClick={() => navigate('/boards-dashboard')} className="text-on-surface-variant hover:bg-surface-container p-xs rounded-full transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="flex flex-col gap-md">
{/*  Board Title  */}
<div className="flex flex-col gap-xs">
<label className="font-label-bold text-label-bold text-on-surface-variant flex items-center gap-xs" htmlFor="board-title">
                            Board title <span className="text-error">*</span>
</label>
<input 
  className="w-full px-md py-sm border border-outline-variant rounded bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md transition-all" 
  id="board-title" 
  placeholder="Enter board title" 
  type="text"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  required
/>
{!title && <p className="font-label-sm text-label-sm text-on-surface-variant">👋 Board title is required</p>}
</div>
{/*  Workspace Selector  */}
<div className="flex flex-col gap-xs">
<label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="workspace">Workspace</label>
<div className="relative">
<select className="w-full appearance-none px-md py-sm border border-outline-variant rounded bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary font-body-md transition-all cursor-pointer" id="workspace">
<option>Productive Flow Workspace</option>
<option>Marketing Projects</option>
<option>Personal Tasks</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
{/*  Visibility Selector  */}
<div className="flex flex-col gap-xs">
<label className="font-label-bold text-label-bold text-on-surface-variant" htmlFor="visibility">Visibility</label>
<div className="relative">
<select className="w-full appearance-none px-md py-sm border border-outline-variant rounded bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary font-body-md transition-all cursor-pointer" id="visibility">
<option>Workspace (Visible to all members)</option>
<option>Private (Only you can see this)</option>
<option>Public (Anyone on the internet)</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant">expand_more</span>
</div>
</div>
</div>
{/*  Action Footer  */}
<div className="pt-md mt-auto flex flex-col gap-md">
<button type="submit" disabled={loading} className="w-full py-md bg-primary-container text-on-primary font-label-bold rounded shadow-md hover:bg-primary transition-all active:scale-[0.98] disabled:opacity-50">
                        {loading ? 'Creating...' : 'Create Board'}
                    </button>
<p className="font-label-sm text-label-sm text-center text-on-surface-variant">
                        By creating a board, you agree to our 
                        <a className="text-primary hover:underline" href="#">Terms of Service</a>
</p>
</div>
</form>
</div>
</main>
{/*  BottomNavBar for Mobile Shell  */}
<footer className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white dark:bg-[#091E42] px-2 border-t border-gray-200 dark:border-slate-800 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center text-[#0065FF] cursor-pointer">
<span className="material-symbols-outlined" data-weight="fill">dashboard</span>
<span className="font-inter text-[11px] font-medium">Boards</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 cursor-pointer active:bg-slate-100 dark:active:bg-slate-800 transition-transform duration-100 scale-95">
<span className="material-symbols-outlined">notifications</span>
<span className="font-inter text-[11px] font-medium">Activity</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 cursor-pointer active:bg-slate-100 dark:active:bg-slate-800 transition-transform duration-100 scale-95">
<span className="material-symbols-outlined">search</span>
<span className="font-inter text-[11px] font-medium">Search</span>
</div>
<div className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 cursor-pointer active:bg-slate-100 dark:active:bg-slate-800 transition-transform duration-100 scale-95">
<span className="material-symbols-outlined">person</span>
<span className="font-inter text-[11px] font-medium">Account</span>
</div>
</footer>

    </>
  );
};

export default CreateBoard;
