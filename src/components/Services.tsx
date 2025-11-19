import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Megaphone, BarChart3, Monitor, Users } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Social Media",
    description: "Gestão completa de redes sociais com conteúdo estratégico e engajamento autêntico.",
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas de anúncios otimizadas para máximo ROI em todas as plataformas.",
  },
  {
    icon: Megaphone,
    title: "Branding",
    description: "Construção e posicionamento de marca para gerar autoridade no mercado.",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Análise de dados e métricas para decisões estratégicas baseadas em resultados.",
  },
  {
    icon: Monitor,
    title: "Criação de site",
    description: "Desenvolvimento de sites profissionais e responsivos para fortalecer sua presença digital.",
  },
  {
    icon: Users,
    title: "Consultoria",
    description: "Orientação estratégica personalizada para alavancar seu negócio digital.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-accent bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de marketing digital para impulsionar sua presença online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(271_76%_63%_/_0.2)] animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-accent flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
