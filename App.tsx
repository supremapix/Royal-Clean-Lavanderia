import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Neighborhood from './pages/Neighborhood';
import ScrollToTop from './components/ScrollToTop';
import PromoPopup from './components/PromoPopup';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/bairros/:slug" element={<Neighborhood />} />
          </Routes>
        </main>
        <Footer />
        <PromoPopup />
      </div>
    </Router>
  );
};

export default App;