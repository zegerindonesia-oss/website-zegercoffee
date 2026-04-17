import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
      <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
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
        </div>

        {/* Footer */}
        <footer className="bg-surface-container-high transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto w-full font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest">
            <div className="space-y-4">
              <div className="text-xl font-black italic text-primary">Zeger Coffee</div>
              <p className="normal-case tracking-normal text-on-surface-variant">Premium roasting and crafted experiences delivered to your neighborhood.</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-primary">public</span>
                <span className="material-symbols-outlined text-primary">person</span>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Shop</h4>
              <nav className="flex flex-col gap-2">
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/menu">Menu</Link>
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/store">Store</Link>
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/download-app">App</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Company</h4>
              <nav className="flex flex-col gap-2">
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/collaboration">Collaboration</Link>
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/contact-us">Contact Us</Link>
                <Link className="text-on-surface-variant hover:text-primary transition-all" to="/news">News</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-on-surface">Social</h4>
              <nav className="flex flex-col gap-2">
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Instagram</a>
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Facebook</a>
                <a className="text-on-surface-variant hover:text-primary transition-all" href="#">Twitter</a>
              </nav>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-8 pb-8 text-center md:text-left">
            <p className="text-outline text-[10px] border-t border-outline-variant/30 pt-8 uppercase tracking-widest">
              © {new Date().getFullYear()} Zeger Coffee. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
