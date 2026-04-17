import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Store = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-[1600px] mx-auto px-4 md:px-8 py-8 min-h-[600px]">
            <div className="flex flex-col md:flex-row h-full gap-8">
                {/* Store List Section (Left) */}
                <section className="w-full md:w-[450px] flex flex-col h-full">
                    <div className="mb-8">
                        <h1 className="text-4xl font-black tracking-tight mb-2 text-on-surface">Our Locations</h1>
                        <p className="text-tertiary-container font-medium">Find a Zeger Coffee spot near you.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar pb-2">
                        <button className="px-5 py-2 bg-secondary-container text-on-secondary-container rounded-3xl text-sm font-bold whitespace-nowrap">All Stores</button>
                        <button className="px-5 py-2 bg-surface-container-highest text-on-surface rounded-3xl text-sm font-semibold whitespace-nowrap hover:bg-surface-container-high transition-colors">Jakarta</button>
                        <button className="px-5 py-2 bg-surface-container-highest text-on-surface rounded-3xl text-sm font-semibold whitespace-nowrap hover:bg-surface-container-high transition-colors">Bandung</button>
                        <button className="px-5 py-2 bg-surface-container-highest text-on-surface rounded-3xl text-sm font-semibold whitespace-nowrap hover:bg-surface-container-high transition-colors">Surabaya</button>
                        <button className="px-5 py-2 bg-surface-container-highest text-on-surface rounded-3xl text-sm font-semibold whitespace-nowrap hover:bg-surface-container-high transition-colors">Bali</button>
                    </div>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto pr-4 space-y-4 no-scrollbar" style={{ maxHeight: '600px' }}>
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-40"></div>
                            <div className="relative bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-primary/10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Currently Open</div>
                                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                </div>
                                <h3 className="text-xl font-bold mb-1 text-on-surface">Zeger Senopati Central</h3>
                                <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Jl. Senopati No. 41, Kebayoran Baru, Jakarta Selatan</p>
                                <div className="flex items-center gap-4 text-xs font-semibold text-tertiary">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">schedule</span>
                                        <span>07:00 - 22:00</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">directions_walk</span>
                                        <span>0.4 km</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 py-2 bg-surface-container-high text-on-surface text-xs font-bold rounded-xl hover:bg-surface-container-highest transition-colors uppercase tracking-wider">Details</button>
                                    <button className="flex-1 py-2 primary-gradient text-white text-xs font-bold rounded-xl shadow-md uppercase tracking-wider">Order Here</button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Opening Soon</div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-on-surface">Zeger Kemang Signature</h3>
                            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Kemang Raya No. 12, Mampang Prapatan</p>
                            <div className="flex items-center gap-4 text-xs font-semibold text-tertiary">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span>08:00 - 23:00</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">directions_walk</span>
                                    <span>1.2 km</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface-container-low p-6 rounded-2xl hover:bg-surface-container-high transition-all cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Currently Open</div>
                            </div>
                            <h3 className="text-xl font-bold mb-1 text-on-surface">Zeger Sudirman Tower</h3>
                            <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">Level G, Sahid Sudirman Center, Jakarta Pusat</p>
                            <div className="flex items-center gap-4 text-xs font-semibold text-tertiary">
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                    <span>07:00 - 20:00</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="material-symbols-outlined text-sm">directions_walk</span>
                                    <span>2.8 km</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Map Section (Right) */}
                <section className="flex-1 min-h-[500px] relative rounded-3xl overflow-hidden shadow-2xl shadow-on-surface/5 bg-surface-container">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-50 saturate-0" alt="Jakarta Map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt_QFD-_IIW8uxmN5qyPlG7i1rblK8pqfhHmdZRucCF3Sf9AKvWNRpL9riFOPf7l6-aPGcyEZDF3jqXQ9xwSj_Y6_6ds_mEs_Fy-Ku-gD-lyjrlgIXk4eQFuAMDAHgBzr9hIYdZKQmj4cedgzpL0rVrALysjjR5XNuBrbVHPaYDCgtT5H6mheUcsNB0Ib3Ayp5QNvEf_Hcn8xh2-X1kypxw-BkMM0Qf1yZZkN4f2P7Xde_ifZayyv4BqKsVuPK-ED0-HaJ21Hm9qw" />
                    </div>

                    <div className="absolute top-[30%] left-[45%] z-10 group">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
                            <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-125 transition-transform">
                                <span className="material-symbols-outlined text-base">coffee</span>
                                <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-on-surface text-surface text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                                    Senopati Central
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-on-surface"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-[50%] left-[60%] z-10 group">
                        <div className="relative w-6 h-6 bg-tertiary rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-125 transition-transform cursor-pointer">
                            <span className="material-symbols-outlined text-xs">local_cafe</span>
                        </div>
                    </div>
                    <div className="absolute top-[65%] left-[35%] z-10 group">
                        <div className="relative w-6 h-6 bg-tertiary rounded-full flex items-center justify-center text-white shadow-lg transform hover:scale-125 transition-transform cursor-pointer">
                            <span className="material-symbols-outlined text-xs">local_cafe</span>
                        </div>
                    </div>

                    <div className="absolute top-6 right-6 z-20 flex flex-col gap-2">
                        <button className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-xl flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">add</span>
                        </button>
                        <button className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-xl flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">remove</span>
                        </button>
                        <button className="w-12 h-12 bg-surface-container-lowest rounded-2xl shadow-xl flex items-center justify-center text-primary transition-colors">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                        </button>
                    </div>

                    <div className="absolute bottom-8 right-8 left-8 md:left-auto md:w-96 z-20">
                        <div className="bg-surface/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                    <img className="w-full h-full object-cover" alt="store snapshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL7LOooLyCfUZg_OJMjR4j3a3jZLMPKx8pVG6d-0ytiojoWouqqy3mamO19ZDc3qsP5aVZBCIK0C7z55pXqRJgq73QQEQfY0lb9ZW3JAKW0hXXgCl4o_Xn37twiR-KrR0wF-HKICcFkyUrDmq1Jv5-aw8gE3peP2G9NdxdsRpRZswMMVDsKZX6aqVVCrWbNfmTVZBQyUz9v8Yu1ySY4sDpRdBJh9WHXwr4SUS72JTht6oMj2FIFjWqkgVTB9D3uPUHBLBOdNX8wCQ" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black leading-tight mb-1 text-on-surface">Senopati Central</h4>
                                    <p className="text-xs text-on-surface-variant font-medium mb-3">Our flagship experience store</p>
                                    <div className="flex gap-1 text-primary">
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                                        <span className="text-[10px] text-tertiary ml-1 font-bold">4.8 (1.2k)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Store;
