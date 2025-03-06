
import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
  variant?: 'default' | 'dark' | 'darker' | 'gradient';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children, 
  fullWidth = false,
  variant = 'default'
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    if (reveals) {
      reveals.forEach((el) => observer.observe(el));
    }

    return () => {
      if (reveals) {
        reveals.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  // Different background styles based on variant
  const variantStyles = {
    default: 'bg-dark-800',
    dark: 'bg-dark-900',
    darker: 'bg-black',
    gradient: 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700'
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'w-full py-16 md:py-24 relative',
        variantStyles[variant],
        className
      )}
    >
      {/* Grid lines for futuristic effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 240, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className={fullWidth ? 'w-full' : 'section-container'}>
        {children}
      </div>
      
      {/* Tech line at the bottom of section */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="tech-line"></div>
      </div>
    </section>
  );
};

export default Section;
