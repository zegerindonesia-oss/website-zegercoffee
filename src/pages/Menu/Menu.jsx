import React from 'react';
import { motion } from 'framer-motion';
import './Menu.css';

const Menu = () => {
    // Menu grouped into categories from the reference image
    const menuData = [
        {
            category: "ESPRESSO BASED",
            items: [
                { name: "Black Coffee", sizes: ["10K", "10K"] },
                { name: "Sunrise Americano", sizes: ["12K", "14K"] },
                { name: "Citrus Coffee", sizes: ["12K", "14K"] },
                { name: "Zeger Latte", sizes: ["10K", "12K"], oneL: "60K" },
                { name: "Cloud Latte", sizes: ["12K", "14K"], oneL: "70K" },
                { name: "Zeger Aren Latte", sizes: ["15K", "17K"], oneL: "75K" },
                { name: "Mocha Latte", sizes: ["15K", "17K"] },
                { name: "Creamy Caramel Latte", sizes: ["15K", "17K"], oneL: "75K" },
                { name: "Bailey's Creamy Latte", sizes: ["15K", "17K"], oneL: "75K" },
                { name: "Butterscotch Creamy Latte", sizes: ["15K", "17K"], oneL: "75K" },
                { name: "Caramel Mochaccino", sizes: ["18K", "18K"], oneL: "85K" },
                { name: "Zepresso", sizes: ["10K", "10K"] }
            ]
        },
        {
            category: "CREAMPRESSO",
            items: [
                { name: "Classic Affogato", sizes: ["", "13K"] },
                { name: "Zeger Supreme", sizes: ["", "15K"] },
                { name: "Vanilla Cookies Crumb", sizes: ["", "14K"] },
                { name: "Choco Affogato", sizes: ["", "15K"] },
                { name: "Matcha Affogato", sizes: ["", "15K"] },
                { name: "Sunny Mango", sizes: ["", "14K"] }
            ]
        },
        {
            category: "ZEGER'S SIGNATURE",
            items: [
                { name: "Zeger Coffee Jelly", sizes: ["", "15K"] },
                { name: "Caramel Machiato", sizes: ["", "20K"] },
                { name: "Choco Lava Ice Cream", sizes: ["18K", ""] },
                { name: "Choco Matcha Ice Cream", sizes: ["20K", ""] },
                { name: "Taro Cheese Velvet", sizes: ["18K", ""] }
            ]
        },
        {
            category: "MILK BASED",
            items: [
                { name: "Cookies & Cream", sizes: ["12K", "17K"] },
                { name: "Chocomalt", sizes: ["10K", "15K"], oneL: "60K" },
                { name: "Matcha Creamy Latte", sizes: ["15K", "18K"], oneL: "75K" },
                { name: "Zeger Milk Tea", sizes: ["", "15K"] },
                { name: "Hazelnut Choco Pearl Jelly Milktea", sizes: ["", "18K"] },
                { name: "Brown Sugar Pearl Jelly Freshmilk", sizes: ["", "18K"] },
                { name: "Brown Sugar Pearl Jelly Milktea", sizes: ["", "18K"] },
                { name: "Taro Milktea", sizes: ["10K", "15K"], oneL: "60K" },
                { name: "Thai Tea", sizes: ["8K", "13K"], oneL: "55K" }
            ]
        },
        {
            category: "REFRESHER",
            items: [
                { name: "Java Tea", sizes: ["", "7K"] },
                { name: "Java Lemon Tea", sizes: ["8K", "13K"] },
                { name: "Lychee Tea", sizes: ["8K", "13K"], oneL: "55K" },
                { name: "Lemonade", sizes: ["8K", "13K"], oneL: "55K" },
                { name: "Tropicool Mango", sizes: ["12K", "15K"] }
            ]
        }
    ];

    return (
        <main className="menu-page">
            <div className="menu-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="menu-header-content"
                >
                    <h1>Coffee <span className="highlight">Menu</span></h1>
                    <p>A HAPPINESS IN EVERY CUP</p>
                </motion.div>
            </div>

            <div className="container">
                <div className="menu-grid">
                    {menuData.map((section, index) => (
                        <motion.div 
                            key={section.category}
                            className="menu-section"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h2 className="category-title">{section.category}</h2>
                            <div className="item-header">
                                <span className="item-name"></span>
                                <span className="size-label s-label">S</span>
                                <span className="size-label l-label">L / 200ML</span>
                                <span className="size-label onel-label">1LT</span>
                            </div>
                            
                            <ul className="item-list">
                                {section.items.map(item => (
                                    <li key={item.name} className="menu-item">
                                        <span className="item-name">{item.name}</span>
                                        <span className="item-price s-size">{item.sizes[0]}</span>
                                        <span className="item-price l-size">{item.sizes[1]}</span>
                                        <span className="item-price onel-size">{item.oneL || ''}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Menu;
