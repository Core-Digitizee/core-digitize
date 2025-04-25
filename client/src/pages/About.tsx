import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiChevronRight, FiAward, FiUsers, FiLayers, FiTrendingUp } from 'react-icons/fi';

// Custom scrollbar styles
const GlobalStyles = () => (
  <style>{`
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
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

export default function About() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleServicesClick = () => {
    navigate('/services');
  };

  return (
    <div className="bg-[#060606] text-white relative overflow-hidden">
      <GlobalStyles />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated grid */}
          <motion.div 
            className="absolute inset-0 opacity-5"
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
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#ff5004]"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2 + 0.05
              }}
              animate={{
                y: [0, -Math.random() * 100 - 50],
                x: [0, (Math.random() > 0.5 ? 1 : -1) * Math.random() * 30],
                opacity: [0.1, 0.3, 0],
                transition: {
                  duration: Math.random() * 20 + 15,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 8
                }
              }}
            />
          ))}
          
          {/* Floating shapes */}
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
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-sm font-medium tracking-wider"
              >
                CORE DIGITIZE
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                <span className="block mb-4">Digital Transformation</span>
                <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                  Done Right
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80 leading-relaxed max-w-2xl"
              >
                We architect digital experiences that drive growth. As a full-service digital agency, we combine strategy, creativity, and technology to deliver measurable results for forward-thinking businesses.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-6"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 25px -5px rgba(255, 80, 4, 0.5)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-gradient-to-r from-[#ff5004] to-[#ff732e] hover:from-[#ff6120] hover:to-[#ff8440] text-white font-semibold rounded-xl
                             transition-all duration-300 shadow-lg shadow-[#ff5004]/30
                             flex items-center gap-3 group"
                >
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Get in Touch
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 10px 25px -5px rgba(255, 80, 4, 0.2)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleServicesClick}
                  className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                             font-semibold rounded-xl transition-all duration-300 backdrop-blur-lg bg-white/5
                             flex items-center gap-3 group"
                >
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Explore Services
                </motion.button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-8 pt-4"
              >
                <div className="flex items-center gap-2">
                  <FiAward className="text-[#ff5004] w-5 h-5" />
                  <span className="text-white/80">Award-Winning Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiUsers className="text-[#ff5004] w-5 h-5" />
                  <span className="text-white/80">Client-Focused</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square w-full max-w-xl mx-auto">
                {/* Main image with gradient border */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-[#ff5004]/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff5004]/10 to-[#060606]"></div>
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Digital Architects <span className="text-[#ff5004]">Building The Future</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed max-w-4xl mx-auto">
                Core Digitize is a full-service digital agency specializing in transformative marketing strategies, 
                cutting-edge web development, and captivating media production. We partner with ambitious brands 
                to create digital experiences that drive measurable business growth.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {[
                { value: "30+", label: "Digital Services", icon: <FiLayers className="w-8 h-8 text-[#ff5004] mx-auto mb-4" /> },
                { value: "100%", label: "Client Satisfaction", icon: <FiUsers className="w-8 h-8 text-[#ff5004] mx-auto mb-4" /> },
                { value: "2x", label: "Average Growth", icon: <FiTrendingUp className="w-8 h-8 text-[#ff5004] mx-auto mb-4" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
                >
                  {stat.icon}
                  <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#060606]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#ffffff10]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5004]/10 to-[#060606]"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center mix-blend-overlay opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-[#ff5004] rounded-full flex items-center justify-center text-4xl shadow-xl cursor-pointer"
                  >
                    ▶
                  </motion.div>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-50"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Building The Future <span className="text-[#ff5004]">Since 2025</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Founded in 2025 by a team of digital visionaries, Core Digitize was born from a shared frustration with agencies that overpromise and underdeliver. We set out to create a different kind of digital partner—one that combines technical excellence with business acumen.
              </p>
              <p className="text-xl text-white/70 leading-relaxed">
                In just a short time, we've grown from a boutique studio to a full-service agency serving clients across multiple industries. Our rapid growth is a testament to our client-centric approach and our commitment to delivering tangible results.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#161616] p-6 rounded-xl border border-[#ffffff10]">
                  <h3 className="text-3xl font-bold text-[#ff5004] mb-2">30+</h3>
                  <p className="text-white/80">Digital Services</p>
                </div>
                <div className="bg-[#161616] p-6 rounded-xl border border-[#ffffff10]">
                  <h3 className="text-3xl font-bold text-[#ff5004] mb-2">100%</h3>
                  <p className="text-white/80">Client Retention</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Our <span className="text-[#ff5004]">Proven Process</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              A results-driven methodology that delivers exceptional outcomes
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery & Research",
                description: "We begin by deeply understanding your business, audience, and competitive landscape through comprehensive research and analysis.",
                icon: "🔍"
              },
              {
                title: "Strategic Planning",
                description: "Our team develops a customized roadmap with clear KPIs and milestones tailored to your specific business objectives.",
                icon: "🧠"
              },
              {
                title: "Execution & Development",
                description: "Our experts implement solutions with precision, using agile methodologies to ensure flexibility and efficiency.",
                icon: "⚡"
              },
              {
                title: "Optimization & Growth",
                description: "We continuously monitor performance and refine strategies based on data to maximize your ROI over time.",
                icon: "📈"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-3xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#ff5004]/20 group-hover:to-[#ff5004]/30 transition-all">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
                Our Foundation
              </span>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                The Principles That <span className="text-[#ff5004]">Guide Us</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                These core values define who we are and how we operate. They influence every decision we make and every solution we deliver.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Innovation",
                    description: "We challenge conventions and push boundaries to deliver cutting-edge solutions that give our clients a competitive edge."
                  },
                  {
                    title: "Integrity",
                    description: "We believe in radical transparency, honest communication, and doing what's right—even when no one is watching."
                  },
                  {
                    title: "Excellence",
                    description: "We're obsessed with quality and attention to detail, delivering work that exceeds expectations at every turn."
                  },
                  {
                    title: "Partnership",
                    description: "We view every client relationship as a long-term partnership, invested in your success as much as our own."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ff5004]/10 flex items-center justify-center text-[#ff5004] mt-1 flex-shrink-0">
                      <FiChevronRight className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{value.title}</h3>
                      <p className="text-white/70">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-[#ff5004]/30">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5004]/10 to-[#060606]"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Meet The <span className="text-[#ff5004]">Digital Architects</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              A diverse collective of strategists, creatives, and technologists united by a passion for digital excellence
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="max-w-4xl mx-auto bg-[#161616] rounded-3xl p-12 border border-[#ffffff10]">
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-white mb-4">Curated Excellence</h3>
              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                We're selective about who joins our team, ensuring every Core Digitize member brings exceptional expertise, 
                creative problem-solving skills, and a collaborative spirit. Our team includes award-winning designers, 
                marketing strategists with proven track records, and developers who breathe life into complex digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="px-8 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all"
                >
                  Meet Our Team
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-lg transition-all backdrop-blur-lg bg-white/5"
                >
                  Join Our Team
                </motion.button>
              </div>
            </div>
            
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff5004]/5 rounded-full filter blur-[100px] opacity-30"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff5004]/5 rounded-full filter blur-[100px] opacity-30"></div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Differentiators
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Why <span className="text-[#ff5004]">Core Digitize</span> Stands Out
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              What makes us the preferred digital partner for ambitious brands
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full-Service Expertise",
                description: "From strategy to execution, we offer 30+ specialized services under one roof, eliminating the need to coordinate multiple vendors.",
                icon: "🛠️"
              },
              {
                title: "Business-First Approach",
                description: "We don't just deliver digital products—we create solutions that drive measurable business outcomes and ROI.",
                icon: "📈"
              },
              {
                title: "Future-Ready Solutions",
                description: "Our work anticipates tomorrow's trends while solving today's challenges, ensuring your digital assets remain relevant.",
                icon: "🔮"
              },
              {
                title: "Data-Driven Decisions",
                description: "We let metrics guide our strategies, not hunches, ensuring every decision is backed by actionable insights.",
                icon: "📊"
              },
              {
                title: "Agile Methodology",
                description: "Our flexible processes adapt to your evolving needs while maintaining rigorous quality standards.",
                icon: "🔄"
              },
              {
                title: "Transparent Operations",
                description: "Clear communication, honest timelines, and no hidden fees—just straightforward collaboration.",
                icon: "🔍"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -10 }}
                className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-2xl mb-6 group-hover:bg-gradient-to-br group-hover:from-[#ff5004]/20 group-hover:to-[#ff5004]/30 transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Key <span className="text-[#ff5004]">Milestones</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              Significant moments that have shaped our growth and evolution
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#ff5004] to-transparent"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: "2025",
                  title: "Company Founded",
                  description: "Core Digitize established with a vision to redefine digital services",
                  highlight: true
                },
                {
                  year: "2025 Q3",
                  title: "First Major Client",
                  description: "Secured our first enterprise client, validating our business model",
                  highlight: false
                },
                {
                  year: "2026",
                  title: "Service Expansion",
                  description: "Launched comprehensive animation and development divisions",
                  highlight: true
                },
                {
                  year: "2026 Q2",
                  title: "Team Growth",
                  description: "Expanded our team to 15 full-time digital experts",
                  highlight: false
                },
                {
                  year: "Future",
                  title: "Global Expansion",
                  description: "Plans underway to establish international presence",
                  highlight: true
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} bg-[#161616] rounded-2xl p-8 border ${milestone.highlight ? 'border-[#ff5004]/40' : 'border-[#ffffff10]'} relative`}>
                    <div className={`absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? '-left-16' : '-right-16'} w-8 h-8 rounded-full ${milestone.highlight ? 'bg-[#ff5004]' : 'bg-[#ffffff20]'} flex items-center justify-center`}>
                      <div className="w-4 h-4 rounded-full bg-white"></div>
                    </div>
                    <div className={`${milestone.highlight ? 'text-[#ff5004]' : 'text-white/70'} font-bold mb-2`}>{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to <span className="text-[#ff5004]">Transform</span> Your Digital Strategy?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
                Let's discuss how we can help your business thrive in the digital landscape
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleContactClick}
                  className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#ff5004]/30"
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleServicesClick}
                  className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5"
                >
                  Explore Services
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
    </div>
  );
}