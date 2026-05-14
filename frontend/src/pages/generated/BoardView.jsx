import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useAuth } from '../../context/AuthContext';
import useBoardSocket from '../../hooks/useBoardSocket';
import ActivityStream from '../../components/ActivityStream';
import CreateTaskModal from '../../components/CreateTaskModal';
import CreateCategoryModal from '../../components/CreateCategoryModal';
import InviteModal from '../../components/InviteModal';
import { 
  Users, Plus, Trash2, Layout, 
  CheckCircle2, Clock, PlayCircle,
  MoreVertical, ChevronRight, Settings,
  Activity as ActivityIcon, Kanban,
  ArrowRight, UserPlus
} from 'lucide-react';

const BoardView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { showToast } = useToast();
  
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLeader, setIsLeader] = useState(false);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [isCreateCategoryOpen, setIsCreateCategoryOpen] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const fetchBoard = useCallback(async () => {
    try {
      const response = await api.get(`boards/${id}/`);
      setBoard(response.data);
      setIsLeader(response.data.owner.id === user?.id);
      setError(null);
    } catch (err) {
      console.error(err);
      setError('Board not found or access denied.');
    } finally {
      setLoading(false);
    }
  }, [id, user?.id]);

  const handleSocketMessage = useCallback((data) => {
    if (['task_assigned', 'task_moved', 'category_created', 'board_updated'].includes(data.msg_type)) {
      fetchBoard();
    }
  }, [fetchBoard]);

  useBoardSocket(id, handleSocketMessage);

  useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  const handleCreateCategory = () => {
    setIsCreateCategoryOpen(true);
  };

  const handleDeleteCategory = async (catId) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await api.delete(`categories/${catId}/`);
      showToast('Category deleted', 'success');
      fetchBoard();
    } catch (err) {
      showToast('Failed to delete', 'error');
    }
  };

  const handleMoveTask = async (taskId, newStatus) => {
    try {
      // Find the task, then find the user's assignment within it
      const allTasks = board.categories.flatMap(c => c.tasks);
      const task = allTasks.find(t => t.id === taskId);
      if (!task) return;
      const assignment = task.assignments.find(a => a.user.id === user.id);
      if (assignment) {
        await api.patch(`assignments/${assignment.id}/`, { status: newStatus });
        showToast(`Task moved to ${newStatus.toUpperCase()}!`, 'success');
        fetchBoard();
      } else {
        showToast('Assignment not found.', 'error');
      }
    } catch (err) {
      showToast('Failed to update status', 'error');
    }
  };

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-[#F8FAFC]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 font-bold animate-pulse">Initializing Workspace...</p>
      </div>
    </div>
  );

  if (error || !board) return (
    <div className="flex h-screen items-center justify-center bg-[#F8FAFC] p-8 text-center">
      <div className="max-w-md">
        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">Access Denied</h2>
        <p className="text-slate-500 mb-8">{error || "You don't have permission to view this board."}</p>
        <button onClick={() => navigate('/boards-dashboard')} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">Back to Dashboard</button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-[#F8FAFC]">
      {/* Board Header */}
      <div className="px-8 py-6 flex items-center justify-between border-b border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Layout className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              {board.title}
              <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isLeader ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                {isLeader ? 'Team Leader' : 'Team Member'}
              </span>
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">
              {isLeader ? 'Project Management Dashboard' : 'Personal Task Workspace'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 mr-4">
            <div className="w-10 h-10 rounded-full border-4 border-white bg-slate-800 flex items-center justify-center text-white text-xs font-black shadow-md z-10" title={`Leader: ${board.owner.username}`}>
              {board.owner.username.substring(0, 2).toUpperCase()}
            </div>
            {board.members.map(m => (
              <div key={m.id} className="w-10 h-10 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-black shadow-sm" title={m.username}>
                {m.username.substring(0, 2).toUpperCase()}
              </div>
            ))}
          </div>
          {isLeader && (
            <>
              <button 
                onClick={() => setIsInviteModalOpen(true)}
                className="flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition-all border border-blue-200"
              >
                <UserPlus size={18} />
                Share
              </button>
              <button 
                onClick={handleCreateCategory}
                className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                <Plus size={18} />
                Add Category
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Workspace Area */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {isLeader ? (
            /* TEAM LEADER VIEW: Category-based Organization */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {board.categories.map(category => (
                <div key={category.id} className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col h-fit">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div>
                      <h3 className="font-black text-slate-900 tracking-tight">{category.name}</h3>
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{category.tasks.length} Tasks defined</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => { setSelectedCategoryId(category.id); setIsCreateTaskOpen(true); }}
                        className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                      >
                        <Plus size={20} />
                      </button>
                      <button 
                        onClick={() => handleDeleteCategory(category.id)}
                        className="p-2 hover:bg-red-50 text-red-500 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    {category.tasks.map(task => (
                      <div key={task.id} className="p-4 bg-[#F8FAFC] border border-slate-100 rounded-2xl group hover:border-blue-200 hover:bg-white transition-all">
                        <h4 className="font-bold text-slate-800 mb-3">{task.title}</h4>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {task.assigned_users.map(u => (
                              <div key={u.id} className="w-8 h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[9px] font-black text-white shadow-sm" title={u.username}>
                                {u.username.substring(0, 2).toUpperCase()}
                              </div>
                            ))}
                          </div>
                          <div className="flex gap-1">
                            {task.assignments.map(a => (
                              <div 
                                key={a.id} 
                                className={`w-2 h-2 rounded-full ${a.status === 'COMPLETED' ? 'bg-emerald-500' : a.status === 'DOING' ? 'bg-amber-500' : 'bg-slate-300'}`}
                                title={`${a.user.username}: ${a.status}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    {category.tasks.length === 0 && (
                      <div className="py-12 text-center">
                        <p className="text-slate-300 font-black text-[10px] uppercase tracking-widest italic">No tasks in this category</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {board.categories.length === 0 && (
                <div className="col-span-full py-32 text-center bg-white rounded-[3rem] border-4 border-dashed border-slate-100">
                   <Layout size={48} className="mx-auto text-slate-100 mb-6" />
                   <h2 className="text-xl font-black text-slate-300 tracking-tight">Establish Your Infrastructure</h2>
                   <p className="text-slate-400 text-sm font-bold mt-2">Create categories to organize your team's specialized workflows.</p>
                   <button onClick={handleCreateCategory} className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">Initialize Category</button>
                </div>
              )}
            </div>
          ) : (
            /* TEAM MEMBER VIEW: Kanban-based Workflow */
            <div className="flex gap-8 items-start h-full overflow-x-auto pb-6 custom-scrollbar">
              {['todo', 'doing', 'completed'].map(status => {
                const tasksInStatus = board.categories.flatMap(c => c.tasks).filter(t => 
                  t.assignments.some(a => a.user.id === user.id && a.status === status)
                );
                
                return (
                  <div key={status} className="w-[350px] shrink-0 bg-white rounded-[2.5rem] border border-slate-200 flex flex-col shadow-sm">
                    <div className="p-8 pb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${status === 'todo' ? 'bg-slate-300' : status === 'doing' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                        <h3 className="font-black text-slate-900 tracking-tight text-xl">{status.toUpperCase()}</h3>
                      </div>
                      <span className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{tasksInStatus.length}</span>
                    </div>
                    
                    <div className="p-6 space-y-4 overflow-y-auto">
                      {tasksInStatus.map(task => {
                        const myAssignment = task.assignments.find(a => a.user.id === user.id);
                        return (
                          <div key={task.id} className="p-6 bg-[#F8FAFC] border border-slate-100 rounded-[1.5rem] hover:bg-white hover:border-blue-200 transition-all group shadow-sm">
                            <div className="flex justify-between items-start mb-4">
                              <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-widest">
                                {board.categories.find(c => c.tasks.some(t => t.id === task.id))?.name}
                              </span>
                            </div>
                            <h4 className="font-bold text-slate-800 text-lg leading-tight mb-4 group-hover:text-blue-600 transition-colors">{task.title}</h4>
                            <p className="text-slate-400 text-xs font-medium mb-6 line-clamp-2">{task.description || "No specific details provided."}</p>
                            
                            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                               <div className="flex items-center gap-2">
                                 {status !== 'completed' && (
                                   <button 
                                     onClick={() => handleMoveTask(task.id, status === 'todo' ? 'doing' : 'completed')}
                                     className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-md"
                                   >
                                     <ArrowRight size={14} />
                                     {status === 'todo' ? 'Start' : 'Finish'}
                                   </button>
                                 )}
                               </div>
                               <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-black shadow-lg">
                                 {user.username.substring(0, 2).toUpperCase()}
                               </div>
                            </div>
                          </div>
                        );
                      })}
                      {tasksInStatus.length === 0 && (
                        <div className="py-20 text-center border-2 border-dashed border-slate-50 rounded-[2rem]">
                          <p className="text-slate-300 font-bold text-xs">No tasks in queue</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Sidebar: Activity Stream */}
        <div className="w-[400px] border-l border-slate-200 bg-white flex flex-col hidden 2xl:flex">
          <div className="p-6 border-b border-slate-200 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <ActivityIcon size={20} />
            </div>
            <h3 className="font-black text-slate-900 tracking-tight">Activity Log</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
            <ActivityStream boardId={id} />
          </div>
        </div>
      </div>

      <CreateTaskModal 
        isOpen={isCreateTaskOpen}
        onClose={() => { setIsCreateTaskOpen(false); setSelectedCategoryId(null); }}
        boardId={id}
        categoryId={selectedCategoryId}
        members={board.members}
        onTaskCreated={fetchBoard}
      />

      <CreateCategoryModal 
        isOpen={isCreateCategoryOpen}
        onClose={() => setIsCreateCategoryOpen(false)}
        boardId={id}
        onCategoryCreated={fetchBoard}
      />

      <InviteModal 
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        boardId={id}
        targetName={board.title}
      />
    </div>
  );
};

export default BoardView;
