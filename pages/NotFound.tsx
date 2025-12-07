import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Shirt } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Página não encontrada | Royal Clean" 
        description="A página que você está procurando não existe ou foi movida." 
      />
      
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4 py-20">
        <div className="text-center max-w-lg mx-auto">
          <div className="relative inline-block mb-8">
            <div className="bg-primary/10 p-6 rounded-full">
              <Shirt size={64} className="text-primary animate-bounce" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-full border-4 border-white">
              <Search size={24} />
            </div>
          </div>
          
          <h1 className="text-6xl font-display font-bold text-primaryDark mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ops! Página não encontrada</h2>
          
          <p className="text-gray-600 mb-8 text-lg">
            Parece que essa peça de roupa se perdeu na lavagem! 
            Não conseguimos encontrar a página que você está procurando.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primaryDark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Home size={20} />
              Voltar para o Início
            </Link>
            <Link 
              to="/servicos" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 px-8 rounded-full hover:border-primary hover:text-primary transition-all"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;