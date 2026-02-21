import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Testimonials = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      id: 1, name: "Alex Chen", occupation: "Software Engineer", image: testimonial1,
      rating: 5, text: "RJ Sportz coaching transformed my game completely! From barely hitting the shuttlecock to winning local tournaments. His technical expertise and patient teaching style made all the difference.", initials: "AC"
    },
    {
      id: 2, name: "Sarah Johnson", occupation: "Marketing Manager", image: testimonial2,
      rating: 5, text: "Amazing coach! RJ helped me improve my footwork and strategy. The personalized training sessions really accelerated my progress. Highly recommended for players of all levels.", initials: "SJ"
    },
    {
      id: 3, name: "David Kumar", occupation: "Business Owner", image: testimonial3,
      rating: 5, text: "Professional, dedicated, and results-driven coaching. RJ's approach to building fundamentals while keeping sessions fun and engaging is exceptional. My entire family trains with him now!", initials: "DK"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from athletes who've transformed their sports journey with RJ Sportz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={`border-border/50 hover:shadow-[0_0_30px_hsl(105_98%_51%/0.1)] transition-all duration-500 hover:scale-[1.02] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="w-16 h-16 mr-4 ring-2 ring-primary/30">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.occupation}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground leading-relaxed pl-6 italic">"{testimonial.text}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => navigate('/feedbacks')} variant="outline" size="lg" className="font-semibold px-8">
            See More Feedbacks
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
