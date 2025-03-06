
import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "nitya.rawat@example.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, text: "San Francisco, CA" },
    { icon: <Globe className="h-5 w-5" />, text: "www.nityarawat.com" }
  ];

  return (
    <Section id="contact" variant="gradient">
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <div className="reveal text-center">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
              Get In Touch
            </span>
            <h2 className="mb-6 font-display">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-dark-200 mb-8">
              I'm always open to discussing new projects, creative ideas, research opportunities, or collaborations in the automotive sector.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group p-4 rounded-lg neo-glass">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg neo-glass flex items-center justify-center text-accent-blue group-hover:text-accent-purple transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-dark-200 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-lg font-display mb-6">Connect on Social Media</h4>
              <div className="flex justify-center space-x-6">
                <a href="#" className="w-12 h-12 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-16 relative">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-dark-500 to-transparent"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-dark-800 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-dark-700 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-accent-blue rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
