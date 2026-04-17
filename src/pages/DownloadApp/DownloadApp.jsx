import React, { useEffect } from 'react';

const DownloadApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 mb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden px-8 py-16 md:py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="z-10">
                        <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Mobile Experience</span>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6">
                            One click away <span className="text-primary">coffee!</span>
                        </h1>
                        <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
                            Experience the art of roasting from the palm of your hand. Exclusive rewards, seamless ordering, and the Zeger lifestyle delivered to your doorstep.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a className="hover:scale-105 transition-transform duration-300" href="#">
                                <img alt="App Store" className="h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4FUW3n415lVTMr2NuZlxXTkihSQraRWck0TurBkBi2f7VaSsl9_LmMp_DqdPPFshDrncvEpWCQQCw-QzfQdFk7d21spRABdhpJm5sySZ95eYJblPVjQEAQbSDxSCuXyx9y5mC_wgoCuD1wKT852hvoYJkSWz2FaUPVKYmSfET-gIBqTXyZrnADpGuUKNZBLkgvPCxdJLRto400KcmLYWhdIKtShgEquyAELR4pWwpl_CvYI3KQtDEHBBg5B2CeVUR6VyAQuKKEd8" />
                            </a>
                            <a className="hover:scale-105 transition-transform duration-300" href="#">
                                <img alt="Google Play" className="h-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFSN7C9vXRWkw1QIlw3TfaWvIMCh0ullol1sKWm1cZCcOtscgMM52j1r-GN0V-EswhlTrCN95V_1oIbPp0XROGI7vauviKXkCnuNt2NLbvphbyv9STWayavxhjHneAjQzbTTjvFlHUHW5j789q5MMGHXUtL4j_dZ0sYbTT06YqCOF1iqWU_pX4pizyAm_tEyfbDIfVIvIOOJadJog5vsRLWT36_Yh_zOvGavZi1RJW224VbLX6bjhyknAOTEHtDclqZkRdsMATKSk" />
                            </a>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        {/* Geometric Background Elements */}
                        <div className="absolute w-[120%] h-[120%] bg-surface-container-low rounded-full -z-10 blur-3xl opacity-50"></div>
                        <div className="relative w-full max-w-[320px] md:max-w-[400px]">
                            <img alt="Zeger App Mockup" className="w-full h-auto drop-shadow-2xl relative z-20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWMEABOCy0LTYxSdWtr7yQUPHdsHpbhE_BcVb8vEPveF-sc7BKEjo6d-bwIgudVFJYi4z0mCbkjCjSRB2g8lpU32oD_g47G3awmFQDWUGz_WYiDGh8dtb5Q0i4WsDjc-bfX8tnY9WgfMPVcw7b1WwJQvGt3h84ElhXn7u0V9N_xJT7G9hVXDgyC0G3uyxrGPgAGuY8iUgNA_XCyus_3-jVhoxLrHO5eddNDTW8o_Am4Ym2HI1G7R52GOxobLU7z3gexCZhG9NaMi4" />
                            {/* Floating Accent Card */}
                            <div className="absolute -right-8 top-1/4 bg-surface-container-lowest p-4 rounded-xl shadow-xl z-30 hidden lg:block border border-outline-variant/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-on-surface">Member Priority</p>
                                        <p className="text-[10px] text-on-surface-variant">Skip the queue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What's New Section (Bento Inspired) */}
            <section className="bg-surface-container-low py-20 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface mb-2">What's new</h2>
                            <p className="text-on-surface-variant font-medium">The latest updates to your digital brewing experience.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Large Feature Card */}
                        <div className="md:col-span-2 bg-surface-container-lowest rounded-[2rem] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img alt="New Feature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ4rwlOFvI44-vNn9S4VgSRLGiNdrMSTi7VMEpcnspMp8vqbEkEVUqsdzcVJUA3YPLl6PKARSe8uyOmIHqmrymQ6-z1QTgTEgdrfp37anLSaY4GzC2P-nbkJGlljho7sMu9rhAnXfxAr9VBv8Ox9d-npkpmtxdkS9gs_8zw6ORvYyItmBC23kj3WjGQCCvmDFpaJQG9pmAsEmPCEy_VPRFINH7gD4JvKhfn-s6JeYi3EGJoIfA0ROD9UUZMFeXAjICQb3n6m7e5hI" />
                            <div className="absolute bottom-0 left-0 p-8 z-20">
                                <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">New Version 2.4</span>
                                <h3 className="text-3xl font-bold text-white mb-2">Brew Timer Pro</h3>
                                <p className="text-white/80 max-w-sm">Master your home brew with our new haptic precision timer and bean-specific temperature guides.</p>
                            </div>
                        </div>
                        {/* Small Feature Cards Stacked */}
                        <div className="flex flex-col gap-6">
                            <div className="bg-surface-container-highest p-8 rounded-[2rem] h-full flex flex-col justify-between">
                                <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>wallet</span>
                                <div>
                                    <h3 className="text-xl font-bold text-on-surface mb-2">One-Tap Pay</h3>
                                    <p className="text-sm text-on-surface-variant">Apple Pay and Google Pay integration for lightning fast checkouts.</p>
                                </div>
                            </div>
                            <div className="bg-primary-container p-8 rounded-[2rem] h-full flex flex-col justify-between text-on-primary-container">
                                <span className="material-symbols-outlined text-on-primary-container text-4xl">eco</span>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Green Points</h3>
                                    <p className="text-sm opacity-90">Bring your own tumbler and track your carbon footprint reduction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promos Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-on-surface mb-4">Member Exclusives</h2>
                    <div className="h-1 w-20 bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Promo 1 */}
                    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Morning Brew Promo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbU7ZU1nzwQ1YCBpevxmFafClRhz-xV3k0Ui-IuQROMstT8rI4_CmRzhykg2zp6m0SQR2hS1yAq5YmI2DwfnawlOL4dZIF8fqSWqB6VpvbOP0YIO1-ibnVx2sD-7JueztRSDhadrlNyTs37cF7q6JgSJk6CyTDIlc_2_o-jKRgD34BgRXFkfHUuxW8CbpoK8AN9PZ3je2QRKV9zOHKPWtwRV3uJsVD2nVESdTskHpud0l5snlJUkeB2E2rRfifzfiYFj-KsbtuHVo" />
                            <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                                BOGO
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-on-surface mb-2">Morning Rituals</h4>
                            <p className="text-on-surface-variant text-sm mb-6">Buy one, get one free on all signature lattes before 10 AM. Exclusive to app users.</p>
                            <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                Claim Offer <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    {/* Promo 2 */}
                    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="New Roast Promo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNV9qO9SUxIH7b3ezzhn55ebaFZDyOHQ2MXpTsH6-NWK2KJGEsfeU1txac2H4I1661dvy4ok7z3fLkmwnXikoZJ9rHWE2tUcs1F-eJpcCBQJA88rnPBL3Sa3PCGSYYC_6WMsrH2qjApTPBnzG9qS0Zd7tnDFz4m7Gt9rnhk2cG2fkqGa078wc72WrJyBpH6ueSomCqAa5DyOkzwZ2b5qva1tdoswm8a3BY9R64nrSv-uQZwKru4679mbnlEZP9-lhrw3432AopDv8" />
                            <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                                20% OFF
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-on-surface mb-2">Artisan Bean Launch</h4>
                            <p className="text-on-surface-variant text-sm mb-6">Enjoy 20% off your first bag of our seasonal Ethiopian Guji roast. Freshly roasted daily.</p>
                            <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                Claim Offer <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    {/* Promo 3 */}
                    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
                        <div className="relative h-64 overflow-hidden">
                            <img alt="Pastry Promo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0ZMl1CaxlvAMqH3RNK1eppC9JhewjXDa_22xQZ-gHol5ZQ47WI4Vto7NzGpXDPXFc4pCNT_48kYfPS5OPLrf_MigbFw8BCf5AhhfT9p5P0gue1Skv2I_5bGuAvoyVD-h5TKQfY7vupKj5mwdbgPsH9PMC01QhhhJVxTQNXAW9Ps9O48aUkNfB2_SNGF-ZxQ0LYFbOrV2SsqL-kaNRQ17KllvuVLMVECrcDCZ4tbjN7zXSBINKiUBjCtiFRMQCuPxAwxYUaKpb2KU" />
                            <div className="absolute top-4 right-4 bg-primary text-on-primary px-4 py-1 rounded-full font-bold text-sm shadow-lg">
                                FREE
                            </div>
                        </div>
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-on-surface mb-2">Sweet Pairings</h4>
                            <p className="text-on-surface-variant text-sm mb-6">Get a free butter croissant with any large cold brew purchase every Friday this month.</p>
                            <button className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                Claim Offer <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA (Editorial Style) */}
            <section className="mb-24 px-8 max-w-7xl mx-auto">
                <div className="primary-gradient rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black text-on-primary tracking-tighter mb-6">Join the Zeger Journal</h2>
                        <p className="text-on-primary/80 max-w-xl mx-auto mb-10 text-lg">Weekly roasting insights, brewing tips, and early access to limited edition beans.</p>
                        <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                            <input className="flex-1 bg-white/20 border-none rounded-full px-6 py-4 outline-none text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50" placeholder="your@email.com" type="email" />
                            <button className="bg-white text-primary font-black px-8 py-4 rounded-full hover:bg-opacity-90 transition-all uppercase tracking-widest text-sm">Subscribe</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DownloadApp;
