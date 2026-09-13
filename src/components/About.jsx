import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";
import profileImg from "../assets/profile.jpeg";
import { FaCode, FaRocket } from "react-icons/fa";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-72 h-72 bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <FaCode className="text-xs" />
            <span>Passionate Developer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
          >
            About <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Me</span>
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
            Get to know more about my software engineering journey, technical mindset, and passion for building high-impact web applications.
          </motion.p>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left: Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-purple via-indigo-500 to-pink-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-300" />

              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dark-300 shadow-xl">
                <img
                  className="w-full h-[380px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={profileImg}
                  alt="Ali Hamza Profile"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-300/70 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-dark-100/90 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="p-2.5 rounded-lg bg-purple/10 text-purple-400 border border-purple/20">
                  <FaRocket className="text-base" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs sm:text-sm">Full-Stack Solution</h4>
                  <p className="text-gray-400 text-[11px] sm:text-xs">Production-Ready Code</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text & Info Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-7/12 mt-4 lg:mt-0"
          >
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 leading-snug"
            >
              Driven MERN Stack Developer & Software Engineer
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 leading-relaxed mb-3 text-sm sm:text-base"
            >
              I specialize in designing and engineering high-performance, full-stack web architectures utilizing MongoDB, Express.js, React, and Node.js. My focus lies in writing maintainable code, implementing responsive layouts, and integrating RESTful microservices.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base"
            >
              From building multi-vendor e-commerce engines to dynamic dashboard systems and real-time APIs, I adhere to modern UI/UX principles, clean code patterns, and scalable deployment strategies.
            </motion.p>

            {/* Staggered Info Cards */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5"
            >
              {aboutInfo.map((data, index) => {
                const Icon = data.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-purple/40 hover:bg-dark-300/70 transition-all duration-200 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <div className="flex items-start gap-3.5">
                      {Icon && (
                        <div className="p-2.5 rounded-lg bg-purple/10 border border-purple/20 text-purple-400 text-lg group-hover:bg-purple group-hover:text-white transition-all duration-200 shrink-0">
                          <Icon />
                        </div>
                      )}

                      <div>
                        <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                          {data.title}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;