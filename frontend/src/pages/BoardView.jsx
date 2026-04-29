import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useAuth } from '../context/AuthContext';
import CardDetailModal from '../components/CardDetailModal';
import useWebSocket from '../hooks/useWebSocket';

const BoardView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const [board, setBoard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);

  // Phase 4: Real-time WebSocket integration
  const { sendMessage } = useWebSocket(id, (message) => {
    handleWebSocketMessage(message);
  });

  const handleWebSocketMessage = (msg) => {
    if (msg.msg_type === 'card_updated' || msg.msg_type === 'card_assigned') {
      const updatedCard = msg.data;
      setBoard(prevBoard => {
        const newBoard = { ...prevBoard };
        newBoard.lists = newBoard.lists.map(list => ({
          ...list,
          cards: list.cards.map(card => card.id === updatedCard.id ? updatedCard : card)
        }));
        return newBoard;
      });
      
      // Update selected card if it's the one that changed
      if (selectedCard && selectedCard.id === updatedCard.id) {
        setSelectedCard(updatedCard);
      }
    } else if (msg.msg_type === 'list_updated') {
        fetchBoard(); // Reload full board for structural changes
    }
  };

  useEffect(() => {
    fetchBoard();
  }, [id]);

  const fetchBoard = async () => {
    try {
      const response = await api.get(`boards/${id}/`);
      setBoard(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const onDragEnd = async (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newBoard = { ...board };
    const sourceList = newBoard.lists.find(l => l.id.toString() === source.droppableId);
    const destList = newBoard.lists.find(l => l.id.toString() === destination.droppableId);
    
    const [movedCard] = sourceList.cards.splice(source.index, 1);
    destList.cards.splice(destination.index, 0, movedCard);
    setBoard(newBoard);

    try {
      await api.patch(`cards/${draggableId}/`, { 
        list: parseInt(destination.droppableId),
        position: destination.index
      });
    } catch (err) {
      console.error(err);
      fetchBoard();
    }
  };

  if (loading || !board) return null;

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen flex flex-col">
      <header className="bg-white border-b border-slate-200 shadow-sm flex justify-between items-center w-full px-4 h-14 z-50 fixed top-0 left-0">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/')} className="p-2 hover:bg-slate-50 transition-colors rounded-xl">
            <span className="material-symbols-outlined text-slate-600">grid_view</span>
          </button>
          <h1 className="text-xl font-black tracking-tight text-slate-900 cursor-pointer" onClick={() => navigate('/')}>Productive Flow</h1>
          <nav className="hidden md:flex items-center gap-6 ml-4">
            <span className="text-blue-600 font-black border-b-2 border-blue-600 pb-1 cursor-pointer">Boards</span>
            <span className="text-slate-500 font-bold hover:text-slate-900 transition-colors cursor-pointer px-2 py-1 rounded-xl">Recent</span>
            <span className="text-slate-500 font-bold hover:text-slate-900 transition-colors cursor-pointer px-2 py-1 rounded-xl">Starred</span>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input className="pl-10 pr-4 py-1.5 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-primary w-64 text-sm font-medium" placeholder="Search" type="text" />
          </div>
          <button className="p-2 hover:bg-slate-50 transition-colors rounded-xl">
            <span className="material-symbols-outlined text-slate-600">notifications</span>
          </button>
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-black text-xs uppercase">
            {user?.username?.substring(0, 2) || 'JD'}
          </div>
        </div>
      </header>

      <main className="flex-1 pt-14 flex overflow-hidden">
        <aside className="hidden lg:flex flex-col gap-1 p-3 h-full w-64 border-r border-slate-100 bg-white sticky top-14 h-[calc(100vh-3.5rem)]">
          <div className="px-3 py-4">
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Main Menu</h2>
          </div>
          <Link to="/" className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-xl font-black text-sm transition-transform active:translate-x-1">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Workspaces</span>
          </Link>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-bold text-sm" href="#">
            <span className="material-symbols-outlined">history</span>
            <span>Recent</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-bold text-sm" href="#">
            <span className="material-symbols-outlined">star</span>
            <span>Starred</span>
          </a>
          <div className="mt-auto border-t border-slate-100 pt-4">
            <button onClick={logout} className="flex items-center gap-3 w-full px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-xl font-bold text-sm">
              <span className="material-symbols-outlined">logout</span>
              <span>Logout</span>
            </button>
          </div>
        </aside>

        <section className="flex-1 flex flex-col overflow-hidden bg-white">
          <div className="px-8 py-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">{board.title}</h2>
              {board.members.find(m => m.user.id === user.id)?.role === 'manager' ? (
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-md text-[10px] font-black uppercase tracking-tighter shadow-sm border border-amber-200">Manager</span>
              ) : (
                <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-black uppercase tracking-tighter shadow-sm border border-slate-200">Member</span>
              )}
              <button className="p-1 hover:bg-slate-100 rounded-xl">
                <span className="material-symbols-outlined text-slate-400">star</span>
              </button>
              <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>
              <div className="flex -space-x-2">
                <Avatar initials="JD" color="bg-blue-100 text-blue-600" />
                <Avatar initials="SC" color="bg-purple-100 text-purple-600" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-50 text-slate-400 flex items-center justify-center text-[10px] font-black">+4</div>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-black hover:opacity-90 transition-all flex items-center gap-2 shadow-lg active:scale-95">
                <span className="material-symbols-outlined text-lg">person_add</span>
                Share
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-black text-slate-500 hover:bg-slate-50 rounded-xl transition-colors">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Filters
              </button>
            </div>
          </div>

          <div className="board-container flex-1 overflow-x-auto px-8 pb-8 flex items-start gap-6">
            <DragDropContext onDragEnd={onDragEnd}>
              {board.lists.map((list) => (
                <div key={list.id} className="w-80 shrink-0 flex flex-col bg-slate-50 rounded-2xl max-h-full border border-slate-100">
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">{list.title}</h3>
                    <button className="p-1 hover:bg-slate-200 rounded-xl">
                      <span className="material-symbols-outlined text-slate-400">more_horiz</span>
                    </button>
                  </div>

                  <Droppable droppableId={list.id.toString()}>
                    {(provided) => (
                      <div 
                        {...provided.droppableProps} 
                        ref={provided.innerRef}
                        className="flex-1 overflow-y-auto px-3 space-y-3 py-2 min-h-[10px]"
                      >
                        {list.cards.map((card, index) => (
                          <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() => setSelectedCard(card)}
                                className={`bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all cursor-pointer group ${snapshot.isDragging ? 'shadow-2xl scale-105 z-50' : ''}`}
                              >
                                <div className="flex gap-1.5 mb-3">
                                  <span className="h-1.5 w-8 bg-blue-400 rounded-full"></span>
                                </div>
                                <p className="text-sm font-black text-slate-800 group-hover:text-primary transition-colors leading-snug">{card.title}</p>
                                  <div className="mt-4 flex items-center justify-between">
                                   <div className="flex items-center gap-3 text-slate-400 text-[10px] font-black uppercase tracking-wider">
                                     <div className="flex items-center gap-1">
                                       <span className="material-symbols-outlined text-sm">schedule</span>
                                       <span>Oct 24</span>
                                     </div>
                                   </div>
                                   {card.assigned_to ? (
                                     <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-[10px] border border-white shadow-sm" title={`Assigned to ${card.assigned_to.username}`}>
                                       {card.assigned_to.username.substring(0, 2).toUpperCase()}
                                     </div>
                                   ) : (
                                     <div className="h-6 w-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 font-black text-[10px] border border-slate-100">?</div>
                                   )}
                                 </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  <button className="m-3 p-3 flex items-center gap-2 text-slate-400 hover:bg-slate-200 rounded-xl transition-colors text-xs font-black uppercase tracking-widest">
                    <span className="material-symbols-outlined text-lg">add</span>
                    Add a card
                  </button>
                </div>
              ))}
            </DragDropContext>
            <div className="w-80 shrink-0">
              <button className="w-full p-4 flex items-center gap-2 bg-slate-50 border-2 border-dashed border-slate-200 hover:border-primary hover:bg-white transition-all rounded-2xl font-black text-slate-400 text-xs uppercase tracking-widest">
                <span className="material-symbols-outlined">add</span>
                Add another list
              </button>
            </div>
          </div>
        </section>
      </main>

      {selectedCard && (
        <CardDetailModal 
          card={selectedCard} 
          onClose={() => setSelectedCard(null)} 
          listName={board.lists.find(l => l.cards.some(c => c.id === selectedCard.id))?.title}
          boardMembers={board.members}
          isManager={board.members.find(m => m.user.id === user.id)?.role === 'manager'}
          onAssign={(userId) => {
             // Handle assignment here or inside modal
             api.post(`cards/${selectedCard.id}/assign/`, { user_id: userId })
               .then(res => {
                  // The handleWebSocketMessage will update the board automatically,
                  // but we can also update local state for instant feel.
                  handleWebSocketMessage({ msg_type: 'card_assigned', data: res.data });
               });
          }}
        />
      )}
    </div>
  );
};

const Avatar = ({ initials, color }) => (
  <div className={`h-8 w-8 rounded-full border-2 border-white ${color} flex items-center justify-center text-[10px] font-black`}>
    {initials}
  </div>
);

export default BoardView;
