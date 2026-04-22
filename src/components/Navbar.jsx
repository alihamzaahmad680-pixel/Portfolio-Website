import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <div>
          <a
            href="#"
            className="text-3xl font-bold text-white flex items-center gap-2"
          >
            Ali <span className="text-purple">Hamza</span>
            <div className="w-3 h-3 bg-purple rounded-full"></div>
          </a>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-10">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </div>

        {/* MOBILE BUTTON */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <FaXmark /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-dark-300 flex flex-col items-center justify-center space-y-6 text-xl">
          <MobileLink href="#home" label="Home" setShowMenu={setShowMenu} />
          <MobileLink href="#about" label="About" setShowMenu={setShowMenu} />
          <MobileLink href="#skills" label="Skills" setShowMenu={setShowMenu} />
          <MobileLink
            href="#projects"
            label="Projects"
            setShowMenu={setShowMenu}
          />
          <MobileLink
            href="#contact"
            label="Contact"
            setShowMenu={setShowMenu}
          />
        </div>
      )}
    </nav>
  );
};

/* Desktop link */
const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="relative text-white/80 hover:text-purple transition group"
  >
    {label}
    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple group-hover:w-full transition-all"></span>
  </a>
);

/* Mobile link */
const MobileLink = ({ href, label, setShowMenu }) => (
  <a
    href={href}
    onClick={() => setShowMenu(false)}
    className="text-white hover:text-purple transition"
  >
    {label}
  </a>
);

export default Navbar;
