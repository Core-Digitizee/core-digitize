import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck } from 'react-icons/fi';

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
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-14 h-14 bg-[#ff5004] rounded-xl flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-[#060606]">CD</span>
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-xl font-light"
              >
                Core Digitize
              </motion.span>
            </div>

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

            {/* Enhanced CTA Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                  {/* App Screen Animation */}
                  <div className="h-full bg-[#060606] rounded-t-[30px] overflow-hidden">
                    <div className="animate-screenScroll" style={{ animation: 'screenScroll 15s linear infinite' }}>
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-[500px] p-4">
                          <div className="h-full bg-[#ffffff05] rounded-xl border border-[#ff5004]/10 p-4">
                            <div className="flex flex-col gap-3">
                              <div className="h-4 bg-[#ff5004]/20 rounded-full w-3/4" />
                              <div className="h-3 bg-[#ff5004]/10 rounded-full w-full" />
                              <div className="h-3 bg-[#ff5004]/10 rounded-full w-2/3" />
                            </div>
                          </div>
                        </div>
                      ))}
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
    </section>
  );
}

const AboutUsSection = () => {
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
              At Core Digitize, we are more than just a technology company – we are a collective of passionate innovators, strategic thinkers, and meticulous engineers dedicated to crafting exceptional digital experiences. Our mission is to empower businesses of all sizes to thrive in the digital landscape through bespoke solutions tailored to their unique needs.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              Founded on the principles of quality, integrity, and client-centricity, we strive to build long-lasting partnerships that drive sustainable growth. From cutting-edge web development and impactful digital marketing to innovative mobile applications and robust cloud solutions, we offer a comprehensive suite of services designed to elevate your brand and achieve your business objectives.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all"
              >
                Learn More
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const categories = [
    {
      title: "Marketing",
      services: [
        { name: "Social Media Marketing", icon: "📱", stat: "↑ 320% ROI" },
        { name: "Google Ads", icon: "🔍", stat: "↓ 40% CAC" },
        { name: "Meta Ads", icon: "👍", stat: "10M+ Reach" },
        { name: "Email Marketing", icon: "✉️", stat: "25% Open Rate" },
        { name: "Whatsapp Marketing", icon: "💬", stat: "90% Open Rate" },
        { name: "Performance Marketing", icon: "📊", stat: "5x Conversions" },
        { name: "Influencer Marketing", icon: "🌟", stat: "15% Engagement" },
        { name: "Content Marketing", icon: "🖋️", stat: "3x Retention" }
      ]
    },
    {
      title: "Media",
      services: [
        { name: "Videography", icon: "🎥", stat: "4K/HDR" },
        { name: "Video Editing", icon: "✂️", stat: "60 FPS" },
        { name: "Photography", icon: "📸", stat: "50MP RAW" },
        { name: "Photo Editing", icon: "🎨", stat: "Retouched" },
        { name: "Product Shoots", icon: "📦", stat: "360° Views" },
        { name: "Commercial Shoots", icon: "💼", stat: "Cinematic" },
        { name: "Branding", icon: "🏷️", stat: "Visual Identity" },
        { name: "Graphic Design", icon: "✏️", stat: "Vector Art" }
      ]
    },
    {
      title: "Technical",
      services: [
        { name: "Web Development", icon: "🌐", stat: "99.9% Uptime" },
        { name: "App Development", icon: "📱", stat: "iOS/Android" },
        { name: "Software Development", icon: "💻", stat: "Scalable" },
        { name: "Landing Pages", icon: "🛬", stat: "↑ 200% CVR" },
        { name: "SEO", icon: "🔎", stat: "↑ 300% Traffic" },
        { name: "CRM", icon: "🤝", stat: "Automated" },
        { name: "ERP", icon: "📈", stat: "Integrated" }
      ]
    },
    {
      title: "Animation",
      services: [
        { name: "3D Animation", icon: "🎬", stat: "Cinematic" },
        { name: "2D Animation", icon: "🖌️", stat: "60 FPS" },
        { name: "3D Modeling", icon: "🧊", stat: "PBR Textures" },
        { name: "Motion Graphics", icon: "🌀", stat: "Dynamic" },
        { name: "CGI Video", icon: "🎞️", stat: "Realistic" },
        { name: "VFX Video", icon: "✨", stat: "Hollywood-grade" },
        { name: "Whiteboard Animation", icon: "📝", stat: "Explainer" }
      ]
    }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-32 bg-[#060606] overflow-hidden"
    >
      {/* 3D Parallax Grid */}
      <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,transparent_65%,rgba(255,80,4,0.03)_100%)] [background-size:60px_60px]" />

      {/* Dynamic Glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          x: useTransform(mouseX, val => val - 300),
          y: useTransform(mouseY, val => val - 300),
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(255,80,4,0.15) 0%, transparent 70%)",
          filter: "blur(100px)"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-28">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            DIGITAL EXCELLENCE
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Services</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-edge solutions engineered for measurable business impact
          </motion.p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="flex justify-center mb-16 relative">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff5004]/20 to-[#ff8c00]/20 rounded-3xl blur-2xl opacity-20" />
            
            {/* Navigation Container */}
            <div className="relative inline-flex bg-[#161616] rounded-2xl p-2 border border-[#ffffff10] shadow-lg shadow-black/50 overflow-hidden">
              {/* Active Background */}
              <motion.div
                className="absolute inset-0 bg-[#ffffff08] rounded-xl"
                initial={false}
                animate={{
                  x: `${activeCategory * 100}%`,
                  width: '25%'
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              
              {/* Navigation Items */}
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`relative px-8 py-4 rounded-xl font-medium transition-all z-10 ${
                    activeCategory === index ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.title}
                    {activeCategory === index && (
                      <motion.div
                        animate={{
                          rotate: [0, 15, -15, 0],
                          transition: { duration: 1.5, repeat: Infinity }
                        }}
                      >
                        <FiChevronRight className="w-5 h-5" />
                      </motion.div>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Holographic Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <AnimatePresence mode="wait">
            {categories[activeCategory].services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: "0 30px 60px -15px rgba(255, 80, 4, 0.4)"
                }}
                className="relative group overflow-hidden rounded-3xl border border-[#ffffff10] bg-gradient-to-b from-[#161616] to-[#0d0d0d] hover:border-[#ff5004]/50 transition-all"
                style={{
                  boxShadow: "inset 0 0 20px rgba(255, 80, 4, 0.1)",
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 [background:linear-gradient(135deg,transparent_0%,rgba(255,80,4,0.03)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="p-8 h-full flex flex-col relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-2xl mb-6 text-[#ff5004] backdrop-blur-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="px-3 py-1 bg-[#ff5004]/10 rounded-full inline-flex items-center mb-6 border border-[#ff5004]/20">
                    <span className="text-sm font-medium text-[#ff5004]">{service.stat}</span>
                  </div>
                  <p className="text-gray-400 mb-8">Premium {service.name.toLowerCase()} services with measurable impact</p>
                  <div className="mt-auto">
                    <button className="inline-flex items-center text-[#ff5004] hover:text-[#ff6120] group">
                      <span className="relative overflow-hidden">
                        <span className="absolute bottom-0 left-0 w-full h-px bg-[#ff5004] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                        Explore Service
                      </span>
                      <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                {/* Animated Holographic Border */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#ff5004]/40 transition-all duration-500 pointer-events-none" style={{
                  boxShadow: "inset 0 0 30px rgba(255, 80, 4, 0)"
                }} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Quantum CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-[#ff5004] to-[#ff8c00] hover:shadow-xl hover:shadow-[#ff5004]/30 transition-all">
            <button className="relative overflow-hidden px-12 py-5 bg-[#060606] rounded-2xl group w-full">
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 flex items-center justify-center text-lg font-bold text-white">
                Request Enterprise Proposal
                <FiChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
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
            <div className="relative h-[400px] w-full bg-[#161616] rounded-3xl overflow-hidden border border-[#ffffff10]">
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
              className="bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
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
                className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
    title: "FinTech Platform Modernization",
    description: "Redesigned core banking system processing 1M+ transactions daily with 99.99% uptime."
  },
  {
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

