import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-50 font-sans text-slate-900 min-h-screen flex flex-col relative overflow-hidden">
      {/* Hero Background Visual */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-12">
        {/* Logo Branding */}
        <div className="mb-12 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Productive Flow</h1>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-[400px] bg-white p-12 rounded-2xl shadow-2xl border border-slate-100">
          <h2 className="text-xl font-bold text-center text-slate-800 mb-8">Log in to continue</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <input 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-sm" 
                placeholder="Enter email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <input 
                className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 font-medium text-sm" 
                placeholder="Enter password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              className="w-full bg-primary text-white font-bold text-sm py-3 rounded-xl hover:opacity-90 transition-all duration-200 shadow-lg active:scale-95" 
              type="submit"
            >
              Log In
            </button>
            <div className="flex items-center justify-center py-2">
              <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">OR</span>
            </div>
            {/* Social Logins */}
            <div className="space-y-3">
              <SocialButton icon="https://lh3.googleusercontent.com/aida-public/AB6AXuAw949gcV1DMNZ7ThDxO9ez8niJT2Tz7hanIid5voaPDk0w9eWSu8DMv2T05Ns-CqVE_mxAkkqwuabtgI-Um6kXtvgXWqybdvQXWxM4dB4GHD9yl9OtXzEonkw8VdKUHJcor0ODrqpeP8x3RFVWMjqq72tql4Ub_1-Fl5GyAED5xs_eOqdWAhP5ZLzZ6P-DFo3PrQsxdmfuk0uTXH42UBz-HolQaOWPnlDE_tlI27uxYTklMpWvXFzVFR5MYIOcY-cV1oE-08_m_H8M" label="Continue with Google" />
              <SocialButton icon="https://lh3.googleusercontent.com/aida-public/AB6AXuA3iWCeGr0hMUwhs-SCGL9zT4lG3-rSuaJhEjZAIu7SIxYhtWrAZs2BqKYkP8RNnGgggZh1iLl3D6MFOuDbOy1RC7Z5VUPj2TMGaqLf762dwwWxxwPh0I-r1Xo709p-saVBheArpMNzfCFpOvDi-3VQqPat0H14fGZiMdLfO2NwiYiXxqqhXM95rPL374hvbJblta5U3fUxTXBbxVfRp6jeTYsjRD_0zNYbJAgB4rBzxtlPB_k9RRd_veyGR1cmK1vSnfAKW_jo7fib" label="Continue with Microsoft" />
            </div>
          </form>
          <div className="mt-8 pt-8 border-t border-slate-50 flex flex-col items-center gap-2">
            <a className="text-primary font-black text-xs hover:underline" href="#">Forgot password?</a>
            <div className="flex items-center gap-2">
              <span className="text-slate-300 text-xs">•</span>
              <Link to="/signup" className="text-primary font-black text-xs hover:underline">Sign up for an account</Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <footer className="mt-12 flex flex-wrap justify-center gap-6 text-slate-400 font-black text-[10px] uppercase tracking-widest opacity-60">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Contact Support</a>
        </footer>
      </main>

      {/* Side Decoration */}
      <div className="hidden lg:block fixed bottom-12 left-12 space-y-4 opacity-40">
        <div className="w-48 h-24 bg-white rounded-2xl border border-slate-100 p-4 overflow-hidden shadow-sm">
          <div className="w-full h-2 bg-blue-100 rounded-full mb-2"></div>
          <div className="w-3/4 h-2 bg-slate-100 rounded-full mb-4"></div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-50"></div>
            <div className="w-8 h-8 rounded-full bg-purple-50"></div>
          </div>
        </div>
        <div className="w-32 h-16 bg-white rounded-2xl border border-slate-100 p-4 ml-8 shadow-sm">
          <div className="w-full h-full rounded bg-blue-50/50 flex items-center justify-center">
            <span className="material-symbols-outlined text-blue-200">analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label }) => (
  <button className="w-full flex items-center justify-center gap-4 px-4 py-3 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 transition-all active:scale-[0.98] shadow-sm" type="button">
    <img alt={label} className="w-5 h-5" src={icon} />
    <span className="text-xs font-black text-slate-800">{label}</span>
  </button>
);

export default Login;
