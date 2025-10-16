import { Button } from "@/components/ui/button";
import { MessageCircle, Rocket } from "lucide-react";
import logoImpulse from "@/assets/logo-impulse.png";

const Hero = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de impulsionar minha marca com a Impulse!");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={logoImpulse} 
              alt="Impulse Logo" 
              className="h-32 md:h-40 w-auto animate-float"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Impulsione sua marca
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              para o próximo nível
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            Transformamos visibilidade em resultados. Marketing digital de alta performance 
            para marcas que querem conquistar o mercado.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              variant="whatsapp" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Fale conosco no WhatsApp
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-8 py-6"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Rocket className="mr-2 h-6 w-6" />
              Conheça nossos serviços
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex gap-2 mt-12">
            <div className="w-16 h-1 bg-gradient-accent rounded-full animate-pulse" />
            <div className="w-16 h-1 bg-gradient-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-16 h-1 bg-gradient-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
