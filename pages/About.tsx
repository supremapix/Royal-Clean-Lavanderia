import React from 'react';
import SEOHead from '../components/SEOHead';
import { Star, Users, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Sobre Nós - Royal Clean Lavanderias" 
        description="Conheça a história da Royal Clean. Comprometimento com qualidade, sustentabilidade e atendimento humanizado em Curitiba." 
      />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl font-display font-bold text-primary mb-6">Sobre a Royal Clean</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nascemos com a missão de simplificar a vida dos curitibanos, oferecendo mais do que apenas roupas limpas: entregamos tempo livre e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
               <div className="absolute top-4 -left-4 w-full h-full bg-secondary/10 rounded-2xl z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?q=80&w=800&auto=format&fit=crop" 
                alt="Equipe trabalhando com dedicação na lavanderia" 
                className="rounded-2xl shadow-xl w-full relative z-10"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold text-gray-900 border-l-4 border-secondary pl-4">Nossa História</h2>
              <p className="text-gray-600">
                Fundada no coração do bairro Portão, a <strong>Royal Clean Lavanderias</strong> começou familiar e mantém essa essência até hoje. Entendemos que cada peça de roupa carrega uma história, uma memória ou uma imagem profissional importante.
              </p>
              <p className="text-gray-600">
                Investimos constantemente em máquinas de última geração e produtos biodegradáveis que limpam profundamente sem agredir o meio ambiente ou causar alergias. Somos referência em Curitiba pela pontualidade e qualidade.
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
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-accent">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excelência</h3>
              <p className="text-gray-600 text-sm">Controle de qualidade rigoroso em cada peça que entra e sai da nossa lavanderia.</p>
            </div>
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Atendimento</h3>
              <p className="text-gray-600 text-sm">Equipe treinada para entender sua necessidade e resolver problemas com agilidade.</p>
            </div>
            <div className="p-8 bg-light rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100">
              <div className="bg-white p-4 rounded-full inline-flex items-center justify-center shadow-sm mb-6 text-red-500">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cuidado</h3>
              <p className="text-gray-600 text-sm">Tratamos suas roupas como se fossem nossas. Respeito total às etiquetas e tecidos.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;