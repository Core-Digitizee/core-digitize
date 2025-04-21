import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck, FiAward, FiUsers, FiGlobe, FiLayers } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Culture Section */}
      <CultureSection />

      {/* Milestones Section */}
      <MilestonesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function AboutHeroSection() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleTeamClick = () => {
    navigate('/team');
  };

  return (
    <section className="relative min-h-[80vh] bg-[#060606] overflow-hidden isolate">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]" />
      </div>

      {/* Floating Tech Elements */}
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
      <div className="relative z-10 container mx-auto px-4 py-32 flex flex-col justify-center h-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-8"
          >
            About Core Digitize
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Engineering</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Digital Excellence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            We are a collective of passionate innovators, strategic thinkers, and meticulous engineers dedicated to crafting exceptional digital experiences that drive measurable business impact.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleContactClick}
              className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl
                         transition-all duration-300 shadow-lg shadow-[#ff5004]/30
                         flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTeamClick}
              className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                         font-semibold rounded-xl transition-all duration-300 backdrop-blur-lg bg-white/5
                         flex items-center gap-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Meet Our Team
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 text-center"
      >
        {[
          { value: '300+', label: 'Projects Delivered', icon: <FiLayers className="w-6 h-6 mx-auto mb-2" /> },
          { value: '99.9%', label: 'Client Satisfaction', icon: <FiCheck className="w-6 h-6 mx-auto mb-2" /> },
          { value: '50+', label: 'Team Members', icon: <FiUsers className="w-6 h-6 mx-auto mb-2" /> },
          { value: '4.9/5', label: 'Average Rating', icon: <FiAward className="w-6 h-6 mx-auto mb-2" /> }
        ].map((metric, i) => (
          <motion.div 
            key={i} 
            className="text-[#ff5004]"
            whileHover={{ y: -5 }}
          >
            <div className="text-[#ff5004]">{metric.icon}</div>
            <div className="text-2xl font-medium">{metric.value}</div>
            <div className="text-sm text-white/60">{metric.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        @keyframes float {
          0% { transform: translate(0, 0px); }
          50% { transform: translate(0, 15px); }
          100% { transform: translate(0, -0px); }
        }
      `}</style>
    </section>
  );
}

const CoreValuesSection = () => {
  const [activeValue, setActiveValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      title: "Innovation",
      description: "We challenge conventional thinking to develop groundbreaking solutions that drive digital transformation.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We pursue perfection in every deliverable, ensuring our work exceeds industry standards and client expectations.",
      icon: "🏆"
    },
    {
      title: "Integrity",
      description: "We maintain transparency, honesty, and ethical practices in all our business relationships and operations.",
      icon: "🤝"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients, to achieve extraordinary results.",
      icon: "🧩"
    },
    {
      title: "Impact",
      description: "We measure success by the tangible business outcomes and value we create for our clients.",
      icon: "📈"
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden bg-gradient-to-b from-[#060606] to-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6"
          >
            Our Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Core</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Values</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            The principles that guide our decisions, shape our culture, and define our approach to delivering exceptional results
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Values Navigation */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                onClick={() => setActiveValue(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  activeValue === index
                    ? 'bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 border border-[#ff5004]/30'
                    : 'bg-[#161616] hover:bg-[#1e1e1e] border border-[#ffffff10]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-3xl ${
                    activeValue === index ? 'bg-[#ff5004]/20 text-[#ff5004]' : 'bg-[#ffffff08] text-white/70'
                  }`}>
                    {value.icon}
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    activeValue === index ? 'text-white' : 'text-white/80'
                  }`}>
                    {value.title}
                  </h3>
                </div>
                {activeValue === index && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 text-white/70 pl-20"
                  >
                    {value.description}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            {/* Animated Orb */}
            <motion.div
              animate={{
                rotate: [0, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                {/* Core */}
                <div className="absolute inset-0 bg-[#ff5004]/10 rounded-full blur-xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-[#ff5004]/20 to-[#ff5004]/5 rounded-full border border-[#ff5004]/20"></div>
                
                {/* Floating Value Indicators */}
                {values.map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-12 h-12 bg-[#ffffff08] rounded-full flex items-center justify-center text-xl border border-[#ff5004]/20"
                    initial={{ 
                      x: 0,
                      y: 0,
                      opacity: 0
                    }}
                    animate={{ 
                      x: Math.cos(i * (2 * Math.PI / values.length)) * 140,
                      y: Math.sin(i * (2 * Math.PI / values.length)) * 140,
                      opacity: 1,
                      transition: { 
                        delay: i * 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                      }
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: 'rgba(255, 80, 4, 0.2)',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {values[i].icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Value Highlight */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-[#161616] rounded-2xl p-6 border border-[#ffffff10]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#ff5004]/20 flex items-center justify-center text-2xl text-[#ff5004]">
                  {values[activeValue].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{values[activeValue].title}</h3>
              </div>
              <p className="text-white/70">{values[activeValue].description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/journey');
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-[#ff5004] via-[#ff5004]/30 to-transparent"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2018",
                  title: "Foundation",
                  description: "Core Digitize was founded by a team of digital experts with a vision to bridge the gap between enterprise technology and measurable business impact."
                },
                {
                  year: "2019",
                  title: "First Major Client",
                  description: "Secured our first Fortune 500 client, delivering a comprehensive digital transformation that increased their online revenue by 150%."
                },
                {
                  year: "2020",
                  title: "Technology Expansion",
                  description: "Expanded our service offerings to include AI-driven solutions and cloud-native development, positioning us as innovators in the digital space."
                },
                {
                  year: "2022",
                  title: "Team Growth",
                  description: "Grew our team to 50+ specialists across development, design, and digital marketing, enabling us to take on more complex projects."
                },
                {
                  year: "2023",
                  title: "Current Focus",
                  description: "Pioneering next-gen solutions in Web3, AI integration, and performance marketing while maintaining our commitment to excellence."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Year Marker */}
                  <div className="absolute left-0 top-1 w-16 h-16 rounded-full bg-gradient-to-br from-[#ff5004] to-[#ff8c00] flex items-center justify-center text-white font-bold">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full"
            >
              Our Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              From Vision to <span className="text-[#ff5004]">Industry Leader</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              What began as a small team of passionate technologists has grown into a premier digital solutions provider trusted by industry leaders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70"
            >
              Our journey reflects our commitment to innovation, quality, and client success at every stage of growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReadMore}
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                           font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5
                           flex items-center gap-3"
              >
                Explore Our Full Journey
                <FiArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  const navigate = useNavigate();

  const handleViewTeam = () => {
    navigate('/team');
  };

  const leaders = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in digital transformation and enterprise technology.",
      img: "/team/alex.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technology strategist specializing in scalable architectures and AI integration.",
      img: "/team/sarah.jpg"
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Product",
      bio: "Product development expert focused on user-centric design and measurable outcomes.",
      img: "/team/michael.jpg"
    },
    {
      name: "Emma Williams",
      role: "Head of Growth",
      bio: "Growth hacker with a proven track record in scaling digital businesses.",
      img: "/team/emma.jpg"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#060606]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6"
          >
            Leadership
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Strategic</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Our executive team combines decades of industry experience with forward-thinking vision to drive digital excellence.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-3xl"
            >
              {/* Leader Image */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-[#ff5004]/10 mix-blend-overlay z-10"></div>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Leader Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-[#ff5004] mb-3">{leader.role}</p>
                <p className="text-white/80 text-sm">{leader.bio}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-[#ff5004]/30 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleViewTeam}
            className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl
                       transition-all duration-300 shadow-lg shadow-[#ff5004]/30
                       flex items-center gap-3 mx-auto"
          >
            <FiUsers className="w-5 h-5" />
            Meet Our Full Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const CultureSection = () => {
  const culturePillars = [
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth with regular training, conferences, and access to cutting-edge resources.",
      icon: "📚"
    },
    {
      title: "Collaborative Environment",
      description: "Cross-functional teamwork and knowledge sharing are at the heart of our problem-solving approach.",
      icon: "🤝"
    },
    {
      title: "Work-Life Harmony",
      description: "Flexible schedules and remote options ensure our team can do their best work while maintaining balance.",
      icon: "⚖️"
    },
    {
      title: "Innovation Time",
      description: "Dedicated hours each week for team members to explore new technologies and creative ideas.",
      icon: "💡"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#060606]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full"
            >
              Our Culture
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Where <span className="text-[#ff5004]">Talent</span> Thrives
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70"
            >
              We've built an environment that fosters creativity, collaboration, and professional growth.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70"
            >
              Our culture is our competitive advantage, attracting top talent who share our passion for digital excellence.
            </motion.p>
          </div>

          {/* Right Column - Culture Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {culturePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-2xl mb-4 text-[#ff5004]">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
              <img 
                src={`/team/team-${item}.jpg`} 
                alt={`Team member ${item}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const MilestonesSection = () => {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Launched with 5 team members and a vision for digital excellence"
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Secured Fortune 500 client, validating our enterprise approach"
    },
    {
      year: "2020",
      title: "AI Division Launched",
      description: "Expanded into artificial intelligence and machine learning services"
    },
    {
      year: "2021",
      title: "50 Projects Delivered",
      description: "Reached milestone of 50 successful client engagements"
    },
    {
      year: "2022",
      title: "Team Growth",
      description: "Expanded to 50+ specialists across multiple disciplines"
    },
    {
      year: "2023",
      title: "300+ Projects",
      description: "Delivered over 300 successful digital solutions to clients"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6"
          >
            Our Progress
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Key <span className="text-[#ff5004]">Milestones</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto text-xl text-white/70"
          >
            Our journey of growth, innovation, and impact through the years
          </motion.p>
        </div>

        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#ff5004] to-transparent z-0"></div>
          
          {/* Milestones */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 z-10">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                {/* Year Marker */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff5004] to-[#ff8c00] flex items-center justify-center text-white font-bold mx-auto mb-6 relative">
                  {milestone.year}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-[#ff5004] to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all h-full">
                  <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-white/70">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to <span className="text-[#ff5004]">Partner</span> With Us?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
              Let's discuss how we can help you achieve your digital transformation goals
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