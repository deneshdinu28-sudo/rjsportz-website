import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import coachAboutImage from "@/assets/coach-about.jpg";
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

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 280;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Image */}
          <div className="relative">
            <img 
              src={coachAboutImage} 
              alt="Professional sports coach in action"
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

        {/* Scrollable Coach Images */}
        <div className={`mt-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">
              Our <span className="text-primary">Coaches</span>
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-border/50 hover:bg-primary/10 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-border/50 hover:bg-primary/10 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {coaches.map((coach, index) => (
              <div key={index} className="flex-shrink-0 w-64 group">
                <div className="relative h-44 rounded-xl overflow-hidden border border-border/50">
                  <img
                    src={coach.image}
                    alt={`${coach.sport} coach`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-foreground font-bold text-lg">{coach.sport}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
