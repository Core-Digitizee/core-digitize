// src/components/Loader.tsx
import React, { useEffect, useRef } from 'react';
import logo from '/Logo.png';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  isVisible: boolean;
  message?: string;
  particleCount?: number;
  showProgress?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  isVisible,
  message = 'Loading...',
  particleCount = 120,
  showProgress = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const loaderSizeClass = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64'
  }[size];

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle system
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      color: `rgba(255, 80, 4, ${Math.random() * 0.5 + 0.1})`,
      orbitRadius: Math.random() * 150 + 50,
      angle: Math.random() * Math.PI * 2
    }));

    let animationFrameId: number;
    let progress = 0;

    const animate = () => {
      ctx.fillStyle = '#060606';
      ctx.globalAlpha = 0.15;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;

      // Update and draw particles
      particles.forEach(particle => {
        // Orbit animation
        particle.angle += 0.005;
        particle.x = canvas.width / 2 + Math.cos(particle.angle) * particle.orbitRadius;
        particle.y = canvas.height / 2 + Math.sin(particle.angle) * particle.orbitRadius;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Connection lines
        if (Math.random() > 0.97) {
          particles.forEach(p => {
            const distance = Math.sqrt(
              Math.pow(particle.x - p.x, 2) + Math.pow(particle.y - p.y, 2)
            );
            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(p.x, p.y);
              ctx.strokeStyle = `rgba(255, 80, 4, ${0.2 - distance / 750})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        }
      });

      // Update progress bar if enabled
      if (showProgress && progressRef.current) {
        progress = (progress + 0.5) % 100;
        progressRef.current.style.width = `${Math.min(progress, 99)}%`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, particleCount, showProgress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-[#060606] flex flex-col justify-center items-center z-[9999] overflow-hidden">
      {/* Canvas for particle effects */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main loader container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 3D effect container */}
        <div className="relative perspective-1000">
          {/* Logo with 3D rotation */}
          <div className={`${loaderSizeClass} relative transform-style-preserve-3d animate-rotate-3d`}>
            <img
              src={logo}
              alt="Loading Logo"
              className="w-full h-full object-contain transform translate-z-20"
            />
            <div className="absolute inset-0 border-4 border-[#ff5004] rounded-full opacity-70 transform translate-z-10" />
            <div className="absolute inset-0 bg-[#ff5004] rounded-full blur-xl opacity-20 transform translate-z-0" />
          </div>

          {/* Floating particles around logo */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-[#ff5004] animate-float"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: '50%',
                left: '50%',
                opacity: Math.random() * 0.5 + 0.3,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg) translate(${
                  (Math.random() * 60 + 40) * (i % 2 ? 1 : -1)
                }px)`
              }}
            />
          ))}
        </div>

        {/* Loading message */}
        {message && (
          <div className="mt-8 text-center">
            <p className="text-white text-xl font-medium tracking-wider animate-pulse">
              {message.split('').map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '2s'
                  }}
                >
                  {char}
                </span>
              ))}
            </p>
          </div>
        )}

        {/* Advanced progress indicator */}
        {showProgress && (
          <div className="w-64 h-2 bg-[#ffffff10] rounded-full mt-8 overflow-hidden relative">
            <div
              ref={progressRef}
              className="h-full bg-gradient-to-r from-[#ff5004] to-[#ff9004] rounded-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-30 animate-shimmer" />
            </div>
            <div className="absolute inset-0 border border-[#ffffff20] rounded-full pointer-events-none" />
          </div>
        )}
      </div>

      {/* Footer with loading stats (simulated) */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="text-[#ffffff60] text-sm font-mono flex space-x-4">
          <span className="animate-pulse">SYSTEM INITIALIZED</span>
          <span>|</span>
          <span className="animate-pulse">MEMORY: {Math.floor(Math.random() * 80 + 20)}%</span>
          <span>|</span>
          <span className="animate-pulse">LOADING ASSETS...</span>
        </div>
      </div>
    </div>
  );
};

const animationStyles = `
  @keyframes rotate-3d {
    0% { transform: rotateY(0deg) rotateX(10deg); }
    100% { transform: rotateY(360deg) rotateX(10deg); }
  }
  
  @keyframes float {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
    50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.4; }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes pulse-opacity {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
  
  @keyframes char-wave {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(-10px); opacity: 0.8; }
  }
  
  .animate-rotate-3d {
    animation: rotate-3d 8s linear infinite;
  }
  
  .animate-float {
    animation: float var(--duration) ease-in-out infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s linear infinite;
  }
  
  .animate-pulse span {
    display: inline-block;
    animation: char-wave 2s ease-in-out infinite;
  }
`;

const LoaderWithStyles: React.FC<LoaderProps> = (props) => (
  <>
    <style>{animationStyles}</style>
    <Loader {...props} />
  </>
);

export default LoaderWithStyles;