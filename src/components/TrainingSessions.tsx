import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Trophy, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const TrainingSessions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const sessions = [
    {
      icon: Users,
      title: "Group Programs",
      description: "Join our dynamic group sessions for badminton, yoga, or fitness training with like-minded individuals.",
      features: ["Small group sizes", "Community building", "Cost-effective"],
      price: "$50/session"
    },
    {
      icon: Target,
      title: "Personal Coaching",
      description: "One-on-one training sessions tailored to your specific needs and goals with expert guidance.",
      features: ["Customized training", "Individual attention", "Flexible scheduling"],
      price: "$100/session"
    },
    {
      icon: Trophy,
      title: "Competition Prep",
      description: "Specialized training for athletes preparing for tournaments and competitions.",
      features: ["Advanced techniques", "Mental preparation", "Performance analysis"],
      price: "$150/session"
    },
    {
      icon: Clock,
      title: "Intensive Camps",
      description: "Weekend intensive programs covering multiple sports and wellness for rapid improvement.",
      features: ["Multi-discipline training", "Expert guidance", "Comprehensive program"],
      price: "$400/weekend"
    }
  ];

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Training <span className="text-primary">Sessions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive training programs designed to elevate your skills,
            whether you're a beginner or preparing for competition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="relative overflow-hidden group hover:shadow-[0_0_30px_hsl(100_95%_51%/0.15)] transition-all duration-500 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/40">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <session.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {session.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {session.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {session.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-border">
                    <div className="text-2xl font-bold text-primary mb-4 text-center">
                      {session.price}
                    </div>
                    <Button className="w-full" variant="outline" onClick={scrollToContact}>
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSessions;
