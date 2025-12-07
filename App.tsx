import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Neighborhood from './pages/Neighborhood';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import PromoPopup from './components/PromoPopup';

const App: React.FC = () => {
  return (
    <BrowserRouter>
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
            {/* Rota para tratamento de erro 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <PromoPopup />
      </div>
    </BrowserRouter>
  );
};

export default App;