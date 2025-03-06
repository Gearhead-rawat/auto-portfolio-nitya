
import React from 'react';
import Section from './Section';
import { Code, Database, Fan, Cpu, Wrench, Car, ActivitySquare, LineChart, Rocket, Clover, Cog, Laptop } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    {
      title: "Computer-Aided Design",
      icon: Wrench,
      description: "Expert in CAD software for designing precise automotive components and systems.",
      software: ["AutoCAD", "SolidWorks", "CATIA", "Fusion 360"]
    },
    {
      title: "Finite Element Analysis",
      icon: ActivitySquare,
      description: "Advanced structural analysis and optimization for vehicle safety and performance in extreme conditions.",
      software: ["ANSYS", "Abaqus", "Nastran", "Hypermesh"]
    },
    {
      title: "Computational Fluid Dynamics",
      icon: Fan,
      description: "Simulation of airflow and thermal dynamics to enhance vehicle aerodynamics and propulsion efficiency.",
      software: ["ANSYS Fluent", "OpenFOAM", "Star-CCM+", "FloEFD"]
    },
    {
      title: "Autonomous Systems",
      icon: Car,
      description: "Development of self-driving technologies and advanced driver assistance systems for future mobility.",
      software: ["ROS", "MATLAB", "Simulink", "CARLA Simulator"]
    }
  ];
  
  const technicalSkills = [
    {
      title: "Python Programming",
      icon: Code,
      description: "Data analysis, automation scripts, and machine learning for predictive modeling in vehicle systems.",
      software: ["NumPy", "Pandas", "TensorFlow", "PyTorch"]
    },
    {
      title: "C++ Development",
      icon: Cpu,
      description: "Performance-critical applications and embedded systems programming for real-time control systems.",
      software: ["Visual Studio", "Qt", "CMake", "Embedded C++"]
    },
    {
      title: "Control Systems",
      icon: Cog,
      description: "Design of feedback control systems for vehicle stability and autonomous navigation applications.",
      software: ["MATLAB", "Simulink", "LabVIEW", "dSPACE"]
    },
    {
      title: "Data Analysis",
      icon: LineChart,
      description: "Processing and visualization of vehicle test data for performance optimization and validation.",
      software: ["Excel", "Tableau", "Power BI", "JMP"]
    }
  ];

  const SkillItem = ({ title, icon: Icon, description, software }) => (
    <div className="p-6 rounded-lg border border-dark-600 bg-dark-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 card-hover h-full">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-dark-600 rounded-lg mr-4 text-accent-blue">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold font-display truncate">{title}</h3>
      </div>
      <p className="text-dark-200 mb-4 line-clamp-3">{description}</p>
      
      <div className="mt-2">
        <div className="mb-2 text-sm font-mono text-accent-blue">
          Software & Tools
        </div>
        <div className="flex flex-wrap gap-2">
          {software.map((item, idx) => (
            <span key={idx} className="px-3 py-1 text-sm bg-dark-600 rounded-full text-white truncate">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Section id="skills" variant="dark">
      <div className="text-center mb-16 reveal">
        <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
          Technical Expertise
        </span>
        <h2 className="mb-4 font-display">Advanced <span className="text-gradient">Engineering</span> Capabilities</h2>
        <p className="max-w-2xl mx-auto text-dark-200">
          Combining mechanical engineering with cutting-edge technology to create innovative automotive solutions.
        </p>
      </div>
      
      <div className="space-y-16">
        <div className="reveal">
          <h3 className="text-2xl font-semibold mb-8 font-display flex items-center">
            <Wrench className="mr-2 text-accent-blue" /> Core Engineering Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <SkillItem 
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                software={skill.software}
              />
            ))}
          </div>
        </div>
        
        <div className="reveal">
          <h3 className="text-2xl font-semibold mb-8 font-display flex items-center">
            <Laptop className="mr-2 text-accent-purple" /> Technical & Programming Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillItem 
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                software={skill.software}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
