import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message, confirmText = 'Confirm', type = 'danger' }) => {
  if (!isOpen) return null;

  const typeStyles = {
    danger: 'bg-red-600 hover:bg-red-700 shadow-red-100 text-white',
    primary: 'bg-blue-600 hover:bg-blue-700 shadow-blue-100 text-white',
    warning: 'bg-amber-500 hover:bg-amber-600 shadow-amber-100 text-white',
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-6 text-center">
          <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${type === 'danger' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
            <span className="material-symbols-outlined text-3xl">
              {type === 'danger' ? 'delete_forever' : 'help_outline'}
            </span>
          </div>
          <h2 className="text-xl font-black text-slate-900 mb-2">{title}</h2>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed">{message}</p>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className={`flex-1 px-4 py-3 rounded-xl font-bold transition-all text-sm shadow-lg active:scale-[0.98] ${typeStyles[type] || typeStyles.primary}`}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
