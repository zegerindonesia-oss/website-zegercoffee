import React, { useEffect } from 'react';

const ContactUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="relative overflow-hidden mb-24">
            {/* Background Editorial Orbs */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-8 pt-20 pb-12">
                <div className="flex flex-col md:flex-row gap-12 items-end">
                    <div className="flex-1">
                        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Get In Touch</span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-on-surface">
                            LET'S BREW<br /><span className="text-primary">SOMETHING</span> GREAT.
                        </h1>
                    </div>
                    <div className="hidden md:block w-1/3 pb-2">
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            Whether you're curious about our beans, need wholesale information, or just want to talk coffee—we're all ears.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Grid */}
            <section className="max-w-7xl mx-auto px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Contact Info Cards (Editorial Layout) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="group bg-surface-container-lowest p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px] border border-outline-variant/10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full translate-x-8 -translate-y-8 transition-transform group-hover:scale-150 duration-700"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-on-surface-variant mb-4">Our support team is here to help with any inquiries.</p>
                                <a className="text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4" href="mailto:hello@zegercoffee.com">hello@zegercoffee.com</a>
                            </div>
                        </div>

                        <div className="group bg-surface-container-low p-8 rounded-3xl relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                                <p className="text-on-surface-variant mb-4">Mon-Fri from 8am to 5pm (PST).</p>
                                <a className="text-primary font-bold text-lg hover:underline decoration-2 underline-offset-4" href="tel:+1234567890">+1 (555) ZEGER-CO</a>
                            </div>
                        </div>

                        <div className="group bg-primary p-8 rounded-3xl relative overflow-hidden text-white transition-all duration-500 hover:translate-y-[-4px]">
                            <div className="absolute bottom-0 left-0 w-full h-full primary-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined text-white">location_on</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Visit Our Roastery</h3>
                                <p className="text-white/80 mb-4">Experience the craft firsthand at our flagship location.</p>
                                <address className="not-italic font-bold text-lg">
                                    742 Artisan Way,<br />Seattle, WA 98101
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form (Glassmorphism inspired) */}
                    <div className="lg:col-span-7">
                        <div className="bg-surface-container-low/50 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-outline-variant/10">
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Full Name</label>
                                        <input className="w-full bg-white/60 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="John Doe" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email Address</label>
                                        <input className="w-full bg-white/60 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="john@example.com" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Subject</label>
                                    <select className="w-full bg-white/60 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 appearance-none transition-all">
                                        <option>General Inquiry</option>
                                        <option>Wholesale Partnership</option>
                                        <option>Event Booking</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                                    <textarea className="w-full bg-white/60 border-none rounded-3xl px-6 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" placeholder="Tell us what's on your mind..." rows={5}></textarea>
                                </div>
                                <button className="w-full primary-gradient text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all transform active:scale-[0.98]" type="button">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof/Editorial Image Section */}
            <section className="max-w-7xl mx-auto px-8">
                <div className="relative h-[400px] rounded-[3rem] overflow-hidden group">
                    <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="luxury modern coffee shop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3ind4zzIyNA9c5IiXVm0SjvenUVfzS4ZE0v86CSf156mYDywCXTSDemCUTJ-0-OFpUM4jf_G5Bo4c80TIE7KH6GwjX4q4x4Sbjqs0-GKnhiY4ZTQydQNyitL9n3KZH1xkkuofbBICsDwF33ZSlzjUj_Q6st11ZVWFq6XdUiZ-oV22M0luYGmUKzWF4ByIdxm1h7v0Q0kJU0ohcJrpkz5MzfyBWcrjESKkWiHqHrzQiorv6oiATqVMxowisWhAqtsjLWYqPbsiTZQ" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-lg">
                            <h2 className="text-4xl font-black text-white leading-none mb-2">FIND US IN THE WILD.</h2>
                            <p className="text-white/90 font-medium">Over 20 locations across the West Coast, each with its own unique architectural soul.</p>
                        </div>
                        <button className="bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-stone-100 transition-colors">
                            View Map
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUs;
