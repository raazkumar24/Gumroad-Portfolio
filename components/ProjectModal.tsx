
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Zap, Award } from 'lucide-react';
import { Project } from '../types';
import NeoButton from './NeoButton';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-950 border-0 md:border-4 border-black dark:border-white shadow-[20px_20px_0px_0px_rgba(37,99,235,0.5)]"
        >
          {/* Close Button - Sticky on mobile */}
          <div className="sticky top-0 z-50 flex justify-end p-4 pointer-events-none">
            <button 
              onClick={onClose}
              className="pointer-events-auto p-3 bg-black text-white dark:bg-white dark:text-black border-2 border-white dark:border-black hover:bg-red-500 hover:text-white transition-all transform hover:rotate-90"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col">
            {/* Hero Header */}
            <div className="relative w-full h-[40vh] md:h-[50vh] bg-neutral-100 dark:bg-neutral-800 overflow-hidden border-b-4 border-black dark:border-white">
              <img 
                src={project.thumbnail} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <span className="inline-block px-4 py-1 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] border-2 border-black">
                    {project.category}
                  </span>
                  <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
                    {project.title}
                  </h2>
                </motion.div>
              </div>
            </div>

            <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Main Info */}
              <div className="lg:col-span-7 space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Zap size={24} className="text-yellow-400" fill="currentColor" />
                    <h3 className="text-2xl font-black uppercase tracking-widest border-b-4 border-yellow-400 pb-1">Executive Summary</h3>
                  </div>
                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-blue-50 dark:bg-blue-900/10 border-4 border-black dark:border-blue-500 relative group overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rotate-12 group-hover:rotate-0 transition-transform opacity-20" />
                    <h3 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                      <Cpu size={20} /> Tech Architecture
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-0.5 border-2 border-black dark:border-white text-[10px] font-black uppercase bg-white dark:bg-neutral-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 bg-purple-50 dark:bg-purple-900/10 border-4 border-black dark:border-purple-500 relative group overflow-hidden">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-600 -rotate-12 group-hover:rotate-0 transition-transform opacity-20" />
                    <h3 className="text-xl font-black mb-4 uppercase flex items-center gap-2">
                      <Award size={20} /> Impact
                    </h3>
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400 italic">
                      {project.learned}
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-black uppercase tracking-widest border-b-4 border-green-500 pb-1 inline-block">Core Functionalities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        key={i} 
                        className="flex items-start gap-4 p-4 border-2 border-black dark:border-white bg-white dark:bg-neutral-900"
                      >
                        <CheckCircle2 size={20} className="text-green-500 shrink-0 mt-1" />
                        <span className="font-bold text-gray-800 dark:text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="lg:col-span-5 space-y-10">
                <div className="bg-neutral-900 text-white p-8 border-4 border-black relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-12 h-12 bg-blue-600 translate-x-6 -translate-y-6 rotate-45" />
                   <h3 className="text-2xl font-black uppercase italic mb-4">Technical Challenge</h3>
                   <p className="font-medium text-gray-400 leading-relaxed italic">
                     "{project.challenges}"
                   </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <NeoButton variant="primary" className="w-full flex items-center justify-center gap-3 py-6 !bg-blue-600 text-xl">
                      <ExternalLink size={24} /> Launch Live Demo
                    </NeoButton>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <NeoButton variant="outline" className="w-full flex items-center justify-center gap-3 py-6 text-xl">
                      <Github size={24} /> Browse Source Code
                    </NeoButton>
                  </a>
                </div>

                {/* Decorative element */}
                <div className="p-8 border-4 border-dashed border-gray-300 dark:border-neutral-700 text-center">
                  <p className="text-xs font-black text-gray-400 uppercase tracking-[0.4em]">Project ID: {project.id}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
