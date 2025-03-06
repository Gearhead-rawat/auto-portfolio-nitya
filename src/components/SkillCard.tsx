
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  proficiency?: number;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon: Icon,
  description,
  proficiency = 0,
  className,
}) => {
  return (
    <div className={cn(
      'p-6 rounded-lg border border-dark-600 bg-dark-700/50 shadow-lg backdrop-blur-sm transition-all duration-300 card-hover',
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-dark-600 rounded-lg mr-4 text-accent-blue">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold font-display">{title}</h3>
      </div>
      <p className="text-dark-200 mb-4">{description}</p>
      
      {proficiency > 0 && (
        <div className="mt-2">
          <div className="flex justify-between mb-1 text-sm font-mono">
            <span>Proficiency</span>
            <span className="text-accent-blue">{proficiency}%</span>
          </div>
          <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
              style={{ width: `${proficiency}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
