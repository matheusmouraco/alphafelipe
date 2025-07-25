
import React from 'react';

const content = {
  preTitle: "Nossos Clientes",
  title: "Trabalhamos com as melhores marcas do mercado",
  description: "Parcerias de sucesso que impulsionam o crescimento mútuo.",
  logos: [
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0ed979877_ibratintintasetexturaemcarapicuiba.png", alt: "Logo Ibratin" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/040e3a83a_sherwinwilliamsemcotia.png", alt: "Logo Sherwin Williams" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f88645cf5_sikaemsbc.png", alt: "Logo Sika" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/2e91c1030_tintacoralemjandira.png", alt: "Logo Coral" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7d274d432_tintassuvinilemsaopaulo.png", alt: "Logo Suvinil" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f70023895_tintastigreembarueri.png", alt: "Logo Tigre" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/1b7f3c692_vedacitemosasco.png", alt: "Logo Vedacit" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/9578d6c7a_weberemsp.png", alt: "Logo Weber Quartzolit" },
    { url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d86fab0a3_Group13.png", alt: "Logo Inovapoxi" },
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
