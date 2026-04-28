import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Kanban, LayoutDashboard, ListTodo, CreditCard, Zap, Calendar, MoreHorizontal, CheckCircle2, Circle } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Kanban className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Productive Flow</span>
          <nav className="hidden md:flex items-center gap-6 ml-10">
            <a className="text-slate-600 font-medium hover:text-blue-600 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Features</a>
            <a className="text-slate-600 font-medium hover:text-blue-600 transition-colors" href="#" onClick={(e) => e.preventDefault()}>Solutions</a>
            <a className="text-slate-600 font-medium hover:text-blue-600 transition-colors" href="#" onClick={(e) => { e.preventDefault(); navigate('/pricing-plans'); }}>Plans</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-slate-600 font-medium px-3 py-2 hover:bg-slate-100 transition-colors rounded-lg" onClick={() => navigate('/login')}>Log in</button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-colors" 
            onClick={() => navigate('/sign-up')}
          >
            Get Productive Flow for free
          </motion.button>
        </div>
      </header>

      <main className="pt-16 overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
          {/* Abstract Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.3, scale: 1.2 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "mirror", delay: 1 }}
              className="absolute top-40 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px]"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-white text-center lg:text-left"
            >
              <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
                Productive Flow brings all your tasks together.
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Keep everything in the same place—even if your team isn't. Join over 2,000,000 teams worldwide who use Productive Flow to get more done.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <input 
                  className="w-full sm:w-auto flex-grow max-w-sm px-5 py-4 rounded-xl text-slate-900 focus:ring-4 focus:ring-blue-400 outline-none transition-all" 
                  placeholder="Enter your email address" 
                  type="email"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all" 
                  onClick={() => navigate('/sign-up')}
                >
                  Sign up - it's free
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: -5 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="hidden lg:block perspective-1000"
            >
              <img 
                alt="Productive team working" 
                className="rounded-2xl shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0ZBEx13NFmETrV45Qh2tl4Gzib6QLCelVPCZxKCq0nVzKQClhwuHjZ5ZJ7MqK440oX801Cu5HXh2RzYKM3vJzLQMtMF1p0UVOhvCfowmAOqjEv7_6PIYj2AULJcMwXmXbmofbBWuRyGRZWxQHPtlrdGN-4NZ7W7KJUoh2e2EhRgGjb4bygFfrpdRd_N7HUsIjub2e3--1d4tjGGiDWZjHXUDanS6YnUciJWmDyY-dHg52bQbU_Vbst4y6YMXhRJ1pDIt4_l4tH57K"
              />
            </motion.div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-sm font-bold text-slate-400 mb-8 uppercase tracking-widest">Trusted by the world's best teams</p>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {['VISA', 'Zoom', 'Fender', 'DoorDash', 'Squarespace'].map((brand, idx) => (
                <div key={idx} className="text-2xl font-black text-slate-800">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">A productivity powerhouse</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who's doing what and what needs to get done.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Boards', icon: LayoutDashboard, color: 'text-blue-600', bg: 'bg-blue-100', desc: 'Productive Flow boards keep tasks organized and work moving forward. See everything from "things to do" to "done!" in a single glance.' },
                { title: 'Lists', icon: ListTodo, color: 'text-purple-600', bg: 'bg-purple-100', desc: 'The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs.' },
                { title: 'Cards', icon: CreditCard, color: 'text-emerald-600', bg: 'bg-emerald-100', desc: 'Cards represent tasks and hold all the info to get the job done. As you make progress, move cards across lists.' }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-14 h-14 ${feature.bg} rounded-2xl flex items-center justify-center mb-8`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Automation CTA */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white pointer-events-none" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="bg-blue-600/5 absolute -inset-10 rounded-full blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4 relative">
                  <div className="space-y-4 pt-12">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                      <div className="w-full h-2 bg-slate-100 rounded mb-3"></div>
                      <div className="w-3/4 h-2 bg-slate-100 rounded mb-4"></div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-400"></div>
                        <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                      <img alt="Chart visual" className="w-full h-32 object-cover rounded-xl mb-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF_5wO4z32CZzB8l8TQHJkMVHVWBpY5Tc1qxcF3SJEaRtl7Fu2bT1mloujUViAQcA3uS56PyLYUly6PA5dETMRPh2hymEbANk4-vrOkcEfn6drKWW9c4evi6qvPdAIeiCl5pIaRJzSX8nEhDi6B6P1rpPvRpP08-KJhveVJOsBqNP1FHXlxQUM9KH5jD04PX6wFil4pAfBGiN4TGYo0HHNjrsWkz0OAHW8NA8MfsLwb81CiHTq1O48Cv0uubZvZhhECIWxCSZPQARa"/>
                      <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                    </motion.div>
                  </div>
                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">DESIGN</span>
                        <MoreHorizontal className="text-slate-400 w-5 h-5" />
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded mb-2"></div>
                      <div className="w-5/6 h-2 bg-slate-100 rounded"></div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-5 rounded-2xl shadow-xl border border-slate-100 transform translate-x-4">
                      <div className="flex items-center gap-3 mb-4">
                        <CheckCircle2 className="text-blue-500 w-5 h-5" />
                        <div className="w-24 h-2 bg-slate-100 rounded"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Circle className="text-slate-300 w-5 h-5" />
                        <div className="w-16 h-2 bg-slate-100 rounded"></div>
                      </div>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-200"></div>
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-xs font-bold text-emerald-800">+5</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Work smarter with Automation</h2>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Let the robots do the work—so your team can focus on work that matters. With Productive Flow’s built-in automation, Butler, reduce tedious tasks across your entire team.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Zap className="text-blue-600 w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-lg block mb-1">Rule-based triggers</span>
                      <span className="text-slate-600">Move cards, post comments, and more automatically.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="text-purple-600 w-6 h-6" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 text-lg block mb-1">Calendar commands</span>
                      <span className="text-slate-600">Automate recurring tasks on a schedule perfectly.</span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-blue-900 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold mb-8"
            >
              Get started with Productive Flow today
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-blue-200 mb-10"
            >
              Join over 2,000,000 teams worldwide that are using Productive Flow to get more done.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <button 
                className="bg-white text-blue-900 font-bold px-10 py-5 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transform duration-200" 
                onClick={() => navigate('/sign-up')}
              >
                Sign up - it's free
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Kanban className="text-white w-6 h-6" />
              <span className="font-bold text-white text-xl">Productive Flow</span>
            </div>
            <p className="text-sm">© 2024 Productive Flow Inc. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="hover:text-white transition-colors" href="#" onClick={(e) => e.preventDefault()}>Privacy</a>
            <a className="hover:text-white transition-colors" href="#" onClick={(e) => e.preventDefault()}>Terms</a>
            <a className="hover:text-white transition-colors" href="#" onClick={(e) => { e.preventDefault(); navigate('/help-center'); }}>Support</a>
            <a className="hover:text-white transition-colors" href="#" onClick={(e) => e.preventDefault()}>About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
