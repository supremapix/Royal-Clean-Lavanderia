import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { MapPin, Phone, Mail, Clock, MessageCircle, Building2, Truck } from 'lucide-react';
import { staticRoutes } from '../config/routes';

const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";
  const contactRoute = staticRoutes.find(r => r.path === '/contato');

  return (
    <>
      <EnhancedSEO 
        title={contactRoute?.title || "Contato e Localização"}
        description={contactRoute?.description || "Entre em contato com a Royal Clean Lavanderias."}
        keywords={contactRoute?.keywords}
        canonical={contactRoute?.canonical}
      />

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Fale Conosco</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              <strong>Lavanderia Palladium</strong> - Próximos ao Shopping Palladium no bairro Portão.
              <strong> Lavanderia delivery</strong> com coleta e entrega grátis!
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-primary to-primaryDark text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={24} />
                  <h3 className="font-bold text-lg">Lavanderia Delivery</h3>
                </div>
                <p className="text-blue-100">Buscamos e entregamos suas roupas em casa. Coleta grátis no Portão, Água Verde, Vila Izabel e região!</p>
              </div>
              <div className="bg-gradient-to-r from-secondary to-orange-500 text-white p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 size={24} />
                  <h3 className="font-bold text-lg">Lavanderia Palladium</h3>
                </div>
                <p className="text-orange-100">Localização estratégica próxima ao Shopping Palladium. Atendemos moradores e trabalhadores da região.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8 border-t-4 border-primary">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Endereço</h3>
                  <p className="text-gray-600">R. Ildefonso Stockler França, 299</p>
                  <p className="text-gray-600">Portão, Curitiba - PR, 81020-040</p>
                  <p className="text-sm text-primary font-medium mt-1">Próximo ao Shopping Palladium</p>
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
                    <MessageCircle size={14} className="mr-1" /> Atendemos via WhatsApp - Lavanderia Delivery
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
                  <a href="mailto:contato@royalcleanlavanderia.top" className="text-gray-600 hover:text-primary">contato@royalcleanlavanderia.top</a>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle size={20} />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>

            <div className="h-[400px] lg:h-auto bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group">
              <img 
                src="/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png" 
                alt="Royal Clean Lavanderia - Portão, Curitiba - Próximo ao Palladium" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex flex-col items-center justify-end pb-12">
                <MapPin className="text-secondary mb-4 animate-bounce" size={48} />
                <p className="text-white font-bold mb-2">Lavanderia Palladium - Portão</p>
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
