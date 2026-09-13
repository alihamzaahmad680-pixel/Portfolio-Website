import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaCode, FaServer } from "react-icons/fa";
import profileImg from "../assets/profile.jpeg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 lg:py-32 bg-dark-200 overflow-hidden"
    >
      {/* Background Accent Lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-12">
          
          {/* Left Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-7/12 text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple/10 border border-purple/20 mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-purple-300 tracking-wide">
                Available for New Projects & Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 tracking-tight"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Ali Hamza
              </span>
            </motion.h1>

            {/* Sub-Headline & Role */}
            <motion.div
              variants={itemVariants}
              className="text-lg sm:text-2xl font-semibold text-gray-300 mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span>Full-Stack</span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-purple-300 font-mono text-base sm:text-xl">
                MERN Developer
              </span>
            </motion.div>

            {/* Body Text */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 font-normal"
            >
              Engineering scalable backend architecture with Node.js & MongoDB, paired with high-performance, animation-rich React frontends. Focused on clean code and exceptional UI performance.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3.5 bg-purple hover:bg-purple/90 text-white font-medium rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple/20 group"
              >
                <span>View My Work</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/cv.pdf"
                download="Ali_Hamza_CV.pdf"
                className="w-full sm:w-auto px-6 py-3.5 border border-white/15 hover:border-purple/40 hover:bg-white/[0.03] text-gray-200 hover:text-white font-medium rounded-xl text-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FaDownload className="text-xs text-purple-400" />
                <span>Download CV</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-5/12 flex justify-center relative mt-6 lg:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Outer Subtle Radial Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple via-indigo-500 to-pink-500 rounded-full blur-md opacity-40"></div>

              {/* Floating Profile Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full h-full rounded-full border border-white/10 overflow-hidden shadow-2xl bg-dark-300"
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={profileImg}
                  alt="Ali Hamza"
                />
              </motion.div>

              {/* Badge 1: Frontend */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 -left-2 sm:-left-6 bg-dark-100/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg text-white text-xs font-medium"
              >
                <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                  <FaCode className="text-xs" />
                </div>
                <span>React Specialist</span>
              </motion.div>

              {/* Badge 2: Backend */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 -right-2 sm:-right-6 bg-dark-100/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg text-white text-xs font-medium"
              >
                <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
                  <FaServer className="text-xs" />
                </div>
                <span>Node & Express API</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;