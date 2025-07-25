import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const content = {
  logoUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7d1febdb9_alphaindustria-Prancheta-1.png",
  title: "Alpha Indústrias",
  subtitle: "Soluções em Restauração de Galpões",
  description: "Equipe especializada e capacitada para atender as necessidades da sua empresa. Usamos materiais de mais alta qualidade do mercado com garantia e segurança.",
  ctaButtonText: "Solicitar Orçamento Gratuito",
  ctaButtonLink: "https://wa.me/5511939358960",
  backgroundImage: "https://images.unsplash.com/photo-1542992035-7c2d5b341517?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  overlayColor: "rgba(0, 0, 0, 0.6)",
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${content.backgroundImage})` }}
      ></div>
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: content.overlayColor }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="mb-8">
          <img 
            src={content.logoUrl}
            alt="Alpha Indústrias"
            className="h-20 mx-auto mb-8"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {content.title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-light">
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
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}