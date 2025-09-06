import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Clock, Heart, Dumbbell } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Badminton Training",
      description: "Professional badminton coaching at your apartment or our facility. We bring the expertise to your doorstep.",
      features: ["At-home training available", "Professional equipment", "All skill levels"],
      price: "$100/session"
    },
    {
      icon: Heart,
      title: "Yoga Classes",
      description: "Enhance flexibility, balance, and mental wellness through personalized yoga sessions.",
      features: ["Hatha & Vinyasa styles", "Stress relief focus", "Beginner friendly"],
      price: "$60/session"
    },
    {
      icon: Dumbbell,
      title: "Fitness Training",
      description: "Complete fitness programs combining strength training, cardio, and functional movements.",
      features: ["Custom workout plans", "Nutritional guidance", "Progress tracking"],
      price: "$80/session"
    },
    {
      icon: Users,
      title: "Group Programs",
      description: "Join our dynamic group sessions for badminton, yoga, or fitness training with like-minded individuals.",
      features: ["Small group sizes", "Community building", "Cost-effective"],
      price: "$50/session"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Specialized training for athletes preparing for badminton tournaments and competitions.",
      features: ["Advanced techniques", "Mental preparation", "Performance analysis"],
      price: "$150/session"
    },
    {
      icon: Clock,
      title: "Intensive Camps",
      description: "Weekend intensive programs covering badminton, fitness, and wellness for rapid improvement.",
      features: ["Multi-discipline training", "Expert guidance", "Comprehensive program"],
      price: "$400/weekend"
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