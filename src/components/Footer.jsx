import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-dark-300 relative border-t border-white/10 py-8">
      {/* TOP GRADIENT ACCENT LINE */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        {/* COPYRIGHT INFO */}
        <p className="text-center sm:text-left">
          © {currentYear} <span className="text-white font-medium">Ali Hamza</span>. All rights reserved.
        </p>

        {/* BACK TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-purple/20 hover:border-purple/40 hover:text-white transition-all duration-300 text-gray-400 cursor-pointer"
        >
          <span>Back to Top</span>
          <FaArrowUp className="text-[10px]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;