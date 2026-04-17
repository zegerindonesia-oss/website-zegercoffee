import React, { useEffect } from 'react';

const Collaboration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 pb-20">
            {/* Hero Section */}
            <section className="px-8 max-w-7xl mx-auto mt-12 mb-24">
                <div className="relative overflow-hidden rounded-[2rem] h-[600px] flex items-end p-12">
                    <img className="absolute inset-0 w-full h-full object-cover" alt="coffee bar setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnZlB7uf83IOHrL0JOZFKuQJhIyjnHdVJAkuO02dWNK0J3Kz2TrT_79ZiIcTgkxIsVY3VRadhlpUEqWj6WK-VuonkgwupcCTIsx_ibd5JmhIVTRI5x3L7owR8w_itO5QM4wwh5pxRFY-xlsf5DOipE1K1igkuUFBab5Rl9WRq1r8U7awZlYuaQWxLR9ojQeSszvVzeUTpS56JOodD94BCqKgkVUYP9hOGJdUOHwfwULhRB-DrolO24-dmGxbooOSmbyeYOSD7scm0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent"></div>
                    <div className="relative z-10 max-w-2xl">
                        <span className="inline-block text-on-primary font-label text-[0.75rem] uppercase tracking-[0.1em] mb-4 bg-primary-container px-4 py-1 rounded-full">Editorial Issue No. 04</span>
                        <h1 className="text-on-primary font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                            Zeger Collaboration
                        </h1>
                        <p className="text-on-primary/80 text-xl max-w-lg leading-relaxed">
                            Where artisanal roasting meets creative vision. Exploring the intersection of craft, culture, and community through curated partnerships.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Partnerships */}
            <section className="px-8 max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
                    <div className="md:col-span-8 bg-surface-container-low rounded-[2rem] relative overflow-hidden group border border-outline-variant/10">
                        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="minimalist architectural studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3c5Vmn8s0mqZi8KM4NZcLhp2zAb6R5Cu6RXFXPNqCkwp50jz-QGAmvmMuOWEYdZ1b18i1mfxNrRQ4KWlSMk-rfdSYpOKVXtr0I3UuLBxBnJIqBCGnZPUu1FaA4sVb8qz7ZBlYT6mOlQz-tI3jPMmu8o75X0KUm4vPqu_3AU9QoWkEVZtwmD-k-nUIzbCTpRwXfOnAvR874N4prSDLkx_TINgkhV_VHyP08M_Qy4YLRRfztM1SmWQHCjT5-khRSOY1OEoPoc-izBE" />
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        <div className="absolute bottom-8 left-8 right-8 p-8 bg-surface/90 backdrop-blur-md rounded-2xl">
                            <h3 className="text-2xl font-bold mb-2">Design Collective x Zeger</h3>
                            <p className="text-on-surface-variant mb-4">A limited-edition series of ceramic vessels designed for the ultimate tactile brewing experience.</p>
                            <span className="text-primary font-bold inline-flex items-center gap-2 cursor-pointer group/link">
                                View Collaboration <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </span>
                        </div>
                    </div>
                    <div className="md:col-span-4 grid grid-rows-2 gap-6">
                        <div className="bg-primary-container rounded-[2rem] p-10 flex flex-col justify-between text-on-primary primary-gradient">
                            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Sustainable Roots</h3>
                                <p className="opacity-80">Our ongoing partnership with local farm cooperatives ensuring ethical sourcing and fair trade practices.</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-highest rounded-[2rem] relative overflow-hidden group">
                            <img className="absolute inset-0 w-full h-full object-cover opacity-60" alt="pouring milk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnySsLhappU2pDNaANnM2QvAk8SlXAROe72A8_8ugThyYuiCep1f5u-Q8gOAwL2EIqc3wNSF15iHOL3RgIy_8lX0jKHB02xFg7rFxuDUytfGg_yRXvlL6DayZ7VWZaZ7Hdq6kmB3WfjO9ll7-G6PpI9ijhLrTWA4QFulAu3S8akqr_jfkZXzm8mKCzx-mGSw2peY9gLF2bOLJknHTwSVBRf90TNsAx5BeWKLjABioKpa4j0zCBsUvmz0kWpS0sKte-csB-HOfpC7Q" />
                            <div className="relative p-10 h-full flex flex-col justify-end">
                                <h3 className="text-2xl font-bold mb-2 text-on-surface">The Roaster Series</h3>
                                <p className="text-on-surface-variant">Monthly takeovers from guest roasters worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials: What They Say About */}
            <section className="bg-surface-container-low py-32 rounded-3xl mx-8">
                <div className="px-8 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Voice of the Partner</h2>
                        <h3 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight">What They Say About</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/10">
                            <div className="flex gap-1 mb-6 text-primary">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="text-lg leading-relaxed italic text-on-surface-variant mb-8">
                                "Collaborating with Zeger isn't just about coffee; it's about a shared aesthetic. Their commitment to the finer details matches our studio's ethos perfectly."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOkQnKS-1BaztulogOeTOUFWRWds7-3KYIDc5SePqiBOFdAJsUVVKVVtJ_uA35xTwQcdadMarGI18dLqtpI_yCyH2mK4d5F81PiJYqfxXk7XmbTP9u4cbC7FMN38cvOUnib2zXRHHlEOVG9pv-GBtI-70jP2f20Ftbx548U1CW5A_5sB5uYUAnA-zxmDRdYS0GIwE3CsOEt_a54xXfJEQRnnECRCOPyZT8lWDw71cjVZDwGxjSG0B3lfaE1sz2kzVQIf3mFK8eMq8" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Marcus Arlow</h4>
                                    <p className="text-[0.7rem] text-on-surface-variant uppercase tracking-tighter">Creative Director, Arlow Studio</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/10">
                            <div className="flex gap-1 mb-6 text-primary">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="text-lg leading-relaxed italic text-on-surface-variant mb-8">
                                "Zeger has transformed our lobby experience. The curated blend they developed exclusively for our hotel guests is frequently cited in our guest reviews."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLE4qkrrglN8z9qhFAWyk-W_CGckEWDTWfkgyUsUGwD23B8WNL_N9F2_FLR9YWsLUusfvMrajxJ6lESJYQRVeGLkkbsKIpuVR5tdjUZLDAcL04RBGFBSmg44twmf4N6XBARxqjNnlcYaW-00BDeAJ07wbcFPbfYeZuktCAqK8F1MQSsRhUi5E2FYq1_s4rfiiSqJrYYahMIwByISLb_dAcLPt37RjwyAtj-i-cvESfg8k7kMEX4h1LsxKNd9Ll1nnjtPWZ9cu38Fk" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Sienna Vance</h4>
                                    <p className="text-[0.7rem] text-on-surface-variant uppercase tracking-tighter">Director of Hospitality, L'Ermitage</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-10 rounded-3xl shadow-sm border border-outline-variant/10">
                            <div className="flex gap-1 mb-6 text-primary">
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <p className="text-lg leading-relaxed italic text-on-surface-variant mb-8">
                                "We chose Zeger for their transparency. Every bean can be traced, and every cup tells the story of the farmer. Our values are perfectly aligned."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArk57HAr3XwLeCJZIYRV4uY9uyxJIf5OfkoTOScqC-bBdEcPAHzU9xPl0-ZVKoVEPtdhrvzk4-lAwleEYrNm8lTe2eUmnvxj9ntldSQZlpjBRD0GcsjNGmCZD8NhrJuyAjGZJ12_c6A8g_OZm_svFpar2U-Q8J3ajy1BqL9WC5vJxfmC0c3D0HX1psjt7z-TQ6q23ZjvbaRoR8MG4SuknDkSPd_0juPnaE7Gho-pFZjDaFfMfeuNLiEl3Q1ajY5wPSDHbxL_V4kWQ" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm">Julian Peters</h4>
                                    <p className="text-[0.7rem] text-on-surface-variant uppercase tracking-tighter">Founder, Earth First Co-op</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Become a Partner Section */}
            <section className="py-32 px-8">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h2 className="text-5xl font-headline font-extrabold tracking-tighter mb-6 leading-tight">Become a Partner</h2>
                        <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                            Interested in bringing the Zeger experience to your brand, space, or event? We’re always looking for like-minded collaborators who value quality, design, and community.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-on-surface">Custom Roast Profiles</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-on-surface">Creative Marketing Support</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                <span className="font-medium text-on-surface">Staff Training & Equipment Access</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <form className="bg-surface-container rounded-[2rem] p-8 md:p-12 space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant">Full Name</label>
                                    <input className="bg-transparent border-0 border-b border-outline-variant/30 px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40" placeholder="John Doe" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant">Email</label>
                                    <input className="bg-transparent border-0 border-b border-outline-variant/30 px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40" placeholder="john@example.com" type="email" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant">Company / Project Name</label>
                                <input className="bg-transparent border-0 border-b border-outline-variant/30 px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40" placeholder="Enter company name" type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[0.65rem] uppercase tracking-widest font-bold text-on-surface-variant">Message</label>
                                <textarea className="bg-transparent border-0 border-b border-outline-variant/30 px-0 py-2 focus:ring-0 focus:border-primary transition-colors placeholder:text-on-surface-variant/40 resize-none outline-none" placeholder="Tell us about your vision..." rows={4}></textarea>
                            </div>
                            <button className="w-full primary-gradient text-on-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]" type="button">
                                Send Partnership Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Collaboration;
