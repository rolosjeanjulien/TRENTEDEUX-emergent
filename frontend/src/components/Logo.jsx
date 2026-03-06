import React from 'react';

export const Logo = ({ className = "" }) => {
  return (
    <div className={`logo-container ${className}`}>
      <h1 className="logo-text">
        <span className="logo-trente">Trente</span>
        <span className="logo-separator"> </span>
        <span className="logo-deux">Deux</span>
      </h1>
    </div>
  );
};
