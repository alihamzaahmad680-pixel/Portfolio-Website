import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaTrophy, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Freelance MERN Stack Developer",
    company: "Fiverr",
    period: "2026 – Present",
    type: "Freelance",
    icon: FaBriefcase,
    iconBg: "bg-purple/20 text-purple border-purple/30",
    description:
      "Engineered production-grade web applications and full-stack client solutions globally utilizing MongoDB, Express.js, React.js, and Node.js with scalable REST APIs.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  },
  {
    role: "Web Development Intern",
    company: "CodeAlpha",
    period: "3 Months",
    type: "Internship",
    icon: FaBriefcase,
    iconBg: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    description:
      "Built interactive frontend UI components, optimized client-side performance, and collaborated on clean React architecture and cross-browser responsiveness.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
  },
  {
    role: "1st Place Winner – AI Project Expo",
    company: "University Project Exhibition",
    period: "Award",
    type: "Achievement",
    icon: FaTrophy,
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    description:
      "Awarded 1st place certificate for engineering an intelligent AI Chatbot platform, implementing dynamic backend logic and custom REST API integrations.",
    skills: ["AI Chatbot", "Node.js", "RESTful APIs", "UI/UX Design"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FaBriefcase className="text-xs" />
            <span>Career Milestones</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Work <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="w-16 h-1 bg-gradient-to-r from-purple to-pink-500 mx-auto rounded-full mb-4 origin-left"
          />
        </div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8 sm:space-y-10 ml-2 sm:ml-4"
        >
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* Timeline Marker Icon */}
                <div className={`absolute -left-[37px] sm:-left-[45px] top-1.5 p-2 rounded-xl border backdrop-blur-md ${exp.iconBg} group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <Icon className="text-xs sm:text-sm" />
                </div>

                {/* Experience Card */}
                <div className="bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-7 hover:border-purple/40 hover:bg-dark-300/70 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple via-indigo-500 to-pink-500 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-300 bg-purple/10 px-2.5 py-0.5 rounded-md border border-purple/20">
                      {exp.type}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <FaCalendarAlt className="text-purple-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-200 mb-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm font-medium mb-3">
                    <FaBuilding className="text-xs text-purple-400/80" />
                    <span>{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                    {exp.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-medium bg-white/5 text-gray-300 px-2.5 py-0.5 rounded-md border border-white/10 hover:border-purple/40 hover:text-purple-300 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;