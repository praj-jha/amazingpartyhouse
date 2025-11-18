import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 shadow-md">
            {/* Main navbar - switched to dark background */}
            <div className="bg-[#2C1810] border-b-2 border-[#00000000]">
                <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-2 md:py-12">
                    {/* Mobile Header */}
                    <div className="md:hidden flex justify-between items-center">
                        <Link to="/" className="flex items-center">
                            <img src="/aph2.png" alt="Amazing Party House" className="h-20 w-auto" />
                        </Link>
                        <button
                            className="p-2 rounded-md border border-[#D4AF37] text-white"
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
                                    className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    ABOUT
                                </Link>
                            </li>
                            <li
                                className="relative group"
                                onMouseEnter={() => setShowDropdown(true)}
                                onMouseLeave={() => setShowDropdown(false)}
                            >
                                <span className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors cursor-pointer py-2 flex items-center gap-1">
                                    SERVICES
                                    <FiChevronDown className="text-[#D4AF37]" size={16} />
                                </span>
                                {showDropdown && (
                                    <div className="absolute top-full left-0 bg-[#2C1810] min-w-[280px] max-h-[500px] overflow-y-auto shadow-xl mt-0 border-2 border-[#D4AF37]/20 rounded-md">
                                        <Link to="/services/holiday-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Holiday Parties
                                        </Link>
                                        <Link to="/services/corporate-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Corporate Events
                                        </Link>
                                        <Link to="/services/birthday-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Birthday Parties
                                        </Link>
                                        <Link to="/services/bat-bar-mitzvahs" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Bat & Bar Mitzvahs
                                        </Link>
                                        <Link to="/services/quinceaneras" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Quinceaneras
                                        </Link>
                                        <Link to="/services/weddings" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Weddings
                                        </Link>
                                        <Link to="/services/destination-weddings" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Destination Weddings
                                        </Link>
                                        <Link to="/services/anniversary-party" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Anniversary Party
                                        </Link>
                                        <Link to="/services/graduation-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Graduation Parties
                                        </Link>
                                        <Link to="/services/engagement-parties" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Engagement Parties
                                        </Link>
                                        <Link to="/services/rehearsal-dinners" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Rehearsal Dinners
                                        </Link>
                                        <Link to="/services/networking-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Networking Events
                                        </Link>
                                        <Link to="/services/alumni-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Alumni Events
                                        </Link>
                                        <Link to="/services/summer-camps" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Summer Camps
                                        </Link>
                                        <Link to="/services/field-trips" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Field Trips
                                        </Link>
                                        <Link to="/services/youth-group-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Youth Group Events
                                        </Link>
                                        <Link to="/services/fundraisers" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Fundraisers
                                        </Link>
                                        <Link to="/services/sports-banquets" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Sports Banquets
                                        </Link>
                                        <Link to="/services/theme-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Theme Events
                                        </Link>
                                        <Link to="/services/kids-events" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Kids Events
                                        </Link>
                                        <Link to="/services/bounce-rentals" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Bounce Rentals
                                        </Link>
                                        <Link to="/services/tents-and-chairs" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Tents and Chairs
                                        </Link>
                                        <Link to="/services/face-painting" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Face Painting
                                        </Link>
                                        <Link to="/services/festivals" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Festivals
                                        </Link>
                                        <Link to="/services/poojas-havans" className="block px-6 py-3 font-sans text-sm tracking-wide text-white hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all">
                                            Poojas & Havans
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>

                        {/* Centered Logo */}
                        <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                            <img src="/aph2.png" alt="Amazing Party House" className="h-24 lg:h w-auto drop-shadow-md" />
                        </Link>

                        {/* Right Navigation */}
                        <ul className="flex gap-5 lg:gap-7 items-center list-none">
                            <li>
                                <Link
                                    to="/testimonials"
                                    className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    TESTIMONIALS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    GALLERY
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="font-sans text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors py-2"
                                >
                                    CONTACT
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Panel */}
                {mobileOpen && (
                    <div className="md:hidden border-t border-[#D4AF37]/30 bg-[#2C1810]">
                        <div className="px-4 py-3 space-y-1">
                            <Link onClick={() => setMobileOpen(false)} to="/" className="block px-2 py-3 text-white font-medium tracking-wide">HOME</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/about" className="block px-2 py-3 text-white font-medium tracking-wide">ABOUT</Link>

                            {/* Mobile Services Accordion */}
                            <button
                                className="w-full flex items-center justify-between px-2 py-3 text-white font-semibold tracking-wide"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            >
                                <span>SERVICES</span>
                                <FiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {mobileServicesOpen && (
                                <div className="pl-2 max-h-[50vh] overflow-y-auto border-l-2 border-[#D4AF37]/40">
                                    <Link onClick={() => setMobileOpen(false)} to="/services/holiday-parties" className="block px-3 py-2 text-sm text-white">Holiday Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/corporate-events" className="block px-3 py-2 text-sm text-white">Corporate Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/birthday-parties" className="block px-3 py-2 text-sm text-white">Birthday Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/bat-bar-mitzvahs" className="block px-3 py-2 text-sm text-white">Bat & Bar Mitzvahs</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/quinceaneras" className="block px-3 py-2 text-sm text-white">Quinceaneras</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/weddings" className="block px-3 py-2 text-sm text-white">Weddings</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/destination-weddings" className="block px-3 py-2 text-sm text-white">Destination Weddings</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/anniversary-party" className="block px-3 py-2 text-sm text-white">Anniversary Party</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/graduation-parties" className="block px-3 py-2 text-sm text-white">Graduation Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/engagement-parties" className="block px-3 py-2 text-sm text-white">Engagement Parties</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/rehearsal-dinners" className="block px-3 py-2 text-sm text-white">Rehearsal Dinners</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/networking-events" className="block px-3 py-2 text-sm text-white">Networking Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/alumni-events" className="block px-3 py-2 text-sm text-white">Alumni Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/summer-camps" className="block px-3 py-2 text-sm text-white">Summer Camps</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/field-trips" className="block px-3 py-2 text-sm text-white">Field Trips</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/youth-group-events" className="block px-3 py-2 text-sm text-white">Youth Group Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/fundraisers" className="block px-3 py-2 text-sm text-white">Fundraisers</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/sports-banquets" className="block px-3 py-2 text-sm text-white">Sports Banquets</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/theme-events" className="block px-3 py-2 text-sm text-white">Theme Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/kids-events" className="block px-3 py-2 text-sm text-white">Kids Events</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/bounce-rentals" className="block px-3 py-2 text-sm text-white">Bounce Rentals</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/tents-and-chairs" className="block px-3 py-2 text-sm text-white">Tents and Chairs</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/face-painting" className="block px-3 py-2 text-sm text-white">Face Painting</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/festivals" className="block px-3 py-2 text-sm text-white">Festivals</Link>
                                    <Link onClick={() => setMobileOpen(false)} to="/services/poojas-havans" className="block px-3 py-2 text-sm text-white">Poojas & Havans</Link>
                                </div>
                            )}

                            <Link onClick={() => setMobileOpen(false)} to="/testimonials" className="block px-2 py-3 text-white font-medium tracking-wide">TESTIMONIALS</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/gallery" className="block px-2 py-3 text-white font-medium tracking-wide">GALLERY</Link>
                            <Link onClick={() => setMobileOpen(false)} to="/contact" className="block px-2 py-3 text-white font-medium tracking-wide">CONTACT</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
