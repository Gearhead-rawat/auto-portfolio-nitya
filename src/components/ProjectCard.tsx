
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      'group relative overflow-hidden rounded-lg transition-all duration-500',
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
        <div className="absolute inset-0 bg-gradient-to-t from-engineer-950/80 via-engineer-950/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
          <div className="text-xs font-medium uppercase tracking-wider mb-1 text-engineer-300">{category}</div>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="mb-4 text-engineer-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs py-1 px-2 rounded-full bg-white/10 text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <a 
            href={url} 
            className="inline-flex items-center text-sm font-medium text-white hover:text-accent-blue transition-colors"
          >
            View Project <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
