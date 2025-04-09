import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#060606] text-white">
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
      <style>
        {`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes orbRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes scroll {
            0% { transform: translateY(0); }
            30% { transform: translateY(10px); }
          }
          @keyframes screenScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
        `}
      </style>

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
              <div className="w-14 h-14 bg-[#ff5004] rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-[#060606]">CD</span>
              </div>
              <span className="text-white/80 text-xl font-light">Core Digitize</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-medium text-white leading-tight">
              <span className="block mb-4">Digital Excellence</span>
              <span className="bg-gradient-to-r from-[#ff5004] via-[#ff732e] to-[#ff5004] bg-clip-text text-transparent">
                Engineered
              </span>
            </h1>

            <p className="text-xl text-white/70 leading-relaxed max-w-2xl">
              Transformative solutions in
              <span className="text-[#ff5004] font-medium"> digital marketing</span>,
              <span className="text-[#ff5004] font-medium"> web development</span>, and
              <span className="text-[#ff5004] font-medium"> mobile innovation</span>.
              Enterprise-grade technology meets measurable results.
            </p>

            {/* Service Indicators */}
            <div className="flex flex-wrap gap-4 mt-8">
              {['SEO Optimized', 'AI-Driven', 'Cloud Native', '24/7 Support'].map((service) => (
                <div key={service} className="px-4 py-2 bg-[#ffffff08] rounded-full border border-[#ff5004]/20">
                  <span className="text-sm text-[#ff5004]">{service}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex gap-6 mt-12">
              <button
                className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl
                            transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#ff5004]/30
                            flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Start Digital Journey
              </button>
              <button
                className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white
                            font-semibold rounded-xl transition-all duration-300 backdrop-blur-lg bg-white/5
                            flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right Column - Tech Visualization */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Floating Phone Mockup */}
            <div className="absolute w-72 h-[500px] bg-[#161616] rounded-[40px] border-2 border-[#ffffff10] shadow-2xl transform rotate-[15deg]">
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
            </div>

            {/* Holographic Code Editor */}
            <div className="absolute right-0 bottom-24 w-96 h-64 bg-[#ffffff03] rounded-xl border border-[#ff5004]/20 backdrop-blur-lg transform rotate-[-5deg]">
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
            </div>

            {/* Rotating Service Icons */}
            <div className="absolute -left-12 top-24 w-48 h-48 border-2 border-[#ff5004]/20 rounded-full">
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
            </div>
          </div>
        </div>
      </div>

      {/* Performance Metrics Footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8 text-center">
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
      </div>
    </section>
  );
}

const AboutUsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Driven by Innovation, Defined by Results
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              At Core Digitize, we are more than just a technology company – we are a collective of passionate innovators, strategic thinkers, and meticulous engineers dedicated to crafting exceptional digital experiences. Our mission is to empower businesses of all sizes to thrive in the digital landscape through bespoke solutions tailored to their unique needs.
            </p>
            <p className="text-xl text-white/70 leading-relaxed">
              Founded on the principles of quality, integrity, and client-centricity, we strive to build long-lasting partnerships that drive sustainable growth. From cutting-edge web development and impactful digital marketing to innovative mobile applications and robust cloud solutions, we offer a comprehensive suite of services designed to elevate your brand and achieve your business objectives.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all">
                Learn More
              </button>
              <button className="px-6 py-3 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-lg transition-all backdrop-blur-lg bg-white/5">
                Our Team
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="About Us" className="w-full h-auto object-cover" style={{ minHeight: '400px' }} />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OurServicesSection = () => {
  const categorizedServices = {
    Marketing: services.filter(service =>
      ['Social Media Marketing', 'Google Ads', 'Meta Ads', 'Email Marketing', 'Whatsapp Marketing', 'Performance Marketing', 'Influencer and Affilate Marketing', 'Content Marketing'].includes(service.title)
    ),
    Media: services.filter(service =>
      ['Videography', 'Video Editing', 'Photography', 'Photo Editing', 'Product shoots', 'Commercial Shoots', 'Branding', 'Graphic Design'].includes(service.title)
    ),
    Technical: services.filter(service =>
      ['Web Development', 'App Development', 'Software Development', 'Landing Pages', 'SEO', 'CRM', 'ERP'].includes(service.title)
    ),
    Animation: services.filter(service =>
      ['3D Animation', '2D Animation', '3D Modeling', 'Motion Graphics', 'CGI Video', 'VFX Video', 'Whiteboard Animation'].includes(service.title)
    ),
  };

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Our Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            The Spectrum of Our <span className="text-[#ff5004]">Digital Services</span>
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-white/70">
            Explore our comprehensive suite of services, meticulously crafted to drive your digital success. From strategic marketing to cutting-edge technical solutions and engaging media, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {Object.entries(categorizedServices).map(([category, servicesList]) => (
            <div key={category} className="rounded-3xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all shadow-lg shadow-black/20">
              <div className="bg-[#161616] p-8">
                <h3 className="text-2xl font-semibold text-[#ff5004] mb-4">{category}</h3>
                <ul className="space-y-4">
                  {servicesList.map((service) => (
                    <li key={service.title} className="text-white/80">
                      <div className="flex items-center gap-3">
                        <span className="text-[#ff5004]">{service.icon}</span>
                        <span>{service.title}</span>
                      </div>
                      {/* You can add a short description here if you want */}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <button className="inline-flex items-center gap-2 text-[#ff5004] hover:text-[#ff6120] transition-all">
                    Explore {category} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#ff5004] to-[#ff732e]"></div>
            </div>
          ))}
        </div>

        <div className="absolute top-10 left-20 w-48 h-48 bg-[#ff5004]/5 rounded-full filter blur-[60px] opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-[#ff5004]/10 rounded-full filter blur-[80px] opacity-20"></div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon, index }: any) => {
  return (
    <div
      className="bg-[#161616] rounded-2xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all duration-500 hover:-translate-y-2"
      style={{
        boxShadow: `0 10px 30px -5px rgba(255, 80, 4, ${0.05 + index * 0.05})`
      }}
    >
      <div className="w-16 h-16 bg-[#ff5004]/10 rounded-xl flex items-center justify-center mb-6">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-white/70 mb-6">{description}</p>
      <div className="flex items-center text-[#ff5004]">
        <span>Learn more</span>
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Transformative <span className="text-[#ff5004]">Case Studies</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Real-world solutions that delivered measurable business impact
            </p>
            <button className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all">
              View All Projects
            </button>
          </div>
          <div className="lg:w-1/2 relative">
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
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStackSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Our Technology
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Cutting-Edge <span className="text-[#ff5004]">Tech Stack</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-white/70">
            We leverage the most advanced technologies to deliver exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-[#161616] rounded-2xl p-6 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 bg-[#ffffff05] rounded-xl flex items-center justify-center">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-center">{tech.name}</h3>
              </div>
            ))}
          </div>

          {/* Animated tech orb */}
          <div className="absolute -right-40 -top-40 w-80 h-80 rounded-full bg-[#ff5004]/10 filter blur-[100px] opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-4">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Trusted By <span className="text-[#ff5004]">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              Ready to <span className="text-[#ff5004]">Transform</span> Your Business?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5">
                Contact Our Team
              </button>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#ff5004] filter blur-[100px] opacity-20"></div>
        </div>
      </div>
    </section>
  );
};

