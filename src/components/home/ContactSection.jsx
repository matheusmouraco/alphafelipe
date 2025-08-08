
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const content = {
    title: "Está buscando qualidade e confiança?",
    description: "Fale com nossa equipe e receba uma proposta personalizada. Orçamentos rápidos e sem compromisso.",
    contactInfo: {
      phone: "(11) 93935-8960",
      email: "contato@alphacolorspinturas.com.br",
      whatsappLink: "https://wa.me/5511939358960?text=Oi,%20vim%20do%20seu%20site%20Alpha%20Indústrias%20e%20gostaria%20de%20um%20orçamento"
    },
    backgroundColor: "#f3f4f6",
    textColor: "#111827"
};

export default function ContactSection() {
  return (
    <section id="contact" style={{ backgroundColor: content.backgroundColor, color: content.textColor }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'inherit' }}>
              {content.title}
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ opacity: 0.8 }}>
              {content.description}
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-xl">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Entre em Contato</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{content.contactInfo.phone}</div>
                        <div className="text-gray-600">Atendimento via WhatsApp</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{content.contactInfo.email}</div>
                        <div className="text-gray-600">Envie seu projeto ou planta para análise</div>
                      </div>
                    </div>
                  </div>
                  <a href={content.contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button 
                      className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg"
                      size="lg"
                    >
                      Falar no WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
