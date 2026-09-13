import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLayerGroup,
  FaTerminal,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiVercel,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

const skillCategories = [
  {
    category: "Frontend Architecture",
    description: "Building responsive, state-driven, interactive client applications.",
    skills: [
      { name: "React JS", level: 90, status: "Advanced", icon: <FaReact />, color: "text-blue-400" },
      { name: "JavaScript (ES6+)", level: 88, status: "Advanced", icon: <FaJs />, color: "text-yellow-400" },
      { name: "Tailwind CSS", level: 92, status: "Expert", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Redux Toolkit", level: 82, status: "Proficient", icon: <SiRedux />, color: "text-purple-400" },
      { name: "HTML5 & CSS3", level: 95, status: "Expert", icon: <FaHtml5 />, color: "text-orange-500" },
    ],
  },
  {
    category: "Backend & Database Engineering",
    description: "Architecting REST APIs, scalable servers, and database schemas.",
    skills: [
      { name: "Node.js", level: 85, status: "Advanced", icon: <FaNodeJs />, color: "text-emerald-500" },
      { name: "Express.js", level: 86, status: "Advanced", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB & Mongoose", level: 82, status: "Proficient", icon: <SiMongodb />, color: "text-green-500" },
      { name: "RESTful APIs & Postman", level: 90, status: "Advanced", icon: <SiPostman />, color: "text-orange-400" },
      { name: "C++ Programming", level: 80, status: "Proficient", icon: <SiCplusplus />, color: "text-blue-500" },
    ],
  },
  {
    category: "Tooling & Cloud Deployment",
    description: "Version control, CI/CD workflows, and production hosting platforms.",
    skills: [
      { name: "Git & GitHub", level: 88, status: "Advanced", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Vercel Deployment", level: 90, status: "Advanced", icon: <SiVercel />, color: "text-white" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FaLayerGroup className="text-xs" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Technical <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Proficiency</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-16 h-1 bg-gradient-to-r from-purple to-pink-500 mx-auto rounded-full mb-4 origin-left"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
          >
            A detailed breakdown of my full-stack engineering toolset, framework mastery, and production deployment standards.
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className={`bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-7 relative overflow-hidden group hover:border-purple/40 transition-all duration-300 ${
                catIdx === 2 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Subtle Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="p-2 rounded-lg bg-purple/10 text-purple-400 border border-purple/20">
                    <FaTerminal className="text-xs sm:text-sm" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm pl-9">
                  {cat.description}
                </p>
              </div>

              {/* Skills Progress Bars */}
              <div className={`space-y-4 ${catIdx === 2 ? "grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 space-y-0" : ""}`}>
                {cat.skills.map((skill, index) => (
                  <div key={index} className="space-y-1.5">
                    {/* Title, Icon & Status */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className={`text-lg sm:text-xl ${skill.color}`}>
                          {skill.icon}
                        </span>
                        <span className="text-white font-medium text-xs sm:text-sm">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                          {skill.status}
                        </span>
                        <span className="text-xs font-semibold text-purple-400 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-1.5 bg-dark-100 rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-purple via-purple-400 to-indigo-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;