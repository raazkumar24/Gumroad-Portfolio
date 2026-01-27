
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import { Folder, GitBranch, Terminal } from 'lucide-react';

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
    <div className="pt-24 pb-32 overflow-x-hidden">
      {/* Header */}
      <section className="px-4 py-24 bg-white dark:bg-neutral-950 text-black dark:text-white border-b-8 border-black dark:border-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="inline-block px-6 py-2 bg-green-400 text-black font-black uppercase text-sm tracking-[0.5em] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              The Archive
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] italic text-black dark:text-white">
              Selected <br /> 
              <span 
                className="text-black/10 dark:text-white/10" 
                // Fixed: Object literal may only specify known properties, removed 'textStroke'
                style={{ WebkitTextStroke: '2px currentColor' }}
              >
                Works.
              </span>
            </h1>
            
            <div className="h-6 w-64 bg-blue-600 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" />
            
            <p className="text-3xl md:text-4xl text-gray-700 dark:text-gray-300 max-w-3xl font-bold leading-tight">
              A curated collection of digital experiences focusing on <span className="bg-purple-600 text-white px-3 py-1 italic">performance</span>, scalability, and high-fidelity user interaction.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative group">
               <div className="absolute -inset-6 bg-yellow-400 -rotate-3 border-4 border-black -z-10 group-hover:rotate-0 transition-transform duration-700" />
               <div className="absolute -inset-6 bg-blue-600 rotate-6 border-4 border-black -z-20 group-hover:rotate-0 transition-transform duration-700" />
               
               <div className="bg-white dark:bg-neutral-900 border-8 border-black dark:border-white p-12 neo-shadow relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-5"><Terminal size={120} /></div>
                 <div className="flex items-center gap-6 mb-12">
                   <div className="w-16 h-16 bg-purple-600 border-4 border-black flex items-center justify-center text-white shadow-[6px_6px_0px_0px_black]">
                     <Folder size={32} />
                   </div>
                   <h3 className="text-4xl font-black uppercase italic text-black dark:text-white">Repo Stats</h3>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-3">
                      <span className="font-black uppercase text-sm tracking-[0.2em] text-gray-400">Total Systems</span>
                      <span className="text-6xl font-black text-blue-600 tracking-tighter">{PROJECTS.length}</span>
                    </div>
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-3">
                      <span className="font-black uppercase text-sm tracking-[0.2em] text-gray-400">Core Stacks</span>
                      <span className="text-6xl font-black text-green-500 tracking-tighter">12+</span>
                    </div>
                    <div className="flex justify-between items-end border-b-4 border-dashed border-gray-300 dark:border-neutral-700 pb-3">
                      <span className="font-black uppercase text-sm tracking-[0.2em] text-gray-400">Production Years</span>
                      <span className="text-6xl font-black text-purple-600 tracking-tighter">3+</span>
                    </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-24 space-y-24">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b-8 border-black dark:border-white pb-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-blue-600 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-center text-white">
              <GitBranch size={32} />
            </div>
            <span className="font-black uppercase tracking-[0.3em] text-2xl text-black dark:text-white">Filter Repository</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-8 py-3 font-black uppercase tracking-widest text-xs transition-all border-4 border-black dark:border-white
                  ${filter === cat 
                    ? 'bg-blue-600 text-white -translate-y-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-white text-black dark:bg-neutral-800 dark:text-white hover:bg-yellow-400 hover:text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12">
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
                  className={gridClass}
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
          <div className="py-48 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block p-20 border-8 border-black dark:border-white border-dashed bg-neutral-50 dark:bg-neutral-900 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
               <h2 className="text-6xl font-black uppercase italic text-neutral-300 dark:text-neutral-700 tracking-tighter">No items found</h2>
               <button 
                onClick={() => setFilter('All')} 
                className="mt-12 px-12 py-5 bg-black text-white dark:bg-white dark:text-black font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all border-4 border-black dark:border-white neo-shadow hover:scale-105 active:scale-95"
               >
                 Reset Repository
               </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
