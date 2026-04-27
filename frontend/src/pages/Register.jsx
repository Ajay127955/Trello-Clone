import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // In a real app, we'd use a full registration form
      // For this clone, we'll just use the email
      await register('user_' + Math.random().toString(36).substring(7), email, 'password123');
      navigate('/welcome');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Auth Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-purple-100/50 blur-[120px]"></div>
      </div>

      <main className="w-full max-w-[400px] flex flex-col items-center z-10">
        {/* Logo Section */}
        <div className="mb-12 flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-[32px]">grid_view</span>
            <h1 className="text-3xl font-black text-[#091E42] tracking-tight">Productive Flow</h1>
          </div>
          <p className="text-sm font-medium text-slate-500">Streamline your teamwork today.</p>
        </div>

        {/* Auth Card */}
        <div className="w-full bg-white shadow-2xl border border-slate-100 rounded-2xl p-8">
          <h2 className="text-xl font-black text-center mb-8 text-slate-800">Sign up for your account</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest" htmlFor="email">Email</label>
              <input 
                className="w-full h-12 px-4 border border-slate-200 rounded-xl bg-slate-50 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                id="email" 
                placeholder="Enter email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button 
              className="w-full h-12 bg-primary text-white font-black text-sm rounded-xl hover:opacity-90 transition-all flex items-center justify-center shadow-lg active:scale-95" 
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-slate-100"></div>
            <span className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-wider">OR</span>
            <div className="flex-grow border-t border-slate-100"></div>
          </div>

          {/* Social Auth Options */}
          <div className="flex flex-col gap-3">
            <SocialButton icon="https://lh3.googleusercontent.com/aida-public/AB6AXuDCxa1wouDWunWRFzBc6jITFhMTB8ogDeSDwJXDYu6zWaEMzA3RpvWmWpXKbNZryhNw74dw_fmDwGp8kC1wmPwgimoT14LfaE60uOm7fLjAbc7QvJcrwZfuTM7sALysFvfnvtWRhunRe1r9xQZlYSkIByfBZZrS7tWOq0m8enctZZyxTSAk-RBVrXVbjmAFjEMPEKCivMP96FUej6Nq2Ilb6xhNNoNnaKf0KCWAsZV97uMOzHM7aG85a29mIU_5MdBXFO1Hl5Jl9pEF" label="Continue with Google" />
            <SocialButton icon="https://lh3.googleusercontent.com/aida-public/AB6AXuByWG19MzemjH18wPvZKxzUkJntab2Sj308GtFdoYMjif2iHvTyB1z2HqyT7Lp_U8cEpwt0w7wZtv3JmHedFeOg4_NLdwxAS5oaDvlsu-Q-XEQFfSL0VlCI0OmaBPwUTa7jYy9OarxsRijGoDEdCZsab_pshoS9_3bjD86b1S3fKUQRP640plENQHJK7N8o9u1dyQNi_UaIFmiHcelHfEpoJgBIvW3VArNTDyHqiEemzkcd3ZKa2bDcGwrIWzpydvD43Zg6MetxOX1i" label="Continue with Microsoft" />
          </div>

          <hr className="my-8 border-slate-50"/>
          
          <div className="flex flex-col items-center gap-2">
            <Link to="/login" className="text-xs font-black text-primary hover:underline">Already have an account? Log in</Link>
          </div>
        </div>

        {/* Terms and Privacy */}
        <div className="mt-8 px-4 text-center">
          <p className="text-[10px] font-medium text-slate-400 leading-relaxed">
            By signing up, you confirm that you've read and accepted our 
            <a className="text-primary hover:underline ml-1" href="#">Terms of Service</a> 
            and 
            <a className="text-primary hover:underline ml-1" href="#">Privacy Policy</a>.
          </p>
        </div>
      </main>

      {/* Illustrative Elements */}
      <div className="hidden lg:block fixed left-12 bottom-12 w-64 opacity-20">
        <div className="relative w-full h-48 bg-white border-2 border-slate-100 rounded-2xl p-6 shadow-sm">
          <div className="h-4 w-3/4 bg-slate-100 rounded-full mb-3"></div>
          <div className="h-4 w-1/2 bg-slate-100 rounded-full mb-8"></div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100"></div>
            <div className="w-8 h-8 rounded-full bg-purple-100"></div>
            <div className="w-8 h-8 rounded-full bg-emerald-100"></div>
          </div>
        </div>
        <p className="mt-3 text-[10px] font-black text-slate-300 tracking-widest text-center">BOARD PREVIEW</p>
      </div>

      <footer className="mt-12 py-8 text-center w-full max-w-[400px]">
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">© 2024 Productive Flow Inc.</p>
      </footer>
    </div>
  );
};

const SocialButton = ({ icon, label }) => (
  <button className="w-full h-12 bg-white border border-slate-200 shadow-sm rounded-xl flex items-center px-6 gap-4 hover:bg-slate-50 transition-all active:scale-[0.98]">
    <img alt={label} className="w-5 h-5" src={icon} />
    <span className="text-xs font-black text-slate-800">{label}</span>
  </button>
);

export default Register;
