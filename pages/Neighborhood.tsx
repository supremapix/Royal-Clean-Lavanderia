import React from 'react';
import { useParams, Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { MapPin, Truck, Shirt, Sparkles, Phone, CheckCircle2, Clock, Building2 } from 'lucide-react';
import { getNeighborhoodBySlug, neighborhoods } from '../config/routes';

const Neighborhood: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const formatName = (str?: string) => {
    if (!str) return '';
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const currentSlug = slug || 'portao';
  const neighborhoodConfig = getNeighborhoodBySlug(currentSlug);
  const name = neighborhoodConfig?.name || formatName(slug);
  const whatsappLink = `https://wa.me/5541996962349?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20*${encodeURIComponent(name)}*%20e%20quero%20agendar%20uma%20coleta!`;

  const content = neighborhoodConfig || {
    name: name,
    slug: currentSlug,
    description: `Lavanderia delivery em ${name} Curitiba. Coleta e entrega grátis. Lavagem de edredons, tapetes e roupas.`,
    introText: `Moradores do bairro ${name} agora contam com a qualidade Royal Clean! Rota de coleta diária na sua região.`,
    highlightText: `Atendimento personalizado para residências de ${name}.`,
    specificFocus: 'Coleta e Entrega Rápida',
    keywords: [`lavanderia ${currentSlug}`, `lavanderia delivery ${currentSlug} curitiba`]
  };

  return (
    <>
      <EnhancedSEO 
        title={`Lavanderia ${name} | Delivery Grátis`}
        description={content.description}
        keywords={content.keywords}
        canonical={`https://www.royalcleanlavanderia.top/bairros/${currentSlug}`}
      />

      <div className="bg-white font-sans">
        <div className="relative bg-gray-900 min-h-[400px] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30 animate-zoom-slow">
            <img 
              src="/assets/images/Gemini_Generated_Image_tgsnh9tgsnh9tgsn_1766159656837.png" 
              alt={`Lavanderia Delivery ${name} - Royal Clean Curitiba`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primaryDark via-primary to-transparent opacity-90"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white border border-white/20">
              <MapPin size={16} className="text-accent" />
              Lavanderia Delivery em {name}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Lavanderia Delivery no <span className="text-accent">{name}</span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
              {content.introText}
            </p>
            
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full shadow-lg inline-flex items-center gap-3 hover:scale-105 transition-transform group"
            >
              <Phone size={20} className="group-hover:animate-swing" />
              Agendar Coleta em {name}
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-wide text-sm mb-3">
                  <Building2 size={16} /> Lavanderia Palladium
                </div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Por que escolher a Royal Clean em {name}?
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A Royal Clean é a melhor <strong>lavanderia delivery</strong> de Curitiba. Levamos tecnologia de limpeza profissional 
                  até o bairro <strong>{name}</strong> com coleta e entrega grátis.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed font-medium text-primaryDark">
                  {content.highlightText}
                </p>
              </div>

              <div className="bg-light p-6 rounded-2xl border border-gray-100">
                 <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <Sparkles className="text-secondary" size={20} />
                   Destaque para {name}:
                 </h3>
                 <p className="text-gray-700">{content.specificFocus}. Nossa <strong>lavanderia delivery</strong> garante roupas renovadas.</p>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-2xl">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Truck className="text-primary" size={20} />
                  Lavanderia Delivery - Coleta Grátis
                </h3>
                <p className="text-gray-600 text-sm">
                  Buscamos suas roupas em <strong>{name}</strong> e entregamos limpas, passadas e embaladas. 
                  Próximos ao <strong>Shopping Palladium</strong>, atendemos toda a região com agilidade.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0"><Truck size={20} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Delivery Grátis</h3>
                    <p className="text-xs text-gray-500">Coleta em {name}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-purple-100 p-2 rounded-full text-primary shrink-0"><Shirt size={20} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Passadoria</h3>
                    <p className="text-xs text-gray-500">Camisas e ternos alinhados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0"><CheckCircle2 size={20} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Anti-Bactericida</h3>
                    <p className="text-xs text-gray-500">Produtos certificados</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 p-2 rounded-full text-secondary shrink-0"><Clock size={20} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Rapidez</h3>
                    <p className="text-xs text-gray-500">Entrega em até 48h</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-primary to-primaryDark text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                 <h3 className="text-2xl font-bold text-center mb-8">Como funciona em {name}</h3>
                 
                 <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                      <span className="text-2xl font-bold text-accent">01</span>
                      <div>
                        <p className="font-bold">Solicite pelo WhatsApp</p>
                        <p className="text-xs text-blue-100">Envie sua localização em {name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                      <span className="text-2xl font-bold text-accent">02</span>
                      <div>
                        <p className="font-bold">Agende a Coleta</p>
                        <p className="text-xs text-blue-100">Lavanderia delivery no seu horário</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                      <span className="text-2xl font-bold text-accent">03</span>
                      <div>
                        <p className="font-bold">Receba Limpo</p>
                        <p className="text-xs text-blue-100">Roupas entregues na porta</p>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 text-center">
                   <p className="mb-4 text-sm text-blue-100">Lavanderia Palladium - {name}</p>
                   <a 
                     href={whatsappLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="block w-full bg-white text-primaryDark font-bold py-3 rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
                   >
                     Chamar Coleta Agora
                   </a>
                 </div>
              </div>
              
              <div className="mt-6 text-center">
                 <Link to="/" className="text-gray-500 font-medium hover:text-primary transition-colors text-sm">
                    &larr; Ver outros bairros atendidos
                 </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-display font-bold text-primary mb-8 text-center">
              Outros Bairros com Lavanderia Delivery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {neighborhoods.filter(n => n.slug !== currentSlug).slice(0, 12).map((bairro, idx) => (
                <Link 
                  key={idx} 
                  to={`/bairros/${bairro.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all text-center hover:-translate-y-1 border border-gray-100"
                >
                  <MapPin size={16} className="text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-700">{bairro.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Neighborhood;
