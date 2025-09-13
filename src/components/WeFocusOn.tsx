import { Card, CardContent } from "@/components/ui/card";

const WeFocusOn = () => {
  const activities = [
    {
      title: "Badminton",
      image: "/src/assets/hero-badminton.jpg",
      description: "Professional badminton coaching with expert techniques and strategies"
    },
    {
      title: "Yoga",
      image: "/src/assets/coaching-session.jpg", 
      description: "Enhance flexibility, balance, and mental wellness through yoga"
    },
    {
      title: "Fitness",
      image: "/src/assets/training-session-1.jpg",
      description: "Complete fitness programs for strength and conditioning"
    },
    {
      title: "Table Tennis",
      image: "/src/assets/group-training.jpg",
      description: "Master the art of table tennis with professional guidance"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            We Focus
            <span className="block text-primary">On</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our specialized training programs designed to help you excel in your favorite sports and fitness activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {activity.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeFocusOn;