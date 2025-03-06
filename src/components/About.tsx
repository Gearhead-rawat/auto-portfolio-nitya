
import React from 'react';
import Section from './Section';
import { CheckCircle, Award, BookOpen } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <CheckCircle className="h-5 w-5 text-accent-blue" />, text: "10+ Years of Engineering Experience" },
    { icon: <Award className="h-5 w-5 text-accent-blue" />, text: "Advanced Certification in Automotive Design" },
    { icon: <BookOpen className="h-5 w-5 text-accent-blue" />, text: "Published Research in Aerodynamics" }
  ];

  return (
    <Section id="about" className="bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-2/5">
          <div className="relative max-w-md mx-auto lg:mx-0 reveal">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-5 blur-load" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAAn0lEQVR42mP4DwQMQMwIxExAzALEbEDMDsQcQMwJxFxAzA3EPEDMiwAQ41xA+Wsg/g/E/4D4LxD/AOLvQPwFiD8B8Qcgfg/Eb4H4NRC/AOJnQPwEBIDie4H4LhDfBuKbQHwNiC8D8QUgHoQqPArER4B4PxDvBeIpQNwFxO1A3ALEjUBcC8TVQFwG+hMEyoG4FIiLgbgQiPOAOBeIswAJSS9uXR+kZwAAAABJRU5ErkJggg==)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Nitya Rawat - Automobile Engineer" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 -left-4 bottom-4 -right-4 border-2 border-engineer-200 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-blue/10 rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="w-full lg:w-3/5">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-engineer-100 text-engineer-700 text-sm font-medium">
              About Me
            </span>
            <h2 className="mb-6">Passionate About <span className="text-gradient">Engineering</span> Excellence</h2>
            <div className="space-y-4 text-engineer-700 mb-8">
              <p>
                I'm Nitya Rawat, an automobile engineer with expertise in developing innovative solutions for the automotive industry. My passion lies at the intersection of mechanical engineering and cutting-edge technology.
              </p>
              <p>
                With a background in Computer-Aided Design (CAD), Finite Element Analysis (FEA), and Computational Fluid Dynamics (CFD), I specialize in creating efficient, sustainable vehicle designs that push the boundaries of what's possible.
              </p>
              <p>
                My commitment to sustainability and innovation drives me to explore new approaches to automotive engineering, with a focus on electric and autonomous vehicle technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-engineer-50 rounded-lg border border-engineer-100">
                  {item.icon}
                  <span className="text-sm font-medium text-engineer-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
