// src/components/Loader.tsx
import React, { useEffect, useRef, useState } from 'react';
import logo from '/Logo.png';

interface LoaderProps {
  isVisible: boolean;
  transitionDuration?: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  loadingText?: string;
  accentColor?: 'white' | 'platinum' | 'blue' | 'amber' | 'emerald' | 'violet';
  progress?: number | null; // Optional progress indicator (0-100)
  showPercentage?: boolean; // Show progress percentage
  blurLevel?: 'none' | 'sm' | 'md' | 'lg'; // Background blur level
  backgroundColor?: string; // Custom background color
}

const Loader: React.FC<LoaderProps> = ({ 
  isVisible, 
  transitionDuration = 800,
  size = 'md',
  loadingText = "INITIALIZING",
  accentColor = 'white',
  progress = null,
  showPercentage = false,
  blurLevel = 'md',
  backgroundColor = 'rgba(0, 0, 0, 0.95)'
}) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);

  // Configuration with responsive design
  const config = {
    sizes: {
      xs: { 
        logo: 64, 
        text: 'text-xs', 
        spacing: 'mt-4',
        progressHeight: 1
      },
      sm: { 
        logo: 96, 
        text: 'text-sm', 
        spacing: 'mt-5',
        progressHeight: 1.5
      },
      md: { 
        logo: 128, 
        text: 'text-base', 
        spacing: 'mt-6',
        progressHeight: 2
      },
      lg: { 
        logo: 160, 
        text: 'text-lg', 
        spacing: 'mt-8',
        progressHeight: 2.5
      },
      xl: { 
        logo: 192, 
        text: 'text-xl', 
        spacing: 'mt-10',
        progressHeight: 3
      }
    },
    colors: {
      white: { 
        primary: '#ffffff', 
        secondary: 'rgba(255,255,255,0.85)',
        tertiary: 'rgba(255,255,255,0.6)'
      },
      platinum: { 
        primary: '#e5e4e2', 
        secondary: 'rgba(229,228,226,0.85)',
        tertiary: 'rgba(229,228,226,0.6)'
      },
      blue: { 
        primary: '#3b82f6', 
        secondary: 'rgba(59,130,246,0.85)',
        tertiary: 'rgba(59,130,246,0.6)'
      },
      amber: { 
        primary: '#f59e0b', 
        secondary: 'rgba(245,158,11,0.85)',
        tertiary: 'rgba(245,158,11,0.6)'
      },
      emerald: {
        primary: '#10b981',
        secondary: 'rgba(16,185,129,0.85)',
        tertiary: 'rgba(16,185,129,0.6)'
      },
      violet: {
        primary: '#8b5cf6',
        secondary: 'rgba(139,92,246,0.85)',
        tertiary: 'rgba(139,92,246,0.6)'
      }
    },
    blur: {
      none: '',
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg'
    }
  };

  // Handle progress animation
  useEffect(() => {
    if (progress !== null && progressRef.current) {
      const targetWidth = Math.min(Math.max(progress, 0), 100);
      setProgressWidth(targetWidth);
    }
  }, [progress]);

  // Handle mount/unmount transitions
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    if (isVisible) {
      setIsMounted(true);
      document.body.style.overflow = 'hidden';
      
      timers.push(setTimeout(() => {
        if (logoContainerRef.current) {
          logoContainerRef.current.style.opacity = '1';
          logoContainerRef.current.style.transform = 'translateY(0) scale(1)';
        }
      }, 50));
    } else {
      if (loaderRef.current) {
        loaderRef.current.style.opacity = '0';
      }
      
      timers.push(setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = '';
      }, transitionDuration));
    }

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isVisible, transitionDuration]);

  if (!isMounted) return null;

  return (
    <div 
      ref={loaderRef}
      role="status"
      aria-live="polite"
      aria-busy={isVisible}
      aria-label="Loading content"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-700 ${config.blur[blurLevel]}`}
      style={{
        backgroundColor: backgroundColor,
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
      }}
    >
      {/* Logo Container */}
      <div 
        ref={logoContainerRef}
        className="relative flex flex-col items-center justify-center opacity-0 transform translate-y-8 scale-95 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          willChange: 'opacity, transform'
        }}
      >
        {/* Logo with subtle pulse animation */}
        <div className="relative group">
          <img
            src={logoError ? '/fallback-logo.png' : logo}
            alt="Loading"
            className="object-contain transition-all duration-500 group-hover:scale-[1.02]"
            style={{
              width: `${config.sizes[size].logo}px`,
              height: `${config.sizes[size].logo}px`,
              animation: 'logoPulse 2s ease-in-out infinite',
              animationPlayState: isVisible ? 'running' : 'paused'
            }}
            onError={() => setLogoError(true)}
          />
        </div>

        {/* Progress Indicator - either animated or controlled */}
        {progress === null ? (
          <div 
            className="relative mt-8 w-full overflow-hidden"
            style={{ 
              width: `${config.sizes[size].logo}px`,
              height: `${config.sizes[size].progressHeight}px`,
              borderRadius: `${config.sizes[size].progressHeight}px`
            }}
          >
            <div 
              className="absolute h-full rounded-full"
              style={{
                width: '100%',
                backgroundColor: config.colors[accentColor].primary,
                opacity: 0.2
              }}
            />
            <div 
              className="absolute h-full rounded-full"
              style={{
                width: '100%',
                backgroundColor: config.colors[accentColor].primary,
                animation: 'progressWave 2.4s cubic-bezier(0.65,0,0.35,1) infinite',
                opacity: 0.7
              }}
            />
            <div 
              className="absolute h-full rounded-full"
              style={{
                width: '30%',
                backgroundColor: config.colors[accentColor].primary,
                animation: 'progressPulse 2.4s cubic-bezier(0.65,0,0.35,1) infinite',
                filter: 'blur(1px)',
                opacity: 0.9
              }}
            />
          </div>
        ) : (
          <div 
            ref={progressRef}
            className="relative mt-8 w-full overflow-hidden"
            style={{ 
              width: `${config.sizes[size].logo}px`,
              height: `${config.sizes[size].progressHeight}px`,
              borderRadius: `${config.sizes[size].progressHeight}px`,
              backgroundColor: `${config.colors[accentColor].tertiary}20`
            }}
          >
            <div 
              className="absolute h-full rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${progressWidth}%`,
                backgroundColor: config.colors[accentColor].primary,
                boxShadow: `0 0 8px ${config.colors[accentColor].primary}`
              }}
            />
            {showPercentage && (
              <div 
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs font-medium"
                style={{
                  color: config.colors[accentColor].primary,
                  textShadow: `0 0 4px ${config.colors[accentColor].tertiary}`
                }}
              >
                {progressWidth}%
              </div>
            )}
          </div>
        )}
      </div>

      {/* Loading Text with optional progress */}
      <div className={`${config.sizes[size].spacing} relative overflow-hidden`}>
        <div className="flex flex-col items-center">
          <p 
            className={`${config.sizes[size].text} font-medium tracking-wider text-center uppercase`}
            style={{
              color: config.colors[accentColor].secondary,
              opacity: 0,
              animation: 'textFadeIn 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
              letterSpacing: '0.15em'
            }}
          >
            {loadingText}
          </p>
          <div 
            className="absolute bottom-0 left-0 h-px transition-all duration-1000"
            style={{
              width: '0%',
              backgroundColor: config.colors[accentColor].tertiary,
              animation: 'textUnderlineExpand 1.6s cubic-bezier(0.65,0,0.35,1) 0.6s forwards'
            }}
          />
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.03); opacity: 0.9; }
        }
        @keyframes progressWave {
          0% { transform: translateX(-100%) scaleX(0.8); opacity: 0.7; }
          60% { transform: translateX(0%) scaleX(1); opacity: 1; }
          100% { transform: translateX(100%) scaleX(0.8); opacity: 0.7; }
        }
        @keyframes progressPulse {
          0% { transform: translateX(-100%) scaleX(1); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateX(333%) scaleX(1); opacity: 0; }
        }
        @keyframes textFadeIn {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes textUnderlineExpand {
          0% { width: 0%; left: 50%; }
          100% { width: 100%; left: 0%; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"], [class*="transition"] {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;