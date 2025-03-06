
import React from 'react';
import Section from './Section';

const About = () => {
  return (
    <Section id="about" variant="gradient">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-2/5">
          <div className="relative max-w-md mx-auto lg:mx-0 reveal">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl futuristic-border">
              <div className="aspect-w-4 aspect-h-5 blur-load" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAAn0lEQVR42mP4DwQMQMwIxExAzALEbEDMDsQcQMwJxFxAzA3EPEDMiwAQ41xA+Wsg/g/E/4D4LxD/AOLvQPwFiD8B8Qcgfg/Eb4H4NRC/AOJnQPwEBIDie4H4LhDfBuKbQHwNiC8D8QUgHoQqPArER4B4PxDvBeIpQNwFxO1A3ALEjUBcC8TVQFwG+hMEyoG4FIiLgbgQiPOAOBeIswAJSS9uXR+kZwAAAABJRU5ErkJggg==)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621ee195?q=80&w=1170&auto=format&fit=crop" 
                  alt="Nitya Rawat - Automotive Engineer" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-3/5">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
              About Me
            </span>
            <h2 className="mb-6 font-display">Pioneering <span className="text-gradient">Engineering</span> Excellence</h2>
            <div className="space-y-4 text-dark-200 mb-8">
              <p>
                I'm Nitya Rawat, an automotive engineer specializing in developing cutting-edge solutions that merge mechanical engineering with advanced technology for the transportation industry.
              </p>
              <p>
                With deep expertise in Computer-Aided Design (CAD), Finite Element Analysis (FEA), and Computational Fluid Dynamics (CFD), I create efficient, aerodynamic vehicle designs that push the boundaries of performance while maintaining sustainability.
              </p>
              <p>
                My passion for innovation drives me to explore new technologies in electric propulsion, autonomous systems, and vehicle applications, focusing on creating the next generation of transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
