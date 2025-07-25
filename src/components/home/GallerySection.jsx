import React from 'react';
import { Card } from '@/components/ui/card';

const content = {
  preTitle: "Nossos Projetos",
  title: "Projetos Realizados",
  description: "Indústrias, centros logísticos, supermercados, centros de distribuição, cooperativas e muito mais.",
  images: [
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/a1f32f1b2_O-que-reformar-primeiro-em-um-galpao-industrial.jpg", alt: "Reforma de galpão industrial com estrutura metálica" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/38291ee61_reforma-e-construcao-de-galpoes-reforma-de-galpao-industrial.jpg", alt: "Interior de galpão industrial reformado" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/4a6067d73_reforma-galpao-industrial-03.jpg", alt: "Galpão industrial após reforma completa" },
  ],
  backgroundColor: "#ffffff",
  textColor: "#111827"
};

export default function GallerySection() {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.images.map((image, index) => (
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
        </div>
      </div>
    </section>
  );
}