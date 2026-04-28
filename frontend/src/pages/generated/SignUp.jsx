import React, { useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import SocialSimulationModal from '../../components/SocialSimulationModal';
import authBranding from '../../assets/auth-branding.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register, googleLogin } = useAuth();
  const { showToast } = useToast();
  const [email, setEmail] = useState(searchParams.get('email') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState('');
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const [pendingProvider, setPendingProvider] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (step === 1) {
        // Pass the username to the backend; if empty, our RegisterSerializer will handle generation
        await register(username || '', password, email);
        showToast('OTP sent to your email', 'success');
        setStep(2);
      } else {
        await verifyRegistration(username || '', password, email, otp);
        showToast('Successfully registered!', 'success');
        navigate('/onboarding-welcome');
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.error || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialAuth = (provider) => {
    if (provider !== 'google') {
      showToast(`${provider} login is not implemented in this demo. Please use Google.`, 'info');
      return;
    }
    setPendingProvider(provider);
    setIsSocialModalOpen(true);
  };

  const onSocialSubmit = async (email, name) => {
    setSocialLoading(pendingProvider);
    setError('');
    try {
      await googleLogin(email, name);
      showToast('Successfully registered!', 'success');
      navigate('/onboarding-welcome');
    } catch (err) {
      console.error(err);
      setError(`${pendingProvider} sign-in failed. Please try again.`);
      showToast('Sign up failed', 'error');
    } finally {
      setSocialLoading('');
    }
  };

  const testimonial = {
    text: '"Productive Flow transformed how our team collaborates. We ship 40% faster now."',
    author: 'Sarah K.',
    role: 'Engineering Manager at TechCorp',
    avatar: '#36B37E',
    initials: 'SK',
  };

  return (
    <div className="min-h-screen flex bg-[#F4F5F7]">

      {/* ─── LEFT: Branding Panel ─── */}
      <div
        className="hidden lg:flex lg:w-[52%] xl:w-[55%] flex-col relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0747A6 0%, #0052CC 45%, #403294 100%)' }}
      >
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Glow blobs */}
        <div className="absolute top-[-80px] right-[-60px] w-[320px] h-[320px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #8777D9, transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #4C9AFF, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full px-12 py-10">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/30">
              <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                grid_view
              </span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Productive Flow</span>
          </div>

          {/* Illustration */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-2xl opacity-40 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #4C9AFF, #8777D9)' }} />
              <img
                src={authBranding}
                alt="Productive Flow kanban illustration"
                className="relative w-full rounded-2xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Headline */}
            <div className="mt-10 text-center">
              <h2 className="text-white text-3xl font-bold leading-tight tracking-tight">
                Your team's command<br />center is here.
              </h2>
              <p className="mt-3 text-blue-200 text-base leading-relaxed max-w-sm mx-auto">
                Boards, lists, and cards that evolve with your workflow. Built for teams that move fast.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4 w-full max-w-sm">
              {[
                { value: '10K+', label: 'Teams' },
                { value: '500K+', label: 'Tasks done' },
                { value: '99.9%', label: 'Uptime' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center py-3 px-2 rounded-xl border border-white/15 backdrop-blur-sm"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="text-white font-bold text-lg leading-none">{value}</span>
                  <span className="text-blue-300 text-xs mt-1">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div
            className="mt-8 p-5 rounded-2xl border border-white/15 backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <p className="text-white/90 text-sm leading-relaxed italic">{testimonial.text}</p>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: testimonial.avatar }}>
                {testimonial.initials}
              </div>
              <div>
                <p className="text-white font-semibold text-xs">{testimonial.author}</p>
                <p className="text-blue-300 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── RIGHT: Sign Up Form ─── */}
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
            <h1 className="text-2xl font-bold text-[#091E42] tracking-tight">Create your account</h1>
            <p className="text-[#5E6C84] text-sm mt-1">Start your free workspace — no credit card required.</p>
          </div>

          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#344563] mb-1.5" htmlFor="signup-email">
                    Email address
                  </label>
                  <input
                    id="signup-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full px-4 py-2.5 border border-[#DFE1E6] rounded-lg text-sm text-[#091E42] placeholder-[#97A0AF] bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all"
                  />
                </div>

                {/* Full Name / Username */}
                <div>
                  <label className="block text-xs font-semibold text-[#344563] mb-1.5" htmlFor="signup-username">
                    Full name
                  </label>
                  <input
                    id="signup-username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 border border-[#DFE1E6] rounded-lg text-sm text-[#091E42] placeholder-[#97A0AF] bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-xs font-semibold text-[#344563] mb-1.5" htmlFor="signup-password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Create a strong password"
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
              </>
            ) : (
              <>
                {/* OTP */}
                <div>
                  <label className="block text-xs font-semibold text-[#344563] mb-1.5" htmlFor="signup-otp">
                    Verification Code
                  </label>
                  <p className="text-xs text-[#5E6C84] mb-3">We sent a 6-digit code to {email}. Please enter it below.</p>
                  <input
                    id="signup-otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    required
                    maxLength={6}
                    className="w-full px-4 py-2.5 border border-[#DFE1E6] rounded-lg text-sm text-[#091E42] placeholder-[#97A0AF] bg-[#FAFBFC] focus:outline-none focus:ring-2 focus:ring-[#0052CC]/30 focus:border-[#0052CC] transition-all text-center tracking-widest font-mono text-lg"
                  />
                </div>
              </>
            )}

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
                  {step === 1 ? 'Creating account...' : 'Verifying...'}
                </>
              ) : (step === 1 ? 'Sign Up Free' : 'Verify Account')}
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
              { provider: 'google', label: 'Google', icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCxa1wouDWunWRFzBc6jITFhMTB8ogDeSDwJXDYu6zWaEMzA3RpvWmWpXKbNZryhNw74dw_fmDwGp8kC1wmPwgimoT14LfaE60uOm7fLjAbc7QvJcrwZfuTM7sALysFvfnvtWRhunRe1r9xQZlYSkIByfBZZrS7tWOq0m8enctZZyxTSAk-RBVrXVbjmAFjEMPEKCivMP96FUej6Nq2Ilb6xhNNoNnaKf0KCWAsZV97uMOzHM7aG85a29mIU_5MdBXFO1Hl5Jl9pEF' },
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

          {/* Terms */}
          <p className="mt-5 text-center text-xs text-[#97A0AF] leading-relaxed">
            By signing up, you agree to our{' '}
            <button type="button" onClick={(e) => e.preventDefault()} className="text-[#0052CC] hover:underline">Terms of Service</button> and{' '}
            <button type="button" onClick={(e) => e.preventDefault()} className="text-[#0052CC] hover:underline">Privacy Policy</button>.
          </p>

          {/* Login link */}
          <p className="mt-4 text-center text-sm text-[#5E6C84]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#0052CC] font-semibold hover:underline">
              Log in
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 flex gap-4 text-xs text-[#97A0AF]">
          <button type="button" onClick={(e) => e.preventDefault()} className="hover:text-[#0052CC] transition-colors">Privacy Policy</button>
          <button type="button" onClick={(e) => e.preventDefault()} className="hover:text-[#0052CC] transition-colors">Terms of Service</button>
          <button type="button" onClick={(e) => e.preventDefault()} className="hover:text-[#0052CC] transition-colors">Support</button>
        </div>
      </div>
      
      <SocialSimulationModal 
        isOpen={isSocialModalOpen} 
        onClose={() => setIsSocialModalOpen(false)} 
        onSubmit={onSocialSubmit}
        provider={pendingProvider}
      />
    </div>
  );
};

export default SignUp;
