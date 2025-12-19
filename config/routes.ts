export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage?: string;
  structuredData?: object;
}

export interface NeighborhoodConfig {
  name: string;
  slug: string;
  description: string;
  introText: string;
  highlightText: string;
  specificFocus: string;
  keywords: string[];
}

const BASE_URL = 'https://www.royalcleanlavanderia.top';
const DEFAULT_OG_IMAGE = '/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png';

export const neighborhoods: NeighborhoodConfig[] = [
  {
    name: 'Água Verde',
    slug: 'agua-verde',
    description: 'Lavanderia delivery no Água Verde com coleta e entrega grátis. Especialistas em ternos, camisas sociais e edredons. Atendemos toda região do Água Verde.',
    introText: 'O Água Verde é um dos bairros mais vibrantes de Curitiba. A Royal Clean oferece lavanderia delivery premium com coleta e entrega grátis. Próximo ao Shopping Palladium, atendemos residências e empresas.',
    highlightText: 'Especialistas em roupas sociais para profissionais que trabalham na região.',
    specificFocus: 'Atendimento prioritário em condomínios do Água Verde',
    keywords: ['lavanderia agua verde', 'lavanderia delivery agua verde', 'lavanderia palladium', 'lavar roupa agua verde curitiba']
  },
  {
    name: 'Vila Izabel',
    slug: 'vila-izabel',
    description: 'Lavanderia na Vila Izabel. Lavagem de edredons, cobertores e roupas. Delivery rápido na Av. Iguaçu e região.',
    introText: 'Aconchegante e familiar, a Vila Izabel merece um serviço que traga praticidade. Coletamos seus edredons pesados e devolvemos higienizados e embalados.',
    highlightText: 'Ideal para famílias que precisam de ajuda com o volume de roupas.',
    specificFocus: 'Higienização profunda de Edredons e Cobertores',
    keywords: ['lavanderia vila izabel', 'lavanderia delivery vila izabel', 'lavar edredom vila izabel']
  },
  {
    name: 'Novo Mundo',
    slug: 'novo-mundo',
    description: 'Lavanderia com coleta no Novo Mundo. Lavamos, secamos e passamos. Atendemos República Argentina e região do Portão.',
    introText: 'Vizinho à nossa sede, o Novo Mundo conta com logística rápida da Royal Clean. Atendemos toda a via rápida e arredores.',
    highlightText: 'O melhor custo-benefício para moradores do Novo Mundo.',
    specificFocus: 'Rapidez na Coleta e Entrega',
    keywords: ['lavanderia novo mundo', 'lavanderia delivery novo mundo curitiba']
  },
  {
    name: 'Santa Quitéria',
    slug: 'santa-quiteria',
    description: 'Lavanderia em Santa Quitéria com delivery. Pacotes de lavagem por quilo e peças avulsas. Coleta grátis.',
    introText: 'Para moradores de Santa Quitéria, oferecemos a solução perfeita para dias úmidos de Curitiba. Lavamos, secamos e entregamos dobradas.',
    highlightText: 'Foco em secagem perfeita e passadoria.',
    specificFocus: 'Ideal para dias de chuva e frio',
    keywords: ['lavanderia santa quiteria', 'lavanderia delivery santa quiteria']
  },
  {
    name: 'Guaíra',
    slug: 'guaira',
    description: 'Lavanderia no bairro Guaíra com coleta e entrega. Camisas, calças e tapetes. Atendemos Av. Kennedy.',
    introText: 'Atendendo a histórica região do Guaíra, a Royal Clean facilita a vida de quem mora próximo à Av. Kennedy.',
    highlightText: 'Serviço completo de passadoria para o dia a dia.',
    specificFocus: 'Passadoria Express',
    keywords: ['lavanderia guaira', 'lavanderia delivery guaira curitiba']
  },
  {
    name: 'Parolin',
    slug: 'parolin',
    description: 'Royal Clean atende o Parolin. Lavagem de uniformes, cortinas e roupas pessoais.',
    introText: 'Para residências e empresas do Parolin, oferecemos pacotes especiais para uniformes e roupas de uso diário.',
    highlightText: 'Limpeza técnica e remoção de manchas.',
    specificFocus: 'Lavagem de Uniformes e Roupas de Trabalho',
    keywords: ['lavanderia parolin', 'lavanderia delivery parolin']
  },
  {
    name: 'Rebouças',
    slug: 'reboucas',
    description: 'Lavanderia no Rebouças com delivery gratuito. Lavagem a seco, edredons e passadoria profissional.',
    introText: 'No coração comercial do Rebouças, oferecemos lavanderia delivery para empresas e residências com agilidade.',
    highlightText: 'Atendimento empresarial e residencial.',
    specificFocus: 'Lavanderia para Empresas e Comércios',
    keywords: ['lavanderia reboucas', 'lavanderia delivery reboucas curitiba']
  },
  {
    name: 'Prado Velho',
    slug: 'prado-velho',
    description: 'Lavanderia no Prado Velho próximo à PUC-PR. Lavagem estudantil e delivery para universitários.',
    introText: 'Próximo às universidades, atendemos estudantes e moradores do Prado Velho com preços acessíveis.',
    highlightText: 'Preços especiais para estudantes.',
    specificFocus: 'Lavanderia Universitária',
    keywords: ['lavanderia prado velho', 'lavanderia puc curitiba', 'lavanderia estudante curitiba']
  },
  {
    name: 'Lindóia',
    slug: 'lindoia',
    description: 'Lavanderia na Lindóia com coleta e entrega. Lavamos roupas, edredons e tapetes.',
    introText: 'Moradores da Lindóia contam com a qualidade Royal Clean. Rota de coleta diária na região.',
    highlightText: 'Atendimento personalizado para residências.',
    specificFocus: 'Coleta e Entrega Rápida',
    keywords: ['lavanderia lindoia', 'lavanderia delivery lindoia curitiba']
  },
  {
    name: 'Hauer',
    slug: 'hauer',
    description: 'Lavanderia no Hauer com delivery. Lavagem a seco, edredons e roupas do dia a dia.',
    introText: 'No Hauer, oferecemos praticidade total com coleta e entrega no conforto da sua casa.',
    highlightText: 'Praticidade para sua rotina.',
    specificFocus: 'Delivery Residencial',
    keywords: ['lavanderia hauer', 'lavanderia delivery hauer curitiba']
  },
  {
    name: 'Boqueirão',
    slug: 'boqueirao',
    description: 'Lavanderia no Boqueirão com coleta grátis. Lavamos edredons, ternos e roupas por quilo.',
    introText: 'Atendemos o Boqueirão e região com rota de coleta dedicada. Qualidade e preço justo.',
    highlightText: 'Excelente custo-benefício.',
    specificFocus: 'Lavagem por Quilo Econômica',
    keywords: ['lavanderia boqueirao', 'lavanderia delivery boqueirao curitiba']
  },
  {
    name: 'Centro',
    slug: 'centro',
    description: 'Lavanderia no Centro de Curitiba. Coleta em prédios comerciais. Especialista em ternos e roupas sociais.',
    introText: 'A vida no Centro é corrida. Nossa equipe realiza coletas rápidas em portarias de prédios.',
    highlightText: 'Foco total em roupas sociais e alfaiataria.',
    specificFocus: 'Coleta em Portarias e Prédios Comerciais',
    keywords: ['lavanderia centro curitiba', 'lavanderia delivery centro curitiba', 'lavar terno centro']
  },
  {
    name: 'Seminário',
    slug: 'seminario',
    description: 'Lavanderia no Seminário com delivery. Lavagem de edredons, tapetes e roupas finas.',
    introText: 'No tranquilo bairro Seminário, oferecemos serviço premium com coleta agendada.',
    highlightText: 'Atendimento premium para o Seminário.',
    specificFocus: 'Lavanderia Premium',
    keywords: ['lavanderia seminario', 'lavanderia delivery seminario curitiba']
  },
  {
    name: 'Fanny',
    slug: 'fanny',
    description: 'Lavanderia no Fanny com coleta e entrega grátis. Roupas limpas e bem passadas.',
    introText: 'Moradores do Fanny contam com nossa rota de coleta diária e preços competitivos.',
    highlightText: 'Delivery rápido e econômico.',
    specificFocus: 'Coleta Diária',
    keywords: ['lavanderia fanny', 'lavanderia delivery fanny curitiba']
  },
  {
    name: 'Fazendinha',
    slug: 'fazendinha',
    description: 'Lavanderia na Fazendinha com delivery. Lavamos edredons, cobertores e roupas do dia a dia.',
    introText: 'Na Fazendinha, levamos praticidade até você com coleta e entrega no horário combinado.',
    highlightText: 'Pontualidade garantida.',
    specificFocus: 'Entrega Pontual',
    keywords: ['lavanderia fazendinha', 'lavanderia delivery fazendinha curitiba']
  },
  {
    name: 'Campo Comprido',
    slug: 'campo-comprido',
    description: 'Lavanderia no Campo Comprido com coleta grátis. Lavagem a seco, edredons e passadoria.',
    introText: 'Atendemos o Campo Comprido com a mesma qualidade e preços da nossa sede no Portão.',
    highlightText: 'Qualidade Royal Clean no Campo Comprido.',
    specificFocus: 'Lavagem Completa',
    keywords: ['lavanderia campo comprido', 'lavanderia delivery campo comprido curitiba']
  },
  {
    name: 'Portão',
    slug: 'portao',
    description: 'Lavanderia no Portão, sede da Royal Clean. Perto do Shopping Palladium. Lavagem a seco e passadoria.',
    introText: 'Nossa sede no Portão garante atendimento prioritário. Estamos próximos ao Shopping Palladium.',
    highlightText: 'Vizinhança atendida com prioridade máxima.',
    specificFocus: 'Serviço Expresso disponível',
    keywords: ['lavanderia portao', 'lavanderia palladium', 'lavanderia delivery portao curitiba', 'royal clean portao']
  }
];

