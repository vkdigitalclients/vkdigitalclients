import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  colored?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, colored = false }) => {
  return (
    <section id={id} className={`py-12 md:py-24 ${colored ? 'bg-slate-50' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};