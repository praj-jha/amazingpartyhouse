const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-24">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src="https://res.cloudinary.com/dgo3wykbm/video/upload/v1761831474/aph_vugajs.mp4" type="video/mp4" />
            </video>

            {/* Overlays */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
            {/* Subtle radial vignette for premium feel */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

            {/* Content */}
            <div className="relative z-20 px-6 md:px-8 w-full max-w-5xl flex flex-col items-center text-center text-white -translate-y-6 sm:-translate-y-8 md:-translate-y-10 lg:-translate-y-12">
                {/* Logo above text */}
                <img
                    src="/logo.png"
                    alt="Amazing Party House"
                    className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto mb-5 md:mb-6 drop-shadow-[0_4px_18px_rgba(212,175,55,0.45)]"
                    loading="eager"
                    decoding="async"
                />

                {/* Glassmorphism card for premium look */}
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl px-5 py-6 sm:px-7 sm:py-7 md:px-10 md:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
                    <p className="font-cursive text-xl sm:text-2xl md:text-3xl font-normal italic mb-4 md:mb-6 tracking-wide animate-fadeInDown drop-shadow-lg">
                        Celebrating Three Years Of Excellence In Party Planning
                    </p>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-3 md:mb-4 animate-fadeInUp drop-shadow-lg whitespace-nowrap">
                        Big or Small, <span className="text-[#D4AF37] [text-shadow:0_0_14px_rgba(212,175,55,0.35)]">We Do it All</span>
                    </h1>
                    <div className="h-px w-44 sm:w-56 md:w-64 mx-auto my-3 md:my-4 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"></div>
                    <p className="font-sans text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        Creating Unforgettable Memories for Every Celebration
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
