
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, ArrowRight, Star, Layers, Globe, Server, Cpu, Mail, Loader2, AlertCircle } from 'lucide-react';
import { Service } from '../types';
import NeoButton from './NeoButton';
import { Link } from 'react-router-dom';
import { sendEmail } from '../contactEmail';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
      // Reset form on close
      setFormData({ name: '', email: '' });
      setStatus('idle');
    };
  }, [service, onClose]);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!service) return;
    
    setIsSending(true);
    setStatus('idle');

    try {
      await sendEmail({
        name: formData.name,
        email: formData.email,
        subject: `Quick Inquiry: ${service.title}`,
        message: `User is interested in the "${service.title}" service. Please contact them at ${formData.email}.`
      });
      setStatus('success');
      setFormData({ name: '', email: '' });
    } catch (error) {
      console.error('Service Inquiry Error:', error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  if (!service) return null;

  const IconMap: Record<string, any> = {
    Layers: Layers,
    Globe: Globe,
    Server: Server,
  };

  const IconComponent = IconMap[service.icon] || Cpu;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-950 border-0 md:border-4 border-black dark:border-white shadow-[24px_24px_0px_0px_rgba(37,99,235,1)]"
        >
          {/* Header Area */}
          <div className="sticky top-0 z-50 flex justify-end p-4 pointer-events-none">
            <button 
              onClick={onClose}
              className="pointer-events-auto p-3 bg-black text-white dark:bg-white dark:text-black border-2 border-white dark:border-black hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90"
            >
              <X size={28} />
            </button>
          </div>

          <div className="p-8 md:p-16 relative overflow-hidden">
             {/* Ghost Background Text */}
             <div className="absolute top-0 right-0 -mr-20 -mt-10 pointer-events-none opacity-5 select-none">
                <h1 className="text-[15rem] font-black uppercase tracking-tighter italic ghost-text">
                  {service.title.split(' ')[0]}
                </h1>
             </div>

             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Visual Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                   <div className={`w-32 h-32 ${service.color} border-4 border-black dark:border-white flex items-center justify-center text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}>
                      <IconComponent size={64} />
                   </div>
                   <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-black dark:text-white">
                      {service.title}
                   </h2>
                   <div className="h-4 w-40 bg-yellow-400 border-2 border-black" />
                </div>

                {/* Content Area */}
                <div className="lg:col-span-8 space-y-12">
                   <section className="space-y-6">
                      <div className="flex items-center gap-2">
                        <Star size={20} className="text-blue-600" fill="currentColor" />
                        <span className="font-black uppercase tracking-[0.3em] text-xs text-gray-500">Service Breakdown</span>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200 leading-tight italic">
                         "{service.fullDescription}"
                      </p>
                   </section>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <section className="space-y-6">
                         <h4 className="text-xl font-black uppercase tracking-widest border-b-4 border-blue-600 inline-block pb-1 text-black dark:text-white">Core Deliverables</h4>
                         <ul className="space-y-4">
                            {service.features.map((feature, i) => (
                               <motion.li 
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: 0.1 * i }}
                                 key={i} 
                                 className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-400"
                               >
                                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                                  {feature}
                               </motion.li>
                            ))}
                         </ul>
                      </section>

                      <section className="space-y-6">
                         <h4 className="text-xl font-black uppercase tracking-widest border-b-4 border-purple-600 inline-block pb-1 text-black dark:text-white">ROI & Value</h4>
                         <ul className="space-y-4">
                            {service.benefits.map((benefit, i) => (
                               <motion.li 
                                 initial={{ opacity: 0, x: 10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ delay: 0.1 * i }}
                                 key={i} 
                                 className="flex items-center gap-3 font-bold text-gray-600 dark:text-gray-400"
                               >
                                  <Zap size={18} className="text-yellow-500 shrink-0" fill="currentColor" />
                                  {benefit}
                               </motion.li>
                            ))}
                         </ul>
                      </section>
                   </div>

                   {/* Quick Inquiry Form */}
                   <div className="pt-12 border-t-4 border-dashed border-gray-200 dark:border-neutral-800">
                      <AnimatePresence mode="wait">
                        {status === 'success' ? (
                          <motion.div 
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-8 bg-green-100 dark:bg-green-900/20 border-4 border-green-500 text-center space-y-4"
                          >
                             <CheckCircle2 size={48} className="mx-auto text-green-500" />
                             <h4 className="text-2xl font-black uppercase italic">Inquiry Received!</h4>
                             <p className="font-bold text-gray-700 dark:text-gray-300">Raj will contact you shortly about {service.title}.</p>
                             <button onClick={() => setStatus('idle')} className="text-sm font-black uppercase underline decoration-2 underline-offset-4">Send another message</button>
                          </motion.div>
                        ) : (
                          <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                               <div className="space-y-1">
                                  <p className="font-black uppercase text-xs text-gray-400">Next Step</p>
                                  <h5 className="text-3xl font-black uppercase italic text-black dark:text-white leading-none">Express Interest.</h5>
                               </div>
                               <Link to="/contact" onClick={onClose} className="text-sm font-black uppercase underline decoration-2 decoration-blue-500 underline-offset-8 hover:text-blue-600 transition-colors">
                                 Full Contact Form →
                               </Link>
                            </div>

                            <form onSubmit={handleInquiry} className="grid grid-cols-1 md:grid-cols-12 gap-4">
                               <div className="md:col-span-5">
                                  <input 
                                    type="text" 
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full p-4 border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-black placeholder:opacity-50 outline-none focus:bg-blue-50 dark:focus:bg-blue-900/10 transition-colors"
                                  />
                               </div>
                               <div className="md:col-span-5">
                                  <input 
                                    type="email" 
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full p-4 border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white font-black placeholder:opacity-50 outline-none focus:bg-blue-50 dark:focus:bg-blue-900/10 transition-colors"
                                  />
                               </div>
                               <div className="md:col-span-2">
                                  <button 
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full h-full p-4 bg-blue-600 text-white border-4 border-black dark:border-white flex items-center justify-center neo-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50"
                                  >
                                    {isSending ? <Loader2 size={24} className="animate-spin" /> : <Mail size={24} />}
                                  </button>
                               </div>
                            </form>
                            
                            {status === 'error' && (
                              <p className="mt-4 flex items-center gap-2 text-red-500 font-black text-xs uppercase italic">
                                <AlertCircle size={14} /> Transmitting failed. Try again?
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ServiceModal;
