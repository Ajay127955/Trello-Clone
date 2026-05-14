import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const CardDetailView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchCard();
  }, [id]);

  const fetchCard = async () => {
    try {
      const response = await api.get(`cards/${id}/`);
      setCard(response.data);
      setDescription(response.data.description || '');
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to load card details.');
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

  const handlePostComment = () => {
    if (!newComment.trim()) return;
    setComments([{ id: Date.now(), user: 'Me', text: newComment, time: 'Just now', avatar: null }, ...comments]);
    setNewComment('');
  };

  if (loading) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/10 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  if (error || !card) return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md p-8 text-center">
        <div className="bg-white rounded-[2.5rem] p-12 max-w-md w-full shadow-2xl">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">error</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-2">Sync Failure</h2>
            <p className="text-slate-500 mb-8">{error || 'Card not found'}</p>
            <button 
                onClick={() => navigate(-1)}
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black transition-all"
            >
                Back to Board
            </button>
        </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
      <article className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[2.5rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden min-h-[80vh] animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
            onClick={() => navigate(-1)} 
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all z-20"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Main Content */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <header className="mb-10">
            <div className="flex items-center gap-3 text-slate-400 mb-2">
                <span className="material-symbols-outlined text-lg">credit_card</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{card.list_title || 'IN LIST'}</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">{card.title}</h1>
          </header>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
                <h2 className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    <span className="material-symbols-outlined text-lg">subject</span>
                    Description
                </h2>
                {!isEditingDesc && (
                    <button 
                        onClick={() => setIsEditingDesc(true)}
                        className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition-all"
                    >
                        Edit
                    </button>
                )}
            </div>
            
            {isEditingDesc ? (
                <div className="space-y-4">
                    <textarea 
                        className="w-full bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 text-sm font-bold text-slate-700 dark:text-slate-300 border-none focus:ring-2 focus:ring-blue-600/20 min-h-[150px]"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add a more detailed description..."
                    />
                    <div className="flex gap-3">
                        <button 
                            onClick={handleUpdateDescription}
                            className="px-8 py-3 bg-blue-600 text-white rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20"
                        >
                            Save Update
                        </button>
                        <button 
                            onClick={() => {
                                setIsEditingDesc(false);
                                setDescription(card.description || '');
                            }}
                            className="px-8 py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-black text-xs uppercase tracking-widest text-slate-600"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed whitespace-pre-wrap px-2">
                    {card.description || 'No description provided.'}
                </p>
            )}
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">
                <span className="material-symbols-outlined text-lg">forum</span>
                Activity Log
            </h2>
            
            <div className="flex gap-4 mb-10">
              <div className="h-10 w-10 rounded-2xl bg-blue-600 flex-shrink-0 flex items-center justify-center text-white font-black text-xs">
                ME
              </div>
              <div className="flex-grow bg-slate-50 dark:bg-slate-800 rounded-3xl p-2 transition-all focus-within:ring-2 focus-within:ring-blue-600/20">
                <textarea 
                  className="w-full bg-transparent border-none focus:ring-0 p-4 text-sm font-bold text-slate-900 dark:text-white resize-none min-h-[100px]" 
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <div className="flex justify-end p-2">
                  <button 
                    onClick={handlePostComment}
                    className="px-6 py-2 bg-blue-600 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {comments.map(comment => (
                <div key={comment.id} className="flex gap-4 animate-in slide-in-from-top-4 duration-300">
                  <div className="h-10 w-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex-shrink-0 overflow-hidden">
                    {comment.avatar ? (
                      <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-black text-xs uppercase">
                        {comment.user.substring(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-black text-slate-900 dark:text-white">{comment.user}</span>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{comment.time}</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 inline-block max-w-full">
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="md:w-72 bg-slate-50 dark:bg-slate-800/30 p-8 md:p-10 flex flex-col gap-12 border-l border-slate-100 dark:border-slate-800/50">
          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Add to card</h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm group">
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">person</span>
                Members
              </button>
              <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm group">
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">label</span>
                Labels
              </button>
              <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm group">
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">check_box</span>
                Checklist
              </button>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Standard Procedures</h3>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm group">
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">arrow_forward</span>
                Move
              </button>
              <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm group">
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-blue-600 transition-colors">content_copy</span>
                Copy
              </button>
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 my-2" />
              <button className="flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 rounded-2xl text-red-600 border border-red-100 dark:border-red-900/30 transition-all font-black text-xs uppercase tracking-widest shadow-sm">
                <span className="material-symbols-outlined text-lg">archive</span>
                Archive Node
              </button>
            </div>
          </section>
        </aside>
      </article>
    </div>
  );
};

export default CardDetailView;
