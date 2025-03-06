
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  // Intersection Observer to trigger animations when scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
      
      {/* Futuristic scroll indicator */}
      <div className="fixed bottom-10 right-10 z-40 hidden md:block">
        <div className="h-20 w-1 bg-dark-600 rounded-full mx-auto overflow-hidden">
          <div className="h-6 w-full bg-accent-blue rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
