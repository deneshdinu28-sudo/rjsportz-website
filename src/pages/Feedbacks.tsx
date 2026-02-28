import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { allTestimonials } from "@/data/testimonials";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Feedbacks = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Navigation />
      <section className="pt-24 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student & Parents
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Feedbacks
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what our students have to say about their sports journey with RJ Sportz coaching
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5.0</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-card via-card to-secondary/20 border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 mr-4 ring-4 ring-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold text-lg">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
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

          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our community of satisfied students and transform your sports game today!
                </p>
                <Button 
                  size="lg"
                  onClick={() => navigate('/#contact')}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                >
                  Book Your Session Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Feedbacks;
