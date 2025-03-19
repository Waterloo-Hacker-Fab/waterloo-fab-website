
import React from 'react';
import { cn } from '@/lib/utils';

interface TechnicalDiagramProps {
  className?: string;
}

const TechnicalDiagram: React.FC<TechnicalDiagramProps> = ({ className }) => {
  return (
    <div className={cn("w-full max-w-lg mx-auto", className)}>
      <svg
        viewBox="0 0 500 400"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        stroke="white"
        fill="none"
        strokeWidth="1"
      >
        {/* Base platform */}
        <circle cx="250" cy="350" r="40" />
        <circle cx="250" cy="350" r="35" strokeDasharray="4,2" />
        
        {/* Support rods */}
        <line x1="220" y1="320" x2="220" y2="150" />
        <line x1="280" y1="320" x2="280" y2="150" />
        <line x1="240" y1="330" x2="240" y2="170" />
        <line x1="260" y1="330" x2="260" y2="170" />
        
        {/* Top platform */}
        <circle cx="250" cy="130" r="35" />
        <circle cx="250" cy="130" r="30" strokeDasharray="4,2" />
        
        {/* Components on top */}
        <circle cx="230" cy="115" r="8" />
        <circle cx="270" cy="115" r="8" />
        <rect x="240" y="125" width="20" height="15" />
        
        {/* Bolts */}
        <circle cx="220" cy="350" r="5" />
        <circle cx="280" cy="350" r="5" />
        <circle cx="220" cy="130" r="5" />
        <circle cx="280" cy="130" r="5" />
        
        {/* Detail lines */}
        <line x1="230" y1="95" x2="230" y2="65" />
        <line x1="270" y1="95" x2="270" y2="65" />
        <rect x="225" y="50" width="10" height="15" />
        <rect x="265" y="50" width="10" height="15" />
        
        {/* Measurement marks */}
        <line x1="310" y1="130" x2="320" y2="130" />
        <line x1="310" y1="350" x2="320" y2="350" />
        <line x1="315" y1="130" x2="315" y2="350" />
        <text x="325" y="240" fill="white" fontSize="10" fontFamily="monospace">220mm</text>
      </svg>
    </div>
  );
};

export default TechnicalDiagram;
