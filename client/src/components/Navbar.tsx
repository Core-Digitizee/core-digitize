import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Lucide icons for better performance

const primaryOrange = '#ff5004';
const primaryBlack = '#060606';
const primaryWhite = '#ffffff';
const darkGray = '#1a1a1a'; // A slightly lighter shade of black for hover effects

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav style={{ backgroundColor: primaryBlack, color: primaryWhite }} className="shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide" style={{ color: primaryOrange }}>
                    Core Digitize
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} color={primaryWhite} /> : <Menu size={28} color={primaryWhite} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden" style={{ backgroundColor: primaryBlack }}>
                    <MobileNavLink to="/" closeMenu={() => setIsOpen(false)}>Home</MobileNavLink>
                    <MobileNavLink to="/services" closeMenu={() => setIsOpen(false)}>Services</MobileNavLink>
                    <MobileNavLink to="/about" closeMenu={() => setIsOpen(false)}>About</MobileNavLink>
                    <MobileNavLink to="/contact" closeMenu={() => setIsOpen(false)}>Contact</MobileNavLink>
                </div>
            )}
        </nav>
    );
};

// ✅ Reusable NavLink for Desktop
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={to} className="text-white hover:text-orange-500 transition duration-300">
        {children}
    </Link>
);

// Reusable NavLink for Mobile
const MobileNavLink = ({ to, closeMenu, children }: { to: string; closeMenu: () => void; children: React.ReactNode }) => (
    <Link to={to} className="block px-6 py-2 text-white hover:bg-gray-700 transition duration-300" onClick={closeMenu}>
        {children}
    </Link>
);

export default Navbar;