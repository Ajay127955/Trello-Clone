import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const CreateBoard = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setLoading(true);
    try {
      const response = await api.post('boards/', { title });
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
<img alt="Board Preview" className="w-full h-full object-cover" data-alt="Stunning aerial view of jagged blue mountain peaks under a clear sky with soft daylight used as a Trello board background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqwLSH9wAvJpeL78OgnuDdsC--GXSa7P46YuERkAzfdCEEluuABZfDQJsMDCa66Ytsr4ogpXZjqqc0x_a7ZEE-f62_nFs7kwHHpaappqC5Im66u9xqbsRhSUW8LrssFruI1MsaXNF6q_kBZc9kDzOtIPfcnhd9XhmdxHo4R4zTXSZEq0NFDYfIUUXT68fl75VmHuMV8w_UUbPc4HxVKz0Iw_K6rCmtVNZd-oU9dqmiTavBPZWmy8NwaWOvgWyHjWZh9NhKzTPh5uaK"/>
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
<button className="aspect-square rounded overflow-hidden border-2 border-primary-container">
<img alt="Option 1" className="w-full h-full object-cover" data-alt="Aerial view of blue mountain peaks for board background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDISIz22kSodLoIUTAMb8N-bYVSVeeGvxD85MrxX7dBrPxmxKzavjTZb-OUxhpvY1zA0znxHDLzjfJbw31GtXSHk8-e0NZ-qlahbOXUkfumwRWr0MSPVwRK4WWIbLngM-g8DXVabhZID5o-KYDNpHe_ACcI2_XOOHXMH26pinevaKVCaMvmnfVwqcjLIduNUjPz6iSjNH7v7pG3u37ccRNikJKaRBGHyVeGky6taxlVSA60UUQhlGQRkYrfJ9QmnhI0bae0gqFIcDyy"/>
</button>
<button className="aspect-square rounded overflow-hidden hover:opacity-80 transition-opacity">
<img alt="Option 2" className="w-full h-full object-cover" data-alt="Golden sand tropical beach with turquoise ocean waves for board background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHCbod2FNZbQxN1DNp9zY2G6kME9TmLFS7eoNlgIub1WRmj7TW33xlXysvDRew0D9JKbciVkVGIslrbSNnJj913-uAzBxXTXdGtxF9nCWRJw9hBjDpB3LaT5JUf8b9UTW3mTsocAs0gqSCvTwqnT-1yj1yY1YQKb5X6goZplRbra2CWWh1euvpKcIag8gYx5jg_Zz3hpRMy4gONqgjZyCUjnmTwZppfraoHc6iPnuv01ia-pNFIa4DDDWJqbuxrU-rV-43zmLkeqN"/>
</button>
<button className="aspect-square rounded overflow-hidden hover:opacity-80 transition-opacity">
<img alt="Option 3" className="w-full h-full object-cover" data-alt="Futuristic city skyline at night with neon lights for board background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuSAuO5rWZEGE0g-kYeEmpbc_FujaWan0aYB6gqTCoUK_2p8HmJ16uyRg7lG0EcRUfc7Nca7PImlojWLZYbXAbJHW0_xi31xP7NlyyMxMk6eT-KGNA3vG80D3o9v-fhapcTlbL-JFDBiUXKLQ9dSwTgCIuICxZupnwGxf6L3JdHIzUmBk7PivsGyZP6HPb9xfiW9MbnA0TWLYB7htkV3YmWOl5KJpxf_4ovDNj-F-XnC_9TTktapdLp7jOTLp0qLtRZhlyIA8tOWWM"/>
</button>
<button className="aspect-square rounded overflow-hidden hover:opacity-80 transition-opacity">
<img alt="Option 4" className="w-full h-full object-cover" data-alt="Soft abstract mesh gradient background with vibrant purple and orange tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt7kyqrQcVk3rH-CX_aL-ezkT6egsvGuwJSjYhTwvn6KbR5sN93yHCwa2hQVMQZcI1vpELoyXG6rgZ_OgZY9ziUJoThSUDb1vx6eHSuSlxpqLMk6cCZQ1ExglpomyFYmdH-dsNbbA65Q-D-AaIke-WO_ydbg5nVDE2CZGb_R4tSFkGoyrptuEVxyqPk5ClzBwKqEpk9BIdGsEExphw4nPDd_xhj2p9_BYqW5Dv4NanovnbJhXKlED1zPBEn_30YgpZegTsNYHg9jnK"/>
</button>
{/*  Color Options  */}
<button className="aspect-square rounded bg-[#0079BF] hover:ring-2 ring-primary transition-all"></button>
<button className="aspect-square rounded bg-[#D29034] hover:ring-2 ring-primary transition-all"></button>
<button className="aspect-square rounded bg-[#519839] hover:ring-2 ring-primary transition-all"></button>
<button className="aspect-square rounded bg-surface-container-highest flex items-center justify-center hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-on-surface-variant text-sm">more_horiz</span>
</button>
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
