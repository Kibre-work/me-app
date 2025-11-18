import React from "react";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-purple-900 border-t-2 border-orange-500/30">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.jpg"
                alt="CodeWithSun Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Building exceptional digital experiences with passion and precision. 
              Let's create something amazing together!
            </p>
            
            {/* Email */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-400 text-xl">📧</span>
              <a href="mailto:senait@codewithsun.com" className="text-gray-400 hover:text-orange-400 transition-colors">
                senait@codewithsun.com
              </a>
            </div>

            {/* LinkedIn Link */}
            <div className="flex gap-3">
              
            <a    href="https://www.linkedin.com/in/senait-agumasie-22065b19b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-lg flex items-center justify-center text-white text-xl transition-all hover:scale-110 hover:shadow-lg"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 <span className="text-white">Code</span><span className="text-orange-400">With</span><span className="text-white">Sun</span>. Made with 💜 by Senait Agumasie
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;