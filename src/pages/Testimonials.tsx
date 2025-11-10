import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Sarah & Michael Thompson",
            event: "Destination Wedding",
            location: "Miami Beach, FL",
            rating: 5,
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
            quote: "Amazing Party House transformed our destination wedding into a fairytale. Every detail was executed flawlessly, from the beachside ceremony to the elegant reception. Their attention to detail and professionalism exceeded all expectations.",
            date: "October 2024"
        },
        {
            id: 2,
            name: "Jennifer Lawrence",
            event: "Corporate Gala",
            location: "Orlando, FL",
            rating: 5,
            image: "/i2.png",
            quote: "Our annual corporate gala was a tremendous success thanks to the exceptional team at Amazing Party House. They understood our brand vision and created an atmosphere that impressed all 300 attendees. Truly outstanding service.",
            date: "September 2024"
        },
        {
            id: 3,
            name: "Isabella Rodriguez",
            event: "Quinceañera",
            location: "Tampa, FL",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
            quote: "My daughter's quinceañera was absolutely magical! The team brought our vision to life with stunning decorations, perfect coordination, and so much heart. Every guest is still talking about it months later. Thank you for making her day unforgettable.",
            date: "August 2024"
        },
        {
            id: 4,
            name: "Jennifer & Robert Williams",
            event: "50th Anniversary",
            location: "Winter Park, FL",
            rating: 5,
            image: "/i3.png",
            quote: "Celebrating 50 years together deserved something special, and Amazing Party House delivered beyond our wildest dreams. The elegant setup, thoughtful touches, and seamless execution made our golden anniversary truly golden.",
            date: "July 2024"
        },
        {
            id: 5,
            name: "Marcus Johnson",
            event: "Bar Mitzvah",
            location: "Altamonte Springs, FL",
            rating: 5,
            image: "/i4.png",
            quote: "From start to finish, the team was professional, creative, and incredibly responsive. They took the stress out of planning and delivered a Bar Mitzvah celebration that honored tradition while being thoroughly modern and fun. Absolutely recommended!",
            date: "June 2024"
        },
        {
            id: 6,
            name: "Emily Martinez",
            event: "Birthday Celebration",
            location: "Lake Mary, FL",
            rating: 5,
            image: "/i6.png",
            quote: "My 40th birthday party was beyond spectacular! The themed decor was Instagram-worthy, the coordination was seamless, and every detail reflected my personality. Amazing Party House truly understands how to create memorable celebrations.",
            date: "May 2024"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0 bg-linear-to-br from-[#2C1810] via-[#3a2820] to-[#2C1810]"></div>

                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}></div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="mb-6 flex justify-center">
                        <FaQuoteLeft className="text-[#D4AF37] text-5xl md:text-6xl opacity-40" />
                    </div>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        TESTIMONIALS
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-6"></div>
                    <p className="font-sans text-sm md:text-base text-white/80 tracking-[0.3em] uppercase animate-fadeInUp">
                        Voices of Celebration
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white py-16 border-b-2 border-gray-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-light mb-2">500+</div>
                            <div className="font-sans text-xs md:text-sm text-gray-600 tracking-wider uppercase">Events Crafted</div>
                        </div>
                        <div className="text-center">
                            <div className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-light mb-2">98%</div>
                            <div className="font-sans text-xs md:text-sm text-gray-600 tracking-wider uppercase">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-light mb-2">3</div>
                            <div className="font-sans text-xs md:text-sm text-gray-600 tracking-wider uppercase">Years Excellence</div>
                        </div>
                        <div className="text-center">
                            <div className="font-serif text-4xl md:text-5xl text-[#D4AF37] font-light mb-2">450+</div>
                            <div className="font-sans text-xs md:text-sm text-gray-600 tracking-wider uppercase">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Testimonial Carousel */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-cursive text-3xl md:text-4xl text-[#D4AF37] italic mb-4">
                            What Our Clients Say
                        </h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    {/* Main Carousel */}
                    <div className="relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 border-t-4 border-[#D4AF37]">
                            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                                {/* Client Image */}
                                <div className="mx-auto md:mx-0">
                                    <div className="relative">
                                        <div className="absolute -inset-4 bg-[#D4AF37] opacity-10 rounded-full"></div>
                                        <img
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-8 border-white shadow-xl mx-auto"
                                        />
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                <div className="text-center md:text-left">
                                    <FaQuoteLeft className="text-[#D4AF37] text-3xl mb-6 mx-auto md:mx-0 opacity-30" />

                                    <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-700 mb-8 italic">
                                        "{testimonials[currentIndex].quote}"
                                    </p>

                                    <div className="space-y-2">
                                        <h3 className="font-serif text-2xl text-[#2C1810] font-semibold tracking-wide">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="font-sans text-sm text-[#D4AF37] tracking-wider uppercase font-medium">
                                            {testimonials[currentIndex].event}
                                        </p>
                                        <p className="font-sans text-sm text-gray-500">
                                            {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                                        </p>

                                        {/* Star Rating */}
                                        <div className="flex gap-1 justify-center md:justify-start pt-2">
                                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                                <FaStar key={i} className="text-[#D4AF37] text-lg" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white hover:bg-[#D4AF37] text-[#2C1810] hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#D4AF37]"
                            aria-label="Previous testimonial"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white hover:bg-[#D4AF37] text-[#2C1810] hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 border-2 border-[#D4AF37]"
                            aria-label="Next testimonial"
                        >
                            <FaChevronRight />
                        </button>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentIndex
                                        ? 'w-12 h-3 bg-[#D4AF37]'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-[#D4AF37]/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* All Testimonials Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide mb-4">
                            MORE CLIENT EXPERIENCES
                        </h2>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-linear-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-l-4 border-[#D4AF37] group hover:-translate-y-2"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-serif text-lg text-[#2C1810] font-semibold">
                                            {testimonial.name}
                                        </h3>
                                        <p className="font-sans text-xs text-[#D4AF37] tracking-wider uppercase">
                                            {testimonial.event}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-[#D4AF37] text-sm" />
                                    ))}
                                </div>

                                <p className="font-sans text-sm leading-relaxed text-gray-600 mb-4 italic">
                                    "{testimonial.quote}"
                                </p>

                                <div className="pt-4 border-t border-gray-200">
                                    <p className="font-sans text-xs text-gray-500">
                                        {testimonial.location} • {testimonial.date}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-linear-to-br from-[#2C1810] to-[#1a0f08] py-20">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-6">
                        Ready to Create Your Own Story?
                    </h2>
                    <p className="font-sans text-base md:text-lg text-white/80 mb-8 leading-relaxed">
                        Join hundreds of satisfied clients and let us transform your celebration into an unforgettable experience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block bg-[#D4AF37] hover:bg-[#b8941f] text-white font-sans font-semibold px-8 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            Plan Your Event
                        </a>
                        <a
                            href="tel:+14079216454"
                            className="inline-block bg-white hover:bg-gray-100 text-[#2C1810] font-sans font-semibold px-8 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Testimonials;
