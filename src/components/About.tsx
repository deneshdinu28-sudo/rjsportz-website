import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useEffect } from "react";
import coachBadminton from "@/assets/coach-badminton.jpg";
import coachYoga from "@/assets/coach-yoga.jpg";
import coachKarate from "@/assets/coach-karate.jpg";
import coachSkating from "@/assets/coach-skating.jpg";
import coachSwimming from "@/assets/coach-swimming.jpg";
import coachTabletennis from "@/assets/coach-tabletennis.jpg";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Students Trained" },
    { number: "15", label: "Championships Won" },
    { number: "98%", label: "Success Rate" }
  ];

  const coaches = [
    { sport: "Badminton", image: coachBadminton },
    { sport: "Yoga", image: coachYoga },
    { sport: "Karate", image: coachKarate },
    { sport: "Skating", image: coachSkating },
    { sport: "Swimming", image: coachSwimming },
    { sport: "Table Tennis", image: coachTabletennis },
  ];

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= container.scrollWidth - container.clientWidth) {
        scrollPos = 0;
      }
      container.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationId);
    const resume = () => { animationId = requestAnimationFrame(animate); };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Auto-scrolling coach images */}
          <div className="relative rounded-2xl overflow-hidden border border-border/50 h-[500px]">
            <div
              ref={scrollRef}
              className="flex gap-4 h-full overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {[...coaches, ...coaches].map((coach, index) => (
                <div key={index} className="flex-shrink-0 w-72 h-full relative group">
                  <img
                    src={coach.image}
                    alt={`${coach.sport} coach`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-foreground font-bold text-lg">{coach.sport}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-[0_0_30px_hsl(105_98%_51%/0.3)] z-10">
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
              Our philosophy at RJ Sportz focuses on holistic development through badminton, yoga, 
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
