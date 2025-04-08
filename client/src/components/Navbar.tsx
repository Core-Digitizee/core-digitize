import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/Logo.png";

const primaryColor = "#ff4d00";
const whiteColor = "#ffffff";

const pages = ["/", "/about", "/services", "/portfolio", "/contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const getPageName = (path: string) => {
        switch(path) {
            case "/": 
                return "Home";
            case "/about":
                return "About Us";
            case "/contact":
                return "Contact Us";
            default:
                return path.charAt(1).toUpperCase() + path.slice(2);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-opacity-90 shadow-lg border-b border-[#ff5004]">
                <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 relative">
                    
                    {/* Logo group - pushed further left */}
                    <div className="flex-1 flex justify-start">
                        <Link to="/" className="flex items-center gap-2 ml-0 sm:ml-2 md:ml-4">
                            <img src={logo} alt="coredigitize logo" className="h-8" />
                            <span className="text-2xl font-bold tracking-tight lowercase">
                                <span style={{ color: primaryColor }}>core</span>
                                <span style={{ color: whiteColor }}>digitize</span>
                            </span>
                        </Link>
                    </div>

                    {/* Navigation items - pushed further right */}
                    <div className="flex-1 flex justify-end">
                        <div className="hidden md:flex space-x-8 mr-0 sm:mr-2 md:mr-4">
                            {pages.map((path) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={`relative text-lg font-medium transition-all duration-300 ${
                                        location.pathname === path ? "text-[#ff4d00]" : "text-white"
                                    }`}
                                >
                                    {getPageName(path)}
                                    {location.pathname === path && (
                                        <div className="absolute left-0 bottom-0 w-full h-[3px] bg-[#ff4d00]" />
                                    )}
                                </NavLink>
                            ))}
                        </div>

                        <button 
                            className="md:hidden focus:outline-none mr-0 sm:mr-2 md:mr-4"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className="h-[80px] md:h-[90px]"></div>

            <div className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-[#060606] shadow-lg border-l border-[#ff5004] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6">
                    {pages.map((path) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={`text-xl font-medium px-6 py-3 transition-all duration-300 rounded-lg hover:bg-gray-800 ${
                                location.pathname === path ? "text-[#ff4d00]" : "text-white"
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {getPageName(path)}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;