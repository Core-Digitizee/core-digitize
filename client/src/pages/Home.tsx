import { motion } from "framer-motion";
import servicesImage from "../assets/Logo.jpg";
import { FaRocket, FaChartLine, FaPencilRuler } from 'react-icons/fa';

function Home() {
    const services = [
        { category: "Marketing", items: ["Social Media Marketing", "Performance Marketing", "Meta Ads", "Google Ads", "Email Marketing", "WhatsApp Marketing", "SEO", "Content Marketing", "Influencer & Affiliate Marketing"] },
        { category: "Web", items: ["Web Development"] },
        { category: "Design", items: ["Branding", "Graphic Design"] },
        { category: "Video", items: ["VFX Video", "2D animation", "3D modeling", "3D animation", "Motion graphics", "Video editing", "Videography", "Photography", "Photo editing", "CGI Video", "Whiteboard animation", "E - learning", "Product shoot", "Commercial shoot"] },
    ];

    return (
        <div className="bg-black text-white font-sans"> {/* Set global background to black */}
            {/* Hero Section */}
            <section className="py-32 md:py-48 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                    >
                        Ignite Your Digital Growth with Core Digitize
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
                    >
                        Your trusted partner for comprehensive digital marketing solutions. We transform your vision into impactful online results.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300">
                            Explore Our Services
                        </button>
                        <button className="bg-transparent hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-full border border-orange-500 ml-4 transition-colors duration-300">
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Our Services Section (Dark background) */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-10">Our Services</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        <span className="font-semibold text-orange-500">FROM VISIBILITY TO PROFITABILITY,</span> WE'VE GOT YOU COVERED! Explore our comprehensive suite of digital marketing services.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-orange-500 mb-4">• Marketing</h3>
                            <ul className="text-gray-300">
                                {services.find(cat => cat.category === "Marketing")?.items.map((item, index) => (
                                    <li key={index} className="mb-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-orange-500 mb-4">• Web & Design</h3>
                            <ul className="text-gray-300">
                                {services.find(cat => cat.category === "Web")?.items.map((item, index) => (
                                    <li key={index} className="mb-2">{item}</li>
                                ))}
                                {services.find(cat => cat.category === "Design")?.items.map((item, index) => (
                                    <li key={index + (services.find(cat => cat.category === "Web")?.items.length || 0)} className="mb-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-left">
                            <h3 className="text-xl font-semibold text-orange-500 mb-4">• Video Production</h3>
                            <ul className="text-gray-300">
                                {services.find(cat => cat.category === "Video")?.items.map((item, index) => (
                                    <li key={index} className="mb-2">{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src={servicesImage} alt="Our Services Overview" className="rounded-lg shadow-md" />
                        </div>
                    </div>
                    {services.reduce((sum, cat) => sum + cat.items.length, 0) > 9 && (
                        <button className="mt-10 bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300">
                            See Our Full Suite of Services
                        </button>
                    )}
                </div>
            </section>

            {/* Why Choose Us Section (Dark gradient background) */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-semibold text-orange-500 mb-10">Why Choose Us?</h2>
                    <p className="text-lg text-gray-300 mb-8">
                        We are dedicated to providing innovative and effective digital marketing solutions that drive real results for your business.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-800 rounded-lg shadow-md p-8 hover:bg-gray-700 transition-colors duration-300">
                            <div className="text-orange-500 text-4xl mb-4">
                                <FaRocket />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                            <p className="text-gray-300">We constantly explore new strategies and technologies to keep you ahead of the competition.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md p-8 hover:bg-gray-700 transition-colors duration-300">
                            <div className="text-orange-500 text-4xl mb-4">
                                <FaPencilRuler />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Creativity</h3>
                            <p className="text-gray-300">Our creative approach ensures your brand stands out in the digital landscape.</p>
                        </div>
                        <div className="bg-gray-800 rounded-lg shadow-md p-8 hover:bg-gray-700 transition-colors duration-300">
                            <div className="text-orange-500 text-4xl mb-4">
                                <FaChartLine />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
                            <p className="text-gray-300">We are committed to delivering measurable results and achieving your business objectives.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section (Black background with gradient overlay) */}
            <section className="py-20 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-60"></div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div className="py-6">
                        <h2 className="text-3xl font-semibold text-orange-500 mb-6">Contact Us</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Ready to take your digital presence to the next level? Get in touch with us today!
                        </p>
                        <p className="text-gray-300 mb-2">
                            <strong className="text-orange-500">Phone:</strong> 7559488929
                        </p>
                        <p className="text-gray-300 mb-4">
                            <strong className="text-orange-500">Email:</strong> officialcoredigitize@gmail.com
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-3 px-6 rounded-full transition-colors duration-300">
                            Request a Free Consultation
                        </button>
                    </div>
                    <div className="relative rounded-lg overflow-hidden shadow-md">
                        <img
                            src={servicesImage}
                            alt="Contact Core Digitize"
                            className="w-full h-full object-cover"
                            style={{ minHeight: '300px' }}
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                            <h3 className="text-xl font-semibold mb-2">Let's Discuss Your Digital Needs</h3>
                            <p className="text-sm">Our team is here to help you achieve your online marketing goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 bg-gray-900 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Core Digitize. All rights reserved.</p>
                <p className="text-sm mt-2">Nashik, Maharashtra, India</p>
            </footer>
        </div>
    );
}

export default Home;