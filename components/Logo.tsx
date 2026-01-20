import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-blue-600';

  return (
    <div className={`flex items-center ${className}`}>
      <span className={`font-black text-3xl tracking-tighter leading-none ${textColor}`}>
        BYN
      </span>
    </div>
  );
};