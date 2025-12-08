import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Shirt } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-secondary text-white py-2 text-center text-sm font-bold hidden md:block z-50 relative">
        <div className="container mx-auto px-4 flex justify-between items-center">
           <span>Royal Clean Lavanderias – Praticidade e Qualidade Perto de Você!</span>
           <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
             <Phone size={14} /> (41) 99696-2349
           </a>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-sm py-4'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo Animated */}
            <Link to="/" className="flex items-center space-x-2 group animate-slide-down">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primaryDark p-2.5 rounded-lg text-white shadow-lg group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-105">
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-white/20 -skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
                
                {/* Icon with swing animation on hover */}
                <div className="group-hover:animate-swing origin-top">
                  <Shirt size={28} strokeWidth={2} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold text-gray-900 leading-none group-hover:text-primary transition-colors">Royal</span>
                <span className="text-xs font-bold text-secondary uppercase tracking-[0.15em] group-hover:tracking-[0.2em] transition-all">Clean</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-1 items-center animate-slide-down [animation-delay:200ms] opacity-0 fill-mode-forwards">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="ml-4">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:-translate-y-0.5 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md flex items-center space-x-2 text-sm"
                >
                  <Phone size={16} />
                  <span>Agendar Coleta</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
              aria-label="Menu Principal"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-up">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-[#25D366] text-white py-3 rounded-lg font-bold shadow-lg"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;