export const staticRoutes: RouteConfig[] = [
  {
    path: '/',
    title: 'Royal Clean - Lavanderia Delivery em Curitiba | Palladium',
    description: 'Royal Clean Lavanderias - Lavanderia delivery em Curitiba com coleta e entrega grátis. Perto do Shopping Palladium. Edredons, ternos e roupas do dia a dia.',
    keywords: ['lavanderia curitiba', 'lavanderia delivery curitiba', 'lavanderia palladium', 'royal clean', 'lavar edredom curitiba', 'lavanderia portao'],
    canonical: BASE_URL,
    ogImage: DEFAULT_OG_IMAGE
  },
  {
    path: '/servicos',
    title: 'Serviços e Preços | Royal Clean Lavanderia Delivery',
    description: 'Lavagem a seco, edredons, tapetes, cortinas e passadoria. Preços a partir de R$ 17. Lavanderia delivery com coleta grátis em Curitiba.',
    keywords: ['lavagem a seco curitiba', 'lavar edredom curitiba', 'lavanderia preços', 'passadoria curitiba', 'lavanderia delivery'],
    canonical: `${BASE_URL}/servicos`,
    ogImage: DEFAULT_OG_IMAGE
  },
  {
    path: '/sobre',
    title: 'Sobre Nós | Royal Clean Lavanderia Curitiba',
    description: 'Conheça a Royal Clean Lavanderias. Qualidade, sustentabilidade e atendimento humanizado no Portão e região de Curitiba desde 2019.',
    keywords: ['royal clean historia', 'lavanderia portao curitiba', 'lavanderia qualidade curitiba'],
    canonical: `${BASE_URL}/sobre`,
    ogImage: DEFAULT_OG_IMAGE
  },
  {
    path: '/contato',
    title: 'Contato e Localização | Royal Clean Lavanderia',
    description: 'Entre em contato com a Royal Clean. Endereço no Portão, WhatsApp (41) 99696-2349. Horário: Seg-Sex 8h-19h, Sáb 8h-14h.',
    keywords: ['royal clean contato', 'lavanderia portao endereco', 'whatsapp lavanderia curitiba'],
    canonical: `${BASE_URL}/contato`,
    ogImage: DEFAULT_OG_IMAGE
  }
];

