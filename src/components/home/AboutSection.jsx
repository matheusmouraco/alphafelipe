import React from 'react';
import { Award, Shield } from 'lucide-react';

const content = {
  preTitle: "Sobre a Alpha",
  title1: "Prestando serviços a mais de",
  title2: "30 anos com qualidade",
  titleHighlightColor: "#3b82f6",
  description: "Na AlphaIndústrias nos empenhamos em atender todas as necessidades dos nossos clientes, desde proporcionar o melhor atendimento a materiais e certificações necessárias.",
  imageUrl: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/7b0bad489_silhuetas-local-de-construcao.jpg",
  achievements: [
    { text: "Mais de 250 projetos entregues", icon: Award },
    { text: "Especialidade em galpões", icon: Shield }
  ],
  backgroundColor: '#ffffff',
  textColor: '#111827'
};

export default function AboutSection() {
  const achievements = content.achievements.map((ach, index) => ({
    ...ach,
    color: index % 2 === 0 ? "text-blue-600" : "text-purple-600"
  }));
  
  return (
    <section style={{ backgroundColor: content.backgroundColor }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div style={{ color: content.textColor }}>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                  {content.preTitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {content.title1}{' '}
                  <span style={{ color: content.titleHighlightColor }}>
                    {content.title2}
                  </span>
                </h2>
              </div>
              <p className="text-xl leading-relaxed mb-8">
                {content.description}
              </p>
              <div className="space-y-6">
                {achievements.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
                    <div className={`p-3 rounded-full bg-gray-50 ${item.color}`}>
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-medium text-gray-800">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={content.imageUrl}
                  alt="Silhuetas de um local de construção ao pôr do sol"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}