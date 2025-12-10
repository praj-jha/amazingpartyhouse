import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { FaHeart, FaCheckCircle, FaCalendarAlt, FaPalette } from 'react-icons/fa';

const WeddingPlanning = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Wedding Planning & Beach Weddings",
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
        "description": "Professional wedding planning and beach wedding services across Florida including Miami, Orlando, Tampa, and all coastal areas"
    };

    const services = [
        "Beach Wedding Planning & Coordination",
        "Destination Wedding Services",
        "Indoor & Outdoor Wedding Venues",
        "Full-Service Wedding Coordination",
        "Partial Wedding Planning",
        "Day-of Wedding Coordination",
        "Vendor Selection & Management",
        "Budget Planning & Management",
        "Timeline Creation & Management",
        "Ceremony & Reception Design",
        "Floral & Decoration Services",
        "Catering Coordination"
    ];

    const benefits = [
        {
            icon: <FaHeart />,
            title: "Personalized Planning",
            description: "Your unique vision brought to life with custom wedding designs tailored to your style and preferences"
        },
        {
            icon: <FaCheckCircle />,
            title: "Stress-Free Experience",
            description: "We handle every detail so you can enjoy your special day without worry or stress"
        },
        {
            icon: <FaCalendarAlt />,
            title: "Timeline Management",
            description: "Expert coordination ensuring everything runs smoothly from planning to execution"
        },
        {
            icon: <FaPalette />,
            title: "Creative Design",
            description: "Stunning aesthetics and beautiful decor that creates magical wedding moments"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Wedding Planning & Beach Wedding Services Florida | Amazing Party House"
                description="Premier wedding planning & beach wedding specialists in Florida. Expert destination wedding organizers serving Miami, Orlando, Tampa & all FL coastal areas. Full-service wedding coordination, venue selection & beautiful beach ceremonies. 3+ years excellence. Free consultation!"
                keywords="wedding planners florida, beach wedding planners florida, destination wedding organizers florida, wedding planning services florida, beach wedding packages florida, florida wedding coordinators, outdoor wedding planners, coastal wedding specialists, miami wedding planners, orlando wedding organizers, tampa wedding services, affordable wedding planners florida, luxury wedding planning"
                canonicalUrl="https://amazingpartyhouse.com/services/wedding-planning"
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&h=900&fit=crop"
                        alt="Beach Wedding Planning Florida"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 via-[#2C1810]/80 to-[#2C1810]/90"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        Wedding Planning <br />& Beach Weddings
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="font-sans text-lg md:text-xl text-white/90 tracking-wide max-w-3xl mx-auto leading-relaxed">
                        Florida's Premier Wedding Planners & Beach Wedding Specialists<br />
                        Creating Dream Weddings Across Miami, Orlando, Tampa & All Florida
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] text-center mb-12">
                        Complete Wedding Planning Services
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
                        Why Choose Our Wedding Planning Services
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
                        Ready to Plan Your Dream Wedding?
                    </h2>
                    <p className="font-sans text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Schedule a free consultation with Florida's top wedding planners. Let's create your perfect beach wedding or destination celebration!
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://calendar.app.google/3GTWW3UurwXyiyeo7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2C1810] font-serif font-semibold tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:bg-[#E5C158] transition-all duration-300 hover:scale-105"
                        >
                            Schedule Free Consultation
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-serif font-semibold tracking-wider rounded-full hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all duration-300"
                        >
                            Get Custom Quote
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default WeddingPlanning;
