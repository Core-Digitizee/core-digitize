import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiAward, FiUsers, FiGlobe, FiLayers } from 'react-icons/fi';

export default function About() {
  return (
    <div className="bg-[#060606] text-white overflow-hidden">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Leadership Section */}
      <LeadershipSection />

      {/* Global Presence Section */}
      <GlobalPresenceSection />

      {/* Milestones Section */}
      <MilestonesSection />

      {/* Culture Section */}
      <CultureSection />

      {/* CTA Section */}
      <AboutCTASection />
    </div>
  );
}

const AboutHeroSection = () => {
  return (
    <section className="relative min-h-[80vh] bg-[#060606] overflow-hidden isolate">
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
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12 flex items-center gap-4"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-14 h-14 bg-[#ff5004] rounded-xl flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-[#060606]">CD</span>
              </motion.div>
              <span className="text-white/80 text-xl font-light">Core Digitize</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-medium text-white leading-tight"
            >
              <span className="block mb-4">Engineering Digital</span>
              <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                Transformation
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 leading-relaxed max-w-2xl"
            >
              We are a collective of visionary technologists, creative strategists, and digital artisans committed to redefining what's possible in the digital landscape.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              {['ISO Certified', 'AI-First', 'Global Team', 'Enterprise Grade'].map((service) => (
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  key={service} 
                  className="px-4 py-2 bg-[#ffffff08] rounded-full border border-[#ff5004]/20"
                >
                  <span className="text-sm text-[#ff5004]">{service}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Holographic Globe */}
            <motion.div 
              animate={{
                rotateY: [0, 360],
                transition: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="absolute w-64 h-64 rounded-full border-2 border-[#ff5004]/20 flex items-center justify-center"
            >
              <div className="absolute w-full h-full rounded-full bg-[#ff5004]/5 backdrop-blur-sm"></div>
              <div className="absolute w-32 h-32 rounded-full bg-[#ff5004]/10 backdrop-blur-sm"></div>
              <div className="absolute w-16 h-16 rounded-full bg-[#ff5004]/20 backdrop-blur-sm"></div>
              <FiGlobe className="w-32 h-32 text-[#ff5004]/30" />
            </motion.div>

            {/* Floating Team Members */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.7 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="absolute w-16 h-16 bg-[#161616] rounded-full border-2 border-[#ff5004]/30 flex items-center justify-center text-xl"
                style={{
                  top: `${Math.random() * 60 + 20}%`,
                  left: `${Math.random() * 60 + 20}%`,
                }}
              >
                <span className="text-[#ff5004]">👩‍💻</span>
              </motion.div>
            ))}

            {/* Floating Projects */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.2 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className="absolute w-24 h-24 bg-[#161616] rounded-xl border-2 border-[#ff5004]/20 flex items-center justify-center"
                style={{
                  top: `${Math.random() * 60 + 20}%`,
                  left: `${Math.random() * 60 + 20}%`,
                }}
              >
                <FiLayers className="w-8 h-8 text-[#ff5004]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OurStorySection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#ffffff10]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Our Team" 
                className="w-full h-auto object-cover" 
                style={{ minHeight: '500px' }} 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-50 z-0"></div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4"
            >
              Our Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              From Vision to <span className="text-[#ff5004]">Global Impact</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              Founded in 2015, Core Digitize began as a small team of passionate technologists with a shared vision: to bridge the gap between cutting-edge technology and real-world business needs. What started as a boutique digital agency has since evolved into a global technology partner for enterprises and startups alike.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              Our journey has been marked by continuous innovation, strategic partnerships, and an unwavering commitment to delivering exceptional results. From our first project—a local business website—to our current work with Fortune 500 companies, our core philosophy remains unchanged: technology should serve as an enabler of human potential.
            </motion.p>
            
            {/* Timeline */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              {[
                { year: "2015", event: "Founded in San Francisco with 5 team members" },
                { year: "2017", event: "Expanded to European market with Berlin office" },
                { year: "2019", event: "Launched AI/ML division with 20+ experts" },
                { year: "2021", event: "Recognized as Top 100 Tech Companies by Forbes" },
                { year: "2023", event: "Global team of 150+ serving clients in 12 countries" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-[#ff5004]/10 flex items-center justify-center border border-[#ff5004]/20">
                      <span className="text-[#ff5004] font-medium">{item.year}</span>
                    </div>
                    {i < 4 && (
                      <div className="w-px h-full bg-[#ff5004]/20"></div>
                    )}
                  </div>
                  <div className="pt-1 pb-6">
                    <p className="text-white/90">{item.event}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR PHILOSOPHY
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Core</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Values</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The principles that guide every decision we make and every solution we deliver
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              description: "We challenge conventional thinking to create breakthrough solutions that redefine industries.",
              icon: "🚀"
            },
            {
              title: "Relentless Quality",
              description: "We settle for nothing less than excellence in every line of code and every pixel we create.",
              icon: "🏆"
            },
            {
              title: "Client-Centric",
              description: "Your success is our success. We measure our achievements by the impact we create for you.",
              icon: "🤝"
            },
            {
              title: "Data-Driven",
              description: "Every decision is backed by rigorous analysis and measurable outcomes.",
              icon: "📊"
            },
            {
              title: "Transparent Integrity",
              description: "We build trust through open communication, ethical practices, and accountability.",
              icon: "🔍"
            },
            {
              title: "Continuous Growth",
              description: "We foster a culture of learning, adaptation, and perpetual evolution.",
              icon: "🌱"
            }
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -10px rgba(255, 80, 4, 0.3)"
              }}
              className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-3xl mb-6 backdrop-blur-sm">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MEET THE TEAM
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Executive</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Leadership</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visionary leaders driving our strategic direction and technological innovation
          </motion.p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              name: "Alexandra Chen",
              title: "CEO & Founder",
              bio: "Serial entrepreneur with 15+ years in digital transformation. Former Google Product Lead.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            },
            {
              name: "James Rodriguez",
              title: "CTO",
              bio: "Ex-Microsoft architect specializing in cloud-native solutions and AI infrastructure.",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Sarah Johnson",
              title: "CRO",
              bio: "Growth strategist with expertise in scaling tech companies globally.",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
            },
            {
              name: "Michael Park",
              title: "VP of Engineering",
              bio: "Led engineering teams at Uber and Airbnb. Expert in scalable architectures.",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            },
            {
              name: "Priya Patel",
              title: "VP of Design",
              bio: "Human-centered design expert with Apple and IDEO background.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            },
            {
              name: "David Kim",
              title: "VP of AI Research",
              bio: "PhD in Machine Learning. Former OpenAI researcher.",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }
          ].map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-[#ff5004] mb-4">{leader.title}</p>
                <p className="text-white/80 mb-6">{leader.bio}</p>
                <button className="inline-flex items-center text-[#ff5004] hover:text-[#ff6120] group">
                  <span className="relative overflow-hidden">
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#ff5004] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    View Profile
                  </span>
                  <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA */}
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
                Meet Our Full Team
                <FiChevronRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GlobalPresenceSection = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
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
              Worldwide Reach
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              Global <span className="text-[#ff5004]">Footprint</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              With offices across three continents and team members in 12 countries, we combine global perspective with local expertise to deliver solutions that transcend borders.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-8 mt-12"
            >
              {[
                { value: "150+", label: "Team Members", icon: <FiUsers className="w-6 h-6" /> },
                { value: "12", label: "Countries", icon: <FiGlobe className="w-6 h-6" /> },
                { value: "5", label: "Global Offices", icon: <FiAward className="w-6 h-6" /> },
                { value: "24/7", label: "Support Coverage", icon: <FiLayers className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-[#ff5004]">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-white/60">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <div className="absolute inset-0 bg-[#161616] rounded-3xl overflow-hidden border border-[#ffffff10] flex items-center justify-center">
              {/* Simplified World Map with Office Locations */}
              <div className="relative w-full h-full">
                {/* World Map Background */}
                <div className="absolute inset-0 opacity-20 [background-image:url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png')] bg-contain bg-center bg-no-repeat"></div>
                
                {/* Office Locations */}
                {[
                  { top: "30%", left: "20%", city: "San Francisco" },
                  { top: "35%", left: "50%", city: "Berlin" },
                  { top: "55%", left: "75%", city: "Singapore" },
                  { top: "70%", left: "55%", city: "Sydney" },
                  { top: "25%", left: "75%", city: "Tokyo" }
                ].map((location, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute w-6 h-6 rounded-full bg-[#ff5004] flex items-center justify-center text-white font-bold text-xs"
                    style={{ top: location.top, left: location.left }}
                  >
                    {i+1}
                    <motion.div 
                      className="absolute -z-10 w-16 h-16 rounded-full bg-[#ff5004]/20"
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#ff5004]/5 rounded-full filter blur-[80px] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MilestonesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR ACHIEVEMENTS
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Key</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Milestones</span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrating the moments that define our journey and shape our future
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ff5004]/20 transform -translate-x-1/2"></div>
          
          {/* Milestones */}
          <div className="space-y-24">
            {[
              {
                year: "2023",
                title: "Forbes Tech 100 Recognition",
                description: "Named among the top 100 most innovative tech companies by Forbes",
                icon: "🏆"
              },
              {
                year: "2022",
                title: "AI Research Breakthrough",
                description: "Published groundbreaking research in neural network optimization",
                icon: "🧠"
              },
              {
                year: "2021",
                title: "Global Expansion",
                description: "Opened offices in Singapore and Sydney to serve APAC markets",
                icon: "🌏"
              },
              {
                year: "2020",
                title: "Enterprise Platform Launch",
                description: "Released our flagship enterprise digital transformation platform",
                icon: "🚀"
              },
              {
                year: "2019",
                title: "ISO 27001 Certification",
                description: "Achieved highest standards for information security management",
                icon: "🔒"
              }
            ].map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              >
                {/* Date */}
                <div className={`w-1/2 px-12 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <div className="text-2xl font-bold text-[#ff5004] mb-2">{milestone.year}</div>
                  </motion.div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ff5004] flex items-center justify-center text-white z-10 border-4 border-[#060606]">
                  {milestone.icon}
                </div>
                
                {/* Content */}
                <div className={`w-1/2 px-12 ${i % 2 === 0 ? 'text-left' : 'text-right'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-white/70">{milestone.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CultureSection = () => {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#ffffff10]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Our Culture" 
                className="w-full h-auto object-cover" 
                style={{ minHeight: '600px' }} 
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-50 z-0"></div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4"
            >
              Our Culture
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              Where <span className="text-[#ff5004]">Brilliance</span> Thrives
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed"
            >
              At Core Digitize, we've cultivated an environment where exceptional talent can do their best work. Our culture is built on collaboration, continuous learning, and a shared passion for solving complex challenges.
            </motion.p>
            
            {/* Culture Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-6 mt-12"
            >
              {[
                {
                  title: "Continuous Learning",
                  description: "Annual $5,000 education budget for each team member and weekly knowledge-sharing sessions",
                  icon: "📚"
                },
                {
                  title: "Work-Life Harmony",
                  description: "Flexible hours, unlimited PTO, and remote-first policy to support diverse lifestyles",
                  icon: "⚖️"
                },
                {
                  title: "Innovation Time",
                  description: "20% of work time dedicated to passion projects and experimental initiatives",
                  icon: "💡"
                },
                {
                  title: "Global Retreats",
                  description: "Annual company-wide gatherings in inspiring locations worldwide",
                  icon: "✈️"
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex gap-6 p-6 bg-[#161616] rounded-xl border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-xl bg-[#ff5004]/10 flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCTASection = () => {
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
              Join Our <span className="text-[#ff5004]">Mission</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
              Whether you're looking to collaborate or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
              >
                Explore Careers
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5"
              >
                Contact Leadership
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