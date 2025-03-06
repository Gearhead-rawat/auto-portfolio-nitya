
import React from 'react';
import Section from './Section';
import SkillCard from './SkillCard';
import { Code, Database, Fan, Cpu, Wrench, Car, ActivitySquare, LineChart, Rocket, Clover, Cog, Laptop } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    {
      title: "Computer-Aided Design",
      icon: Wrench,
      description: "Expert in CAD software for designing precise automotive and aerospace components and systems.",
      proficiency: 95
    },
    {
      title: "Finite Element Analysis",
      icon: ActivitySquare,
      description: "Advanced structural analysis and optimization for vehicle safety and performance in extreme conditions.",
      proficiency: 90
    },
    {
      title: "Computational Fluid Dynamics",
      icon: Fan,
      description: "Simulation of airflow and thermal dynamics to enhance vehicle aerodynamics and propulsion efficiency.",
      proficiency: 85
    },
    {
      title: "Autonomous Systems",
      icon: Car,
      description: "Development of self-driving technologies and advanced driver assistance systems for future mobility.",
      proficiency: 80
    }
  ];
  
  const technicalSkills = [
    {
      title: "Python Programming",
      icon: Code,
      description: "Data analysis, automation scripts, and machine learning for predictive modeling in vehicle systems.",
      proficiency: 88
    },
    {
      title: "C++ Development",
      icon: Cpu,
      description: "Performance-critical applications and embedded systems programming for real-time control systems.",
      proficiency: 82
    },
    {
      title: "Aerospace Engineering",
      icon: Rocket,
      description: "Design and analysis of aircraft components with focus on aerodynamics and propulsion systems.",
      proficiency: 85
    },
    {
      title: "Control Systems",
      icon: Cog,
      description: "Design of feedback control systems for vehicle stability and autonomous navigation applications.",
      proficiency: 75
    }
  ];

  return (
    <Section id="skills" variant="dark">
      <div className="text-center mb-16 reveal">
        <span className="inline-block mb-3 py-1 px-3 rounded-full bg-dark-700 text-accent-blue text-sm font-mono tracking-wider">
          Technical Expertise
        </span>
        <h2 className="mb-4 font-display">Advanced <span className="text-gradient">Engineering</span> Capabilities</h2>
        <p className="max-w-2xl mx-auto text-dark-200">
          Combining mechanical engineering with cutting-edge technology to create innovative automotive and aerospace solutions.
        </p>
      </div>
      
      {/* Skill Radar Chart */}
      <div className="flex justify-center mb-16 reveal">
        <div className="relative h-64 w-64 md:h-80 md:w-80">
          {/* Base Circle */}
          <div className="absolute inset-0 rounded-full border border-dark-600"></div>
          <div className="absolute inset-[15%] rounded-full border border-dark-600"></div>
          <div className="absolute inset-[30%] rounded-full border border-dark-600"></div>
          <div className="absolute inset-[45%] rounded-full border border-dark-600"></div>
          <div className="absolute inset-[60%] rounded-full border border-dark-600"></div>
          <div className="absolute inset-[75%] rounded-full border border-dark-600 animate-pulse"></div>
          
          {/* Skill Points */}
          <div className="absolute top-0 left-[50%] -translate-x-1/2 transform -translate-y-1/2 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-blue"></div>
            <div className="h-[76%] w-0.5 bg-accent-blue/30"></div>
            <p className="text-xs text-accent-blue font-mono mt-1">CAD</p>
          </div>
          
          <div className="absolute top-[25%] right-[10%] flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
            <div className="h-[72%] w-0.5 bg-accent-purple/30"></div>
            <p className="text-xs text-accent-purple font-mono mt-1">FEA</p>
          </div>
          
          <div className="absolute bottom-[25%] right-[10%] flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-red"></div>
            <div className="h-[68%] w-0.5 bg-accent-red/30"></div>
            <p className="text-xs text-accent-red font-mono mt-1">CFD</p>
          </div>
          
          <div className="absolute bottom-0 left-[50%] -translate-x-1/2 transform translate-y-1/2 flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-green"></div>
            <div className="h-[64%] w-0.5 bg-accent-green/30"></div>
            <p className="text-xs text-accent-green font-mono mt-1">AI</p>
          </div>
          
          <div className="absolute bottom-[25%] left-[10%] flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-blue"></div>
            <div className="h-[70%] w-0.5 bg-accent-blue/30"></div>
            <p className="text-xs text-accent-blue font-mono mt-1">Python</p>
          </div>
          
          <div className="absolute top-[25%] left-[10%] flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-accent-purple"></div>
            <div className="h-[60%] w-0.5 bg-accent-purple/30"></div>
            <p className="text-xs text-accent-purple font-mono mt-1">C++</p>
          </div>
          
          {/* Center Point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent-blue rounded-full animate-pulse"></div>
          
          {/* Polygon Shape connecting points */}
          <div className="absolute inset-0" style={{ 
            clipPath: 'polygon(50% 0%, 90% 25%, 90% 75%, 50% 100%, 10% 75%, 10% 25%)',
            background: 'linear-gradient(180deg, rgba(0, 240, 255, 0.2) 0%, rgba(138, 43, 226, 0.2) 100%)',
            opacity: 0.3
          }}></div>
        </div>
      </div>
      
      <div className="space-y-16">
        <div className="reveal">
          <h3 className="text-2xl font-semibold mb-8 font-display flex items-center">
            <Wrench className="mr-2 text-accent-blue" /> Core Engineering Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreSkills.map((skill, index) => (
              <SkillCard 
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                proficiency={skill.proficiency}
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
              <SkillCard 
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                proficiency={skill.proficiency}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
