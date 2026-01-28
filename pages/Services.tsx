import React from 'react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import NeoButton from '../components/NeoButton';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Cpu, Layers, Globe, Smartphone, Monitor, Code, ArrowUpRight, Star, ArrowRight, ArrowLeft } from 'lucide-react';
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
    <div className="pt-32 pb-24 space-y-40 overflow-x-hidden px-4">
      {/* Header Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-8 space-y-8 md:space-y-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4">
            <div className="inline-block px-4 md:px-6 py-2 border-4 border-black dark:border-white bg-green-400 text-black font-black uppercase text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Capabilities
            </div>
            <div className="animate-pulse flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-black uppercase text-[10px] border-2 border-black dark:border-white">
              <Star size={10} className="md:w-3 md:h-3" fill="currentColor" /> Q2 2024 Slots Open
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter text-black dark:text-white leading-[0.8] md:leading-[0.75]">
            Built For <br />
            <span className="text-black/10 dark:text-white/10 ghost-text">Impact.</span>
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 max-w-4xl font-bold leading-snug md:leading-tight">
            I offer comprehensive engineering services that bridge the gap between <span className="bg-purple-600 text-white px-2 md:px-3 py-1 italic border-2 border-black">startup ideas</span> and enterprise-scale realities.
          </p>

          {/* Back Button - Mobile */}
          <div className="lg:hidden pt-6">
            <Link to="/">
              <NeoButton
                variant="outline"
                className="flex items-center gap-3 font-black group px-6 py-3 text-base"
              >
                <ArrowLeft size={20} />
                Back to Home
              </NeoButton>
            </Link>
          </div>
        </motion.div>

        <div className="lg:col-span-4 hidden lg:flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            className="p-5 bg-blue-600 text-white border-4 border-black neo-shadow transition-all duration-300 cursor-pointer group"
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

        {/* Mobile Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            className="p-6 bg-blue-600 text-white border-4 border-black neo-shadow"
          >
            <Zap size={32} className="mb-4" fill="currentColor" />
            <h4 className="text-2xl font-black uppercase tracking-tighter">Ultra Fast</h4>
            <p className="text-xs font-bold opacity-80 mt-2 uppercase tracking-[0.1em] leading-relaxed">95+ Lighthouse Score focused development pipeline.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            className="p-6 bg-white dark:bg-black border-4 border-black neo-shadow"
          >
            <Shield size={32} className="mb-4 text-green-500" />
            <h4 className="text-2xl font-black uppercase tracking-tighter text-black dark:text-white">Bulletproof</h4>
            <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-[0.1em] leading-relaxed">End-to-end security audits and secure architecture.</p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: 'spring' }}
              onClick={() => onServiceClick(service)}
              className={`
                relative bg-white dark:bg-neutral-950 border-4 md:border-8 border-black dark:border-white p-6 md:p-8 lg:p-10 xl:p-14 
                neo-shadow group h-full flex flex-col transition-all duration-500 cursor-pointer
                ${colorVariants[accentColor as keyof typeof colorVariants]}
              `}
            >
              {/* Feature Badge */}
              <div className="absolute top-0 right-0 p-2 md:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-yellow-400 text-black text-[8px] md:text-[10px] font-black uppercase px-2 md:px-3 py-1 border-2 border-black rotate-6 md:rotate-12">
                  Premium Service
                </div>
              </div>

              {/* Icon Container */}
              <div className={`
                w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${accentColor} border-4 border-black dark:border-white flex items-center justify-center text-white mb-6 md:mb-8 lg:mb-10 
                group-hover:scale-110 group-hover:-rotate-12 transition-transform shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]
              `}>
                {IconComponent && <IconComponent size={32} className="md:w-12 md:h-12 lg:w-14 lg:h-14" />}
              </div>

              {/* Title & Description */}
              <div className="space-y-4 md:space-y-6 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter leading-none">{service.title}</h3>
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 w-5 h-5 md:w-6 md:h-6" />
                </div>
                <p className="text-base md:text-xl lg:text-2xl font-bold opacity-70 italic leading-snug md:leading-tight">
                  "{service.description}"
                </p>

                {/* Quick Spec List */}
                <ul className="space-y-2 md:space-y-3 pt-4 md:pt-6">
                  {service.features.slice(0, 3).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm font-black uppercase tracking-wider">
                      <CheckCircle size={12} className="md:w-4 md:h-4 shrink-0" />
                      <span className="truncate">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer / CTA */}
              <div className="mt-8 md:mt-12 pt-6 md:pt-10 border-t-2 md:border-t-4 border-dashed border-current/20 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] opacity-50 mb-1">Response Time</span>
                  <span className="font-black italic text-sm md:text-base">Under 24h</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm font-black uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                  Inquire <ArrowRight size={16} className="md:w-5 md:h-5" />
                </div>
              </div>

              {/* Dynamic Background on Hover */}
              <div className="absolute -inset-2 md:-inset-4 bg-black/5 dark:bg-white/5 -z-10 group-hover:translate-x-2 md:group-hover:translate-x-4 group-hover:translate-y-2 md:group-hover:translate-y-4 transition-transform border-2 md:border-4 border-dashed border-black/10 dark:border-white/10" />
            </motion.div>
          );
        })}
      </div>

      {/* Value Protocol Section */}
      <section className="bg-black text-white border-y-[6px] md:border-y-[12px] border-yellow-400 py-20 md:py-40 overflow-hidden relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 -mr-20 md:-mr-40 -mt-20 md:-mt-40 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[10px] md:border-[20px] border-white/5 border-dashed rounded-full hidden lg:block"
        />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10 md:space-y-16"
          >
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase italic tracking-tighter leading-[0.8] relative z-10">
              The Value <br />
              <span className="text-white/10" style={{ WebkitTextStroke: '2px white' }}>Protocol.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i}
                  className="space-y-4 md:space-y-6 group"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-4xl md:text-6xl font-black ${step.color.replace('bg-', 'text-')} italic opacity-20 group-hover:opacity-100 transition-opacity`}>{step.num}</span>
                    <div className={`p-2 md:p-3 ${step.color} border-2 border-white/20 group-hover:scale-110 transition-transform`}>
                      {React.cloneElement(step.icon, { size: 20, className: "md:w-6 md:h-6" })}
                    </div>
                  </div>
                  <h4 className="text-xl md:text-3xl font-black uppercase border-b-2 md:border-b-4 border-white/10 pb-2 md:pb-4 group-hover:border-blue-600 transition-colors">{step.title}</h4>
                  <p className="text-base md:text-xl text-gray-400 font-bold leading-snug md:leading-tight italic">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="p-8 md:p-12 lg:p-16 bg-white text-black border-4 md:border-8 border-black shadow-[16px_16px_0px_0px_rgba(37,99,235,0.8)] md:shadow-[32px_32px_0px_0px_rgba(37,99,235,0.8)] relative"
          >
            <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-yellow-400 border-l-4 md:border-l-8 border-b-4 md:border-b-8 border-black flex items-center justify-center font-black text-2xl md:text-4xl shadow-[-2px_2px_0px_0px_black] md:shadow-[-4px_4px_0px_0px_black]">!</div>
            <div className="flex items-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-purple-600 border-4 md:border-8 border-black text-white flex items-center justify-center neo-shadow">
                <Cpu size={24} className="md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic leading-none">Ready to <br /> scale?</h3>
            </div>
            <p className="text-lg md:text-2xl lg:text-3xl font-bold leading-snug md:leading-tight mb-8 md:mb-16 italic">
              I specialize in taking MVP versions of products and turning them into market-ready assets. My focus is on <span className="underline decoration-blue-600 decoration-4 md:decoration-8 underline-offset-2 md:underline-offset-4">zero-downtime migrations</span>.
            </p>
            <Link to="/contact" className="w-full md:w-auto block">
              <NeoButton variant="primary" className="w-full py-4 md:py-6 lg:py-8 text-lg md:text-xl lg:text-2xl !bg-blue-600 hover:!bg-black transition-all hover:scale-105 active:scale-95 border-4 border-black">Start Collaboration</NeoButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Transparent Pricing Section */}
      <section className="max-w-5xl mx-auto px-4 pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -10 }}
          className="bg-green-400 border-4 md:border-8 border-black p-8 md:p-12 lg:p-20 text-center space-y-6 md:space-y-12 relative overflow-hidden shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute top-0 left-0 p-4 md:p-8 opacity-10 rotate-12"><Monitor size={60} className="md:w-30 md:h-30" /></div>
          <div className="absolute bottom-0 right-0 p-4 md:p-8 opacity-10 -rotate-12"><Code size={60} className="md:w-30 md:h-30" /></div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black uppercase italic tracking-tighter leading-none text-black">Transparent Pricing</h2>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-black max-w-3xl mx-auto italic opacity-80 leading-relaxed">
            No hidden fees. Value-based engineering that respects your project goals, budget, and ambitious timelines.
          </p>
          <Link to="/contact" className="inline-block pt-4 md:pt-6">
            <span className="text-lg md:text-xl lg:text-2xl font-black uppercase underline decoration-[4px] md:decoration-[6px] lg:decoration-[10px] decoration-black/10 hover:decoration-black cursor-pointer transition-all underline-offset-4 md:underline-offset-8">
              Request a Custom Quote →
            </span>
          </Link>
        </motion.div>

        {/* Back to Home Button */}
        <div className="flex justify-center pt-8 md:pt-12">
          <Link to="/">
            <NeoButton
              variant="outline"
              className="flex items-center gap-3 md:gap-4 font-black group px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl"
            >
              <ArrowRight size={20} className="md:w-6 md:h-6 rotate-180" />
              Back to Home
            </NeoButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;