import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useAuth } from '../context/AuthContext';
import useWebSocket from '../hooks/useWebSocket';
import ActivityStream from '../components/ActivityStream';
import CreateTaskModal from '../components/CreateTaskModal';

const BoardView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [board, setBoard] = useState(null);
  const [activities, setActivities] = useState([]);
  const [isLeader, setIsLeader] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Modals
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchBoard = useCallback(async () => {
    try {
      const response = await api.get(`boards/${id}/`);
      setBoard(response.data);
      setIsLeader(response.data.owner.id === user.id);
    } catch (err) {
      setError('Board not found or access denied');
    } finally {
      setLoading(false);
    }
  }, [id, user.id]);

  const fetchActivities = useCallback(async () => {
    try {
      const response = await api.get(`activities/?board_id=${id}`);
      setActivities(response.data);
    } catch (err) {
      console.error('Fetch activities error', err);
    }
  }, [id]);

  useEffect(() => {
    fetchBoard();
    fetchActivities();
  }, [fetchBoard, fetchActivities]);

  // WebSocket for Real-time Sync
  const { sendMessage } = useWebSocket(id, (msg) => {
    if (msg.msg_type === 'board_deleted') {
      navigate('/');
    } else {
      fetchBoard();
      fetchActivities();
    }
  });

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    if (!isLeader) {
      // Member Flow: Moving between TODO, DOING, COMPLETED
      const assignmentId = draggableId;
      const newStatus = destination.droppableId;
      
      try {
        await api.patch(`assignments/${assignmentId}/`, { status: newStatus });
        fetchBoard();
      } catch (err) {
        console.error('Move task error', err);
      }
    }
    // Note: Leaders don't move tasks between categories via drag-and-drop in this specific spec,
    // but we could implement category reordering if needed.
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const name = prompt('Category Name:');
    if (!name) return;
    try {
      await api.post('categories/', { name, board: id, position: board.categories.length });
      fetchBoard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      await api.post('tasks/', { 
        ...taskData, 
        category: selectedCategory.id,
        assigned_user_ids: taskData.assigned_member_ids
      });
      setIsCreateTaskOpen(false);
      fetchBoard();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteBoard = async () => {
    if (!window.confirm('CRITICAL: This will delete the board for ALL members. Continue?')) return;
    try {
      await api.delete(`boards/${id}/`);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50 font-black uppercase text-xs tracking-widest animate-pulse">Synchronizing Workspace...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-red-500 font-black">{error}</div>;

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-50 shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="material-symbols-outlined text-white text-lg">grid_view</span>
            </div>
            <h1 className="text-xl font-black tracking-tighter text-slate-900">Subzillo</h1>
          </Link>
          <div className="h-6 w-px bg-slate-200 mx-2"></div>
          <div className="flex items-center gap-3">
             <h2 className="text-sm font-black text-slate-800">{board.title}</h2>
             <span className={`px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-widest ${isLeader ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
               {isLeader ? 'Project Leader' : 'Team Member'}
             </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
           {isLeader && (
             <button onClick={handleDeleteBoard} className="p-2 hover:bg-red-50 text-red-400 hover:text-red-600 rounded-xl transition-all">
               <span className="material-symbols-outlined">delete</span>
             </button>
           )}
           <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-600">
             {user.username.substring(0, 2).toUpperCase()}
           </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Workspace */}
        <main className="flex-1 flex flex-col min-w-0">
          {isLeader ? (
            /* LEADER DASHBOARD: Category Layout */
            <div className="flex-1 overflow-x-auto p-8 flex items-start gap-8 custom-scrollbar">
              {board.categories.map((category) => (
                <div key={category.id} className="w-80 shrink-0 flex flex-col bg-white rounded-3xl border border-slate-200 shadow-sm max-h-full">
                  <div className="p-5 flex items-center justify-between border-b border-slate-50">
                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-widest">{category.name}</h3>
                    <button 
                      onClick={() => { setSelectedCategory(category); setIsCreateTaskOpen(true); }}
                      className="h-7 w-7 rounded-lg hover:bg-slate-50 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all"
                    >
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                    {category.tasks.map((task) => (
                      <div key={task.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all group">
                        <h4 className="text-xs font-black text-slate-800 mb-3">{task.title}</h4>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-1.5">
                            {task.assigned_users.map(u => (
                              <div key={u.id} className="h-6 w-6 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center text-[8px] font-black uppercase">
                                {u.username.substring(0, 2)}
                              </div>
                            ))}
                          </div>
                          <div className="text-[9px] font-bold text-slate-400">
                             {task.assignments.length} Assignees
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button 
                onClick={handleCreateCategory}
                className="w-80 shrink-0 h-16 border-2 border-dashed border-slate-200 rounded-3xl flex items-center justify-center gap-2 text-slate-400 hover:border-blue-400 hover:text-blue-600 transition-all font-black text-xs uppercase tracking-widest group"
              >
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">add_circle</span>
                New Category
              </button>
            </div>
          ) : (
            /* MEMBER DASHBOARD: Fixed Kanban Workflow */
            <div className="flex-1 overflow-x-auto p-8 flex items-start gap-8 custom-scrollbar">
              <DragDropContext onDragEnd={onDragEnd}>
                {['todo', 'doing', 'completed'].map((status) => {
                  // Find tasks assigned to this member with this status
                  const memberTasks = [];
                  board.categories.forEach(cat => {
                    cat.tasks.forEach(task => {
                      const assignment = task.assignments.find(a => a.user.id === user.id && a.status === status);
                      if (assignment) {
                        memberTasks.push({ ...task, assignmentId: assignment.id });
                      }
                    });
                  });

                  return (
                    <div key={status} className="w-80 shrink-0 flex flex-col bg-slate-100/50 rounded-3xl border border-slate-200/40 p-2 max-h-full">
                      <div className="px-4 py-4 flex items-center justify-between">
                         <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{status}</h3>
                         <span className="h-5 w-5 rounded-full bg-white text-[9px] font-black flex items-center justify-center shadow-sm text-slate-500">{memberTasks.length}</span>
                      </div>
                      <Droppable droppableId={status}>
                        {(provided, snapshot) => (
                          <div 
                            {...provided.droppableProps} 
                            ref={provided.innerRef} 
                            className={`flex-1 overflow-y-auto px-2 space-y-3 py-2 min-h-[200px] rounded-2xl transition-colors ${snapshot.isDraggingOver ? 'bg-slate-200/50' : ''}`}
                          >
                            {memberTasks.map((task, index) => (
                              <Draggable key={task.assignmentId} draggableId={task.assignmentId.toString()} index={index}>
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group ${snapshot.isDragging ? 'shadow-2xl scale-105 z-50 ring-2 ring-blue-600' : ''}`}
                                  >
                                    <p className="text-xs font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{task.title}</p>
                                    <div className="mt-4 flex items-center justify-between text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                                       <div className="flex items-center gap-1">
                                         <span className="material-symbols-outlined text-[14px]">category</span>
                                         {board.categories.find(c => c.id === task.category)?.name}
                                       </div>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>
                  );
                })}
              </DragDropContext>
            </div>
          )}
        </main>

        {/* Right Panel: Activity Stream (Leader Dashboard only) */}
        {isLeader && (
          <aside className="w-96 shrink-0">
             <ActivityStream activities={activities} />
          </aside>
        )}
      </div>

      <CreateTaskModal 
        isOpen={isCreateTaskOpen}
        onClose={() => setIsCreateTaskOpen(false)}
        onCreate={handleCreateTask}
        members={board.members.map(u => ({ user: u }))}
      />
    </div>
  );
};

export default BoardView;
