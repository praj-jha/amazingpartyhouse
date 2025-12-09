import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
    const images = [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600',
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
        'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600',
        'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600',
        'https://images.unsplash.com/photo-1519167758481-83f29da8a5f7?w=600',
        'https://images.unsplash.com/photo-1556035511-3168381ea4d4?w=600',
        'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
    ];

    return (
        <div>
            <Navbar />
            <main className="mt-24 min-h-screen bg-cream">
                <div className="max-w-7xl mx-auto px-8 py-20">
                    <h1 className="font-serif text-6xl font-semibold text-primary mb-8 tracking-wide">
                        GALLERY
                    </h1>
                    <div className="w-32 h-1 bg-primary-gold mb-12"></div>

                    <p className="font-sans text-lg text-primary/80 mb-16 max-w-3xl">
                        Explore some of our most memorable events. Each image tells a story of creativity,
                        dedication, and excellence in event planning.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <img
                                    src={image}
                                    alt={`Event ${index + 1}`}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary-gold/0 group-hover:bg-primary-gold/20 transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-20 text-center bg-gradient-to-br from-[#2C1810] to-[#1a0f08] rounded-2xl p-12 md:p-16">
                        <h2 className="font-serif text-3xl md:text-4xl text-white font-light tracking-wide mb-6">
                            Ready to Create Your Own Masterpiece?
                        </h2>
                        <p className="font-sans text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
                            Let's discuss your vision and create an event that will be remembered for years to come.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://calendar.app.google/3GTWW3UurwXyiyeo7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] text-[#2C1810] font-sans font-semibold px-8 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm hover:scale-105"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Schedule a Call</span>
                            </a>
                            <a
                                href="/contact"
                                className="inline-block bg-transparent border-2 border-[#D4AF37] hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#2C1810] font-sans font-semibold px-8 py-4 rounded-lg tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;