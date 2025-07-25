import React from 'react';

const content = {
  preTitle: "Nossos Clientes",
  title: "Trabalhamos com as melhores marcas do mercado",
  description: "Parcerias de sucesso que impulsionam o crescimento mútuo.",
  logos: [
    { url: "https://i.imgur.com/VIH1C5L.png", alt: "Logo Cliente 1" },
    { url: "https://i.imgur.com/YCIp2aG.png", alt: "Logo Cliente 2" },
    { url: "https://i.imgur.com/G5Ogs06.png", alt: "Logo Cliente 3" },
    { url: "https://i.imgur.com/sCNei0A.png", alt: "Logo Cliente 4" },
    { url: "https://i.imgur.com/dAmC4rS.png", alt: "Logo Cliente 5" },
    { url: "https://i.imgur.com/Yvj9x5N.png", alt: "Logo Cliente 6" },
    { url: "https://i.imgur.com/oNmTCIJ.png", alt: "Logo Cliente 7" },
    { url: "https://i.imgur.com/lO2pDQi.png", alt: "Logo Cliente 8" },
    { url: "https://i.imgur.com/Qh0iGfG.png", alt: "Logo Cliente 9" },
  ],
  backgroundColor: "#ffffff",
  textColor: "#111827"
};

export default function ClientsSection() {
  const extendedLogos = [...content.logos, ...content.logos]; // Duplicar para efeito de scroll contínuo
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
            <p className="text-xl max-w-3xl mx-auto" style={{ opacity: 0.8 }}>
              {content.description}
            </p>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll">
            <div className="flex items-center justify-center min-w-0 shrink-0">
              {extendedLogos.map((logo, index) => (
                <div key={index} className="mx-8 flex-shrink-0">
                  <img 
                    src={logo.url} 
                    alt={logo.alt} 
                    className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}