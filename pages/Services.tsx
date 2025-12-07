import React from 'react';
import SEOHead from '../components/SEOHead';
import { CheckCircle2, DollarSign, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const whatsappLink = "https://wa.me/5541996962349?text=Ol%C3%A1%20achei%20seu%20*site%20no%20Google!*";

  const servicesList = [
    {
      title: "Lavagem a Seco (Dry Clean)",
      description: "Processo especializado que utiliza solventes químicos ao invés de água. Ideal para ternos, blazers, vestidos de seda, lã e tecidos delicados.",
      features: ["Preserva as fibras", "Evita encolhimento", "Remove manchas de óleo/gordura"],
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Edredons e Cobertores",
      description: "Higienização profunda para peças volumosas. Utilizamos máquinas industriais de grande capacidade e secagem controlada.",
      features: ["Secagem total", "Anti-ácaros e fungos", "Embalagem pronta para guardar"],
      image: "https://images.unsplash.com/photo-1517677208171-0bc12f9ae190?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Passadoria Express",
      description: "Entregamos suas roupas lisas, alinhadas e prontas para uso. Perfeito para camisas sociais e uniformes.",
      features: ["Camisas sociais impecáveis", "Vincos alinhados", "Cabides inclusos"],
      image: "https://images.unsplash.com/photo-1489274495757-95c7c83700c0?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Tapetes e Cortinas",
      description: "Remoção de sujeira pesada, poeira e odores. Processo específico para cada tipo de material.",
      features: ["Retirada e instalação (consulte)", "Secagem em estufa", "Tratamento anti-odor"],
      image: "https://images.unsplash.com/photo-1574519655906-695034c5478c?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Nossos Serviços e Preços | Royal Clean" 
        description="Confira nossos serviços: lavagem a seco, tapetes, cortinas, edredons e passadoria. Preços competitivos a partir de R$ 17,00." 
      />
      
      <div className="bg-gray-50 min-h-screen pb-20">
        {/* Header */}
        <div className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl font-display font-bold mb-4">Nossos Serviços</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg">Tecnologia de ponta aliada ao cuidado artesanal para garantir a maior durabilidade das suas peças.</p>
          </div>
        </div>

        {/* Pricing Table Section */}
        <div className="container mx-auto px-4 -mt-10 mb-20 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-100">
            <div className="bg-gradient-to-r from-primary to-secondary p-4 text-center">
              <h2 className="text-xl font-bold text-white flex items-center justify-center gap-2">
                <DollarSign size={24} /> Tabela de Preços Referencial
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

        {/* Detailed Services */}
        <div className="container mx-auto px-4">
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