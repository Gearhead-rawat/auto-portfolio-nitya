
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 text-white relative">
      {/* Tech circuitry pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `
            radial-gradient(circle, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-display font-bold text-gradient animate-pulse-glow">
              Nitya Rawat
            </a>
            <p className="mt-2 text-dark-300 font-mono">
              Innovative Solutions in Automotive & Aerospace Engineering
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-dark-300 hover:text-accent-blue transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-blue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-dark-300 hover:text-accent-blue transition-colors">
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-dark-700 rounded-full hover:bg-dark-600 transition-colors mb-4 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 text-accent-blue group-hover:animate-bounce" />
            </button>
            
            <p className="text-dark-400 text-sm font-mono">
              © {currentYear} Nitya Rawat. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom tech line */}
        <div className="mt-8 tech-line"></div>
      </div>
    </footer>
  );
};

export default Footer;
