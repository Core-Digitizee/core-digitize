import { useState, useRef, useEffect, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX, FiChevronDown } from 'react-icons/fi';

const ContactUs = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State management optimized with useMemo for service categories
  const serviceCategories = useMemo(() => [
    {
      title: "Marketing",
      services: [
        "Social Media Marketing",
        "Google Ads",
        "Meta Ads",
        "Email Marketing",
        "Whatsapp Marketing",
        "Performance Marketing",
        "Influencer Marketing",
        "Content Marketing"
      ]
    },
    {
      title: "Media",
      services: [
        "Videography",
        "Video Editing",
        "Photography",
        "Photo Editing",
        "Product Shoots",
        "Commercial Shoots",
        "Branding",
        "Graphic Design"
      ]
    },
    {
      title: "Technical",
      services: [
        "Web Development",
        "App Development",
        "Software Development",
        "Landing Pages",
        "SEO",
        "CRM",
        "ERP"
      ]
    },
    {
      title: "Animation",
      services: [
        "3D Animation",
        "2D Animation",
        "3D Modeling",
        "Motion Graphics",
        "CGI Video",
        "VFX Video",
        "Whiteboard Animation"
      ]
    }
  ], []);

  const [activeTab, setActiveTab] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Optimized validation functions
  const validateField = useCallback((name: string, value: string) => {
    const validations = {
      name: () => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name is too short';
        return '';
      },
      email: () => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
        return '';
      },
      phone: () => {
        if (value && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)) {
          return 'Invalid phone number';
        }
        return '';
      },
      message: () => {
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message is too short';
        return '';
      },
      service: () => {
        if (!value.trim()) return 'Please select a service';
        return '';
      }
    };

    return validations[name as keyof typeof validations] ? validations[name as keyof typeof validations]() : '';
  }, []);

  // Memoized handler functions
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: validateField(name, value)
      }));
    }
  }, [errors, validateField]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  }, [validateField]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      message: validateField('message', formData.message),
      service: validateField('service', formData.service)
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error)) return;
    
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      service: ''
    });
    setSelectedService('');
    
    setTimeout(() => setIsSubmitted(false), 5000);
  }, [formData, validateField]);

  const selectService = useCallback((service: string) => {
    setSelectedService(service);
    setFormData(prev => ({
      ...prev,
      service
    }));
    setErrors(prev => ({
      ...prev,
      service: validateField('service', service)
    }));
    setIsServiceDropdownOpen(false);
  }, [validateField]);

  const isFieldValid = useCallback((name: string) => {
    if (!formData[name as keyof typeof formData]) return null;
    return !errors[name as keyof typeof errors];
  }, [formData, errors]);

  const getDirections = useCallback(() => {
    const address = encodeURIComponent("123 Tech Park Avenue, Silicon Valley, CA 94000");
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`);
  }, []);

  // Optimized floating elements with useMemo
  const floatingElements = useMemo(() => (
    [...Array(15)].map((_, i) => (
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
    ))
  ), []);

  return (
    <div className="bg-[#060606] text-white min-h-screen overflow-hidden">
      {/* Hero Section - Optimized with reduced motion where possible */}
      <section className="relative py-32 bg-gradient-to-b from-[#060606] to-[#0a0a0a] overflow-hidden isolate">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmNTAwNCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-[#060606]" />
        </div>

        <div className="absolute inset-0 z-0">
          {floatingElements}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-6 py-2 bg-[#ff5004]/10 text-[#ff5004] rounded-full mb-6 text-sm font-medium tracking-wider"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Contact</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5004] to-[#ff8c00]">Our Team</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-xl text-gray-400"
            >
              Let's discuss how we can help transform your business with our digital solutions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Content - Optimized with reduced re-renders */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Methods */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <ContactMethod 
                icon={<FiMail className="w-6 h-6" />}
                title="Email Us"
                description="For general inquiries and partnerships"
                link="mailto:contact@coredigitize.com"
                linkText="contact@coredigitize.com"
              />

              <ContactMethod 
                icon={<FiPhone className="w-6 h-6" />}
                title="Call Us"
                description="For immediate assistance and consultations"
                link="tel:+11234567890"
                linkText="+1 (123) 456-7890"
              />

              <ContactMethod 
                icon={<FiMapPin className="w-6 h-6" />}
                title="Visit Us"
                description="Schedule an in-person meeting at our offices"
                address={<>123 Tech Park Avenue<br />Silicon Valley, CA 94000</>}
              />

              {/* Enterprise Support Card */}
              <div className="relative overflow-hidden rounded-3xl border border-[#ff5004]/30 bg-gradient-to-br from-[#ff5004]/10 to-[#060606] p-8">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff5004] rounded-full filter blur-[100px] opacity-20"></div>
                <h3 className="text-2xl font-medium mb-4">Enterprise Support</h3>
                <p className="text-white/80 mb-6">
                  For enterprise clients with dedicated support needs, our team is available 24/7 to ensure your operations run smoothly.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#ff5004] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#ff5004]">Available 24/7</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ContactForm 
                formData={formData}
                errors={errors}
                isSubmitted={isSubmitted}
                isLoading={isLoading}
                serviceCategories={serviceCategories}
                activeTab={activeTab}
                selectedService={selectedService}
                isServiceDropdownOpen={isServiceDropdownOpen}
                onInputChange={handleInputChange}
                onBlur={handleBlur}
                onSubmit={handleSubmit}
                onSelectService={selectService}
                onSetActiveTab={setActiveTab}
                onSetIsServiceDropdownOpen={setIsServiceDropdownOpen}
                onSetIsSubmitted={setIsSubmitted}
                isFieldValid={isFieldValid}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20 bg-[#0a0a0a] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-[#161616] rounded-3xl overflow-hidden border border-[#ffffff10] h-[500px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5004]/5 to-[#060606] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-[#ff5004]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiMapPin className="w-10 h-10 text-[#ff5004]" />
                </div>
                <h3 className="text-2xl font-medium mb-2">Our Headquarters</h3>
                <p className="text-white/70 mb-4">123 Tech Park Avenue, Silicon Valley, CA 94000</p>
                <button 
                  onClick={getDirections}
                  className="px-6 py-3 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-lg transition-all"
                >
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Footer CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#ff5004]/10 to-[#ff5004]/5 rounded-3xl p-12 md:p-16 border border-[#ff5004]/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Ready to <span className="text-[#ff5004]">Start</span> Your Project?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-white/70 mb-10">
                Contact us today to discuss your requirements and get a free consultation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#ff5004] hover:bg-[#ff6120] text-white font-semibold rounded-xl transition-all"
                >
                  Schedule Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-xl transition-all backdrop-blur-lg bg-white/5"
                >
                  Request Proposal
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
};

// Extracted Contact Method Component for better performance
const ContactMethod = ({ icon, title, description, link, linkText, address }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
  address?: React.ReactNode;
}) => (
  <div className="bg-[#161616] rounded-3xl p-8 border border-[#ffffff10] hover:border-[#ff5004]/30 transition-all">
    <div className="flex items-start gap-6">
      <div className="w-14 h-14 bg-[#ff5004]/10 rounded-xl flex items-center justify-center text-[#ff5004]">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-white/70 mb-4">{description}</p>
        {link ? (
          <a href={link} className="text-[#ff5004] hover:text-[#ff6120] transition-colors">
            {linkText}
          </a>
        ) : (
          <address className="not-italic text-[#ff5004]">{address}</address>
        )}
      </div>
    </div>
  </div>
);

// Extracted Contact Form Component for better performance
const ContactForm = ({
  formData,
  errors,
  isSubmitted,
  isLoading,
  serviceCategories,
  activeTab,
  selectedService,
  isServiceDropdownOpen,
  onInputChange,
  onBlur,
  onSubmit,
  onSelectService,
  onSetActiveTab,
  onSetIsServiceDropdownOpen,
  onSetIsSubmitted,
  isFieldValid
}: {
  formData: any;
  errors: any;
  isSubmitted: boolean;
  isLoading: boolean;
  serviceCategories: any[];
  activeTab: number;
  selectedService: string;
  isServiceDropdownOpen: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSelectService: (service: string) => void;
  onSetActiveTab: (index: number) => void;
  onSetIsServiceDropdownOpen: (open: boolean) => void;
  onSetIsSubmitted: (submitted: boolean) => void;
  isFieldValid: (name: string) => boolean | null;
}) => (
  <div className="bg-[#161616] rounded-3xl p-8 border border-[#ffffff10] relative overflow-hidden">
    {/* Form Background Elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff5004] rounded-full filter blur-[100px] opacity-10"></div>
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#ff5004] rounded-full filter blur-[100px] opacity-10"></div>
    
    {/* Success Message */}
    <AnimatePresence>
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute inset-0 bg-[#161616] rounded-3xl flex flex-col items-center justify-center p-8 z-10"
        >
          <div className="w-20 h-20 bg-[#ff5004]/10 rounded-full flex items-center justify-center mb-6">
            <FiCheck className="w-10 h-10 text-[#ff5004]" />
          </div>
          <h3 className="text-2xl font-medium mb-2 text-center">Message Sent Successfully!</h3>
          <p className="text-white/70 text-center mb-8">
            Thank you for contacting us. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => onSetIsSubmitted(false)}
            className="px-6 py-3 border-2 border-[#ff5004]/40 hover:border-[#ff5004] text-white font-semibold rounded-lg transition-all"
          >
            Send Another Message
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    {/* Contact Form */}
    <form onSubmit={onSubmit} className="relative z-10">
      <h2 className="text-3xl font-medium mb-8">Send Us a Message</h2>
      
      {/* Service Selection */}
      <div className="mb-6 relative">
        <label className="block text-white/70 mb-2">Service Interest <span className="text-[#ff5004]">*</span></label>
        <div className="relative">
          <button
            type="button"
            onClick={() => onSetIsServiceDropdownOpen(!isServiceDropdownOpen)}
            className={`w-full text-left px-6 py-4 bg-[#ffffff05] border ${errors.service ? 'border-red-500/50' : selectedService ? 'border-[#ff5004]/50' : 'border-[#ffffff10]'} rounded-xl flex items-center justify-between transition-all`}
          >
            <span className={selectedService ? 'text-white' : 'text-white/50'}>
              {selectedService || 'Select a service'}
            </span>
            <div className="flex items-center gap-3">
              {selectedService && isFieldValid('service') !== null && (
                isFieldValid('service') ? (
                  <FiCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <FiX className="w-5 h-5 text-red-500" />
                )
              )}
              <FiChevronDown className={`w-5 h-5 transition-transform ${isServiceDropdownOpen ? 'transform rotate-180' : ''}`} />
            </div>
          </button>
          {errors.service && (
            <p className="mt-2 text-sm text-red-500">{errors.service}</p>
          )}
          
          {/* Service Dropdown */}
          <AnimatePresence>
            {isServiceDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 mt-2 bg-[#1e1e1e] rounded-xl shadow-lg border border-[#ffffff10] z-20 overflow-hidden"
              >
                {/* Category Tabs */}
                <div className="flex border-b border-[#ffffff10]">
                  {serviceCategories.map((category, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => onSetActiveTab(index)}
                      className={`px-4 py-3 text-sm font-medium flex-1 text-center ${activeTab === index ? 'text-[#ff5004] border-b-2 border-[#ff5004]' : 'text-white/60 hover:text-white'}`}
                    >
                      {category.title}
                    </button>
                  ))}
                </div>
                
                {/* Services List */}
                <div className="max-h-60 overflow-y-auto">
                  {serviceCategories[activeTab].services.map((service: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => typeof service === 'string' && onSelectService(service)}
                      className={`w-full text-left px-6 py-3 hover:bg-[#ffffff05] transition-colors ${selectedService === service ? 'bg-[#ff5004]/10 text-[#ff5004]' : 'text-white'}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormField
          label="Full Name"
          name="name"
          value={formData.name}
          error={errors.name}
          isValid={isFieldValid('name')}
          onChange={onInputChange}
          onBlur={onBlur}
          required
        />
        
        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          error={errors.email}
          isValid={isFieldValid('email')}
          onChange={onInputChange}
          onBlur={onBlur}
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          error={errors.phone}
          isValid={isFieldValid('phone')}
          onChange={onInputChange}
          onBlur={onBlur}
        />
        
        <div>
          <label htmlFor="company" className="block text-white/70 mb-2">Company (Optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={onInputChange}
            className="w-full px-6 py-4 bg-[#ffffff05] border border-[#ffffff10] hover:border-[#ffffff30] focus:border-[#ff5004] rounded-xl outline-none transition-all"
          />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-white/70 mb-2">Your Message <span className="text-[#ff5004]">*</span></label>
        <div className="relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onInputChange}
            onBlur={onBlur}
            rows={5}
            className={`w-full px-6 py-4 bg-[#ffffff05] border ${errors.message ? 'border-red-500/50' : isFieldValid('message') ? 'border-[#ff5004]/50' : 'border-[#ffffff10]'} hover:border-[#ffffff30] focus:border-[#ff5004] rounded-xl outline-none transition-all pr-12`}
            required
          />
          {formData.message && isFieldValid('message') !== null && (
            <div className="absolute right-4 top-4">
              {isFieldValid('message') ? (
                <FiCheck className="w-5 h-5 text-green-500" />
              ) : (
                <FiX className="w-5 h-5 text-red-500" />
              )}
            </div>
          )}
        </div>
        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full px-8 py-4 bg-gradient-to-r from-[#ff5004] to-[#ff8c00] text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-3 ${isLoading ? 'opacity-80' : ''}`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <FiSend className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>
    </form>
  </div>
);

// Extracted FormField Component for better performance
const FormField = ({
  label,
  name,
  type = 'text',
  value,
  error,
  isValid,
  onChange,
  onBlur,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  error: string;
  isValid: boolean | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div>
    <label htmlFor={name} className="block text-white/70 mb-2">
      {label} {required && <span className="text-[#ff5004]">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full px-6 py-4 bg-[#ffffff05] border ${error ? 'border-red-500/50' : isValid ? 'border-[#ff5004]/50' : 'border-[#ffffff10]'} hover:border-[#ffffff30] focus:border-[#ff5004] rounded-xl outline-none transition-all pr-12`}
        required={required}
      />
      {value && isValid !== null && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {isValid ? (
            <FiCheck className="w-5 h-5 text-green-500" />
          ) : (
            <FiX className="w-5 h-5 text-red-500" />
          )}
        </div>
      )}
    </div>
    {error && (
      <p className="mt-2 text-sm text-red-500">{error}</p>
    )}
  </div>
);

export default ContactUs;