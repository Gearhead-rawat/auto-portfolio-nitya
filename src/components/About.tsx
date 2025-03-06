
import React from 'react';
import Section from './Section';
import { CheckCircle, Award, BookOpen, Ruler, Compass, Cpu } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="h-5 w-5 text-accent-blue" />, text: "10+ Years of Engineering Experience" },
    { icon: <Award className="h-5 w-5 text-accent-blue" />, text: "Advanced Certification in Automotive Design" },
    { icon: <BookOpen className="h-5 w-5 text-accent-blue" />, text: "Published Research in Aerodynamics" }
  ];

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
              
              {/* High-tech overlay elements */}
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-accent-blue animate-pulse"></div>
                <div className="text-xs font-mono text-white">ID.8721</div>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <div className="text-xs font-mono text-accent-blue">
                  <span className="text-white">LAT:</span> 37.7749 <span className="text-white">LONG:</span> -122.4194
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full -z-10 animate-pulse"></div>
            
            {/* Tech measurements */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center">
              <Ruler className="text-accent-blue mb-2" size={20} />
              <div className="h-32 w-0.5 bg-dark-600"></div>
            </div>
            
            <div className="absolute -right-6 top-1/3 transform -translate-y-1/3 hidden lg:flex flex-col items-center">
              <Compass className="text-accent-purple mb-2" size={20} />
              <div className="h-24 w-0.5 bg-dark-600"></div>
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
                I'm Nitya Rawat, an automotive and aeronautical engineer specializing in developing cutting-edge solutions that merge mechanical engineering with advanced technology for the transportation industry.
              </p>
              <p>
                With deep expertise in Computer-Aided Design (CAD), Finite Element Analysis (FEA), and Computational Fluid Dynamics (CFD), I create efficient, aerodynamic vehicle designs that push the boundaries of performance while maintaining sustainability.
              </p>
              <p>
                My passion for innovation drives me to explore new technologies in electric propulsion, autonomous systems, and aerospace applications, focusing on creating the next generation of transportation solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-dark-700/50 rounded-lg border border-dark-600 card-hover">
                  {item.icon}
                  <span className="text-sm font-medium text-dark-100">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* Tech specs */}
            <div className="mt-8 p-4 bg-dark-700/30 rounded-lg border border-dark-600">
              <div className="flex items-center mb-2">
                <Cpu className="h-5 w-5 text-accent-blue mr-2" />
                <h4 className="text-lg font-display">Technical Specifications</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm text-dark-200 font-mono">
                <div>
                  <span className="text-dark-400">Specialization:</span> Automotive Design
                </div>
                <div>
                  <span className="text-dark-400">Experience:</span> 10+ Years
                </div>
                <div>
                  <span className="text-dark-400">Location:</span> San Francisco, CA
                </div>
                <div>
                  <span className="text-dark-400">Availability:</span> <span className="text-accent-green">Active</span>
                </div>
                <div>
                  <span className="text-dark-400">Projects:</span> 25+
                </div>
                <div>
                  <span className="text-dark-400">Patents:</span> 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
