import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Users, Trophy, Clock, Heart, Target } from "lucide-react";

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  const reasons = [
    {
      icon: Trophy,
      title: "Expert Coaches",
      description: "Certified professionals with years of competitive and coaching experience across multiple sports."
    },
    {
      icon: Users,
      title: "Personalized Training",
      description: "Tailored programs designed to match your skill level, goals, and pace of learning."
    },
    {
      icon: Target,
      title: "Goal-Oriented Approach",
      description: "Structured training plans with measurable milestones to track your progress effectively."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Convenient training slots that fit your lifestyle, with morning and evening batches available."
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Well-maintained facilities with proper safety gear and protocols for all age groups."
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description: "Focus on physical fitness, mental strength, discipline, and sportsmanship beyond just skills."
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Why Choose <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At RJ Sportz, we go beyond training — we build champions with the right mindset, skills, and passion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-[0_0_30px_hsl(105_98%_51%/0.15)] hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
