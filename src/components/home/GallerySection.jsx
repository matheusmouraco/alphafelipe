import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const content = {
  preTitle: "Nossos Projetos",
  title: "Projetos Realizados",
  description: "Indústrias, centros logísticos, supermercados, centros de distribuição, cooperativas e muito mais.",
  images: [
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f15ae9134_WhatsAppImage2025-07-24at114741PM1.jpg", alt: "Serviço de pintura industrial com plataforma elevatória" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/5c5f07276_WhatsAppImage2025-07-24at114741PM.jpg", alt: "Pintura externa de galpão industrial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c0b18c579_WhatsAppImage2025-07-24at114852PM.jpg", alt: "Interior de galpão industrial reformado" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c13526b79_WhatsAppImage2025-07-24at114853PM1.jpg", alt: "Pintura de fachada industrial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/577508f93_WhatsAppImage2025-07-24at114853PM2.jpg", alt: "Reforma de galpão com pintura colorida" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/42f60e493_WhatsAppImage2025-07-24at114853PM3.jpg", alt: "Estrutura metálica interna de galpão" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2b9d89086_WhatsAppImage2025-07-24at114853PM.jpg", alt: "Pintura de paredes industriais" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/05a967b65_WhatsAppImage2025-07-24at114854PM.jpg", alt: "Reforma externa de galpão industrial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2ec9db153_WhatsAppImage2025-07-24at115053PM1.jpg", alt: "Pintura de edifício comercial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7df284fc7_WhatsAppImage2025-07-24at115053PM.jpg", alt: "Serviço de pintura com plataforma elevatória" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f14f6fc5a_WhatsAppImage2025-07-24at115054PM1.jpg", alt: "Pintura rapel em edifício" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f9c13870a_WhatsAppImage2025-07-24at115054PM2.jpg", alt: "Reforma de fachada com plataforma" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e7fee4ae0_WhatsAppImage2025-07-24at115054PM3.jpg", alt: "Pintura de fachada com funcionário da Alpha Colors" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bc645cd7f_WhatsAppImage2025-07-24at115054PM4.jpg", alt: "Plataforma elevatória para pintura em altura" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/757ed8bc0_WhatsAppImage2025-07-24at115054PM.jpg", alt: "Equipe trabalhando em pintura de edifício" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6c6cb9e53_WhatsAppImage2025-07-24at115055PM.jpg", alt: "Pintura rapel em prédio alto" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ff84dc7ce_WhatsAppImage2025-07-25at122349AM1.jpg", alt: "Reforma de estrutura externa" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f3f106cc9_WhatsAppImage2025-07-25at122349AM.jpg", alt: "Pintura de estrutura predial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/16469fe2a_WhatsAppImage2025-07-25at122350AM1.jpg", alt: "Reforma de fachada industrial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9e859a497_WhatsAppImage2025-07-25at122350AM2.jpg", alt: "Pintura de galpão industrial" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/acae1a26a_WhatsAppImage2025-07-25at122350AM3.jpg", alt: "Equipe de pintura trabalhando" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a3c5ef3ff_WhatsAppImage2025-07-25at122350AM4.jpg", alt: "Projeto de pintura externa" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/ac96fdb4b_WhatsAppImage2025-07-25at122350AM.jpg", alt: "Pintura de estrutura industrial" }
  ],
  backgroundColor: "#ffffff",
  textColor: "#111827"
};

export default function GallerySection() {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(content.images.length / imagesPerPage);
  
  const currentImages = content.images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section style={{ backgroundColor: content.backgroundColor, color: content.textColor }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
              {content.preTitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'inherit' }}>
              {content.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8" style={{ opacity: 0.8 }}>
              {content.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {currentImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4">
            <button 
              onClick={prevPage}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={totalPages <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextPage}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors disabled:opacity-50"
              disabled={totalPages <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="text-center mt-4 text-gray-600">
            Página {currentPage + 1} de {totalPages} • {content.images.length} projetos realizados
          </div>
        </div>
      </div>
    </section>
  );
}