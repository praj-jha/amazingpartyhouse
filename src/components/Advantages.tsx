const Advantages = () => {
    const eventTypes = [
        { line1: 'BIRTHDAY', line2: 'PARTIES' },
        { line1: 'KIDS', line2: 'EVENTS' },
        { line1: 'MILESTONE', line2: 'CELEBRATIONS' },
        { line1: 'KITTY', line2: 'PARTIES' },
        { line1: 'MEN\'S', line2: 'PARTIES' },
        { line1: 'ADVENTURE', line2: 'ACTIVITIES' }
    ];

    return (
        <section className="bg-gradient-to-br from-[#8B7355] to-[#6B5D4F] py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="font-cursive text-4xl md:text-5xl text-[#D4AF37] italic mb-4">
                        Our Specialties
                    </h3>
                    <h2 className="font-serif text-3xl md:text-4xl text-white font-normal tracking-wider mb-2">
                        WE EXCEL IN ALL TYPES OF
                    </h2>
                    <h2 className="font-serif text-3xl md:text-4xl text-white font-normal tracking-wider">
                        CELEBRATIONS, WE SPECIALIZE IN:
                    </h2>
                    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                    {eventTypes.map((event, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border-2 border-[#D4AF37] rounded-2xl px-6 py-12 text-center hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300 cursor-pointer group"
                        >
                            <p className="font-serif text-xl text-white font-medium tracking-wide group-hover:text-[#2C1810]">
                                {event.line1}
                            </p>
                            <p className="font-serif text-xl text-white font-medium tracking-wide group-hover:text-[#2C1810]">
                                {event.line2}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
