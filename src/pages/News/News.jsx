import React, { useEffect } from 'react';

const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-32 pb-20 px-8 max-w-7xl mx-auto w-full flex-grow">
            {/* Editorial Header Section */}
            <header className="mb-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.1em] text-xs uppercase mb-4 block">The Journal</span>
                        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none text-on-surface">
                            Zeger News
                        </h1>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-on-surface-variant max-w-xs text-sm leading-relaxed">
                            Curated stories from the intersection of specialty coffee, sustainable farming, and urban community culture.
                        </p>
                    </div>
                </div>
            </header>

            {/* Main Content Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Featured Hero Article */}
                <article className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-low transition-all duration-500 hover:editorial-shadow h-[600px] border border-outline-variant/10">
                    <div className="absolute inset-0">
                        <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Master barista pouring coffee" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3KpeM2s6-AaEGfCYuDsmvI_7L-PikHWIa5TD_LO_jbldZJ4uSChuxRAI-k7U-awIFmnwKh-k7nud5r-PKAa_5P2LtueeC6xAiGOWV1ehO3HzESkmJOVzYUmjGIrEMPu947fTLqcmYa9GwrwdV58SrKaKh7fDNfl1qQTCBqJvyujp4cGz__mp3GamzKBtyFmusWhMwmJMwl_lU2sBaJZTcHWqbF2S130_3X6LE7cSc08HGjt19hctIS1OFIS82VJFpTuOzVTcz7k8" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div className="absolute bottom-0 p-10 w-full">
                        <div className="flex gap-4 mb-4">
                            <span className="bg-primary px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">Sustainability</span>
                            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">March 24, 2024</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter mb-6 leading-tight max-w-xl">
                            The Future of Ethiopian Yirgacheffe: Climate Adaptation in the Highlands
                        </h2>
                        <a className="inline-flex items-center gap-2 text-white font-bold group/link" href="#">
                            Read Feature
                            <span className="material-symbols-outlined transition-transform group-hover/link:translate-x-1">arrow_right_alt</span>
                        </a>
                    </div>
                </article>

                {/* Sidebar Column */}
                <div className="md:col-span-4 flex flex-col gap-8">
                    {/* Trending Card 1 */}
                    <article className="bg-surface-container-low rounded-3xl p-8 transition-all duration-300 hover:bg-surface-container-high border-l-4 border-primary">
                        <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-2">Technique</span>
                        <h3 className="text-xl font-bold tracking-tight mb-4">The Science of Milk Temperature in Latte Art</h3>
                        <p className="text-on-surface-variant text-sm line-clamp-2 mb-4">Why 65°C is the sweet spot for sweetness and texture in your morning flat white.</p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                                <img className="w-full h-full object-cover" alt="Portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDzWJX6yeq9qMHD9srXEKuxwMUXK7V886rSOoOfaR4dA-fJ7i3uRQue1kN9ZnRrouaMAVSZLouJAbYp-akFC9w34t4YsuIknr2z0kGCJCuefRDVmEs4wrfIIemRjFuOL8BovyeLXIn8uT7Xor-joZHa2AeUaErNx5cYv3IhQBEkL4_FS6vahaM3thAZqKjir1hFkskizQUjUNEJw2lSMAl33SZrUZyQrWJQJSQnOHJ6tnh-z3yQF0xWZKZBxmWt3KfAm8yNAywwR0" />
                            </div>
                            <span className="text-[11px] font-semibold text-on-surface opacity-60">By Elena Rossi</span>
                        </div>
                    </article>

                    {/* Trending Card 2 */}
                    <article className="bg-surface-container-low rounded-3xl overflow-hidden group border border-outline-variant/10">
                        <div className="h-48 overflow-hidden">
                            <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Roastery" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcpRVyQlJj25zaBQbHS6w0JJ0bad-7RpkmIJSiaXIrgbC3iTf6uuJDLevKsVlm0Mg4PzoDLDzmF2lFss3e9XYUQJdXN3gAb4voV4bIT9v9sbKzAbMy1SKCXeHwMmAFfgURcEHAw4bhxhsoDXLrSsQsQSe2Tve2G8cgEXhn4EtweDSt6n8s0HG6DndTdgn-WS_nWsH3MkR8sJKPfz3RMv6SiiM_rwIp5a4kk2Tep9tvNSQe4KXcMC2Zhapas6uDvf2A9y-W8fQLTCQ" />
                        </div>
                        <div className="p-8">
                            <span className="text-primary font-bold text-[10px] uppercase tracking-widest block mb-2">Community</span>
                            <h3 className="text-xl font-bold tracking-tight mb-2">Opening Soon: The Soho Roastery</h3>
                            <p className="text-on-surface-variant text-sm mb-4">Our biggest editorial space yet arrives this Autumn in the heart of London.</p>
                            <a className="text-primary text-xs font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4" href="#">Details</a>
                        </div>
                    </article>
                </div>

                {/* Horizontal Section */}
                <section className="md:col-span-12 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Coffee beans" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZyV6mZvuwSJfZhUvt58PNRqCBIg2M8rX0p_W6TXsmPpG56_-DKZf_SDkTHfZ7VJU023hq719UQu-m2xfwCJYeQE2GPY9chiyYVoGmAMhfWDsYAd4QK0viflS6jiLj27IwoApEzulweD4JCz37YXwCUPiwAN5ykdYEixDsGSrBiufuuimY930ohuS7sPzvQrgfXWqTiznEiDYEkvoP7_GHAIdyLYwxyV4in8xF2jXMZKMkoB8atw3iWnvc-mr16A-C-Eeq_LYU5SU" />
                                <div className="absolute top-4 left-4 primary-gradient text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Sourcing</div>
                            </div>
                            <h4 className="text-2xl font-bold tracking-tight">Direct Trade: More Than a Label</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Understanding how our partnership with Finca El Paraiso is changing the landscape of local education.</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group bg-surface-container-highest flex items-center justify-center p-8">
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-primary text-6xl mb-4">menu_book</span>
                                    <h4 className="text-xl font-black italic tracking-tighter uppercase mb-2">The Zeger<br />Quarterly</h4>
                                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-60">Spring Issue 04 Available Now</p>
                                </div>
                                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button className="primary-gradient text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest editorial-shadow">Order Print</button>
                                </div>
                            </div>
                            <h4 className="text-2xl font-bold tracking-tight">Curating the Perfect Morning Ritual</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed">An exploration of mindfulness and the tactile pleasure of grinding beans at dawn.</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Latte art" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBZhal680yDpTaiH_1U_YRPzBcV4Z9aLCC-XiNPz_zFbNjVsRQAZrQ-MllJhDF1ZzKebam1_FTh4zHq6enDCOQzcheb13064TehG9jSfLvIcCdATbu5kKJR63SqOtTBgr_XUZlyXx9DU2G7xFv1Jv9ZGaX34uZitPht9QVarNyFW9ijW_0ArSXTrz0raZBBGBVcLPAZXWGuq0WyDhIUWFXsiDo7cBXdfMqdbIpL4_nZJsGsFo0YVTz6BOwcHYLqS193oe2ok4jjHY" />
                                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md text-on-surface text-[10px] font-bold px-3 py-1 rounded-full uppercase">Lifestyle</div>
                            </div>
                            <h4 className="text-2xl font-bold tracking-tight">Coffee and Ceramics: A Dialogue</h4>
                            <p className="text-on-surface-variant text-sm leading-relaxed">Why the vessel matters as much as the brew. Interviewing master potter Kenji Sato.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Newsletter Subscription */}
            <section className="mt-20 primary-gradient rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">Join the Editorial Inner Circle.</h2>
                    <p className="text-white/80 mb-10 text-lg">Receive our bi-weekly dispatch on global coffee trends, farm reports, and early access to limited collaborations.</p>
                    <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                        <input className="bg-transparent border-b-2 border-white/30 text-white outline-none placeholder:text-white/50 px-0 py-4 focus:outline-none focus:border-white transition-colors flex-grow uppercase text-xs tracking-widest font-bold rounded-none" placeholder="YOUR EMAIL ADDRESS" type="email" />
                        <button className="bg-white text-primary px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-surface-container-low transition-colors" type="button">Subscribe</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default News;
