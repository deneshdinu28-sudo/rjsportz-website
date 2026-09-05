import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import skatingImage from "@/assets/skating-focus.jpg";

const WeFocusOn = () => {
  const { ref, isVisible } = useScrollAnimation();

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
      image: skatingImage,
      description: "Learn roller skating from basics to advanced tricks with expert coaches"
    },
    {
      title: "Swimming",
      slug: "swimming",
      image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
      description: "Learn swimming techniques from beginner to advanced levels"
    },
    {
      title: "Table Tennis",
      slug: "table-tennis",
      image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=800",
      description: "Master the art of table tennis with professional guidance"
    },
    {
      title: "Football",
      slug: "football",
      image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800",
      description: "Build teamwork, endurance, and ball control with expert football coaching"
    },
    {
      title: "Basketball",
      slug: "basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
      description: "Develop shooting, dribbling, and court awareness with professional training"
    },
    {
      title: "Zumba",
      slug: "zumba",
      image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800",
      description: "High-energy dance fitness combining Latin rhythms with cardio workouts"
    },
    {
      title: "Chess",
      slug: "chess",
      image: "https://images.unsplash.com/photo-1758101308935-692ed18dad48?w=800",
      description: "Sharpen strategic thinking and focus through personalized chess coaching for all skill levels"
    },
    {
      title: "Arts",
      slug: "arts",
      image: "https://images.unsplash.com/photo-1512253080918-79cf0c2e0650?w=800",
      description: "Unlock creativity through guided drawing, painting, and craft sessions for every age"
    },
    {
      title: "MMA & Kung Fu",
      slug: "mma-kungfu",
      image: "https://images.unsplash.com/photo-1514050566906-8d077bae7046?w=800",
      description: "Build power, discipline, and real-world self-defense skills through dynamic MMA and traditional Kung Fu training"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            We Focus <span className="text-primary">On</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized training programs designed to help you excel in your favorite sports and fitness activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Link to={`/sport/${activity.slug}`} key={index} className="flex">
              <Card 
                className={`group hover:shadow-[0_0_30px_hsl(105_98%_51%/0.2)] transition-all duration-500 hover:-translate-y-2 overflow-hidden border-border/50 cursor-pointer flex flex-col w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {activity.title}
                    </h3>
                  </div>
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground flex-grow">
                    {activity.description}
                  </p>
                  <span className="text-primary text-sm font-semibold mt-2 inline-block group-hover:translate-x-1 transition-transform">
                    Learn More →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeFocusOn;
