
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const content = {
  logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/e8ba9b043_7d1febdb9_alphaindustria-Prancheta-1.png",
  baseTitle: "Soluções em",
  animatedServices: [
    "Pintura Industrial",
    "Restauração de Galpões", 
    "Restauração de Juntas de Dilatação",
    "Restauração de Estrutura",
    "Pintura de Estruturas Metálicas",
    "Pintura e Lavagem de Tanques e Caixas d'água"
  ],
  description: "Equipe especializada e capacitada para atender as necessidades da sua empresa. Usamos materiais de mais alta qualidade do mercado com garantia e segurança.",
  ctaButtonText: "Solicitar Orçamento Gratuito",
  ctaButtonLink: "https://wa.me/5511939358960?text=Oi,%20vim%20do%20seu%20site%20Alpha%20Indústrias%20e%20gostaria%20de%20um%20orçamento",
  backgroundImages: [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/add39f8f2_WhatsAppImage2025-07-24at114853PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/795521a89_WhatsAppImage2025-07-24at115054PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bddb8acb3_WhatsAppImage2025-07-25at122350AM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0fb3b3e3d_WhatsAppImage2025-07-25at124053PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d95836e3e_WhatsAppImage2025-07-25at124526PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f30f5ee6c_WhatsAppImage2025-07-29at11526PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f13abceaf_WhatsAppImage2025-07-29at11526PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/b0cb39515_WhatsAppImage2025-07-29at11527PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c66cd6ead_WhatsAppImage2025-07-29at11527PM2.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/d47bbc23c_WhatsAppImage2025-07-29at11527PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/246e55d97_WhatsAppImage2025-07-29at11528PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/824d66b4a_WhatsAppImage2025-07-29at11528PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/fd8f5fae0_WhatsAppImage2025-07-29at11536PM1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0dd4f25a6_WhatsAppImage2025-07-29at11536PM2.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/bec2f42ea_WhatsAppImage2025-07-29at11536PM.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/c5561d4ac_WhatsAppImage2025-07-29at11537PM.jpg"
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
            className="w-full h-auto mx-auto mb-8 max-w-[280px] md:max-w-[340px]"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {content.baseTitle}{' '}
          <span className="text-blue-400 transition-all duration-500">
            {content.animatedServices[currentServiceIndex]}
          </span>
        </h1>
        
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
