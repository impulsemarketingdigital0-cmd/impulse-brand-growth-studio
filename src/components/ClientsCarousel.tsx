import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import logoBR from "@/assets/clients/logo-br.png";
import logoElite from "@/assets/clients/logo-elite.png";
import logoImperioSublimacao from "@/assets/clients/logo-imperio-sublimacao.png";
import logoTrix from "@/assets/clients/logo-trix.png";
import logoAtacadaoDTF from "@/assets/clients/logo-atacadao-dtf.png";
import logoImperioTransfer from "@/assets/clients/logo-imperio-transfer.png";

const clients = [
  { name: "BR", logo: logoBR },
  { name: "Elite", logo: logoElite },
  { name: "Império da Sublimação", logo: logoImperioSublimacao },
  { name: "Trix", logo: logoTrix },
  { name: "Atacadão do DTF", logo: logoAtacadaoDTF },
  { name: "Império do Transfer", logo: logoImperioTransfer },
];

const ClientsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Marcas que <span className="bg-gradient-accent bg-clip-text text-transparent">confiam</span> em nós
          </h2>
          <p className="text-xl text-muted-foreground">
            Parceiros de sucesso que já impulsionamos
          </p>
        </div>

        {/* Desktop View - All Logos */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border p-8 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(271_76%_63%_/_0.2)] animate-slide-up h-32"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </Card>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden relative max-w-md mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {clients.map((client, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-border p-8 flex items-center justify-center h-32">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-[180px] max-h-[80px] w-auto h-auto object-contain"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-muted-foreground/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
