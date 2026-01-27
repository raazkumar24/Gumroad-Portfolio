
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:py-6 ${scrolled ? 'md:px-12' : 'md:px-8'}`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-3 md:p-4 transition-all ${scrolled ? 'neo-shadow' : ''}`}>
        
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 border-4 border-black dark:border-white flex items-center justify-center text-white font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
            R
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-black dark:text-white uppercase italic">
            RAJ.DEV<span className="text-blue-600 group-hover:animate-pulse">_</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.path} 
                to={link.path}
                className={`
                  relative px-5 py-2 font-black text-xs uppercase tracking-widest transition-all
                  border-2 border-transparent hover:border-black dark:hover:border-white
                  ${isActive 
                    ? 'bg-blue-600 text-white border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                    : 'text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
          
          <div className="h-8 w-1 bg-black/10 dark:bg-white/10 mx-4" />
          
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-3 py-1 border-2 border-black dark:border-white">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase text-green-700 dark:text-green-400">Available</span>
            </div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 border-4 border-black dark:border-white bg-yellow-400 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed inset-0 top-[90px] md:top-[110px] bg-white dark:bg-neutral-950 z-40 p-4 lg:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block w-full p-6 text-3xl font-black uppercase italic border-4 border-black dark:border-white
                      ${location.pathname === link.path 
                        ? 'bg-blue-600 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
                        : 'bg-white dark:bg-neutral-900 text-black dark:text-white'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <div className="mt-8 p-8 border-4 border-dashed border-neutral-300 dark:border-neutral-700 text-center">
                 <p className="font-black uppercase tracking-widest text-sm mb-4">Let's build something epic</p>
                 <Link to="/contact" onClick={() => setIsOpen(false)}>
                   <button className="w-full py-4 bg-yellow-400 text-black font-black uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                     Get Started
                   </button>
                 </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
