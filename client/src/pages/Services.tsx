import { useState, useRef, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiX, FiCheck, FiAward, FiUsers, FiGlobe, FiClock } from 'react-icons/fi';
import Head from 'next/head';

export default function Services() {
  const [activeDepartment, setActiveDepartment] = useState('Marketing');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const toggleServiceExpansion = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <div className="bg-[#060606] text-white overflow-hidden" ref={containerRef} onMouseMove={handleMouseMove}>
      <Head>
        <title>Our Services | Core Digitize - Digital Transformation Experts</title>
        <meta name="description" content="Discover our comprehensive suite of digital services across Marketing, Media, Technical, and Animation departments." />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-[#060606] overflow-hidden isolate">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(255,80,4,0.1)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
        </div>

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

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8">
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
                <span className="block mb-4">Departmental Services</span>
                <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                  Specialized Solutions
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/70 leading-relaxed"
              >
                Our services are organized into specialized departments, each with deep expertise in their domain. 
                From digital marketing campaigns to cutting-edge animation, we deliver comprehensive solutions tailored to your needs.
              </motion.p>

              {/* Department Navigation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              >
                {departsments.map((dept, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveDepartment(dept.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-4 py-3 rounded-xl text-center transition-all ${activeDepartment === dept.name ? 'bg-[#ff5004] text-white' : 'bg-[#161616] hover:bg-[#222222]'}`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">{dept.icon}</span>
                      <span className="text-sm font-medium">{dept.name}</span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Interactive Visualization */}
            <div className="relative h-[600px] hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  {/* Department Nodes */}
                  {departmentsData.map((dept, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: activeDepartment === dept.name ? 1 : 0.3,
                        scale: activeDepartment === dept.name ? 1.2 : 0.8
                      }}
                      transition={{ delay: i * 0.1, type: 'spring' }}
                      className={`absolute w-20 h-20 rounded-full flex items-center justify-center cursor-pointer transition-all
                        ${activeDepartment === dept.name ? 'bg-[#ff5004] shadow-lg' : 'bg-[#ffffff10]'}`}
                      style={{
                        top: `${dept.position.top}%`,
                        left: `${dept.position.left}%`,
                      }}
                      onClick={() => setActiveDepartment(dept.name)}
                    >
                      <span className="text-3xl">{dept.icon}</span>
                      {activeDepartment === dept.name && (
                        <motion.div 
                          layoutId="activeDept"
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#ff5004] rounded-full"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  ))}

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    {[
                      { x1: "20%", y1: "30%", x2: "40%", y2: "50%" },
                      { x1: "80%", y1: "30%", x2: "60%", y2: "50%" },
                      { x1: "30%", y1: "70%", x2: "40%", y2: "50%" },
                      { x1: "70%", y1: "70%", x2: "60%", y2: "50%" },
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
                        opacity="0.3"
                      />
                    ))}
                  </svg>

                  {/* Floating Card */}
                  <AnimatePresence>
                    <motion.div 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      className="absolute bottom-0 right-0 w-80 bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] shadow-lg"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#ff5004]/10 flex items-center justify-center">
                          <span className="text-xl">
                            {departmentsData.find(d => d.name === activeDepartment)?.icon}
                          </span>
                        </div>
                        <h3 className="font-medium">{activeDepartment} Department</h3>
                      </div>
                      <p className="text-sm text-white/70 mb-4">
                        {departmentsData.find(d => d.name === activeDepartment)?.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {departmentsData.find(d => d.name === activeDepartment)?.services.slice(0, 3).map((service, j) => (
                          <span key={j} className="px-3 py-1 bg-[#ffffff08] rounded-full text-xs text-white/80">
                            {service}
                          </span>
                        ))}
                        {(departmentsData.find(d => d.name === activeDepartment)?.services ?? []).length > 3 && (
                          <span className="px-3 py-1 bg-[#ffffff08] rounded-full text-xs text-white/80">
                            +{(departmentsData.find(d => d.name === activeDepartment)?.services?.length ?? 0) - 3} more
                          </span>
                        )}
                      </div>
                      <button className="text-sm text-[#ff5004] hover:text-[#ff6120] flex items-center gap-1">
                        View all services <FiArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Services Section */}
      <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              <span className="text-[#ff5004]">{activeDepartment}</span> Services
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              {departmentsData.find(d => d.name === activeDepartment)?.fullDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services[activeDepartment as keyof typeof services]?.map((service: { icon: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; shortDescription: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; complexity: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; startingPrice: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; features: any[]; deliveryTime: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; successRate: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, i: Key | null | undefined) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (typeof i === 'number' ? i : 0) * 0.1 }}
                className="relative group overflow-hidden rounded-2xl border border-[#ffffff10] bg-[#161616] hover:border-[#ff5004]/30 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5004]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffffff08] flex items-center justify-center text-2xl">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mt-1">{service.name}</h3>
                  </div>
                  
                  <div className="flex-grow">
                    <p className="text-white/70 mb-4 text-sm">{service.shortDescription}</p>
                    
                    <div className="mb-4">
                      <div className="flex justify-between items-center text-xs text-white/60 mb-1">
                        <span>Complexity</span>
                        <span>{service.complexity}/5</span>
                      </div>
                      <div className="w-full bg-[#ffffff10] rounded-full h-1.5">
                        <div 
                          className="bg-[#ff5004] h-1.5 rounded-full" 
                          style={{ width: `${typeof service.complexity === 'number' ? service.complexity * 20 : 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#ffffff10]">
                    <div className="text-sm font-medium">
                      <span className="text-[#ff5004]">from</span> ${service.startingPrice}
                    </div>
                    <button 
                      onClick={() => toggleServiceExpansion(i as number)}
                      className="text-sm text-[#ff5004] hover:text-[#ff6120] flex items-center gap-1"
                    >
                      {expandedService === i ? 'Less details' : 'More details'} 
                      <FiChevronRight className={`w-4 h-4 transition-transform ${expandedService === i ? 'rotate-90' : ''}`} />
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {expandedService === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-[#ffffff10]">
                          <h4 className="text-sm font-medium mb-2">Service Includes:</h4>
                          <ul className="space-y-2 text-sm text-white/70">
                            {service.features.map((feature: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, j: Key | null | undefined) => (
                              <li key={j} className="flex items-start gap-2">
                                <FiCheck className="text-[#ff5004] mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <div className="mt-4 grid grid-cols-2 gap-2">
                            <div className="bg-[#ffffff05] p-2 rounded-lg">
                              <div className="text-xs text-white/60">Delivery Time</div>
                              <div className="font-medium">{service.deliveryTime}</div>
                            </div>
                            <div className="bg-[#ffffff05] p-2 rounded-lg">
                              <div className="text-xs text-white/60">Success Rate</div>
                              <div className="font-medium">{service.successRate}%</div>
                            </div>
                          </div>
                          
                          <button className="w-full mt-4 px-4 py-2 bg-[#ff5004]/10 hover:bg-[#ff5004]/20 text-[#ff5004] rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2">
                            Request Service <FiArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Comparison */}
      <section className="relative py-20 bg-gradient-to-b from-[#0a0a0a] to-[#060606] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Our Departments
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Comprehensive <span className="text-[#ff5004]">Digital Solutions</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              Each department specializes in delivering exceptional results in their domain
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-5 gap-6">
                {/* Header Row */}
                <div className="col-span-1"></div>
                {departsments.map((dept, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`col-span-1 p-6 rounded-2xl border ${activeDepartment === dept.name ? 'border-[#ff5004]/50 bg-[#ff5004]/10' : 'border-[#ffffff10] bg-[#161616]'}`}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-xl bg-[#ffffff08] flex items-center justify-center text-3xl mb-4">
                        {dept.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                      <p className="text-sm text-white/70">{dept.tagline}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Rows */}
                {comparisonData.map((row, i) => (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="col-span-1 p-4 flex items-center bg-[#161616] rounded-l-2xl"
                    >
                      <h4 className="font-medium">{row.label}</h4>
                    </motion.div>
                    {departmentsData.map((dept, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 + j * 0.05 }}
                        className={`col-span-1 p-4 flex items-center justify-center ${j === departmentsData.length - 1 ? 'rounded-r-2xl' : ''} ${activeDepartment === dept.name ? 'bg-[#ff5004]/5' : 'bg-[#161616]'}`}
                      >
                        {typeof row.value(dept) === 'string' ? (
                          <span className="text-sm text-center">{row.value(dept)}</span>
                        ) : (
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, k) => (
                              <div 
                                key={k} 
                                className={`w-3 h-3 rounded-full ${k < Number(row.value(dept)) ? 'bg-[#ff5004]' : 'bg-[#ffffff10]'}`}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Workflow */}
      <section className="relative py-20 bg-[#060606] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Cross-Department Collaboration
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Integrated <span className="text-[#ff5004]">Workflow</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70">
              How our departments work together to deliver comprehensive solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-[#ff5004] via-[#ff5004]/30 to-[#ff5004] transform -translate-x-1/2" />
            
            {/* Process Steps */}
            <div className="space-y-24 relative">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="md:w-1/2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#ff5004] flex items-center justify-center text-xl font-bold">
                        {i + 1}
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-white/70 mb-6">{step.description}</p>
                    <div className="flex flex-wrap gap-4">
                      {step.departments.map((dept, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-[#ffffff08] flex items-center justify-center">
                            {departmentsData.find(d => d.name === dept)?.icon}
                          </div>
                          <span className="text-sm">{dept}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] h-full">
                      <div className="aspect-video bg-[#ffffff05] rounded-lg flex items-center justify-center text-white/30">
                        [Workflow Visualization: {step.title}]
                      </div>
                    </div>
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
            className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to <span className="text-[#ff5004]">Transform</span> Your Business?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
                Connect with our experts to discuss how our specialized departments can work together for your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
                >
                  Get a Free Consultation
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5"
                >
                  Browse All Services
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Data
const departsments = [
  { name: 'Marketing', icon: '📈', tagline: 'Data-driven growth strategies' },
  { name: 'Media', icon: '🎥', tagline: 'Visual storytelling that captivates' },
  { name: 'Technical', icon: '💻', tagline: 'Robust digital infrastructure' },
  { name: 'Animation', icon: '🎬', tagline: 'Bringing ideas to life' }
];

const departmentsData = [
  {
    name: 'Marketing',
    icon: '📈',
    description: 'Data-driven campaigns that deliver measurable results',
    fullDescription: 'Our marketing department specializes in creating targeted campaigns that drive engagement, conversions, and ROI across all digital channels.',
    services: [
      'Social Media Marketing', 
      'Google Ads', 
      'Meta Ads', 
      'Email Marketing',
      'Whatsapp Marketing',
      'Performance Marketing',
      'Influencer Marketing',
      'Affiliate Marketing',
      'Content Marketing'
    ],
    color: '#FF5004',
    position: { top: 30, left: 20 }
  },
  {
    name: 'Media',
    icon: '🎥',
    description: 'High-quality visual content production',
    fullDescription: 'From concept to final edit, our media team creates stunning visuals that tell your brand story and engage your audience.',
    services: [
      'Videography',
      'Video Editing',
      'Photography',
      'Photo Editing',
      'Product Shoots',
      'Commercial Shoots',
      'Branding',
      'Graphic Design'
    ],
    color: '#00C4FF',
    position: { top: 30, left: 80 }
  },
  {
    name: 'Technical',
    icon: '💻',
    description: 'Custom digital solutions built to scale',
    fullDescription: 'Our technical team builds robust, secure, and scalable digital solutions tailored to your business requirements.',
    services: [
      'Web Development',
      'App Development',
      'Software Development',
      'Landing Pages',
      'SEO',
      'CRM',
      'ERP'
    ],
    color: '#00FFA3',
    position: { top: 70, left: 40 }
  },
  {
    name: 'Animation',
    icon: '🎬',
    description: 'Bringing ideas to life through motion',
    fullDescription: 'Our animation department creates captivating motion graphics and animations that explain, engage, and entertain.',
    services: [
      '3D Animation',
      '2D Animation',
      '3D Modeling',
      'Motion Graphics',
      'CGI Video',
      'VFX Video',
      'Whiteboard Animation'
    ],
    color: '#FF00E5',
    position: { top: 70, left: 60 }
  }
];

const services = {
  Marketing: [
    {
      name: 'Social Media Marketing',
      icon: '📱',
      shortDescription: 'Strategic social media campaigns to grow your audience and engagement',
      complexity: 4,
      startingPrice: 1500,
      deliveryTime: '4-8 weeks',
      successRate: 92,
      features: [
        'Platform-specific strategy development',
        'Content calendar creation',
        'Community management',
        'Performance analytics',
        'Monthly reporting'
      ]
    },
    {
      name: 'Google Ads',
      icon: '🔍',
      shortDescription: 'Targeted pay-per-click campaigns to drive qualified traffic',
      complexity: 3,
      startingPrice: 2000,
      deliveryTime: '2-4 weeks',
      successRate: 88,
      features: [
        'Keyword research & selection',
        'Ad copy creation',
        'Landing page optimization',
        'Conversion tracking',
        'Monthly optimization'
      ]
    },
    {
      name: 'Meta Ads',
      icon: '👍',
      shortDescription: 'Facebook and Instagram advertising for maximum reach',
      complexity: 3,
      startingPrice: 1800,
      deliveryTime: '2-4 weeks',
      successRate: 85,
      features: [
        'Audience targeting strategy',
        'Creative development',
        'A/B testing',
        'Retargeting setup',
        'Performance monitoring'
      ]
    },
    {
      name: 'Email Marketing',
      icon: '✉️',
      shortDescription: 'Automated email sequences that convert',
      complexity: 2,
      startingPrice: 1200,
      deliveryTime: '3-6 weeks',
      successRate: 78,
      features: [
        'Email template design',
        'List segmentation',
        'Automation workflow',
        'A/B testing',
        'Performance analytics'
      ]
    },
    {
      name: 'Whatsapp Marketing',
      icon: '💬',
      shortDescription: 'Personalized messaging campaigns for higher engagement',
      complexity: 3,
      startingPrice: 1000,
      deliveryTime: '2-3 weeks',
      successRate: 95,
      features: [
        'Chatbot setup',
        'Broadcast strategy',
        'Opt-in management',
        'Automated responses',
        'Analytics dashboard'
      ]
    },
    {
      name: 'Performance Marketing',
      icon: '🚀',
      shortDescription: 'ROI-focused campaigns across multiple channels',
      complexity: 5,
      startingPrice: 5000,
      deliveryTime: '4-12 weeks',
      successRate: 90,
      features: [
        'Multi-channel strategy',
        'Conversion tracking',
        'Attribution modeling',
        'Budget optimization',
        'Quarterly strategy review'
      ]
    }
  ],
  Media: [
    {
      name: 'Videography',
      icon: '🎥',
      shortDescription: 'Professional video production for all your needs',
      complexity: 4,
      startingPrice: 3000,
      deliveryTime: '2-8 weeks',
      successRate: 95,
      features: [
        'Pre-production planning',
        'Professional equipment',
        'Cinematic shooting',
        'Location scouting',
        'Talent coordination'
      ]
    },
    {
      name: 'Video Editing',
      icon: '✂️',
      shortDescription: 'Polished edits that tell your story effectively',
      complexity: 3,
      startingPrice: 800,
      deliveryTime: '1-4 weeks',
      successRate: 98,
      features: [
        'Raw footage review',
        'Storyboard creation',
        'Color grading',
        'Sound design',
        '3 revisions included'
      ]
    },
    {
      name: 'Photography',
      icon: '📸',
      shortDescription: 'High-quality images for branding and marketing',
      complexity: 3,
      startingPrice: 1500,
      deliveryTime: '1-3 weeks',
      successRate: 97,
      features: [
        'Creative direction',
        'Professional equipment',
        'Location scouting',
        'Model coordination',
        'High-res deliverables'
      ]
    },
    {
      name: 'Photo Editing',
      icon: '🖼️',
      shortDescription: 'Enhance and perfect your images',
      complexity: 2,
      startingPrice: 500,
      deliveryTime: '3-7 days',
      successRate: 99,
      features: [
        'Color correction',
        'Retouching',
        'Background removal',
        'Product enhancement',
        'Unlimited revisions'
      ]
    },
    {
      name: 'Product Shoots',
      icon: '📦',
      shortDescription: 'Showcase your products in the best light',
      complexity: 3,
      startingPrice: 1200,
      deliveryTime: '1-2 weeks',
      successRate: 96,
      features: [
        'Studio setup',
        'Lighting design',
        '360° product views',
        'Lifestyle context shots',
        '10+ final images'
      ]
    },
    {
      name: 'Commercial Shoots',
      icon: '🎬',
      shortDescription: 'Professional productions for TV and online ads',
      complexity: 5,
      startingPrice: 10000,
      deliveryTime: '4-12 weeks',
      successRate: 90,
      features: [
        'Concept development',
        'Script writing',
        'Professional crew',
        'Talent casting',
        'Post-production'
      ]
    }
  ],
  Technical: [
    {
      name: 'Web Development',
      icon: '🌐',
      shortDescription: 'Custom websites built for performance and conversions',
      complexity: 4,
      startingPrice: 5000,
      deliveryTime: '4-12 weeks',
      successRate: 95,
      features: [
        'Responsive design',
        'CMS integration',
        'SEO optimization',
        'Performance testing',
        '1 year maintenance'
      ]
    },
    {
      name: 'App Development',
      icon: '📱',
      shortDescription: 'Native and cross-platform mobile applications',
      complexity: 5,
      startingPrice: 15000,
      deliveryTime: '8-16 weeks',
      successRate: 92,
      features: [
        'Platform-specific UI/UX',
        'API integration',
        'Push notifications',
        'App store submission',
        '3 months support'
      ]
    },
    {
      name: 'Software Development',
      icon: '💾',
      shortDescription: 'Custom business software solutions',
      complexity: 5,
      startingPrice: 25000,
      deliveryTime: '12-24 weeks',
      successRate: 90,
      features: [
        'Requirement analysis',
        'System architecture',
        'Database design',
        'Quality assurance',
        'User training'
      ]
    },
    {
      name: 'Landing Pages',
      icon: '🖥️',
      shortDescription: 'High-converting pages for your campaigns',
      complexity: 2,
      startingPrice: 1200,
      deliveryTime: '1-2 weeks',
      successRate: 85,
      features: [
        'Conversion-focused design',
        'Mobile optimization',
        'A/B testing setup',
        'Analytics integration',
        '1 revision included'
      ]
    },
    {
      name: 'SEO',
      icon: '🔍',
      shortDescription: 'Organic growth through search engine optimization',
      complexity: 4,
      startingPrice: 2000,
      deliveryTime: 'Ongoing',
      successRate: 80,
      features: [
        'Keyword research',
        'Technical audit',
        'Content strategy',
        'Backlink building',
        'Monthly reporting'
      ]
    },
    {
      name: 'CRM Implementation',
      icon: '📊',
      shortDescription: 'Streamline your customer relationships',
      complexity: 4,
      startingPrice: 8000,
      deliveryTime: '4-8 weeks',
      successRate: 88,
      features: [
        'System selection',
        'Custom configuration',
        'Data migration',
        'Team training',
        '3 months support'
      ]
    }
  ],
  Animation: [
    {
      name: '3D Animation',
      icon: '🦖',
      shortDescription: 'Realistic 3D animations for products and stories',
      complexity: 5,
      startingPrice: 8000,
      deliveryTime: '4-12 weeks',
      successRate: 90,
      features: [
        'Concept development',
        '3D modeling',
        'Texturing & lighting',
        'Character rigging',
        'Final rendering'
      ]
    },
    {
      name: '2D Animation',
      icon: '✏️',
      shortDescription: 'Engaging 2D animations for explainers and ads',
      complexity: 4,
      startingPrice: 5000,
      deliveryTime: '3-8 weeks',
      successRate: 92,
      features: [
        'Storyboard creation',
        'Character design',
        'Frame-by-frame animation',
        'Sound synchronization',
        '3 revisions included'
      ]
    },
    {
      name: '3D Modeling',
      icon: '🗿',
      shortDescription: 'High-quality 3D assets for various applications',
      complexity: 4,
      startingPrice: 3000,
      deliveryTime: '2-6 weeks',
      successRate: 95,
      features: [
        'Reference analysis',
        'Low-poly modeling',
        'High-poly detailing',
        'UV unwrapping',
        'Texture baking'
      ]
    },
    {
      name: 'Motion Graphics',
      icon: '🎞️',
      shortDescription: 'Dynamic motion designs for videos and presentations',
      complexity: 3,
      startingPrice: 2500,
      deliveryTime: '2-4 weeks',
      successRate: 97,
      features: [
        'Style frames',
        'Typography animation',
        'Infographic design',
        'Sound design',
        '2 revisions included'
      ]
    },
    {
      name: 'CGI Video',
      icon: '🎥',
      shortDescription: 'Photorealistic computer-generated imagery',
      complexity: 5,
      startingPrice: 10000,
      deliveryTime: '4-16 weeks',
      successRate: 85,
      features: [
        'Scene reconstruction',
        'Material simulation',
        'Light matching',
        'Particle effects',
        'Final compositing'
      ]
    },
    {
      name: 'Whiteboard Animation',
      icon: '📝',
      shortDescription: 'Engaging explainer videos with hand-drawn style',
      complexity: 3,
      startingPrice: 3500,
      deliveryTime: '3-6 weeks',
      successRate: 90,
      features: [
        'Script writing',
        'Voiceover recording',
        'Illustration',
        'Animation',
        'Sound effects'
      ]
    }
  ]
};

const comparisonData = [
  {
    label: 'Project Complexity',
    value: (dept: any) => {
      if (dept.name === 'Marketing') return 3;
      if (dept.name === 'Media') return 4;
      if (dept.name === 'Technical') return 5;
      if (dept.name === 'Animation') return 4;
      return 0;
    }
  },
  {
    label: 'Average Project Duration',
    value: (dept: any) => {
      if (dept.name === 'Marketing') return '4-8 weeks';
      if (dept.name === 'Media') return '2-6 weeks';
      if (dept.name === 'Technical') return '8-16 weeks';
      if (dept.name === 'Animation') return '4-12 weeks';
      return '';
    }
  },
  {
    label: 'Team Size',
    value: (dept: any) => {
      if (dept.name === 'Marketing') return '3-5 specialists';
      if (dept.name === 'Media') return '2-4 creatives';
      if (dept.name === 'Technical') return '3-6 developers';
      if (dept.name === 'Animation') return '2-5 artists';
      return '';
    }
  },
  {
    label: 'Client Collaboration',
    value: (dept: any) => {
      if (dept.name === 'Marketing') return 4;
      if (dept.name === 'Media') return 3;
      if (dept.name === 'Technical') return 4;
      if (dept.name === 'Animation') return 3;
      return 0;
    }
  },
  {
    label: 'Creative Freedom',
    value: (dept: any) => {
      if (dept.name === 'Marketing') return 2;
      if (dept.name === 'Media') return 5;
      if (dept.name === 'Technical') return 1;
      if (dept.name === 'Animation') return 4;
      return 0;
    }
  }
];

const workflowSteps = [
  {
    title: 'Discovery & Strategy',
    description: 'We begin with comprehensive discovery sessions to understand your business goals, target audience, and project requirements across all relevant departments.',
    departments: ['Marketing', 'Media', 'Technical', 'Animation']
  },
  {
    title: 'Concept Development',
    description: 'Our teams collaborate to create integrated concepts that leverage each department\'s strengths for maximum impact.',
    departments: ['Marketing', 'Media', 'Animation']
  },
  {
    title: 'Technical Architecture',
    description: 'The technical team designs the infrastructure while coordinating with other departments to ensure all creative elements can be properly implemented.',
    departments: ['Technical', 'Marketing', 'Media']
  },
  {
    title: 'Content Production',
    description: 'Media and animation teams produce high-quality assets while marketing develops the messaging framework and technical prepares for integration.',
    departments: ['Media', 'Animation', 'Marketing']
  },
  {
    title: 'Integration & Testing',
    description: 'All components come together with rigorous testing to ensure seamless performance across all platforms and devices.',
    departments: ['Technical', 'Media', 'Animation']
  },
  {
    title: 'Launch & Optimization',
    description: 'Marketing leads the launch campaign while all departments monitor performance and make data-driven optimizations.',
    departments: ['Marketing', 'Technical', 'Media']
  }
];