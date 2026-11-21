import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_URL = `https://wa.me/5511941345199?text=${encodeURIComponent(
  "Olá! Quero impulsionar minha marca!"
)}`;

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comece Agora</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold">
            Pronto para <span className="bg-gradient-accent bg-clip-text text-transparent">decolar</span>?
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Não deixe sua marca passar despercebida. Entre em contato agora e 
            descubra como podemos impulsionar seu negócio para o sucesso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              variant="whatsapp" 
              size="lg"
              className="text-lg px-10 py-7"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-6 w-6" />
                Fale com um especialista
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-muted-foreground">Projetos entregues</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-muted-foreground">Marcas impulsionadas</div>
            </div>
            <div className="space-y-2 col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                3x
              </div>
              <div className="text-sm text-muted-foreground">ROI médio dos clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
