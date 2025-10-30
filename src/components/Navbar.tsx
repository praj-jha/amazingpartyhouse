import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-md">
            {/* Top bar with Instagram */}
            <div className="bg-[#8B7355] py-2 flex justify-end">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-xl mr-20 hover:opacity-80 transition-opacity"
                >
                    <FaInstagram />
                </a>
            </div>

            {/* Main navbar */}
            <div className="bg-white border-b-2 border-[#D4AF37]">
                <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Amazing Party House" className="h-14 w-auto" />
                
                    </Link>

                    {/* Navigation Menu */}
                    <ul className="flex gap-8 items-center list-none">
                        <li>
                            <Link
                                to="/"
                                className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2 border-b-2 border-[#D4AF37]"
                            >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2"
                            >
                                ABOUT
                            </Link>
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}
                        >
                            <span className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors cursor-pointer py-2">
                                SERVICES
                            </span>
                            {showDropdown && (
                                <div className="absolute top-full left-0 bg-white min-w-[240px] shadow-xl mt-2 border-2 border-[#D4AF37] rounded-md overflow-hidden">
                                    <Link
                                        to="/services/birthday-parties"
                                        className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all"
                                    >
                                        Birthday Parties
                                    </Link>
                                    <Link
                                        to="/services/kids-events"
                                        className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all"
                                    >
                                        Kids Events
                                    </Link>
                                    <Link
                                        to="/services/milestone-celebrations"
                                        className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all"
                                    >
                                        Milestone Celebrations
                                    </Link>
                                    <Link
                                        to="/services/kitty-parties"
                                        className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all"
                                    >
                                        Kitty Parties
                                    </Link>
                                </div>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/gallery"
                                className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2"
                            >
                                GALLERY
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2"
                            >
                                CONTACT
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
