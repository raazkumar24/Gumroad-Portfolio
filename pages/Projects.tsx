import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import { Folder, GitBranch, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoButton from '../components/NeoButton';

interface ProjectsProps {
  onProjectClick: (p: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Full-Stack', 'Web3', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-16 space-y-40 overflow-x-hidden px-4">
      {/* Header */}
      <section className="max-w-7xl mx-auto bg-white dark:bg-neutral-950 text-black dark:text-white border-b-8 border-black dark:border-white overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center relative z-10 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 md:space-y-10"
          >
            <div className="inline-block px-4 md:px-6 py-2 bg-green-400 text-black font-black uppercase text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              The Archive
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] md:leading-[0.75] italic text-black dark:text-white">
              Selected <br /> 
              <span 
                className="text-black/10 dark:text-white/10 ghost-text"
              >
                Works.
              </span>
            </h1>
            
            <div className="h-4 md:h-6 w-48 md:w-64 bg-blue-600 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
            
            <p className="text-xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 max-w-3xl font-bold leading-snug md:leading-tight">
              A curated collection of digital experiences focusing on <span className="bg-purple-600 text-white px-2 md:px-3 py-1 italic">performance</span>, scalability, and high-fidelity user interaction.
            </p>

            {/* Back to Home Button - Mobile only */}
            <div className="lg:hidden pt-6">
              <Link to="/">
                <NeoButton
                  variant="outline"
                  className="flex items-center gap-3 font-black group px-6 py-3 text-base"
                >
                  <ArrowRight size={20} className="rotate-180" />
                  Back to Home
                </NeoButton>
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="max-w-sm mx-auto relative group">
               <div className="absolute -inset-6 bg-yellow-400 -rotate-3 border-4 border-black -z-10 group-hover:rotate-0 transition-transform duration-700" />
               <div className="absolute -inset-6 bg-blue-600 rotate-6 border-4 border-black -z-20 group-hover:rotate-0 transition-transform duration-700" />
               
               <div className="bg-white dark:bg-neutral-900 border-8 border-black dark:border-white p-8 md:p-12 neo-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 md:p-4 opacity-5"><Terminal size={60} className="md:w-32 md:h-32" /></div>
                 <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-600 border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_0px_black] md:shadow-[6px_6px_0px_0px_black]">
                     <Folder size={20} className="md:w-8 md:h-8" />
                   </div>
                   <h3 className="text-2xl md:text-3xl font-black uppercase italic text-black dark:text-white">Repo Stats</h3>
                 </div>
                 
                 <div className="space-y-4 md:space-y-8">
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-2 md:pb-3">
                      <span className="font-black uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] text-gray-400">Total Systems</span>
                      <span className="text-4xl md:text-6xl font-black text-blue-600 tracking-tighter">{PROJECTS.length}</span>
                    </div>
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-2 md:pb-3">
                      <span className="font-black uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] text-gray-400">Core Stacks</span>
                      <span className="text-4xl md:text-6xl font-black text-green-500 tracking-tighter">12+</span>
                    </div>
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-2 md:pb-3">
                      <span className="font-black uppercase text-xs md:text-sm tracking-[0.1em] md:tracking-[0.2em] text-gray-400">Production Years</span>
                      <span className="text-4xl md:text-6xl font-black text-purple-600 tracking-tighter">3+</span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Mobile Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:hidden relative group mt-8"
          >
            <div className="relative">
               <div className="absolute -inset-4 bg-yellow-400 -rotate-2 border-4 border-black -z-10" />
               <div className="absolute -inset-4 bg-blue-600 rotate-3 border-4 border-black -z-20" />
               
               <div className="bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-6 neo-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2 opacity-5"><Terminal size={60} /></div>
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 bg-purple-600 border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_0px_black]">
                     <Folder size={20} />
                   </div>
                   <h3 className="text-2xl font-black uppercase italic text-black dark:text-white">Repo Stats</h3>
                 </div>
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 dark:border-neutral-700 pb-2">
                      <span className="font-black uppercase text-xs tracking-[0.1em] text-gray-400">Total Systems</span>
                      <span className="text-3xl font-black text-blue-600 tracking-tighter">{PROJECTS.length}</span>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 dark:border-neutral-700 pb-2">
                      <span className="font-black uppercase text-xs tracking-[0.1em] text-gray-400">Core Stacks</span>
                      <span className="text-3xl font-black text-green-500 tracking-tighter">12+</span>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-dashed border-gray-300 dark:border-neutral-700 pb-2">
                      <span className="font-black uppercase text-xs tracking-[0.1em] text-gray-400">Production Years</span>
                      <span className="text-3xl font-black text-purple-600 tracking-tighter">3+</span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b-4 md:border-b-8 border-black dark:border-white pb-8 md:pb-12">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-white">
              <GitBranch size={20} className="md:w-8 md:h-8" />
            </div>
            <span className="font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-lg md:text-2xl text-black dark:text-white">Filter Repository</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-4 md:px-8 py-2 md:py-3 font-black uppercase tracking-wider md:tracking-widest text-xs transition-all border-2 md:border-4 border-black dark:border-white flex-1 md:flex-none text-center
                  ${filter === cat 
                    ? 'bg-blue-600 text-white -translate-y-1 md:-translate-y-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white text-black dark:bg-neutral-800 dark:text-white hover:bg-yellow-400 hover:text-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              let gridClass = 'md:col-span-3'; 
              const cycleIndex = index % 5;
              
              if (cycleIndex === 0) gridClass = 'md:col-span-4';
              else if (cycleIndex === 1) gridClass = 'md:col-span-2';
              else if (cycleIndex === 4) gridClass = 'md:col-span-6';
              else gridClass = 'md:col-span-3';

              const isLarge = gridClass === 'md:col-span-4' || gridClass === 'md:col-span-6';

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.5, delay: index * 0.08, type: 'spring' }}
                  key={project.id}
                  className={`col-span-full ${gridClass}`}
                >
                  <ProjectCard 
                    project={project} 
                    onClick={onProjectClick}
                    isFeatured={isLarge}
                    index={index}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-24 md:py-48 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block p-8 md:p-20 border-4 md:border-8 border-black dark:border-white border-dashed bg-neutral-50 dark:bg-neutral-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
               <h2 className="text-3xl md:text-6xl font-black uppercase italic text-neutral-300 dark:text-neutral-700 tracking-tighter">No items found</h2>
               <button 
                onClick={() => setFilter('All')} 
                className="mt-8 md:mt-12 px-6 md:px-12 py-3 md:py-5 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-wider md:tracking-widest hover:bg-blue-600 hover:text-white transition-all border-2 md:border-4 border-black dark:border-white neo-shadow hover:scale-105 active:scale-95 text-sm md:text-base"
               >
                 Reset Repository
               </button>
            </motion.div>
          </div>
        )}

        {/* Back to Home Button - Desktop */}
        <div className="hidden lg:flex justify-center pt-12">
          <Link to="/">
            <NeoButton
              variant="outline"
              className="flex items-center gap-4 font-black group px-12 py-5 text-xl"
            >
              <ArrowRight size={24} className="rotate-180" />
              Back to Home
            </NeoButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;