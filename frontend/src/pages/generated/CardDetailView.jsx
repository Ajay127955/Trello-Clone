import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const CardDetailView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchCard();
  }, [id]);

  const fetchCard = async () => {
    try {
      const response = await api.get(`cards/${id}/`);
      setCard(response.data);
      setDescription(response.data.description || '');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateDescription = async () => {
    try {
      const response = await api.patch(`cards/${id}/`, { description });
      setCard(response.data);
      setIsEditingDesc(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddChecklist = async () => {
    const title = prompt('Enter checklist title:', 'Checklist');
    if (!title) return;
    try {
      await api.post('checklists/', { title, card: id });
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddChecklistItem = async (checklistId) => {
    const text = prompt('Enter item text:');
    if (!text) return;
    try {
      await api.post('checklist-items/', { text, checklist: checklistId, position: 999 });
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleChecklistItem = async (item) => {
    try {
      await api.patch(`checklist-items/${item.id}/`, { completed: !item.completed });
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteChecklist = async (checklistId) => {
    if (!window.confirm('Delete this checklist?')) return;
    try {
      await api.delete(`checklists/${checklistId}/`);
      fetchCard();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading || !card) return null;

  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none flex justify-between items-center w-full px-4 h-14 z-50 fixed top-0">
<div className="flex items-center gap-4">
<button 
  onClick={() => navigate('/boards-dashboard')}
  className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded transition-colors"
>
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<span 
  onClick={() => navigate('/boards-dashboard')}
  className="text-xl font-black tracking-tight text-slate-900 dark:text-white cursor-pointer"
>
  Trello
</span>
<nav className="hidden md:flex gap-6 ml-4">
<a className="text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 pb-1 font-sans antialiased text-body-md"  onClick={(e) => { e.preventDefault(); navigate('/boards-dashboard'); }}>Boards</a>
<a className="text-slate-600 dark:text-slate-400 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-sans antialiased text-body-md" href="#">Templates</a>
</nav>
</div>
<div className="flex items-center gap-2">
<button 
  onClick={() => navigate('/notifications')}
  className="text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded transition-colors"
>
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div 
  onClick={() => navigate('/member-profile')}
  className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
>
<img alt="User" data-alt="professional portrait of a young creative professional with a friendly smile, clean lighting, studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLGk2-hEZQvv-t3Tue5tPE-sgRvZEwQ9TEe2zmV-GdpA5oqKL2vPF7qvXHnoemxak6h0dpwVjUWpPJk0Ono7Cl7zgTCqz0g1NK8sMso88Ef_2ucIEm4eDqgNA4PafRczdYw3x5qmiy-jhM8vybb6XOMMD78vCyAQ5y6ShAwvXAB0afStJPrfoLYZsFPGb-QE6qAof9oPLyKTtMwm5P1kFa0YFlQxOo86NdcDL9N1R0mpQP8JQKkdBUeoRvMCJjdOPEMPJQyOAR-rT1"/>
</div>
</div>
</header>
{/*  Modal Backdrop Overlay  */}
<div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] flex items-start justify-center overflow-y-auto pt-12 pb-20 px-4">
{/*  Detailed Card View Modal  */}
<article className="bg-surface-container-lowest w-full max-w-4xl rounded-xl shadow-2xl relative flex flex-col md:flex-row gap-0 overflow-hidden">
{/*  Close Button (Mobile/Top Right)  */}
<button 
  onClick={() => navigate(-1)}
  className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 z-10"
>
<span className="material-symbols-outlined">close</span>
</button>
{/*  Main Content Area (Left)  */}
<div className="flex-grow p-6 md:p-8 md:pr-4">
{/*  Title & List Section  */}
<header className="flex gap-4 mb-8">
<span className="material-symbols-outlined text-slate-500 mt-1">credit_card</span>
<div className="flex-grow">
<h1 className="font-headline-md text-headline-md text-on-surface mb-1">{card.title}</h1>
<p className="font-body-md text-body-md text-slate-500">
                            in list <span className="underline cursor-pointer hover:text-primary">List {card.list}</span>
</p>
</div>
</header>
<div className="space-y-10">
{/*  Badges Row (Members & Labels)  */}
<section className="flex flex-wrap gap-8 ml-10">
<div className="space-y-2">
<h3 className="font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">Members</h3>
<div className="flex gap-1 items-center">
  {card.assigned_members && card.assigned_members.map(member => (
    <div key={member.id} className="h-8 w-8 rounded-full bg-primary border-2 border-white ring-1 ring-slate-100 flex items-center justify-center text-white text-[10px] font-bold" title={member.username}>
      {member.username?.substring(0, 2).toUpperCase() || '??'}
    </div>
  ))}
  <button onClick={() => alert('Invite member')} className="h-8 w-8 rounded-full bg-surface-container-high hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
    <span className="material-symbols-outlined text-sm">add</span>
  </button>
</div>
</div>
<div className="space-y-2">
<h3 className="font-label-bold text-label-bold text-slate-500 uppercase tracking-wider">Labels</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-800 font-label-bold text-[11px] flex items-center gap-1">
                                    UI DESIGN
                                </span>
<button onClick={() => alert('Add label')} className="px-2 py-1.5 rounded-lg bg-surface-container-high hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
</div>
</section>
{/*  Description Section  */}
<section className="space-y-4">
<div className="flex gap-4 items-start">
<span className="material-symbols-outlined text-slate-500 mt-1">notes</span>
<div className="flex-grow space-y-3">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-body-lg font-bold text-on-surface">Description</h2>
{!isEditingDesc && (
  <button onClick={() => setIsEditingDesc(true)} className="px-3 py-1 bg-surface-container-high rounded text-slate-600 hover:bg-slate-200 font-label-bold transition-colors">Edit</button>
)}
</div>
{isEditingDesc ? (
  <div className="mt-2 space-y-3">
    <textarea
      className="w-full min-h-[120px] p-4 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-body-md"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Add a more detailed description..."
      autoFocus
    />
    <div className="flex gap-2">
      <button onClick={handleUpdateDescription} className="px-4 py-2 bg-primary text-white rounded font-label-bold shadow hover:bg-primary/90 transition-colors">Save</button>
      <button onClick={() => { setIsEditingDesc(false); setDescription(card.description || ''); }} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded font-label-bold transition-colors">Cancel</button>
    </div>
  </div>
) : (
  <div onClick={() => setIsEditingDesc(true)} className="bg-surface-container-low rounded-xl p-4 min-h-[100px] border border-transparent hover:border-slate-300 cursor-pointer transition-all">
    {card.description ? (
      <p className="font-body-md text-body-md text-slate-700 leading-relaxed whitespace-pre-wrap">{card.description}</p>
    ) : (
      <p className="font-body-md text-body-md text-slate-500 leading-relaxed italic">Add a more detailed description...</p>
    )}
  </div>
)}
</div>
</div>
</section>
{/*  Checklist Section  */}
{card.checklists && card.checklists.map(checklist => {
  const checklistItems = checklist.items || [];
  const completedCount = checklistItems.filter(i => i.completed).length;
  const progress = checklistItems.length > 0 ? Math.round((completedCount / checklistItems.length) * 100) : 0;
  
  return (
    <section key={checklist.id} className="space-y-4">
      <div className="flex gap-4 items-start">
        <span className="material-symbols-outlined text-slate-500 mt-1">check_box</span>
        <div className="flex-grow space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-headline-md text-body-lg font-bold text-on-surface">{checklist.title}</h2>
            <button 
              onClick={() => handleDeleteChecklist(checklist.id)}
              className="px-3 py-1 bg-surface-container-high rounded text-slate-600 hover:bg-red-50 hover:text-red-700 font-label-bold transition-colors"
            >
              Delete
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-label-sm text-slate-500">{progress}%</span>
            <div className="flex-grow h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
          <ul className="space-y-1">
            {(checklist.items || []).map(item => (
              <li key={item.id} className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg group">
                <input 
                  type="checkbox" 
                  checked={item.completed} 
                  onChange={() => handleToggleChecklistItem(item)}
                  className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" 
                />
                <span className={`font-body-md text-slate-700 ${item.completed ? 'line-through decoration-slate-400' : ''}`}>
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
          <button 
            onClick={() => handleAddChecklistItem(checklist.id)}
            className="ml-1 px-4 py-2 bg-surface-container-high rounded-xl text-slate-700 hover:bg-slate-200 font-label-bold transition-all text-sm"
          >
            Add an item
          </button>
        </div>
      </div>
    </section>
  );
})}
<button 
  onClick={handleAddChecklist}
  className="flex items-center gap-2 px-4 py-2 bg-surface-container-high rounded-xl text-slate-700 hover:bg-slate-200 font-label-bold transition-all text-sm ml-10"
>
  <span className="material-symbols-outlined text-sm">add</span>
  Add a checklist
</button>
{/*  Activity Section  */}
<section className="space-y-6">
<div className="flex gap-4 items-start">
<span className="material-symbols-outlined text-slate-500 mt-1">segment</span>
<div className="flex-grow space-y-6">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-body-lg font-bold text-on-surface">Activity</h2>
<button className="px-3 py-1 bg-surface-container-high rounded text-slate-600 hover:bg-slate-200 font-label-bold transition-colors">Show details</button>
</div>
{/*  Comment Input  */}
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-primary flex-shrink-0 flex items-center justify-center text-white font-bold text-[10px]">MY</div>
<div className="flex-grow bg-white border border-slate-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-primary-container transition-all overflow-hidden">
<textarea className="w-full border-none focus:ring-0 p-3 text-body-md resize-none min-h-[40px]" placeholder="Write a comment..."></textarea>
<div className="flex justify-between items-center p-2 bg-slate-50 border-t border-slate-100">
<div className="flex gap-1">
<button className="p-1 hover:bg-slate-200 rounded text-slate-500"><span className="material-symbols-outlined text-xl">attachment</span></button>
<button className="p-1 hover:bg-slate-200 rounded text-slate-500"><span className="material-symbols-outlined text-xl">alternate_email</span></button>
<button className="p-1 hover:bg-slate-200 rounded text-slate-500"><span className="material-symbols-outlined text-xl">sentiment_satisfied</span></button>
</div>
<button className="px-4 py-1.5 bg-primary text-white font-label-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">Save</button>
</div>
</div>
</div>
{/*  Past Activity  */}
<div className="space-y-6">
<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200 flex-shrink-0 overflow-hidden">
<img alt="User" data-alt="professional male headshot with modern clean lighting and blurred office backdrop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHWvoUfS2ZkKB6w9vtKzmGf_CrFwY4niHtcMRR79FYuGqXMmkEghkn32EH9r0yuR4tJIYCvehgjA0TNqtkB0tPwR4LpTDqxwv2DK8FmEPFwUh9TXAmoGIQrP8xj9WCekAkqqKRer0B2PYle1d-7shLQBHXY87CyVBZ94eH6DCvU-s-SmkN8_1-LIcKGurqDIWa1cG95-ijSMvQFLp5TNmK7M5jFkg6KUx6GEjIt5E1itzi1bdUiYf6Lo9iq55v3yGlw1RoSkbUxcjR"/>
</div>
<div className="space-y-1">
<div className="flex items-baseline gap-2">
<span className="font-label-bold text-slate-900">David Miller</span>
<span className="text-[11px] text-slate-500">2 hours ago</span>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm inline-block max-w-lg">
<p className="font-body-md text-slate-700">The current grid implementation seems a bit rigid. Should we explore auto-fill vs auto-fit for these cards?</p>
</div>
<div className="flex gap-3 text-[11px] text-slate-500 ml-1">
<button className="underline hover:text-slate-800">Reply</button>
<span>•</span>
<button className="underline hover:text-slate-800">Edit</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
{/*  Sidebar Actions (Right)  */}
<aside className="md:w-64 bg-surface-container-low p-6 md:p-8 flex flex-col gap-8 border-l border-slate-200/50">
<section className="space-y-3">
<h3 className="font-label-bold text-[11px] text-slate-500 uppercase tracking-widest">Add to card</h3>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="person">person</span>
<span className="font-body-md font-medium">Members</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="label">label</span>
<span className="font-body-md font-medium">Labels</span>
</button>
<button 
  onClick={handleAddChecklist}
  className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group"
>
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="check_box">check_box</span>
<span className="font-body-md font-medium">Checklist</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="schedule">schedule</span>
<span className="font-body-md font-medium">Dates</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="attachment">attachment</span>
<span className="font-body-md font-medium">Attachment</span>
</button>
</div>
</section>
<section className="space-y-3">
<h3 className="font-label-bold text-[11px] text-slate-500 uppercase tracking-widest">Actions</h3>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="arrow_forward">arrow_forward</span>
<span className="font-body-md font-medium">Move</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="content_copy">content_copy</span>
<span className="font-body-md font-medium">Copy</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="visibility">visibility</span>
<span className="font-body-md font-medium">Watch</span>
</button>
<div className="h-px bg-slate-200 my-2"></div>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-red-50 hover:text-red-700 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-red-700" data-icon="archive">archive</span>
<span className="font-body-md font-medium">Archive</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 bg-surface-container-high hover:bg-slate-200 rounded-xl text-slate-700 transition-all group">
<span className="material-symbols-outlined text-lg text-slate-500 group-hover:text-slate-900" data-icon="share">share</span>
<span className="font-body-md font-medium">Share</span>
</button>
</div>
</section>
<div className="mt-auto pt-8 border-t border-slate-200/50">
<p className="text-[10px] text-slate-400 font-medium tracking-tight">Created May 12, 2024</p>
</div>
</aside>
</article>
</div>
{/*  Background Board Layout (Dummy content behind modal)  */}
<main className="pt-14 h-screen w-full flex bg-[#F7F8F9] overflow-x-auto p-gutter gap-gutter">
<div className="flex-shrink-0 w-[272px] bg-slate-200/50 rounded-xl h-fit p-3">
<h2 className="font-label-bold mb-3 px-2">Development</h2>
<div className="space-y-sm">
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/50">Card Content</div>
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/50 ring-2 ring-primary">implement Bento Grid...</div>
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/50">Bug Fixes</div>
</div>
</div>
<div className="flex-shrink-0 w-[272px] bg-slate-200/50 rounded-xl h-fit p-3">
<h2 className="font-label-bold mb-3 px-2">Ready for QA</h2>
<div className="space-y-sm">
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-200/50">Header Responsive</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-16 px-4 pb-safe bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-[0_-1px_3px_rgba(0,0,0,0.05)] z-50">
<button className="flex flex-col items-center justify-center text-blue-600 dark:text-blue-400 font-bold active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="text-[11px] font-medium Inter">Boards</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
<span className="material-symbols-outlined" data-icon="search">search</span>
<span className="text-[11px] font-medium Inter">Search</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="text-[11px] font-medium Inter">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[11px] font-medium Inter">Account</span>
</button>
</nav>

    </>
  );
};

export default CardDetailView;
