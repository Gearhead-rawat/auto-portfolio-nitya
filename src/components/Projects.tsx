
import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import Button from './Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const Projects = () => {
  const projectCategories = ["All", "Automotive Design", "Electric Vehicles", "Autonomous Systems", "Aerospace", "Aerodynamics"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "Electric Hypercar Prototype",
      category: "Electric Vehicles",
      description: "Developed a lightweight hypercar prototype with focus on energy efficiency, advanced materials, and unprecedented performance.",
      image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=1287&auto=format&fit=crop",
      tags: ["Sustainable Design", "Electric Drivetrain", "Composite Materials"],
      url: "#project-1"
    },
    {
      title: "Autonomous Navigation System",
      category: "Autonomous Systems",
      description: "Implemented a SLAM-based navigation system for autonomous vehicles using machine learning and advanced sensor fusion.",
      image: "https://images.unsplash.com/photo-1619642439822-9d8f629bce69?q=80&w=1138&auto=format&fit=crop",
      tags: ["Computer Vision", "SLAM Algorithms", "Sensor Fusion"],
      url: "#project-2"
    },
    {
      title: "Hypersonic Aircraft Design",
      category: "Aerospace",
      description: "Designed key components for a hypersonic aircraft capable of Mach 5+ flight with innovative thermal management solutions.",
      image: "https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?q=80&w=1171&auto=format&fit=crop",
      tags: ["Hypersonic Aerodynamics", "Thermal Systems", "Propulsion"],
      url: "#project-3"
    },
    {
      title: "Advanced Driver Assistance System",
      category: "Autonomous Systems",
      description: "Designed and implemented an integrated ADAS with lane keeping, adaptive cruise control, and collision avoidance features.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1170&auto=format&fit=crop",
      tags: ["Sensor Fusion", "Real-time Processing", "Safety Systems"],
      url: "#project-4"
    },
    {
      title: "Hyperloop Pod Aerodynamics",
      category: "Aerodynamics",
      description: "Conducted comprehensive CFD simulations to optimize the aerodynamic performance of a hyperloop transportation pod.",
      image: "https://images.unsplash.com/photo-1495927013423-47dd3dd7878b?q=80&w=1169&auto=format&fit=crop",
      tags: ["CFD Simulation", "Vacuum Aerodynamics", "Drag Reduction"],
      url: "#project-5"
    },
    {
      title: "VTOL Aircraft Development",
      category: "Aerospace",
      description: "Developed a vertical takeoff and landing aircraft with hybrid propulsion system for urban air mobility applications.",
      image: "https://images.unsplash.com/photo-1622819584099-e04ccb14e8a7?q=80&w=1287&auto=format&fit=crop",
      tags: ["VTOL Technology", "Hybrid Propulsion", "Urban Air Mobility"],
      url: "#project-6"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section id="projects" variant="darker">
      <div className="text-center mb-16 reveal">
        <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
          Portfolio
        </span>
        <h2 className="mb-4 text-white font-display">Advanced <span className="text-gradient">Engineering</span> Projects</h2>
        <p className="max-w-2xl mx-auto text-dark-300">
          Discover my most significant contributions across automotive design, electric vehicles, aerospace engineering, and autonomous systems.
        </p>
      </div>
      
      {/* Category Selector - Futuristic Style */}
      <div className="relative mb-16 reveal">
        <div className="flex justify-center">
          <div className="relative overflow-hidden py-4 px-2 neo-glass rounded-lg">
            <div className="flex flex-wrap justify-center gap-3 relative z-10">
              {projectCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "primary" : "ghost"}
                  size="sm"
                  className={activeCategory === category 
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple border-none font-mono" 
                    : "text-dark-200 hover:text-white font-mono"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            {/* Animated background line */}
            <div className="absolute bottom-0 left-0 right-0">
              <div className="tech-line"></div>
            </div>
          </div>
        </div>
        
        {/* Navigation arrows */}
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden md:block">
          <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-accent-blue">
            <ArrowLeft size={20} />
          </Button>
        </div>
        
        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block">
          <Button variant="ghost" size="sm" className="rounded-full h-10 w-10 p-0 text-accent-blue">
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            category={project.category}
            description={project.description}
            image={project.image}
            tags={project.tags}
            url={project.url}
          />
        ))}
      </div>
      
      {/* Project Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
        <div className="neo-glass p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-accent-blue mb-2 font-mono">25+</div>
          <div className="text-dark-300 text-sm">Projects Completed</div>
        </div>
        <div className="neo-glass p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-accent-purple mb-2 font-mono">15+</div>
          <div className="text-dark-300 text-sm">Research Papers</div>
        </div>
        <div className="neo-glass p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-accent-red mb-2 font-mono">8+</div>
          <div className="text-dark-300 text-sm">Industry Partners</div>
        </div>
        <div className="neo-glass p-6 rounded-lg text-center">
          <div className="text-3xl font-bold text-accent-green mb-2 font-mono">3</div>
          <div className="text-dark-300 text-sm">Patents Filed</div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
