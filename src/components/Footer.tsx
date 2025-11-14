import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white border-t-4 border-[#D4AF37] py-16 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Logo and Description */}
                <div>
                    <Link to="/" className="flex items-center gap-3 mb-6">
                        <img src="/logo.png" alt="Amazing Party House" className="h-14 w-auto" />
                    </Link>
                    <p className="font-sans text-sm leading-relaxed text-gray-700">
                        For the past three years, Amazing Party House has been dedicated to creating unforgettable celebrations with unparalleled expertise and creativity.
                    </p>
                </div>

                {/* Important Links */}
                <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2C1810] mb-6 tracking-wide border-b-2 border-[#D4AF37] pb-2 inline-block">
                        IMPORTANT LINKS
                    </h3>
                    <ul className="space-y-3 mt-6">
                        <li>
                            <Link to="/" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <span className="text-[#D4AF37]">›</span> Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <span className="text-[#D4AF37]">›</span> About
                            </Link>
                        </li>
                        <li>
                            <Link to="/testimonials" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <span className="text-[#D4AF37]">›</span> Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link to="/gallery" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <span className="text-[#D4AF37]">›</span> Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                                <span className="text-[#D4AF37]">›</span> Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Call Us */}
                <div>
                    <h3 className="font-serif text-lg font-semibold text-[#2C1810] mb-6 tracking-wide border-b-2 border-[#D4AF37] pb-2 inline-block">
                        CALL US
                    </h3>
                    <div className="space-y-4 mt-6">
                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                            <FaPhone className="text-[#D4AF37] text-lg" />
                            <a href="tel:+1 407-921-6454" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors">
                                +1 407-921-6454
                            </a>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg hover:bg-[#D4AF37]/10 transition-colors">
                            <FaEnvelope className="text-[#D4AF37] text-lg" />
                            <a href="mailto:hello@amazingpartyhouse.com" className="font-sans text-sm text-gray-700 hover:text-[#D4AF37] transition-colors break-all">
                                hello@amazingpartyhouse.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decoration */}
            <div className="mt-12 pt-6 border-t border-gray-200">
                <p className="text-center font-sans text-sm text-gray-600 tracking-wide">
                    © 2022 - 2025 Amazing Party House. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;