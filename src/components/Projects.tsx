
import React, { useState } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import Button from './Button';

const Projects = () => {
  const projectCategories = ["All", "Automotive Design", "Electric Vehicles", "Autonomous Systems", "Aerodynamics"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      title: "Electric Vehicle Prototype",
      category: "Electric Vehicles",
      description: "Developed a lightweight electric vehicle prototype with emphasis on energy efficiency and sustainable materials.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      tags: ["CAD Design", "Sustainable Materials", "Energy Optimization"],
      url: "#project-1"
    },
    {
      title: "Autonomous Navigation System",
      category: "Autonomous Systems",
      description: "Implemented a SLAM-based navigation system for autonomous vehicles using ROS and computer vision.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      tags: ["ROS", "Computer Vision", "SLAM Algorithms"],
      url: "#project-2"
    },
    {
      title: "Aerodynamics CFD Analysis",
      category: "Aerodynamics",
      description: "Conducted computational fluid dynamics simulations to optimize vehicle aerodynamics and reduce drag coefficient.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      tags: ["CFD Simulation", "Drag Reduction", "Performance Enhancement"],
      url: "#project-3"
    },
    {
      title: "Advanced Driver Assistance System",
      category: "Autonomous Systems",
      description: "Designed and implemented an integrated ADAS with lane keeping, adaptive cruise control, and collision avoidance features.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Sensor Fusion", "Real-time Processing", "Safety Systems"],
      url: "#project-4"
    },
    {
      title: "Sports Car Engine Optimization",
      category: "Automotive Design",
      description: "Redesigned engine components to improve power output while maintaining fuel efficiency and emissions standards.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
      tags: ["Engine Design", "Performance Tuning", "Emissions Control"],
      url: "#project-5"
    },
    {
      title: "Hybrid Powertrain Development",
      category: "Electric Vehicles",
      description: "Created an innovative hybrid powertrain solution combining electric motors with a compact internal combustion engine.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Hybrid Technology", "Energy Management", "Power Electronics"],
      url: "#project-6"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section id="projects" className="bg-engineer-950 text-white">
      <div className="text-center mb-16 reveal">
        <span className="inline-block mb-3 py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium">
          Portfolio
        </span>
        <h2 className="mb-4 text-white">Featured <span className="text-gradient">Projects</span></h2>
        <p className="max-w-2xl mx-auto text-engineer-300">
          Discover my most significant engineering contributions across electric vehicles, autonomous systems, and advanced automotive design.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
        {projectCategories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "primary" : "outline"}
            size="sm"
            className={activeCategory === category ? "" : "bg-white/5 border-white/10 text-white hover:bg-white/10"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
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
    </Section>
  );
};

export default Projects;
