import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";
import profileImg from "../assets/WhatsApp Image 2026-03-27 at 7.53.57 AM.jpeg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeout" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-dark-200"
    >
      <div className="container mx-auto px-6 ">
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple">Me</span>
        </h2>

        <p className="text-gray-400 text-center mx-auto mb-16 max-w-2xl">
          Get to know more about my background and passion
        </p>

        <div className="flex flex-col items-center md:flex-row gap-12">
          {/* IMAGE */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full h-full object-cover"
              src={profileImg} // ✅ FIXED HERE
              alt="profile"
            />
          </div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.2 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>

              <p className="text-gray-300 mb-6">
                I'm a passionate Frontend developer with over 1 year of
                experience creating digital solutions for businesses around the
                world.
              </p>

              <p className="text-gray-300 mb-6">
                When I'm not coding, I explore new technologies and build
                projects.
              </p>

              {/* CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-dark-300 rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="text-purple text-4xl mb-4">
                      <data.icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">{data.title}</h3>

                    <p className="text-gray-400">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
