import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCertificate, FaGraduationCap, FaAward, FaCalendarAlt, FaBuilding } from "react-icons/fa";

const certs = [
  {
    icon: FaTrophy,
    title: "1st Place Winner – AI Project Expo",
    issuer: "University Project Exhibition",
    date: "2026",
    desc: "Awarded 1st place certificate for engineering an intelligent AI Chatbot solution with custom backend dynamic response logic.",
    type: "Award",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    iconBg: "bg-amber-500/15 text-amber-400 border-amber-500/25",
    glowColor: "hover:border-amber-500/40",
    accentGradient: "from-amber-500 via-orange-500 to-amber-300",
  },
  {
    icon: FaGraduationCap,
    title: "Dev Weekend Fellowship",
    issuer: "Dev Weekend",
    date: "2026",
    desc: "Successfully completed the competitive developer fellowship program, building modern full-stack web applications and collaborating on technical projects.",
    type: "Fellowship",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    iconBg: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
    glowColor: "hover:border-emerald-500/40",
    accentGradient: "from-emerald-500 via-teal-400 to-emerald-300",
  },
  {
    icon: FaCertificate,
    title: "Web Development Internship Certificate",
    issuer: "CodeAlpha",
    date: "2026",
    desc: "Successfully completed hands-on frontend web development training, building scalable React components and interactive UI layouts.",
    type: "Internship",
    badgeBg: "bg-purple/10 text-purple-300 border-purple/30",
    iconBg: "bg-purple/15 text-purple-300 border-purple/25",
    glowColor: "hover:border-purple/40",
    accentGradient: "from-purple via-indigo-500 to-pink-500",
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

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <FaAward className="text-xs" />
            <span>Honors & Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            Certifications & <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Awards</span>
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
            Verified technical achievements, hackathon recognitions, and professional software engineering fellowships.
          </motion.p>
        </div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${item.glowColor}`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.accentGradient} opacity-30 group-hover:opacity-100 transition-opacity duration-300`} />

                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${item.iconBg} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                      <Icon className="text-lg sm:text-xl" />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                      <FaCalendarAlt className="text-purple-400 text-[10px]" />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md border mb-2.5 ${item.badgeBg}`}>
                    {item.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-purple-300 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-purple-300/90 mb-3">
                    <FaBuilding className="text-[10px] text-purple-400/70" />
                    <span>{item.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Verified Credential
                  </span>
                  <span className="text-xs text-gray-400 font-mono">Ali Hamza</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;