import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import sportBadminton from "@/assets/sport-badminton.jpg";
import sportYoga from "@/assets/sport-yoga.jpg";
import sportKarate from "@/assets/sport-karate.jpg";
import sportTabletennis from "@/assets/sport-tabletennis.jpg";
import sportSwimming from "@/assets/sport-swimming.jpg";
import sportSkating from "@/assets/sport-skating.jpg";

const sportImages = [
  { src: sportBadminton, alt: "Badminton", label: "Badminton" },
  { src: sportYoga, alt: "Yoga", label: "Yoga" },
  { src: sportKarate, alt: "Karate", label: "Karate" },
  { src: sportTabletennis, alt: "Table Tennis", label: "Table Tennis" },
  { src: sportSwimming, alt: "Swimming", label: "Swimming" },
  { src: sportSkating, alt: "Roller Skating", label: "Skating" },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % sportImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

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
          {/* Auto-scrolling sport images */}
          <div className="relative rounded-2xl overflow-hidden h-[500px] border border-border/50">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={sportImages[current].src}
                alt={sportImages[current].alt}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            {/* Sport label */}
            <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
              <p className="text-primary font-bold text-sm">{sportImages[current].label}</p>
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 right-4 flex gap-1.5">
              {sportImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-primary w-5' : 'bg-muted-foreground/50'}`}
                />
              ))}
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
