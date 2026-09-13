import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaPaperPlane } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  // Enable smooth scroll behavior at HTML root level
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // Scroll listener for background glassmorphism & active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handler for custom smooth scrolling with offset mitigation
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setShowMenu(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-100/80 backdrop-blur-md py-3 shadow-xl border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2 group cursor-pointer"
        >
          <span>
            Ali{" "}
            <span className="bg-gradient-to-r from-purple via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Hamza
            </span>
          </span>
          <div className="w-2.5 h-2.5 bg-purple rounded-full group-hover:scale-125 transition-transform duration-300" />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative text-sm font-medium transition-colors duration-300 py-1 ${
                  isActive ? "text-purple font-semibold" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple via-indigo-400 to-pink-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP HIRE ME BUTTON */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-5 py-2.5 rounded-xl bg-purple/10 border border-purple/30 text-purple hover:bg-purple hover:text-white font-semibold text-xs transition-all duration-300 flex items-center gap-2 shadow-lg shadow-purple/10 group"
          >
            <span>Hire Me</span>
            <FaPaperPlane className="text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:text-purple focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {showMenu ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 bg-dark-200/95 backdrop-blur-xl flex flex-col justify-center items-center z-40 px-6 overflow-hidden"
          >
            <div className="flex flex-col items-center space-y-6 text-center w-full max-w-xs">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index + 0.1, duration: 0.3 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "text-purple font-bold text-xl scale-105"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}

              <motion.a
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full mt-4 py-3 rounded-xl bg-purple text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple/20"
              >
                <span>Hire Me</span>
                <FaPaperPlane className="text-xs" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;