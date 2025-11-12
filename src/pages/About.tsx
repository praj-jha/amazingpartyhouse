import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaAward, FaHeart, FaUsers, FaStar, FaCheckCircle, FaPalette } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: <FaAward className="text-4xl" />,
            title: "Excellence",
            description: "Three years of delivering exceptional events with unwavering commitment to quality and perfection."
        },
        {
            icon: <FaHeart className="text-4xl" />,
            title: "Passion",
            description: "We pour our hearts into every celebration, treating each event as if it were our own special occasion."
        },
        {
            icon: <FaUsers className="text-4xl" />,
            title: "Collaboration",
            description: "Working closely with clients to understand their vision and bring it to life with creativity and care."
        },
        {
            icon: <FaStar className="text-4xl" />,
            title: "Innovation",
            description: "Staying ahead with fresh ideas, modern trends, and creative solutions for memorable experiences."
        },
        {
            icon: <FaCheckCircle className="text-4xl" />,
            title: "Reliability",
            description: "Consistent delivery, meticulous planning, and flawless execution you can count on every time."
        },
        {
            icon: <FaPalette className="text-4xl" />,
            title: "Creativity",
            description: "Transforming spaces and moments into extraordinary experiences through artistic vision and design."
        }
    ];

    const milestones = [
        { number: "500+", label: "Events Created" },
        { number: "450+", label: "Happy Clients" },
        { number: "3", label: "Years Excellence" },
        { number: "98%", label: "Satisfaction Rate" }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=900&fit=crop"
                        alt="About Amazing Party House"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-[#2C1810]/90 via-[#2C1810]/80 to-[#2C1810]/90"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        ABOUT US
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="font-sans text-base md:text-lg text-white/90 tracking-[0.2em] uppercase animate-fadeInUp max-w-3xl mx-auto leading-relaxed">
                        Crafting Unforgettable Celebrations Since 2022
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop"
                                    alt="Our Story"
                                    className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                                />
                                <div className="absolute -bottom-8 -right-8 w-64 h-64 border-4 border-[#D4AF37] rounded-lg -z-10 hidden lg:block"></div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="font-cursive text-3xl md:text-4xl text-[#D4AF37] italic mb-6">
                                Our Story
                            </h2>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide mb-8">
                                WHERE CELEBRATION MEETS PERFECTION
                            </h3>
                            
                            <div className="space-y-6 font-sans text-base md:text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Welcome to <span className="font-semibold text-[#D4AF37]">Amazing Party House</span>, where we transform ordinary moments into extraordinary memories. For the past three years, we have been dedicated to creating unforgettable celebrations that reflect the unique vision and personality of each client.
                                </p>
                                <p>
                                    Our journey began with a simple belief: every celebration deserves to be exceptional. From intimate gatherings to grand galas, we bring creativity, precision, and passion to every event we craft.
                                </p>
                                <p>
                                    Today, we're proud to have created over 500 remarkable events and earned the trust of 450+ satisfied clients across the United States. Our commitment to excellence and attention to detail has made us a trusted name in event planning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="py-16 bg-linear-to-br from-[#2C1810] to-[#1a0f08]">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="text-center">
                                <div className="font-serif text-5xl md:text-6xl text-[#D4AF37] font-light mb-3">
                                    {milestone.number}
                                </div>
                                <div className="font-sans text-xs md:text-sm text-white/80 tracking-[0.2em] uppercase">
                                    {milestone.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#D4AF37]">
                            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                                <FaAward className="text-3xl text-[#D4AF37]" />
                            </div>
                            <h3 className="font-serif text-3xl text-[#2C1810] font-semibold tracking-wide mb-6">
                                OUR MISSION
                            </h3>
                            <p className="font-sans text-base text-gray-700 leading-relaxed">
                                To create extraordinary celebrations that exceed expectations and create lasting memories. We are committed to delivering excellence in every detail, from concept to execution, ensuring that each event reflects the unique story and vision of our clients.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-[#D4AF37]">
                            <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mb-6">
                                <FaStar className="text-3xl text-[#D4AF37]" />
                            </div>
                            <h3 className="font-serif text-3xl text-[#2C1810] font-semibold tracking-wide mb-6">
                                OUR VISION
                            </h3>
                            <p className="font-sans text-base text-gray-700 leading-relaxed">
                                To be the premier event planning company recognized for transforming celebrations into unforgettable experiences. We aspire to set new standards of creativity, professionalism, and excellence in the event industry while building lasting relationships with our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-cursive text-3xl md:text-4xl text-[#D4AF37] italic mb-4">
                            What Drives Us
                        </h2>
                        <h3 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide">
                            OUR CORE VALUES
                        </h3>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-linear-to-b from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#D4AF37] group hover:-translate-y-2"
                            >
                                <div className="text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h4 className="font-serif text-2xl text-[#2C1810] font-semibold mb-4 tracking-wide">
                                    {value.title}
                                </h4>
                                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-linear-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide mb-4">
                            WHY CHOOSE AMAZING PARTY HOUSE
                        </h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Proven Expertise</h4>
                                <p className="font-sans text-sm text-gray-600">Three years of excellence in creating memorable celebrations across all event types.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Personalized Service</h4>
                                <p className="font-sans text-sm text-gray-600">Tailored solutions that reflect your unique vision, style, and celebration goals.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Full-Service Planning</h4>
                                <p className="font-sans text-sm text-gray-600">From concept to cleanup, we handle every detail so you can enjoy your special day.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Creative Excellence</h4>
                                <p className="font-sans text-sm text-gray-600">Innovative designs and creative solutions that make your event truly unforgettable.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Professional Team</h4>
                                <p className="font-sans text-sm text-gray-600">Experienced professionals dedicated to delivering flawless execution and exceptional service.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="shrink-0 w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <span className="text-[#D4AF37] text-2xl">✓</span>
                            </div>
                            <div>
                                <h4 className="font-serif text-xl text-[#2C1810] font-semibold mb-2">Attention to Detail</h4>
                                <p className="font-sans text-sm text-gray-600">Meticulous planning and execution ensuring perfection in every aspect of your event.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-[#2C1810] to-[#1a0f08]">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide mb-6">
                        Let's Create Something Amazing Together
                    </h2>
                    <p className="font-sans text-base md:text-lg text-white/80 mb-10 leading-relaxed">
                        Ready to turn your celebration dreams into reality? Contact us today and let's start planning your unforgettable event.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-[#D4AF37] hover:bg-[#b8941f] text-white font-sans font-semibold px-10 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="/gallery"
                            className="inline-block bg-white hover:bg-gray-100 text-[#2C1810] font-sans font-semibold px-10 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            View Our Work
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;