import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Home = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EventPlanning",
        "name": "Amazing Party House",
        "description": "Premier party planning and wedding organizing company in Florida, USA. Specializing in corporate events, beach weddings, birthday parties, corporate events, and all types of celebrations.",
        "url": "https://amazingpartyhouse.com",
        "telephone": "+1-407-921-6454",
        "email": "hello@amazingpartyhouse.com",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "FL",
            "addressCountry": "US"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "450"
        },
        "priceRange": "$$"
    };

    return (
        <div>
            <SEO
                title="Home - Party Planners & Wedding Organizers Florida"
                description="Amazing Party House - Florida's #1 party planning & wedding organizing company. Expert corporate event planners, beach wedding specialists, birthday party organizers. Serving Miami, Orlando, Tampa & all Florida. 3+ years excellence. Book your dream event today!"
                keywords="party planners florida, wedding organizers florida usa, event planning companies florida, corporate event planners florida, beach wedding planners florida, birthday party organizers florida, party organizing companies florida, destination wedding planners florida, celebration planners, event coordinators florida, professional party planners, luxury wedding planners florida, affordable event planning florida, best party planners florida, top wedding organizers florida"
                canonicalUrl="https://amazingpartyhouse.com/"
                schema={schema}
            />
            <Navbar />
            <Hero />
            <Advantages />
            <WhyChooseUs />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;
