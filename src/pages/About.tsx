import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <main className="mt-24 min-h-screen bg-cream">
                <div className="max-w-7xl mx-auto px-8 py-20">
                    <h1 className="font-serif text-6xl font-semibold text-primary mb-8 tracking-wide">
                        ABOUT US
                    </h1>
                    <div className="w-32 h-1 bg-primary-gold mb-12"></div>

                    <div className="space-y-6 text-primary/80 font-sans text-lg leading-relaxed">
                        <p>
                            Welcome to Infinity Hospitality, where we transform ordinary events into extraordinary experiences.
                            For the past six years, we have been at the forefront of event planning and management, bringing
                            creativity, dedication, and precision to every occasion.
                        </p>

                        <p>
                            Our team of experienced professionals specializes in corporate events, product launches, business
                            anniversaries, and company picnics. We understand that each event is unique, and we work closely
                            with our clients to create memorable experiences tailored to their specific needs.
                        </p>

                        <h2 className="font-serif text-3xl font-semibold text-primary mt-12 mb-6">
                            Our Mission
                        </h2>

                        <p>
                            To provide unparalleled event planning services that exceed expectations and create lasting memories.
                            We strive to deliver excellence in every detail, from concept to execution.
                        </p>

                        <h2 className="font-serif text-3xl font-semibold text-primary mt-12 mb-6">
                            Why Choose Infinity Hospitality?
                        </h2>

                        <ul className="space-y-4 ml-6">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-gold mt-1">•</span>
                                <span>Six years of proven expertise in event planning and management</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-gold mt-1">•</span>
                                <span>Comprehensive range of services from concept to completion</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-gold mt-1">•</span>
                                <span>Creative designers who craft unique atmospheres</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-gold mt-1">•</span>
                                <span>State-of-the-art technology and equipment</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-gold mt-1">•</span>
                                <span>Dedicated team committed to making your event unforgettable</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;