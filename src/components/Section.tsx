
import React, { ReactNode, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className, children, fullWidth = false }) => {
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

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn('w-full py-16 md:py-24', className)}
    >
      <div className={fullWidth ? 'w-full' : 'section-container'}>
        {children}
      </div>
    </section>
  );
};

export default Section;
