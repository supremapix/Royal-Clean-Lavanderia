import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles, Clock, Shirt, CheckCircle2, MapPin, DollarSign } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const Home: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  const neighborhoods = [
    { name: 'Água Verde', slug: 'agua-verde' },
    { name: 'Vila Izabel', slug: 'vila-izabel' },
    { name: 'Novo Mundo', slug: 'novo-mundo' },
    { name: 'Santa Quitéria', slug: 'santa-quiteria' },
    { name: 'Guaíra', slug: 'guaira' },
    { name: 'Parolin', slug: 'parolin' },
    { name: 'Rebouças', slug: 'reboucas' },
    { name: 'Prado Velho', slug: 'prado-velho' },
    { name: 'Lindóia', slug: 'lindoia' },
    { name: 'Hauer', slug: 'hauer' },
    { name: 'Boqueirão', slug: 'boqueirao' },
    { name: 'Centro', slug: 'centro' },
    { name: 'Seminário', slug: 'seminario' },
    { name: 'Fanny', slug: 'fanny' },
    { name: 'Fazendinha', slug: 'fazendinha' },
    { name: 'Campo Comprido', slug: 'campo-comprido' }
  ];

  return (
    <>
      <SEOHead 
        title="Royal Clean - Lavanderia em Curitiba" 
        description="Royal Clean Lavanderias. Praticidade e Qualidade Perto de Você! Coleta e entrega no Portão, Água Verde e região. Agende via WhatsApp." 
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[650px] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Royal Clean Lavanderia Profissional" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primaryDark/90 to-primary/80 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Atendemos Curitiba e Região
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Sua roupa merece um <span className="text-accent relative inline-block">
                tratamento real
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl">
              <strong>Royal Clean Lavanderias</strong> – Praticidade e Qualidade Perto de Você!
              Coleta e entrega gratuita para o bairro Portão e arredores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-center transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <Truck size={20} />
                Agendar Coleta
              </a>
              <a 
                href="#tabela-precos" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-primaryDark text-white font-bold py-4 px-8 rounded-full text-center transition-all flex items-center justify-center"
              >
                Ver Tabela de Preços
              </a>
            </div>
          </div>
        </div>
        
        {/* Curved bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Intro / Value Prop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
               <img 
                 src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?q=80&w=1200&auto=format&fit=crop" 
                 alt="Pilhas de roupas dobradas perfeitamente" 
                 className="rounded-2xl shadow-2xl relative z-10 border-4 border-white"
               />
               <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20 hidden md:block">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-full text-green-600">
                     <Clock size={24} />
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 font-semibold uppercase">Entrega em</p>
                     <p className="font-bold text-gray-900">Até 24 Horas*</p>
                   </div>
                 </div>
               </div>
             </div>
             <div>
               <h2 className="text-secondary font-bold uppercase tracking-wide text-sm mb-2">Royal Clean Lavanderias</h2>
               <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                 Praticidade e Qualidade Perto de Você!
               </h3>
               <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 Se você busca uma lavanderia de confiança no <strong>Portão</strong>, a Royal Clean é a escolha ideal! Oferecemos limpeza profissional para roupas do dia a dia, peças delicadas e edredons.
               </p>
               <ul className="space-y-4 mb-8">
                 {[
                   'Produtos biodegradáveis de alta performance',
                   'Processo de lavagem a seco certificado',
                   'Passadoria impecável (Social e Dia a Dia)',
                   'Atendimento personalizado via WhatsApp'
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                     <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                     {item}
                   </li>
                 ))}
               </ul>
               <Link to="/sobre" className="text-primary font-bold hover:text-primaryDark inline-flex items-center group">
                 Conheça nossa história <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
               </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="py-20 bg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Soluções completas para cuidar das suas roupas com excelência e tecnologia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Shirt size={40} />, 
                title: 'Lavagem Completa', 
                desc: 'Lavagem com água, produtos premium e amaciantes que deixam aquele cheirinho incrível.' 
              },
              { 
                icon: <Sparkles size={40} />, 
                title: 'Lavagem a Seco', 
                desc: 'Ideal para ternos, vestidos de festa e sedas. Remove manchas sem danificar as fibras.' 
              },
              { 
                icon: <Truck size={40} />, 
                title: 'Coleta e Entrega', 
                desc: 'Buscamos e entregamos suas roupas no conforto da sua casa em todo o Portão e região.' 
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-secondary group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section - Home */}
      <section id="tabela-precos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Tabela de Preços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Serviços de qualidade por valores justos e transparentes</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
             <div className="bg-gradient-to-r from-primary to-primaryDark p-6 text-center">
               <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                 <DollarSign size={28} className="text-accent" /> Tabela de Referência
               </h3>
             </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-800">
                  <tr>
                    <th className="px-6 py-4 font-bold text-lg border-b-2 border-primary/20">Serviço</th>
                    <th className="px-6 py-4 font-bold text-lg border-b-2 border-primary/20 text-right">Preço a partir de</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Camisa Social (passada)', 'R$ 17,00'],
                    ['Calça', 'R$ 23,00'],
                    ['Terno Completo', 'R$ 75,00'],
                    ['Vestido Simples', 'R$ 55,00'],
                    ['Vestido de Festa', 'R$ 90,00'],
                    ['Edredom Solteiro', 'R$ 65,00'],
                    ['Edredom Casal', 'R$ 95,00'],
                    ['Lençol (jogo completo)', 'R$ 55,00'],
                    ['Tapete Pequeno', 'R$ 80,00'],
                    ['Roupa por Kg (mínimo 5kg)', 'R$ 29,90/kg']
                  ].map(([item, price], idx) => (
                    <tr key={idx} className="hover:bg-purple-50 transition-colors">
                      <td className="px-6 py-5 text-gray-700 font-medium">{item}</td>
                      <td className="px-6 py-5 text-primary font-bold text-lg text-right">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center italic border-t">
              * Os preços podem variar de acordo com o estado, material e tamanho das peças. Entre em contato para um orçamento personalizado.
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:-translate-y-1 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg inline-flex items-center gap-2"
            >
              <Truck size={20} />
              Solicitar Orçamento Personalizado
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-gradient-to-br from-primary to-primaryDark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
            <MapPin size={32} className="text-accent" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-6">Atendemos Estes Bairros</h2>
          <p className="max-w-2xl mx-auto text-blue-100 mb-10">
            Além do Portão, nossa frota de coleta atende com rapidez as seguintes regiões de Curitiba. 
            Clique no seu bairro para saber mais:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {neighborhoods.map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairros/${bairro.slug}`}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg p-3 text-sm font-medium transition-all hover:-translate-y-1 hover:shadow-lg border border-white/5 block"
              >
                📍 {bairro.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-accent/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-accent/20">
            <div className="md:w-2/3">
               <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Oferta Especial</span>
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Ganhe 10% OFF na primeira lavagem de Edredons!</h2>
               <p className="text-gray-700">Promoção válida para novos clientes. Traga suas cobertas, mantas e edredons para uma higienização profunda contra ácaros.</p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 whitespace-nowrap hover:shadow-xl hover:-translate-y-1"
              >
                Quero meu Desconto
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;