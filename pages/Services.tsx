
import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import NeoButton from '../components/NeoButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Cpu, Layers, Globe, Smartphone, Monitor, Code, ArrowUpRight, Star } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  onServiceClick: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'Detailed requirement analysis and tech-stack selection.', color: 'bg-blue-600', icon: <Globe size={24} /> },
    { num: '02', title: 'Architecture', desc: 'Building the blueprints for a scalable ecosystem.', color: 'bg-purple-600', icon: <Layers size={24} /> },
    { num: '03', title: 'Sprint cycles', desc: 'Continuous deployment with bi-weekly updates.', color: 'bg-green-500', icon: <Zap size={24} /> },
    { num: '04', title: 'Launch Pad', desc: 'Rigorous testing and performance optimization.', color: 'bg-yellow-400', icon: <Smartphone size={24} /> },
  ];

  return (
    <div className="pt-32 pb-24 space-y-40 overflow-x-hidden">
      {/* Header Grid */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 space-y-10"
        >
          <div className="flex items-center gap-4">
            <div className="inline-block px-6 py-2 border-4 border-black dark:border-white bg-green-400 text-black font-black uppercase text-sm tracking-[0.5em] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Capabilities
            </div>
            <div className="animate-pulse flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-black uppercase text-[10px] border-2 border-black dark:border-white">
              <Star size={12} fill="currentColor" /> Q2 2024 Slots Open
            </div>
          </div>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter text-black dark:text-white leading-[0.75]">
            Built For <br /> 
            <span className="text-black/10 dark:text-white/10 ghost-text">Impact.</span>
          </h1>
          <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 max-w-4xl font-bold leading-tight">
            I offer comprehensive engineering services that bridge the gap between <span className="bg-purple-600 text-white px-3 py-1 italic border-2 border-black">startup ideas</span> and enterprise-scale realities.
          </p>
        </motion.div>
        
        <div className="lg:col-span-4 hidden lg:flex flex-col gap-10">
           <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="p-10 bg-blue-600 text-white border-4 border-black neo-shadow transition-all duration-300 cursor-pointer group"
           >
              <Zap size={48} className="mb-6 group-hover:animate-bounce" fill="currentColor" />
              <h4 className="text-3xl font-black uppercase tracking-tighter">Ultra Fast</h4>
              <p className="text-xs font-bold opacity-80 mt-4 uppercase tracking-[0.2em] leading-relaxed">95+ Lighthouse Score focused development pipeline.</p>
           </motion.div>
           <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="p-10 bg-white dark:bg-black border-4 border-black neo-shadow transition-all duration-300 cursor-pointer group"
           >
              <Shield size={48} className="mb-6 text-green-500 group-hover:scale-110 transition-transform" />
              <h4 className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white">Bulletproof</h4>
              <p className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-[0.2em] leading-relaxed">End-to-end security audits and secure architecture.</p>
           </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {SERVICES.map((service, idx) => {
          const IconComponent = (Icons as any)[service.icon];
          const colorVariants = {
            'bg-blue-600': 'hover:bg-blue-600 hover:text-white',
            'bg-purple-600': 'hover:bg-purple-600 hover:text-white',
            'bg-green-500': 'hover:bg-green-500 hover:text-black',
          };
          const accentColor = service.color;
          
          return (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, type: 'spring' }}
              onClick={() => onServiceClick(service)}
              className={`
                relative bg-white dark:bg-neutral-950 border-8 border-black dark:border-white p-10 md:p-14 
                neo-shadow group h-full flex flex-col transition-all duration-500 cursor-pointer
                ${colorVariants[accentColor as keyof typeof colorVariants]}
              `}
            >
              {/* Feature Badge */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-yellow-400 text-black text-[10px] font-black uppercase px-3 py-1 border-2 border-black rotate-12">
                  Premium Service
                </div>
              </div>

              {/* Icon Container */}
              <div className={`
                w-24 h-24 ${accentColor} border-4 border-black dark:border-white flex items-center justify-center text-white mb-10 
                group-hover:scale-110 group-hover:-rotate-12 transition-transform shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]
              `}>
                {IconComponent && <IconComponent size={48} />}
              </div>

              {/* Title & Description */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">{service.title}</h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <p className="text-xl md:text-2xl font-bold opacity-70 italic leading-tight">
                  "{service.description}"
                </p>

                {/* Quick Spec List - NEW */}
                <ul className="space-y-3 pt-6">
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
                      <CheckCircle size={16} className="shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Footer / CTA */}
              <div className="mt-12 pt-10 border-t-4 border-dashed border-current/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50 mb-1">Response Time</span>
                  <span className="font-black italic">Under 24h</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Inquire <Icons.ArrowRight size={20} />
                </div>
              </div>

              {/* Dynamic Background on Hover (Neo effect) */}
              <div className="absolute -inset-4 bg-black/5 dark:bg-white/5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-4 border-dashed border-black/10 dark:border-white/10" />
            </motion.div>
          );
        })}
      </div>

      {/* Value Protocol Section */}
      <section className="bg-black text-white border-y-[12px] border-yellow-400 py-40 overflow-hidden relative">
         <motion.div 
           animate={{ rotate: 360 }}
           transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
           className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] border-[20px] border-white/5 border-dashed rounded-full hidden lg:block"
         />
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
               <h2 className="text-7xl md:text-[8rem] font-black uppercase italic tracking-tighter leading-[0.8] relative z-10">
                 The Value <br /> 
                 <span className="text-white/10" style={{ WebkitTextStroke: '2px white' }}>Protocol.</span>
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  {steps.map((step, i) => (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      key={i} 
                      className="space-y-6 group"
                    >
                       <div className="flex items-center justify-between">
                         <span className={`text-6xl font-black ${step.color.replace('bg-', 'text-')} italic opacity-20 group-hover:opacity-100 transition-opacity`}>{step.num}</span>
                         <div className={`p-3 ${step.color} border-2 border-white/20 group-hover:scale-110 transition-transform`}>{step.icon}</div>
                       </div>
                       <h4 className="text-3xl font-black uppercase border-b-4 border-white/10 pb-4 group-hover:border-blue-600 transition-colors">{step.title}</h4>
                       <p className="text-xl text-gray-400 font-bold leading-tight italic">{step.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
              viewport={{ once: true }}
              className="p-16 bg-white text-black border-8 border-black shadow-[32px_32px_0px_0px_rgba(37,99,235,0.8)] relative"
            >
               <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 border-l-8 border-b-8 border-black flex items-center justify-center font-black text-4xl shadow-[-4px_4px_0px_0px_black]">!</div>
               <div className="flex items-center gap-8 mb-12">
                  <div className="w-20 h-20 bg-purple-600 border-8 border-black text-white flex items-center justify-center neo-shadow">
                    <Cpu size={40} />
                  </div>
                  <h3 className="text-5xl font-black uppercase italic leading-none">Ready to <br /> scale?</h3>
               </div>
               <p className="text-3xl font-bold leading-tight mb-16 italic">
                  I specialize in taking MVP versions of products and turning them into market-ready assets. My focus is on <span className="underline decoration-blue-600 decoration-8 underline-offset-4">zero-downtime migrations</span>.
               </p>
               <Link to="/contact" className="w-full md:w-auto">
                 <NeoButton variant="primary" className="w-full py-8 text-2xl !bg-blue-600 hover:!bg-black transition-all hover:scale-105 active:scale-95 border-4 border-black">Start Collaboration</NeoButton>
               </Link>
            </motion.div>
         </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="max-w-5xl mx-auto px-4 pb-20">
         <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -10 }}
          className="bg-green-400 border-8 border-black p-20 text-center space-y-12 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
         >
            <div className="absolute top-0 left-0 p-8 opacity-10 rotate-12"><Monitor size={120} /></div>
            <div className="absolute bottom-0 right-0 p-8 opacity-10 -rotate-12"><Code size={120} /></div>
            
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-none text-black">Transparent Pricing</h2>
            <p className="text-2xl font-bold text-black max-w-3xl mx-auto italic opacity-80 leading-relaxed">
              No hidden fees. Value-based engineering that respects your project goals, budget, and ambitious timelines.
            </p>
            <Link to="/contact" className="inline-block pt-6">
               <span className="text-2xl font-black uppercase underline decoration-[10px] decoration-black/10 hover:decoration-black cursor-pointer transition-all underline-offset-8">
                 Request a Custom Quote →
               </span>
            </Link>
         </motion.div>
      </section>
    </div>
  );
};

export default Services;
