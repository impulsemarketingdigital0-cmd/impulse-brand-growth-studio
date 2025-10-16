import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da Impulse!");

  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl animate-glow-pulse hover:scale-110 transition-transform"
      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppButton;
