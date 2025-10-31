import { FaCircle } from 'react-icons/fa';

const Services = () => {
    const servicesLeft = [
        'HOLIDAY PARTIES',
        'CORPORATE EVENTS',
        'BIRTHDAY PARTIES',
        'BAT & BAR MITZVAHS',
        'QUINCEANERAS',
        'WEDDINGS',
        'DESTINATION WEDDINGS',
        'ANNIVERSARY PARTY',
        'GRADUATION PARTIES',
        'ENGAGEMENT PARTIES',
        'REHEARSAL DINNERS',
        'NETWORKING EVENTS',
        'ALUMNI EVENTS'
    ];

    const servicesRight = [
        'SUMMER CAMPS',
        'FIELD TRIPS',
        'YOUTH GROUP EVENTS',
        'FUNDRAISERS',
        'SPORTS BANQUETS',
        'THEME EVENTS',
        'KIDS EVENTS',
        'BOUNCE RENTALS',
        'TENTS AND CHAIRS',
        'FACE PAINTING',
        'FESTIVALS',
        'POOJAS & HAVANS'
    ];

    return (
        <section className="bg-gradient-to-b from-[#2C1810] to-[#1a0f08] py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="font-cursive text-4xl md:text-5xl text-[#D4AF37] italic mb-3">
                        Comprehensive Party Services
                    </h3>
                    <h2 className="font-serif text-2xl md:text-3xl text-white font-normal tracking-wide uppercase">
                        Our extensive range of services ensures every aspect of your celebration is covered
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4 mt-12">
                    {/* Left Column */}
                    <div className="space-y-4">
                        {servicesLeft.map((service, index) => (
                            <div key={index} className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                                <FaCircle className="text-[#D4AF37] text-xs shrink-0" />
                                <p className="font-sans text-base text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                                    {service}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4">
                        {servicesRight.map((service, index) => (
                            <div key={index} className="flex items-center gap-4 group hover:translate-x-2 transition-transform">
                                <FaCircle className="text-[#D4AF37] text-xs shrink-0" />
                                <p className="font-sans text-base text-white tracking-wide group-hover:text-[#D4AF37] transition-colors">
                                    {service}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;