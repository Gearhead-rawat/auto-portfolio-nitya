
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        scrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-gradient">
            Nitya Rawat
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-engineer-800 hover:text-accent-blue transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-engineer-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          'fixed top-[72px] left-0 right-0 h-screen bg-white/90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center space-y-8 pt-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xl text-engineer-800 hover:text-accent-blue"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
