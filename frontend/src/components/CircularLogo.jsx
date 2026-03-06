import React from 'react';
import './CircularLogo.css';

export const CircularLogo = ({ size = 48, className = '' }) => {
  const viewBox = 200;
  const center = viewBox / 2;
  const radius = 85;

  return (
    <div 
      className={`circular-logo ${className}`} 
      style={{ width: size, height: size }}
      data-testid="circular-logo"
    >
      <svg 
        viewBox={`0 0 ${viewBox} ${viewBox}`} 
        width="100%" 
        height="100%"
      >
        <defs>
          {/* Top arc path */}
          <path
            id="topArc"
            d={`M ${center - radius},${center} A ${radius},${radius} 0 0,1 ${center + radius},${center}`}
            fill="none"
          />
          {/* Bottom arc path */}
          <path
            id="bottomArc"
            d={`M ${center + radius},${center} A ${radius},${radius} 0 0,1 ${center - radius},${center}`}
            fill="none"
          />
        </defs>

        {/* Rotating outer ring */}
        <g className="circular-logo__ring">
          {/* Subtle circle border */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#F5F1E9"
            strokeWidth="0.5"
            opacity="0.3"
          />

          {/* Top text: TRENTE DEUX */}
          <text fill="#F5F1E9" style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', letterSpacing: '0.35em' }}>
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              TRENTE DEUX
            </textPath>
          </text>

          {/* Bottom text: MAISON DE STRUCTURATION STRATÉGIQUE */}
          <text fill="#F5F1E9" style={{ fontFamily: "'Playfair Display', serif", fontSize: '7.5px', letterSpacing: '0.2em' }}>
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              MAISON DE STRUCTURATION STRATÉGIQUE
            </textPath>
          </text>

          {/* Separator dots */}
          <circle cx={center - radius} cy={center} r="1.5" fill="#F5F1E9" opacity="0.6" />
          <circle cx={center + radius} cy={center} r="1.5" fill="#F5F1E9" opacity="0.6" />
        </g>

        {/* Fixed center: 32 */}
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#F5F1E9"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: '400', letterSpacing: '0.05em' }}
        >
          32
        </text>
      </svg>
    </div>
  );
};
