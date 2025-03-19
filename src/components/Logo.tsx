
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("border border-hacker-light p-4 inline-block", className)}>
      <div className="text-xs mb-2 flex justify-between">
        <span>EST.</span>
        <span>2024</span>
      </div>
      <div className="text-4xl font-bold mb-2">HF</div>
      <div className="text-xs">WATERLOO</div>
    </div>
  );
};

export default Logo;
