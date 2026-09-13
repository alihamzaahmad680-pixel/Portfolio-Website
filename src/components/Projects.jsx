import React from "react";
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

import projectImg1 from "../assets/project3.jpeg";
import projectImg2 from "../assets/WhatsApp Image 2026-04-22 at 8.52.17 AM.jpeg";
import projectImg3 from "../assets/project5.jpeg";
import projectImg4 from "../assets/Breaking news on AI advancements.png";
import projectImg5 from "../assets/project2.jpeg";
import project9 from "../assets/project9.jpeg";

const projects = [
  {
    title: "ZenithCart - Full-Stack E-Commerce",
    category: "Full Stack MERN",
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    description:
      "A professional e-commerce platform built using the MERN stack. Features JWT authentication, dynamic filtering, interactive cart, and payment gateway integration.",
    image: projectImg5,
    live: "https://greencart-iota-one.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/client",
  },
  {
    title: "VoyageVista - Travel Booking Platform",
    category: "Frontend Architecture",
    tech: ["React", "Tailwind CSS", "REST API"],
    description:
      "A modern travel booking platform built with React. Features intuitive destination browsing and smooth dynamic UI for effortless trip planning.",
    image: projectImg2,
    live: "https://tour-and-travel-app-68nr.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
  },
  {
    title: "NexusMart - Multi-Vendor Marketplace",
    category: "Full Stack MERN",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    description:
      "A feature-rich multi-vendor e-commerce web application supporting multiple sellers, dynamic product management, and secure cart functionality.",
    image: project9,
    live: "https://e-shop-frontened-phi.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/E-Shop-Project",
  },
  {
    title: "FlavorFleet - Food Ordering Platform",
    category: "UI/UX & Frontend",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A sleek, responsive food delivery frontend interface designed to provide a smooth and engaging browsing experience for food ordering.",
    image: projectImg1,
    live: "https://food-website-project-lemon.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Food_Website_Frontend",
  },
  {
    title: "ChronicleNews - Real-Time News Portal",
    category: "API Integration",
    tech: ["React", "News API", "Tailwind CSS"],
    description:
      "A dynamic news platform fetching real-time global news via API. Features category filters and clean responsive article layouts.",
    image: projectImg4,
    live: "https://news-website-theta-orcin.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/News-Website",
  },
  {
    title: "CorpPulse - Corporate Business Site",
    category: "Corporate Web",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description:
      "A clean, structured corporate website layout built for displaying business services, team details, and client inquiry forms.",
    image: projectImg3,
    live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
    github: "https://github.com/alihamzaahmad680-pixel/companies--website",
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <FaFolderOpen className="text-xs" />
            <span>Featured Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3"
          >
            Featured <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
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
            A curated showcase of full-stack MERN applications, interactive frontends, and dynamic web applications.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-dark-300/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl hover:border-purple/40 transition-all duration-300 flex flex-col justify-between group relative"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple via-indigo-500 to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity duration-300 z-20" />

              <div>
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 sm:h-52 w-full bg-dark-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-300/90 via-dark-300/30 to-transparent" />

                  {/* Category Badge */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-dark-200/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech?.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium text-purple-300/90 bg-purple/10 px-2 py-0.5 rounded border border-purple/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 pt-0 flex gap-2.5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 bg-purple hover:bg-purple/80 text-white rounded-lg text-xs font-semibold transition duration-200 shadow-md shadow-purple/20 group/btn"
                >
                  <FaExternalLinkAlt className="text-[10px] group-hover/btn:translate-x-0.5 transition-transform" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2 border border-white/15 hover:border-purple/50 hover:bg-purple/10 text-gray-300 hover:text-white rounded-lg text-xs font-semibold transition duration-200"
                >
                  <FaGithub className="text-xs" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;