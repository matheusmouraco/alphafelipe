import React from 'react';
import { CheckCircle, Clock, Headphones, Award, Users, Shield, Star, DollarSign } from 'lucide-react';

const content = {
  title: "Por que escolher a Alpha?",
  description: "Confiança de quem entrega no prazo e com qualidade excepcional",
  backgroundColor: 'linear-gradient(to bottom, #eff6ff, white)',
  textColor: '#1f2937',
  reasons: [
    { icon: Users, title: "Equipe técnica própria", description: "Engenheiros, projetistas e montadores especializados" },
    { icon: Clock, title: "Prazo garantido em contrato", description: "Compromisso com pontualidade e entregas no prazo" },
    { icon: Headphones, title: "Suporte técnico completo", description: "Acompanhamento em todas as etapas do projeto" },
    { icon: Award, title: "Atendimento rápido e personalizado", description: "Soluções sob medida para cada necessidade" },
    { icon: CheckCircle, title: "Materiais de primeira linha", description: "Fabricação própria com controle de qualidade rigoroso" },
    { icon: Shield, title: "Segurança e qualidade certificada", description: "Normas técnicas e padrões de segurança rigorosamente seguidos" },
    { icon: Star, title: "Excelência em acabamento", description: "Pintura e tratamentos especializados com tecnologia avançada" },
    { icon: DollarSign, title: "Custo-Benefício", description: "Otimização de custos sem abrir mão da qualidade e segurança" }
  ]
};

export default function WhyChooseSection() {
  return (
    <section style={{ background: content.backgroundColor, color: content.textColor }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: content.title.replace('Alpha?', '<span class="text-blue-600">Alpha?</span>') }}
              style={{ color: 'inherit' }}
            />
            <p className="text-xl max-w-3xl mx-auto" style={{ opacity: 0.8 }}>
              {content.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="group">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}