import React from 'react';

const CardDetailModal = ({ card, onClose, listName, boardMembers = [], isManager = false, onAssign }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-start justify-center overflow-y-auto pt-12 pb-20 px-4">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl relative flex flex-col md:flex-row gap-0 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors z-10 p-2 hover:bg-slate-100 rounded-full"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Main Content Area (Left) */}
        <div className="flex-grow p-8 md:pr-4">
          <header className="flex gap-4 mb-8">
            <span className="material-symbols-outlined text-slate-400 mt-1">credit_card</span>
            <div className="flex-grow">
              <h1 className="text-2xl font-black text-slate-900 mb-1 tracking-tight">{card.title}</h1>
              <p className="text-sm font-medium text-slate-500">
                in list <span className="underline cursor-pointer hover:text-primary transition-colors">{listName}</span>
              </p>
            </div>
          </header>

          <div className="space-y-10 ml-10">
            {/* Badges Row */}
            <section className="flex flex-wrap gap-8">
              <div className="space-y-2">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Assignee</h3>
                <div className="flex gap-1 items-center">
                  {card.assigned_to ? (
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs border-2 border-white shadow-sm">
                        {card.assigned_to.username.substring(0, 2).toUpperCase()}
                        </div>
                        <span className="text-xs font-bold text-slate-700">{card.assigned_to.username}</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400 italic">No one assigned</span>
                  )}
                  {isManager && (
                    <div className="relative group/menu ml-2">
                        <button className="h-8 w-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
                            <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl border border-slate-100 rounded-xl hidden group-hover/menu:block z-50 p-2">
                            <p className="text-[10px] font-black text-slate-400 p-2 uppercase tracking-widest">Assign Member</p>
                            {boardMembers.map(m => (
                                <button 
                                    key={m.user.id}
                                    onClick={() => onAssign(m.user.id)}
                                    className="w-full text-left px-3 py-2 hover:bg-slate-50 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-2"
                                >
                                    <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-black">{m.user.username.substring(0, 2).toUpperCase()}</div>
                                    {m.user.username}
                                </button>
                            ))}
                        </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Labels</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] tracking-wider uppercase">
                    FEATURE
                  </span>
                  <button className="px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors">
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Description Section */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">notes</span>
                  <h2 className="font-black text-slate-900">Description</h2>
                </div>
                <button className="text-xs font-bold text-primary hover:underline">Edit</button>
              </div>
              <div className="bg-slate-50/50 rounded-xl p-4 min-h-[100px] border border-slate-100 hover:border-slate-200 cursor-pointer transition-all">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {card.description || "No description provided yet. Click to add more details about this task."}
                </p>
              </div>
            </section>

            {/* Activity Section */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-slate-400">segment</span>
                  <h2 className="font-black text-slate-900">Activity</h2>
                </div>
                <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Show details</button>
              </div>
              
              <div className="flex gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary font-bold text-[10px]">
                  MY
                </div>
                <div className="flex-grow bg-slate-50/50 border border-slate-100 rounded-xl focus-within:ring-4 focus-within:ring-primary/5 focus-within:bg-white transition-all overflow-hidden">
                  <textarea 
                    className="w-full border-none focus:ring-0 p-3 text-sm resize-none min-h-[40px] bg-transparent" 
                    placeholder="Write a comment..."
                  ></textarea>
                  <div className="flex justify-end p-2 border-t border-slate-100">
                    <button className="px-4 py-1.5 bg-primary text-white font-bold rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all text-xs">Save</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar Actions (Right) */}
        <aside className="md:w-64 bg-slate-50/80 backdrop-blur-sm p-8 flex flex-col gap-8 border-l border-slate-100">
          <section className="space-y-3">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Add to card</h3>
            <div className="flex flex-col gap-2">
              <ActionButton icon="person" label="Members" />
              <ActionButton icon="label" label="Labels" />
              <ActionButton icon="check_box" label="Checklist" />
              <ActionButton icon="schedule" label="Dates" />
              <ActionButton icon="attachment" label="Attachment" />
            </div>
          </section>
          <section className="space-y-3">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</h3>
            <div className="flex flex-col gap-2">
              <ActionButton icon="arrow_forward" label="Move" />
              <ActionButton icon="content_copy" label="Copy" />
              <ActionButton icon="visibility" label="Watch" />
              <div className="h-px bg-slate-200 my-2"></div>
              <ActionButton icon="archive" label="Archive" color="text-red-500" />
              <ActionButton icon="share" label="Share" />
            </div>
          </section>
          <div className="mt-auto pt-8">
            <p className="text-[10px] text-slate-400 font-bold tracking-tight">Created by System</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

const ActionButton = ({ icon, label, color = "text-slate-600" }) => (
  <button className="flex items-center gap-3 px-3 py-2 bg-white hover:bg-slate-100 rounded-xl shadow-sm border border-slate-100 transition-all group w-full text-left">
    <span className={`material-symbols-outlined text-lg ${color} group-hover:scale-110 transition-transform`}>{icon}</span>
    <span className="text-xs font-black text-slate-900">{label}</span>
  </button>
);

export default CardDetailModal;
