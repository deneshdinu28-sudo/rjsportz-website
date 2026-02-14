import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const WeFocusOn = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  const activities = [
    {
      title: "Badminton",
      slug: "badminton",
      image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800",
      description: "Professional badminton coaching with expert techniques and strategies"
    },
    {
      title: "Yoga",
      slug: "yoga",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
      description: "Enhance flexibility, balance, and mental wellness through yoga"
    },
    {
      title: "Karate",
      slug: "karate",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800",
      description: "Traditional martial arts training for discipline and self-defense"
    },
    {
      title: "Skating",
      slug: "skating",
      image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800",
      description: "Learn skating techniques from beginner to advanced levels"
    },
    {
      title: "Swimming",
      slug: "swimming",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
      description: "Master swimming strokes and water safety with professional guidance"
    },
    {
      title: "Table Tennis",
      slug: "table-tennis",
      image: "https://images.unsplash.com/photo-1558743212-c4e2e2e2e2e2?w=800",
      description: "Master the art of table tennis with professional guidance"
    }
  ];

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            We Focus <span className="text-primary">On</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized training programs designed to help you excel in your favorite sports and fitness activities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="group cursor-pointer hover:shadow-[0_0_30px_hsl(100_95%_51%/0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border-border/50 hover:border-primary/50 bg-card"
                onClick={() => navigate(`/sport/${activity.slug}`)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {activity.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-primary text-sm font-semibold mt-3 group-hover:translate-x-1 transition-transform duration-300">
                    Learn more →
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeFocusOn;
