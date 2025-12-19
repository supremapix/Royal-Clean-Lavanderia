import { neighborhoods, staticRoutes } from './config/routes';

export interface PrerenderRoute {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export const prerenderRoutes: PrerenderRoute[] = [
  ...staticRoutes.map(r => ({
    path: r.path,
    title: r.title,
    description: r.description,
    keywords: r.keywords,
    canonical: r.canonical
  })),
  ...neighborhoods.map(n => ({
    path: `/bairros/${n.slug}`,
    title: `Lavanderia ${n.name} | Delivery Grátis | Royal Clean`,
    description: n.description,
    keywords: n.keywords,
    canonical: `https://www.royalcleanlavanderia.top/bairros/${n.slug}`
  }))
];

export const getAllPaths = (): string[] => {
  return prerenderRoutes.map(r => r.path);
};

export default prerenderRoutes;
