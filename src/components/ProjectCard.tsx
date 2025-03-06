
import React from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  description,
  image,
  tags,
  url = "#",
  className,
}) => {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-lg transition-all duration-500 card-hover',
      className
    )}>
      <div className="relative aspect-w-16 aspect-h-12 overflow-hidden blur-load" style={{ backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAA+ElEQVR42mP4DwQMQMzIAAEgNgHhXiDNDKRBkAXdRGZk1Ywcm9UZmfazMzJsYWHk2s/JyLwHhJkYWXcAJdiB4iCwWntZ4e11+edPlOf/v1qR/39nXfa/dQXJvxdmBZ4GyjEBxUFilrqs03My/P7PTgv5PzU+8H9TYdr/gszoP+ne1qeAcixAcZB4j4fF7PTowP/to/P/N7UV/i/IT/hfleH/Ptpe9yRQjgUoPhPIfHVXy/8z4/3/Lywt+F9blvl/QVn8/zBX4xNAOVagyDyg1OcrO0r/n1rQ+H/1vOr/K7pL/zcW5/z38zI5AZRjB4r7APETgJgZAAC/OKCVsoTbTAAAAABJRU5ErkJggg==)' }}>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onLoad={(e) => e.currentTarget.parentElement?.classList.add('loaded')}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-800/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
          <div className="text-xs font-mono uppercase tracking-wider mb-1 text-accent-blue">{category}</div>
          <h3 className="text-xl font-semibold mb-3 font-display">{title}</h3>
          <p className="mb-4 text-dark-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs py-1 px-2 rounded-full bg-dark-600 text-dark-100 font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={url} 
            className="inline-flex items-center text-sm font-medium text-accent-blue hover:text-accent-purple transition-colors"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
      
      {/* Futuristic corner detail */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-accent-blue/20 rotate-45 transform origin-bottom-left"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
