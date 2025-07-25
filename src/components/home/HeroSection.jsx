import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const content = {
  logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7d1febdb9_alphaindustria-Prancheta-1.png",
  baseTitle: "Soluções em",
  animatedServices: [
    "Pintura Industrial",
    "Restauração de Galpões", 
    "Restauração de Juntas de Dilatação",
    "Restauração de Estrutura",
    "Pintura de Estruturas Metálicas",
    "Pintura e Lavagem de Tanques e Caixas d'água"
  ],
  subtitle: "Alpha Indústrias",
  description: "Equipe especializada e capacitada para atender as necessidades da sua empresa. Usamos materiais de mais alta qualidade do mercado com garantia e segurança.",
  ctaButtonText: "Solicitar Orçamento Gratuito",
  ctaButtonLink: "https://wa.me/5511939358960",
  backgroundImages: [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/61eeb066d_1000_F_232916161_qRqRC6ZgNUmwdHUhwIBVTiOFc2drCqxt.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e98802482_construcao-de-galpao-0.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/cded7443d_construcao-galpao-industrial-precos.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c7da76e68_Galpao-Industrial-de-Carira-esta-80-reformado-1024x576.jpeg"
  ],
  overlayColor: "rgba(0, 0, 0, 0.6)",
};

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % content.backgroundImages.length
      );
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => 
        (prevIndex + 1) % content.animatedServices.length
      );
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(serviceInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images com Fade */}
      {content.backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: content.overlayColor }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <img 
            src={content.logoUrl}
            alt="Alpha Indústrias"
            className="h-20 mx-auto mb-8"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {content.baseTitle}{' '}
          <span className="text-blue-400 transition-all duration-500">
            {content.animatedServices[currentServiceIndex]}
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto font-light tracking-wide">
          {content.subtitle}
        </p>
        
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          {content.description}
        </p>
        
        <div className="flex justify-center">
          <a href={content.ctaButtonLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 bg-blue-600 hover:bg-blue-700">
              {content.ctaButtonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}