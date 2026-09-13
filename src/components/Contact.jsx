import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulated API submission delay (Formspree / EmailJS ready)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Auto reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-dark-200 relative overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            <FaEnvelope className="text-xs" />
            <span>Let's Build Together</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3"
          >
            Get In <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
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
            Have a web development project, internship opportunity, or freelancing inquiry? Let's connect and transform your vision into production-ready software.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-dark-300/40 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-xl shadow-xl relative overflow-hidden"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple via-indigo-500 to-pink-500" />

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3 text-xs sm:text-sm font-medium shadow-md"
                >
                  <FaCheckCircle className="text-lg flex-shrink-0 text-emerald-400" />
                  <span>Thank you! Your message has been sent successfully. I'll get back to you shortly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ali Hamza"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-dark-100/90 border border-white/10 rounded-lg px-3.5 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition duration-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="alihamzaahmad680@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-dark-100/90 border border-white/10 rounded-lg px-3.5 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-dark-100/90 border border-white/10 rounded-lg px-3.5 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition duration-200"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your project details or message here..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-dark-100/90 border border-white/10 rounded-lg px-3.5 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition duration-200 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-purple hover:bg-purple/80 text-white font-semibold rounded-lg text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple/20 group disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? "Sending Message..." : "Send Message"}</span>
                <FaPaperPlane className={`text-xs ${loading ? "animate-pulse" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"} transition-transform`} />
              </button>
            </form>
          </motion.div>

          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Direct Info Card */}
            <div className="bg-dark-300/40 border border-white/10 rounded-xl p-6 backdrop-blur-md space-y-5 shadow-xl relative overflow-hidden">
              <h3 className="text-base sm:text-lg font-bold text-white border-l-4 border-purple-400 pl-3">
                Contact Details
              </h3>

              {/* Location */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-10 h-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center text-purple-300 text-base flex-shrink-0 group-hover:scale-105 transition-transform">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-white text-sm sm:text-base font-semibold mt-0.5">Lahore, Pakistan</p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:alihamzaahmad680@gmail.com"
                className="flex items-start gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center text-purple-300 text-base flex-shrink-0 group-hover:bg-purple group-hover:text-white transition duration-200 group-hover:scale-105">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Email Address</h4>
                  <p className="text-white text-xs sm:text-sm font-semibold mt-0.5 group-hover:text-purple-300 transition duration-200 break-all">
                    alihamzaahmad680@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+923211186522"
                className="flex items-start gap-3.5 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center text-purple-300 text-base flex-shrink-0 group-hover:bg-purple group-hover:text-white transition duration-200 group-hover:scale-105">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Phone & WhatsApp</h4>
                  <p className="text-white text-sm sm:text-base font-semibold mt-0.5 group-hover:text-purple-300 transition duration-200">
                    +92 321 1186522
                  </p>
                </div>
              </a>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href="https://wa.me/923211186522?text=Hi%20Ali%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 bg-emerald-600/20 border border-emerald-500/30 hover:bg-emerald-600 text-emerald-400 hover:text-white font-semibold rounded-xl text-xs sm:text-sm transition duration-200 flex items-center justify-center gap-2.5 shadow-lg group"
            >
              <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform" />
              <span>Chat directly on WhatsApp</span>
            </a>

            {/* Social Networks */}
            <div className="bg-dark-300/40 border border-white/10 rounded-xl p-5 backdrop-blur-md shadow-xl">
              <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Professional Networks
              </h4>

              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/alihamzaahmad680-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center gap-1.5 text-gray-300 hover:text-white hover:border-purple/50 hover:bg-purple/10 text-xs font-semibold transition-all duration-200 shadow-sm"
                  title="GitHub Profile"
                >
                  <FaGithub className="text-sm text-gray-300" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ali-hamza-547b6b38a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center gap-1.5 text-blue-400 hover:text-white hover:border-blue-400/50 hover:bg-blue-500/10 text-xs font-semibold transition-all duration-200 shadow-sm"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-sm text-blue-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://wa.me/923211186522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-lg bg-dark-100 border border-white/10 flex items-center justify-center gap-1.5 text-emerald-400 hover:text-white hover:border-emerald-400/50 hover:bg-emerald-500/10 text-xs font-semibold transition-all duration-200 shadow-sm"
                  title="WhatsApp Contact"
                >
                  <FaWhatsapp className="text-sm text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;