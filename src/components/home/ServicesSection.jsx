import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HardHat, Brush } from 'lucide-react';

const content = {
  preTitle: "Nossas Especialidades",
  title: "O que fazemos",
  description: "Soluções completas em estruturas metálicas com a qualidade e confiabilidade que sua empresa precisa.",
  services: [
    { 
      icon: HardHat, 
      title: "Pintura Industrial", 
      description: "Proteção, durabilidade e alto desempenho para sua estrutura metálica. A Alpha Indústrias é especialista em pintura industrial com tratamento anticorrosivo, garantindo resistência mecânica, proteção contra agentes químicos e durabilidade superior. Nossa equipe executa serviços com rigor técnico, desde a preparação da superfície (jateamento, hidrojateamento, lixamento industrial) até a aplicação de tintas industriais de alta performance, conforme as normas técnicas exigidas.",
      color: "#f97316", 
      buttonText: "Quero este serviço", 
      buttonLink: "https://wa.me/5511939358960"
    },
    { 
      icon: Brush, 
      title: "Pintura e Restauração de Muros e Fachadas", 
      description: "Sua empresa com aparência renovada e proteção de longa duração. Na Alpha Indústrias, executamos pintura e restauração interna e externa de fachadas, muros e áreas comuns, com acabamento de alto padrão e materiais industriais resistentes ao tempo e à exposição intensa.",
      color: "#06b6d4", 
      buttonText: "Quero este serviço", 
      buttonLink: "https://wa.me/5511939358960"
    }
  ],
  backgroundColor: "#f9fafb",
  textColor: "#111827"
};

const ServiceCard = ({ service }) => {
  const IconComponent = service.icon;
  return (
    <Card className="flex flex-col group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white hover:from-white hover:to-gray-50 transform hover:scale-105 h-full">
      <CardContent className="p-8 text-center flex flex-col flex-grow">
        <div 
          className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: service.color }}
        >
          <IconComponent className="h-10 w-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed flex-grow">{service.description}</p>
        {service.buttonText && service.buttonLink && (
           <a href={service.buttonLink} target="_blank" rel="noopener noreferrer" className="mt-6">
              <Button variant="outline" className="w-full">{service.buttonText}</Button>
           </a>
        )}
      </CardContent>
    </Card>
  );
};

export default function ServicesSection() {
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
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'inherit', opacity: 0.8 }}>
              {content.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}