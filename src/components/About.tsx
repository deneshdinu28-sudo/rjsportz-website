import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coachingImage from "@/assets/coaching-session.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Students Trained" },
    { number: "15", label: "Championships Won" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800" 
              alt="Coach training students"
              className="rounded-2xl w-full h-[500px] object-cover border border-border/50"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-[0_0_30px_hsl(105_98%_51%/0.3)]">
              <p className="text-primary-foreground font-bold text-lg">Certified Trainer</p>
              <p className="text-primary-foreground/80">Sports Academy</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              About Your <span className="text-primary">Coach</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in professional sports, I've dedicated my career 
              to helping athletes of all levels achieve their goals across multiple disciplines.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our philosophy at RJ Sports focuses on holistic development through badminton, yoga, 
              karate, skating, swimming, and table tennis. We bring professional coaching directly to you.
            </p>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="mb-8">
                Know More
              </Button>
            </Link>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center border-border/50 hover:shadow-[0_0_20px_hsl(105_98%_51%/0.15)] transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
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
