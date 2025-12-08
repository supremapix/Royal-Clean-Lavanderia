import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { MapPin, Truck, Shirt, Sparkles, Phone, CheckCircle2, Clock } from 'lucide-react';

// Interface para os dados do bairro
interface NeighborhoodContent {
  title: string;
  description: string;
  heroTitle: string;
  introText: string;
  highlightText: string;
  specificFocus: string; // Ex: "Ideal para condomínios", "Rapidez para comércios"
}

const Neighborhood: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Função helper para capitalizar nomes (fallback)
  const formatName = (str?: string) => {
    if (!str) return '';
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const name = formatName(slug);
  const currentSlug = slug || 'portao';
  const whatsappLink = `https://wa.me/5541996962349?text=Ol%C3%A1!%20Vi%20a%20p%C3%A1gina%20de%20*${encodeURIComponent(name)}*%20e%20quero%20agendar%20uma%20coleta!`;

  // Base de dados de conteúdo rico por bairro
  const neighborhoodData: Record<string, NeighborhoodContent> = {
    'agua-verde': {
      title: 'Lavanderia no Água Verde Curitiba | Coleta e Entrega Grátis',
      description: 'Procurando lavanderia no Água Verde? A Royal Clean oferece lavagem a seco de ternos, camisas e edredons com busca e entrega rápida no bairro Água Verde.',
      heroTitle: 'Sua Lavanderia Premium no <span class="text-accent">Água Verde</span>',
      introText: 'O Água Verde é um dos bairros mais vibrantes de Curitiba, unindo áreas residenciais nobres e um forte comércio. Para atender a exigência dos moradores desta região, a Royal Clean oferece um serviço de lavanderia delivery impecável.',
      highlightText: 'Especialistas em roupas sociais e ternos para os profissionais que trabalham e moram na região.',
      specificFocus: 'Atendimento prioritário em condomínios do Água Verde'
    },
    'vila-izabel': {
      title: 'Lavanderia na Vila Izabel | Lavagem de Edredons e Roupas',
      description: 'Morador da Vila Izabel? Lave seus edredons, cobertores e roupas do dia a dia com a Royal Clean. Delivery rápido na Av. Iguaçu e região.',
      heroTitle: 'Cuidado Completo para Roupas na <span class="text-accent">Vila Izabel</span>',
      introText: 'Aconchegante e familiar, a Vila Izabel merece um serviço que traga praticidade para o lar. Nós coletamos seus edredons pesados e devolvemos higienizados e embalados a vácuo (opcional), prontos para guardar.',
      highlightText: 'Ideal para famílias que precisam de ajuda com o volume de roupas da semana.',
      specificFocus: 'Higienização profunda de Edredons e Cobertores'
    },
    'novo-mundo': {
      title: 'Lavanderia no Novo Mundo Curitiba | Perto do Terminal',
      description: 'Lavanderia com coleta no Novo Mundo. Economize tempo! Lavamos, secamos e passamos. Atendemos República Argentina e rápida do Portão.',
      heroTitle: 'Lavanderia Delivery Rápida no <span class="text-accent">Novo Mundo</span>',
      introText: 'Estando vizinho à nossa sede, o bairro Novo Mundo conta com uma das logísticas mais rápidas da Royal Clean. Atendemos toda a extensão da via rápida e arredores com agilidade.',
      highlightText: 'O melhor custo-benefício para moradores do Novo Mundo.',
      specificFocus: 'Rapidez na Coleta e Entrega'
    },
    'portao': {
      title: 'Lavanderia no Portão Curitiba | A Melhor da Região',
      description: 'Sua lavanderia no Portão, perto do Muffato. Especialistas em lavagem a seco e passadoria. Buscamos e entregamos na sua casa.',
      heroTitle: 'A Lavanderia do Coração do <span class="text-accent">Portão</span>',
      introText: 'Como nossa casa, o bairro Portão recebe atenção especial. Estamos localizados estrategicamente para atender toda a região, do Shopping Palladium até a Igreja do Portão, com rapidez inigualável.',
      highlightText: 'Vizinhança atendida com prioridade máxima.',
      specificFocus: 'Serviço Expresso disponível para o Portão'
    },
    'santa-quiteria': {
      title: 'Lavanderia em Santa Quitéria | Praticidade Total',
      description: 'Chega de varal cheio em Santa Quitéria! Deixe a Royal Clean cuidar das suas roupas. Pacotes de lavagem por quilo e peças avulsas.',
      heroTitle: 'Roupas Limpas e Cheirosas em <span class="text-accent">Santa Quitéria</span>',
      introText: 'Para os moradores de Santa Quitéria, oferecemos a solução perfeita para dias úmidos de Curitiba. Não se preocupe mais com roupas que não secam. Nós lavamos, secamos e entregamos dobradas.',
      highlightText: 'Foco em secagem perfeita e passadoria.',
      specificFocus: 'Ideal para dias de chuva e frio'
    },
    'guaira': {
      title: 'Lavanderia no Guaíra Curitiba | Atendimento Kennedy',
      description: 'Serviço de lavanderia no bairro Guaíra. Atendemos a região da Av. Kennedy com coleta e entrega. Camisas, calças e tapetes.',
      heroTitle: 'Lavanderia de Confiança no <span class="text-accent">Guaíra</span>',
      introText: 'Atendendo a histórica região do Guaíra, a Royal Clean facilita a vida de quem mora próximo à Av. Kennedy e arredores. Cuidamos das suas roupas para você aproveitar o tempo livre.',
      highlightText: 'Serviço completo de passadoria para o dia a dia.',
      specificFocus: 'Passadoria Express'
    },
    'parolin': {
      title: 'Lavanderia no Parolin | Empresas e Residências',
      description: 'Royal Clean atende o Parolin. Lavagem de uniformes, cortinas e roupas pessoais. Solicite coleta via WhatsApp.',
      heroTitle: 'Soluções de Limpeza no <span class="text-accent">Parolin</span>',
      introText: 'Seja para residências ou para as diversas empresas localizadas no Parolin, oferecemos pacotes especiais para uniformes e roupas de uso diário.',
      highlightText: 'Limpeza técnica e remoção de manchas.',
      specificFocus: 'Lavagem de Uniformes e Roupas de Trabalho'
    },
    'centro': {
      title: 'Lavanderia no Centro de Curitiba | Executiva e Delivery',
      description: 'Lavanderia que atende o Centro de Curitiba. Coleta em prédios residenciais e comerciais. Especialista em ternos e roupas sociais.',
      heroTitle: 'Lavanderia Executiva no <span class="text-accent">Centro Cívico e Centro</span>',
      introText: 'A vida no Centro de Curitiba é corrida. Nossa equipe é treinada para realizar coletas rápidas em portarias de prédios, garantindo que você tenha sempre camisas e ternos impecáveis para o trabalho.',
      highlightText: 'Foco total em roupas sociais e alfaiataria.',
      specificFocus: 'Coleta em Portarias e Prédios Comerciais'
    },
    'batel': { // Adicionado extra caso o link exista ou seja criado
      title: 'Lavanderia no Batel | Alta Costura e Peças Delicadas',
      description: 'Lavanderia premium atendendo o Batel. Cuidado especial com vestidos de festa, seda e marcas de luxo. Coleta e entrega discreta.',
      heroTitle: 'Cuidado Premium no <span class="text-accent">Batel</span>',
      introText: 'Para o bairro mais nobre da capital, oferecemos nosso serviço Gold. Tratamento manual de manchas, limpeza à seco (Dry Clean) de alta performance para peças de grife e tecidos delicados.',
      highlightText: 'Especialistas em Alta Costura.',
      specificFocus: 'Lavagem a Seco de Luxo'
    },
    // Adicione fallbacks genéricos inteligentes para outros bairros
  };

  // Lógica para gerar conteúdo se o bairro não estiver na lista específica
  const content: NeighborhoodContent = neighborhoodData[currentSlug] || {
    title: `Lavanderia em ${name} Curitiba | Royal Clean Delivery`,
    description: `Mora em ${name}? A Royal Clean busca e entrega suas roupas em ${name}. Lavagem de edredons, tapetes e roupas do dia a dia com o melhor preço.`,
    heroTitle: `Lavanderia com Coleta e Entrega em <span class="text-accent">${name}</span>`,
    introText: `Moradores do bairro ${name} agora contam com a qualidade Royal Clean! Sabemos que a rotina em ${name} exige praticidade. Por isso, implementamos nossa rota de coleta diária na sua região.`,
    highlightText: `Atendimento personalizado para residências de ${name}.`,
    specificFocus: 'Coleta e Entrega Rápida'
  };

  return (
    <>
      <SEOHead 
        title={content.title} 
        description={content.description} 
      />

      <div className="bg-white font-sans">
        {/* Neighborhood Hero */}
        <div className="relative bg-gray-900 min-h-[400px] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-30 animate-zoom-slow">
            <img 
              src="https://images.unsplash.com/photo-1545173168-9f1947eebb8f?q=80&w=1600&auto=format&fit=crop" 
              alt={`Lavanderia Royal Clean atendendo ${name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primaryDark via-primary to-transparent opacity-90"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white border border-white/20">
              <MapPin size={16} className="text-accent" />
              Rota ativa em {name}
            </div>
            
            <h1 
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight max-w-3xl"
              dangerouslySetInnerHTML={{ __html: content.heroTitle }}
            />
            
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

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Texto Descritivo */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-primary mb-4">
                  Por que a Royal Clean é a escolha certa em {name}?
                </h2>
                <div className="w-20 h-1 bg-secondary rounded-full mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  A Royal Clean não é apenas uma lavanderia, é a extensão da sua casa. Levamos tecnologia de limpeza profissional até o bairro <strong>{name}</strong>.
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
                 <p className="text-gray-700">{content.specificFocus}. Garantimos que suas peças retornem renovadas.</p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 p-4 bg-white shadow-sm rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 shrink-0"><Truck size={20} /></div>
                  <div>
                    <h3 className="font-bold text-gray-900">Delivery Grátis</h3>
                    <p className="text-xs text-gray-500">Consulte rota para {name}</p>
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
                    <p className="text-xs text-gray-500">Entrega em até 48h (consulte)</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Card de Processo / CTA */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-primary to-primaryDark text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                 {/* Decorative Circle */}
                 <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

                 <h3 className="text-2xl font-bold text-center mb-8">Passo a passo para moradores de {name}</h3>
                 
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
                        <p className="text-xs text-blue-100">Escolha o melhor horário</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5 hover:bg-white/20 transition-colors">
                      <span className="text-2xl font-bold text-accent">03</span>
                      <div>
                        <p className="font-bold">Receba Limpo</p>
                        <p className="text-xs text-blue-100">Suas roupas entregues na porta</p>
                      </div>
                    </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-white/10 text-center">
                   <p className="mb-4 text-sm text-blue-100">Pronto para facilitar sua rotina?</p>
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
      </div>
    </>
  );
};

export default Neighborhood;
