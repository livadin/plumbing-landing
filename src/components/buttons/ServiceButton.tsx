import React from 'react';
import { Phone } from 'lucide-react';

interface ServiceButtonProps {
  phoneNumber?: string;
  onRequestClick?: () => void;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({
  phoneNumber = '123-456-7890',
  onRequestClick,
}) => {
  return (
    <div className="flex shadow-[0_10px_20px_rgba(0,0,0,0.5)] rounded-md overflow-hidden max-w-fit transform transition-transform hover:scale-105 cursor-pointer font-sans select-none border border-white/10">
      <div 
        onClick={onRequestClick}
        className="
          relative z-10 
          bg-gradient-to-b from-[#2E93EA] via-[#0060BA] to-[#004890]
          px-6 sm:px-10 py-3 sm:py-4
          flex items-center justify-center
          border-r border-black/30
        "
      >
        <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
        
        <span className="relative z-20 text-white font-bold text-lg sm:text-2xl uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)] tracking-tight">
          Request Service
        </span>
      </div>
      <a 
        href={`tel:${phoneNumber.replace(/-/g, '')}`}
        className="
          relative z-0
          bg-gradient-to-b from-[#0F2D53] to-[#051325]
          px-5 sm:px-8 py-2
          flex items-center gap-3
          group
        "
      >
        <Phone className="text-white w-6 h-6 sm:w-8 sm:h-8 fill-white drop-shadow-md" />
        
        <div className="flex flex-col items-start leading-none justify-center">
          <span className="text-[10px] sm:text-xs text-blue-200 uppercase font-bold tracking-wider mb-0.5">
            Call-Now
          </span>
          <span className="text-white font-bold text-xl sm:text-2xl tracking-wide drop-shadow-md">
            {phoneNumber}
          </span>
        </div>
      </a>
    </div>
  );
};

export default ServiceButton;