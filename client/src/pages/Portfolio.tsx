import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck, FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Portfolio() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden">
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

const PortfolioHero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['All', 'Web', 'Mobile', 'Enterprise', 'Design'];

  return (
    <section className="relative min-h-[80vh] bg-[#060606] overflow-hidden isolate pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
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
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-16 h-16 bg-[#ff5004] rounded-xl flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-[#060606]">CD</span>
            </motion.div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-medium text-white leading-tight mb-6"
          >
            <span className="block mb-4">Our Digital</span>
            <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto mb-12"
          >
            Explore our collection of transformative digital solutions that have driven measurable results for global brands and innovative startups.
          </motion.p>

          {/* Interactive Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-[#ff5004] text-white' 
                    : 'bg-[#ffffff08] text-white/80 hover:text-white'
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-8 text-center"
          >
            {[
              { value: '150+', label: 'Projects Completed' },
              { value: '40+', label: 'Industries Served' },
              { value: '98%', label: 'Client Retention' },
            ].map((metric, i) => (
              <div key={i} className="text-[#ff5004]">
                <div className="text-2xl font-medium">{metric.value}</div>
                <div className="text-sm text-white/60">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
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
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            SHOWCASE
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Featured</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Projects</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Selected case studies demonstrating our technical expertise and business impact
          </motion.p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px -15px rgba(255, 80, 4, 0.3)"
              }}
              onClick={() => setSelectedProject(index)}
              className="relative group overflow-hidden rounded-3xl border border-[#ffffff10] bg-gradient-to-b from-[#161616] to-[#0d0d0d] hover:border-[#ff5004]/50 transition-all cursor-pointer"
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-sm mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-[#ffffff05] rounded-full text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-[#ff5004] group-hover:text-[#ff6120] transition-colors">
                  <span>View case study</span>
                  <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="relative bg-[#161616] rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#ffffff10] hover:bg-[#ff5004] transition-colors"
                >
                  <FiX className="w-6 h-6" />
                </button>

                {selectedProject !== null && (
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left Column - Image */}
                    <div className="lg:sticky lg:top-0 h-full max-lg:order-2">
                      <div className="h-96 lg:h-full w-full relative">
                        <img 
                          src={projects[selectedProject].image} 
                          alt={projects[selectedProject].title}
                          className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent lg:bg-gradient-to-r" />
                      </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="p-8 lg:p-12">
                      <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
                        {projects[selectedProject].category}
                      </span>
                      <h2 className="text-4xl font-bold mb-6">{projects[selectedProject].title}</h2>
                      <p className="text-xl text-white/80 mb-8">{projects[selectedProject].description}</p>
                      
                      {/* Key Results */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-[#ff5004]">Key Results</h3>
                        <ul className="space-y-3">
                          {projects[selectedProject].results.map((result, i) => (
                            <li key={i} className="flex items-start">
                              <FiCheck className="w-5 h-5 text-[#ff5004] mt-1 mr-3 flex-shrink-0" />
                              <span className="text-lg text-white/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-[#ff5004]">Technologies</h3>
                        <div className="flex flex-wrap gap-3">
                          {projects[selectedProject].technologies.map((tech, i) => (
                            <span key={i} className="px-4 py-2 bg-[#ffffff05] rounded-full text-white/80">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={projects[selectedProject].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                        >
                          <FiExternalLink className="w-5 h-5" />
                          Live Demo
                        </motion.a>
                        {projects[selectedProject].github && (
                          <motion.a
                            href={projects[selectedProject].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-lg transition-all flex items-center gap-2"
                          >
                            <FiGithub className="w-5 h-5" />
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
    </section>
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
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            EXPERTISE AREAS
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Specializations</span>
          </motion.h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#ff5004]/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
              <p className="text-white/70 mb-6">{category.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#ff5004] mb-3">KEY OFFERINGS</h4>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-1 h-1 bg-[#ff5004] rounded-full mt-2 mr-3"></div>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#ffffff10]">
                <span className="text-sm text-white/60">{category.projects}+ Projects</span>
                <button className="text-[#ff5004] hover:text-[#ff6120] flex items-center gap-2 transition-colors">
                  View Projects
                  <FiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            TECHNOLOGY STACK
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Technical</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Proficiency</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our expertise spans the entire technology spectrum, from frontend to infrastructure
          </motion.p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#ff5004]">{stack.category}</h3>
              <div className="space-y-6">
                {stack.technologies.map((tech, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80">{tech.name}</span>
                      <span className="text-[#ff5004]">{tech.proficiency}%</span>
                    </div>
                    <div className="w-full bg-[#ffffff05] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#ff5004] to-[#ff8c00] h-2 rounded-full" 
                        style={{ width: `${tech.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            CLIENT SUCCESS
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Measurable</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Results</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Quantifiable impact we've delivered for clients across industries
          </motion.p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-[#ff5004]/20 transition-colors">
                {story.logo}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#ff5004]">{story.title}</h3>
              <p className="text-white/80 mb-6">{story.description}</p>
              <div className="pt-4 border-t border-[#ffffff10]">
                <span className="text-sm text-white/60">For {story.client}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            METHODOLOGY
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Our</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Process</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A proven framework that ensures quality, efficiency, and measurable results
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 h-full w-px bg-gradient-to-b from-[#ff5004] via-[#ff5004]/50 to-transparent hidden lg:block"></div>
          
          {/* Process Steps */}
          <div className="space-y-16 lg:space-y-32">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Step Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                  <div className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-xl">
                        {step.icon}
                      </div>
                      <span className="text-2xl font-bold text-[#ff5004]">{step.step}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
                
                {/* Step Connector */}
                <div className="lg:absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff5004]/10 border-4 border-[#161616] flex items-center justify-center text-2xl z-10">
                  {step.icon}
                </div>
                
                {/* Empty Space for Alignment */}
                <div className="lg:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PortfolioCTA = () => {
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
              Ready to <span className="text-[#ff5004]">Start</span> Your Project?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
              Let's discuss how we can bring your vision to life with our expertise
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
                View Pricing
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