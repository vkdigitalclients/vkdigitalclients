import React from 'react';
import { Network } from 'lucide-react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  const textColor = variant === 'white' ? 'text-white' : 'text-slate-900';
  const iconColor = variant === 'white' ? 'text-blue-400' : 'text-blue-600';
  const bgClass = variant === 'white' ? 'bg-white/10' : 'bg-blue-50';

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`p-2 rounded-lg ${bgClass}`}>
        <Network className={`w-6 h-6 ${iconColor}`} strokeWidth={2.5} />
      </div>
      <div className={`flex flex-col justify-center ${textColor}`}>
        <span className="font-extrabold text-xl tracking-tight leading-none">BYN</span>
        <span className={`text-[0.6rem] font-bold tracking-widest uppercase mt-0.5 ${variant === 'white' ? 'text-slate-400' : 'text-slate-500'}`}>
          Build Your Network
        </span>
      </div>
    </div>
  );
};