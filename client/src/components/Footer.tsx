import { motion } from 'framer-motion';
import { FiChevronRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  // Footer data
  const footerData = {
    logo: '/Logo.png', // Update with your logo path
    companyInfo: {
      description: 'Transforming businesses through innovative digital solutions since 2018.',
      email: 'contact@coredigitize.com',
      phone: '+1 (555) 123-4567',
      address: '123 Digital Avenue, Tech City, TC 10001'
    },
    links: [
      {
        title: 'Quick Links',
        items: [
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
          { name: 'Services', path: '/services' },
          { name: 'Portfolio', path: '/portfolio' },
          { name: 'Contact', path: '/contact' }
        ]
      },
      {
        title: 'Services',
        items: [
          { name: 'Digital Marketing', path: '/services/marketing' },
          { name: 'Web Development', path: '/services/development' },
          { name: 'Media Production', path: '/services/media' },
          { name: 'Animation', path: '/services/animation' },
          { name: 'Enterprise Solutions', path: '/services/enterprise' }
        ]
      },
      {
        title: 'Legal',
        items: [
          { name: 'Privacy Policy', path: '/privacy' },
          { name: 'Terms of Service', path: '/terms' },
          { name: 'Cookie Policy', path: '/cookies' }
        ]
      }
    ],
    social: [
      { icon: <FaTwitter />, url: 'https://twitter.com' },
      { icon: <FaLinkedin />, url: 'https://linkedin.com' },
      { icon: <FaInstagram />, url: 'https://instagram.com' },
      { icon: <FaFacebookF />, url: 'https://facebook.com' }
    ]
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-[#0a0a0a] border-t border-[#ffffff10] pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info with Logo */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <motion.img 
                src={footerData.logo} 
                alt="Core Digitize Logo"
                className="w-12 h-12 object-contain"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
              <span className="text-2xl font-semibold">
                <span className="text-[#ff5004]">core</span>
                <span className="text-white">digitize</span>
              </span>
            </div>
            <p className="text-white/70">{footerData.companyInfo.description}</p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/70 hover:text-[#ff5004] transition-colors">
                <FiMail className="text-[#ff5004]" />
                <a href={`mailto:${footerData.companyInfo.email}`}>{footerData.companyInfo.email}</a>
              </div>
              <div className="flex items-center gap-3 text-white/70 hover:text-[#ff5004] transition-colors">
                <FiPhone className="text-[#ff5004]" />
                <a href={`tel:${footerData.companyInfo.phone.replace(/\D/g, '')}`}>
                  {footerData.companyInfo.phone}
                </a>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <FiMapPin className="text-[#ff5004] mt-1" />
                <span>{footerData.companyInfo.address}</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerData.links.map((section, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <button
                      onClick={() => navigate(item.path)}
                      className="text-white/70 hover:text-[#ff5004] transition-colors flex items-center gap-2"
                    >
                      <FiChevronRight className="text-[#ff5004] text-sm" />
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-[#ffffff10] my-8"
        />

        {/* Bottom Footer */}
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.p 
            variants={itemVariants}
            className="text-white/50 text-sm"
          >
            &copy; {currentYear} Core Digitize. All rights reserved.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex gap-6"
          >
            {footerData.social.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-[#ff5004] text-lg transition-colors"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;