import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Send, Facebook, Instagram, MessageCircle, ChevronRight, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: ''
  });

  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, service, message } = formData;
    
    // Constrói a mensagem personalizada mantendo a referência do Google
    let text = `Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*`;
    
    if (name || service || message) {
      text += `%0A%0A*Nome:* ${encodeURIComponent(name)}%0A*Serviço:* ${encodeURIComponent(service)}%0A*Mensagem:* ${encodeURIComponent(message)}`;
    }
    
    const waLink = `https://wa.me/5541996962349?text=${text}`;
    
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 pt-16 border-t-4 border-secondary mt-auto relative overflow-hidden">
      
      {/* Decorative top shape */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Brand & Contact (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col space-y-2">
              <h3 className="text-3xl font-display font-bold text-white tracking-tight">Royal<span className="text-secondary">Clean</span></h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Royal Clean Lavanderias – Praticidade e Qualidade Perto de Você! Coleta e entrega, lavagem a seco e cuidado especial com suas roupas no bairro Portão e região.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <span className="text-sm mt-1.5 group-hover:text-white transition-colors">
                  R. Ildefonso Stockler França, 299<br />Portão, Curitiba - PR
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white hover:underline transition-colors">
                  (41) 99696-2349
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-gray-800 p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                  <Clock size={18} />
                </div>
                <div className="text-sm mt-1.5">
                  <p>Segunda a Sexta: 08:00 - 19:00</p>
                  <p>Sábado: 08:00 - 14:00</p>
                </div>
              </li>
            </ul>

            <div className="flex space-x-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1">
                <Facebook size={20} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white transition-all transform hover:-translate-y-1">
                <Instagram size={20} />
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Links (3 cols) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="text-lg font-display font-bold text-white mb-6 border-l-4 border-secondary pl-3">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Nossos Serviços', path: '/servicos' },
                { name: 'Preços & Planos', path: '/servicos' },
                { name: 'Quem Somos', path: '/sobre' },
                { name: 'Fale Conosco', path: '/contato' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="group flex items-center text-gray-400 hover:text-secondary transition-colors">
                    <ChevronRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
               <div className="flex items-center text-xs text-gray-500 gap-2">
                 <ShieldCheck size={14} />
                 <span>CNPJ: 19.362.776/0001-80</span>
               </div>
            </div>
          </div>

          {/* Column 3: WhatsApp Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
               {/* WhatsApp Background Icon */}
               <div className="absolute -right-6 -bottom-6 text-green-500/10 pointer-events-none">
                 <MessageCircle size={150} />
               </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <h4 className="text-lg font-bold text-white">Fale pelo WhatsApp</h4>
                </div>
                <p className="text-sm text-gray-400 mb-5">
                  Entre em contato conosco para agendar seu serviço ou tirar dúvidas.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm transition-all"
                    />
                     <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Telefone"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm transition-all"
                    />
                  </div>
                  <div>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-gray-800 text-gray-400">Selecione o serviço desejado</option>
                      <option value="Lavagem a Seco" className="bg-gray-800">Lavagem a Seco</option>
                      <option value="Lavagem de Edredons" className="bg-gray-800">Edredons & Cobertores</option>
                      <option value="Passadoria" className="bg-gray-800">Passadoria</option>
                      <option value="Coleta e Entrega" className="bg-gray-800">Coleta e Entrega</option>
                    </select>
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm resize-none transition-all"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-500/20 group"
                  >
                    <span>Iniciar conversa no WhatsApp</span>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Heartbeat */}
        <div className="border-t border-gray-800/50 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} Royal Clean Lavanderias. CNPJ: 19.362.776/0001-80.
            </div>
            
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-gray-800/80 border border-gray-700/50 backdrop-blur-sm hover:border-secondary/30 transition-colors">
              <a 
                href="https://www.supremasite.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-gray-300 text-sm font-medium hover:text-white transition-colors"
              >
                Desenvolvido com 
                <span className="text-red-500 text-lg animate-heartbeat inline-flex items-center justify-center transform origin-center" role="img" aria-label="coração batendo">
                  ❤️
                </span> 
                pela Suprema Sites Express.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;