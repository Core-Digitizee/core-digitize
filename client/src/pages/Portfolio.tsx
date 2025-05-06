import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

// Custom hook for staggered animations
const useStaggeredAnimation = (delay = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return {
    ref,
    controls,
    variants: {
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * delay,
          duration: 0.5,
          ease: "easeOut"
        }
      }),
      hidden: { opacity: 0, y: 30 }
    }
  };
};

// Particle background component
const ParticleBackground = () => {
  const floatingVariants: Variants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#ff5004]/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
          }}
          variants={floatingVariants}
          animate="float"
          custom={i}
        />
      ))}
    </div>
  );
};

// Section wrapper component for consistent styling
const SectionWrapper = ({ 
  children, 
  title, 
  subtitle, 
  highlight, 
  tag,
  className = ""
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  highlight: string;
  tag: string;
  className?: string;
}) => {
  const { ref, controls, variants } = useStaggeredAnimation();

  return (
    <section className={`relative py-24 overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={0}
          >
            <span className="inline-block px-5 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider">
              {tag}
            </span>
          </motion.div>
          
          <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={1}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">{title}</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">{highlight}</span>
          </motion.h2>
          
          <motion.p
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            custom={2}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400"
          >
            {subtitle}
          </motion.p>
        </div>

        {children}
      </div>
    </section>
  );
};

const PortfolioHero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['All', 'Web', 'Mobile', 'Enterprise', 'Design'];
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    hidden: { opacity: 0 }
  };

  const itemVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hidden: { opacity: 0, y: 30 }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] to-[#060606] overflow-hidden isolate pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#ff5004]/20 filter blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff8c00]/20 filter blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        />
      </div>

      <ParticleBackground />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={variants}
          className="max-w-7xl mx-auto text-center"
        >
          {/* Logo animation */}
          <motion.div 
            variants={itemVariants}
            className="mb-12 flex justify-center"
          >
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="w-24 h-24 bg-gradient-to-br from-[#ff5004] to-[#ff8c00] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ff5004]/40"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-bold text-[#060606]"
              >
                CD
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8"
          >
            <motion.span 
              variants={itemVariants}
              className="block mb-6"
            >
              Crafting Digital
            </motion.span>
            <motion.span 
              variants={itemVariants}
              className="relative inline-block"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004]">
                Excellence
              </span>
              <motion.span 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] origin-left"
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto mb-12"
          >
            We transform ideas into powerful digital experiences that drive business growth and engage users.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ 
                  y: -3,
                  backgroundColor: activeTab === index ? 'rgba(255, 80, 4, 0.9)' : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: "0 4px 15px rgba(255, 80, 4, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-[#ff5004] to-[#ff8c00] text-white shadow-lg shadow-[#ff5004]/30' 
                    : 'bg-[#ffffff08] text-white/80 hover:text-white hover:bg-[#ffffff15]'
                }`}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={variants}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-center"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '40+', label: 'Industries Served' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '10M+', label: 'Users Impacted' }
            ].map((metric, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                custom={i}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff5004] to-[#ff8c00] mb-2">
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-white/60 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center">
          <motion.span 
            className="text-sm text-white/60 mb-2"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll Down
          </motion.span>
          <div className="w-6 h-10 border-2 border-[#ff5004]/60 rounded-full flex justify-center overflow-hidden">
            <motion.div 
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 bg-[#ff5004] rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const projects = [
    {
      title: "FinTech Enterprise Platform",
      description: "Scalable banking infrastructure processing 1M+ daily transactions with 99.99% uptime",
      category: "Enterprise",
      technologies: ["React", "Node.js", "AWS", "Kubernetes"],
      results: ["300% performance boost", "40% cost reduction", "PCI-DSS compliant"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "Healthcare Data Hub",
      description: "Unified patient records system across 50+ healthcare facilities",
      category: "Enterprise",
      technologies: ["TypeScript", "GraphQL", "PostgreSQL", "Docker"],
      results: ["80% faster data retrieval", "HIPAA compliant", "Real-time analytics"],
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Custom online marketplace with AI-powered recommendations",
      category: "Web",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
      results: ["300% revenue growth", "50% faster load times", "25% conversion boost"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure financial management application for iOS and Android",
      category: "Mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Biometrics"],
      results: ["4.9/5 app store rating", "2M+ downloads", "Bank-grade security"],
      image: "https://images.unsplash.com/photo-1601597111151-9c8cd30f9b36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Enterprise business intelligence with predictive analytics",
      category: "Web",
      technologies: ["React", "D3.js", "Python", "TensorFlow"],
      results: ["60% faster decision making", "Custom ML models", "Real-time data"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      title: "AR Retail Experience",
      description: "Immersive augmented reality for e-commerce product visualization",
      category: "Mobile",
      technologies: ["Unity", "ARKit", "Swift", "3D Modeling"],
      results: ["40% higher engagement", "30% fewer returns", "Interactive previews"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      link: "#",
      github: "#"
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
    <SectionWrapper
      title="Featured"
      highlight="Projects"
      subtitle="Selected case studies demonstrating our technical expertise and business impact"
      tag="SHOWCASE"
      className="bg-gradient-to-b from-[#060606] to-[#0a0a0a]"
    >
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative"
      >
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const { ref, controls, variants } = useStaggeredAnimation();
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                custom={index % 3}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 30px 60px -15px rgba(255, 80, 4, 0.3)"
                }}
                onClick={() => setSelectedProject(index)}
                className="relative group overflow-hidden rounded-2xl border border-[#ffffff10] bg-gradient-to-b from-[#161616] to-[#0d0d0d] hover:border-[#ff5004]/50 transition-all cursor-pointer"
                style={{
                  boxShadow: "inset 0 0 20px rgba(255, 80, 4, 0.1)",
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 [background:linear-gradient(135deg,transparent_0%,rgba(255,80,4,0.03)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Project Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-xs font-medium mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#ffffff05] rounded-full text-xs text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-[#ff5004] group-hover:text-[#ff6120] transition-colors text-sm font-medium">
                    <span>View case study</span>
                    <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="relative bg-[#161616] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#ffffff10] shadow-2xl shadow-[#ff5004]/20"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#ffffff10] hover:bg-[#ff5004] transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {selectedProject !== null && (
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Left Column - Image */}
                    <div className="lg:sticky lg:top-0 h-full max-lg:order-2">
                      <div className="h-96 lg:h-full w-full relative">
                        <img 
                          src={projects[selectedProject].image} 
                          alt={projects[selectedProject].title}
                          className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:bg-gradient-to-r" />
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="p-8 lg:p-10">
                      <span className="inline-block px-4 py-1.5 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4 text-xs font-medium">
                        {projects[selectedProject].category}
                      </span>
                      <h2 className="text-3xl font-bold mb-6">{projects[selectedProject].title}</h2>
                      <p className="text-lg text-white/80 mb-8">{projects[selectedProject].description}</p>
                      
                      {/* Key Results */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-[#ff5004]">Key Results</h3>
                        <ul className="space-y-3">
                          {projects[selectedProject].results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <FiCheck className="w-5 h-5 text-[#ff5004] mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-base text-white/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4 text-[#ff5004]">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {projects[selectedProject].technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1.5 bg-[#ffffff05] rounded-full text-sm text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex flex-wrap gap-3">
                        <motion.a
                          href={projects[selectedProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] hover:from-[#ff6120] hover:to-[#ff9c40] text-white font-medium rounded-lg transition-all flex items-center gap-2 text-sm"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          Live Demo
                        </motion.a>
                        {projects[selectedProject].github && (
                          <motion.a
                            href={projects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-[#ff5004]/40 hover:border-[#ff5004] text-white font-medium rounded-lg transition-all flex items-center gap-2 text-sm bg-[#ffffff05]"
                          >
                            <FiGithub className="w-4 h-4" />
                            View Code
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

const ProjectCategories = () => {
  const categories = [
    {
      title: "Web Development",
      description: "High-performance, scalable web applications with modern frameworks",
      icon: "🌐",
      projects: 42,
      features: [
        "React/Next.js Applications",
        "Progressive Web Apps",
        "Enterprise Portals",
        "E-commerce Solutions"
      ]
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile experiences with native performance",
      icon: "📱",
      projects: 28,
      features: [
        "iOS & Android Apps",
        "React Native Development",
        "Mobile Commerce",
        "AR/VR Experiences"
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Custom software for complex business challenges",
      icon: "🏢",
      projects: 35,
      features: [
        "CRM/ERP Systems",
        "Data Integration",
        "Workflow Automation",
        "Cloud Architecture"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that drive engagement",
      icon: "🎨",
      projects: 56,
      features: [
        "User Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Interaction Design"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable ROI",
      icon: "📈",
      projects: 63,
      features: [
        "SEO Optimization",
        "PPC Campaigns",
        "Social Media Strategy",
        "Content Marketing"
      ]
    },
    {
      title: "Emerging Tech",
      description: "Innovative solutions leveraging cutting-edge technologies",
      icon: "🚀",
      projects: 18,
      features: [
        "AI/ML Integration",
        "Blockchain Solutions",
        "IoT Applications",
        "Voice Interfaces"
      ]
    }
  ];

  return (
    <SectionWrapper
      title="Our"
      highlight="Specializations"
      subtitle="Comprehensive digital solutions tailored to your business needs"
      tag="EXPERTISE AREAS"
      className="bg-gradient-to-b from-[#0a0a0a] to-[#060606]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const { ref, controls, variants } = useStaggeredAnimation();
          
          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={index % 3}
              whileHover={{ y: -8 }}
              className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#ff5004]/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-white/70 text-sm mb-6">{category.description}</p>
              
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#ff5004] mb-3 uppercase tracking-wider">KEY OFFERINGS</h4>
                <ul className="space-y-2.5">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#ff5004] rounded-full mt-1.5 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#ffffff10]">
                <span className="text-xs text-white/60">{category.projects}+ Projects</span>
                <button className="text-[#ff5004] hover:text-[#ff6120] flex items-center gap-1.5 transition-colors text-sm font-medium">
                  View Projects
                  <FiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

const TechExpertise = () => {
  const techStacks = [
    {
      category: "Frontend",
      technologies: [
        { name: "React", proficiency: 95 },
        { name: "Next.js", proficiency: 90 },
        { name: "TypeScript", proficiency: 85 },
        { name: "Tailwind CSS", proficiency: 80 }
      ]
    },
    {
      category: "Backend",
      technologies: [
        { name: "Node.js", proficiency: 90 },
        { name: "Python", proficiency: 85 },
        { name: "GraphQL", proficiency: 80 },
        { name: "PostgreSQL", proficiency: 75 }
      ]
    },
    {
      category: "Mobile",
      technologies: [
        { name: "React Native", proficiency: 85 },
        { name: "Swift", proficiency: 70 },
        { name: "Kotlin", proficiency: 65 },
        { name: "Flutter", proficiency: 60 }
      ]
    },
    {
      category: "DevOps",
      technologies: [
        { name: "AWS", proficiency: 85 },
        { name: "Docker", proficiency: 80 },
        { name: "Kubernetes", proficiency: 75 },
        { name: "CI/CD", proficiency: 90 }
      ]
    },
    {
      category: "Design",
      technologies: [
        { name: "Figma", proficiency: 95 },
        { name: "Adobe XD", proficiency: 85 },
        { name: "Sketch", proficiency: 75 },
        { name: "Blender", proficiency: 60 }
      ]
    },
    {
      category: "Emerging Tech",
      technologies: [
        { name: "AI/ML", proficiency: 70 },
        { name: "Blockchain", proficiency: 65 },
        { name: "AR/VR", proficiency: 60 },
        { name: "IoT", proficiency: 55 }
      ]
    }
  ];

  return (
    <SectionWrapper
      title="Technical"
      highlight="Proficiency"
      subtitle="Our expertise spans the entire technology spectrum, from frontend to infrastructure"
      tag="TECHNOLOGY STACK"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techStacks.map((stack, index) => {
          const { ref, controls, variants } = useStaggeredAnimation();
          
          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={index % 3}
              className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-6 text-[#ff5004]">{stack.category}</h3>
              <div className="space-y-5">
                {stack.technologies.map((tech, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-white/80">{tech.name}</span>
                      <span className="text-[#ff5004] font-medium">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-[#ffffff05] rounded-full h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                        className="bg-gradient-to-r from-[#ff5004] to-[#ff8c00] h-2 rounded-full" 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

const ClientSuccess = () => {
  const successStories = [
    {
      title: "300% Revenue Growth",
      description: "For e-commerce client through platform optimization",
      client: "Retail Giant Inc.",
      logo: "🛒"
    },
    {
      title: "80% Faster Data Processing",
      description: "Enterprise data pipeline optimization",
      client: "Financial Services Corp",
      logo: "💳"
    },
    {
      title: "4.9 App Store Rating",
      description: "Mobile banking application with 2M+ downloads",
      client: "Digital Bank",
      logo: "📱"
    },
    {
      title: "40% Cost Reduction",
      description: "Cloud infrastructure optimization",
      client: "Tech Startup",
      logo: "☁️"
    },
    {
      title: "25% Conversion Boost",
      description: "Through UX redesign and A/B testing",
      client: "SaaS Platform",
      logo: "🖥️"
    },
    {
      title: "99.99% Uptime",
      description: "Mission-critical enterprise system",
      client: "Healthcare Provider",
      logo: "🏥"
    }
  ];

  return (
    <SectionWrapper
      title="Measurable"
      highlight="Results"
      subtitle="Quantifiable impact we've delivered for clients across industries"
      tag="CLIENT SUCCESS"
      className="bg-gradient-to-b from-[#0a0a0a] to-[#060606]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {successStories.map((story, index) => {
          const { ref, controls, variants } = useStaggeredAnimation();
          
          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              custom={index % 3}
              whileHover={{ y: -8 }}
              className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-2xl mb-6 group-hover:bg-[#ff5004]/20 transition-colors">
                {story.logo}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#ff5004]">{story.title}</h3>
              <p className="text-white/80 text-sm mb-6">{story.description}</p>
              <div className="pt-4 border-t border-[#ffffff10]">
                <span className="text-xs text-white/60">For {story.client}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

const OurProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "In-depth analysis of business objectives and technical requirements",
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Custom roadmap aligned with business goals and KPIs",
      icon: "🧭"
    },
    {
      step: "03",
      title: "Design",
      description: "User-centric interfaces with iterative prototyping",
      icon: "🎨"
    },
    {
      step: "04",
      title: "Development",
      description: "Agile implementation with continuous integration",
      icon: "💻"
    },
    {
      step: "05",
      title: "Testing",
      description: "Comprehensive QA and performance optimization",
      icon: "🧪"
    },
    {
      step: "06",
      title: "Launch",
      description: "Seamless deployment and ongoing optimization",
      icon: "🚀"
    }
  ];

  return (
    <SectionWrapper
      title="Our"
      highlight="Process"
      subtitle="A proven framework that ensures quality, efficiency, and measurable results"
      tag="METHODOLOGY"
    >
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#ff5004] via-[#ff5004]/50 to-transparent hidden lg:block"></div>
        
        {/* Process Steps */}
        <div className="space-y-12 lg:space-y-24">
          {processSteps.map((step, index) => {
            const { ref, controls, variants } = useStaggeredAnimation(0.2);
            
            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                custom={index}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Step Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-xl">
                        {step.icon}
                      </div>
                      <span className="text-xl font-bold text-[#ff5004]">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </motion.div>
                </div>
                
                {/* Step Connector */}
                <div className="lg:absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#ff5004]/10 border-4 border-[#161616] flex items-center justify-center text-xl z-10">
                  {step.icon}
                </div>
                
                {/* Empty Space for Alignment */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

const PortfolioCTA = () => {
  const { ref, controls, variants } = useStaggeredAnimation();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          custom={0}
          className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-2xl p-8 md:p-12 border border-[#ff5004]/20 relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <motion.div 
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#ff5004] filter blur-[100px] opacity-20"
          />
          
          <div className="relative z-10 text-center">
            <motion.h2
              variants={variants}
              custom={1}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to <span className="text-[#ff5004]">Start</span> Your Project?
            </motion.h2>
            
            <motion.p
              variants={variants}
              custom={2}
              className="max-w-2xl mx-auto text-lg text-white/70 mb-8"
            >
              Let's discuss how we can bring your vision to life with our expertise
            </motion.p>
            
            <motion.div
              variants={variants}
              custom={3}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-6 py-3.5 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] hover:from-[#ff6120] hover:to-[#ff9c40] text-white font-medium rounded-lg transition-all text-sm"
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#pricing"
                className="px-6 py-3.5 border border-[#ff5004]/40 hover:border-[#ff5004] text-white font-medium rounded-lg transition-all text-sm bg-[#ffffff05]"
              >
                View Pricing
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  // Ensure page starts at top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      {/* Animated background elements */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <PortfolioHero />

      {/* Portfolio Showcase */}
      <ProjectShowcase />

      {/* Project Categories */}
      <ProjectCategories />

      {/* Technology Expertise */}
      <TechExpertise />

      {/* Client Success Stories */}
      <ClientSuccess />

      {/* Process Methodology */}
      <OurProcess />

      {/* CTA Section */}
      <PortfolioCTA />
    </div>
  );
}