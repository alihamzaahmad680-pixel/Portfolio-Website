import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const projects = [
  {
    title: "Food Website",
    description: "Modern food website UI built with HTML, CSS and JS.",
    image: "/src/assets/WhatsApp Image 2026-03-27 at 11.38.41 AM.jpeg",
    live: "https://food-website-project-lemon.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel",
  },
  {
    title: "Tour and Travel Website",
    description: "Responsive tour and travel website with booking features.",
    image: "/src/assets/WhatsApp Image 2026-04-22 at 8.52.17 AM.jpeg",
    live: "https://tour-and-travel-app-68nr.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel/Tour-and-Travel-App",
  },
  {
    title: "Company Website",
    description: "Responsive company website layout using HTML/CSS.",
    image: "/src/assets/WhatsApp Image 2026-03-27 at 11.40.57 AM.jpeg",
    live: "https://alihamzaahmad680-pixel.github.io/companies--website/#",
    github: "https://github.com/alihamzaahmad680-pixel",
  },
  {
    title: "News Website",
    description: "Dynamic news website using API with real-time updates.",
    image: "/src/assets/Breaking news on AI advancements.png",
    live: "https://news-website-theta-orcin.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel",
  },
  {
    title: "Calculator App",
    description: "Simple and responsive calculator using JavaScript.",
    image: "/src/assets/Modern calculator with sleek design.png",
    live: "https://calculator-five-indol-68.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel",
  },
  {
    title: "To-Do List",
    description: "Task management app with add/delete functionality.",
    image: "/src/assets/WhatsApp Image 2026-03-27 at 11.43.18 AM.jpeg",
    live: "https://to-do-list-sigma-black-49.vercel.app/",
    github: "https://github.com/alihamzaahmad680-pixel",
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
              className="bg-dark-300 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl text-white">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
