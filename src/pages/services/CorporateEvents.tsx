import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { FaBriefcase, FaCheckCircle, FaUsers, FaLightbulb } from 'react-icons/fa';

const CorporateEvents = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Corporate Event Planning",
        "provider": {
            "@type": "EventPlanning",
            "name": "Amazing Party House",
            "telephone": "+1-407-921-6454",
            "email": "hello@amazingpartyhouse.com"
        },
        "areaServed": {
            "@type": "State",
            "name": "Florida"
        },
        "description": "Professional corporate event planning services across Florida including conferences, team building, networking events, and company celebrations"
    };

    const services = [
        "Corporate Conferences & Seminars",
        "Networking Events & Mixers",
        "Team Building Activities",
        "Company Holiday Parties",
        "Product Launch Events",
        "Business Meetings & Retreats",
        "Trade Shows & Exhibitions",
        "Corporate Galas & Award Ceremonies",
        "Fundraising Events",
        "Employee Recognition Events",
        "Corporate Anniversary Celebrations",
        "Executive Dinners"
    ];

    const benefits = [
        {
            icon: <FaBriefcase />,
            title: "Professional Excellence",
            description: "Deliver impactful corporate events that reflect your brand's professionalism and values"
        },
        {
            icon: <FaUsers />,
            title: "Seamless Coordination",
            description: "Expert management of all vendors, logistics, and attendees for flawless execution"
        },
        {
            icon: <FaLightbulb />,
            title: "Creative Solutions",
            description: "Innovative event concepts that engage attendees and achieve your business objectives"
        },
        {
            icon: <FaCheckCircle />,
            title: "ROI Focused",
            description: "Strategic planning that maximizes impact while staying within budget"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Corporate Event Planning Florida | Business Event Organizers | Amazing Party House"
                description="Premier corporate event planners in Florida. Expert business event planning, conferences, team building, networking events & company celebrations. Serving Miami, Orlando, Tampa & all FL. Professional, seamless execution. 3+ years excellence. Free quote!"
                keywords="corporate event planners florida, business event planning florida, corporate party organizers, conference planners florida, team building events florida, networking event organizers, company party planners florida, corporate gala planning, business meeting planners, corporate retreat organizers florida, professional event planning, miami corporate events, orlando business planners"
                canonicalUrl="https://amazingpartyhouse.com/services/corporate-events"
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop"
                        alt="Corporate Event Planning Florida"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 via-[#2C1810]/80 to-[#2C1810]/90"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        Corporate Event<br />Planning
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="font-sans text-lg md:text-xl text-white/90 tracking-wide max-w-3xl mx-auto leading-relaxed">
                        Florida's Leading Corporate Event Planners<br />
                        Professional Business Events, Conferences & Team Building Across FL
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] text-center mb-12">
                        Complete Corporate Event Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <FaCheckCircle className="text-[#D4AF37] text-xl flex-shrink-0" />
                                <span className="font-sans text-gray-700">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] text-center mb-16">
                        Why Choose Our Corporate Event Planning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="text-5xl text-[#D4AF37] mb-4 flex justify-center">
                                    {benefit.icon}
                                </div>
                                <h3 className="font-serif text-xl font-semibold mb-3 text-[#2C1810]">
                                    {benefit.title}
                                </h3>
                                <p className="font-sans text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-gradient-to-br from-[#2C1810] to-[#1a0f08]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
                        Elevate Your Corporate Events
                    </h2>
                    <p className="font-sans text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Partner with Florida's premier corporate event planners. From intimate meetings to large conferences, we deliver professional excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://calendar.app.google/3GTWW3UurwXyiyeo7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2C1810] font-serif font-semibold tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:bg-[#E5C158] transition-all duration-300 hover:scale-105"
                        >
                            Schedule Consultation
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-serif font-semibold tracking-wider rounded-full hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all duration-300"
                        >
                            Request Proposal
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CorporateEvents;
