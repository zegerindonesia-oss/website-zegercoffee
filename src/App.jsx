import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Store from './pages/Store/Store';
import Collaboration from './pages/Collaboration/Collaboration';
import News from './pages/News/News';
import ContactUs from './pages/ContactUs/ContactUs';
import DownloadApp from './pages/DownloadApp/DownloadApp';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/store" element={<Store />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/download-app" element={<DownloadApp />} />
        </Routes>
        
        <footer style={{ backgroundColor: 'var(--zeger-dark)', color: 'white', padding: '80px 0 40px' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="var(--zeger-red)">
                <path d="M17.067 5.748c-3.153-2.074-7.53-.448-9.4 3.73-1.603 3.585-1.4 8.784 2.87 10.99 3.016 1.56 7.42-.041 9.4-3.73 1.986-3.69 1.405-8.15-2.87-10.99zm-4.72 10.85c-1.353.473-2.483-1.12-1.745-2.146 1.4-1.927 3.255-3.627 3.513-5.27.098-.621.848-1.077 1.433-.674.521.36.49 1.056.241 1.637-.624 1.455-2.003 3.476-2.613 5.344-.192.585-.592.937-.829 1.109z" />
              </svg>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.5px' }}>Zeger <span style={{ fontWeight: 400 }}></span></span>
            </div>

            <ul style={{ display: 'flex', gap: '32px', marginBottom: '60px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {['About', 'Menu', 'Store', 'Investors', 'GCG', 'Collaboration', 'News', 'Career', 'Contact Us'].map(item => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s', fontWeight: 500, textDecoration: 'none' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '40px' }}></div>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              &copy; {new Date().getFullYear()} Zeger Coffee. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
