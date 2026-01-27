
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';
import NeoButton from '../components/NeoButton';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Code, Shield, Cpu, Globe, Layout, Award } from 'lucide-react';
import { Project } from '../types';

interface HomeProps {
  onProjectClick: (p: Project) => void;
}

const Home: React.FC<HomeProps> = ({ onProjectClick }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, damping: 20, stiffness: 100 }
    }
  };

  return (
    <div className="pt-32 space-y-24 relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="px-4 relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] border-[20px] border-blue-600/5 dark:border-blue-400/5 border-dashed rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8 space-y-10 z-10"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-12 h-12 bg-yellow-400 border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <Star size={24} fill="currentColor" />
              </motion.div>
              <span className="font-black uppercase tracking-[0.4em] text-xs text-black dark:text-white">Available for Innovation</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-black dark:text-white">
              Crafting <br />
              <span className="text-black/10 dark:text-white/10 ghost-text">Digital</span> <br />
              <span className="bg-blue-600 text-white px-4 italic inline-block transform -rotate-2 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Frontiers.
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 max-w-3xl leading-tight">
              Hi, I'm <span className="text-blue-600">Raj Shekhar</span>. A Full-stack Engineer bridging the gap between <span className="bg-green-400 text-black px-2">complex logic</span> and seamless user experiences.
            </p>

            <div className="flex flex-wrap gap-8 pt-6">
              <Link to="/projects">
                <NeoButton variant="primary" className="py-5 px-12 text-xl !bg-black !text-white dark:!bg-white dark:!text-black hover:!bg-blue-600 hover:!text-white transition-all transform hover:-rotate-2">
                  View Projects
                </NeoButton>
              </Link>
              <Link to="/contact">
                <NeoButton variant="accent" className="py-5 px-12 text-xl hover:!bg-black hover:!text-yellow-400 transition-all transform hover:rotate-2">
                  Let's Talk
                </NeoButton>
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:col-span-4 hidden lg:block relative"
          >
            <div className="relative group max-w-sm mx-auto z-10">
              {/* Layered Decorative Backgrounds */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.05 }}
                className="absolute -inset-6 bg-blue-600 -rotate-6 border-8 border-black z-10 transition-all duration-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.1)] z-10"
              />
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                className="absolute -inset-6 bg-yellow-400 rotate-6 border-8 border-black z-0 transition-all duration-500 z-0"
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
                className="absolute -top-12 -left-12 z-30 w-28 h-28 bg-white border-4 border-black rounded-full flex flex-col items-center justify-center text-center p-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <Award size={28} className="text-blue-600 mb-1" />
                <span className="text-[10px] font-black uppercase leading-none tracking-tighter">Verified <br /> Expert</span>
              </motion.div>

              {/* Main Image Container */}
              <div className="bg-white dark:bg-neutral-900 border-8 border-black dark:border-white p-2 neo-shadow overflow-hidden relative z-20">
                <img
                  src="/profile2.jpg"
                  alt="Raj Shekhar"
                  className="w-full h-auto grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />

                {/* Image Footer Label */}
                <div className="p-5 bg-black text-white flex justify-between items-center border-t-8 border-black">
                  <div className="flex flex-col">
                    <span className="font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">Title</span>
                    <span className="font-black uppercase tracking-widest text-sm">Lead MERN Architect</span>
                  </div>
                  <div className="w-10 h-10 bg-yellow-400 border-2 border-white flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
                    <Zap size={20} fill="#000" stroke="none" className="animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Experience Badge Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-green-400 border-4 border-black px-4 py-2 rotate-6 group-hover:rotate-0 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-30">
                <span className="text-xs font-black uppercase text-black">3+ Years Exp.</span>
              </div>
            </div>
          </motion.div>

          {/* mobile image version */}
          <div className="lg:hidden px-4">
              <div className="bg-white dark:bg-neutral-900 border-8 border-black dark:border-white p-2 neo-shadow overflow-hidden relative z-20">
              <img
                src="/profile2.jpg"
                alt="Raj Shekhar"
                className="w-full h-auto grayscale contrast-125"
              />

              {/* Image Footer Label */}
              <div className="p-5 bg-black text-white flex justify-between items-center border-t-8 border-black">
                <div className="flex flex-col">
                  <span className="font-black uppercase tracking-[0.2em] text-[10px] text-blue-400">Title</span>
                  <span className="font-black uppercase tracking-widest text-sm">Lead MERN Architect</span>
                </div>
                <div className="w-10 h-10 bg-yellow-400 border-2 border-white flex items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform">
                  <Zap size={20} fill="#000" stroke="none" className="animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="bg-black text-white py-12 border-y-4 border-black overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-24 items-center"
        >
          {Array(10).fill(null).map((_, i) => (
            <div key={i} className="flex items-center gap-12 text-5xl font-black uppercase italic">
              <span className="text-blue-500">React.js</span>
              <div className="w-6 h-6 bg-yellow-400 rotate-45 shadow-[4px_4px_0px_0px_white]" />
              <span className="text-green-400">Node.js</span>
              <div className="w-6 h-6 bg-purple-500 rounded-full" />
              <span className="text-white">MongoDB</span>
              <div className="w-6 h-6 bg-red-500" />
              <span className="text-orange-400">TypeScript</span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Approach Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-16"
          >
            <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
              Engineering <br /> with a <br /> <span className="text-blue-600 italic">Vision.</span>
            </motion.h2>
            <div className="space-y-10">
              {[
                { icon: <Code size={32} className="text-blue-600" />, title: 'Scalable Systems', desc: 'Architecture designed for millions, using industry-standard SOLID principles.' },
                { icon: <Globe size={32} className="text-yellow-500" />, title: 'High Fidelity', desc: 'Pixel-perfect UI across all platforms with 99.9% uptime focus.' },
                { icon: <Shield size={32} className="text-green-500" />, title: 'Bulletproof Security', desc: 'Enterprise encryption and secure data handling as a core requirement.' },
              ].map((item, i) => (
                <motion.div variants={itemVariants} key={i} className="flex gap-8 group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10, y: -5 }}
                    className="w-20 h-20 shrink-0 border-4 border-black bg-white dark:bg-neutral-800 flex items-center justify-center neo-shadow transition-all group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="space-y-2">
                    <h4 className="text-3xl font-black uppercase tracking-tighter text-black dark:text-white">{item.title}</h4>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-bold leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-600 border-4 border-black -rotate-2 translate-x-6 translate-y-6" />
            <div className="relative bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-12 neo-shadow">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 bg-purple-600 border-4 border-black flex items-center justify-center text-white">
                  <Layout size={32} />
                </div>
                <h3 className="text-4xl font-black uppercase italic text-black dark:text-white">The Stack</h3>
              </div>
              <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-12 leading-relaxed italic">
                "I don't just build websites; I craft ecosystems. Performance and accessibility aren't features; they're foundation."
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-gray-50 dark:bg-black border-4 border-black flex flex-col items-center group hover:bg-yellow-400 transition-colors">
                  <span className="text-5xl font-black text-black dark:text-white group-hover:text-black">99.9%</span>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-black mt-2">Quality Focus</span>
                </div>
                <div className="p-8 bg-gray-50 dark:bg-black border-4 border-black flex flex-col items-center group hover:bg-green-400 transition-colors">
                  <span className="text-5xl font-black text-black dark:text-white group-hover:text-black">100ms</span>
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-black mt-2">Core Latency</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-100 dark:bg-neutral-900 border-y-8 border-black py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic text-black dark:text-white"
            >
              The <span className="text-black/10 dark:text-white/10 ghost-text">Archive</span>
            </motion.h2>
            <Link to="/projects">
              <NeoButton variant="outline" className="flex items-center gap-4 font-black group px-12 py-5 text-xl">
                Explore All <motion.div animate={{ x: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowRight size={24} /></motion.div>
              </NeoButton>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.slice(0, 3).map((project, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, type: 'spring' }}
                key={project.id}
              >
                <ProjectCard project={project} onClick={onProjectClick} index={idx} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-blue-600 border-8 border-black p-12 md:p-28 text-center space-y-12 relative overflow-hidden group shadow-[24px_24px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
          <motion.div
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute -top-32 -right-32 w-80 h-80 border-4 border-white/20 border-dashed rounded-full"
          />
          <h2 className="text-6xl md:text-[10rem] font-black uppercase text-white tracking-tighter italic relative z-10 leading-[0.75]">
            Ready to <br /> Go <span className="text-yellow-400">Epic?</span>
          </h2>
          <Link to="/contact" className="inline-block relative z-10 pt-10">
            <NeoButton variant="primary" className="!bg-black !text-white text-3xl py-8 px-20 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none transition-all hover:scale-105 active:scale-95">
              Hire Raj Shekhar
            </NeoButton>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
