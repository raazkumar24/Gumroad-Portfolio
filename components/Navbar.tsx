import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [navHeight, setNavHeight] = useState(0)

  const location = useLocation()
  const navRef = useRef<HTMLDivElement>(null)

  /* Scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Measure navbar height */
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight)
    }
  }, [scrolled])

  /* Close menu on route change */
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4 md:py-6 ${
        scrolled ? 'md:px-12' : 'md:px-8'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-3 md:p-4 transition-all ${
          scrolled ? 'neo-shadow' : ''
        }`}
      >
        {/* Brand */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 border-4 border-black dark:border-white flex items-center justify-center text-white font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
            R
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter text-black dark:text-white uppercase italic">
            RAJ.DEV<span className="text-blue-600">_</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 font-black text-xs uppercase tracking-widest transition-all
                  border-2
                  ${
                    active
                      ? 'bg-blue-600 text-white border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      : 'border-transparent text-black dark:text-white hover:border-black dark:hover:border-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }`}
              >
                {link.name}
              </Link>
            )
          })}

          <div className="h-8 w-1 bg-black/10 dark:bg-white/10 mx-4" />
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{ top: navHeight }}
            className="fixed left-0 right-0 bottom-0 bg-white dark:bg-neutral-950 z-40 p-4 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block p-6 text-3xl font-black uppercase italic border-4 border-black dark:border-white ${
                      location.pathname === link.path
                        ? 'bg-blue-600 text-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                        : 'bg-white dark:bg-neutral-900 text-black dark:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
