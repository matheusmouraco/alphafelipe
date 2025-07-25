import React, { useState, useEffect } from 'react';
import { Moon, MessageCircle } from 'lucide-react';

export default function TimeBasedMessage() {
  const content = {
    eveningMessage: "Boa noite! Envie-nos uma mensagem e responderemos no próximo dia útil.",
  };

  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    // Para simplificar, mostraremos a mensagem de boa noite o tempo todo.
    // Pode ser reativado o sistema de horário se necessário.
    setMessage(content.eveningMessage);
    setIcon(<MessageCircle className="h-5 w-5 mr-2" />);
  }, [content]);

  if (!message) {
    return null;
  }

  return (
    <div className="bg-blue-600 text-white text-center py-3 px-4 text-sm font-medium">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {icon}
        <p>{message}</p>
      </div>
    </div>
  );
}