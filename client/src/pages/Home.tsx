import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// Custom scrollbar styles in a global style component
const GlobalStyles = () => (
  <style>{`
    /* Premium Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(10, 10, 10, 0.8);
      border-radius: 10px;
      border: 1px solid rgba(255, 80, 4, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(45deg, #ff5004, #ff732e);
      border-radius: 10px;
      border: 1px solid rgba(10, 10, 10, 0.3);
      transition: all 0.3s ease;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(45deg, #ff6120, #ff8440);
      width: 10px;
    }
    ::-webkit-scrollbar-corner {
      background: rgba(10, 10, 10, 0.8);
    }
    
    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
    
    /* Initial scroll lock */
    body.scroll-lock {
      overflow: hidden;
    }
  `}</style>
);

export default function Home() {
  const [fullScrollEnabled, setFullScrollEnabled] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Set initial styles when component mounts
  useEffect(() => {
    document.body.classList.add('scroll-lock');
    return () => {
      document.body.classList.remove('scroll-lock');
    };
  }, []);

  const handleExplore = () => {
    setFullScrollEnabled(true);
    document.body.classList.remove('scroll-lock');
    
    // Smooth scroll to About Us section with slight delay
    setTimeout(() => {
      aboutUsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  // Make hero section exactly viewport height
  useEffect(() => {
    const setHeroHeight = () => {
      if (heroRef.current) {
        heroRef.current.style.height = `${window.innerHeight}px`;
      }
    };

    setHeroHeight();
    window.addEventListener('resize', setHeroHeight);
    return () => window.removeEventListener('resize', setHeroHeight);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#060606] text-white relative">
      <GlobalStyles />
    
      {/* Hero Section - Fixed height to viewport */}
      <div ref={heroRef} className="overflow-hidden relative">
        <HeroSection 
          onExplore={handleExplore} 
          showScrollButton={!fullScrollEnabled} 
        />
      </div>

      {/* Rest of the content - conditionally shown based on scroll state */}
      <div style={{ display: fullScrollEnabled ? 'block' : 'none' }}>
        <div ref={aboutUsRef}>
          <AboutUsSection />
        </div>
        <OurServicesSection />
        <CaseStudiesSection />
        <TechStackSection />
        <TestimonialsSection />
        <CTASection />
      </div>

      {/* Subtle scroll indicator (only when full scroll isn't enabled) */}
      {!fullScrollEnabled && (
        <motion.div 
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 15, 30]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut"
          }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="w-6 h-6 border-r-2 border-b-2 border-[#ff5004] transform rotate-45 mb-1"
              animate={{
                y: [0, 5, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="w-3 h-3 border-r-2 border-b-2 border-[#ff5004] transform rotate-45"
              animate={{
                y: [0, 5, 0],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}

function HeroSection({ onExplore, showScrollButton }: { onExplore: () => void; showScrollButton: boolean }) {
  const navigate = useNavigate();
  const [activeDept, setActiveDept] = useState(0);
  const departments = ['Marketing', 'Media', 'Development', 'Animation'];
  const [hoveredDept, setHoveredDept] = useState<number | null>(null);

  // Color themes for each department
  const departmentThemes = [
    { primary: '#ff5004', secondary: '#ff732e', bg: '#161616' }, // Marketing
    { primary: '#ff5004', secondary: '#ff9557', bg: '#161616' }, // Media
    { primary: '#ff5004', secondary: '#ffb780', bg: '#161616' }, // Development
    { primary: '#ff5004', secondary: '#ffd9aa', bg: '#161616' }  // Animation
  ];

  // Auto-rotate departments
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDept((prev) => (prev + 1) % departments.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleStartJourney = () => navigate('/contact');
  const handleViewPortfolio = () => navigate('/portfolio');

  return (
    <section className="relative h-full bg-[#060606] overflow-hidden">
      {/* Advanced 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* 3D Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(to right, #ff5004 1px, transparent 1px), linear-gradient(to bottom, #ff5004 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 120,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* 3D Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#ff5004]"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2 + 0.05
              }}
              animate={{
                y: [0, -Math.random() * 150 - 50],
                x: [0, (Math.random() > 0.5 ? 1 : -1) * Math.random() * 50],
                opacity: [0.1, 0.4, 0],
                transition: {
                  duration: Math.random() * 20 + 15,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 8
                }
              }}
            />
          ))}
        </div>

        {/* 3D Floating Shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff5004]/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff5004]/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* 3D Floating Cubes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#ff5004]/20 rounded-lg"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transformStyle: 'preserve-3d',
              transform: 'rotateX(45deg) rotateY(45deg)'
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, 360],
              transition: {
                duration: Math.random() * 30 + 30,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Column - Static Content */}
          <div className="space-y-8 relative">
            {/* Company Identity */}
            <motion.div 
              className="mb-12 flex items-center gap-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >

            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight"
            >
              <span className="block mb-4">Digital Transformation</span>
              <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                Powered by Innovation
              </span>
            </motion.h1>

            {/* Dynamic Description */}
            <motion.div 
              key={activeDept}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="min-h-[120px]"
            >
              {activeDept === 0 && (
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Our <span className="text-[#ff5004] font-semibold">data-driven marketing solutions</span> combine AI analytics with conversion optimization to deliver measurable business growth.
                </p>
              )}
              {activeDept === 1 && (
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  <span className="text-[#ff9557] font-semibold">High-impact media production</span> with cinematic storytelling, motion graphics, and strategic content distribution.
                </p>
              )}
              {activeDept === 2 && (
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  <span className="text-[#ffb780] font-semibold">Cutting-edge development</span> with scalable architecture, cloud-native solutions, and robust APIs.
                </p>
              )}
              {activeDept === 3 && (
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  <span className="text-[#ffd9aa] font-semibold">Immersive animations</span> that bring ideas to life through motion design, 3D modeling, and interactive experiences.
                </p>
              )}
            </motion.div>

            {/* Department Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {departments.map((dept, index) => {
                const colors = departmentThemes[index];
                return (
                  <motion.button
                    key={dept}
                    whileHover={{ 
                      y: -3,
                      scale: 1.05,
                      backgroundColor: colors.primary,
                      boxShadow: `0 8px 20px -5px ${colors.primary}80`
                    }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredDept(index)}
                    onMouseLeave={() => setHoveredDept(null)}
                    onClick={() => setActiveDept(index)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                      activeDept === index
                        ? `text-white`
                        : 'bg-[#ffffff08] text-white/80 hover:bg-[#ffffff15]'
                    }`}
                    style={{
                      backgroundColor: activeDept === index ? colors.primary : undefined,
                      boxShadow: activeDept === index ? `0 8px 20px -5px ${colors.primary}80` : 'none',
                      transformStyle: 'preserve-3d',
                      transform: hoveredDept === index ? 'translateZ(10px)' : 'translateZ(0)'
                    }}
                  >
                    {dept === 'Marketing' && (
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          rotateY: hoveredDept === index ? 360 : 0
                        }}
                        transition={{
                          duration: 0.6
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </motion.svg>
                    )}
                    {dept === 'Media' && (
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          rotateY: hoveredDept === index ? 360 : 0
                        }}
                        transition={{
                          duration: 0.6
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </motion.svg>
                    )}
                    {dept === 'Development' && (
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          rotateY: hoveredDept === index ? 360 : 0
                        }}
                        transition={{
                          duration: 0.6
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </motion.svg>
                    )}
                    {dept === 'Animation' && (
                      <motion.svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{
                          rotateY: hoveredDept === index ? 360 : 0
                        }}
                        transition={{
                          duration: 0.6
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </motion.svg>
                    )}
                    {dept}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgba(255, 80, 4, 0.5)',
                  transform: 'translateZ(10px)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartJourney}
                className="px-8 py-4 bg-gradient-to-r from-[#ff5004] to-[#ff732e] hover:from-[#ff6120] hover:to-[#ff8440] text-white font-semibold rounded-xl
                           transition-all duration-300 shadow-lg shadow-[#ff5004]/30
                           flex items-center gap-3 group"
              >
                <motion.span
                  animate={{
                    x: [0, 5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.span>
                Start Your Digital Journey
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgba(255, 80, 4, 0.2)',
                  transform: 'translateZ(10px)'
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewPortfolio}
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                           font-semibold rounded-xl transition-all duration-300 backdrop-blur-lg bg-white/5
                           flex items-center gap-3 group"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View Our Portfolio
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - 3D Professional Department Visualizations */}
          <div className="relative h-[600px] flex items-center justify-center overflow-hidden perspective-1000">
            {/* Marketing - Advanced Analytics Dashboard */}
            <motion.div
              className={`absolute w-full max-w-2xl ${activeDept !== 0 ? 'opacity-0 pointer-events-none' : ''}`}
              initial={{ opacity: 0, x: 20, rotateY: 90 }}
              animate={{ 
                opacity: activeDept === 0 ? 1 : 0, 
                x: activeDept === 0 ? 0 : 20,
                rotateY: activeDept === 0 ? 0 : 90
              }}
              transition={{ duration: 0.5 }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative h-[540px] bg-[#161616] rounded-2xl border border-[#ff5004]/20 overflow-hidden shadow-2xl transform-style-preserve-3d">
                {/* 3D Dashboard Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#ff5004]/5 rounded-2xl"
                  style={{
                    transform: 'translateZ(-20px)',
                    boxShadow: '0 0 50px rgba(255, 80, 4, 0.3)'
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                
                {/* Dashboard Header */}
                <div className="p-4 border-b border-[#ff5004]/10 flex justify-between items-center bg-[#0e0e0e]">
                  <div className="text-[#ff5004] font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Marketing Analytics Dashboard
                  </div>
                  <div className="text-xs text-white/50 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                    Live Data
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-4 grid grid-cols-2 gap-4 h-[calc(100%-56px)] overflow-auto">
                  {/* Campaign Performance */}
                  <div className="col-span-2 bg-[#0a0a0a] p-4 rounded-xl border border-[#ff5004]/10 transform-style-preserve-3d">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-[#ff5004] text-sm font-medium">Campaign Performance</div>
                      <div className="text-xs text-white/50">Last 30 Days</div>
                    </div>
                    <div className="h-48 relative">
                      {/* 3D Chart Bars */}
                      {[
                        { name: 'Impressions', color: '#ff5004', values: [40, 60, 80, 65, 90, 110, 95, 120, 110, 130] },
                        { name: 'Clicks', color: '#ff9557', values: [20, 30, 45, 40, 60, 75, 65, 85, 70, 90] },
                        { name: 'Conversions', color: '#ffd9aa', values: [5, 10, 15, 12, 20, 25, 22, 30, 27, 35] }
                      ].map((metric, mi) => (
                        <div key={metric.name} className="absolute bottom-0 left-0 right-0">
                          {metric.values.map((val, i) => (
                            <motion.div
                              key={i}
                              className="absolute bottom-0 w-2 rounded-t-sm"
                              style={{ 
                                left: `${i * 9 + 2}%`,
                                backgroundColor: metric.color,
                                zIndex: 3 - mi,
                                transformOrigin: 'bottom',
                                transformStyle: 'preserve-3d'
                              }}
                              initial={{ height: 0, rotateX: 90 }}
                              animate={{ height: `${val}px`, rotateX: 0 }}
                              transition={{ duration: 0.8, delay: i * 0.05 + mi * 0.1 }}
                            />
                          ))}
                        </div>
                      ))}
                      
                      {/* X-axis labels */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[8px] text-white/50">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((month, i) => (
                          <div key={month} style={{ left: `${i * 9 + 2}%` }} className="absolute transform -translate-x-1/2">
                            {month}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex justify-center gap-4 mt-4">
                      {['Impressions', 'Clicks', 'Conversions'].map((item, i) => (
                        <motion.div 
                          key={item} 
                          className="flex items-center gap-1.5"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-2 h-2 rounded-full" style={{
                            backgroundColor: i === 0 ? '#ff5004' : i === 1 ? '#ff9557' : '#ffd9aa'
                          }} />
                          <span className="text-xs text-white/70">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* ROI Metrics */}
                  <div className="bg-[#0a0a0a] p-4 rounded-xl border border-[#ff5004]/10 transform-style-preserve-3d">
                    <div className="text-[#ff5004] text-sm font-medium mb-3">ROI Metrics</div>
                    <div className="space-y-4">
                      {[
                        { name: 'CTR', value: '3.2%', change: '+12%', positive: true },
                        { name: 'Conversion', value: '1.8%', change: '+5%', positive: true },
                        { name: 'CPA', value: '$24.50', change: '-8%', positive: false },
                        { name: 'ROAS', value: '4.2x', change: '+15%', positive: true }
                      ].map((metric, i) => (
                        <motion.div 
                          key={metric.name}
                          className="flex justify-between items-center"
                          initial={{ opacity: 0, x: -10, rotateX: 90 }}
                          animate={{ opacity: 1, x: 0, rotateX: 0 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <span className="text-xs text-white/70">{metric.name}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-white">{metric.value}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${metric.positive ? 'bg-[#00ff88]/10 text-[#00ff88]' : 'bg-[#ff0000]/10 text-[#ff0000]'}`}>
                              {metric.change}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Audience Demographics */}
                  <div className="bg-[#0a0a0a] p-4 rounded-xl border border-[#ff5004]/10 transform-style-preserve-3d">
                    <div className="text-[#ff5004] text-sm font-medium mb-3">Audience</div>
                    <div className="h-36 flex items-end justify-center gap-1">
                      {[
                        { age: '18-24', value: 35, color: '#ff5004' },
                        { age: '25-34', value: 60, color: '#ff732e' },
                        { age: '35-44', value: 45, color: '#ff9557' },
                        { age: '45-54', value: 30, color: '#ffb780' },
                        { age: '55+', value: 20, color: '#ffd9aa' }
                      ].map((demo, i) => (
                        <div key={demo.age} className="flex flex-col items-center">
                          <motion.div
                            className="w-6 rounded-t-sm"
                            style={{ backgroundColor: demo.color }}
                            initial={{ height: 0, rotateX: 90 }}
                            animate={{ height: `${demo.value}%`, rotateX: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                          />
                          <span className="text-[8px] text-white/50 mt-1">{demo.age}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Top Channels */}
                  <div className="col-span-2 bg-[#0a0a0a] p-4 rounded-xl border border-[#ff5004]/10 transform-style-preserve-3d">
                    <div className="text-[#ff5004] text-sm font-medium mb-3">Top Performing Channels</div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { channel: 'Google Ads', value: '$24,500', percent: 42 },
                        { channel: 'Facebook', value: '$18,200', percent: 31 },
                        { channel: 'Instagram', value: '$9,800', percent: 17 },
                        { channel: 'LinkedIn', value: '$3,500', percent: 6 },
                        { channel: 'Twitter', value: '$2,100', percent: 4 }
                      ].map((channel, i) => (
                        <motion.div
                          key={channel.channel}
                          className="col-span-1"
                          initial={{ opacity: 0, y: 10, rotateX: 90 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                        >
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-white/70">{channel.channel}</span>
                            <span className="text-white">{channel.value}</span>
                          </div>
                          <div className="w-full bg-[#ffffff10] h-1 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ backgroundColor: i === 0 ? '#ff5004' : i === 1 ? '#ff9557' : i === 2 ? '#ffb780' : '#ffd9aa' }}
                              initial={{ width: 0 }}
                              animate={{ width: `${channel.percent}%` }}
                              transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Media - Professional Video Production Suite */}
            <motion.div
              className={`absolute w-full max-w-2xl ${activeDept !== 1 ? 'opacity-0 pointer-events-none' : ''}`}
              initial={{ opacity: 0, x: 20, rotateY: 90 }}
              animate={{ 
                opacity: activeDept === 1 ? 1 : 0, 
                x: activeDept === 1 ? 0 : 20,
                rotateY: activeDept === 1 ? 0 : 90
              }}
              transition={{ duration: 0.5 }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative h-[540px] bg-[#161616] rounded-2xl border border-[#ff9557]/20 overflow-hidden shadow-2xl">
                {/* 3D Editor Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#ff9557]/5 rounded-2xl"
                  style={{
                    transform: 'translateZ(-20px)',
                    boxShadow: '0 0 50px rgba(255, 149, 87, 0.3)'
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                
                {/* Editor Header */}
                <div className="p-4 border-b border-[#ff9557]/10 flex justify-between items-center bg-[#0e0e0e]">
                  <div className="text-[#ff9557] font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Video Production Suite
                  </div>
                  <div className="text-xs text-white/50 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                    Recording
                  </div>
                </div>
                
                {/* 3D Preview Monitor */}
                <div className="m-4 bg-black rounded-xl overflow-hidden relative h-64 border border-[#ff9557]/20 transform-style-preserve-3d">
                  {/* Video Preview */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ff9557]/10 to-[#161616]">
                    <motion.div 
                      className="w-24 h-24 bg-[#ff9557] rounded-full flex items-center justify-center text-3xl shadow-xl"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        boxShadow: ['0 0 0 0 rgba(255, 149, 87, 0.4)', '0 0 0 10px rgba(255, 149, 87, 0)', '0 0 0 0 rgba(255, 149, 87, 0)'],
                        rotateY: [0, 180, 360]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }}
                    >
                      ▶
                    </motion.div>
                  </div>
                  
                  {/* Camera Indicators */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="text-xs text-white">REC</div>
                  </div>
                  
                  {/* Timecode */}
                  <div className="absolute bottom-3 left-3 text-xs text-white font-mono bg-black/50 px-2 py-1 rounded">
                    01:23:45:12
                  </div>
                  
                  {/* Audio Levels */}
                  <div className="absolute bottom-3 right-3 w-20 h-6 bg-[#00000080] backdrop-blur-sm rounded border border-[#ff9557]/30 p-1 flex items-end gap-0.5">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 rounded-sm bg-[#ff9557]"
                        style={{ height: `${Math.random() * 80 + 20}%` }}
                        animate={{ height: [`${Math.random() * 20 + 10}%`, `${Math.random() * 80 + 20}%`] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* 3D Timeline */}
                <div className="m-4 bg-[#0a0a0a] rounded-xl border border-[#ff9557]/10 p-3 transform-style-preserve-3d">
                  <div className="relative h-10">
                    {/* Track */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ffffff20] transform -translate-y-1/2"></div>
                    
                    {/* Clips */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex">
                      {[
                        { name: 'Intro', color: '#ff5004', duration: 15 },
                        { name: 'Interview', color: '#ff9557', duration: 45 },
                        { name: 'B-Roll', color: '#ffb780', duration: 30 },
                        { name: 'Outro', color: '#ffd9aa', duration: 15 }
                      ].map((clip, i) => (
                        <motion.div
                          key={clip.name}
                          className="h-full flex items-center justify-center text-xs overflow-hidden"
                          style={{ 
                            width: `${clip.duration}%`,
                            backgroundColor: `${clip.color}20`,
                            borderRight: '1px solid #ffffff10',
                            transformStyle: 'preserve-3d'
                          }}
                          initial={{ opacity: 0, rotateX: 90 }}
                          animate={{ opacity: 1, rotateX: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                        >
                          <span className="text-white/70">{clip.name}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Playhead */}
                    <motion.div 
                      className="absolute top-0 bottom-0 w-0.5 bg-[#ff9557]"
                      initial={{ left: '0%' }}
                      animate={{ left: '100%' }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-[#ff9557] rounded-full"></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* 3D Controls */}
                <div className="m-4 flex justify-between items-center transform-style-preserve-3d">
                  <div className="flex gap-3">
                    {['⏮', '⏪', '⏸', '⏩', '⏭'].map((control, i) => (
                      <motion.button
                        key={i}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xl bg-[#0a0a0a] border border-[#ff9557]/20 hover:border-[#ff9557] text-[#ff9557]"
                        whileHover={{ scale: 1.1, rotateY: 20 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {control}
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {['🎚️', '🎛️', '🎚️'].map((tool, i) => (
                      <motion.button
                        key={i}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-sm bg-[#0a0a0a] border border-[#ff9557]/20 hover:border-[#ff9557] text-[#ff9557]"
                        whileHover={{ scale: 1.05, rotateY: 20 }}
                      >
                        {tool}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Development - 3D Code Editor with Live Preview */}
            <motion.div
              className={`absolute w-full max-w-2xl ${activeDept !== 2 ? 'opacity-0 pointer-events-none' : ''}`}
              initial={{ opacity: 0, x: 20, rotateY: 90 }}
              animate={{ 
                opacity: activeDept === 2 ? 1 : 0, 
                x: activeDept === 2 ? 0 : 20,
                rotateY: activeDept === 2 ? 0 : 90
              }}
              transition={{ duration: 0.5 }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative h-[540px] bg-[#161616] rounded-2xl border border-[#ffb780]/20 overflow-hidden shadow-2xl">
                {/* 3D Editor Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#ffb780]/5 rounded-2xl"
                  style={{
                    transform: 'translateZ(-20px)',
                    boxShadow: '0 0 50px rgba(255, 183, 128, 0.3)'
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                
                {/* Editor Tabs */}
                <div className="p-2 border-b border-[#ffb780]/10 flex bg-[#0e0e0e]">
                  {["app.js", "styles.css", "package.json", "terminal"].map((file, i) => (
                    <motion.div 
                      key={file}
                      className={`px-4 py-1.5 text-xs rounded-md mr-1 flex items-center gap-1 ${
                        i === 0 ? 'bg-[#ffb780]/10 text-[#ffb780]' : 'text-white/50 hover:text-white/80'
                      }`}
                      whileHover={{ backgroundColor: '#ffffff08', rotateY: 20 }}
                    >
                      {file === 'app.js' && (
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                      {file}
                      {i < 2 && <span className="ml-1 text-white/30">●</span>}
                    </motion.div>
                  ))}
                </div>
                
                {/* Editor Content */}
                <div className="flex h-[calc(100%-40px)] transform-style-preserve-3d">
                  {/* 3D Line Numbers */}
                  <div className="w-10 bg-[#0a0a0a] text-right text-xs text-white/30 font-mono p-1 border-r border-[#ffb780]/10">
                    {[...Array(20)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className="h-5 leading-5"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.02 }}
                      >
                        {i + 1}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* 3D Code */}
                  <div className="flex-1 overflow-auto font-mono text-sm p-2">
                    <div className="text-[#ffb780] mb-2">// core-digitize-app.js</div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ staggerChildren: 0.1 }}
                    >
                      <motion.div 
                        className="text-[#569cd6]"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                      >
                        <span className="text-[#9cdcfe]">import</span> React <span className="text-[#9cdcfe]">from</span> <span className="text-[#ce9178]">'react'</span>;
                      </motion.div>
                      <motion.div 
                        className="text-[#569cd6]"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <span className="text-[#9cdcfe]">import</span> { '{' } <span className="text-[#9cdcfe]">useState</span>, <span className="text-[#9cdcfe]">useEffect</span> { '}' } <span className="text-[#9cdcfe]">from</span> <span className="text-[#ce9178]">'react'</span>;
                      </motion.div>
                      <div className="h-4"></div>
                      <motion.div 
                        className="text-[#569cd6]"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="text-[#9cdcfe]">const</span> <span className="text-[#4ec9b0]">CoreDigitize</span> = () = { '{' }
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-4"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="text-[#569cd6]">const</span> [<span className="text-[#9cdcfe]">data</span>, <span className="text-[#9cdcfe]">setData</span>] = <span className="text-[#dcdcaa]">useState</span>(<span className="text-[#569cd6]">null</span>);
                      </motion.div>
                      <div className="h-2"></div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-4"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-[#569cd6]">useEffect</span>(() = { '{' }
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-8"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-[#569cd6]">const</span> <span className="text-[#dcdcaa]">fetchData</span> = <span className="text-[#569cd6]">async</span> () = { '{' }
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <span className="text-[#569cd6]">try</span> { '{' }
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">response</span> = <span className="text-[#569cd6]">await</span> <span className="text-[#dcdcaa]">fetch</span>(<span className="text-[#ce9178]">'/api/data'</span>);
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <span className="text-[#569cd6]">const</span> <span className="text-[#9cdcfe]">jsonData</span> = <span className="text-[#569cd6]">await</span> <span className="text-[#9cdcfe]">response</span>.<span className="text-[#dcdcaa]">json</span>();
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <span className="text-[#dcdcaa]">setData</span>(<span className="text-[#9cdcfe]">jsonData</span>);
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <span className="text-[#569cd6]"> catch</span> (<span className="text-[#9cdcfe]">error</span>) { '{' }
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <span className="text-[#dcdcaa]">console</span>.<span className="text-[#dcdcaa]">error</span>(<span className="text-[#ce9178]">'Error fetching data:'</span>, <span className="text-[#9cdcfe]">error</span>);
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        {'}'}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-8"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.3 }}
                      >
                        {'}'};
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-8"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        <span className="text-[#dcdcaa]">fetchData</span>();
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-4"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        {'}'}, []);
                      </motion.div>
                      <div className="h-2"></div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-4"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.6 }}
                      >
                        <span className="text-[#569cd6]">return</span> (
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-8"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.7 }}
                      >
                        {`<div className="app">`}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.8 }}
                      >
                        {`<h1>Digital Solutions</h1>`}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 1.9 }}
                      >
                        {"{data} ? ("}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.0 }}
                      >
                        {"<DataDisplay data={data} />"}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.1 }}
                      >
                        {") : ("}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-16"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.2 }}
                      >
                        {"<LoadingSpinner />"}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-12"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.3 }}
                      >
                        {")"}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-8"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.4 }}
                      >
                        {"</div>"}
                      </motion.div>
                      <motion.div 
                        className="text-[#9cdcfe] ml-4"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.5 }}
                      >
                        );
                      </motion.div>
                      <motion.div 
                        className="text-[#569cd6]"
                        initial={{ x: -20, rotateX: 90 }}
                        animate={{ x: 0, rotateX: 0 }}
                        transition={{ delay: 2.6 }}
                      >
                        {'}'};
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
                
                {/* 3D Terminal */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#0a0a0a] border-t border-[#ffb780]/10 p-2 transform-style-preserve-3d">
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-[#ffb780] rounded-full mr-2"></div>
                    <div className="text-xs text-[#ffb780]">Terminal</div>
                  </div>
                  <div className="font-mono text-xs h-16 overflow-auto">
                    <div className="text-[#ffb780]">$ npm start</div>
                    <div className="text-white"> core-digitize-app@1.0.0 start</div>
                    <div className="text-white"> react-scripts start</div>
                    <div className="text-white mt-1">ℹ ｢wds｣: Project is running at http://192.168.1.100/</div>
                    <div className="text-white">ℹ ｢wds｣: webpack output is served from /</div>
                    <div className="text-[#00ff88]">ℹ ｢wdm｣: Compiled successfully.</div>
                    <motion.div 
                      className="flex items-center mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3 }}
                    >
                      <div className="text-[#ffb780]">$ </div>
                      <motion.div
                        className="ml-1 bg-[#ffb780] h-4"
                        style={{ width: 8 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                        }}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Animation - 3D Animation Studio */}
            <motion.div
              className={`absolute w-full max-w-2xl ${activeDept !== 3 ? 'opacity-0 pointer-events-none' : ''}`}
              initial={{ opacity: 0, x: 20, rotateY: 90 }}
              animate={{ 
                opacity: activeDept === 3 ? 1 : 0, 
                x: activeDept === 3 ? 0 : 20,
                rotateY: activeDept === 3 ? 0 : 90
              }}
              transition={{ duration: 0.5 }}
              style={{
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="relative h-[540px] bg-[#161616] rounded-2xl border border-[#ffd9aa]/20 overflow-hidden shadow-2xl">
                {/* 3D Animation Effect */}
                <motion.div 
                  className="absolute inset-0 bg-[#ffd9aa]/5 rounded-2xl"
                  style={{
                    transform: 'translateZ(-20px)',
                    boxShadow: '0 0 50px rgba(255, 217, 170, 0.3)'
                  }}
                  animate={{
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
                
                {/* Tool Header */}
                <div className="p-4 border-b border-[#ffd9aa]/10 flex justify-between items-center bg-[#0e0e0e]">
                  <div className="text-[#ffd9aa] font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    Animation Studio
                  </div>
                  <div className="text-xs text-white/50 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00ff88] rounded-full"></div>
                    Rendering
                  </div>
                </div>
                
                {/* 3D Animation Canvas */}
                <div className="m-4 h-64 bg-gradient-to-br from-[#ffd9aa]/10 to-[#161616] rounded-xl overflow-hidden relative border border-[#ffd9aa]/20 transform-style-preserve-3d">
                  {/* Animated Character */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32"
                    animate={{
                      rotateY: [0, 180, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {/* Character Head */}
                    <motion.div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#ff5004] rounded-full"
                      animate={{
                        y: [0, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Eyes */}
                      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white rounded-full"></div>
                    </motion.div>
                    
                    {/* Character Body */}
                    <motion.div 
                      className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-16 bg-[#ff9557] rounded-b-lg"
                      animate={{
                        scaleY: [1, 0.9, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {/* Arms */}
                      <motion.div 
                        className="absolute top-2 -left-4 w-4 h-8 bg-[#ffb780] rounded-lg"
                        animate={{
                          rotateZ: [0, 30, 0, -30, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute top-2 -right-4 w-4 h-8 bg-[#ffb780] rounded-lg"
                        animate={{
                          rotateZ: [0, -30, 0, 30, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animation Timeline */}
                  <div className="absolute bottom-2 left-2 right-2 h-8 bg-[#00000090] backdrop-blur-sm rounded-lg p-1 flex items-center transform-style-preserve-3d">
                    <motion.div 
                      className="h-6 bg-[#ffd9aa] rounded-full w-2 absolute"
                      animate={{
                        left: ['0%', '100%', '0%']
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="h-full w-px bg-[#ffffff30] mx-1"></div>
                    ))}
                  </div>
                  
                  {/* Animation Controls */}
                  <div className="absolute top-2 left-2 bg-[#00000090] backdrop-blur-sm rounded-lg p-1 shadow-sm transform-style-preserve-3d">
                    {['▶️', '⏸️', '⏹️', '🔄'].map((tool, i) => (
                      <motion.button
                        key={i}
                        className="w-8 h-8 flex items-center justify-center text-sm m-1 rounded hover:bg-[#ffffff20]"
                        whileHover={{ scale: 1.1, rotateY: 20 }}
                      >
                        {tool}
                      </motion.button>
                    ))}
                  </div>
                  
                  {/* Keyframe Panel */}
                  <div className="absolute top-2 right-2 w-24 bg-[#00000090] backdrop-blur-sm rounded-lg p-2 shadow-sm transform-style-preserve-3d">
                    <div className="text-xs font-medium mb-1 text-[#ffd9aa]">Keyframes</div>
                    {['Position', 'Rotation', 'Scale', 'Opacity'].map((frame, i) => (
                      <motion.div
                        key={frame}
                        className="text-xs py-1 px-1 rounded hover:bg-[#ffffff20] cursor-pointer flex items-center"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <div className="w-2 h-2 rounded-full mr-1" style={{ backgroundColor: i === 0 ? '#ff5004' : i === 1 ? '#ff9557' : i === 2 ? '#ffb780' : '#ffd9aa' }} />
                        {frame}
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* 3D Animation Properties */}
                <div className="m-4 bg-[#0a0a0a] rounded-xl border border-[#ffd9aa]/10 p-3 transform-style-preserve-3d">
                  <div className="text-xs text-[#ffd9aa] mb-2">Animation Properties</div>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'Duration', value: '2.5s' },
                      { name: 'Easing', value: 'easeInOut' },
                      { name: 'Delay', value: '0s' },
                      { name: 'Iterations', value: 'Infinite' }
                    ].map((prop, i) => (
                      <motion.div
                        key={prop.name}
                        className="col-span-1 text-xs text-white/80 bg-[#ffffff05] p-2 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <div className="text-[#ffd9aa]">{prop.name}</div>
                        <div>{prop.value}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Premium Scroll Down Indicator - conditionally rendered */}
      {showScrollButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          onClick={onExplore}
          className="absolute bottom-15 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <motion.div
            className="flex flex-col items-center"
            animate={{
              y: [0, 15, 0],
              transition: {
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              className="relative group"
              whileHover="hover"
              whileTap="tap"
              variants={{
                hover: { y: -5 },
                tap: { scale: 0.95 }
              }}
            >
              {/* Main button with gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff5004] to-[#ff8c00] blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <motion.button
                className="relative px-8 py-3 rounded-full bg-gradient-to-b from-[#161616] to-[#0a0a0a] border border-transparent group-hover:border-[#ff5004]/50 backdrop-blur-lg overflow-hidden"
                variants={{
                  hover: { 
                    boxShadow: '0 10px 30px -5px rgba(255, 80, 4, 0.4)',
                  }
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ff5004]/10 to-[#ff8c00]/10 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  variants={{
                    hover: { 
                      x: '100%',
                      transition: {
                        duration: 1.5,
                        ease: "linear"
                      }
                    }
                  }}
                />
                
                {/* Content */}
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-[#ff5004] font-medium text-sm sm:text-base tracking-wide">
                    Discover More
                  </span>
                  <motion.div
                    animate={{
                      y: [0, 5, 0],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <svg 
                      className="w-5 h-5 text-[#ff5004]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        initial={{ pathLength: 0 }}
                        animate={{
                          pathLength: [0, 1, 0],
                          opacity: [0.8, 1, 0.8],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }
                        }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>

            {/* Subtle pulsing dot */}
            <motion.div
              className="w-2 h-2 mt-2 rounded-full bg-[#ff5004]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
        </motion.div>
      </motion.div>
      )}
    </section>
  );
}

const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/about');
  };

  const handleViewTeam = () => {
    navigate('/team');
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4"
            >
              Who We Are
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              Driven by Innovation, Defined by Results
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              At Core Digitize, we are more than just a technology company – we are a collective of passionate innovators, strategic thinkers, and meticulous engineers dedicated to crafting exceptional digital experiences.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              Founded on the principles of quality, integrity, and client-centricity, we strive to build long-lasting partnerships that drive sustainable growth.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLearnMore}
                className="px-6 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewTeam}
                className="px-6 py-3 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-lg transition-all backdrop-blur-lg bg-white/5"
              >
                Our Team
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="About Us" 
                className="w-full h-auto object-cover" 
                style={{ minHeight: '400px' }} 
              />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navigate = useNavigate();

  // Throttle mouse move events for better performance
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isHovering) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, mouseX, mouseY]);

  const categories = [
    {
      title: "Marketing",
      services: [
        { name: "Social Media Marketing", icon: "📱" },
        { name: "Google Ads", icon: "🔍" },
        { name: "Meta Ads", icon: "👍" },
        { name: "Email Marketing", icon: "✉️" },
        { name: "Whatsapp Marketing", icon: "💬" },
        { name: "Performance Marketing", icon: "📊" },
        { name: "Influencer Marketing", icon: "🌟" },
        { name: "Content Marketing", icon: "🖋️" }
      ]
    },
    {
      title: "Media",
      services: [
        { name: "Videography", icon: "🎥" },
        { name: "Video Editing", icon: "✂️" },
        { name: "Photography", icon: "📸" },
        { name: "Photo Editing", icon: "🎨" },
        { name: "Product Shoots", icon: "📦" },
        { name: "Commercial Shoots", icon: "💼" },
        { name: "Branding", icon: "🏷️" },
        { name: "Graphic Design", icon: "✏️" }
      ]
    },
    {
      title: "Technical",
      services: [
        { name: "Web Development", icon: "🌐" },
        { name: "App Development", icon: "📱" },
        { name: "Software Development", icon: "💻" },
        { name: "Landing Pages", icon: "🛬" },
        { name: "SEO", icon: "🔎" },
        { name: "CRM", icon: "🤝" },
        { name: "ERP", icon: "📈" }
      ]
    },
    {
      title: "Animation",
      services: [
        { name: "3D Animation", icon: "🎬" },
        { name: "2D Animation", icon: "🖌️" },
        { name: "3D Modeling", icon: "🧊" },
        { name: "Motion Graphics", icon: "🌀" },
        { name: "CGI Video", icon: "🎞️" },
        { name: "VFX Video", icon: "✨" },
        { name: "Whiteboard Animation", icon: "📝" }
      ]
    }
  ];

  const handleServiceClick = (serviceName: string) => {
    navigate(`/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleRequestProposal = () => {
    navigate('/contact?type=enterprise');
  };

  // Optimized glow position with will-change
  const glowX = useTransform(mouseX, val => val - 300);
  const glowY = useTransform(mouseY, val => val - 300);

  return (
    <section 
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative py-24 md:py-32 bg-[#060606] overflow-hidden"
    >
      {/* Static background elements */}
      <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,transparent_65%,rgba(255,80,4,0.03)_100%)] [background-size:60px_60px] pointer-events-none" />

      {/* Dynamic Glow - will-change for performance */}
      <motion.div
        className="absolute pointer-events-none rounded-full will-change-transform"
        style={{
          x: glowX,
          y: glowY,
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,80,4,0.15) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-28">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            DIGITAL EXCELLENCE
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Services</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Cutting-edge solutions engineered for measurable business impact
          </motion.p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="flex justify-center mb-12 md:mb-16 relative">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff5004]/20 to-[#ff8c00]/20 rounded-3xl blur-2xl opacity-20 pointer-events-none" />
            
            {/* Navigation Container */}
            <div className="relative inline-flex bg-[#161616] rounded-2xl p-1 sm:p-2 border border-[#ffffff10] shadow-lg shadow-black/50 overflow-hidden">
              {/* Active Background */}
              <motion.div
                className="absolute inset-0 bg-[#ffffff08] rounded-xl"
                initial={false}
                animate={{
                  x: `${activeCategory * 100}%`,
                  width: `${100 / categories.length}%`
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              
              {/* Navigation Items */}
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`relative px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl font-medium transition-colors z-10 ${
                    activeCategory === index ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                    {category.title}
                    {activeCategory === index && (
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Optimized Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <AnimatePresence mode="wait">
            {categories[activeCategory].services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.4, 
                    delay: index * 0.03,
                    ease: [0.16, 1, 0.3, 1] 
                  }
                }}
                exit={{ opacity: 0, y: -30 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onClick={() => handleServiceClick(service.name)}
                className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-[#ffffff10] bg-gradient-to-b from-[#161616] to-[#0d0d0d] hover:border-[#ff5004]/50 transition-all cursor-pointer will-change-transform"
                style={{
                  boxShadow: "inset 0 0 20px rgba(255, 80, 4, 0.1)",
                }}
              >
                {/* Content */}
                <div className="p-6 sm:p-8 h-full flex flex-col relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-2xl mb-4 sm:mb-6 text-[#ff5004] backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{service.name}</h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8">Premium {service.name.toLowerCase()} services with measurable impact</p>
                  <div className="mt-auto">
                    <button className="inline-flex items-center text-[#ff5004] hover:text-[#ff6120] group">
                      <span className="relative overflow-hidden text-sm sm:text-base">
                        <span className="absolute bottom-0 left-0 w-full h-px bg-[#ff5004] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                        Explore Service
                      </span>
                      <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </button>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div 
                    className="absolute inset-0 [background:linear-gradient(135deg,transparent_0%,rgba(255,80,4,0.03)_50%,transparent_100%)]"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute inset-0 border border-transparent"
                    initial={{ boxShadow: "inset 0 0 30px rgba(255, 80, 4, 0)" }}
                    whileHover={{ 
                      borderColor: "rgba(255, 80, 4, 0.4)",
                      boxShadow: "0 20px 40px -10px rgba(255, 80, 4, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Optimized CTA */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-[#ff5004] to-[#ff8c00] hover:shadow-lg hover:shadow-[#ff5004]/20 transition-shadow">
            <button 
              onClick={handleRequestProposal}
              className="relative overflow-hidden px-8 sm:px-12 py-3 sm:py-4 md:py-5 bg-[#060606] rounded-2xl group w-full"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
              <span className="relative z-10 flex items-center justify-center text-base sm:text-lg font-bold text-white">
                Get Custom Solution
                <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    navigate('/portfolio');
  };

  const handleCaseStudyClick = (id: string) => {
    navigate(`/case-studies/${id}`);
  };

  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Transformative <span className="text-[#ff5004]">Case Studies</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Real-world solutions that delivered measurable business impact
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewAllProjects}
              className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
            >
              View All Projects
            </motion.button>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div 
              className="relative h-[400px] w-full bg-[#161616] rounded-3xl overflow-hidden border border-[#ffffff10] cursor-pointer"
              onClick={() => handleCaseStudyClick('ecommerce-platform')}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#ff5004]/5 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                <h3 className="text-2xl font-medium mb-2">E-commerce Platform</h3>
                <p className="text-white/70 mb-4">300% revenue growth in 6 months</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-sm">AWS</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#ff5004]/5 rounded-full filter blur-[80px] z-0"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleCaseStudyClick(study.id)}
              className="bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-r from-[#ff5004]/10 to-[#060606] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-2">{study.title}</h3>
                <p className="text-white/70 mb-4">{study.description}</p>
                <div className="flex items-center text-[#ff5004]">
                  <span>Read case study</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Our Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Cutting-Edge <span className="text-[#ff5004]">Tech Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            We leverage the most advanced technologies to deliver exceptional results
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px -10px rgba(255, 80, 4, 0.3)"
                }}
                className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 bg-[#ffffff05] rounded-xl flex items-center justify-center">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-center">{tech.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Animated tech orb */}
          <motion.div 
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#ff5004]/10 filter blur-[100px] opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Trusted By <span className="text-[#ff5004]">Industry Leaders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#ff5004]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#ff5004]/10 flex items-center justify-center mr-4">
                  <span className="text-xl">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const navigate = useNavigate();

  const handleScheduleConsultation = () => {
    navigate('/contact?type=consultation');
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to <span className="text-[#ff5004]">Transform</span> Your Business?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScheduleConsultation}
                className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5"
              >
                Contact Our Team
              </motion.button>
            </div>
          </div>
          <motion.div 
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#ff5004] filter blur-[100px] opacity-20"
          />
        </motion.div>
      </div>
    </section>
  );
};

// Data
const caseStudies = [
  {
    id: "fintech-platform",
    title: "FinTech Platform Modernization",
    description: "Redesigned core banking system processing 1M+ transactions daily with 99.99% uptime."
  },
  {
    id: "healthcare-data",
    title: "Healthcare Data Integration",
    description: "Unified patient records across 50+ facilities while maintaining HIPAA compliance."
  }
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "TypeScript", icon: "📘" },
  { name: "AWS", icon: "☁️" },
  { name: "Kubernetes", icon: "⎈" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "GraphQL", icon: "📡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Solidity", icon: "Ξ" }
];

const testimonials = [
  {
    quote: "Core Digitize transformed our digital infrastructure, delivering a 300% performance improvement while reducing costs.",
    name: "Sarah Johnson",
    position: "CTO, FinTech Corp",
    initials: "SJ"
  },
  {
    quote: "Their team's expertise in AI integration helped us automate processes we thought were impossible to streamline.",
    name: "Michael Chen",
    position: "Product Director, HealthTech",
    initials: "MC"
  },
  {
    quote: "The most professional tech partner we've worked with. They delivered ahead of schedule and under budget.",
    name: "Emma Rodriguez",
    position: "CEO, Retail Solutions",
    initials: "ER"
  }
];