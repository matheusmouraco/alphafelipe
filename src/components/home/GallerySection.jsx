import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const content = {
  preTitle: "Nossos Projetos",
  title: "Projetos Realizados",
  description: "Indústrias, centros logísticos, supermercados, centros de distribuição, cooperativas e muito mais.",
  images: [
    { url: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", alt: "Projeto de galpão industrial", tags: "Galpão" },
    { url: "https://images.unsplash.com/photo-1516937998159-86991976a117?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", alt: "Estrutura metálica de indústria", tags: "Indústria" },
    { url: "https://images.unsplash.com/photo-1444721863583-272e731a54a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3", alt: "Interior de fábrica", tags: "Indústria" },
  ],
  backgroundColor: "#ffffff",
  textColor: "#111827"
};

export default function GallerySection() {
  const [activeTag, setActiveTag] = useState('Todos');
  const tags = ['Todos', ...new Set(content.images.flatMap(image => image.tags.split(',').map(tag => tag.trim())))];
  
  const filteredImages = content.images.filter(image => {
    if (activeTag === 'Todos') return true;
    return image.tags.split(',').map(t => t.trim()).includes(activeTag);
  });

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
          {tags.length > 1 && (
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                <Button key={tag} variant={activeTag === tag ? 'default' : 'outline'} onClick={() => setActiveTag(tag)}>
                  {tag}
                </Button>
              ))}
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
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