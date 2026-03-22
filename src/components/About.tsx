import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Users, Trophy, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coachAbout from "@/assets/coach-about.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    { icon: Clock, label: "Flexible Scheduling" },
    { icon: Users, label: "All Age Groups" },
    { icon: Trophy, label: "9 Sports Disciplines" },
    { icon: Award, label: "Certified Coaches" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Auto-scrolling sport images */}
          <div className="relative rounded-2xl overflow-hidden h-[500px] border border-border/50">
            <img
              src={coachAbout}
              alt="Coach playing badminton"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              About Your <span className="text-primary">Coach</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With years of dedicated experience in professional sports training, RJ Sportz has been committed to helping athletes of all levels reach their full potential across multiple disciplines.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our approach focuses on holistic development through badminton, yoga, karate, skating, swimming, table tennis, football, basketball, and zumba. We bring expert coaching directly to your doorstep, making professional training accessible and convenient for everyone.
            </p>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="mb-8">
                Know More
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center border-border/50 hover:shadow-[0_0_20px_hsl(105_98%_51%/0.15)] transition-all duration-300">
                  <div className="flex justify-center mb-2">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
