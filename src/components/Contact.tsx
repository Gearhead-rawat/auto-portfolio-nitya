
import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
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
    { icon: <Linkedin className="h-5 w-5" />, text: "linkedin.com/in/nityarawat" },
    { icon: <Github className="h-5 w-5" />, text: "github.com/nityarawat" }
  ];

  return (
    <Section id="contact" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-engineer-100 text-engineer-700 text-sm font-medium">
              Get In Touch
            </span>
            <h2 className="mb-6">Let's <span className="text-gradient">Connect</span></h2>
            <p className="text-engineer-700 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-engineer-100 flex items-center justify-center text-accent-blue">
                    {item.icon}
                  </div>
                  <span className="text-engineer-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit} className="glass p-8 rounded-xl reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-engineer-800 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-engineer-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-white/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-engineer-800 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-engineer-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-engineer-800 mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-engineer-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-white/50"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-engineer-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-engineer-200 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors bg-white/50 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  Sending... <span className="ml-2 animate-spin">⏳</span>
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
