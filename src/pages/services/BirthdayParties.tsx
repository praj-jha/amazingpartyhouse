import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import { FaBirthdayCake, FaCheckCircle, FaChild, FaGift } from 'react-icons/fa';

const BirthdayParties = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Birthday Party Planning",
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
        "description": "Professional birthday party planning services for all ages across Florida including kids parties, adult celebrations, milestone birthdays"
    };

    const services = [
        "Kids Birthday Parties (All Ages)",
        "Adult Birthday Celebrations",
        "Sweet 16 Parties",
        "Milestone Birthday Events (30, 40, 50+)",
        "First Birthday Parties",
        "Themed Birthday Parties",
        "Outdoor & Indoor Venues",
        "Birthday Decorations & Setup",
        "Entertainment & Activities",
        "Catering & Cake Coordination",
        "Party Favors & Supplies",
        "Birthday Event Photography"
    ];

    const benefits = [
        {
            icon: <FaBirthdayCake />,
            title: "Memorable Celebrations",
            description: "Create unforgettable birthday memories with personalized themes and creative party ideas"
        },
        {
            icon: <FaChild />,
            title: "Stress-Free Planning",
            description: "We handle everything from invitations to cleanup, so you can enjoy the celebration"
        },
        {
            icon: <FaGift />,
            title: "Custom Themes",
            description: "Unique party themes tailored to the birthday person's interests and preferences"
        },
        {
            icon: <FaCheckCircle />,
            title: "All-Ages Expertise",
            description: "From kids to adults, we create age-appropriate celebrations everyone will love"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Birthday Party Planners Florida | Kids & Adult Party Organizers | Amazing Party House"
                description="Premier birthday party planners in Florida! Expert kids & adult birthday party organizers. Sweet 16, milestone birthdays, themed parties. Serving Miami, Orlando, Tampa & all FL. Creative, fun, stress-free celebrations. 3+ years excellence. Book now!"
                keywords="birthday party planners florida, kids birthday party organizers florida, adult birthday parties florida, sweet 16 party planners, milestone birthday celebrations, first birthday party planners, themed birthday parties florida, children's party organizers, birthday event planning florida, party planners for kids florida, miami birthday parties, orlando party planners"
                canonicalUrl="https://amazingpartyhouse.com/services/birthday-parties"
                schema={schema}
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1600&h=900&fit=crop"
                        alt="Birthday Party Planning Florida"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810]/90 via-[#2C1810]/80 to-[#2C1810]/90"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        Birthday Party<br />Planning
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="font-sans text-lg md:text-xl text-white/90 tracking-wide max-w-3xl mx-auto leading-relaxed">
                        Florida's Expert Birthday Party Planners<br />
                        Unforgettable Celebrations for Kids & Adults Across FL
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#2C1810] text-center mb-12">
                        Complete Birthday Party Services
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
                        Why Choose Our Birthday Party Planning
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
                        Plan Your Amazing Birthday Party
                    </h2>
                    <p className="font-sans text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Let Florida's premier birthday party planners create an unforgettable celebration! Book your free consultation today.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://calendar.app.google/3GTWW3UurwXyiyeo7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#2C1810] font-serif font-semibold tracking-wider rounded-full shadow-xl hover:shadow-2xl hover:bg-[#E5C158] transition-all duration-300 hover:scale-105"
                        >
                            Book Free Consultation
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-serif font-semibold tracking-wider rounded-full hover:bg-[#D4AF37] hover:text-[#2C1810] transition-all duration-300"
                        >
                            Get Party Quote
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BirthdayParties;
