import { FaHeart, FaBriefcase, FaChild, FaGlassCheers, FaPrayingHands, FaTheaterMasks } from 'react-icons/fa';

const Services = () => {
    const serviceCategories = [
        {
            icon: <FaHeart className="text-3xl" />,
            title: "Celebrations & Milestones",
            description: "From intimate gatherings to grand celebrations",
            services: [
                "Birthday Parties",
                "Weddings & Destination Weddings",
                "Anniversary Celebrations",
                "Engagement Parties",
                "Graduation Parties",
                "Quinceañeras",
                "Bar & Bat Mitzvahs"
            ]
        },
        {
            icon: <FaBriefcase className="text-3xl" />,
            title: "Corporate & Professional Events",
            description: "Elevate your business occasions",
            services: [
                "Corporate Events & Conferences",
                "Networking Events",
                "Team Building Activities",
                "Alumni Events",
                "Fundraisers",
                "Sports Banquets",
                "Holiday Parties"
            ]
        },
        {
            icon: <FaChild className="text-3xl" />,
            title: "Kids & Youth Events",
            description: "Creating magical memories for young ones",
            services: [
                "Kids Birthday Parties",
                "Summer Camps",
                "Field Trips",
                "Youth Group Events",
                "Face Painting & Entertainment",
                "Bounce House Rentals",
                "Theme Parties"
            ]
        },
        {
            icon: <FaGlassCheers className="text-3xl" />,
            title: "Special Occasions",
            description: "Making every moment memorable",
            services: [
                "Rehearsal Dinners",
                "Bridal & Baby Showers",
                "Festivals & Community Events",
                "Holiday Celebrations",
                "Theme Events",
                "Private Parties"
            ]
        },
        {
            icon: <FaPrayingHands className="text-3xl" />,
            title: "Cultural & Religious Events",
            description: "Honoring traditions with elegance",
            services: [
                "Poojas & Havans",
                "Religious Ceremonies",
                "Cultural Festivals",
                "Traditional Celebrations"
            ]
        },
        {
            icon: <FaTheaterMasks className="text-3xl" />,
            title: "Event Essentials & Rentals",
            description: "Complete setup solutions",
            services: [
                "Tents & Canopies",
                "Tables & Chairs",
                "Decor & Lighting",
                "Sound & Entertainment Systems",
                "Catering Services",
                "Photography & Videography"
            ]
        }
    ];

    return (
        <section className="bg-gradient-to-b from-[#2C1810] to-[#1a0f08] py-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="font-cursive text-4xl md:text-5xl text-[#D4AF37] italic mb-3">
                        Our Services
                    </h3>
                    <h2 className="font-serif text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-3xl mx-auto">
                        From intimate gatherings to grand celebrations, we bring your vision to life with
                        professional expertise and personalized attention
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
                </div>

                {/* Service Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {serviceCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 rounded-lg p-6 hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 group"
                        >
                            {/* Icon and Title */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="text-[#D4AF37] group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm mb-4 italic">
                                {category.description}
                            </p>

                            {/* Services List */}
                            <ul className="space-y-2">
                                {category.services.map((service, serviceIndex) => (
                                    <li
                                        key={serviceIndex}
                                        className="flex items-start gap-2 text-gray-200 text-sm"
                                    >
                                        <span className="text-[#D4AF37] mt-1 text-xs">✦</span>
                                        <span className="group-hover:text-white transition-colors">
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-white/80 text-lg mb-6">
                        Don't see what you're looking for? We offer custom event planning tailored to your needs!
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-[#D4AF37] text-[#2C1810] font-semibold px-8 py-3 rounded-full hover:bg-[#E5C158] transition-all hover:scale-105 shadow-lg"
                    >
                        Get Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;