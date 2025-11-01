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
                    src="/logo.png"
                    alt="Amazing Party House"
                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mb-8 md:mb-10 drop-shadow-[0_4px_20px_rgba(212,175,55,0.5)] animate-fadeInDown"
                    loading="eager"
                    decoding="async"
                />

                {/* Premium Content */}
                <div className="space-y-4 md:space-y-5">
                    <p className="font-serif text-xs sm:text-sm md:text-base font-light italic tracking-[0.3em] uppercase text-white/90 animate-fadeInDown drop-shadow-lg">
                        Celebrating Three Years Of Excellence
                    </p>
                    <h1 className="font-serif text-sm sm:text-base md:text-xl lg:text-2xl font-extralight tracking-[0.35em] leading-tight mb-3 animate-fadeInUp drop-shadow-2xl uppercase">
                        Discover the Art of
                    </h1>
                    <h2 className="font-serif text-lg sm:text-xl md:text-3xl lg:text-4xl font-light tracking-[0.3em] text-[#D4AF37] [text-shadow:0_0_20px_rgba(212,175,55,0.4)] animate-fadeInUp uppercase">
                        Presentation
                    </h2>
                    <div className="h-px w-32 sm:w-40 md:w-48 mx-auto my-4 md:my-5 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
                    <p className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.25em] uppercase text-white/80 max-w-3xl mx-auto drop-shadow-md animate-fadeInUp">
                        The Finest Events in United States
                    </p>
                </div>
            </div>

            {/* CSS for zoom out animation */}
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
            `}</style>
        </section>
    );
};

export default Hero;
