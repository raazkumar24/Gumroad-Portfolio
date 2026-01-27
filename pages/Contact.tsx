
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NeoButton from '../components/NeoButton';
import { SOCIAL_LINKS } from '../constants';
import { 
  Send, 
  Mail, 
  Clock, 
  Calendar, 
  Globe, 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  ArrowUpRight, 
  MapPin, 
  Zap,
  MessageSquare,
  Activity
} from 'lucide-react';
import { sendEmail } from '../contactEmail';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus('idle');

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', subject: 'Project Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (error: any) {
      console.error('Submission failed:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 space-y-32 overflow-x-hidden">
      {/* Background Ghost Text */}
      <div className="absolute top-40 left-0 w-full pointer-events-none opacity-5 select-none overflow-hidden">
         <h1 className="text-[20rem] font-black uppercase tracking-tighter italic leading-none whitespace-nowrap ghost-text">
           COMMUNICATION PROTOCOL
         </h1>
      </div>

      <section className="px-4 max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column: Context & Widgets */}
        <div className="lg:col-span-5 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="px-6 py-2 bg-blue-600 text-white font-black uppercase text-xs border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                Inquiry Hub
              </div>
              <div className="flex items-center gap-2 font-black uppercase text-[10px] text-green-500 animate-pulse">
                <Activity size={12} /> Systems Live
              </div>
            </div>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-black dark:text-white">
              Let's <br /> <span className="text-blue-600 italic">Sync.</span>
            </h1>
            <p className="text-2xl font-bold text-gray-600 dark:text-gray-400 max-w-md leading-tight italic">
              "Transforming abstract ideas into concrete digital systems starts with a simple conversation."
            </p>
          </motion.div>

          {/* Status Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <motion.div 
               whileHover={{ y: -5, scale: 1.02 }}
               className="p-8 border-4 border-black dark:border-white bg-white dark:bg-black neo-shadow space-y-4"
             >
                <div className="flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Local Time</span>
                   <MapPin size={16} className="text-red-500" />
                </div>
                <div className="text-4xl font-black text-black dark:text-white font-heading">{currentTime.split(' ')[0]}</div>
                <div className="text-[10px] font-black uppercase text-gray-400 italic">Mumbai, IN (GMT+5:30)</div>
             </motion.div>

             <motion.div 
               whileHover={{ y: -5, scale: 1.02, rotate: -2 }}
               onClick={() => window.open('https://calendly.com', '_blank')}
               className="p-8 border-4 border-black dark:border-white bg-yellow-400 text-black neo-shadow space-y-4 cursor-pointer group"
             >
                <div className="flex justify-between items-center">
                   <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
                   <ArrowUpRight size={16} />
                </div>
                <div className="text-2xl font-black uppercase leading-none">Book A <br /> 15m Sprint</div>
                <div className="text-[10px] font-black uppercase underline decoration-2 underline-offset-4">Check Availability</div>
             </motion.div>

             <motion.div 
               whileHover={{ y: -5, scale: 1.02, rotate: 2 }}
               className="p-8 border-4 border-black dark:border-white bg-purple-600 text-white neo-shadow space-y-4 col-span-1 sm:col-span-2 flex items-center justify-between"
             >
                <div className="space-y-2">
                   <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-black" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Active Status</span>
                   </div>
                   <div className="text-2xl font-black uppercase italic">Accepting Q3 Projects</div>
                </div>
                <Zap size={40} className="opacity-20 group-hover:opacity-100 transition-opacity" fill="currentColor" />
             </motion.div>
          </div>

          {/* Contact Details List */}
          <div className="space-y-6 pt-10">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 border-b-4 border-dashed border-gray-200 dark:border-neutral-800 pb-2">Verified Channels</h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: <Mail size={20} />, label: 'Main Archive', value: 'hello@rajshekhar.dev', link: 'mailto:hello@rajshekhar.dev', color: 'text-blue-600' },
                { icon: <MessageSquare size={20} />, label: 'Fast Response', value: '+91 (REDACTED)', link: '#', color: 'text-green-500' }
              ].map((item, i) => (
                <a key={i} href={item.link} className="flex items-center gap-6 p-6 border-4 border-black dark:border-white bg-white dark:bg-neutral-900 neo-shadow hover:translate-x-2 transition-transform group">
                   <div className={`${item.color} group-hover:scale-125 transition-transform`}>{item.icon}</div>
                   <div>
                      <p className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">{item.label}</p>
                      <p className="text-lg font-black text-black dark:text-white uppercase tracking-tighter">{item.value}</p>
                   </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: The Briefing Form */}
        <div className="lg:col-span-7">
          <div className="relative">
            {/* Decorative Background layer */}
            <div className="absolute -inset-4 bg-blue-600 border-4 border-black rotate-2 -z-10" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-neutral-950 border-8 border-black dark:border-white p-10 md:p-16 neo-shadow relative"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                 <div>
                    <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-black dark:text-white">Briefing Protocol</h2>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">v2.4 TRANSMISSION SYSTEM</p>
                 </div>
                 <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-black text-2xl -rotate-6 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)]">
                    REQ
                 </div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-8"
                  >
                    <div className="w-32 h-32 bg-green-500 border-4 border-black flex items-center justify-center text-white mx-auto shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                       <CheckCircle size={64} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-5xl font-black uppercase italic">Transmitted!</h3>
                       <p className="text-xl font-bold text-gray-600 dark:text-gray-400 italic">Your briefing has been received. <br /> Expect a response within 24 hours.</p>
                    </div>
                    <button onClick={() => setStatus('idle')} className="font-black uppercase text-sm underline decoration-4 decoration-blue-500 underline-offset-8">Send New Brief →</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {status === 'error' && (
                      <div className="col-span-full p-6 bg-red-100 dark:bg-red-900/20 border-4 border-red-500 text-red-600 dark:text-red-400 flex items-center gap-4 font-black text-sm uppercase">
                        <AlertCircle size={24} /> Transmission Error. Check credentials.
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white">Entity Name</label>
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="IDENTIFY YOURSELF"
                        className="w-full p-5 border-4 border-black dark:border-white bg-neutral-50 dark:bg-black text-black dark:text-white font-black placeholder:opacity-30 outline-none focus:bg-blue-50 dark:focus:bg-blue-900/20 transition-colors"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white">Digital Address</label>
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="NAME@DOMAIN.COM"
                        className="w-full p-5 border-4 border-black dark:border-white bg-neutral-50 dark:bg-black text-black dark:text-white font-black placeholder:opacity-30 outline-none focus:bg-blue-50 dark:focus:bg-blue-900/20 transition-colors"
                      />
                    </div>

                    <div className="col-span-full space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white">Inquiry Type</label>
                      <select 
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-5 border-4 border-black dark:border-white bg-neutral-50 dark:bg-black text-black dark:text-white font-black outline-none cursor-pointer"
                      >
                        <option value="Project Inquiry">Project Inquiry (New Product)</option>
                        <option value="Consultancy">Technical Consultancy</option>
                        <option value="Job Opportunity">Strategic Hiring</option>
                        <option value="Just Saying Hi!">General Dialogue</option>
                      </select>
                    </div>

                    <div className="col-span-full space-y-3">
                      <label className="text-xs font-black uppercase tracking-[0.3em] text-black dark:text-white">The Briefing</label>
                      <textarea 
                        id="message" 
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="DEFINE YOUR VISION, GOALS, AND AMBITIONS..."
                        className="w-full p-5 border-4 border-black dark:border-white bg-neutral-50 dark:bg-black text-black dark:text-white font-black placeholder:opacity-30 outline-none focus:bg-blue-50 dark:focus:bg-blue-900/20 transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="col-span-full pt-6">
                      <button 
                        type="submit" 
                        disabled={isSending}
                        className="w-full py-8 text-2xl font-black uppercase italic bg-blue-600 text-white border-4 border-black neo-shadow hover:bg-black hover:text-blue-500 transition-all flex items-center justify-center gap-4 disabled:opacity-50"
                      >
                        {isSending ? (
                          <>
                            <Loader2 size={32} className="animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <Send size={28} /> Initiate Sync
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Bento Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-16">
        <div className="text-center space-y-4">
           <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white">Expand <span className="text-purple-600">Network.</span></h2>
           <p className="font-bold text-gray-500 uppercase tracking-widest text-xs italic">FOLLOW THE ARCHIVE ACROSS DIGITAL FRONTIERS</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOCIAL_LINKS.map((link, idx) => {
            const themes = [
              'bg-blue-600 group-hover:bg-black',
              'bg-purple-600 group-hover:bg-white group-hover:text-black',
              'bg-black group-hover:bg-blue-400',
              'bg-yellow-400 group-hover:bg-black group-hover:text-yellow-400'
            ];
            return (
              <motion.a 
                key={link.name} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -10, rotate: idx % 2 === 0 ? 3 : -3 }}
                className={`
                  p-12 border-8 border-black dark:border-white bg-white dark:bg-neutral-900 
                  neo-shadow transition-all group flex flex-col items-center gap-6
                `}
              >
                <div className={`
                  w-20 h-20 border-4 border-black flex items-center justify-center text-white 
                  ${themes[idx % themes.length]} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                  transition-all group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1
                `}>
                  {link.icon}
                </div>
                <div className="text-center space-y-1">
                   <span className="text-2xl font-black uppercase italic text-black dark:text-white">{link.name}</span>
                   <p className="text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">Connect →</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* SLA / Expectations Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
         <div className="bg-black text-white p-16 md:p-24 border-8 border-yellow-400 shadow-[30px_30px_0px_0px_rgba(37,99,235,1)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 -rotate-12 translate-x-10 -translate-y-10 border-4 border-dashed border-white/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
               <div className="md:col-span-7 space-y-8">
                  <h3 className="text-5xl font-black uppercase italic leading-none border-l-8 border-yellow-400 pl-8">Communication <br /> SLA.</h3>
                  <ul className="space-y-6">
                     {[
                       'Initial response within 24 hours guaranteed.',
                       'Project discovery sessions usually booked within 3 days.',
                       'Transparent pricing and timeline breakdown provided upfront.',
                       'Direct technical lead communication (no middlemen).'
                     ].map((item, i) => (
                       <li key={i} className="flex items-start gap-4 text-xl font-bold italic opacity-80">
                          <CheckCircle className="shrink-0 text-green-400 mt-1" />
                          {item}
                       </li>
                     ))}
                  </ul>
               </div>
               <div className="md:col-span-5 flex flex-col items-center justify-center text-center p-10 border-4 border-dashed border-white/20">
                  <div className="text-8xl font-black text-yellow-400 italic leading-none">99%</div>
                  <div className="text-xs font-black uppercase tracking-[0.4em] mt-4">Satisfaction <br /> Rate</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Contact;
