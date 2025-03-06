
import React from 'react';
import Button from './Button';
import { ArrowRight, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid lines for futuristic effect */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="h-full w-full" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-12 z-10">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
              Automotive Engineer
            </span>
            <h1 className="mb-4 font-display font-bold">
              Designing<br />
              <span className="text-gradient glow-text">Tomorrow's</span><br />
              Innovations.
            </h1>
            <p className="text-dark-100 text-lg mb-8 max-w-lg">
              Pioneering the future of mobility with precision engineering and cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-gradient-to-r from-accent-blue to-accent-purple border-none animate-glow text-white"
                onClick={() => document.getElementById('projects')?.scrollIntoView()}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-accent-blue text-accent-blue hover:bg-dark-700/50"
                onClick={() => document.getElementById('contact')?.scrollIntoView()}
              >
                Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue mb-1 font-mono">10+</div>
                <div className="text-dark-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-purple mb-1 font-mono">25+</div>
                <div className="text-dark-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red mb-1 font-mono">15+</div>
                <div className="text-dark-200 text-sm">Innovative Solutions</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative reveal">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-accent-blue/20 futuristic-border">
              <div className="aspect-w-16 aspect-h-9 blur-load" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA+ElEQVR42mP4DwQMQMzIAAEgNgHhXiDNDKRBkAXdRGZk1Ywcm9UZmfazMzJsYWHk2s/JyLwHhJkYWXcAJdiB4iCwWntZ4e11+edPlOf/v1qR/39nXfa/dQXJvxdmBZ4GyjEBxUFilrqs03My/P7PTgv5PzU+8H9TYdr/gszoP+ne1qeAcixAcZB4j4fF7PTowP/to/P/N7UV/i/IT/hfleH/Ptpe9yRQjgUoPhPIfHVXy/8z4/3/Lywt+F9blvl/QVn8/zBX4xNAOVagyDyg1OcrO0r/n1rQ+H/1vOr/K7pL/zcW5/z38zI5AZRjB4r7APETgJgZAAC/OKCVsoTbTAAAAABJRU5ErkJggg==)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1170&auto=format&fit=crop" 
                  alt="Futuristic vehicle engineering" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-800/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs font-mono uppercase tracking-wider mb-1 text-accent-blue">Featured Project</div>
                <div className="text-xl font-semibold font-display">Advanced Aerodynamic Design System</div>
              </div>
            </div>
            
            {/* Tech decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-accent-blue animate-pulse-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-accent-purple animate-pulse-glow"></div>
            
            {/* Data visualization element */}
            <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="h-32 w-3 bg-dark-700 rounded-full overflow-hidden">
                <div className="h-3/4 w-full bg-gradient-to-t from-accent-blue to-accent-purple animate-pulse"></div>
              </div>
              <div className="mt-2 flex justify-center">
                <BarChart3 size={24} className="text-accent-blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom tech line */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="tech-line"></div>
      </div>
    </section>
  );
};

export default Hero;
