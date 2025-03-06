
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-engineer-50 to-engineer-100 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-accent-red/5 blur-3xl"></div>
      </div>
      
      <div className="section-container flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-12 z-10">
          <div className="reveal">
            <span className="inline-block mb-3 py-1 px-3 rounded-full bg-engineer-100 text-engineer-800 text-sm font-medium">
              Automobile Engineer
            </span>
            <h1 className="mb-4">
              Innovative<br />
              <span className="text-gradient">Automotive</span><br />
              Solutions
            </h1>
            <p className="text-engineer-700 text-lg mb-8">
              Designing the future of mobility with precision engineering and innovative technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative reveal">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-accent-blue/20">
              <div className="aspect-w-16 aspect-h-9 blur-load" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA+ElEQVR42mP4DwQMQMzIAAEgNgHhXiDNDKRBkAXdRGZk1Ywcm9UZmfazMzJsYWHk2s/JyLwHhJkYWXcAJdiB4iCwWntZ4e11+edPlOf/v1qR/39nXfa/dQXJvxdmBZ4GyjEBxUFilrqs03My/P7PTgv5PzU+8H9TYdr/gszoP+ne1qeAcixAcZB4j4fF7PTowP/to/P/N7UV/i/IT/hfleH/Ptpe9yRQjgUoPhPIfHVXy/8z4/3/Lywt+F9blvl/QVn8/zBX4xNAOVagyDyg1OcrO0r/n1rQ+H/1vOr/K7pL/zcW5/z38zI5AZRjB4r7APETgJgZAAC/OKCVsoTbTAAAAABJRU5ErkJggg==)' }}>
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
                  alt="Future of automotive engineering" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-engineer-950/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-xs font-medium uppercase tracking-wider mb-1">Featured Project</div>
                <div className="text-xl font-semibold">Autonomous Navigation System</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-accent-blue"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-accent-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
