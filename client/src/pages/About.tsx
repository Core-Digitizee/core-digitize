import { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck, FiAward, FiUsers, FiGlobe, FiClock } from 'react-icons/fi';
import Head from 'next/head';

export default function About() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      <Head>
        <title>About Core Digitize | Digital Transformation Experts</title>
        <meta name="description" content="Discover the vision, mission, and expertise behind Core Digitize - your trusted partner for digital transformation and technology innovation." />
      </Head>

      {/* Hero Section */}
      <AboutHero />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* Leadership Team */}
      <LeadershipTeam />

      {/* Company Timeline */}
      <CompanyTimeline />

      {/* Global Presence */}
      <GlobalPresence />

      {/* Awards & Recognition */}
      <AwardsRecognition />

      {/* Culture Section */}
      <CompanyCulture />

      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
}

const AboutHero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Our Story', 'Our Approach', 'Our Impact'];

  return (
    <section className="relative min-h-screen bg-[#060606] overflow-hidden isolate">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,80,4,0.1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
      </div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-[#ff5004]/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 10 - 5],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Company Identity */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-14 h-14 bg-[#ff5004] rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-[#060606]">CD</span>
              </div>
              <span className="text-white/80 text-xl font-light">Core Digitize</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-medium text-white leading-tight"
            >
              <span className="block mb-4">Redefining Digital</span>
              <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>

            {/* Tab Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex border-b border-[#ffffff15] mt-12"
            >
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative px-6 py-4 text-lg font-medium ${activeTab === index ? 'text-[#ff5004]' : 'text-white/60 hover:text-white'}`}
                >
                  {tab}
                  {activeTab === index && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5004]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Tab Content */}
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pt-6"
            >
              <AnimatePresence mode="wait">
                {activeTab === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xl text-white/70 leading-relaxed"
                  >
                    Founded in 2015, Core Digitize began as a small team of passionate technologists with a vision to bridge the gap between enterprise needs and digital innovation. Today, we've grown into a global force, delivering transformative solutions to Fortune 500 companies and ambitious startups alike.
                  </motion.p>
                )}
                {activeTab === 1 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xl text-white/70 leading-relaxed"
                  >
                    We combine cutting-edge technology with strategic business acumen, employing a proprietary framework that ensures measurable ROI. Our agile methodology and data-driven approach allow us to deliver exceptional results while maintaining the flexibility to adapt to evolving market demands.
                  </motion.p>
                )}
                {activeTab === 2 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-xl text-white/70 leading-relaxed"
                  >
                    Over the past 8 years, we've helped clients achieve an average of 300% ROI on digital initiatives, reduced operational costs by 45% through automation, and delivered solutions that collectively serve over 10 million users worldwide.
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {[
                { value: '8+', label: 'Years Experience' },
                { value: '150+', label: 'Team Members' },
                { value: '300+', label: 'Clients Served' },
                { value: '10M+', label: 'Users Impacted' }
              ].map((stat, i) => (
                <div key={i} className="bg-[#ffffff08] p-4 rounded-xl border border-[#ffffff10]">
                  <div className="text-2xl font-bold text-[#ff5004]">{stat.value}</div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Interactive Globe */}
          <div className="relative h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {/* Globe Base */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[400px] h-[400px] rounded-full border-2 border-[#ff5004]/20 flex items-center justify-center">
                    <div className="w-[360px] h-[360px] rounded-full border-2 border-[#ff5004]/15 flex items-center justify-center">
                      <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/5 backdrop-blur-sm">
                        {/* Animated Dots */}
                        {[...Array(20)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-[#ff5004] rounded-full"
                            style={{
                              left: `${50 + Math.cos(i * 0.3) * 40}%`,
                              top: `${50 + Math.sin(i * 0.3) * 40}%`,
                            }}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.7, 1, 0.7],
                              transition: {
                                duration: 2 + Math.random() * 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cities */}
                {[
                  { city: "New York", top: "30%", left: "25%", delay: 0.1 },
                  { city: "London", top: "25%", left: "50%", delay: 0.3 },
                  { city: "Singapore", top: "60%", left: "75%", delay: 0.5 },
                  { city: "Dubai", top: "55%", left: "60%", delay: 0.2 },
                  { city: "San Francisco", top: "40%", left: "15%", delay: 0.4 },
                ].map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: location.delay }}
                    className="absolute bg-[#ffffff08] px-3 py-2 rounded-full border border-[#ff5004]/20 backdrop-blur-sm"
                    style={{
                      top: location.top,
                      left: location.left,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-sm text-white flex items-center gap-1">
                      <span className="w-2 h-2 bg-[#ff5004] rounded-full"></span>
                      {location.city}
                    </span>
                  </motion.div>
                ))}

                {/* Floating Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-0 right-0 w-72 bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] shadow-lg"
                  whileHover={{ y: -10 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#ff5004]/10 flex items-center justify-center">
                      <FiGlobe className="text-[#ff5004]" />
                    </div>
                    <h3 className="font-medium">Global Reach</h3>
                  </div>
                  <p className="text-sm text-white/70 mb-4">With offices in 5 countries and clients across 3 continents, we deliver world-class solutions with local expertise.</p>
                  <button className="text-sm text-[#ff5004] hover:text-[#ff6120] flex items-center gap-1">
                    Explore locations <FiArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const [activeItem, setActiveItem] = useState(0);
  const items = [
    {
      title: "Our Mission",
      content: "To empower businesses through innovative digital solutions that drive measurable growth, operational efficiency, and competitive advantage in an increasingly complex technological landscape.",
      icon: <FiAward className="w-8 h-8 text-[#ff5004]" />
    },
    {
      title: "Our Vision",
      content: "To become the most trusted global partner for digital transformation, recognized for our technical excellence, strategic insight, and unwavering commitment to client success.",
      icon: <FiGlobe className="w-8 h-8 text-[#ff5004]" />
    },
    {
      title: "Our Promise",
      content: "We guarantee results-driven solutions, transparent communication, and continuous innovation - delivering not just what you ask for, but what you truly need to succeed in the digital age.",
      icon: <FiCheck className="w-8 h-8 text-[#ff5004]" />
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#060606] to-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Purpose & Direction
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Guiding <span className="text-[#ff5004]">Principles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            The foundation of everything we do at Core Digitize
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Interactive Cards */}
          <div className="space-y-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveItem(index)}
                className={`relative p-8 rounded-2xl cursor-pointer transition-all ${activeItem === index ? 'bg-[#161616] border border-[#ff5004]/30 shadow-lg shadow-[#ff5004]/10' : 'bg-[#101010] border border-[#ffffff10] hover:border-[#ff5004]/20'}`}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                    <p className="text-white/70">{item.content}</p>
                  </div>
                </div>
                {activeItem === index && (
                  <motion.div 
                    layoutId="activeMission"
                    className="absolute inset-0 border-2 border-[#ff5004]/30 rounded-2xl pointer-events-none"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column - Animated Visualization */}
          <div className="relative h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {activeItem === 0 && (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          transition: { duration: 5, repeat: Infinity }
                        }}
                        className="w-64 h-64 rounded-full bg-[#ff5004]/10 border-2 border-[#ff5004]/20"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                          transition: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-48 h-48 rounded-full border-2 border-dashed border-[#ff5004]/30"
                      >
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-10 h-10 bg-[#ff5004]/20 rounded-full flex items-center justify-center text-[#ff5004]"
                            style={{
                              transform: `rotate(${i * 90}deg) translate(80px) rotate(-${i * 90}deg)`,
                            }}
                          >
                            {['📈', '💡', '🚀', '🎯'][i]}
                          </div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ff5004]/30 to-[#ff5004]/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl">🎯</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeItem === 1 && (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                          transition: { duration: 8, repeat: Infinity }
                        }}
                        className="w-72 h-72 rounded-full bg-[#ff5004]/5 border border-[#ff5004]/10"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: -360,
                          transition: { duration: 40, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-56 h-56 rounded-full border-2 border-[#ff5004]/10"
                      >
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-8 h-8 rounded-full bg-[#ff5004] flex items-center justify-center"
                            style={{
                              transform: `rotate(${i * 60}deg) translate(100px) rotate(-${i * 60}deg)`,
                            opacity: 0.7
                            }}
                            animate={{
                              scale: [1, 0.8, 1],
                              transition: { duration: 3 + i, repeat: Infinity }
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#ff5004]/20 to-[#ff5004]/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl">🌎</span>
                      </div>
                    </div>
                  </div>
                )}
                {activeItem === 2 && (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          borderRadius: ["30%", "50%", "30%"],
                          transition: { duration: 6, repeat: Infinity }
                        }}
                        className="w-64 h-64 bg-[#ff5004]/10 border border-[#ff5004]/20"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{
                          rotate: 360,
                          transition: { duration: 25, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-48 h-48 rounded-full border border-[#ff5004]/20"
                      >
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-12 h-12 bg-[#ff5004]/30 rounded-lg flex items-center justify-center"
                            style={{
                              transform: `rotate(${i * 120}deg) translate(80px) rotate(-${i * 120}deg)`,
                            }}
                            animate={{
                              rotate: 360,
                              transition: { duration: 15, repeat: Infinity, ease: "linear" }
                            }}
                          >
                            {['🤝', '🔒', '✅'][i]}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-[#ff5004]/30 to-[#ff5004]/10 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-4xl">🤝</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValues = () => {
  const values = [
    {
      title: "Innovation",
      description: "We challenge conventional thinking to develop groundbreaking solutions that redefine industry standards.",
      icon: "💡",
      color: "from-[#ff5004]/20 to-[#ff5004]/10"
    },
    {
      title: "Integrity",
      description: "We uphold the highest ethical standards, ensuring transparency and trust in all our relationships.",
      icon: "🛡️",
      color: "from-[#00a1ff]/20 to-[#00a1ff]/10"
    },
    {
      title: "Excellence",
      description: "We pursue perfection in every detail, delivering work that exceeds expectations and stands the test of time.",
      icon: "🏆",
      color: "from-[#00ff88]/20 to-[#00ff88]/10"
    },
    {
      title: "Collaboration",
      description: "We believe the best results come from diverse perspectives working together toward a shared vision.",
      icon: "🤝",
      color: "from-[#a100ff]/20 to-[#a100ff]/10"
    },
    {
      title: "Impact",
      description: "We measure success by the tangible value we create for our clients and communities.",
      icon: "📈",
      color: "from-[#ff00a1]/20 to-[#ff00a1]/10"
    },
    {
      title: "Agility",
      description: "We adapt quickly to change, turning challenges into opportunities for growth and innovation.",
      icon: "⚡",
      color: "from-[#ffcc00]/20 to-[#ffcc00]/10"
    }
  ];

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
            Our DNA
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Core <span className="text-[#ff5004]">Values</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            The principles that guide every decision and action at Core Digitize
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden rounded-2xl border border-[#ffffff10] bg-[#161616] hover:border-[#ff5004]/30 transition-all"
            >
              {/* Animated Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-[#ffffff08] flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadershipTeam = () => {
  const [activeMember, setActiveMember] = useState(0);
  const members = [
    {
      name: "Alexandra Chen",
      title: "CEO & Founder",
      bio: "Visionary leader with 15+ years in digital transformation. Former CTO at Fortune 500 company. Alexandra's strategic thinking has guided Core Digitize from startup to industry leader.",
      image: "/team1.jpg",
      stats: [
        { label: "Years Experience", value: "15+" },
        { label: "Companies Founded", value: "3" },
        { label: "Patents", value: "7" }
      ],
      quote: "Digital transformation isn't about technology—it's about reimagining possibilities."
    },
    {
      name: "James Rodriguez",
      title: "CTO",
      bio: "Technology architect specializing in scalable systems and AI integration. PhD in Computer Science from MIT. James leads our technical innovation with a focus on sustainable, future-proof solutions.",
      image: "/team2.jpg",
      stats: [
        { label: "Systems Designed", value: "50+" },
        { label: "Tech Patents", value: "12" },
        { label: "Languages", value: "8" }
      ],
      quote: "The best technology disappears—it just works so seamlessly you don't notice it."
    },
    {
      name: "Sarah Johnson",
      title: "CMO",
      bio: "Digital marketing strategist with expertise in growth hacking and brand positioning across global markets. Sarah has pioneered our data-driven approach to customer engagement.",
      image: "/team3.jpg",
      stats: [
        { label: "Campaigns", value: "200+" },
        { label: "ROI Improvement", value: "450%" },
        { label: "Markets", value: "15" }
      ],
      quote: "In the digital age, your brand isn't what you say it is—it's what Google says it is."
    },
    {
      name: "Michael Patel",
      title: "VP of Engineering",
      bio: "Engineering leader focused on building high-performance teams that deliver exceptional technical solutions. Michael's rigorous approach ensures our solutions exceed industry standards.",
      image: "/team4.jpg",
      stats: [
        { label: "Team Size", value: "80+" },
        { label: "Projects", value: "150+" },
        { label: "Uptime", value: "99.99%" }
      ],
      quote: "Great engineering is invisible—it's the problems you don't have that prove our success."
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#060606] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Meet The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Leadership <span className="text-[#ff5004]">Team</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            The brilliant minds driving Core Digitize's vision forward
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Team Member Navigation */}
          <div className="relative h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Circular Navigation */}
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-[500px] h-[500px] rounded-full border-2 border-dashed border-[#ffffff10]">
                    {members.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveMember(i)}
                        className={`absolute w-16 h-16 rounded-full flex items-center justify-center transition-all ${activeMember === i ? 'bg-[#ff5004] scale-110' : 'bg-[#ffffff10] hover:bg-[#ffffff20]'}`}
                        style={{
                          transform: `rotate(${i * 90}deg) translate(250px) rotate(-${i * 90}deg)`,
                        }}
                      >
                        <span className="text-white text-xl">{i + 1}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Active Member Display */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMember}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-[#ffffff20]">
                      {/* Placeholder for team member image */}
                      <div className="absolute inset-0 bg-[#ffffff10] flex items-center justify-center text-white/30">
                        <span className="text-4xl">👤</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h3 className="text-xl font-bold">{members[activeMember].name}</h3>
                        <p className="text-[#ff5004] text-sm">{members[activeMember].title}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Team Member Details */}
          <div className="flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10]"
              >
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-2">{members[activeMember].name}</h3>
                  <p className="text-[#ff5004] text-lg">{members[activeMember].title}</p>
                </div>
                
                <p className="text-white/80 mb-8 leading-relaxed">{members[activeMember].bio}</p>
                
                <div className="mb-8 p-6 bg-[#ffffff05] rounded-xl border-l-4 border-[#ff5004]">
                  <blockquote className="text-white/90 italic">"{members[activeMember].quote}"</blockquote>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {members[activeMember].stats.map((stat, i) => (
                    <div key={i} className="bg-[#ffffff08] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff5004]">{stat.value}</div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const CompanyTimeline = () => {
  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "Core Digitize established with a small team of 5 in San Francisco.",
      icon: "🚀"
    },
    {
      year: "2016",
      title: "First Major Client",
      description: "Secured partnership with Fortune 500 tech company, validating our approach.",
      icon: "💼"
    },
    {
      year: "2017",
      title: "Series A Funding",
      description: "Raised $15M to expand engineering team and service offerings.",
      icon: "💰"
    },
    {
      year: "2018",
      title: "International Expansion",
      description: "Opened offices in London and Singapore to serve global clients.",
      icon: "🌎"
    },
    {
      year: "2019",
      title: "AI Platform Launch",
      description: "Introduced proprietary AI solution that reduced client costs by 40%.",
      icon: "🤖"
    },
    {
      year: "2020",
      title: "Pandemic Response",
      description: "Adapted services to help 50+ clients transition to remote operations.",
      icon: "🦠"
    },
    {
      year: "2021",
      title: "Acquisition",
      description: "Acquired competitor's AI division to enhance our capabilities.",
      icon: "🛒"
    },
    {
      year: "2022",
      title: "Sustainability Focus",
      description: "Launched green computing initiative reducing client carbon footprints.",
      icon: "🌱"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named 'Most Innovative Tech Firm' by Global Tech Awards.",
      icon: "🏆"
    }
  ];

  const [activeMilestone, setActiveMilestone] = useState(4); // Center the timeline on load

  return (
    <section className="relative py-32 bg-[#060606] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Company <span className="text-[#ff5004]">Timeline</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            Key milestones in our evolution as industry leaders
          </p>
        </motion.div>

        <div className="relative h-[600px]">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff5004] via-[#ff5004]/30 to-[#ff5004] transform -translate-x-1/2" />
          
          {/* Milestones */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute top-1/2 left-0 right-0 flex transition-transform duration-500"
              style={{ transform: `translateY(-50%) translateX(${50 - activeMilestone * 25}%)` }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex-shrink-0 w-64 px-4 transition-all ${activeMilestone === index ? 'scale-110' : 'scale-90 opacity-70'}`}
                  onClick={() => setActiveMilestone(index)}
                >
                  <div className={`relative p-6 rounded-2xl cursor-pointer transition-all ${activeMilestone === index ? 'bg-[#161616] border-2 border-[#ff5004] shadow-lg' : 'bg-[#101010] border border-[#ffffff10] hover:border-[#ff5004]/50'}`}>
                    <div className={`absolute top-0 left-1/2 w-6 h-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${activeMilestone === index ? 'bg-[#ff5004] scale-125' : 'bg-[#ffffff20]'}`}>
                      <span className="text-xs">{milestone.icon}</span>
                    </div>
                    <div className="text-center">
                      <div className="text-[#ff5004] font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-white/70">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Year Navigation */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-4">
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMilestone(index)}
                className={`w-3 h-3 rounded-full transition-all ${activeMilestone === index ? 'bg-[#ff5004] scale-125' : 'bg-[#ffffff30] hover:bg-[#ffffff50]'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const GlobalPresence = () => {
  const offices = [
    { city: "San Francisco", country: "USA", employees: "85", established: "2015" },
    { city: "New York", country: "USA", employees: "42", established: "2017" },
    { city: "London", country: "UK", employees: "38", established: "2018" },
    { city: "Singapore", country: "Singapore", employees: "29", established: "2018" },
    { city: "Dubai", country: "UAE", employees: "15", established: "2020" }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#060606] to-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Worldwide Network
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Global <span className="text-[#ff5004]">Presence</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            Serving clients across continents with local expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Visualization */}
          <div className="relative h-[500px]">
            <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-center bg-no-repeat opacity-20" />
            
            {/* Office Dots */}
            {[
              { top: "40%", left: "15%", city: "San Francisco" },
              { top: "45%", left: "25%", city: "New York" },
              { top: "35%", left: "48%", city: "London" },
              { top: "60%", left: "78%", city: "Singapore" },
              { top: "50%", left: "62%", city: "Dubai" }
            ].map((location, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="absolute w-8 h-8 rounded-full bg-[#ff5004] flex items-center justify-center text-white font-bold cursor-pointer"
                style={{ top: location.top, left: location.left }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-normal">
                  {location.city}
                </div>
                <div className="absolute inset-0 rounded-full bg-[#ff5004] animate-ping opacity-20" />
                {i + 1}
              </motion.div>
            ))}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {[
                { x1: "15%", y1: "40%", x2: "25%", y2: "45%" },
                { x1: "25%", y1: "45%", x2: "48%", y2: "35%" },
                { x1: "48%", y1: "35%", x2: "62%", y2: "50%" },
                { x1: "62%", y1: "50%", x2: "78%", y2: "60%" }
              ].map((line, i) => (
                <line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="#ff5004"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              ))}
            </svg>
          </div>

          {/* Offices List */}
          <div className="space-y-6">
            {offices.map((office, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#ff5004]/10 p-3 rounded-lg">
                    <FiGlobe className="text-[#ff5004] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{office.city}, {office.country}</h3>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <div className="text-sm text-white/60">Employees</div>
                        <div className="text-lg font-bold">{office.employees}</div>
                      </div>
                      <div>
                        <div className="text-sm text-white/60">Established</div>
                        <div className="text-lg font-bold">{office.established}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardsRecognition = () => {
  const awards = [
    {
      title: "Global Tech Innovation Award",
      year: "2023",
      organization: "International Tech Association",
      description: "Recognized for our groundbreaking AI-powered analytics platform",
      icon: "🏆"
    },
    {
      title: "Best Workplace for Engineers",
      year: "2022",
      organization: "Tech Talent Magazine",
      description: "Voted top employer by our engineering team for culture and benefits",
      icon: "👨‍💻"
    },
    {
      title: "Sustainability Champion",
      year: "2021",
      organization: "Green Tech Foundation",
      description: "Awarded for reducing client carbon footprints by an average of 35%",
      icon: "🌱"
    },
    {
      title: "Fastest Growing Company",
      year: "2020",
      organization: "Business Growth Awards",
      description: "Recognized for 300% revenue growth over three years",
      icon: "📈"
    }
  ];

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
            Industry Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Awards & <span className="text-[#ff5004]">Achievements</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            Celebrating excellence and innovation in digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl">{award.icon}</div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold">{award.title}</h3>
                    <span className="bg-[#ff5004]/10 text-[#ff5004] px-3 py-1 rounded-full text-sm">{award.year}</span>
                  </div>
                  <p className="text-[#ff5004] mb-3">{award.organization}</p>
                  <p className="text-white/70">{award.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Trophies */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              rotate: [0, Math.random() * 20 - 10],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
          >
            {['🏆', '🎖️', '🏅', '🥇'][i % 4]}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CompanyCulture = () => {
  const cultureHighlights = [
    {
      title: "Continuous Learning",
      description: "Weekly tech talks, sponsored certifications, and $5k annual education budget per employee",
      icon: "📚"
    },
    {
      title: "Work-Life Harmony",
      description: "Unlimited PTO, flexible schedules, and mandatory minimum vacation policy",
      icon: "⚖️"
    },
    {
      title: "Innovation Time",
      description: "20% of work time dedicated to passion projects and experimental ideas",
      icon: "💡"
    },
    {
      title: "Community Impact",
      description: "Paid volunteer days and company-matched donations to tech education nonprofits",
      icon: "🤝"
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] to-[#060606] overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Behind The Scenes
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Our <span className="text-[#ff5004]">Culture</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            The environment that fuels our innovation and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {cultureHighlights.map((highlight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all group"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-white/70">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Culture Stats */}
        <div className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "94%", label: "Employee Satisfaction" },
              { value: "4.9/5", label: "Glassdoor Rating" },
              { value: "78%", label: "Promote From Within" },
              { value: "12%", label: "Avg. Annual Growth" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-[#ff5004] mb-2">{stat.value}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCTA = () => {
  return (
    <section className="relative py-32 bg-[#060606] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 border border-[#ffffff10] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,80,4,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              Ready to Transform <span className="text-[#ff5004]">Your Business?</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-white/70 mb-10"
            >
              Discover how Core Digitize can help you achieve your digital transformation goals with our proven expertise and innovative solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-[#ff5004] hover:bg-[#ff6120] text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-2">
                Get Started <FiArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-transparent hover:bg-[#ffffff10] border border-[#ffffff30] text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center gap-2">
                Meet Our Team <FiUsers className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};