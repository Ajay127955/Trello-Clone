import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  React.useEffect(() => {
    const handleGlobalToast = (event) => {
      const { message, type } = event.detail;
      showToast(message, type);
    };
    window.addEventListener('show-toast', handleGlobalToast);
    return () => window.removeEventListener('show-toast', handleGlobalToast);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div 
            key={toast.id}
            className={`pointer-events-auto min-w-[300px] max-w-md p-4 rounded-2xl shadow-2xl border flex items-center gap-4 animate-in slide-in-from-right-10 duration-300 ${
              toast.type === 'error' 
                ? 'bg-red-50 border-red-100 text-red-900' 
                : toast.type === 'success' 
                  ? 'bg-green-50 border-green-100 text-green-900' 
                  : 'bg-white border-slate-100 text-slate-900'
            }`}
          >
            <span className={`material-symbols-outlined ${
              toast.type === 'error' ? 'text-red-600' : toast.type === 'success' ? 'text-green-600' : 'text-blue-600'
            }`}>
              {toast.type === 'error' ? 'error' : toast.type === 'success' ? 'check_circle' : 'info'}
            </span>
            <p className="text-sm font-bold flex-1">{toast.message}</p>
            <button onClick={() => removeToast(toast.id)} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
              <span className="material-symbols-outlined text-sm opacity-50">close</span>
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
