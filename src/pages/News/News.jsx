import React from 'react';

const News = () => {
    const newsData = [
        { title: "Zeger Launches New Store in SCBD", date: "April 15, 2026" },
        { title: "Introducing the Caramel Mochaccino", date: "April 10, 2026" },
        { title: "Zeger's Commitment to Sustainability", date: "March 22, 2026" }
    ];

    return (
        <main style={{ paddingTop: '75px', backgroundColor: 'var(--zeger-bg)', minHeight: '100vh' }}>
            <div className="container" style={{ padding: '80px 0' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '40px', color: 'var(--zeger-dark)' }}>
                    Latest <span style={{ color: 'var(--zeger-red)' }}>News</span>
                </h1>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {newsData.map((news, i) => (
                        <div key={i} style={{ padding: '30px', backgroundColor: 'white', borderRadius: '15px', borderLeft: '5px solid var(--zeger-red)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{news.title}</h3>
                            <p style={{ color: 'var(--zeger-gray)' }}>{news.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default News;
