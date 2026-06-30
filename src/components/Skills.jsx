import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React JS", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node JS", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express JS", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      id="skills"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical <span className="text-purple">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-300 rounded-2xl p-6 flex flex-col items-center justify-center 
              hover:-translate-y-2 transition duration-300 cursor-pointer shadow-lg border border-white/5"
            >
              <div className={`text-5xl mb-4 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-gray-200 font-semibold text-lg">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
