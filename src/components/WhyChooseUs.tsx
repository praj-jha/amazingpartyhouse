const WhyChooseUs = () => {
    return (
        <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-wide text-[#2C1810]">
                        WHY CHOOSE US?
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image with decoration */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800"
                                alt="Party decoration"
                                className="w-full h-[500px] object-cover border-8 border-[#D4AF37] shadow-2xl rounded-lg"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -left-8 -top-8 text-[#D4AF37] opacity-20 w-32 h-32 hidden lg:block">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <circle cx="100" cy="100" r="80" stroke="currentColor" fill="none" strokeWidth="2" />
                                <circle cx="100" cy="100" r="60" stroke="currentColor" fill="none" strokeWidth="1" />
                            </svg>
                        </div>
                        <div className="absolute -right-8 -bottom-8 text-[#D4AF37] opacity-20 w-40 h-40 hidden lg:block">
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <circle cx="100" cy="100" r="90" stroke="currentColor" fill="none" strokeWidth="2" />
                                <circle cx="100" cy="100" r="70" stroke="currentColor" fill="none" strokeWidth="1" />
                            </svg>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="order-1 lg:order-2">
                        <h3 className="font-cursive text-3xl text-[#D4AF37] italic mb-6">
                            Your Celebration, Our Passion
                        </h3>
                        <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
                            No other party planning company can match the quality and dedication of our
                            fantastic team. With three years of experience and a passion for creating unforgettable
                            celebrations, our party planners will make your special occasion truly stand out.
                        </p>
                        <p className="font-sans text-lg leading-relaxed text-gray-700 mb-6">
                            Whether it's transforming your home, a garden, a banquet hall, or an outdoor venue, our designers
                            will craft a unique atmosphere for your celebration.
                        </p>
                        <div className="bg-white border-l-4 border-[#D4AF37] p-6 shadow-md rounded">
                            <h4 className="font-serif text-xl font-semibold text-[#2C1810] mb-3">
                                We Offer:
                            </h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4AF37] mt-1">✓</span>
                                    <span>Themed decorations tailored to your vision</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4AF37] mt-1">✓</span>
                                    <span>Creative balloon arrangements and styling</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4AF37] mt-1">✓</span>
                                    <span>Professional catering coordination</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4AF37] mt-1">✓</span>
                                    <span>Entertainment management and activities</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#D4AF37] mt-1">✓</span>
                                    <span>Photography to capture every precious moment</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;