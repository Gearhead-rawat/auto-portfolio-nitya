
import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Globe, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "nitya.rawat@example.com" },
    { icon: <Phone className="h-5 w-5" />, text: "+1 (555) 123-4567" },
    { icon: <MapPin className="h-5 w-5" />, text: "San Francisco, CA" },
    { icon: <Globe className="h-5 w-5" />, text: "www.nityarawat.com" }
  ];

  return (
    <Section id="contact" variant="gradient">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
              Get In Touch
            </span>
            <h2 className="mb-6 font-display">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-dark-200 mb-8">
              I'm always open to discussing new projects, creative ideas, research opportunities, or collaborations in the automotive and aerospace sectors.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg neo-glass flex items-center justify-center text-accent-blue group-hover:text-accent-purple transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-dark-200 group-hover:text-white transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-lg font-display mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-lg neo-glass flex items-center justify-center text-accent-blue hover:text-accent-purple transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit} className="neo-glass p-8 rounded-lg reveal relative overflow-hidden">
            {/* Tech circuitry pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="h-full w-full" style={{ 
                backgroundImage: `
                  radial-gradient(circle, rgba(0, 240, 255, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            {/* Form content */}
            <div className="relative z-10">
              <h3 className="text-xl font-display mb-6 flex items-center">
                <Send className="mr-2 text-accent-blue" /> Send Me a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-100 mb-2 font-mono">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-100 mb-2 font-mono">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-dark-100 mb-2 font-mono">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors text-white"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-dark-100 mb-2 font-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-dark-700/50 border border-dark-600 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full md:w-auto bg-gradient-to-r from-accent-blue to-accent-purple font-mono"
                disabled={isSubmitting}
                glowing={true}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-accent-blue"></div>
            <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-accent-purple"></div>
            <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-accent-purple"></div>
            <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent-blue"></div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
