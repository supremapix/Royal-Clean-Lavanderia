import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { MapPin, Truck, Shirt, Sparkles, Phone } from 'lucide-react';

const Neighborhood: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Função helper para capitalizar nomes
  const formatName = (str?: string) => {
    if (!str) return '';
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const name = formatName(slug);
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  // Conteúdo específico caso necessário, ou genérico otimizado
  const getDescription = (neighborhoodName: string) => {
    return `Moradores do bairro ${neighborhoodName} agora contam com o melhor serviço de lavanderia da região! A Royal Clean oferece coleta e entrega gratuita para ${neighborhoodName}, garantindo praticidade e roupas impecáveis sem sair de casa.`;
  };

  return (
    <>
      <SEOHead 
        title={`Lavanderia em ${name} com Coleta e Entrega | Royal Clean`} 
        description={`Procurando lavanderia no bairro ${name}? A Royal Clean busca e entrega suas roupas em ${name}. Lavagem a seco, edredons e passadoria. Agende pelo WhatsApp!`} 
      />

      <div className="bg-white">
        {/* Neighborhood Hero */}
        <div className="relative bg-gray-900 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1517677208171-0bc12f9ae190?q=80&w=1600&auto=format&fit=crop" 
              alt={`Lavanderia atendendo ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primaryDark to-primary opacity-90"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white border border-white/20">
              <MapPin size={16} className="text-accent" />
              Atendemos sua região
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Lavanderia no bairro <span className="text-accent">{name}</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Chega de perder tempo lavando e passando! A Royal Clean vai até você em {name}.
            </p>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full shadow-lg inline-flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Phone size={20} />
              Agendar Coleta em {name}
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                Por que escolher a Royal Clean em {name}?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {getDescription(name)}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Sabemos que a rotina de quem mora ou trabalha em <strong>{name}</strong> é corrida. Por isso, nosso serviço de <strong>Delivery (Leva e Traz)</strong> foi desenhado para facilitar sua vida. Cuidamos de camisas sociais, ternos, vestidos de festa, tapetes, cortinas e edredons pesados.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full text-primary"><Truck /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Coleta e Entrega Gratuita</h3>
                    <p className="text-sm text-gray-500">Consulte condições para {name}</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full text-primary"><Sparkles /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Lavagem a Seco Especializada</h3>
                    <p className="text-sm text-gray-500">Ideal para roupas delicadas</p>
                  </div>
                </li>
                <li className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-primary/10 p-2 rounded-full text-primary"><Shirt /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Passadoria Profissional</h3>
                    <p className="text-sm text-gray-500">Roupas alinhadas e prontas para uso</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-light p-8 rounded-3xl border border-gray-100 shadow-xl">
               <h3 className="text-xl font-bold text-center mb-6">Como funciona em {name}?</h3>
               <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-gray-200">
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold z-10 shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Você Agenda</h4>
                      <p className="text-sm text-gray-600">Chame no WhatsApp e solicite a coleta no seu endereço em {name}.</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold z-10 shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Nós Buscamos</h4>
                      <p className="text-sm text-gray-600">Nosso motorista recolhe suas peças com segurança.</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-primaryDark flex items-center justify-center font-bold z-10 shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Cuidamos de Tudo</h4>
                      <p className="text-sm text-gray-600">Lavamos, secamos e passamos com tecnologia profissional.</p>
                    </div>
                  </div>
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-10 shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900">Entregamos Pronta</h4>
                      <p className="text-sm text-gray-600">Devolvemos suas roupas limpas e cheirosas em {name}.</p>
                    </div>
                  </div>
               </div>
               
               <div className="mt-8 text-center">
                 <Link to="/" className="text-primary font-semibold hover:underline">
                    &larr; Voltar para Home
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Neighborhood;