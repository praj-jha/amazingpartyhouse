import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <Navbar />
            <main className="mt-24 min-h-screen bg-cream">
                <div className="max-w-7xl mx-auto px-8 py-20">
                    <h1 className="font-serif text-6xl font-semibold text-primary mb-8 tracking-wide">
                        CONTACT US
                    </h1>
                    <div className="w-32 h-1 bg-primary-gold mb-12"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Information */}
                        <div>
                            <h2 className="font-serif text-3xl font-semibold text-primary mb-8">
                                Get in Touch
                            </h2>
                            <p className="font-sans text-lg text-primary/80 mb-8">
                                Ready to plan your next event? We'd love to hear from you.
                                Contact us today to discuss how we can make your event unforgettable.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <FaPhone className="text-primary-gold text-xl mt-1" />
                                    <div>
                                        <h3 className="font-sans font-semibold text-primary mb-2">Phone</h3>
                                        <a href="tel:+1 407-921-6454" className="font-sans text-primary/80 hover:text-primary-gold transition-colors">
                                            +1 407-921-6454
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaEnvelope className="text-primary-gold text-xl mt-1" />
                                    <div>
                                        <h3 className="font-sans font-semibold text-primary mb-2">Email</h3>
                                        <a href="mailto:Himanshu@infinityhospitality.co.in" className="font-sans text-primary/80 hover:text-primary-gold transition-colors">
                                            info@amazingpartyhouse.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-primary-gold text-xl mt-1" />
                                    <div>
                                        <h3 className="font-sans font-semibold text-primary mb-2">Location</h3>
                                        <p className="font-sans text-primary/80">
                                            Serving clients across united states
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <h2 className="font-serif text-2xl font-semibold text-primary mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-sans text-sm font-medium text-primary mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary-gold focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block font-sans text-sm font-medium text-primary mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary-gold focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block font-sans text-sm font-medium text-primary mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary-gold focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="eventType" className="block font-sans text-sm font-medium text-primary mb-2">
                                        Event Type
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary-gold focus:outline-none transition-colors"
                                    >
                                        <option value="">Select an event type</option>
                                        <option value="corporate">Corporate Event</option>
                                        <option value="product-launch">Product Launch</option>
                                        <option value="business-anniversary">Business Anniversary</option>
                                        <option value="company-picnic">Company Picnic</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block font-sans text-sm font-medium text-primary mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-primary/20 rounded-lg focus:border-primary-gold focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary-gold text-white font-sans font-semibold py-4 px-6 rounded-lg hover:bg-primary-gold/90 transition-colors tracking-wide"
                                >
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;