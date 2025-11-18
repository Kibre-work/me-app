import React, { useState } from "react";
import { 
  SiReact, 
  SiDjango, 
  SiPython, 
  SiJavascript, 
  SiTailwindcss, 
  SiPostgresql 
} from "react-icons/si";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const techIcons = [
    { icon: <SiReact />, color: "text-cyan-400", name: "React" },
    { icon: <SiDjango />, color: "text-green-600", name: "Django" },
    { icon: <SiPython />, color: "text-blue-400", name: "Python" },
    { icon: <SiJavascript />, color: "text-yellow-400", name: "JavaScript" },
    { icon: <SiTailwindcss />, color: "text-cyan-300", name: "Tailwind" },
    { icon: <SiPostgresql />, color: "text-blue-500", name: "PostgreSQL" },
  ];

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed top-0 w-full bg-purple-950/90 backdrop-blur-sm z-50 shadow-md h-16 md:h-20 lg:h-25">
        <nav className="relative flex items-center justify-between h-full px-4">

          {/* Logo - Left */}
          <div className="h-full flex items-center">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="h-12 md:h-full w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation - Center */}
          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-6 lg:gap-10 text-gray-200 text-sm lg:text-lg font-normal">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-purple-300 transition font-normal"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Tech Icons - Right (Desktop only) */}
          <div className="hidden lg:flex items-center gap-3">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} text-2xl xl:text-3xl hover:scale-125 transition-transform cursor-pointer`}
                title={tech.name}
              >
                {tech.icon}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button - Right */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-purple-950/95 backdrop-blur-md z-40 md:hidden shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-6 py-3 text-gray-200 text-base font-normal hover:bg-purple-900 hover:text-purple-300 transition"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
