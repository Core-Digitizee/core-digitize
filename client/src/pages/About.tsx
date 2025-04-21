import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// Enhanced GlobalStyles with smooth scrolling
const GlobalStyles = () => (
  <style>{`
    html {
      scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #0a0a0a;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #ff5004, #ff732e);
      border-radius: 5px;
      border: 2px solid #0a0a0a;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #ff6120, #ff8440);
    }
    ::-webkit-scrollbar-corner {
      background: #0a0a0a;
    }
  `}</style>
);

export default function AboutUs() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  // State for interactive elements
  const [activeTab, setActiveTab] = useState('mission');
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);

  // Navigation handlers
  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#060606] text-white" ref={containerRef}>
      <GlobalStyles />
      
      {/* Animated Navigation Bar */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-[#060606]/90 backdrop-blur-md border-b border-[#ffffff10]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateTo('/')}
            className="flex items-center cursor-pointer"
          >
            <img src="/Logo.png" alt="Core Digitize" className="h-10 w-10 mr-3" />
            <span className="text-2xl font-bold">
              <span className="text-[#ff5004]">core</span>
              <span className="text-white">digitize</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['story', 'values', 'team', 'process', 'clients', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ color: '#ff5004', y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo(item)}
                className="text-white/80 hover:text-white text-sm uppercase tracking-wider font-medium"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ff5004' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('/contact')}
              className="px-6 py-2 bg-[#ff5004]/80 hover:bg-[#ff5004] text-white rounded-lg text-sm font-medium transition-all"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"
          style={{ y: y1 }}
        />
        
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#ff5004]/10 filter blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider">
                WHO WE ARE
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Redefining</span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Digital Excellence</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                We are a collective of strategists, designers, and engineers committed to building transformative digital experiences that drive measurable business impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollTo('story')}
                  className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all flex items-center gap-3"
                >
                  Our Story <FiChevronDown className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigateTo('/contact')}
                  className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5 flex items-center gap-3"
                >
                  Contact Us <FiArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => scrollTo('story')}
        >
          <div className="w-10 h-16 rounded-full border-2 border-[#ff5004]/50 flex justify-center p-1">
            <motion.div
              className="w-2 h-4 rounded-full bg-[#ff5004]"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section id="story" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
                  OUR JOURNEY
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  From Vision to <span className="text-[#ff5004]">Global Impact</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  Founded in 2015, Core Digitize began as a small team of passionate technologists with a shared vision to revolutionize digital experiences. Today, we're a global force with offices in 5 countries, serving Fortune 500 companies and innovative startups alike.
                </p>
              </motion.div>
              
              {/* Interactive Timeline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="space-y-8 pl-8 border-l-2 border-[#ff5004]/30">
                  {timelineData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="relative group"
                    >
                      <div className="absolute -left-8 top-0 w-4 h-4 rounded-full bg-[#ff5004] border-4 border-[#060606] group-hover:scale-125 transition-transform"></div>
                      <div className="bg-[#161616] rounded-xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-white">{item.year}</h3>
                          <span className="px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-xs font-medium">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-white/70">{item.event}</p>
                        {item.details && (
                          <p className="text-sm text-white/50 mt-2">{item.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-full"
            >
              <div className="sticky top-32 space-y-8">
                {/* Mission/Vision Toggle */}
                <div className="bg-[#161616] rounded-xl overflow-hidden border border-[#ffffff10]">
                  <div className="flex border-b border-[#ffffff10]">
                    {['mission', 'vision', 'approach'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-center font-medium text-sm uppercase tracking-wider transition-all ${
                          activeTab === tab 
                            ? 'text-[#ff5004] border-b-2 border-[#ff5004]' 
                            : 'text-white/50 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {activeTab === 'mission' && (
                          <>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                            <p className="text-white/70 leading-relaxed">
                              To empower businesses through innovative digital solutions that drive growth, efficiency, and competitive advantage. We combine cutting-edge technology with strategic thinking to deliver measurable results.
                            </p>
                            <ul className="space-y-3 mt-6">
                              {['Technology Innovation', 'Client Success', 'Sustainable Growth', 'Ethical Practices'].map((item) => (
                                <li key={item} className="flex items-start">
                                  <span className="text-[#ff5004] mr-3">✓</span>
                                  <span className="text-white/80">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {activeTab === 'vision' && (
                          <>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-white/70 leading-relaxed">
                              To be the most trusted digital transformation partner for forward-thinking organizations worldwide. We envision a future where technology seamlessly enhances every aspect of business operations and customer experiences.
                            </p>
                          </>
                        )}
                        {activeTab === 'approach' && (
                          <>
                            <h3 className="text-2xl font-bold text-white mb-4">Our Approach</h3>
                            <p className="text-white/70 leading-relaxed">
                              We follow a proven methodology that combines strategic planning, agile development, and continuous optimization to ensure successful outcomes.
                            </p>
                            <div className="mt-6 space-y-4">
                              {[
                                { step: 'Discovery', desc: 'Deep dive into your business needs' },
                                { step: 'Strategy', desc: 'Custom roadmap for digital success' },
                                { step: 'Execution', desc: 'Agile development with transparency' },
                                { step: 'Optimization', desc: 'Continuous improvement cycles' }
                              ].map((item, i) => (
                                <div key={i} className="flex items-start">
                                  <div className="w-8 h-8 rounded-full bg-[#ff5004]/10 text-[#ff5004] flex items-center justify-center mr-4 font-bold">
                                    {i + 1}
                                  </div>
                                  <div>
                                    <h4 className="font-bold text-white">{item.step}</h4>
                                    <p className="text-white/60 text-sm">{item.desc}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
                
                {/* Stats Card */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '8+', label: 'Years Experience' },
                    { value: '200+', label: 'Projects Delivered' },
                    { value: '95%', label: 'Client Retention' },
                    { value: '5', label: 'Global Offices' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-[#161616] rounded-lg p-4 border border-[#ffffff10] text-center"
                    >
                      <div className="text-3xl font-bold text-[#ff5004] mb-1">{stat.value}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              OUR CORE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Principles That <span className="text-[#ff5004]">Define Us</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              These values guide every decision we make and every solution we deliver
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuesData.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all group"
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff5004]/10 to-[#ff5004]/20 flex items-center justify-center text-3xl mb-6 text-[#ff5004] group-hover:rotate-6 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/70 mb-6 flex-1">{value.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {value.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 bg-[#ffffff05] text-white/60 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet The <span className="text-[#ff5004]">Minds</span> Behind The Magic
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              A diverse collective of strategists, creators, and technologists united by passion
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamData.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div 
                  className={`bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/50 transition-all cursor-pointer ${expandedTeamMember === i ? 'h-auto' : 'h-[500px]'}`}
                  onClick={() => setExpandedTeamMember(expandedTeamMember === i ? null : i)}
                >
                  <div className="h-64 bg-gradient-to-br from-[#ff5004]/10 to-[#060606] relative overflow-hidden">
                    {/* Team member image would go here */}
                    <div className="absolute inset-0 flex items-center justify-center text-5xl text-white/20">
                      {member.initials}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-[#ff5004]">{member.position}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-white/50">{member.department}</div>
                      <div className="flex items-center space-x-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff5004] transition-colors">
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-[#ff5004] transition-colors">
                            <FaTwitter className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${expandedTeamMember === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <p className="text-white/70 mb-4">{member.bio}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-white/80 mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, j) => (
                            <span key={j} className="px-3 py-1 bg-[#ffffff05] text-white/60 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateTo('/contact');
                        }}
                        className="w-full mt-4 px-4 py-2 bg-[#ff5004]/10 hover:bg-[#ff5004]/20 text-[#ff5004] rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2"
                      >
                        Contact {member.name.split(' ')[0]} <FiArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className={`flex items-center justify-center pt-4 ${expandedTeamMember === i ? 'opacity-0 h-0' : 'opacity-100 h-auto'} transition-all`}>
                      <FiChevronDown className="w-5 h-5 text-[#ff5004] animate-bounce" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Join Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 text-center"
          >
            <div className="inline-block p-[1px] rounded-2xl bg-gradient-to-r from-[#ff5004] to-[#ff8c00] hover:shadow-lg hover:shadow-[#ff5004]/20 transition-shadow">
              <button 
                onClick={() => navigateTo('/careers')}
                className="relative overflow-hidden px-8 py-4 bg-[#060606] rounded-2xl group w-full"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-out" />
                <span className="relative z-10 flex items-center justify-center text-lg font-bold text-white">
                  Join Our Team
                  <FiArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              OUR METHOD
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Core Digitize <span className="text-[#ff5004]">Process</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              A proven framework that ensures success at every stage of your project
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ff5004] via-[#ff5004]/50 to-[#ff5004] hidden lg:block"></div>
            
            <div className="space-y-20 lg:space-y-32">
              {processData.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative"
                >
                  {/* Process Dot */}
                  <div className="hidden lg:block absolute left-16 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#ff5004] border-4 border-[#0a0a0a]"></div>
                  
                  <div className={`bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] lg:ml-32 ${i % 2 === 0 ? 'lg:mr-20' : 'lg:ml-20'}`}>
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 rounded-xl bg-[#ff5004]/10 text-[#ff5004] flex items-center justify-center text-2xl font-bold mr-6">
                          0{i + 1}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-[#ff5004]">{step.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-6">{step.description}</p>
                      
                      <div className="bg-[#0a0a0a] rounded-xl p-6">
                        <h4 className="text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">Key Activities</h4>
                        <ul className="space-y-3">
                          {step.activities.map((activity, j) => (
                            <li key={j} className="flex items-start">
                              <span className="text-[#ff5004] mr-3">•</span>
                              <span className="text-white/80">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {step.deliverables && (
                        <div className="mt-6">
                          <h4 className="text-sm font-bold text-white/80 mb-3 uppercase tracking-wider">Deliverables</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((item, j) => (
                              <span key={j} className="px-3 py-1 bg-[#ffffff05] text-white/60 rounded-full text-xs">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              OUR PARTNERS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted By <span className="text-[#ff5004]">Industry Leaders</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-white/70">
              We're proud to collaborate with innovative organizations across industries
            </p>
          </motion.div>
          
          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#161616] rounded-xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 flex items-center justify-center h-32 transition-all"
              >
                <div className="text-2xl font-bold text-white/20">CLIENT {i + 1}</div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 grid md:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
              >
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#ff5004]" fill="currentColor" viewBox="0 0 20 20">
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
                    <p className="text-sm text-white/60">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to <span className="text-[#ff5004]">Elevate</span> Your Digital Presence?
                </h2>
                <p className="text-xl text-white/70">
                  Let's discuss how Core Digitize can help you achieve your business objectives through innovative technology solutions.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateTo('/contact')}
                  className="bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl p-6 transition-all flex flex-col items-center"
                >
                  <span className="text-2xl mb-2">📞</span>
                  <span>Book a Call</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateTo('/contact')}
                  className="bg-[#161616] border border-[#ffffff10] hover:border-[#ff5004]/50 text-white font-semibold rounded-xl p-6 transition-all flex flex-col items-center"
                >
                  <span className="text-2xl mb-2">✉️</span>
                  <span>Send Message</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => navigateTo('/contact')}
                  className="bg-[#161616] border border-[#ffffff10] hover:border-[#ff5004]/50 text-white font-semibold rounded-xl p-6 transition-all flex flex-col items-center"
                >
                  <span className="text-2xl mb-2">💼</span>
                  <span>Request Proposal</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Enhanced Data
const timelineData = [
  { 
    year: "2015", 
    category: "Foundation",
    event: "Core Digitize founded with focus on web development",
    details: "Started in a small office with just 3 team members"
  },
  { 
    year: "2017", 
    category: "Growth",
    event: "Expanded service offerings to include digital marketing",
    details: "First major client project with Fortune 500 company"
  },
  { 
    year: "2019", 
    category: "Innovation",
    event: "Launched AI/ML division for advanced analytics",
    details: "Developed proprietary algorithms for customer behavior prediction"
  },
  { 
    year: "2021", 
    category: "Global",
    event: "Opened international offices in 3 countries",
    details: "Established teams in London, Singapore, and Toronto"
  },
  { 
    year: "2023", 
    category: "Future",
    event: "Pioneering Web3 and Metaverse solutions",
    details: "Developing cutting-edge blockchain applications"
  }
];

const valuesData = [
  { 
    icon: "🚀",
    title: "Innovation",
    description: "We constantly push boundaries to explore new technologies and methodologies that deliver competitive advantage.",
    tags: ["R&D", "Emerging Tech", "Experimentation"]
  },
  { 
    icon: "🎯",
    title: "Excellence",
    description: "Quality is never compromised. We deliver solutions that meet the highest standards of performance and reliability.",
    tags: ["Quality", "Precision", "Craftsmanship"]
  },
  { 
    icon: "🤝",
    title: "Partnership",
    description: "We view every client relationship as a long-term partnership, invested in your ongoing success.",
    tags: ["Collaboration", "Trust", "Commitment"]
  },
  { 
    icon: "🌍",
    title: "Impact",
    description: "Our work aims to create meaningful, measurable impact for businesses and communities alike.",
    tags: ["Sustainability", "ROI", "Value Creation"]
  }
];

const teamData = [
  {
    name: "Alex Johnson",
    position: "CEO & Founder",
    initials: "AJ",
    department: "Leadership",
    bio: "Visionary leader with 15+ years in digital transformation. Alex founded Core Digitize with the mission to bridge the gap between business needs and technological innovation.",
    expertise: ["Strategic Planning", "Business Development", "Digital Transformation"],
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Sarah Chen",
    position: "CTO",
    initials: "SC",
    department: "Technology",
    bio: "Technology architect specializing in scalable systems. Sarah leads our engineering teams to build robust, future-proof solutions.",
    expertise: ["Cloud Architecture", "DevOps", "System Design"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#"
    }
  },
  {
    name: "Michael Rodriguez",
    position: "Creative Director",
    initials: "MR",
    department: "Design",
    bio: "Award-winning designer with a passion for user-centered experiences. Michael ensures every solution is both beautiful and functional.",
    expertise: ["UX/UI", "Branding", "Design Systems"],
    social: {
      linkedin: "#",
      dribbble: "#"
    }
  },
  {
    name: "Emma Wilson",
    position: "Head of Growth",
    initials: "EW",
    department: "Marketing",
    bio: "Data-driven marketer with expertise in performance marketing and customer acquisition strategies.",
    expertise: ["Digital Marketing", "Growth Hacking", "Analytics"],
    social: {
      linkedin: "#"
    }
  },
  {
    name: "David Kim",
    position: "Lead Developer",
    initials: "DK",
    department: "Engineering",
    bio: "Full-stack developer with deep expertise in modern web technologies and application architecture.",
    expertise: ["React", "Node.js", "TypeScript"],
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "Priya Patel",
    position: "Data Scientist",
    initials: "PP",
    department: "AI/ML",
    bio: "Machine learning expert focused on developing predictive models that drive business value.",
    expertise: ["Python", "TensorFlow", "Data Analysis"],
    social: {
      linkedin: "#"
    }
  }
];

const processData = [
  {
    title: "Discovery",
    subtitle: "Understanding Your Needs",
    description: "We begin by deeply understanding your business objectives, challenges, and technical requirements through collaborative workshops and research.",
    activities: [
      "Stakeholder interviews",
      "Market research",
      "Competitive analysis",
      "Technical assessment"
    ],
    deliverables: ["Project Brief", "Requirements Doc", "Technical Feasibility Report"]
  },
  {
    title: "Strategy",
    subtitle: "Planning for Success",
    description: "Our team develops a comprehensive strategy that aligns technology solutions with your business goals and user needs.",
    activities: [
      "Solution architecture",
      "Technology selection",
      "Roadmap development",
      "Success metrics definition"
    ],
    deliverables: ["Technical Specification", "Project Roadmap", "Architecture Diagram"]
  },
  {
    title: "Design",
    subtitle: "Crafting the Experience",
    description: "We create intuitive, engaging user experiences backed by thoughtful information architecture and visual design.",
    activities: [
      "User flows",
      "Wireframing",
      "Prototyping",
      "UI design"
    ],
    deliverables: ["Wireframes", "Design System", "Interactive Prototypes"]
  },
  {
    title: "Development",
    subtitle: "Building with Precision",
    description: "Our engineers implement the solution using agile methodologies, ensuring quality at every step through continuous testing and integration.",
    activities: [
      "Sprint planning",
      "Feature development",
      "Code reviews",
      "Quality assurance"
    ],
    deliverables: ["Development Builds", "Test Reports", "Technical Documentation"]
  },
  {
    title: "Launch",
    subtitle: "Going Live with Confidence",
    description: "We manage the deployment process meticulously, ensuring a smooth transition to production with comprehensive support.",
    activities: [
      "Staging deployment",
      "Performance testing",
      "User training",
      "Go-live planning"
    ],
    deliverables: ["Launch Plan", "Training Materials", "Support Documentation"]
  },
  {
    title: "Optimization",
    subtitle: "Continuous Improvement",
    description: "Post-launch, we monitor performance and user feedback to identify opportunities for enhancement and growth.",
    activities: [
      "Analytics review",
      "User feedback analysis",
      "Performance tuning",
      "Iterative improvements"
    ],
    deliverables: ["Analytics Reports", "Optimization Roadmap", "Enhancement Releases"]
  }
];

const testimonials = [
  {
    quote: "Core Digitize transformed our e-commerce platform, resulting in a 300% increase in conversion rates and significantly improved customer satisfaction scores.",
    name: "James Wilson",
    position: "Digital Director",
    company: "RetailCorp",
    initials: "JW"
  },
  {
    quote: "Their technical expertise and strategic approach helped us modernize our legacy systems while minimizing disruption to our operations. Truly exceptional partners.",
    name: "Lisa Zhang",
    position: "CIO",
    company: "FinTech Solutions",
    initials: "LZ"
  }
];