import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
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
