const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-24">
            {/* Background Image - Using high-quality party image */}
            <div 
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80')",
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative text-center text-white z-20 px-8 max-w-5xl">
                <p className="font-cursive text-3xl md:text-4xl font-normal italic mb-6 tracking-wide animate-fadeInDown drop-shadow-lg">
                    Since 2022
                </p>
                <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-wider mb-4 animate-fadeInUp drop-shadow-lg">
                    Welcome to
                </h1>
                <h1 className="font-serif text-6xl md:text-8xl font-bold tracking-wider mb-6 text-[#D4AF37] animate-fadeInUp drop-shadow-2xl">
                    Amazing Party House
                </h1>
                <div className="w-32 h-0.5 bg-white mx-auto mb-4 animate-expandWidth"></div>
                <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                    Creating Unforgettable Memories for Every Celebration
                </p>
            </div>
        </section>
    );
};

export default Hero;
