import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        guestCount: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            alert('Thank you for your inquiry! We will get back to you within 24 hours.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: '',
                eventDate: '',
                guestCount: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Phone",
            detail: "+1 407-921-6454",
            link: "tel:+14079216454",
            subtitle: "Call us anytime"
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            detail: "info@amazingpartyhouse.com",
            link: "mailto:info@amazingpartyhouse.com",
            subtitle: "Drop us a line"
        },
        {
            icon: <FaMapMarkerAlt className="text-2xl" />,
            title: "Location",
            detail: "United States",
            link: null,
            subtitle: "Serving nationwide"
        },
        {
            icon: <FaClock className="text-2xl" />,
            title: "Business Hours",
            detail: "Mon - Sat: 9AM - 8PM",
            link: null,
            subtitle: "Sunday by appointment"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop"
                        alt="Contact Us"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-linear-to-br from-[#2C1810]/90 via-[#2C1810]/80 to-[#2C1810]/90"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <div className="mb-6 flex justify-center">
                        <FaPaperPlane className="text-[#D4AF37] text-5xl md:text-6xl opacity-40" />
                    </div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-[0.2em] mb-6 animate-fadeInDown">
                        CONTACT US
                    </h1>
                    <div className="w-32 h-px bg-[#D4AF37] mx-auto mb-8"></div>
                    <p className="font-sans text-base md:text-lg text-white/90 tracking-[0.2em] uppercase animate-fadeInUp max-w-3xl mx-auto leading-relaxed">
                        Let's Create Your Perfect Celebration
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-20 bg-linear-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32 relative z-10">
                        {contactInfo.map((info, index) => (
                            <div 
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#D4AF37] text-center group hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                    <div className="text-[#D4AF37] group-hover:text-white transition-colors">
                                        {info.icon}
                                    </div>
                                </div>
                                <h3 className="font-serif text-xl text-[#2C1810] font-semibold mb-2 tracking-wide">
                                    {info.title}
                                </h3>
                                <p className="font-sans text-xs text-gray-500 mb-3 uppercase tracking-wider">
                                    {info.subtitle}
                                </p>
                                {info.link ? (
                                    <a 
                                        href={info.link}
                                        className="font-sans text-sm text-[#D4AF37] hover:text-[#b8941f] transition-colors font-medium"
                                    >
                                        {info.detail}
                                    </a>
                                ) : (
                                    <p className="font-sans text-sm text-gray-700 font-medium">
                                        {info.detail}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Column - Info */}
                        <div className="lg:col-span-2">
                            <h2 className="font-cursive text-3xl md:text-4xl text-[#D4AF37] italic mb-6">
                                Get in Touch
                            </h2>
                            <h3 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide mb-8">
                                WE'D LOVE TO HEAR FROM YOU
                            </h3>
                            
                            <p className="font-sans text-base text-gray-700 leading-relaxed mb-8">
                                Ready to plan your dream event? Whether you have a detailed vision or need help bringing your ideas to life, our team is here to make it happen. Reach out today and let's start creating something extraordinary together.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
                                        <FaPhone className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-1">Call Us</h4>
                                        <a href="tel:+14079216454" className="font-sans text-sm text-gray-600 hover:text-[#D4AF37] transition-colors">
                                            +1 407-921-6454
                                        </a>
                                        <p className="font-sans text-xs text-gray-500 mt-1">Available Mon-Sat, 9AM-8PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
                                        <FaEnvelope className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-1">Email Us</h4>
                                        <a href="mailto:info@amazingpartyhouse.com" className="font-sans text-sm text-gray-600 hover:text-[#D4AF37] transition-colors break-all">
                                            info@amazingpartyhouse.com
                                        </a>
                                        <p className="font-sans text-xs text-gray-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center shrink-0">
                                        <FaInstagram className="text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-1">Follow Us</h4>
                                        <p className="font-sans text-sm text-gray-600">
                                            @amazingpartyhouse
                                        </p>
                                        <p className="font-sans text-xs text-gray-500 mt-1">See our latest events</p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="bg-linear-to-br from-gray-50 to-white p-6 rounded-xl border-l-4 border-[#D4AF37]">
                                <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-4">Why Choose Us?</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37] mt-1">✓</span>
                                        <span className="font-sans text-sm text-gray-600">3 Years of Excellence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37] mt-1">✓</span>
                                        <span className="font-sans text-sm text-gray-600">500+ Successful Events</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37] mt-1">✓</span>
                                        <span className="font-sans text-sm text-gray-600">98% Client Satisfaction</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-[#D4AF37] mt-1">✓</span>
                                        <span className="font-sans text-sm text-gray-600">Professional Team</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-linear-to-br from-white to-gray-50 p-8 md:p-10 rounded-2xl shadow-2xl border-t-4 border-[#D4AF37]">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#2C1810] font-semibold tracking-wide mb-2">
                                    REQUEST A CONSULTATION
                                </h3>
                                <p className="font-sans text-sm text-gray-600 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                YOUR NAME *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                EMAIL ADDRESS *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                PHONE NUMBER *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="eventDate" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                EVENT DATE
                                            </label>
                                            <input
                                                type="date"
                                                id="eventDate"
                                                name="eventDate"
                                                value={formData.eventDate}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="eventType" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                EVENT TYPE *
                                            </label>
                                            <select
                                                id="eventType"
                                                name="eventType"
                                                required
                                                value={formData.eventType}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                            >
                                                <option value="">Select event type</option>
                                                <option value="wedding">Wedding</option>
                                                <option value="birthday">Birthday Party</option>
                                                <option value="corporate">Corporate Event</option>
                                                <option value="quinceanera">Quinceañera</option>
                                                <option value="bar-mitzvah">Bar/Bat Mitzvah</option>
                                                <option value="anniversary">Anniversary</option>
                                                <option value="graduation">Graduation Party</option>
                                                <option value="engagement">Engagement Party</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="guestCount" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                                GUEST COUNT
                                            </label>
                                            <select
                                                id="guestCount"
                                                name="guestCount"
                                                value={formData.guestCount}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors font-sans text-sm"
                                            >
                                                <option value="">Select guest count</option>
                                                <option value="1-25">1-25 guests</option>
                                                <option value="26-50">26-50 guests</option>
                                                <option value="51-100">51-100 guests</option>
                                                <option value="101-200">101-200 guests</option>
                                                <option value="201-300">201-300 guests</option>
                                                <option value="300+">300+ guests</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block font-sans text-sm font-semibold text-[#2C1810] mb-2 tracking-wide">
                                            YOUR MESSAGE *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors resize-none font-sans text-sm"
                                            placeholder="Tell us about your event vision, theme preferences, or any specific requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#D4AF37] hover:bg-[#b8941f] text-white font-sans font-semibold py-4 px-6 rounded-lg transition-all duration-300 tracking-wider uppercase text-sm shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center font-sans text-xs text-gray-500 mt-4">
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-cursive text-3xl md:text-4xl text-[#D4AF37] italic mb-4">
                            Common Questions
                        </h2>
                        <h3 className="font-serif text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-wide">
                            FREQUENTLY ASKED QUESTIONS
                        </h3>
                        <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37]">
                            <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-3">How far in advance should I book?</h4>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                We recommend booking 3-6 months in advance for most events. However, we can accommodate shorter timelines based on availability. Contact us to discuss your specific needs.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37]">
                            <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-3">What areas do you service?</h4>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                We serve clients throughout the United States and can travel for destination events. Contact us to discuss your location.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37]">
                            <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-3">What's included in your services?</h4>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                Our full-service planning includes venue selection, decor design, vendor coordination, timeline management, and day-of execution. We customize packages based on your specific needs.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#D4AF37]">
                            <h4 className="font-serif text-lg text-[#2C1810] font-semibold mb-3">Do you offer consultations?</h4>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                Yes! We offer complimentary initial consultations to discuss your vision, answer questions, and provide a custom quote for your event.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-br from-[#2C1810] to-[#1a0f08]">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <h2 className="font-serif text-3xl md:text-5xl text-white font-light tracking-wide mb-6">
                        Ready to Start Planning?
                    </h2>
                    <p className="font-sans text-base md:text-lg text-white/80 mb-10 leading-relaxed">
                        Let's bring your celebration vision to life. Get in touch today and discover how we can make your event extraordinary.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+14079216454"
                            className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#b8941f] text-white font-sans font-semibold px-10 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            <FaPhone />
                            Call Now
                        </a>
                        <a
                            href="/testimonials"
                            className="inline-block bg-white hover:bg-gray-100 text-[#2C1810] font-sans font-semibold px-10 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                        >
                            Client Reviews
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;