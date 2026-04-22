import React from "react";
import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import profileImg from "../assets/WhatsApp Image 2026-03-27 at 7.53.57 AM.jpeg";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeout" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container flex mx-auto px-6 flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi I'm <span className="text-purple">Ali Hamza</span>
          </h1>

          <h2 className="text-2xl font-semibold md:text-4xl mb-6 typewriter">
            Frontend Developer
          </h2>

          <p className="text-lg text-gray-300 mb-8">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>

          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 bg-purple rounded-lg py-3 font-medium hover:bg-purple-700 transition"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 border border-purple rounded-lg py-3 font-medium hover:bg-purple/20 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70"></div>

            <motion.img
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: easeInOut,
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
              src={profileImg} // ✅ FIXED HERE
              alt="profile"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
