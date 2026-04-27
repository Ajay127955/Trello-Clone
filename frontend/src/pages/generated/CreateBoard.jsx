import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const CreateBoard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [background, setBackground] = useState({ type: 'image', value: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80' });
  const [loading, setLoading] = useState(false);
  const [workspaces, setWorkspaces] = useState([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState('');

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const fetchWorkspaces = async () => {
    try {
      const response = await api.get('workspaces/');
      setWorkspaces(response.data);
      if (response.data.length > 0) {
        setSelectedWorkspace(response.data[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch workspaces', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    setLoading(true);
    try {
      const data = { title };
      if (selectedWorkspace) data.workspace_id = selectedWorkspace;
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center h-16 px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4">
          <span onClick={() => navigate('/boards-dashboard')} className="material-symbols-outlined text-blue-600 cursor-pointer text-3xl">grid_view</span>
          <h1 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Productive Flow</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-black shadow-lg">
            {user?.username?.substring(0, 2).toUpperCase() || '??'}
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20 flex items-center justify-center px-4">
        <div className="w-full max-w-4xl bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-800">
          {/*  Left Side: Preview & Background Selection  */}
          <div className="w-full md:w-5/12 p-10 bg-slate-50 dark:bg-slate-900/50 flex flex-col gap-8">
            <div className="relative w-full aspect-[4/3] rounded-3xl shadow-2xl overflow-hidden group transition-all ring-1 ring-black/5">
              {background.type === 'image' ? (
                <img alt="Board Preview" className="w-full h-full object-cover" src={background.value}/>
              ) : (
                <div className="w-full h-full" style={{ backgroundColor: background.value }}></div>
              )}
              <div className="absolute inset-0 bg-black/20 p-6">
                <div className="w-32 h-6 bg-white/30 rounded-lg backdrop-blur-sm"></div>
                <div className="flex gap-2 mt-4">
                  <div className="w-12 h-16 bg-white/20 rounded-xl backdrop-blur-md"></div>
                  <div className="w-12 h-16 bg-white/20 rounded-xl backdrop-blur-md"></div>
                  <div className="w-12 h-16 bg-white/20 rounded-xl backdrop-blur-md"></div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Background</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
                  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
                  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
                  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80'
                ].map(url => (
                  <button 
                    key={url}
                    type="button"
                    onClick={() => setBackground({ type: 'image', value: url })}
                    className={`aspect-square rounded-xl overflow-hidden border-4 transition-all ${background.value === url ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent'}`}
                  >
                    <img alt="Option" className="w-full h-full object-cover" src={url}/>
                  </button>
                ))}
                
                {['#0079BF', '#D29034', '#519839', '#B04632'].map(color => (
                  <button 
                    key={color}
                    type="button"
                    onClick={() => setBackground({ type: 'color', value: color })}
                    className={`aspect-square rounded-xl transition-all border-4 ${background.value === color ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent'}`}
                    style={{ backgroundColor: color }}
                  ></button>
                ))}
              </div>
            </div>
          </div>

          {/*  Right Side: Form Content  */}
          <form className="w-full md:w-7/12 p-12 flex flex-col gap-10" onSubmit={handleSubmit}>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">New Board</h2>
                <p className="text-slate-500 font-medium mt-2">Bring your ideas to life.</p>
              </div>
              <button type="button" onClick={() => navigate('/boards-dashboard')} className="text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-2xl transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase mb-2 ml-1" htmlFor="board-title">
                  Board Title <span className="text-red-500">*</span>
                </label>
                <input 
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold transition-all outline-none" 
                  id="board-title" 
                  placeholder="e.g. Website Launch" 
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-400 uppercase mb-2 ml-1" htmlFor="workspace">Workspace</label>
                <select 
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 font-bold transition-all outline-none cursor-pointer appearance-none" 
                  id="workspace"
                  value={selectedWorkspace}
                  onChange={(e) => setSelectedWorkspace(e.target.value)}
                >
                  {workspaces.map(ws => (
                    <option key={ws.id} value={ws.id}>{ws.name}</option>
                  ))}
                  {workspaces.length === 0 && <option value="">No Workspaces Available</option>}
                </select>
              </div>
            </div>

            <div className="pt-6 mt-auto">
              <button type="submit" disabled={loading || !title} className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 disabled:shadow-none">
                {loading ? 'Creating...' : 'Create Board'}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateBoard;
