import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Users,
      title: "Group Training",
      description: "Join dynamic group sessions with players of similar skill levels. Build community while improving your game.",
      features: ["Max 6 players per session", "2x per week", "Skill-matched groups"],
      price: "$80/month"
    },
    {
      icon: Target,
      title: "Private Coaching",
      description: "One-on-one personalized training focused on your specific goals and technique improvements.",
      features: ["Customized training plan", "Video analysis", "Flexible scheduling"],
      price: "$120/session"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Intensive training program designed for players preparing for tournaments and competitions.",
      features: ["Match strategy", "Mental preparation", "Performance analysis"],
      price: "$200/month"
    },
    {
      icon: Clock,
      title: "Intensive Camps",
      description: "Weekend intensive training camps for rapid skill development and technique refinement.",
      features: ["Full weekend sessions", "Multiple skill focus", "Small group setting"],
      price: "$350/weekend"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Training
            <span className="block text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive training programs designed to elevate your badminton skills,
            whether you're a beginner or preparing for competition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-energy-orange to-champion-gold"></div>
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <div className="text-2xl font-bold text-primary mb-4 text-center">
                    {service.price}
                  </div>
                  <Button className="w-full" variant="outline">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;