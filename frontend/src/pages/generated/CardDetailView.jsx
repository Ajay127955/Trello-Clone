import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const CardDetailView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([
    { id: 1, user: 'David Miller', text: 'The current grid implementation seems a bit rigid. Should we explore auto-fill vs auto-fit for these cards?', time: '2 hours ago', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHWvoUfS2ZkKB6w9vtKzmGf_CrFwY4niHtcMRR79FYuGqXMmkEghkn32EH9r0yuR4tJIYCvehgjA0TNqtkB0tPwR4LpTDqxwv2DK8FmEPFwUh9TXAmoGIQrP8xj9WCekAkqqKRer0B2PYle1d-7shLQBHXY87CyVBZ94eH6DCvU-s-SmkN8_1-LIcKGurqDIWa1cG95-ijSMvQFLp5TNmK7M5jFkg6KUx6GEjIt5E1itzi1bdUiYf6Lo9iq55v3yGlw1RoSkbUxcjR' }
  ]);
  const [newComment, setNewComment] = useState('');

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

  const handlePostComment = () => {
    if (!newComment.trim()) return;
    setComments([{ id: Date.now(), user: 'Me', text: newComment, time: 'Just now', avatar: null }, ...comments]);
    setNewComment('');
  };

  if (loading || !card) return (
    <div className="flex items-center justify-center h-screen bg-slate-900/10 backdrop-blur-sm">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto pt-20 pb-20">
      <article className="bg-white dark:bg-slate-900 w-full max-w-5xl rounded-[2.5rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden min-h-[80vh]">
        {/*  Close Button  */}
        <button onClick={() => navigate(-1)} className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all z-20">
          <span className="material-symbols-outlined">close</span>
        </button>
                    {/*  Comment Input  */}
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

                    {/*  Past Activity  */}
                    <div className="space-y-8">
                      {comments.map(comment => (
                        <div key={comment.id} className="flex gap-4">
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


          {/*  Sidebar Actions (Right)  */}
          <aside className="md:w-64 bg-slate-50 dark:bg-slate-800/30 p-8 flex flex-col gap-10 border-l border-slate-100 dark:border-slate-800/50">
            <section className="space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Add to card</h3>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm">
                  <span className="material-symbols-outlined text-lg">person</span>
                  Members
                </button>
                <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm">
                  <span className="material-symbols-outlined text-lg">label</span>
                  Labels
                </button>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Actions</h3>
              <div className="flex flex-col gap-3">
                <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all font-bold text-sm shadow-sm">
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  Move
                </button>
                <button className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl text-red-600 border border-red-100 dark:border-red-900/50 transition-all font-bold text-sm shadow-sm">
                  <span className="material-symbols-outlined text-lg">archive</span>
                  Archive
                </button>
              </div>
            </section>
          </aside>
        </article>
      </div>
  );
};

export default CardDetailView;
