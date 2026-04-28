import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import ConfirmModal from '../../components/ConfirmModal';

const InvitationResponse = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('pending'); // pending, success, register, declined
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, title: '', message: '', onConfirm: () => {} });

  useEffect(() => {
    fetchInvitation();
  }, [token]);

  const fetchInvitation = async () => {
    try {
      const response = await api.get(`invitations/${token}/`);
      setInvitation(response.data);
      
      const action = searchParams.get('action');
      if (action === 'decline') {
        handleDecline();
      }
    } catch (err) {
      setError('Invitation not found or has expired protocol.');
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async () => {
    setLoading(true);
    try {
      const response = await api.post(`invitations/${token}/accept/`);
      if (response.data.message === 'Please register to accept invitation') {
        setStatus('register');
        setConfirmModal({
          isOpen: true,
          title: 'Authentication Required',
          message: `Please initialize an account with ${response.data.email} to join this cluster.`,
          onConfirm: () => navigate('/signup?email=' + response.data.email)
        });
      } else {
        setStatus('success');
        setTimeout(() => navigate('/boards-dashboard'), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to establish protocol connection');
    } finally {
      setLoading(false);
    }
  };

  const handleDecline = async () => {
    setLoading(true);
    try {
      await api.post(`invitations/${token}/decline/`);
      setStatus('declined');
    } catch (err) {
      setError('Failed to transmit decline signal');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="relative">
        <div className="w-24 h-24 rounded-[2rem] border-4 border-blue-600/10 border-t-blue-600 animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 p-16 rounded-[3rem] shadow-2xl max-w-lg text-center border border-slate-100 dark:border-slate-800">
        <div className="w-24 h-24 bg-red-600/5 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <span className="material-symbols-outlined text-red-600 text-5xl">emergency_home</span>
        </div>
        <h1 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Protocol Failure</h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12">{error}</p>
        <button onClick={() => navigate('/')} className="w-full bg-slate-900 dark:bg-blue-600 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition-all">Return to Core</button>
      </div>
    </div>
  );

  if (status === 'success') return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 p-16 rounded-[3rem] shadow-2xl max-w-lg text-center border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-emerald-600/5 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <span className="material-symbols-outlined text-emerald-600 text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Connection Established</h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12 leading-relaxed">Synchronization complete. Redirecting to operational dashboard...</p>
        <div className="w-full h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-600 animate-progress origin-left"></div>
        </div>
      </div>
    </div>
  );

  if (status === 'declined') return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 p-16 rounded-[3rem] shadow-2xl max-w-lg text-center border border-slate-100 dark:border-slate-800">
        <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-10">
          <span className="material-symbols-outlined text-slate-400 text-5xl">cancel</span>
        </div>
        <h1 className="font-headline-xl text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter">Protocol Terminated</h1>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12">The invitation signal has been successfully neutralized.</p>
        <button onClick={() => navigate('/')} className="font-black text-[10px] text-blue-600 uppercase tracking-widest hover:underline">Return to Productive Flow</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="bg-white dark:bg-slate-900 w-full max-w-[600px] rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-700">
        <div className="bg-slate-900 dark:bg-blue-600 p-20 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-9xl">hub</span>
          </div>
          <div className="w-24 h-24 bg-white/10 backdrop-blur-3xl rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl border border-white/20 relative z-10">
             <span className="material-symbols-outlined text-5xl">group_add</span>
          </div>
          <h1 className="font-headline-xl text-5xl font-black mb-6 tracking-tighter relative z-10">Nexus Access</h1>
          <p className="font-bold text-lg opacity-80 leading-relaxed relative z-10">
            <span className="text-blue-400 font-black">@{invitation.sender.username}</span> is requesting your synchronization with
            <br />
            <span className="text-3xl font-black block mt-4 text-white uppercase tracking-tighter">
              {invitation.workspace_name || invitation.board_name}
            </span>
          </p>
        </div>
        
        <div className="p-16">
          {invitation.message && (
            <div className="bg-slate-50 dark:bg-slate-950 p-10 rounded-[2.5rem] border-l-[12px] border-blue-600 mb-12 relative overflow-hidden">
              <div className="absolute top-4 right-6 opacity-10">
                <span className="material-symbols-outlined text-4xl">format_quote</span>
              </div>
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-relaxed italic">"{invitation.message}"</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <button
              onClick={handleAccept}
              className="bg-slate-900 dark:bg-blue-600 hover:scale-[1.02] text-white font-black py-6 rounded-3xl shadow-2xl shadow-blue-600/20 transition-all active:scale-[0.98] text-[10px] uppercase tracking-widest"
            >
              Initialize Connection
            </button>
            <button
              onClick={handleDecline}
              className="bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 text-slate-400 font-black py-6 rounded-3xl transition-all active:scale-[0.98] text-[10px] uppercase tracking-widest"
            >
              Terminate Signal
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-4 mt-16 opacity-40">
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
            <p className="text-[8px] font-black uppercase tracking-[0.3em] text-slate-400 whitespace-nowrap">
              Productive Flow Enterprise
            </p>
            <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800"></div>
          </div>
        </div>
      </div>

      <ConfirmModal 
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onCancel={() => setConfirmModal({ ...confirmModal, isOpen: false })}
      />
    </div>
  );
};

export default InvitationResponse;

export default InvitationResponse;
