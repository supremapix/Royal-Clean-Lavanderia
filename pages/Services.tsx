import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { CheckCircle2, DollarSign, ArrowRight, Truck, Sparkles, Shirt, Building2 } from 'lucide-react';
import { staticRoutes } from '../config/routes';

const Services: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";
  const servicesRoute = staticRoutes.find(r => r.path === '/servicos');

  const servicesList = [
    {
      title: "Lavagem a Seco (Dry Clean)",
      description: "Processo especializado para ternos, blazers, vestidos de seda e tecidos delicados. Nossa lavanderia delivery busca e entrega suas peças prontas.",
      features: ["Preserva as fibras do tecido", "Evita encolhimento", "Remove manchas de óleo e gordura"],
      image: "/assets/images/Gemini_Generated_Image_o6fqhjo6fqhjo6fq_1766159626826.png"
    },
    {
      title: "Edredons e Cobertores",
      description: "Higienização profunda com máquinas industriais. Lavanderia delivery especializada em peças volumosas com secagem controlada.",
      features: ["Secagem total garantida", "Anti-ácaros e fungos", "Embalagem pronta para guardar"],
      image: "/assets/images/Gemini_Generated_Image_tgsnh9tgsnh9tgsn_1766159656837.png"
    },
    {
      title: "Passadoria Express",
      description: "Camisas sociais e ternos alinhados para executivos. Nossa lavanderia Palladium atende profissionais da região com qualidade premium.",
      features: ["Camisas sociais impecáveis", "Vincos alinhados", "Cabides inclusos"],
      image: "/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png"
    },
    {
      title: "Tapetes e Cortinas",
      description: "Remoção de sujeira pesada, poeira e odores. Lavanderia delivery com retirada e instalação opcional.",
      features: ["Retirada e instalação (consulte)", "Secagem em estufa", "Tratamento anti-odor"],
      image: "/assets/images/Gemini_Generated_Image_o6fqhjo6fqhjo6fq_1766159626826.png"
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title={servicesRoute?.title || "Serviços e Preços"}
        description={servicesRoute?.description || "Lavagem a seco, edredons, tapetes e passadoria com coleta grátis."}
        keywords={servicesRoute?.keywords}
        canonical={servicesRoute?.canonical}
      />
      
      <div className="bg-gray-50 min-h-screen pb-20">
        <div className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-display font-bold mb-4">Serviços de Lavanderia Delivery</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">
              <strong>Lavanderia Palladium</strong> - Tecnologia de ponta aliada ao cuidado artesanal. 
              Coleta e entrega grátis no Portão e região.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="text-primary" size={24} />
                <h3 className="font-bold text-lg">Lavanderia Delivery</h3>
              </div>
              <p className="text-gray-600 text-sm">Buscamos e entregamos suas roupas no conforto da sua casa. Coleta grátis em Curitiba!</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="text-secondary" size={24} />
                <h3 className="font-bold text-lg">Lavanderia Palladium</h3>
              </div>
              <p className="text-gray-600 text-sm">Próximos ao Shopping Palladium, atendemos Portão, Água Verde e região com agilidade.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="text-accent" size={24} />
                <h3 className="font-bold text-lg">Qualidade Premium</h3>
              </div>
              <p className="text-gray-600 text-sm">Produtos biodegradáveis e máquinas de última geração para cuidar das suas roupas.</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-10 mb-20 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-center">
              <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <DollarSign size={24} /> Tabela de Preços - Lavanderia Delivery
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-50 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-bold border-b">Peça / Serviço</th>
                    <th className="px-6 py-4 font-bold border-b text-right">A partir de</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Camisa Social (Passada)', 'R$ 17,00'],
                    ['Calça', 'R$ 23,00'],
                    ['Terno Completo', 'R$ 75,00'],
                    ['Vestido Simples', 'R$ 55,00'],
                    ['Vestido de Festa', 'R$ 90,00'],
                    ['Edredom Solteiro', 'R$ 65,00'],
                    ['Edredom Casal', 'R$ 95,00'],
                    ['Lençol (Jogo Completo)', 'R$ 55,00'],
                    ['Tapete Pequeno', 'R$ 80,00'],
                    ['Roupa por Kg (mín 5kg)', 'R$ 29,90/kg']
                  ].map(([item, price], idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-700">{item}</td>
                      <td className="px-6 py-4 text-primary font-bold text-right">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-xs text-gray-500 text-center italic border-t">
              * Os preços podem variar de acordo com o estado, material e tamanho das peças. Entre em contato para um orçamento exato.
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary mb-4">Nossos Serviços em Detalhes</h2>
            <p className="text-gray-600">Lavanderia delivery com qualidade profissional</p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row group hover:shadow-xl transition-shadow duration-300">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{service.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle2 size={18} className="text-secondary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg hover:-translate-y-0.5 group"
                    >
                      Solicitar Orçamento
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
