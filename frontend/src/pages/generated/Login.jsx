import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import authBranding from '../../assets/auth-branding.png';

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await login(email, password);
      navigate('/boards-dashboard');
    } catch (err) {
      console.error(err);
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = async (provider) => {
    if (provider !== 'google') {
      alert(`${provider} login is not implemented in this demo. Please use Google.`);
      return;
    }
    setSocialLoading(provider);
    setError('');
    try {
      const email = prompt('Simulating Google Login: Enter email', 'google_user@example.com');
      const name = prompt('Simulating Google Login: Enter name', 'Google User');
      if (!email || !name) throw new Error('Login cancelled');
      
      await googleLogin(email, name);
      navigate('/boards-dashboard');
    } catch (err) {
      console.error(err);
      setError(`${provider} sign-in failed. Please try again.`);
    } finally {
      setSocialLoading('');
    }
  };

  const features = [
    { icon: 'view_kanban', text: 'Drag-and-drop Kanban boards' },
    { icon: 'group', text: 'Real-time team collaboration' },
    { icon: 'bolt', text: 'Automation & smart workflows' },
    { icon: 'insights', text: 'Analytics & workload views' },
  ];

  return (
    <div className="min-h-screen flex bg-[#F4F5F7]">

      {/* ─── LEFT: Branding Panel ─── */}
      <div
        className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0747A6 0%, #0052CC 45%, #403294 100%)' }}
      >
        {/* Subtle noise/dot overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Glowing blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-[340px] h-[340px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #4C9AFF, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #8777D9, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-12 py-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                grid_view
              </span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Productive Flow</span>
          </div>

          {/* Main illustration */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-2xl opacity-40 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #4C9AFF, #8777D9)' }} />
              <img
                src={authBranding}
                alt="Productive Flow kanban illustration"
                className="relative w-full rounded-2xl shadow-2xl border border-white/10"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Headline */}
            <div className="mt-10 text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">
                Work smarter,<br />not harder.
              </h2>
              <p className="mt-3 text-blue-200 text-base leading-relaxed max-w-sm mx-auto">
                Organize tasks, collaborate with your team and ship projects on time — all in one place.
              </p>
            </div>

            {/* Feature pills */}
            <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-sm">
              {features.map(({ icon, text }) => (
                <div
                  key={icon}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="material-symbols-outlined text-blue-300 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {icon}
                  </span>
                  <span className="text-white/80 text-xs font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom trusted by */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {['#FF5630', '#36B37E', '#0052CC', '#FF8B00'].map((color, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: color }}>
                  {['A', 'M', 'J', 'K'][i]}
                </div>
              ))}
            </div>
            <p className="text-blue-200 text-xs">
              Trusted by <span className="text-white font-semibold">10,000+</span> teams worldwide
            </p>
          </div>
        </div>
      </div>

      {/* ─── RIGHT: Login Form ─── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-10 bg-white">

        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2 mb-8">
          <span className="material-symbols-outlined text-[#0052CC] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
            grid_view
          </span>
          <span className="text-[#091E42] font-bold text-xl tracking-tight">Productive Flow</span>
        </div>

        <div className="w-full max-w-[400px]">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-[#091E42] tracking-tight">Welcome back</h1>
            <p className="text-[#5E6C84] text-sm mt-1">Sign in to continue to your workspace.</p>
          </div>

          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-[#344563] mb-1.5" htmlFor="login-email">
                Email address
              </label>
              <input
                id="login-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2.5 border border-[#DFE1E6] rounded-lg text-sm text-[#091E42] placeholder-[#97A0AF] bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-[#344563]" htmlFor="login-password">
                  Password
                </label>
                <a href="#" className="text-xs text-[#0052CC] hover:underline font-medium">Forgot password?</a>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-2.5 pr-10 border border-[#DFE1E6] rounded-lg text-sm text-[#091E42] placeholder-[#97A0AF] bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#97A0AF] hover:text-[#344563] transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !!socialLoading}
              className="w-full py-2.5 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: loading ? '#0747A6' : 'linear-gradient(135deg, #0052CC, #0747A6)' }}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in...
                </>
              ) : 'Log In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-1 border-t border-[#DFE1E6]" />
            <span className="px-3 text-xs font-medium text-[#97A0AF] uppercase tracking-widest">or</span>
            <div className="flex-1 border-t border-[#DFE1E6]" />
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            {[
              { provider: 'google', label: 'Google', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAw949gcV1DMNZ7ThDxO9ez8niJT2Tz7hanIid5voaPDk0w9eWSu8DMv2T05Ns-CqVE_mxAkkqwuabtgI-Um6kXtvgXWqybdvQXWxM4dB4GHD9yl9OtXzEonkw8VdKUHJcor0ODrqpeP8x3RFVWMjqq72tql4Ub_1-Fl5GyAED5xs_eOqdWAhP5ZLzZ6P-DFo3PrQsxdmfuk0uTXH42UBz-HolQaOWPnlDE_tlI27uxYTklMpWvXFzVFR5MYIOcY-cV1oE-08_m_H8M' },
              { provider: 'microsoft', label: 'Microsoft', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3iWCeGr0hMUwhs-SCGL9zT4lG3-rSuaJhEjZAIu7SIxYhtWrAZs2BqKYkP8RNnGgggZh1iLl3D6MFOuDbOy1RC7Z5VUPj2TMGaqLf762dwwWxxwPh0I-r1Xo709p-saVBheArpMNzfCFpOvDi-3VQqPat0H14fGZiMdLfO2NwiYiXxqqhXM95rPL374hvbJblta5U3fUxTXBbxVfRp6jeTYsjRD_0zNYbJAgB4rBzxtlPB_k9RRd_veyGR1cmK1vSnfAKW_jo7fib' },
              { provider: 'apple', label: 'Apple', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs1RHDZzH81wqfjHWhPWOVaj8YgET0bsO5WqmqUZ7ih-VBk4lEzWNwfghBYdhbYb-3wTAzZBZk0GwYloDoQLmaj7K2muwqXV5a4gnSRC1MFVTjYYI8oU1bQ1f_i2sYpWJxqxbc6Q02LLyXmcPPzV1UphJ56dLZNhQIDSJufVaaYi_ODVLEY7Kig3Dd8v4hzHZbYYgCa0vw6qXo_OT6fkoFH8b1ZMuhwnH1qQRlk0zhI29rPTnFSuf7oLxSEnJ-PBAIi61cmIyhEDfk' },
              { provider: 'slack', label: 'Slack', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy4nMb_eCRKELY9YWZ_9Lw3m1jEfj5-sWD5vQQGvrEmmXpYe3f3IlvuexWBJ__5hxdu9POG5-wGmzh5mVdoEzGphDqaVdlKrhOZ2CbHmIYWZjPGIAUXwzpk7_GquNiezL86isUp7fZydzEcQbiRdI73O1erV8KVc7OB4k3tP_-qhJsk6ZQnqnXuXTubIxKl0LgKavXfJXRH7yead88AUcMiwz5BALyhWePlKmif6i9T6bnl1PBAmq53VZv7xZZs43UYsdrXekuKJk5' },
            ].map(({ provider, label, icon }) => (
              <button
                key={provider}
                type="button"
                onClick={() => handleSocialAuth(provider)}
                disabled={!!socialLoading || loading}
                className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-[#DFE1E6] rounded-lg bg-white hover:bg-[#F4F5F7] text-[#091E42] font-semibold text-sm transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {socialLoading === provider ? (
                  <svg className="w-5 h-5 animate-spin text-[#0052CC]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                ) : (
                  <img src={icon} alt={`${label} logo`} className="w-5 h-5" />
                )}
                {socialLoading === provider ? `Connecting to ${label}...` : `Continue with ${label}`}
              </button>
            ))}
          </div>

          {/* Sign up link */}
          <p className="mt-6 text-center text-sm text-[#5E6C84]">
            Don't have an account?{' '}
            <Link to="/sign-up" className="text-[#0052CC] font-semibold hover:underline">
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 flex gap-4 text-xs text-[#97A0AF]">
          <a href="#" className="hover:text-[#0052CC] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#0052CC] transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-[#0052CC] transition-colors">Support</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
