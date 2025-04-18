import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutUsSection />

      {/* Our Services Section */}
      <OurServicesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Technology Stack Section */}
      <TechStackSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function HeroSection() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/contact');
  };

  const handleViewPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <section className="relative min-h-screen bg-[#060606] overflow-hidden isolate">
      {/* Multi-layer Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-[#ff5004]/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              animation: `float ${Math.random() * 10 + 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 relative">
            {/* Company Identity */}
            <div className="mb-12 flex items-center gap-4">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                src="/Logo.png"
                alt="Core Digitize Logo"
                className="w-14 h-14 rounded-xl object-contain"
              />

              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-medium"
              >
                <span className="text-[#ff5004]">core</span>
                <span className="text-white">digitize</span>
              </motion.span>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-medium text-white leading-tight"
            >
              <span className="block mb-4">Digital Excellence</span>
              <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                Engineered
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              Transformative solutions in
              <span className="text-[#ff5004] font-medium"> digital marketing</span>,
              <span className="text-[#ff5004] font-medium"> web development</span>, and
              <span className="text-[#ff5004] font-medium"> mobile innovation</span>.
              Enterprise-grade technology meets measurable results.
            </motion.p>

            {/* Service Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {['SEO Optimized', 'AI-Driven', 'Cloud Native', '24/7 Support'].map((service) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={service}
                  className="px-4 py-2 bg-[#ffffff08] rounded-full border border-[#ff5004]/20"
                >
                  <span className="text-sm text-[#ff5004]">{service}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleStartJourney}
                className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl
                           transition-all duration-300 shadow-lg shadow-[#ff5004]/30
                           flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Digital Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleViewPortfolio}
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                           font-semibold rounded-xl transition-all duration-300 backdrop-blur-lg bg-white/5
                           flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Portfolio
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Tech Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Floating Phone Mockup */}
            <motion.div
              initial={{ rotate: 15, opacity: 0 }}
              animate={{ rotate: 15, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute w-72 h-[500px] bg-[#161616] rounded-[40px] border-2 border-[#ffffff10] shadow-2xl"
            >
              <div className="absolute inset-0 overflow-hidden rounded-[38px]">
                <div className="h-full bg-gradient-to-b from-[#ff5004]/10 to-transparent p-4">
                  <div className="h-full bg-[#060606] rounded-t-[30px] overflow-hidden">
                    <div className="relative h-full">
                      <div
                        className="absolute top-0 left-0 w-full"
                        style={{
                          animation: `scrollContent 20s linear infinite`,
                        }}
                      >
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="h-[500px] p-4">
                            <div className="h-full bg-[#ffffff05] rounded-xl border border-[#ff5004]/10 p-4">
                              <div className="flex flex-col gap-3">
                                <div className="h-4 bg-[#ff5004]/20 rounded-full w-3/4" />
                                <div className="h-3 bg-[#ff5004]/10 rounded-full w-full" />
                                <div className="h-3 bg-[#ff5004]/10 rounded-full w-2/3" />
                                <div className="mt-4 h-8 bg-[#ffffff08] rounded-lg" />
                                <div className="h-24 bg-[#ffffff03] rounded-lg mt-2" />
                                <div className="flex gap-2 mt-3">
                                  <div className="h-3 bg-[#ff5004]/10 rounded-full w-1/4" />
                                  <div className="h-3 bg-[#ff5004]/10 rounded-full w-1/2" />
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Holographic Code Editor */}
            <motion.div
              initial={{ rotate: -5, opacity: 0, y: 50 }}
              animate={{ rotate: -5, opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute right-0 bottom-24 w-96 h-64 bg-[#ffffff03] rounded-xl border border-[#ff5004]/20 backdrop-blur-lg"
            >
              <div className="p-4 h-full font-mono text-sm">
                <div className="text-[#ff5004] mb-4">// core-digitize-app.js</div>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-[#ff5004]">function</span>
                    <span className="text-white">optimize()</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-white">const</span>
                    <span className="text-[#ff5004] ml-2">results</span>
                    <span className="text-white">=</span>
                    <span className="text-[#ff5004]">AI.analyze</span>
                    <span className="text-white">(metrics);</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rotating Service Icons */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              transition={{
                delay: 0.8,
                rotate: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
              className="absolute -left-12 top-24 w-48 h-48 border-2 border-[#ff5004]/20 rounded-full"
            >
              {['🛠', '📱', '📈', '🌐'].map((icon, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 bg-[#ffffff08] rounded-full flex items-center justify-center text-2xl border border-[#ff5004]/20"
                  style={{
                    transform: `rotate(${i * 90}deg) translate(60px) rotate(-${i * 90}deg)`,
                  }}
                >
                  {icon}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Performance Metrics Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 text-center"
      >
        {[
          { value: '300+', label: 'Projects Delivered' },
          { value: '99.9%', label: 'Client Satisfaction' },
          { value: '4.9/5', label: 'Average Rating' },
        ].map((metric, i) => (
          <div key={i} className="text-[#ff5004]">
            <div className="text-2xl font-medium">{metric.value}</div>
            <div className="text-sm text-white/60">{metric.label}</div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @keyframes scrollContent {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-100% + 500px)); }
        }
        @keyframes float {
          0% { transform: translate(0, 0px); }
          50% { transform: translate(0, 15px); }
          100% { transform: translate(0, -0px); }
        }
      `}</style>
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
              x: [0, 20, 0],
              y: [0, -20, 0],
              transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }
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