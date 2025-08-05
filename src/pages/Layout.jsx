

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const defaultContent = {
  footer: {
      logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7d1febdb9_alphaindustria-Prancheta-1.png",
      phone: "11 94295-9999",
      email: "contato@alphacolorspinturas.com.br",
      address: "Atendimento em todo o território nacional",
      whatsappLink: "https://wa.me/5511942959999?text=Oi,%20vim%20do%20seu%20site%20Alpha%20Indústrias%20e%20gostaria%20de%20um%20orçamento",
      developedBy: { text: "Desenvolvido por", name: "MatiStudio", link: "#" },
      copyright: "© 2025 Alpha Indústrias. Todos os direitos reservados.",
      backgroundColor: "#111827",
      textColor: "#ffffff"
  }
};

export default function Layout({ children }) {
  const { footer } = defaultContent;

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-5px) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes pulse-green {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
        }
        .animate-pulse-green {
          animation: pulse-green 2s infinite;
        }
      `}</style>
      
      <main>
        {children}
      </main>

      <footer className="pt-12 pb-6" style={{ backgroundColor: footer.backgroundColor, color: footer.textColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={footer.logoUrl}
                alt="Alpha Indústrias"
                className="h-10"
              />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8">
              <a href={`tel:${footer.phone.replace(/\D/g, '')}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>{footer.phone}</span>
              </a>
              <a href={`mailto:${footer.email}`} className="flex items-center gap-3 text-sm hover:text-white transition-colors">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>{footer.email}</span>
              </a>
              {footer.address && (
                 <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>{footer.address}</span>
                 </div>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
            <p>{footer.copyright}</p>
            {footer.developedBy && footer.developedBy.name && (
              <div className="flex items-center gap-2">
                <span>{footer.developedBy.text || 'Desenvolvido por'}</span>
                <a href={footer.developedBy.link} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-white flex items-center gap-2">
                  <span>{footer.developedBy.name}</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </footer>
      
      <a 
        href={footer.whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 rounded-full h-14 w-14 flex items-center justify-center shadow-xl transition-all z-50 animate-float animate-pulse-green"
        style={{ border: 'none', outline: 'none' }}
        aria-label="Fale conosco no WhatsApp"
      >
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b8238c849_V9v8ZSeJ-e1XyzdZ.png"
          alt="WhatsApp"
          className="h-8 w-8"
        />
      </a>
    </div>
  );
}

