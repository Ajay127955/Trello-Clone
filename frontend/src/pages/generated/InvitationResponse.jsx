import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import api from '../../services/api';

const InvitationResponse = () => {
  const { token } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [invitation, setInvitation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('pending'); // pending, success, register

  useEffect(() => {
    fetchInvitation();
  }, [token]);

  const fetchInvitation = async () => {
    try {
      const response = await api.get(`invitations/${token}/`);
      setInvitation(response.data);
      
      // If action is decline in URL, auto decline? 
      // User request says "If user clicks Decline Invitation in email"
      const action = searchParams.get('action');
      if (action === 'decline') {
        handleDecline();
      }
    } catch (err) {
      setError('Invitation not found or has expired.');
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
        alert('Please register an account with ' + response.data.email + ' to join.');
        navigate('/signup?email=' + response.data.email);
      } else {
        setStatus('success');
        setTimeout(() => navigate('/boards-dashboard'), 3000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to accept invitation');
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
      setError('Failed to decline invitation');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <span className="material-symbols-outlined text-red-500 text-6xl mb-4">error</span>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Oops!</h1>
        <p className="text-slate-600 mb-6">{error}</p>
        <button onClick={() => navigate('/')} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">Go Home</button>
      </div>
    </div>
  );

  if (status === 'success') return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
        <span className="material-symbols-outlined text-green-500 text-6xl mb-4">check_circle</span>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Success!</h1>
        <p className="text-slate-600 mb-6">You've successfully joined the workspace. Redirecting to your dashboard...</p>
      </div>
    </div>
  );

  if (status === 'declined') return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md text-center">
        <span className="material-symbols-outlined text-slate-400 text-6xl mb-4">block</span>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Invitation Declined</h1>
        <p className="text-slate-600 mb-6">We've notified the sender. You can close this window now.</p>
        <button onClick={() => navigate('/')} className="text-blue-600 font-bold">Return to Productive Flow</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-center text-white">
          <h1 className="text-3xl font-black mb-4">You're Invited!</h1>
          <p className="opacity-90 text-lg">
            <strong>{invitation.sender.username}</strong> has invited you to collaborate on
            <br />
            <span className="text-2xl font-bold block mt-2">
              {invitation.workspace_name || invitation.board_name}
            </span>
          </p>
        </div>
        
        <div className="p-8">
          {invitation.message && (
            <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 mb-8 italic text-slate-700">
              "{invitation.message}"
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAccept}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              Accept Invitation
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold py-4 rounded-xl transition-all active:scale-[0.98]"
            >
              Decline
            </button>
          </div>
          
          <p className="text-center text-xs text-slate-400 mt-8">
            Sent with ❤️ from Productive Flow Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitationResponse;
