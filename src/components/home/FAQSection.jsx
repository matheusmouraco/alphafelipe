import React from 'react';
import { Plus, Minus } from 'lucide-react';

const content = {
  preTitle: "Dúvidas?",
  title: "Perguntas Frequentes",
  description: "Encontre aqui as respostas para as dúvidas mais comuns.",
  items: [
    { question: "1. Quais tipos de pintura industrial vocês realizam?", answer: "Realizamos uma vasta gama de pinturas industriais, incluindo aplicações de epóxi, poliuretano, e tintas de alta performance para proteção anticorrosiva. Trabalhamos desde a preparação da superfície com jateamento e hidrojateamento até o acabamento final, seguindo rigorosas normas técnicas." },
    { question: "2. A AlphaIndústrias também faz estruturas metálicas completas?", answer: "Sim. Além dos serviços de pintura e restauração, temos expertise na fabricação e montagem de estruturas metálicas completas, como galpões, mezaninos e coberturas, oferecendo soluções 'turnkey' (chave na mão) para nossos clientes." },
    { question: "3. Atendem quais regiões?", answer: "Nossa matriz está localizada em São Paulo, mas temos capacidade logística e equipes móveis para atender projetos em todo o território nacional, levando nossa qualidade e expertise para onde sua empresa precisar." },
    { question: "4. Vocês emitem ART (Anotação de Responsabilidade Técnica)?", answer: "Sim, todos os nossos projetos e serviços que exigem responsabilidade técnica são acompanhados por engenheiros qualificados e contam com a emissão da Anotação de Responsabilidade Técnica (ART), garantindo total segurança e conformidade legal." },
    { question: "5. Quais os diferenciais da Alpha em relação ao mercado?", answer: "Nossos principais diferenciais são o compromisso com os prazos, o uso de materiais de alta qualidade com fabricação própria, nossa equipe técnica especializada e o suporte completo em todas as etapas do projeto, garantindo um excelente custo-benefício." },
    { question: "6. É possível agendar uma visita técnica?", answer: "Com certeza. Uma visita técnica é fundamental para entendermos a real necessidade do seu projeto e oferecermos a solução mais adequada. Entre em contato conosco para agendarmos uma visita sem compromisso." }
  ],
  backgroundColor: "#f9fafb",
  textColor: "#111827"
};

const FAQItem = ({ item }) => (
  <details className="group border-b border-gray-200 py-4 bg-white/50 backdrop-blur-sm rounded-lg px-6 shadow-sm">
    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
      <span className="text-lg text-gray-800">{item.question}</span>
      <span className="transition group-open:rotate-180">
        <Minus className="h-6 w-6 hidden group-open:block text-blue-600" />
        <Plus className="h-6 w-6 block group-open:hidden text-blue-600" />
      </span>
    </summary>
    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
      {item.answer}
    </p>
  </details>
);

export default function FAQSection() {
  return (
    <section style={{ backgroundColor: content.backgroundColor, color: content.textColor }}>
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="space-y-4">
            {content.items.map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}