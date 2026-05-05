import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { motion, AnimatePresence } from 'framer-motion';
import CardDetailModal from '../../components/CardDetailModal';

const BoardCalendarView = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [viewType, setViewType] = useState('month');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      setLoading(true);
      const response = await api.get('cards/');
      // Only keep cards with due dates
      const cardsWithDates = response.data.filter(card => card.due_date);
      setCards(cardsWithDates);
    } catch (err) {
      console.error('Failed to fetch cards:', err);
    } finally {
      setLoading(false);
    }
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToday = () => {
    setCurrentDate(new Date());
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  // Calendar days array
  const days = [];
  
  // Previous month padding
  const prevMonthDays = getDaysInMonth(year, month - 1);
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push({ day: prevMonthDays - i, month: month - 1, currentMonth: false });
  }

  // Current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, month: month, currentMonth: true });
  }

  // Next month padding
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ day: i, month: month + 1, currentMonth: false });
  }

  const isToday = (day, m) => {
    const today = new Date();
    return day === today.getDate() && m === today.getMonth() && year === today.getFullYear();
  };

  const getCardsForDay = (day, m) => {
    return cards.filter(card => {
      const dueDate = new Date(card.due_date);
      return dueDate.getDate() === day && dueDate.getMonth() === m && dueDate.getFullYear() === year;
    });
  };

  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8 h-full flex flex-col">
      {/* Calendar Header */}
      <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tighter">
              {monthNames[month]} <span className="text-blue-600">{year}</span>
            </h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Calendar Overview</p>
          </div>
          
          <div className="flex items-center bg-white dark:bg-slate-800 rounded-2xl p-1 shadow-sm border border-slate-200 dark:border-slate-700">
            <button 
              onClick={goToday}
              className="px-6 py-2 text-[10px] font-black uppercase tracking-widest bg-slate-900 dark:bg-blue-600 text-white rounded-xl transition-all hover:opacity-90 active:scale-95"
            >
              Today
            </button>
            <div className="flex ml-2">
              <button 
                onClick={prevMonth}
                className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 text-slate-500 hover:text-blue-600 transition-colors"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-1 shadow-inner">
            {['Month', 'Week'].map((v) => (
              <button 
                key={v}
                onClick={() => setViewType(v.toLowerCase())}
                className={`px-8 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all ${viewType === v.toLowerCase() ? 'bg-white dark:bg-slate-700 text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {v}
              </button>
            ))}
          </div>
          <button 
            onClick={() => navigate('/create-board')}
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">add</span>
            New Task
          </button>
        </div>
      </section>

      {/* Calendar Grid */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col min-h-[700px]">
        {/* Day Labels */}
        <div className="grid grid-cols-7 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="py-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</div>
          ))}
        </div>
        
        {/* Grid Area */}
        <div className="flex-1 grid grid-cols-7 grid-rows-6 auto-rows-fr">
          {days.map((d, i) => {
            const dayCards = getCardsForDay(d.day, d.month);
            return (
              <div 
                key={i} 
                className={`
                  border-r border-b border-slate-100 dark:border-slate-800 p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/30 group
                  ${!d.currentMonth ? 'bg-slate-50/50 dark:bg-slate-950/20 opacity-40' : ''}
                  ${isToday(d.day, d.month) ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}
                `}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`
                    text-xs font-black w-7 h-7 flex items-center justify-center rounded-full transition-all
                    ${isToday(d.day, d.month) ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-900 dark:text-white group-hover:text-blue-600'}
                  `}>
                    {d.day}
                  </span>
                  {dayCards.length > 0 && (
                    <span className="text-[10px] font-black text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-full">
                      {dayCards.length}
                    </span>
                  )}
                </div>
                
                <div className="space-y-1 overflow-y-auto max-h-[100px] custom-scrollbar">
                  {dayCards.map(card => (
                    <motion.div 
                      key={card.id}
                      whileHover={{ scale: 1.02, x: 2 }}
                      onClick={() => setSelectedCard(card)}
                      className="px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm cursor-pointer hover:border-blue-400 transition-all"
                    >
                      <p className="text-[10px] font-bold text-slate-700 dark:text-slate-200 truncate">{card.title}</p>
                      {card.labels && card.labels.length > 0 && (
                        <div className="flex gap-1 mt-1">
                          {card.labels.slice(0, 2).map(l => (
                            <div key={l.id} className="h-1 w-4 rounded-full" style={{ backgroundColor: l.color }}></div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-widest">Loading Calendar...</p>
          </div>
        </div>
      )}

      {/* Card Detail Modal */}
      <AnimatePresence>
        {selectedCard && (
          <CardDetailModal 
            card={selectedCard} 
            onClose={() => setSelectedCard(null)}
            listName={selectedCard.list_title || "Unknown List"}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BoardCalendarView;
