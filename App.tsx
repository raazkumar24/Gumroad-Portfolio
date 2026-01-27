
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ProjectModal from './components/ProjectModal';
import ServiceModal from './components/ServiceModal';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import { Project, Service } from './types';

// Animated wrapper for routes
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col transition-colors duration-700 ease-in-out bg-white dark:bg-neutral-950 text-black dark:text-neutral-100 selection:bg-blue-600 selection:text-white">
        <ScrollProgress />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home onProjectClick={setSelectedProject} /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><Projects onProjectClick={setSelectedProject} /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services onServiceClick={setSelectedService} /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <ScrollToTop />

        {/* Global Modals */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      </div>
    </Router>
  );
};

export default App;
