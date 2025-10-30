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
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Gallery;