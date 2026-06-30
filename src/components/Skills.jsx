// import React from "react";
// import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
// import { SiTailwindcss } from "react-icons/si";

// const skills = [
//   {
//     name: "HTML",
//     icon: <FaHtml5 />,
//     color: "text-orange-500",
//   },
//   {
//     name: "CSS",
//     icon: <FaCss3Alt />,
//     color: "text-blue-500",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: <SiTailwindcss />,
//     color: "text-cyan-400",
//   },
//   {
//     name: "JavaScript",
//     icon: <FaJs />,
//     color: "text-yellow-400",
//   },
//   {
//     name: "React JS",
//     icon: <FaReact />,
//     color: "text-blue-400",
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 bg-dark-200">
//       <div className="container mx-auto px-6">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-center mb-4">
//           My <span className="text-purple">Skills</span>
//         </h2>
//         <p className="text-gray-400 text-center mb-12">
//           Technologies I work with
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-dark-300 rounded-2xl p-5 flex flex-col items-center justify-center
//               hover:-translate-y-2 transition duration-300 cursor-pointer"
//             >
//               {/* Icon */}
//               <div className={`text-5xl mb-3 ${skill.color}`}>
//                 {skill.icon}
//               </div>

//               {/* Name */}
//               <h3 className="text-white font-semibold">
//                 {skill.name}
//               </h3>
//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
import React from "react";
import { motion } from "framer-motion";
// Icons import kiye
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
    <section id="skills" className="py-20 bg-dark-900">
      {" "}
      {/* Thoda darker background */}
      <div className="container mx-auto px-6">
        {/* Heading with smooth style */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-dark-800 border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center 
              hover:border-purple-500/50 hover:bg-dark-700 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Icon with scaling effect on hover */}
              <div
                className={`text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}
              >
                {skill.icon}
              </div>

              <h3 className="text-gray-200 font-medium tracking-wide">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
