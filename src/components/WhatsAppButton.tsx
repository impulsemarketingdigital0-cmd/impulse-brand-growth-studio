import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5511941345199";

const WhatsAppButton = () => {
  return (
    <Button
      variant="whatsapp"
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-2xl animate-glow-pulse hover:scale-110 transition-transform"
      asChild
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </Button>
  );
};

export default WhatsAppButton;
