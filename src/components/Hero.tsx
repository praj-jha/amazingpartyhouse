const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
            {/* Image Background with Zoom Out Animation */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/pic1.webp"
                    alt="Hero Background"
                    className="w-full h-full object-cover animate-zoomOut"
                    loading="eager"
                    decoding="async"
                />
            </div>

            {/* Overlays */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            {/* Subtle radial vignette for premium feel */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

            {/* Content */}
            <div className="relative z-20 px-6 md:px-8 w-full max-w-6xl flex flex-col items-center text-center text-white">
                {/* Logo above text */}
                <img
                    src="/aphl.png"
                    alt="Amazing Party House"
                    className="h-32 sm:h-40 md:h-40 lg:h-52 w-auto drop-shadow-[0_4px_20px_rgba(212,175,55,0.5)] animate-fadeInDown"
                    loading="eager"
                    decoding="async"
                />

                {/* Premium Content */}
                <div className="space-y-4 md:space-y-5">
                    <p className="font-serif text-xs sm:text-sm md:text-base font-light italic tracking-[0.3em] uppercase text-white/90 animate-fadeInDown drop-shadow-lg">
                        Florida's Premier Party & Wedding Planners - 3+ Years Excellence
                    </p>
                    <h1 className="font-serif text-sm sm:text-base md:text-xl lg:text-2xl font-extralight tracking-[0.35em] leading-tight mb-3 animate-fadeInUp drop-shadow-2xl uppercase">
                        Expert Event Planning Across Florida
                    </h1>
                    <h2 className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] text-[#D4AF37] [text-shadow:0_0_20px_rgba(212,175,55,0.4)] animate-fadeInUp uppercase">
                        Unforgettable Celebrations
                    </h2>
                    <div className="h-px w-32 sm:w-40 md:w-48 mx-auto my-4 md:my-5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
                    <p className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.25em] uppercase text-white/80 max-w-3xl mx-auto drop-shadow-md animate-fadeInUp">
                        Corporate Events • Beach Weddings • Birthday Parties • All Celebrations
                    </p>

                    {/* CTA Button */}
                    <div className="mt-8 md:mt-10 animate-fadeInUp">
                        <a
                            href="https://calendar.app.google/3GTWW3UurwXyiyeo7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] bg-[length:200%_100%] animate-shimmer"></div>
                            <div className="relative px-8 py-4 md:px-10 md:py-5 bg-[#D4AF37] border-2 border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-transparent">
                                <span className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-[#2C1810] font-semibold group-hover:text-white transition-colors duration-300">
                                    Schedule a Call
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* CSS for animations */}
            <style>{`
                @keyframes zoomOut {
                    0% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }
                .animate-zoomOut {
                    animation: zoomOut 20s ease-out infinite alternate;
                }
                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
                .animate-shimmer {
                    animation: shimmer 3s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default Hero;
