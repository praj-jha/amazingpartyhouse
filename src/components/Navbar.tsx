import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-md">
            {/* Top bar with Instagram */}

            {/* Main navbar */}
            <div className="bg-white border-b-2 border-[#D4AF37]">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-between items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/aph.png" alt="Amazing Party House" className="h-12 w-auto" />
                        </Link>
                        <button
                            className="p-2 rounded-md border border-[#D4AF37] text-[#2C1810]"
                            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                        </button>
                    </div>

                    {/* Desktop Navigation - Centered Logo Layout */}
                    <div className="hidden md:flex items-center justify-between">
                        {/* Left Navigation */}
                        <ul className="flex gap-5 lg:gap-7 items-center list-none">
                            <li>
                                <Link
                                    to="/"
                                    className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2"
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
                                className="relative group"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <span className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors cursor-pointer py-2 flex items-center gap-1">
                                    SERVICES
                                    <FiChevronDown className="text-[#D4AF37]" size={16} />
                                </span>
                                {showDropdown && (
                                    <div className="absolute top-full left-0 bg-white min-w-[280px] max-h-[500px] overflow-y-auto shadow-xl mt-0 border-2 border-[#D4AF37] rounded-md">
                                        <Link to="/services/holiday-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Holiday Parties
                                        </Link>
                                        <Link to="/services/corporate-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Corporate Events
                                        </Link>
                                        <Link to="/services/birthday-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Birthday Parties
                                        </Link>
                                        <Link to="/services/bat-bar-mitzvahs" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Bat & Bar Mitzvahs
                                        </Link>
                                        <Link to="/services/quinceaneras" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Quinceaneras
                                        </Link>
                                        <Link to="/services/weddings" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Weddings
                                        </Link>
                                        <Link to="/services/destination-weddings" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Destination Weddings
                                        </Link>
                                        <Link to="/services/anniversary-party" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Anniversary Party
                                        </Link>
                                        <Link to="/services/graduation-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Graduation Parties
                                        </Link>
                                        <Link to="/services/engagement-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Engagement Parties
                                        </Link>
                                        <Link to="/services/rehearsal-dinners" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Rehearsal Dinners
                                        </Link>
                                        <Link to="/services/networking-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Networking Events
                                        </Link>
                                        <Link to="/services/alumni-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Alumni Events
                                        </Link>
                                        <Link to="/services/summer-camps" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Summer Camps
                                        </Link>
                                        <Link to="/services/field-trips" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Field Trips
                                        </Link>
                                        <Link to="/services/youth-group-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Youth Group Events
                                        </Link>
                                        <Link to="/services/fundraisers" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Fundraisers
                                        </Link>
                                        <Link to="/services/sports-banquets" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Sports Banquets
                                        </Link>
                                        <Link to="/services/theme-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Theme Events
                                        </Link>
                                        <Link to="/services/kids-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Kids Events
                                        </Link>
                                        <Link to="/services/bounce-rentals" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Bounce Rentals
                                        </Link>
                                        <Link to="/services/tents-and-chairs" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Tents and Chairs
                                        </Link>
                                        <Link to="/services/face-painting" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Face Painting
                                        </Link>
                                        <Link to="/services/festivals" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Festivals
                                        </Link>
                                        <Link to="/services/poojas-havans" className="block px-6 py-3 font-sans text-sm tracking-wide text-[#2C1810] hover:bg-[#D4AF37] hover:text-white transition-all">
                                            Poojas & Havans
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>

                        {/* Centered Logo */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                            <img src="/aph.png" alt="Amazing Party House" className="h-20 lg:h-24 w-auto drop-shadow-md" />
                        </Link>

                        {/* Right Navigation */}
                        <ul className="flex gap-5 lg:gap-7 items-center list-none">
                            <li>
                                <Link
                                    to="/testimonials"
                                    className="font-sans text-sm font-semibold tracking-wider text-[#2C1810] hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    TESTIMONIALS
                                </Link>
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

                {/* Mobile Menu Panel */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-[#D4AF37]/30 bg-white">
                        <div className="px-4 py-3 space-y-1">
                            <Link onClick={() => setMobileOpen(false)} to="/" className="block px-2 py-3 text-[#2C1810] font-medium tracking-wide">HOME</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/about" className="block px-2 py-3 text-[#2C1810] font-medium tracking-wide">ABOUT</Link>

                            {/* Mobile Services Accordion */}
                            <button
                                className="w-full flex items-center justify-between px-2 py-3 text-[#2C1810] font-semibold tracking-wide"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            >
                                <span>SERVICES</span>
                                <FiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileServicesOpen && (
                                <div className="pl-2 max-h-[50vh] overflow-y-auto border-l-2 border-[#D4AF37]/40">
                                    <Link onClick={() => setMobileOpen(false)} to="/services/holiday-parties" className="block px-3 py-2 text-sm text-[#2C1810]">Holiday Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/corporate-events" className="block px-3 py-2 text-sm text-[#2C1810]">Corporate Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/birthday-parties" className="block px-3 py-2 text-sm text-[#2C1810]">Birthday Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/bat-bar-mitzvahs" className="block px-3 py-2 text-sm text-[#2C1810]">Bat & Bar Mitzvahs</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/quinceaneras" className="block px-3 py-2 text-sm text-[#2C1810]">Quinceaneras</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/weddings" className="block px-3 py-2 text-sm text-[#2C1810]">Weddings</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/destination-weddings" className="block px-3 py-2 text-sm text-[#2C1810]">Destination Weddings</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/anniversary-party" className="block px-3 py-2 text-sm text-[#2C1810]">Anniversary Party</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/graduation-parties" className="block px-3 py-2 text-sm text-[#2C1810]">Graduation Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/engagement-parties" className="block px-3 py-2 text-sm text-[#2C1810]">Engagement Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/rehearsal-dinners" className="block px-3 py-2 text-sm text-[#2C1810]">Rehearsal Dinners</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/networking-events" className="block px-3 py-2 text-sm text-[#2C1810]">Networking Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/alumni-events" className="block px-3 py-2 text-sm text-[#2C1810]">Alumni Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/summer-camps" className="block px-3 py-2 text-sm text-[#2C1810]">Summer Camps</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/field-trips" className="block px-3 py-2 text-sm text-[#2C1810]">Field Trips</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/youth-group-events" className="block px-3 py-2 text-sm text-[#2C1810]">Youth Group Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/fundraisers" className="block px-3 py-2 text-sm text-[#2C1810]">Fundraisers</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/sports-banquets" className="block px-3 py-2 text-sm text-[#2C1810]">Sports Banquets</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/theme-events" className="block px-3 py-2 text-sm text-[#2C1810]">Theme Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/kids-events" className="block px-3 py-2 text-sm text-[#2C1810]">Kids Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/bounce-rentals" className="block px-3 py-2 text-sm text-[#2C1810]">Bounce Rentals</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/tents-and-chairs" className="block px-3 py-2 text-sm text-[#2C1810]">Tents and Chairs</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/face-painting" className="block px-3 py-2 text-sm text-[#2C1810]">Face Painting</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/festivals" className="block px-3 py-2 text-sm text-[#2C1810]">Festivals</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/poojas-havans" className="block px-3 py-2 text-sm text-[#2C1810]">Poojas & Havans</Link>
                                </div>
                            )}

                            <Link onClick={() => setMobileOpen(false)} to="/testimonials" className="block px-2 py-3 text-[#2C1810] font-medium tracking-wide">TESTIMONIALS</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/gallery" className="block px-2 py-3 text-[#2C1810] font-medium tracking-wide">GALLERY</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/contact" className="block px-2 py-3 text-[#2C1810] font-medium tracking-wide">CONTACT</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
