import React, { useEffect, useRef } from 'react';
import { BASE_STRUCTURED_DATA } from '../config/routes';

interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  pageStructuredData?: object;
  noIndex?: boolean;
}

const EnhancedSEO: React.FC<EnhancedSEOProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/assets/images/Gemini_Generated_Image_eb069beb069beb06_1766159410252.png',
  ogType = 'website',
  pageStructuredData,
  noIndex = false
}) => {
  const baseUrl = 'https://www.royalcleanlavanderia.top';
  const fullTitle = `${title} | Royal Clean Lavanderias`;
  const fullCanonical = canonical || baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  
  const createdElementsRef = useRef<Element[]>([]);

  useEffect(() => {
    createdElementsRef.current.forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    createdElementsRef.current = [];

    document.title = fullTitle;

    const createOrUpdateMeta = (name: string, content: string, isProperty = false): Element => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      const wasCreated = !element;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      
      if (wasCreated) {
        createdElementsRef.current.push(element);
      }
      return element;
    };

    const updateExistingMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      const element = document.querySelector(`meta[${attr}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      }
    };

    updateExistingMeta('description', description);
    updateExistingMeta('title', fullTitle);
    
    createOrUpdateMeta('keywords', keywords.length > 0 ? keywords.join(', ') : 'lavanderia curitiba, lavanderia delivery, royal clean');
    createOrUpdateMeta('author', 'Royal Clean Lavanderias');
    createOrUpdateMeta('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    createOrUpdateMeta('googlebot', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullCanonical);
    }

    updateExistingMeta('og:type', ogType, true);
    updateExistingMeta('og:url', fullCanonical, true);
    updateExistingMeta('og:title', fullTitle, true);
    updateExistingMeta('og:description', description, true);
    updateExistingMeta('og:image', fullOgImage, true);

    updateExistingMeta('twitter:url', fullCanonical);
    updateExistingMeta('twitter:title', fullTitle);
    updateExistingMeta('twitter:description', description);
    updateExistingMeta('twitter:image', fullOgImage);

    if (pageStructuredData) {
      let pageScript = document.querySelector('script[data-seo="page-specific"]');
      if (!pageScript) {
        pageScript = document.createElement('script');
        pageScript.setAttribute('type', 'application/ld+json');
        pageScript.setAttribute('data-seo', 'page-specific');
        document.head.appendChild(pageScript);
        createdElementsRef.current.push(pageScript);
      }
      pageScript.textContent = JSON.stringify(pageStructuredData);
    }

    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        ...(fullCanonical !== baseUrl ? [{
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": fullCanonical
        }] : [])
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-seo="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('data-seo', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
      createdElementsRef.current.push(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbData);

    return () => {
      createdElementsRef.current.forEach(el => {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
      createdElementsRef.current = [];
    };
  }, [title, description, keywords, canonical, ogImage, ogType, pageStructuredData, noIndex, fullTitle, fullCanonical, fullOgImage, baseUrl]);

  return null;
};

export default EnhancedSEO;
