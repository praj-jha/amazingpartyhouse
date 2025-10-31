import { Link } from 'react-router-dom';
import { FiPhone, FiEdit3 } from 'react-icons/fi';

const Advantages = () => {
    const phoneDisplay = '+1 407921-6454';
    const phoneHref = '+18001234567'; // TODO: replace with real business number

    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <span className="inline-block text-xs tracking-widest text-[#2C1810] bg-[#D4AF37]/15 border border-[#D4AF37]/40 rounded-full px-3 py-1 mb-3">
                        FEATURED EVENT
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2C1810] font-semibold tracking-tight">
                        Ignite The Night - #1
                    </h2>
                    <p className="mt-1 text-sm text-[#6B5D4F]">Whiskey & Cigar Night</p>
                </div>

                {/* Two-column layout: left text, right image - balanced columns on large screens */}
                <div className="bg-white rounded-2xl border border-[#E8E1D7] shadow-[0_10px_30px_rgba(0,0,0,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-5 min-h-[500px] lg:min-h-[600px]">
                    {/* Left: details - takes 2 parts of 5 */}
                    <div className="lg:col-span-2 p-6 sm:p-8 order-2 lg:order-1 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#2C1810] text-white px-4 py-2 text-xs font-semibold">
                                Price: $150 - $200
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37] text-[#2C1810] px-4 py-2 text-xs font-semibold">
                                Limited Seats
                            </span>
                        </div>

                        <div className="space-y-3 text-[#3A2A22]">
                            <p className="font-sans text-base sm:text-lg leading-relaxed">
                                Get Ready to Light Up the Night with APH's First "IGNITE THE NIGHT" Event - It's going to be a BLAST! Limited Space - Event Will be SOLD OUT
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                                <div><span className="font-semibold">Venue:</span> Masala Mantra</div>
                                <div><span className="font-semibold">Date:</span> 12/06/2025 (Saturday Night)</div>
                                <div><span className="font-semibold">Time:</span> 8:30 PM Onwards</div>
                                <div><span className="font-semibold">Open:</span> Men's 21+ Only</div>
                                <div><span className="font-semibold">Theme:</span> Whiskey & Cigar</div>
                                <div><span className="font-semibold">Attire:</span> Smart Casual</div>
                                <div className="sm:col-span-2"><span className="font-semibold">Tickets:</span> $150 (Balance 50 Available)</div>
                                <div className="sm:col-span-2"><span className="font-semibold">VIP Tickets:</span> $200 (Only 25 Reserved Area & More)</div>
                                <div className="sm:col-span-2"><span className="font-semibold">Includes:</span> Whiskey, Cigar, Signature Drinks, DJ, Special Buffet, Hookah Station, and Surprise Entertainment</div>
                            </div>

                            <p className="text-xs text-[#6B5D4F] mt-2">Celebrate Responsibly — Do Not Drink and Drive</p>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href={`tel:${phoneHref}`}
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37] text-[#2C1810] px-5 py-3 text-sm font-semibold hover:bg-[#D4AF37] hover:text-white transition-colors"
                            >
                                <FiPhone /> Call {phoneDisplay}
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C1810] text-white px-5 py-3 text-sm font-semibold hover:bg-[#3b2418] transition-colors"
                            >
                                <FiEdit3 /> Register Now
                            </Link>
                        </div>
                    </div>

                    {/* Right: image - takes 3 parts of 5 for larger display */}
                    <div className="lg:col-span-3 order-1 lg:order-2 bg-[#F5F0E6]">
                        <div className="aspect-4/3 lg:aspect-auto lg:h-full w-full">
                            <img
                                src="/cigar.jpeg"
                                alt="Ignite The Night whiskey and cigar event"
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
