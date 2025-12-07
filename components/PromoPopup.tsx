import React, { useState, useEffect } from 'react';
import { X, Tag, AlertTriangle, CheckCircle2, MessageCircle } from 'lucide-react';

const PromoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verifica se já foi fechado nesta sessão
    const hasSeenPromo = sessionStorage.getItem('royalCleanPromoSeen');
    
    if (!hasSeenPromo) {
      // Pequeno delay para parecer natural e não bloquear o LCP (Largest Contentful Paint)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('royalCleanPromoSeen', 'true');
  };

  const whatsappPromoLink = "https://wa.me/5541996962349?text=Ol%C3%A1!%20Vi%20a%20*Quarta%20da%20Promo*%20no%20site%20e%20quero%20aproveitar!%20%F0%9F%8F%B7%EF%B8%8F";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative overflow-hidden border-2 border-primary">
        
        {/* Header Decorativo */}
        <div className="bg-gradient-to-r from-primary to-primaryDark p-6 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <button 
            onClick={handleClose}
            className="absolute top-3 right-3 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
            aria-label="Fechar Promoção"
          >
            <X size={24} />
          </button>
          
          <div className="inline-flex items-center gap-2 bg-accent text-primaryDark font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2 animate-pulse">
            <AlertTriangle size={14} /> Só Hoje!
          </div>
          <h2 className="text-2xl font-bold text-white leading-tight">
            📢 ATENÇÃO! <br/>Hoje é dia de promoção!
          </h2>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <p className="text-gray-700 font-medium mb-4 text-center">
            Chegou a <span className="text-primary font-bold">Quarta da Promo</span> na nossa lavanderia! 💜 Descontos especiais para você economizar:
          </p>

          <div className="space-y-3 mb-6 bg-purple-50 p-4 rounded-xl border border-purple-100">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white p-1 rounded-full text-secondary shadow-sm">
                <Tag size={16} />
              </div>
              <div>
                <strong className="block text-gray-900">Edredons e Cobertores</strong>
                <span className="text-primary font-bold text-lg">A partir de R$ 40,00</span>
                <span className="text-xs text-gray-500 block">(mín. 2 peças)</span>
              </div>
            </div>
            
            <div className="w-full h-px bg-purple-200/50"></div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white p-1 rounded-full text-secondary shadow-sm">
                <Tag size={16} />
              </div>
              <div>
                <strong className="block text-gray-900">Camisas Sociais</strong>
                <span className="text-primary font-bold text-lg">A partir de R$ 13,00</span>
                <span className="text-xs text-gray-500 block">(mín. 5 unidades)</span>
              </div>
            </div>

            <div className="w-full h-px bg-purple-200/50"></div>

            <div className="flex items-start gap-3">
              <div className="mt-1 bg-white p-1 rounded-full text-secondary shadow-sm">
                <Tag size={16} />
              </div>
              <div>
                <strong className="block text-gray-900">Lavagem por Kg</strong>
                <span className="text-primary font-bold text-lg">A partir de R$ 14,00/kg</span>
                <span className="text-xs text-gray-500 block">(mín. 5kg)</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-red-500 font-bold text-center mb-5 bg-red-50 p-2 rounded border border-red-100 flex items-center justify-center gap-2">
            <AlertTriangle size={14} />
            Promoção válida apenas hoje para pagamento no dia!
          </p>

          <a 
            href={whatsappPromoLink}
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 text-lg"
          >
            <MessageCircle size={24} />
            Quero Aproveitar Agora!
          </a>
          
          <button 
            onClick={handleClose}
            className="w-full text-center text-gray-400 text-sm mt-3 hover:text-gray-600 underline"
          >
            Não quero desconto hoje
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;