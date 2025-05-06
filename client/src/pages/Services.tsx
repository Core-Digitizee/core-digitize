import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { useForm } from 'react-hook-form';

// Custom scrollbar styles in a global style component
const GlobalStyles = () => (
  <style>{`
    /* Premium Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
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
      width: 12px;
    }
    ::-webkit-scrollbar-corner {
      background: rgba(10, 10, 10, 0.8);
    }
    
    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  department: string;
  budget: string;
  timeline: string;
};

export default function Services() {
  const [activeDepartment, setActiveDepartment] = useState('marketing');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  // Parallax effects for background elements
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const departments = [
    { id: 'marketing', name: 'Marketing', color: '#ff5004', icon: '📈' },
    { id: 'media', name: 'Media', color: '#ff9557', icon: '🎥' },
    { id: 'technical', name: 'Technical', color: '#ffb780', icon: '💻' },
    { id: 'animation', name: 'Animation', color: '#ffd9aa', icon: '🎬' }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDepartmentChange = (department: string) => {
    setActiveDepartment(department);
    // Remove the smooth scroll since we're not actually scrolling to a section anymore
    setExpandedService(null); // Collapse any expanded services when changing department
  };

  const scrollToForm = (service?: string) => {
    if (service) setSelectedService(service);
    setIsFormVisible(true);
    setTimeout(() => {
      document.getElementById('inquiry-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div ref={containerRef} className="bg-[#060606] text-white relative overflow-hidden">
      <GlobalStyles />
      
      {/* Floating background elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#ff5004]/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#ff5004]/5 blur-3xl"></div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider">
              OUR EXPERTISE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Comprehensive</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Digital Services</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              End-to-end digital solutions tailored to your business needs, delivered with precision and innovation
            </p>
          </motion.div>

          {/* Department Navigation - Updated Design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-16 relative"
          >
            <div className="relative w-full max-w-4xl">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#ff5004]/20 to-[#ff8c00]/20 rounded-3xl blur-2xl opacity-20 pointer-events-none" />
              
              {/* Navigation Container */}
              <div className="relative grid grid-cols-4 bg-[#161616] rounded-2xl p-1 border border-[#ffffff10] shadow-lg shadow-black/50 overflow-hidden">
                {departments.map((department) => (
                  <button
                    key={department.id}
                    onClick={() => handleDepartmentChange(department.id)}
                    className={`relative py-4 px-2 sm:px-4 rounded-xl font-medium transition-all z-10 flex flex-col items-center justify-center ${
                      activeDepartment === department.id 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-[#ffffff08]'
                    }`}
                  >
                    <span className="text-2xl mb-2">{department.icon}</span>
                    <span className="text-sm sm:text-base">{department.name}</span>
                    {activeDepartment === department.id && (
                      <motion.div
                        className="absolute bottom-0 h-1 w-1/2 bg-[#ff5004] rounded-t-full"
                        layoutId="departmentUnderline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Now shows only active department */}
      <section className="relative py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {departments.find(d => d.id === activeDepartment)?.name} Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] mb-6"></div>
            <p className="text-xl text-white/70 max-w-3xl">
              {activeDepartment === 'marketing' && "Data-driven marketing strategies that deliver measurable results and maximize ROI"}
              {activeDepartment === 'media' && "High-quality visual content creation that tells your brand story and engages your audience"}
              {activeDepartment === 'technical' && "Cutting-edge development solutions that power your digital presence and operations"}
              {activeDepartment === 'animation' && "Creative motion graphics and animation that brings your ideas to life"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {activeDepartment === 'marketing' && marketingServices.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                color="#ff5004"
                index={index}
                scrollToForm={scrollToForm}
              />
            ))}
            {activeDepartment === 'media' && mediaServices.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                color="#ff9557"
                index={index}
                scrollToForm={scrollToForm}
              />
            ))}
            {activeDepartment === 'technical' && technicalServices.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                color="#ffb780"
                index={index}
                scrollToForm={scrollToForm}
              />
            ))}
            {activeDepartment === 'animation' && animationServices.map((service, index) => (
              <ServiceCard 
                key={index}
                service={service}
                color="#ffd9aa"
                index={index}
                scrollToForm={scrollToForm}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Success <span className="text-[#ff5004]">Stories</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              Real-world examples of how we've helped clients achieve their goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all cursor-pointer group"
              >
                <div className="h-48 bg-gradient-to-r from-[#ff5004]/10 to-[#060606] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {study.icon}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="mr-2 px-3 py-1 bg-[#ff5004]/10 text-[#ff5004] rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <p className="text-white/70 mb-6">{study.description}</p>
                  <div className="flex items-center text-[#ff5004] group-hover:text-[#ff6120] transition-colors">
                    <span>View case study</span>
                    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <span className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider">
              OUR TEAM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Meet The <span className="text-[#ff5004]">Experts</span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400">
              The talented professionals who will bring your vision to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all"
              >
                <div className="h-64 bg-gradient-to-b from-[#ff5004]/10 to-[#060606] relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#ff5004] mb-3">{member.role}</p>
                  <p className="text-white/70 text-sm">{member.bio}</p>
                  <div className="flex justify-center mt-4 space-x-3">
                    {member.expertise.map((skill, i) => (
                      <span key={i} className="px-2 py-1 bg-[#ffffff05] text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#161616] to-[#0d0d0d] rounded-3xl overflow-hidden border border-[#ffffff10] shadow-xl"
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Ready to Discuss Your Project?
              </h3>
              <p className="text-white/70 mb-8">
                Fill out the form below and our team will get back to you within 24 hours
              </p>
              
              <InquiryForm selectedService={selectedService} departments={departments} />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  service,
  color,
  index,
  scrollToForm
}: {
  service: any;
  color: string;
  index: number;
  scrollToForm: (service: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff10] transition-all ${
        expanded ? 'border-[#ff5004]/50' : 'hover:border-[#ff5004]/30'
      }`}
    >
      <div 
        className="p-6 cursor-pointer flex justify-between items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center">
          {service.icon && (
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4"
              style={{ backgroundColor: `${color}20` }}
            >
              {service.icon}
            </div>
          )}
          <h3 className="text-xl font-bold">{service.title}</h3>
        </div>
        <motion.div
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full bg-[#ffffff05] flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 space-y-6">
              <p className="text-white/80">{service.description}</p>
              
              {service.stats && (
                <div className="grid grid-cols-2 gap-4">
                  {service.stats.map((stat: any, i: number) => (
                    <div key={i} className="bg-[#ffffff05] p-4 rounded-lg">
                      <div className="text-2xl font-bold text-[#ff5004] mb-1">{stat.value}</div>
                      <div className="text-sm text-white/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-3 text-[#ff5004] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Service Details
                  </h4>
                  <ul className="space-y-3">
                    {service.details.map((detail: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 mt-2 mr-2 bg-[#ff5004] rounded-full"></span>
                        <span className="text-white/70">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-[#ff5004] flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit: string, i: number) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 mt-2 mr-2 bg-[#ff5004] rounded-full"></span>
                        <span className="text-white/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToForm(service.title);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] text-white font-medium rounded-lg transition-all"
                >
                  Get a Quote for {service.title}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function InquiryForm({ selectedService, departments }: { selectedService: string | null; departments: any[] }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-[#00ff88]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-[#00ff88]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-white/70 mb-6">Your inquiry has been submitted successfully. Our team will contact you within 24 hours.</p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] text-white font-medium rounded-lg"
        >
          Submit Another Inquiry
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <input type="hidden" {...register("department")} value={departments.find(d => d.id === 'marketing')?.name} />
      <input type="hidden" {...register("service")} value={selectedService || ''} />
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="text-gray-500" />
            </div>
            <input
              {...register("name", { required: "Name is required" })}
              className="pl-10 w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Email Address *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-500" />
            </div>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className="pl-10 w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
              placeholder="john@example.com"
              type="email"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiPhone className="text-gray-500" />
            </div>
            <input
              {...register("phone")}
              className="pl-10 w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
              placeholder="+1 (555) 123-4567"
              type="tel"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Department of Interest</label>
          <select
            {...register("department")}
            className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
          >
            {departments.map((dept) => (
              <option key={dept.id} value={dept.name}>{dept.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">Estimated Budget</label>
          <select
            {...register("budget")}
            className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
          >
            <option value="">Select budget range</option>
            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000+">$25,000+</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Project Timeline</label>
          <select
            {...register("timeline")}
            className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          rows={4}
          className="w-full bg-[#ffffff05] border border-[#ffffff10] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#ff5004] focus:border-transparent"
          placeholder="Tell us about your project needs and requirements..."
        ></textarea>
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>
      
      <div className="pt-2">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-[#ff5004]/30 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </motion.button>
      </div>
    </form>
  );
}

// Data
const marketingServices = [
  {
    title: "Social Media Marketing",
    description: "Comprehensive social media strategies across all major platforms to increase brand awareness, engagement, and conversions.",
    details: [
      "Platform-specific content strategy development",
      "Community management and engagement",
      "Paid social media advertising campaigns",
      "Influencer partnership programs",
      "Performance analytics and optimization"
    ],
    benefits: [
      "Increased brand visibility and recognition",
      "Higher engagement rates with target audiences",
      "Improved conversion rates from social traffic",
      "Data-driven optimization for maximum ROI"
    ],
    icon: "📱",
    stats: [
      { label: "Average Engagement Increase", value: "3.5x" },
      { label: "ROI Improvement", value: "240%" }
    ]
  },
  {
    title: "Google Ads",
    description: "Strategic Google Ads management to drive qualified traffic and maximize conversion rates.",
    details: [
      "Keyword research and competitive analysis",
      "Campaign structure optimization",
      "Ad copy creation and testing",
      "Landing page optimization",
      "Conversion tracking implementation"
    ],
    benefits: [
      "Higher quality traffic to your website",
      "Lower cost-per-acquisition (CPA)",
      "Improved ad relevance and quality scores",
      "Transparent reporting and performance insights"
    ],
    icon: "🔍",
    stats: [
      { label: "Average CTR Improvement", value: "2.8x" },
      { label: "Cost Per Lead Reduction", value: "65%" }
    ]
  },
  {
    title: "Meta Ads",
    description: "Targeted advertising solutions across Facebook and Instagram to reach your ideal customers.",
    details: [
      "Audience research and segmentation",
      "Creative concept development",
      "Campaign setup and optimization",
      "A/B testing of ad variations",
      "Retargeting strategy implementation"
    ],
    benefits: [
      "Precise targeting of demographic segments",
      "Higher engagement with visual content",
      "Improved brand recall and recognition",
      "Scalable campaign performance"
    ],
    icon: "👍",
    stats: [
      { label: "Average Conversion Rate", value: "8.2%" },
      { label: "Cost Per Result Reduction", value: "45%" }
    ]
  },
  {
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive customer retention.",
    details: [
      "Email list segmentation and management",
      "Automated drip campaign setup",
      "Responsive email template design",
      "A/B testing of subject lines and content",
      "Performance analytics and optimization"
    ],
    benefits: [
      "Higher open and click-through rates",
      "Improved customer retention",
      "Automated lead nurturing",
      "Personalized customer journeys"
    ],
    icon: "✉️",
    stats: [
      { label: "Average Open Rate", value: "32.5%" },
      { label: "Click-to-Open Rate", value: "18.7%" }
    ]
  },
  {
    title: "WhatsApp Marketing",
    description: "Direct communication channel to engage customers through personalized messaging.",
    details: [
      "WhatsApp Business API integration",
      "Automated message flows",
      "Broadcast campaign management",
      "Customer support automation",
      "Performance tracking and analytics"
    ],
    benefits: [
      "Higher open rates than email",
      "Direct communication with customers",
      "Personalized customer experiences",
      "Improved response times"
    ],
    icon: "💬",
    stats: [
      { label: "Message Open Rate", value: "98%" },
      { label: "Average Response Time", value: "90s" }
    ]
  },
  {
    title: "Performance Marketing",
    description: "Data-driven marketing strategies focused on measurable business outcomes.",
    details: [
      "Conversion tracking implementation",
      "Attribution modeling",
      "ROI-focused campaign optimization",
      "Cross-channel performance analysis",
      "Budget allocation strategy"
    ],
    benefits: [
      "Clear measurement of marketing impact",
      "Optimized spend across channels",
      "Higher return on ad spend (ROAS)",
      "Data-driven decision making"
    ],
    icon: "📊",
    stats: [
      { label: "Average ROAS", value: "5.2x" },
      { label: "Customer Acquisition Cost", value: "Reduced 40%" }
    ]
  },
  {
    title: "Influencer Marketing",
    description: "Authentic brand partnerships with relevant influencers to expand your reach.",
    details: [
      "Influencer identification and vetting",
      "Campaign strategy development",
      "Content collaboration management",
      "Performance tracking and reporting",
      "Relationship management"
    ],
    benefits: [
      "Access to engaged niche audiences",
      "Increased brand credibility",
      "Higher engagement rates",
      "Authentic content creation"
    ],
    icon: "🌟",
    stats: [
      { label: "Average Engagement Rate", value: "7.8%" },
      { label: "Cost Per Engagement", value: "$0.12" }
    ]
  },
  {
    title: "Content Marketing",
    description: "Strategic content creation and distribution to attract and retain customers.",
    details: [
      "Content strategy development",
      "SEO-optimized content creation",
      "Content calendar management",
      "Distribution and promotion strategy",
      "Performance measurement"
    ],
    benefits: [
      "Improved organic search visibility",
      "Higher quality lead generation",
      "Establishment of thought leadership",
      "Long-term sustainable growth"
    ],
    icon: "🖋️",
    stats: [
      { label: "Organic Traffic Growth", value: "3.1x" },
      { label: "Lead Conversion Rate", value: "4.5%" }
    ]
  }
];

const mediaServices = [
  {
    title: "Videography",
    description: "Professional video production services for commercials, brand films, and corporate videos.",
    details: [
      "Pre-production planning and storyboarding",
      "4K/6K cinematic video production",
      "Professional lighting and audio setup",
      "Multi-camera setups when needed",
      "Drone videography for aerial shots"
    ],
    benefits: [
      "High-quality visual storytelling",
      "Professional production values",
      "Consistent brand representation",
      "Engaging content for multiple platforms"
    ],
    icon: "🎥",
    stats: [
      { label: "Production Time", value: "2-4 weeks" },
      { label: "Delivery Formats", value: "5+" }
    ]
  },
  {
    title: "Video Editing",
    description: "Expert post-production to transform raw footage into compelling visual stories.",
    details: [
      "Color grading and correction",
      "Motion graphics integration",
      "Sound design and audio mixing",
      "Multi-format output optimization",
      "Versioning for different platforms"
    ],
    benefits: [
      "Polished, professional final product",
      "Consistent brand aesthetics",
      "Optimized for viewer engagement",
      "Platform-specific formatting"
    ],
    icon: "✂️",
    stats: [
      { label: "Turnaround Time", value: "3-7 days" },
      { label: "Revision Rounds", value: "3 included" }
    ]
  },
  {
    title: "Photography",
    description: "Professional photography services for products, events, and brand imagery.",
    details: [
      "Studio and location photography",
      "Product staging and composition",
      "Professional lighting setups",
      "High-resolution image capture",
      "Multiple angle coverage"
    ],
    benefits: [
      "High-quality visual assets",
      "Consistent brand imagery",
      "Professional product presentation",
      "Versatile usage across platforms"
    ],
    icon: "📸",
    stats: [
      { label: "Image Resolution", value: "24MP+" },
      { label: "Delivery Time", value: "48-72h" }
    ]
  },
  {
    title: "Photo Editing",
    description: "Professional retouching and enhancement of photographic images.",
    details: [
      "Color correction and grading",
      "Background removal and replacement",
      "Product retouching and enhancement",
      "Skin retouching for portraits",
      "Batch processing for efficiency"
    ],
    benefits: [
      "Polished, professional images",
      "Consistent visual style",
      "Enhanced product presentation",
      "Ready-to-use marketing assets"
    ],
    icon: "🎨",
    stats: [
      { label: "Editing Time", value: "<24h" },
      { label: "File Formats", value: "5+" }
    ]
  },
  {
    title: "Product Shoots",
    description: "Specialized photography services tailored for e-commerce and marketing needs.",
    details: [
      "360-degree product photography",
      "Lifestyle context shots",
      "Detail and feature close-ups",
      "Consistent lighting and angles",
      "White background standardization"
    ],
    benefits: [
      "Increased product appeal",
      "Higher conversion rates",
      "Consistent online presentation",
      "Reduced product returns"
    ],
    icon: "📦",
    stats: [
      { label: "Products Per Day", value: "20-50" },
      { label: "Image Types", value: "3-5 per product" }
    ]
  },
  {
    title: "Commercial Shoots",
    description: "Professional production of commercial content for advertising campaigns.",
    details: [
      "Concept development and storyboarding",
      "Talent casting and direction",
      "Location scouting and permits",
      "Professional hair and makeup",
      "Art direction and styling"
    ],
    benefits: [
      "High-impact advertising content",
      "Professional production values",
      "Clear brand messaging",
      "Emotional audience connection"
    ],
    icon: "💼",
    stats: [
      { label: "Production Scale", value: "Small to Large" },
      { label: "Crew Size", value: "5-20+" }
    ]
  },
  {
    title: "Branding",
    description: "Comprehensive visual identity development for cohesive brand representation.",
    details: [
      "Logo design and refinement",
      "Brand style guide development",
      "Visual identity system creation",
      "Brand asset library management",
      "Application across all touchpoints"
    ],
    benefits: [
      "Strong, recognizable brand identity",
      "Consistent visual representation",
      "Improved brand recall",
      "Cohesive customer experience"
    ],
    icon: "🏷️",
    stats: [
      { label: "Brand Guidelines", value: "50+ pages" },
      { label: "Asset Types", value: "10+" }
    ]
  },
  {
    title: "Graphic Design",
    description: "Creative design solutions for print and digital marketing materials.",
    details: [
      "Marketing collateral design",
      "Social media graphics",
      "Presentation design",
      "Infographic creation",
      "Print material design"
    ],
    benefits: [
      "Professional visual communication",
      "Consistent brand aesthetics",
      "Improved information retention",
      "Higher engagement rates"
    ],
    icon: "✏️",
    stats: [
      { label: "Design Assets", value: "1000+" },
      { label: "File Formats", value: "10+" }
    ]
  }
];

const technicalServices = [
  {
    title: "Web Development",
    description: "Custom website development tailored to your business requirements and user needs.",
    details: [
      "Responsive, mobile-first development",
      "CMS integration (WordPress, Shopify, etc.)",
      "E-commerce functionality",
      "Performance optimization",
      "Security hardening"
    ],
    benefits: [
      "Faster load times",
      "Higher conversion rates",
      "Improved SEO performance",
      "Enhanced security"
    ],
    icon: "🌐",
    stats: [
      { label: "Page Load Speed", value: "<2s" },
      { label: "Mobile Optimization", value: "100%" }
    ]
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile application development for iOS and Android.",
    details: [
      "UI/UX focused development",
      "Native (Swift, Kotlin) and cross-platform (React Native, Flutter)",
      "API integration",
      "App store optimization",
      "Ongoing maintenance"
    ],
    benefits: [
      "Smooth user experience",
      "Offline functionality",
      "Device feature integration",
      "Higher user retention"
    ],
    icon: "📱",
    stats: [
      { label: "App Store Rating", value: "4.8+" },
      { label: "Crash Rate", value: "<0.1%" }
    ]
  },
  {
    title: "Software Development",
    description: "Custom software solutions designed to streamline your business operations.",
    details: [
      "Requirement analysis",
      "System architecture design",
      "Database design",
      "Quality assurance testing",
      "Documentation"
    ],
    benefits: [
      "Automated workflows",
      "Improved operational efficiency",
      "Customized to your needs",
      "Scalable solutions"
    ],
    icon: "💻",
    stats: [
      { label: "Code Coverage", value: "90%+" },
      { label: "Bug Resolution", value: "<24h" }
    ]
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages designed to maximize lead generation and sales.",
    details: [
      "Conversion-focused design",
      "A/B testing implementation",
      "Lead capture optimization",
      "Loading speed optimization",
      "Integration with marketing tools"
    ],
    benefits: [
      "Higher conversion rates",
      "Improved lead quality",
      "Better ad performance",
      "Measurable results"
    ],
    icon: "🛬",
    stats: [
      { label: "Average Conversion Rate", value: "15-25%" },
      { label: "Load Time", value: "<1.5s" }
    ]
  },
  {
    title: "SEO",
    description: "Comprehensive search engine optimization to increase organic visibility and traffic.",
    details: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audits",
      "Content strategy",
      "Backlink building"
    ],
    benefits: [
      "Higher search rankings",
      "Increased organic traffic",
      "Long-term sustainable growth",
      "Higher ROI than paid ads"
    ],
    icon: "🔎",
    stats: [
      { label: "Keyword Rankings", value: "Top 3 in 3 months" },
      { label: "Organic Traffic Growth", value: "3-5x" }
    ]
  },
  {
    title: "CRM",
    description: "Customer Relationship Management solutions to enhance customer interactions.",
    details: [
      "CRM selection consultation",
      "Customization and configuration",
      "Data migration",
      "Integration with other systems",
      "User training"
    ],
    benefits: [
      "Improved customer insights",
      "Better sales tracking",
      "Enhanced customer service",
      "Marketing automation"
    ],
    icon: "🤝",
    stats: [
      { label: "Implementation Time", value: "2-4 weeks" },
      { label: "User Adoption", value: "90%+" }
    ]
  },
  {
    title: "ERP",
    description: "Enterprise Resource Planning systems to integrate and manage business processes.",
    details: [
      "Needs assessment",
      "System selection",
      "Implementation",
      "Data migration",
      "User training"
    ],
    benefits: [
      "Streamlined operations",
      "Real-time data access",
      "Improved decision making",
      "Reduced operational costs"
    ],
    icon: "📈",
    stats: [
      { label: "Process Automation", value: "80%+" },
      { label: "Reporting Time", value: "Reduced 70%" }
    ]
  }
];

const animationServices = [
  {
    title: "3D Animation",
    description: "High-quality 3D animation for product visualization, explainer videos, and more.",
    details: [
      "3D modeling and texturing",
      "Character rigging",
      "Motion design",
      "Lighting and rendering",
      "Post-production"
    ],
    benefits: [
      "Realistic product visualization",
      "Engaging storytelling",
      "Higher viewer retention",
      "Memorable brand experiences"
    ],
    icon: "🎬",
    stats: [
      { label: "Animation Length", value: "15-60s" },
      { label: "Render Time", value: "24-72h" }
    ]
  },
  {
    title: "2D Animation",
    description: "Traditional and motion graphics animation for explainer videos and advertisements.",
    details: [
      "Storyboard development",
      "Character design",
      "Frame-by-frame animation",
      "Motion graphics",
      "Sound design"
    ],
    benefits: [
      "Simplified complex concepts",
      "Brand personality expression",
      "Higher engagement rates",
      "Cross-cultural appeal"
    ],
    icon: "🖌️",
    stats: [
      { label: "Production Time", value: "2-4 weeks" },
      { label: "Style Options", value: "10+" }
    ]
  },
  {
    title: "3D Modeling",
    description: "Detailed 3D models for products, characters, and environments.",
    details: [
      "High-poly modeling",
      "Low-poly optimization",
      "UV unwrapping",
      "Texturing and materials",
      "Render-ready exports"
    ],
    benefits: [
      "Accurate product representation",
      "Versatile asset usage",
      "Interactive 3D experiences",
      "Photorealistic visualization"
    ],
    icon: "🧊",
    stats: [
      { label: "Polygon Count", value: "50k-1M+" },
      { label: "Texture Resolution", value: "4K-8K" }
    ]
  },
  {
    title: "Motion Graphics",
    description: "Dynamic motion graphics for advertisements, title sequences, and presentations.",
    details: [
      "Concept development",
      "Typography animation",
      "Infographic animation",
      "Logo animation",
      "Composite editing"
    ],
    benefits: [
      "Professional presentation",
      "Enhanced information retention",
      "Modern brand image",
      "Higher engagement"
    ],
    icon: "🌀",
    stats: [
      { label: "Animation Length", value: "5-30s" },
      { label: "Delivery Formats", value: "5+" }
    ]
  },
  {
    title: "CGI Video",
    description: "Computer-generated imagery for realistic product visualization and special effects.",
    details: [
      "Photorealistic rendering",
      "Physics simulations",
      "Material accuracy",
      "Light matching",
      "Seamless compositing"
    ],
    benefits: [
      "Cost-effective alternative to live shoots",
      "Impossible camera angles",
      "Consistent product representation",
      "Flexible revisions"
    ],
    icon: "🎞️",
    stats: [
      { label: "Render Quality", value: "4K-8K" },
      { label: "Realism Level", value: "Photoreal" }
    ]
  },
  {
    title: "VFX Video",
    description: "Visual effects integration for film, television, and commercial productions.",
    details: [
      "Green screen compositing",
      "Particle effects",
      "Environmental effects",
      "Digital set extensions",
      "Color grading"
    ],
    benefits: [
      "Enhanced production value",
      "Creative freedom",
      "Cost savings on location shoots",
      "Seamless reality enhancement"
    ],
    icon: "✨",
    stats: [
      { label: "VFX Shots", value: "1000+" },
      { label: "Compositing Layers", value: "20-100+" }
    ]
  },
  {
    title: "Whiteboard Animation",
    description: "Engaging whiteboard animation for explainer videos and educational content.",
    details: [
      "Script development",
      "Storyboarding",
      "Hand-drawn style animation",
      "Voiceover synchronization",
      "Sound effects"
    ],
    benefits: [
      "Simplified complex concepts",
      "Higher information retention",
      "Cost-effective production",
      "Broad audience appeal"
    ],
    icon: "📝",
    stats: [
      { label: "Production Time", value: "1-2 weeks" },
      { label: "Engagement Rate", value: "85%+" }
    ]
  }
];

const caseStudies = [
  {
    title: "E-commerce Platform Redesign",
    description: "Increased conversion rates by 220% through UX optimization and performance enhancements.",
    tags: ["Web Development", "UI/UX", "E-commerce"],
    icon: "🛒"
  },
  {
    title: "Mobile App Launch",
    description: "Successful launch of a fitness app with 500k+ downloads in first 3 months.",
    tags: ["App Development", "Marketing", "UI/UX"],
    icon: "📱"
  },
  {
    title: "Brand Awareness Campaign",
    description: "Generated 2M+ impressions through targeted social media advertising.",
    tags: ["Social Media", "Advertising", "Content"],
    icon: "📢"
  },
  {
    title: "Product Animation Series",
    description: "Created engaging 3D animations that increased product understanding by 75%.",
    tags: ["3D Animation", "Product", "Marketing"],
    icon: "🎥"
  },
  {
    title: "CRM Implementation",
    description: "Streamlined sales processes reducing administrative work by 40 hours/week.",
    tags: ["CRM", "Automation", "Sales"],
    icon: "📊"
  },
  {
    title: "Corporate Video Production",
    description: "Produced award-winning brand film viewed over 1M times.",
    tags: ["Video", "Production", "Branding"],
    icon: "🎬"
  }
];

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Creative Director",
    bio: "10+ years experience in visual storytelling and brand development across multiple industries.",
    expertise: ["Creative Direction", "Brand Strategy", "Visual Design"]
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in scalable web applications and performance optimization.",
    expertise: ["React", "Node.js", "AWS"]
  },
  {
    name: "Michael Rodriguez",
    role: "Marketing Strategist",
    bio: "Data-driven marketer with expertise in growth hacking and conversion rate optimization.",
    expertise: ["Digital Marketing", "SEO", "Analytics"]
  },
  {
    name: "Emma Wilson",
    role: "Animation Director",
    bio: "Award-winning animator with experience in both 2D and 3D animation for major brands.",
    expertise: ["3D Animation", "Motion Graphics", "Visual Effects"]
  }
];

function setExpandedService(_arg0: null) {
  throw new Error('Function not implemented.');
}
