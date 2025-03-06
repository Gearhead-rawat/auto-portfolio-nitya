
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
      'p-6 rounded-lg border border-engineer-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-engineer-200',
      className
    )}>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-engineer-50 rounded-lg mr-4">
          <Icon className="h-6 w-6 text-accent-blue" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-engineer-700 mb-4">{description}</p>
      
      {proficiency > 0 && (
        <div className="mt-2">
          <div className="flex justify-between mb-1 text-sm">
            <span>Proficiency</span>
            <span>{proficiency}%</span>
          </div>
          <div className="w-full h-2 bg-engineer-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent-blue to-accent-red"
              style={{ width: `${proficiency}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
