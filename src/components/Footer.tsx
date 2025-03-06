
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-engineer-950 py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Nitya Rawat
            </a>
            <p className="mt-2 text-engineer-400">
              Innovative Solutions in Automotive Engineering
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-engineer-800 rounded-full hover:bg-engineer-700 transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            
            <p className="text-engineer-400 text-sm">
              © {new Date().getFullYear()} Nitya Rawat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
