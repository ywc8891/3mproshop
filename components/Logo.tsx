
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <svg 
      viewBox="0 0 300 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="3M Pro Shop Logo"
    >
      <style>
        {`
          .three-m { font-family: Arial, Helvetica, sans-serif; font-weight: 900; font-size: 50px; }
          .pro-shop { font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 24px; letter-spacing: 0.05em; }
          .managed-by { font-family: Arial, Helvetica, sans-serif; font-size: 10px; letter-spacing: 0.1em; }
        `}
      </style>
      <text x="5" y="50" fill="#D10411" className="three-m">3M</text>
      <text x="135" y="45" fill="white" className="pro-shop">PRO SHOP</text>
      <line x1="135" y1="58" x2="285" y2="58" stroke="white" strokeWidth="1" />
      <text x="135" y="75" fill="white" className="managed-by">
        MANAGED BY <tspan fill="#33C1EC">P10X</tspan>
      </text>
    </svg>
  );
};

export default Logo;