// Data
const services = [
  { title: "AI-Powered Development", description: "Custom software solutions enhanced with machine learning.", icon: "🤖" },
  { title: "Enterprise Web Apps", description: "Scalable web applications for large organizations.", icon: "💻" },
  { title: "Cloud Architecture", description: "Optimized cloud solutions for performance and scalability.", icon: "☁️" },
  { title: "Data Analytics", description: "Turn data into actionable insights.", icon: "📊" },
  { title: "DevOps Automation", description: "CI/CD pipelines and infrastructure as code.", icon: "⚙️" },
  { title: "Blockchain Solutions", description: "Decentralized applications and smart contracts.", icon: "⛓️" },
  { title: "Social Media Marketing", description: "Strategies to engage your audience on social platforms.", icon: "📱" },
  { title: "Google Ads", description: "Drive targeted traffic with effective Google Ads campaigns.", icon: "📈" },
  { title: "Meta Ads", description: "Reach your audience on Facebook and Instagram with Meta Ads.", icon: "f" }, // Using 'f' as a placeholder, you might want a better icon
  { title: "Email Marketing", description: "Build customer relationships with targeted email campaigns.", icon: "📧" },
  { title: "Whatsapp Marketing", description: "Engage customers directly through Whatsapp.", icon: "💬" },
  { title: "Performance Marketing", description: "Data-driven marketing focused on measurable results.", icon: "🎯" },
  { title: "Influencer and Affilate Marketing", description: "Leverage influencers and affiliates to expand your reach.", icon: "🤝" },
  { title: "Content Marketing", description: "Create valuable content to attract and engage your audience.", icon: "✍️" },
  { title: "Videography", description: "Professional video production services.", icon: "🎬" },
  { title: "Video Editing", description: "High-quality video post-production.", icon: "✂️" },
  { title: "Photography", description: "Professional photography services for various needs.", icon: "📸" },
  { title: "Photo Editing", description: "Enhance and retouch your photographs.", icon: "🖼️" },
  { title: "Product shoots", description: "High-quality photography for your products.", icon: "📦" },
  { title: "Commercial Shoots", description: "Professional video and photo shoots for commercials.", icon: "📺" },
  { title: "Branding", description: "Develop a strong and recognizable brand identity.", icon: "💡" },
  { title: "Graphic Design", description: "Visually appealing designs for your marketing materials.", icon: "✏️" },
  { title: "Web Development", description: "Custom website development tailored to your needs.", icon: "🌐" },
  { title: "App Development", description: "Develop mobile applications for iOS and Android.", icon: "📱" },
  { title: "Software Development", description: "Custom software solutions for your business.", icon: "💻" },
  { title: "Landing Pages", description: "High-converting landing pages for your campaigns.", icon: "📄" },
  { title: "SEO", description: "Improve your website's search engine ranking.", icon: "🔍" },
  { title: "CRM", description: "Customer Relationship Management solutions.", icon: "👤" },
  { title: "ERP", description: "Enterprise Resource Planning systems for efficient management.", icon: "🏢" },
  { title: "3D Animation", description: "Create stunning three-dimensional animations.", icon: "✨" },
  { title: "2D Animation", description: "Engaging two-dimensional animated content.", icon: "🎞️" },
  { title: "3D Modeling", description: "Create detailed three-dimensional models.", icon: "📐" },
  { title: "Motion Graphics", description: "Dynamic and visually appealing motion graphics.", icon: "💫" },
  { title: "CGI Video", description: "Computer-generated imagery for realistic video effects.", icon: "🖥️" },
  { title: "VFX Video", description: "Visual effects to enhance your video content.", icon: "💥" },
  { title: "Whiteboard Animation", description: "Engaging explainer videos in a whiteboard style.", icon: " whiteboard" }, // Added a space to avoid potential issues
];

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