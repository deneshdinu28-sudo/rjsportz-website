import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      id: 1,
      name: "Alex Chen",
      occupation: "Software Engineer",
      image: testimonial1,
      rating: 5,
      text: "RJ's coaching transformed my game completely! From barely hitting the shuttlecock to winning local tournaments. His technical expertise and patient teaching style made all the difference.",
      initials: "AC"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      occupation: "Marketing Manager",
      image: testimonial2,
      rating: 5,
      text: "Amazing coach! RJ helped me improve my footwork and strategy. The personalized training sessions really accelerated my progress. Highly recommended for players of all levels.",
      initials: "SJ"
    },
    {
      id: 3,
      name: "David Kumar",
      occupation: "Business Owner",
      image: testimonial3,
      rating: 5,
      text: "Professional, dedicated, and results-driven coaching. RJ's approach to building fundamentals while keeping sessions fun and engaging is exceptional. My entire family trains with him now!",
      initials: "DK"
    }
  ];

  const handleSeeMore = () => {
    navigate('/feedbacks');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from players who've transformed their badminton journey with RJ Badminton coaching
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative bg-gradient-to-br from-card via-card to-secondary/20 border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-16 h-16 mr-4 ring-4 ring-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.occupation}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground leading-relaxed pl-6 italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            onClick={handleSeeMore}
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:from-primary/20 hover:to-accent/20 text-foreground font-semibold px-8"
          >
            See More Feedbacks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;