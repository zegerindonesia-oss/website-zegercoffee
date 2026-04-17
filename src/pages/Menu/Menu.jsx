import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-7xl mx-auto px-6 py-12">
            {/* Editorial Hero Section */}
            <section className="mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden rounded-3xl bg-surface-container-low min-h-[400px] flex items-center"
                >
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover opacity-90" alt="cinematic close-up of a barista" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbbDwR1lEULqXdDL0rmnRJl4klTfGdFnyBi6nI_DkMihhMmkoglu9klkHsAumpvOkzU7FRVNnNvsqZ0Rs4O7sJDMOhP-aVD5uFEfqyxz-zm0HXdTTpVibB1fNPmZKduNaKP9jGll6ncaMEFmbqwe-H9xOPzIMTgdCbchvACzRKzSsXjZt_4zFTSOGh9hxS4ZMEXdp5O3CGdAsCQiXlngqVjZ_ppohIO8eT82XBKQX0UPzaMBpvE7qMy1PTt272FYVjL00ye2TOFFY" />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 p-12 lg:p-20 max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">The Art of Roasting</span>
                        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-on-surface mb-6 leading-tight">
                            CRAFTED FOR<br /><span className="text-primary">YOUR MOMENT.</span>
                        </h1>
                        <p className="text-on-surface-variant text-lg mb-8 leading-relaxed max-w-md">
                            Explore our curated selection of signature blends and seasonal creations, designed to elevate your daily ritual.
                        </p>
                        <div className="flex gap-4">
                            <button className="primary-gradient text-on-primary px-8 py-4 rounded-xl font-bold editorial-shadow hover:scale-105 transition-transform">Explore Menu</button>
                            <button className="bg-surface-container-highest/20 backdrop-blur-sm text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-colors">Our Story</button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Menu Categories Navigation */}
            <div className="flex flex-wrap gap-4 mb-12 items-center justify-center">
                <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-bold text-sm uppercase tracking-widest">All</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">Espresso Based</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">Creampresso</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">Milk Based</button>
                <button className="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface-variant font-bold text-sm uppercase tracking-widest hover:bg-surface-container-high transition-colors">Refresher</button>
            </div>

            {/* Menu Grid: Espresso Based */}
            <section className="mb-24">
                <div className="flex items-baseline gap-4 mb-8">
                    <h2 className="text-3xl font-black italic tracking-tighter uppercase text-primary">Espresso Based</h2>
                    <div className="h-1 flex-grow bg-surface-container-low rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group relative bg-surface rounded-3xl p-6 transition-all duration-500 hover:bg-surface-container-low editorial-shadow">
                        <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-surface-container-high">
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="latte art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbwFk3tHyE49NyOIzt4aJNHaIaV74v5QTGTVrN3klVbZFDDh88JzhPeL0PM6injZW_-4GwxHx3xxcSl1JHdVhcqG_WwW47pnmMZsH19bfXqlz8plg_Wncvm1gAmrPNi8mbP1a9SiTybwauu55GrDlfsNQjjf5IufDLiL1ZKqX67rZ0eG-s83w6MDk2bAXnVIOgeNfpDzkaM_MuwoD0Jcj1ly1-QJw-iSh-DJu1IBAPStPiPGnanuyGwYhjSP0F9rJ-ROJsC7M0IVc" />
                            <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold">HOT/ICE</div>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold tracking-tight">Kopi Susu Gula Aren</h3>
                            <span className="text-lg font-black text-primary italic">25k</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Signature espresso with creamy milk and local palm sugar syrup.</p>
                        <button className="w-full py-3 rounded-xl border border-outline-variant/20 text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">Add to Cart</button>
                    </div>

                    <div className="group relative bg-surface rounded-3xl p-6 transition-all duration-500 hover:bg-surface-container-low editorial-shadow">
                        <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-surface-container-high">
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iced americano" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyICFpFDv68v-WwrQOs-mkhDwIe5FQDDfGocwoKNXdTgAhQHQu8swHYp2_OowPsU2OJM_LsG-l8WXI2AnvA-MAmm6Nu3hsvvW8uoIfCIHNfzBFpz1jLGlli8yAA6H6awgTx3Vb0IEghxV8zCBSZKj7Zks4MKD8bEH15v2GslLzGGfiWlkOR16V_ufyQvJl1ZYV7WJgXoFoIvnA7n0pD1Of_KEj8N-NvxFomlM1Gm4dQkvq2QDyF7RfjMz7RtNYahyrXDKVafLfHFg" />
                            <div className="absolute top-4 right-4 bg-on-surface text-background px-3 py-1 rounded-full text-xs font-bold">ICE ONLY</div>
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold tracking-tight">Ice Americano</h3>
                            <span className="text-lg font-black text-primary italic">20k</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Double shot of house blend espresso over chilled mountain spring water.</p>
                        <button className="w-full py-3 rounded-xl border border-outline-variant/20 text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">Add to Cart</button>
                    </div>

                    <div className="group relative bg-surface rounded-3xl p-6 transition-all duration-500 hover:bg-surface-container-low editorial-shadow">
                        <div className="relative h-64 mb-6 overflow-hidden rounded-2xl bg-surface-container-high">
                            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="hazelnut mocha" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoF2jOpnNDcopmIByWIp2SW37QaDgrjXwLMa6MrQ2fDh2fqT35JC0-jw-HnQSrIUatFgPJRAS2CQrRUBQazkfJay27cFVC78iVeILbYvtXwR9a-F2phS_bRDRWTeP3kVE_afvr11Q67unIE4OBRcMWdcd7EwRYuqdSuwC-eYT4UB7AWJcqc6fpF24fr1Ttwk4GeEgMnEQNQBKDx6aFIV6PfNSVAvdVdcMhY19SNGW_Y4tAIWgZ0GKVUw6rWSfV2ccMR2nNH_yO8fE" />
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold tracking-tight">Hazelnut Latte</h3>
                            <span className="text-lg font-black text-primary italic">28k</span>
                        </div>
                        <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Roasted hazelnut notes paired with silky micro-foam and bold espresso.</p>
                        <button className="w-full py-3 rounded-xl border border-outline-variant/20 text-primary font-bold hover:bg-primary hover:text-on-primary transition-all">Add to Cart</button>
                    </div>
                </div>
            </section>

            {/* Featured Section: Creampresso */}
            <section className="mb-24 bg-surface-container-low rounded-[3rem] p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                    <span className="material-symbols-outlined text-[300px] text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>coffee_maker</span>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="w-full lg:w-1/2">
                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Seasonal Signature</span>
                        <h2 className="text-5xl font-black italic tracking-tighter text-on-surface mb-8">CREAM<span className="text-primary">PRESSO.</span></h2>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                                <div>
                                    <h4 className="text-lg font-bold">Sea Salt Cream Espresso</h4>
                                    <p className="text-sm text-on-surface-variant">Smooth crema with a touch of Mediterranean sea salt</p>
                                </div>
                                <span className="text-2xl font-black text-primary">32k</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-outline-variant/10 pb-4">
                                <div>
                                    <h4 className="text-lg font-bold">Tiramisu Cream Latte</h4>
                                    <p className="text-sm text-on-surface-variant">Espresso layered with mascarpone-style cream and cocoa</p>
                                </div>
                                <span className="text-2xl font-black text-primary">35k</span>
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <div>
                                    <h4 className="text-lg font-bold">Oat Cream Cold Brew</h4>
                                    <p className="text-sm text-on-surface-variant">12-hour cold extraction topped with airy oat cream</p>
                                </div>
                                <span className="text-2xl font-black text-primary">34k</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative flex justify-center">
                        <div className="relative z-10 w-3/4 aspect-square rounded-3xl overflow-hidden editorial-shadow rotate-3 scale-95">
                            <img className="w-full h-full object-cover" alt="cream pour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HnCxHkWpdhCxTrj6WXSr8Vq2Y8eYdqtlWYYbG9b9Y5YXQCM6y8GHIt9A9GPdXYMgG-4NjVZ2OYfaanZbhgtNlsmByt8Fcog2xBjSRAKYEL5cFV6KQcdJ7rgYZZG-hH7qo9zUnl8OhRDX3kHfO62kd0tiZBoX16Fbwjht_eUJU720GJSJOqoVmAZdZbmwqlv9xbnHGlwx7BiNULraC6WHVrSWRVKtnn3pPm4WFcnV4iXJNVbmKFoEuihijYNnOe59-uvgmPkhJMg" />
                        </div>
                        <div className="absolute -bottom-8 left-8 z-20 bg-background p-6 rounded-2xl editorial-shadow">
                            <p className="text-primary font-black italic text-3xl">MUST TRY!</p>
                            <p className="text-xs uppercase tracking-widest font-bold mt-1">Limited Edition</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid: Milk Based & Refresher */}
            <section className="mb-24">
                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6">
                    <div className="md:col-span-2 md:row-span-2 bg-surface rounded-[2rem] p-8 editorial-shadow flex flex-col justify-between overflow-hidden relative min-h-[400px]">
                        <div className="absolute top-0 right-0 w-full h-full">
                            <img className="w-full h-full object-cover opacity-20" alt="strawberry milk drink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSVEKRG0wfeR-VZHiM0YSqPWr9OhKa_4yZloR8dcaMBegKY0GHUBBFcZ-3YCfLP2thdA0w0W8OFTuf01AcH308JLQi7bgW6GCmkxmVLqfr3f3CDxtUrJoemI97doQ0AdNoDb6kQtTA_1q8o2lPl4Ee-Q0ZL8jhaJetMiQqP9W_CGaHeX5tRMTcFGzslrAuHIJ3bhe9CoD9FHkeBYdHQUzAOyAPrXElXUoi53eh8nvZZ_Jtr04qCTsxqY2FE1dQDla0wQFCO_eQ2m4" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black italic tracking-tighter uppercase text-primary mb-6">Milk Based</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between font-bold text-lg"><span>Matcha Latte</span><span>28k</span></div>
                                <div className="flex justify-between font-bold text-lg"><span>Dark Chocolate</span><span>30k</span></div>
                                <div className="flex justify-between font-bold text-lg"><span>Strawberry Cream</span><span>32k</span></div>
                                <div className="flex justify-between font-bold text-lg"><span>Taro Bliss</span><span>28k</span></div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-8">
                            <button className="primary-gradient text-on-primary px-8 py-3 rounded-xl font-bold">Full Milk Menu</button>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-primary rounded-[2rem] p-8 text-on-primary flex items-center gap-6">
                        <div className="w-1/3 aspect-square rounded-2xl overflow-hidden">
                            <img className="w-full h-full object-cover" alt="refreshing drink" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXswTq8521IxVgGQZyq_0e652AxBYLGLDTpTBERIe3Vs-qDyAwfiywkPue7TQzaWa89WqDQeaLiZyXM59s4BG4Ktvc-d9qUkT05ilqRUydtoc-AxOkjaTgQ_MrIaG3V7pjRK-eHNvnG9lixqR0NymgQ6hmE7OQJuSaeWt-34JvZ0oYCVwSP9bNvBiifUrb_B1kbFiOjz7dCeHt13E3xu49oS7wsp3Ghy6m0gFrvKQpFEdN9igeALXR7Vh6ecwDnp_UbmnD8uLbms" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black italic tracking-tighter uppercase mb-2">Refresher</h2>
                            <p className="text-on-primary/80 text-sm mb-4">Iced Lychee Tea, Lemon Sparkler, Sunset Berry.</p>
                            <span className="text-xl font-bold">Starting 22k</span>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-secondary-container rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-on-secondary-container font-black italic text-2xl">ZEGER REWARDS</h3>
                            <p className="text-on-secondary-container/80 text-sm">Earn 10 points for every cup purchased.</p>
                        </div>
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-5xl text-on-secondary-container">stars</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Menu;
