import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { Star, Users, Heart, Award, Truck, Building2 } from 'lucide-react';
import { staticRoutes } from '../config/routes';

const About: React.FC = () => {
  const aboutRoute = staticRoutes.find(r => r.path === '/sobre');

  return (
    <>
      <EnhancedSEO 
        title={aboutRoute?.title || "Sobre Nós"}
        description={aboutRoute?.description || "Conheça a história da Royal Clean Lavanderias."}
        keywords={aboutRoute?.keywords}
        canonical={aboutRoute?.canonical}
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl font-display font-bold text-primary mb-6">Sobre a Royal Clean Lavanderias</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              A melhor <strong>lavanderia delivery</strong> de Curitiba. Simplificamos a vida dos curitibanos desde 2019, 
              oferecendo mais do que roupas limpas: entregamos tempo livre e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
               <div className="absolute top-4 -left-4 w-full h-full bg-secondary/10 rounded-2xl z-0"></div>
              <img 
                src="/assets/images/Gemini_Generated_Image_o6fqhjo6fqhjo6fq_1766159626826.png" 
                alt="Equipe Royal Clean - Lavanderia Delivery Curitiba" 
                className="rounded-2xl shadow-xl w-full relative z-10"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 border-l-4 border-secondary pl-4">Nossa História</h2>
              <p className="text-gray-600">
                Fundada no coração do bairro Portão, próximo ao <strong>Shopping Palladium</strong>, a <strong>Royal Clean Lavanderias</strong> 
                começou como um negócio familiar e mantém essa essência até hoje.
              </p>
              <p className="text-gray-600">
                Pioneiros em <strong>lavanderia delivery</strong> na região, investimos constantemente em máquinas de última geração e produtos 
                biodegradáveis que limpam profundamente sem agredir o meio ambiente.
              </p>
              <p className="text-gray-600">
                Hoje somos referência em Curitiba pela pontualidade e qualidade, atendendo bairros como Portão, Água Verde, 
                Vila Izabel, Centro e região do <strong>Palladium</strong>.
              </p>
              <div className="pt-4 flex gap-4">
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">5+</span>
                    <span className="text-sm text-gray-500">Anos de Mercado</span>
                 </div>
                 <div className="flex flex-col border-l border-gray-200 pl-4">
                    <span className="text-3xl font-bold text-primary">10k+</span>
                    <span className="text-sm text-gray-500">Peças Lavadas</span>
                 </div>
                 <div className="flex flex-col border-l border-gray-200 pl-4">
                    <span className="text-3xl font-bold text-primary">16</span>
                    <span className="text-sm text-gray-500">Bairros Atendidos</span>
                 </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-secondary font-bold uppercase tracking-wide text-sm mb-3">
                  <Building2 size={16} /> Lavanderia Palladium
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Localização Estratégica
                </h3>
                <p className="text-gray-600 mb-4">
                  Nossa sede no Portão está a poucos minutos do <strong>Shopping Palladium</strong>, facilitando a vida de quem 
                  trabalha ou mora na região. Oferecemos <strong>lavanderia delivery</strong> com coleta e entrega grátis.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <Truck size={16} className="text-primary" />
                    Coleta e entrega grátis no Portão
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <Star size={16} className="text-accent" />
                    Atendimento próximo ao Palladium
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="/assets/images/Gemini_Generated_Image_tgsnh9tgsnh9tgsn_1766159656837.png" 
                  alt="Lavanderia Palladium - Royal Clean" 
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-accent">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excelência</h3>
              <p className="text-gray-600 text-sm">Controle de qualidade rigoroso em cada peça. Nossa lavanderia delivery garante resultados impecáveis.</p>
            </div>
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Atendimento</h3>
              <p className="text-gray-600 text-sm">Equipe treinada para entender sua necessidade. Lavanderia Palladium com atendimento humanizado.</p>
            </div>
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-red-500">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cuidado</h3>
              <p className="text-gray-600 text-sm">Tratamos suas roupas como se fossem nossas. Respeito total às etiquetas e tecidos delicados.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
