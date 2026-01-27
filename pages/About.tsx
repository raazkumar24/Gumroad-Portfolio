
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import {
  Terminal,
  Database,
  Layout,
  Settings,
  Cpu,
  Code,
  Layers,
  Smartphone,
  Server,
  GitBranch,
  Coffee,
  Globe,
  Zap,
  Box,
  Monitor,
} from 'lucide-react';

const About: React.FC = () => {
  const skillColors = [
    { bg: 'bg-blue-600', hex: '#2563eb' },
    { bg: 'bg-purple-600', hex: '#8b5cf6' },
    { bg: 'bg-green-500', hex: '#22c55e' },
    { bg: 'bg-yellow-400', hex: '#facc15' }
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Frontend': <Monitor size={22} className="text-blue-500" />,
    'Backend': <Server size={22} className="text-purple-500" />,
    'Database': <Database size={22} className="text-green-500" />,
    'Tools': <Settings size={22} className="text-yellow-500" />
  };

  const barVariants = {
    hidden: { backgroundColor: "rgba(0,0,0,0)" },
    visible: (custom: { active: boolean, color: string }) => ({
      backgroundColor: custom.active ? custom.color : "rgba(0,0,0,0)",
      transition: { duration: 0.3 }
    })
  };

  return (
    <div className="pt-32 pb-24 space-y-40 overflow-x-hidden">
      {/* Intro Hero */}
      <section className="px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-12"
        >
          <div className="flex items-center gap-4">
            <div className="inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-black uppercase text-sm tracking-[0.5em] border-4 border-black">The Architect</div>
            <Box size={24} className="text-blue-600 animate-bounce" />
          </div>
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-black dark:text-white leading-[0.8]">
            Engineer <br />
            <span className="text-black/10 dark:text-white/10 ghost-text">By Heart.</span>
          </h1>
          <div className="h-6 w-80 bg-blue-600 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]" />
          <div className="space-y-10 text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
            <p className="relative">
              <Zap size={32} className="absolute -left-12 top-2 text-yellow-400 opacity-50 hidden md:block" />
              I'm Raj Shekhar, a full-stack developer who believes that <span className="bg-yellow-400 text-black px-4 py-1 italic border-2 border-black">code is poetry</span> when written with precision.
            </p>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium italic border-l-8 border-green-500 pl-8">
              Over the last 3 years, I've transformed from a curious student into a technical lead, focused on creating scalable MERN architectures that solve real-world problems.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
          className="lg:col-span-5 relative"
        >
          <div className="absolute -inset-8 bg-blue-600 -rotate-3 border-4 border-black -z-10" />
          <div className="bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-3 neo-shadow transition-transform hover:scale-[1.02] duration-500">
            <div className="bg-green-500 p-8 text-black font-black uppercase tracking-widest text-lg border-b-4 border-black flex justify-between items-center">
              <span className="flex items-center gap-3"><Globe size={24} /> Mumbai, IN</span>
              <span className="bg-black text-white px-3 py-1 text-xs">Available</span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000"
              alt="Work Setup"
              className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Meter Animation */}
      <section className="bg-neutral-100 dark:bg-neutral-950 border-y-8 border-black py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none text-black dark:text-white">
              Technical <br /> <span className="text-blue-600">Mastery.</span>
            </h2>
            <div className="flex flex-col items-end gap-4 text-right">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-600 border-4 border-black text-white flex items-center justify-center rotate-12"><Cpu size={24} /></div>
                <div className="w-12 h-12 bg-green-500 border-4 border-black text-white flex items-center justify-center -rotate-12"><Layers size={24} /></div>
                <div className="w-12 h-12 bg-purple-600 border-4 border-black text-white flex items-center justify-center rotate-6"><Code size={24} /></div>
              </div>
              <p className="max-w-xs text-lg font-bold text-gray-500 uppercase tracking-widest hidden md:block leading-tight">
                Crafting modern web architectures with surgical precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SKILLS.map((skill, idx) => {
              const colorTheme = skillColors[idx % skillColors.length];
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, type: 'spring' }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className="bg-white dark:bg-neutral-900 border-4 border-black dark:border-white p-10 neo-shadow relative group"
                >
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <span className="text-4xl font-black uppercase tracking-tighter text-black dark:text-white">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        {categoryIcons[skill.category] || <Terminal size={18} />}
                        <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{skill.category}</span>
                      </div>
                    </div>
                    <div className={`w-10 h-10 ${colorTheme.bg} border-4 border-black rotate-45 group-hover:rotate-0 transition-transform flex items-center justify-center text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                      <Code size={16} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="h-12 bg-gray-100 dark:bg-black border-4 border-black overflow-hidden flex p-1">
                      {Array(10).fill(null).map((_, i) => (
                        <motion.div
                          key={i}
                          variants={barVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          custom={{ active: (i + 1) * 10 <= skill.level, color: colorTheme.hex }}
                          className="h-full flex-grow border-r-2 border-black last:border-0"
                          style={{ transitionDelay: `${i * 80}ms` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest text-gray-500">
                      <span className="flex items-center gap-1"><Smartphone size={12} /> Mobile Ready</span>
                      <span className="bg-black text-white px-3 py-1 border-2 border-white/10">{skill.level}% Efficiency</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="max-w-7xl mx-auto px-4 space-y-24">
        <div className="flex items-center gap-10">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic border-l-[12px] border-purple-600 pl-10 text-black dark:text-white">
            Trajectory.
          </h2>


          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-20 h-20 bg-yellow-400 border-4 border-black hidden lg:flex items-center justify-center neo-shadow"
          >
            <Coffee size={40} className="text-black" />
          </motion.div>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-2 bg-black dark:bg-white hidden md:block -translate-x-1/2" />

          {[
            {
              year: "2024 – Present",
              role: "Website Management & Web Operations",
              company: "HPCL · Hindustan Petroleum",
              side: "left",
              color: "bg-red-600",
              icon: <Server size={28} />,
              desc:
                "Currently managing and maintaining internal web platforms, ensuring content accuracy, performance optimization, and smooth digital operations.",
            },
            {
              year: "2023 – 2026",
              role: "Bachelor of Computer Applications (BCA)",
              company: "Chandigarh University",
              side: "right",
              color: "bg-blue-600",
              icon: <Cpu size={28} />,
              desc:
                "Pursuing BCA with a focus on full-stack development, databases, and real-world web application architecture.",
            },
            {
              year: "2021 – 2023",
              role: "Senior Secondary (12th)",
              company: "CBSE Board · Commerce Stream",
              side: "left",
              color: "bg-purple-600",
              icon: <Layout size={28} />,
              desc:
                "Completed higher secondary education in the commerce stream, building strong analytical and business fundamentals.",
            },
            {
              year: "2020",
              role: "Secondary (10th)",
              company: "CBSE Board",
              side: "right",
              color: "bg-yellow-400",
              icon: <Layout size={28} />,
              desc:
                "Successfully completed secondary education with a solid foundation in core academic subjects.",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, x: edu.side === "left" ? -100 : 100 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", damping: 20, stiffness: 80 }}
              className={`flex flex-col md:flex-row items-center w-full ${edu.side === "right" ? "md:flex-row-reverse" : ""
                }`}
            >
              <div className="w-full md:w-1/2 p-4">
                <div className="p-10 border-4 border-black dark:border-white bg-white dark:bg-neutral-900 neo-shadow group hover:-translate-y-4 transition-all duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div
                      className={`inline-block px-6 py-2 ${edu.color} text-white font-black uppercase text-xs border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                    >
                      {edu.year}
                    </div>
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors">
                      {edu.icon}
                    </div>
                  </div>

                  <h3 className="text-4xl font-black uppercase tracking-tighter group-hover:text-blue-600 transition-colors text-black dark:text-white leading-tight">
                    {edu.role}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 mb-6">
                    <GitBranch size={16} className="text-blue-600" />
                    <p className="text-xl font-bold text-gray-500 uppercase tracking-widest">
                      {edu.company}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed text-lg italic">
                    "{edu.desc}"
                  </p>
                </div>
              </div>

              <motion.div
                whileInView={{ scale: [0, 1.2, 1] }}
                className="hidden md:flex w-16 h-16 bg-white dark:bg-black border-4 border-black dark:border-white rounded-none z-10 items-center justify-center shrink-0 neo-shadow"
              >
                <div className={`w-6 h-6 rotate-45 ${edu.color} border-2 border-black`} />
              </motion.div>

              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </section>


      {/* Philosophy Bento */}
      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-yellow-400 border-8 border-black p-8 md:p-16 flex flex-col justify-between items-start min-h-[auto] md:min-h-[400px] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-black text-white flex items-center justify-center border-4 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"><Terminal size={32} className="md:w-10 md:h-10" /></div>
              <Monitor size={36} className="text-black opacity-30 md:w-12 md:h-12" />
            </div>
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] text-black">Design-First <br className="hidden sm:block" /> Engineering.</h3>
            <p className="text-lg md:text-2xl font-bold max-w-xl text-black mt-8 md:mt-10 leading-tight">I believe that backend logic is only as good as the user's ability to interact with it seamlessly. Pixel perfection is not a luxury; it's a requirement.</p>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black text-white border-8 border-black p-8 md:p-16 flex flex-col justify-center items-center gap-6 md:gap-10 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.05)] md:dark:shadow-[20px_20px_0px_0px_rgba(255,255,255,0.05)]"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl md:text-8xl font-black text-blue-600 relative"
            >
              200+
              <Zap size={32} className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-yellow-400" fill="currentColor" />
            </motion.div>
            <div className="text-center font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm leading-relaxed">
              Repos pushed <br /> to production <br /> <span className="text-blue-500">this year</span>
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
};

export default About;
