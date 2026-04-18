import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuData = {
    'Espresso Based': [
        { name: 'Black Coffee', price: '10k', desc: 'Espresso dengan air dingin', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=500&auto=format&fit=crop' },
        { name: 'Sunrise Americano', price: '12k', desc: 'Americano dengan rasa buah Tropical', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop' },
        { name: 'Citrus Coffee', price: '12k', desc: 'Americano dengan rasa buah lemon', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500&auto=format&fit=crop' },
        { name: 'Zeger Latte', price: '10k', desc: 'Espresso dengan susu creamy (tanpa gula)', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop' },
        { name: 'Cloud Latte', price: '12k', desc: 'Espresso dengan susu creamy dan SKM', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1570968015849-0447387cc8bf?q=80&w=500&auto=format&fit=crop' },
        { name: 'Zeger Aren Latte', price: '15k', desc: 'Espresso dengan susu creamy & gula aren asli', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop' },
        { name: 'Mocha Latte', price: '15k', desc: 'Espresso dengan cokelat premium dan susu', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format&fit=crop' },
        { name: 'Creamy Caramel Latte', price: '15k', desc: 'Latte dengan rasa caramel yang kaya', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format&fit=crop' },
        { name: 'Bailey\'s Creamy Latte', price: '15k', desc: 'Sensasi Bailey\'s non-alkohol yang creamy', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop' },
        { name: 'Butterscooth Creamy Latte', price: '15k', desc: 'Rasa mentega gurih manis yang khas', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=500&auto=format&fit=crop' },
        { name: 'Caramel Mochaccino', price: '18k', desc: 'Perpaduan caramel, cokelat, dan espresso', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1620302621122-a68180bc492c?q=80&w=500&auto=format&fit=crop' },
        { name: 'Zepresso', price: '10k', desc: 'Double shoot Espresso Houseblend', sizes: ['S'], image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=500&auto=format&fit=crop' }
    ],
    'Zeger\'s Signature': [
        { name: 'Zeger Coffee Jelly', price: '15k', desc: 'Espresso dengan susu creamy & Pearl Jelly', sizes: ['L'], image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=500&auto=format&fit=crop' },
        { name: 'Caramel Machiato', price: '20k', desc: 'Caramel manis dengan espresso yang kuat', sizes: ['L'], image: 'https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?q=80&w=500&auto=format&fit=crop' },
        { name: 'Choco Lava Ice Cream', price: '18k', desc: 'Cokelat lumer dengan es krim vanilla', sizes: ['L'], image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=500&auto=format&fit=crop' },
        { name: 'Choco Matcha Ice Cream', price: '20k', desc: 'Perpaduan cokelat dan matcha dengan es krim', sizes: ['L'], image: 'https://images.unsplash.com/photo-1506197394121-6a0397cc333c?q=80&w=500&auto=format&fit=crop' },
        { name: 'Taro Cheese Velvet', price: '18k', desc: 'Taro lembut dengan krim keju gurih', sizes: ['L'], image: 'https://images.unsplash.com/photo-1551046710-23b0d46a8d6b?q=80&w=500&auto=format&fit=crop' }
    ],
    'Creampresso': [
        { name: 'Classic Affogato', price: '13k', desc: 'Ice Cream Vanilla dengan Espresso', sizes: ['S'], image: 'https://images.unsplash.com/photo-1594631252845-29fc4586c552?q=80&w=500&auto=format&fit=crop' },
        { name: 'Zeger Supreme', price: '15k', desc: 'Ice Cream Vanilla dengan Espresso & Oreo', sizes: ['S'], image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop' },
        { name: 'Vanilla Cookies Crumb', price: '14k', desc: 'Ice Cream Vanilla & Oreo', sizes: ['S'], image: 'https://images.unsplash.com/photo-1551046710-23b0d46a8d6b?q=80&w=500&auto=format&fit=crop' },
        { name: 'Choco Affogato', price: '15k', desc: 'Ice Cream Vanilla dan Chocolate', sizes: ['S'], image: 'https://images.unsplash.com/photo-1511381939415-e4401546383a?q=80&w=500&auto=format&fit=crop' },
        { name: 'Matcha Affogato', price: '15k', desc: 'Ice Cream Vanilla dan Matcha', sizes: ['S'], image: 'https://images.unsplash.com/photo-1506197394121-6a0397cc333c?q=80&w=500&auto=format&fit=crop' },
        { name: 'Sunny Mango', price: '14k', desc: 'Ice Cream Vanilla dan Jam Mango', sizes: ['S'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' }
    ],
    'Milk Based': [
        { name: 'Cookies & Cream', price: '12k', desc: 'Susu dengan oreo yang dihancurkan', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format&fit=crop' },
        { name: 'Chocomalt', price: '10k', desc: 'Susu cokelat malt yang kaya rasa', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format&fit=crop' },
        { name: 'Matcha Creamy Latte', price: '15k', desc: 'Matcha premium dengan susu creamy', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1506197394121-6a0397cc333c?q=80&w=500&auto=format&fit=crop' },
        { name: 'Zeger Milk Tea', price: '15k', desc: 'Teh susu khas Zeger', sizes: ['L'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' },
        { name: 'Hazelnut Choco Pearl Jelly Milktea', price: '18k', desc: 'Milktea dengan hazelnut dan jelly', sizes: ['L'], image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=500&auto=format&fit=crop' },
        { name: 'Brown Sugar Pearl Jelly Freshmilk', price: '18k', desc: 'Susu segar dengan gula aren dan jelly', sizes: ['L'], image: 'https://images.unsplash.com/photo-1551046710-23b0d46a8d6b?q=80&w=500&auto=format&fit=crop' },
        { name: 'Brown Sugar Pearl Jelly Milktea', price: '18k', desc: 'Milktea dengan gula aren dan jelly', sizes: ['L'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' },
        { name: 'Taro Milktea', price: '10k', desc: 'Taro dengan susu dan jelly premium', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1551046710-23b0d46a8d6b?q=80&w=500&auto=format&fit=crop' },
        { name: 'Thai Tea', price: '8k', desc: 'Teh Thailand autentik khas Zeger', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' }
    ],
    'Refresher': [
        { name: 'Java Tea', price: '7k', desc: 'Teh melati khas Jawa', sizes: ['L'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' },
        { name: 'Java Lemon Tea', price: '8k', desc: 'Paduan teh Jawa dan perasan lemon', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop' },
        { name: 'Lychee Tea', price: '8k', desc: 'Teh rasa leci dengan buah leci pilihan', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1511381939415-e4401546383a?q=80&w=500&auto=format&fit=crop' },
        { name: 'Lemonade', price: '8k', desc: 'Sari buah lemon segar penambah semangat', sizes: ['S', 'L', '1LT'], image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=500&auto=format&fit=crop' },
        { name: 'Tropicool Mango', price: '12k', desc: 'Minuman mangga dingin menyegarkan', sizes: ['S', 'L'], image: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=500&auto=format&fit=crop' }
    ]
};

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('Espresso Based');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="max-w-[1400px] mx-auto px-6 py-24 pt-32 min-h-screen">
            <section className="mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative overflow-hidden rounded-[3rem] bg-surface-container-low min-h-[450px] flex items-center editorial-shadow"
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            className="w-full h-full object-cover opacity-90 transition-transform duration-1000"
                            alt="cinematic coffee"
                            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
                    </div>
                    <div className="relative z-10 p-12 lg:p-24 max-w-3xl">
                        <span className="text-primary font-extrabold tracking-[0.3em] text-[10px] uppercase mb-6 block">Happiness in every cup</span>
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-on-surface mb-8 leading-[0.9]">
                            TRUE COFFEE <br /><span className="text-primary underline decoration-4 underline-offset-8">IDENTITY.</span>
                        </h1>
                        <p className="text-on-surface-variant text-xl font-medium mb-10 leading-relaxed max-w-lg">
                            Dibuat 100% dari biji kopi asli pilihan. Jelajahi menu kami dan temukan semangat baru dalam setiap tegukannya.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Sticky Category Navigator */}
            <div className="sticky top-28 z-40 mb-16 px-4">
                <div className="glass-nav rounded-full px-2 py-2 flex items-center justify-center gap-2 max-w-fit mx-auto shadow-xl backdrop-blur-2xl">
                    {Object.keys(menuData).map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-on-surface-variant hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Grid Section */}
            <section className="px-4">
                <div className="flex items-center justify-between mb-16">
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase text-primary border-l-8 border-primary pl-6">
                        {activeCategory}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {menuData[activeCategory].map((menu, idx) => (
                            <motion.div
                                key={`${activeCategory}-${menu.name}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: idx * 0.05 }}
                                className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] p-6 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 editorial-shadow"
                            >
                                <div className="space-y-6">
                                    <div className="relative h-64 overflow-hidden rounded-[2rem] bg-black/10">
                                        <img
                                            src={menu.image}
                                            alt={menu.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                        />
                                        <div className="absolute top-4 left-4 flex gap-1">
                                            {menu.sizes?.map(size => (
                                                <span key={size} className="text-[9px] font-black bg-white/20 backdrop-blur-md text-white px-2 py-0.5 rounded-md uppercase border border-white/10">{size}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-start">
                                        <div className="flex-1 pr-2">
                                            <h3 className="text-xl font-extrabold italic tracking-tight text-white leading-tight mb-2 uppercase">
                                                {menu.name}
                                            </h3>
                                            <p className="text-white/60 text-xs font-medium leading-relaxed">
                                                {menu.desc}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-primary italic leading-none">{menu.price}</span>
                                        </div>
                                    </div>

                                    <button className="w-full bg-primary/20 hover:bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all duration-300 border border-primary/20">
                                        Pesan Sekarang
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Customizer Section */}
            <section className="mt-32 bg-primary rounded-[3rem] p-16 text-on-primary overflow-hidden relative shadow-2xl shadow-primary/30">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-[100px]"></div>
                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-white/70 font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Personalize your blend</span>
                        <h2 className="text-5xl md:text-6xl font-black italic tracking-tighter mb-12">TAILORED <br />FOR <span className="text-on-primary/60">YOU.</span></h2>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="font-black text-lg mb-4 uppercase tracking-widest text-white/90">TOPPING</h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between text-sm"><span>Espresso Shot</span><span className="font-black">+6k</span></li>
                                    <li className="flex justify-between text-sm"><span>Cookie Crumb</span><span className="font-black">+4k</span></li>
                                    <li className="flex justify-between text-sm"><span>Ice Cream</span><span className="font-black">+5k</span></li>
                                    <li className="flex justify-between text-sm"><span>Cheese Cream</span><span className="font-black">+5k</span></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-black text-lg mb-4 uppercase tracking-widest text-white/90">SYRUP</h4>
                                <ul className="space-y-3">
                                    <li className="flex justify-between text-sm"><span>Caramel</span><span className="font-black">+5k</span></li>
                                    <li className="flex justify-between text-sm"><span>Gula Aren</span><span className="font-black">+5k</span></li>
                                    <li className="flex justify-between text-sm"><span>Bailey's</span><span className="font-black">+5k</span></li>
                                    <li className="flex justify-between text-sm"><span>Butterscooth</span><span className="font-black">+5k</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="relative">
                            <img src="/logo.png" className="w-56 h-56 object-contain opacity-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl" />
                            <img src="/logo.png" className="w-56 h-56 object-contain relative z-10 drop-shadow-2xl" alt="Zeger Logo" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Menu;
