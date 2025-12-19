import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Sparkles, Shirt, CheckCircle2, MapPin, DollarSign, Camera, Star, ArrowRight, Quote, Building2 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import { neighborhoods, staticRoutes, BASE_STRUCTURED_DATA } from '../config/routes';

const Home: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";
  const homeRoute = staticRoutes.find(r => r.path === '/');

  const galleryImages = [
    { 
      url: "/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png", 
      title: "Nossa Estrutura Completa" 
    },
    { 
      url: "/assets/images/Gemini_Generated_Image_o6fqhjo6fqhjo6fq_1766159626826.png", 
      title: "Atendimento Personalizado" 
    },
    { 
      url: "/assets/images/Gemini_Generated_Image_tgsnh9tgsnh9tgsn_1766159656837.png", 
      title: "Equipe Especializada" 
    }
  ];

  const testimonials = [
    {
      name: "Fernanda Oliveira",
      location: "Portão",
      text: "Simplesmente a melhor lavanderia do bairro! O atendimento é nota 10 e as roupas voltam com um perfume maravilhoso. Virei cliente fiel.",
      stars: 5
    },
    {
      name: "Ricardo Alves",
      location: "Água Verde",
      text: "A praticidade do delivery me salvou. Buscam e trazem no horário combinado. As camisas sociais ficam impecáveis para o trabalho, sem nenhum vinco.",
      stars: 5
    },
    {
      name: "Juliana Mendes",
      location: "Vila Izabel",
      text: "Recuperei um edredom que achava que estava perdido. Tiraram todas as manchas e ficou super macio, parecendo novo. Recomendo demais!",
      stars: 5
    }
  ];

  const neighborhoodHighlights = [
    { 
      name: 'Portão', 
      slug: 'portao', 
      desc: 'Nossa sede! Atendimento prioritário e serviço expresso. Próximo ao Shopping Palladium.',
      icon: <Building2 size={20} />
    },
    { 
      name: 'Água Verde', 
      slug: 'agua-verde', 
      desc: 'Lavanderia delivery premium para profissionais. Especialistas em ternos e camisas.',
      icon: <Shirt size={20} />
    },
    { 
      name: 'Centro', 
      slug: 'centro', 
      desc: 'Coleta em portarias de prédios comerciais. Ideal para executivos e empresas.',
      icon: <Building2 size={20} />
    },
    { 
      name: 'Vila Izabel', 
      slug: 'vila-izabel', 
      desc: 'Foco em edredons e roupas de cama. Higienização profunda para famílias.',
      icon: <Sparkles size={20} />
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title={homeRoute?.title || "Royal Clean - Lavanderia Delivery em Curitiba"}
        description={homeRoute?.description || "Lavanderia delivery em Curitiba com coleta e entrega grátis."}
        keywords={homeRoute?.keywords}
        canonical={homeRoute?.canonical}
        structuredData={BASE_STRUCTURED_DATA}
      />
      
      <section className="relative min-h-[650px] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/assets/images/Gemini_Generated_Image_tgsnh9tgsnh9tgsn_1766159656837.png" 
            alt="Royal Clean Lavanderia Profissional em Curitiba" 
            className="w-full h-full object-cover opacity-40 animate-zoom-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primaryDark/95 via-primaryDark/80 to-primary/60 mix-blend-multiply"></div>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-40 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-300/10 rounded-full blur-lg animate-float-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-white/20 animate-fade-in-up [animation-delay:100ms] opacity-0 fill-mode-forwards">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Lavanderia Delivery - Curitiba e Região
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:300ms] opacity-0 fill-mode-forwards">
              Sua roupa merece um <span className="text-accent relative inline-block">
                tratamento real
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up [animation-delay:500ms] opacity-0 fill-mode-forwards">
              <strong>Royal Clean Lavanderias</strong> – A melhor <strong>lavanderia delivery</strong> de Curitiba!
              Coleta e entrega gratuita no Portão, Água Verde e região do <strong>Shopping Palladium</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:700ms] opacity-0 fill-mode-forwards">
              <a 
                href={whatsappLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-full text-center transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 hover:shadow-green-500/30 ring-4 ring-transparent hover:ring-green-400/30"
              >
                <Truck size={20} className="animate-bounce" />
                Agendar Coleta Grátis
              </a>
              <a 
                href="#tabela-precos" 
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-primaryDark text-white font-bold py-4 px-8 rounded-full text-center transition-all flex items-center justify-center hover:shadow-lg hover:shadow-white/20"
              >
                Ver Tabela de Preços
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wide text-sm mb-3 bg-secondary/10 px-3 py-1 rounded-full">
              <Building2 size={14} /> Lavanderia Palladium
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
              Perto do Shopping Palladium
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Localizada estrategicamente no bairro Portão, a Royal Clean é a <strong>lavanderia mais próxima do Shopping Palladium</strong>. 
              Atendemos moradores e trabalhadores da região com <strong>lavanderia delivery</strong> rápida e eficiente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoodHighlights.map((bairro, idx) => (
              <Link 
                key={idx}
                to={`/bairros/${bairro.slug}`}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary hover:-translate-y-1 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {bairro.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{bairro.name}</h3>
                </div>
                <p className="text-gray-600 text-sm">{bairro.desc}</p>
                <span className="text-primary text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Ver serviços <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             
             <div className="relative flex justify-center">
                <div className="relative mx-auto border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[340px] shadow-2xl flex flex-col items-center hover:scale-[1.02] transition-transform duration-500">
                  <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  
                  <div className="rounded-[2rem] overflow-hidden w-full h-full bg-black relative">
                     <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/svb8YCMy0vY?rel=0&modestbranding=1&playsinline=1" 
                      title="Royal Clean YouTube Short" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[380px] h-[640px] bg-gradient-to-tr from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50 animate-pulse"></div>
             </div>

             <div>
               <div className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-wide text-sm mb-3 bg-secondary/10 px-3 py-1 rounded-full">
                 <Star size={14} /> Lavanderia Delivery Curitiba
               </div>
               <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                 Não é Milagre, é <span className="text-primary">Royal Clean!</span>
               </h2>
               <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                 Nossa <strong>lavanderia delivery</strong> busca e entrega suas roupas no conforto da sua casa. Cansado de roupas com cheiro de guardado? 
                 <strong> Dê o play ao lado</strong> e veja a transformação!
               </p>
               <p className="text-gray-900 font-semibold text-lg mb-8">
                 Coleta grátis no Portão, Água Verde e região do <strong>Palladium</strong>.
               </p>

               <ul className="space-y-4 mb-8">
                 {[
                   'Tecnologia que renova as fibras do tecido',
                   'Remoção de manchas difíceis sem estragar',
                   'Edredons fofinhos e livres de ácaros'
                 ].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                     <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                     {item}
                   </li>
                 ))}
               </ul>
               
               <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                   href={whatsappLink} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                 >
                   Quero Minhas Roupas Assim! <Sparkles size={18} />
                 </a>
                 <Link to="/sobre" className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-600 font-bold hover:border-primary hover:text-primary transition-colors text-center">
                   Conhecer a Lavanderia
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Lavanderia delivery completa com lavagem, secagem, passadoria e muito mais.</p>
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
                title: 'Lavanderia Delivery', 
                desc: 'Buscamos e entregamos suas roupas no conforto da sua casa. Grátis no Portão e região!' 
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-secondary group">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tabela-precos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Tabela de Preços</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Lavanderia delivery com preços justos e transparentes</p>
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
              * Os preços podem variar. Entre em contato para orçamento personalizado.
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
              Solicitar Orçamento Grátis
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primaryDark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block p-4 rounded-full bg-white/10 mb-6 shadow-lg backdrop-blur-sm border border-white/10">
            <MapPin size={32} className="text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Lavanderia Delivery em Todos os Bairros</h2>
          <p className="max-w-2xl mx-auto text-blue-100 mb-12 text-lg">
            Nossa <strong>lavanderia delivery</strong> atende Curitiba e região com coleta e entrega grátis.
            Clique no seu bairro para saber mais!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {neighborhoods.map((bairro, idx) => (
              <Link 
                key={idx} 
                to={`/bairros/${bairro.slug}`}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md rounded-xl p-6 transition-all duration-300 hover:bg-white hover:text-primary hover:-translate-y-2 hover:shadow-xl border border-white/10 flex flex-col items-center justify-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="p-3 bg-white/20 rounded-full group-hover:bg-primary/10 transition-colors">
                  <MapPin size={24} className="text-accent group-hover:text-primary transition-colors" />
                </div>
                <span className="font-bold text-lg relative z-10">{bairro.name}</span>
                <span className="text-xs text-blue-200 group-hover:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2">Ver serviços</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-full mb-4">
              <Camera size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">Conheça Nossa Estrutura</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">Equipamentos modernos e equipe dedicada para o melhor cuidado com suas roupas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] bg-gray-200 cursor-pointer">
                <img 
                  src={img.url} 
                  alt={img.title}
                  className="w-full h-full object-cover bg-white transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg border-l-4 border-secondary pl-3">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://www.instagram.com/royalclean" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-bold hover:text-secondary inline-flex items-center gap-2 transition-colors border-b-2 border-transparent hover:border-secondary pb-1"
            >
              Ver mais no Instagram &rarr;
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-accent/20 text-accent rounded-full mb-4">
              <Star size={24} className="fill-accent text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Depoimentos</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">O que nossos clientes dizem sobre nossa lavanderia delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-light p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100 hover:-translate-y-2">
                <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} size={18} className="fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                    <span className="text-xs text-primary font-medium flex items-center gap-1">
                      <MapPin size={10} /> {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-accent/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-accent/20">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
                Pronto para facilitar sua vida?
              </h2>
              <p className="text-gray-600 text-lg">
                Agende agora sua coleta grátis e descubra por que somos a <strong>lavanderia delivery</strong> preferida de Curitiba!
              </p>
            </div>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Truck size={20} />
              Agendar Coleta Grátis
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
