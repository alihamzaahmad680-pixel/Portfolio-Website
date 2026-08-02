import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaStripe,
  FaVuejs,
  FaFire,
  FaCloud,
  FaRobot,
} from "react-icons/fa";
import { motion } from "framer-motion";

import projectImg1 from "../assets/project3.jpeg";
import projectImg2 from "../assets/WhatsApp Image 2026-04-22 at 8.52.17 AM.jpeg";
import projectImg3 from "../assets/project5.jpeg";
import projectImg4 from "../assets/Breaking news on AI advancements.png";
import projectImg5 from "../assets/project2.jpeg";
// import projectImg6 from "../assets/project4.jpeg";
import project9 from "../assets/project9.jpeg";

const projects = [
  {
    title: "ZenithCart - Full-Stack E-Commerce Platform",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    description:
      "A professional e-commerce platform built using the MERN stack. It features secure user authentication with JWT, dynamic product filtering, an interactive shopping cart and payment gateways.",
    image: projectImg5,
    live: "https://greencart-iota-one.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/client",
  },
  {
    title: "VoyageVista - Modern Travel & Booking Platform",
    description:
      "A modern, responsive travel booking platform built with React. It features intuitive destination browsing , offering users a smooth and dynamic interface to plan their trips with ease.",
    image: projectImg2,
    live: "https://tour-and-travel-app-68nr.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
  },
  {
    title: "FlavorFleet - Responsive Food Ordering Platform",
    description:
      "A modern, responsive food delivery interface built with HTML, CSS, and JavaScript. It features a sleek, visually engaging layout designed to provide a smooth browsing experience for food lovers.",
    image: projectImg1,
    live: "https://food-website-project-lemon.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Food_Website_Frontend",
  },
  {
    title: "NexusMart - Multi-Vendor Marketplace",
    description:
      "A feature-rich multi-vendor e-commerce web application supporting multiple sellers, dynamic product management, cart functionality, and secure user experiences.",
    image: project9,
    live: "https://e-shop-frontened-phi.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/E-Shop-Project",
  },

  {
    title: "ChronicleNews - Real-Time News Portal",
    description:
      "A dynamic news platform that fetches real-time updates via API. It features a clean, responsive layout designed to provide users with an efficient and up-to-date reading experience.",
    image: projectImg4,
    live: "https://news-website-theta-orcin.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/News-Website",
  },
  {
    title: "CorpPulse - Professional Corporate Website",
    description:
      "A clean and responsive corporate website layout built with HTML and CSS. It features a professional design focused on showcasing company services with a structured and user-friendly interface.",
    image: projectImg3,
    live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
    github: "https://github.com/alihamzaahmad680-pixel/companies--website",
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="projects"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300 hover:bg-dark-100 cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-4 py-2 bg-purple text-white rounded-lg text-sm hover:bg-purple-700"
                  >
                    Live
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="px-4 py-2 border border-gray-500 text-gray-300 rounded-lg text-sm hover:bg-gray-700"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
