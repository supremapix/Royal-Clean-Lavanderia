import React from 'react';
import SEOHead from '../components/SEOHead';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  return (
    <>
      <SEOHead 
        title="Fale Conosco - Royal Clean Lavanderias" 
        description="Entre em contato com a Royal Clean. Endereço no Portão, telefone, WhatsApp e horário de funcionamento. Estamos prontos para te atender." 
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Fale Conosco</h1>
            <p className="text-gray-600">Estamos prontos para atender você. Escolha o melhor canal de comunicação.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8 border-t-4 border-primary">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Endereço</h3>
                  <p className="text-gray-600">R. Ildefonso Stockler França, 299</p>
                  <p className="text-gray-600">Portão, Curitiba - PR, 81020-040</p>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=R.+Ildefonso+Stockler+França,+299+-+Portão,+Curitiba+-+PR" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-secondary text-sm font-semibold mt-2 inline-block hover:underline"
                  >
                    Ver no Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Telefones</h3>
                  <p className="text-gray-600">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">(41) 99696-2349</a>
                  </p>
                  <p className="text-sm text-green-600 flex items-center mt-1 font-medium">
                    <MessageCircle size={14} className="mr-1" /> Atendemos via WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 08:00 - 19:00</p>
                  <p className="text-gray-600">Sábado: 08:00 - 14:00</p>
                  <p className="text-gray-500 text-sm mt-1">Domingo: Fechado</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Email</h3>
                  <a href="mailto:contato@supremasite.com.br" className="text-gray-600 hover:text-primary">contato@supremasite.com.br</a>
                </div>
              </div>
            </div>

            {/* Map Area */}
            <div className="h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Mapa da localização no bairro Portão" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col items-center justify-end pb-12">
                <MapPin className="text-secondary mb-4 animate-bounce" size={48} />
                <a 
                   href="https://www.google.com/maps/search/?api=1&query=R.+Ildefonso+Stockler+França,+299+-+Portão,+Curitiba+-+PR" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  Abrir Mapa Interativo
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;