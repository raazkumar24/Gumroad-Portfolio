
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowUpRight, Code, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  isFeatured?: boolean;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, isFeatured = false, index = 0 }) => {
  const themes = [
    { main: 'bg-blue-600', text: 'text-blue-600', shadow: 'shadow-blue-600', accent: 'bg-blue-100' },
    { main: 'bg-purple-600', text: 'text-purple-600', shadow: 'shadow-purple-600', accent: 'bg-purple-100' },
    { main: 'bg-green-500', text: 'text-green-500', shadow: 'shadow-green-500', accent: 'bg-green-100' },
    { main: 'bg-yellow-400', text: 'text-yellow-400', shadow: 'shadow-yellow-400', accent: 'bg-yellow-100' },
  ];

  const theme = themes[index % themes.length];

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.01 }}
      className={`
        relative group h-full flex flex-col bg-white dark:bg-neutral-900 border-4 border-black dark:border-white overflow-hidden
        shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)]
        hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer
        ${isFeatured ? 'md:flex-row' : ''}
      `}
      onClick={() => onClick(project)}
    >
      {/* Visual Header / Thumbnail Area */}
      <div className={`
        relative overflow-hidden border-b-4 border-black dark:border-white bg-neutral-100 dark:bg-neutral-800
        ${isFeatured ? 'md:w-1/2 md:border-b-0 md:border-r-4' : 'h-64'}
      `}>
        <motion.img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
        
        {/* Overlays */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
           <span className={`${theme.main} text-white font-black text-[10px] uppercase tracking-widest px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
             {project.category}
           </span>
           {isFeatured && (
             <span className="bg-black text-yellow-400 font-black text-[10px] uppercase tracking-widest px-3 py-1 border-2 border-white">
               CASE STUDY
             </span>
           )}
        </div>

        {/* Tech Icon Overlay */}
        <div className="absolute bottom-4 right-4 z-10 w-12 h-12 bg-white dark:bg-black border-2 border-black flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
           <Code size={20} className={theme.text} />
        </div>
      </div>

      {/* Content Area */}
      <div className={`flex flex-col flex-grow p-8 space-y-6 ${isFeatured ? 'md:w-1/2' : ''}`}>
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className={`font-black uppercase tracking-tighter leading-none transition-colors duration-300 group-hover:text-blue-600 ${isFeatured ? 'text-4xl md:text-6xl' : 'text-3xl'}`}>
              {project.title}
            </h3>
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <div className={`h-2 w-20 ${theme.main} border-2 border-black`} />
        </div>

        <p className={`text-gray-600 dark:text-gray-400 font-bold leading-tight ${isFeatured ? 'text-xl' : 'text-base line-clamp-3'}`}>
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, isFeatured ? 8 : 4).map((tech) => (
            <span key={tech} className="bg-neutral-50 dark:bg-neutral-800 text-black dark:text-white px-3 py-1 border-2 border-black dark:border-white text-[10px] font-black uppercase tracking-wider">
              {tech}
            </span>
          ))}
          {!isFeatured && project.techStack.length > 4 && (
             <span className="font-black text-xs self-center">+{project.techStack.length - 4}</span>
          )}
        </div>

        <div className="mt-auto pt-6 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 group/link"
          >
            <span className="text-sm font-black uppercase tracking-[0.2em] underline decoration-4 decoration-black/20 group-hover/link:decoration-blue-600">
              EXPLORE PROJECT
            </span>
          </motion.div>
          <div className={`flex items-center justify-center w-10 h-10 border-4 border-black dark:border-white ${theme.main} text-white font-black italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
            {index + 1}
          </div>
        </div>
      </div>

      {/* Feature Label for large cards */}
      {isFeatured && (
        <div className="absolute top-0 right-0 h-full w-2 bg-yellow-400 border-l-2 border-black hidden md:block" />
      )}
    </motion.div>
  );
};

export default ProjectCard;
