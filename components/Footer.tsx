
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }));
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t-8 border-black dark:border-white">
      {/* Top Banner */}
      <div className="border-b-4 border-black dark:border-white bg-blue-600 py-4 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex whitespace-nowrap gap-12 text-white font-black uppercase tracking-[0.5em] text-xs md:text-sm"
        >
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Ready for new projects</span>
              <Zap size={14} fill="currentColor" />
              <span>Available for Hire</span>
              <Zap size={14} fill="currentColor" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Brand Section */}
          <div className="lg:col-span-6 p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white flex flex-col justify-between space-y-12">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85] text-black dark:text-white">
                RAJ <br /> 
                <span 
                  className="text-black/5 dark:text-white/5" 
                  // Fixed: Object literal may only specify known properties, removed 'textStroke'
                  style={{ WebkitTextStroke: '2px currentColor' }}
                >
                  SHEKHAR
                </span>
              </h2>
              <p className="mt-8 text-xl font-bold text-gray-500 max-w-md leading-tight italic">
                A Full-stack Architect crafting high-performance digital systems with precision and purpose.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, x: -5 }}
                  className="w-14 h-14 bg-white dark:bg-neutral-900 border-4 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-3 p-8 md:p-16 border-b-4 lg:border-b-0 lg:border-r-4 border-black dark:border-white">
            <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-8">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="group flex items-center justify-between text-2xl font-black uppercase italic hover:text-blue-600 transition-colors"
                  >
                    {item}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Status Section */}
          <div className="lg:col-span-3 p-8 md:p-16 flex flex-col justify-between space-y-12">
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Location</h4>
                <div className="flex items-center gap-3 text-xl font-black italic">
                  <MapPin size={20} className="text-blue-600" />
                  CHANDIGARH, IN
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Local Time</h4>
                <div className="flex items-center gap-3 text-xl font-black italic">
                  <Clock size={20} className="text-yellow-500" />
                  {time} IST
                </div>
              </div>
            </div>

            <Link to="/contact" className="block group">
              <div className="bg-black text-white dark:bg-white dark:text-black p-6 border-4 border-black dark:border-white text-center shadow-[8px_8px_0px_0px_rgba(37,99,235,0.6)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <span className="text-lg font-black uppercase tracking-widest">Start a Project</span>
              </div>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="p-8 border-t-4 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400">
            &copy; {new Date().getFullYear()} RAJ SHEKHAR ARCHIVE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-black uppercase text-[10px] tracking-[0.3em] text-gray-400">SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
