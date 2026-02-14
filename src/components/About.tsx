import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import coachingImage from "@/assets/coaching-session.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Students Trained" },
    { number: "15", label: "Championships Won" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <img 
              src={coachingImage} 
              alt="Professional sports coaching session"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover border border-border/50"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-[0_0_30px_hsl(100_95%_51%/0.3)]">
              <p className="text-primary-foreground font-bold text-lg">Certified Coach</p>
              <p className="text-primary-foreground/80">BWF Level 3</p>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
              About Your <span className="text-primary">Coach</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in professional sports, I've dedicated my career 
              to helping athletes of all levels achieve their goals across multiple disciplines.
            </p>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our philosophy at RJ Sports focuses on holistic development through badminton, yoga, 
              karate, skating, swimming, and table tennis training.
            </p>
            
            <Link to="/about">
              <Button variant="outline" size="lg" className="mb-8">
                Know More
              </Button>
            </Link>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="p-4 text-center bg-card border-border/50 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(100_95%_51%/0.1)] transition-all duration-300">
                    <div className="text-2xl font-bold text-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