export const getAllRoutes = (): RouteConfig[] => {
  const neighborhoodRoutes: RouteConfig[] = neighborhoods.map(n => ({
    path: `/bairros/${n.slug}`,
    title: `Lavanderia ${n.name} | Delivery Grátis | Royal Clean`,
    description: n.description,
    keywords: n.keywords,
    canonical: `${BASE_URL}/bairros/${n.slug}`,
    ogImage: DEFAULT_OG_IMAGE
  }));

  return [...staticRoutes, ...neighborhoodRoutes];
};

export const getNeighborhoodBySlug = (slug: string): NeighborhoodConfig | undefined => {
  return neighborhoods.find(n => n.slug === slug);
};

export const BASE_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Royal Clean Lavanderias",
  "image": [
    `${BASE_URL}/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png`,
    `${BASE_URL}/assets/images/Gemini_Generated_Image_o6fqhjo6fqhjo6fq_1766159626826.png`
  ],
  "telephone": "+5541996962349",
  "url": BASE_URL,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Ildefonso Stockler França, 299",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "postalCode": "81020-040",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.4674,
    "longitude": -49.2893
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/royalclean",
    "https://www.facebook.com/royalclean"
  ],
  "areaServed": neighborhoods.map(n => ({
    "@type": "City",
    "name": `${n.name}, Curitiba`
  }))
};
