// src/components/Loader.tsx

import React from 'react';
import logo from '/Logo.png'; // Import your PNG logo

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  isVisible: boolean; // Prop to control visibility
}

const Loader: React.FC<LoaderProps> = ({ size = 'md', isVisible }) => {
  const loaderSizeClass =
    size === 'sm' ? 'w-16 h-16' : size === 'md' ? 'w-32 h-32' : 'w-48 h-48';

  if (!isVisible) {
    return null; // Don't render the loader if isVisible is false
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-[#060606] flex justify-center items-center z-50"
      style={{
        opacity: 1,
        animation: 'fadeInOut 1.5s ease-in-out infinite',
      }}
    >
      <img src={logo} alt="Loading Logo" className={`${loaderSizeClass}`} />
    </div>
  );
};

// Define the keyframes directly within a <style> tag (not ideal for large scale)
const animationStyles = `
  @keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const LoaderWithStyles: React.FC<LoaderProps> = (props) => (
  <>
    <style>{animationStyles}</style>
    <Loader {...props} />
  </>
);

export default LoaderWithStyles;

