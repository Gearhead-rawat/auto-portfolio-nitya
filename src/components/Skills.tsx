
import React from 'react';
import Section from './Section';
import SkillCard from './SkillCard';
import { Code, Database, Fan, Cpu, Wrench, Car, ActivitySquare, LineChart } from 'lucide-react';

const Skills = () => {
  const coreSkills = [
    {
      title: "Computer-Aided Design",
      icon: Wrench,
      description: "Expert in CAD software for designing precise automotive components and systems.",
      proficiency: 95
    },
    {
      title: "Finite Element Analysis",
      icon: ActivitySquare,
      description: "Advanced structural analysis and optimization for vehicle safety and performance.",
      proficiency: 90
    },
    {
      title: "Computational Fluid Dynamics",
      icon: Fan,
      description: "Simulation of airflow and thermal dynamics to enhance vehicle aerodynamics.",
      proficiency: 85
    },
    {
      title: "Autonomous Systems",
      icon: Car,
      description: "Development of self-driving technologies and advanced driver assistance systems.",
      proficiency: 80
    }
  ];
  
  const technicalSkills = [
    {
      title: "Python Programming",
      icon: Code,
      description: "Data analysis, automation scripts, and machine learning for automotive applications.",
      proficiency: 88
    },
    {
      title: "C++ Development",
      icon: Cpu,
      description: "Performance-critical applications and embedded systems programming.",
      proficiency: 82
    },
    {
      title: "Data Analytics",
      icon: LineChart,
      description: "Vehicle performance analytics and predictive maintenance solutions.",
      proficiency: 78
    },
    {
      title: "Embedded Systems",
      icon: Database,
      description: "Design and implementation of electronic control units and sensor networks.",
      proficiency: 75
    }
  ];

  return (
    <Section id="skills" className="bg-engineer-50">
      <div className="text-center mb-16 reveal">
        <span className="inline-block mb-3 py-1 px-3 rounded-full bg-engineer-100 text-engineer-700 text-sm font-medium">
          My Expertise
        </span>
        <h2 className="mb-4">Technical <span className="text-gradient">Skills</span> & Competencies</h2>
        <p className="max-w-2xl mx-auto text-engineer-700">
          Combining mechanical engineering with cutting-edge technology to create innovative automotive solutions.
        </p>
      </div>
      
      <div className="space-y-16">
        <div className="reveal">
          <h3 className="text-2xl font-semibold mb-8">Core Engineering Skills</h3>
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
          <h3 className="text-2xl font-semibold mb-8">Technical & Programming Skills</h3>
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
