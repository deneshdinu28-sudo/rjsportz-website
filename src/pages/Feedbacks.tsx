import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Feedbacks = () => {
  const navigate = useNavigate();

  const allTestimonials = [
    {
      id: 1,
      name: "Alex Chen",
      occupation: "Software Engineer",
      image: testimonial1,
      rating: 5,
      text: "RJ's coaching transformed my game completely! From barely hitting the shuttlecock to winning local tournaments. His technical expertise and patient teaching style made all the difference. The personalized training plans really helped me progress faster than I ever imagined.",
      initials: "AC",
      date: "2 months ago"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      occupation: "Marketing Manager",
      image: testimonial2,
      rating: 5,
      text: "Amazing coach! RJ helped me improve my footwork and strategy. The personalized training sessions really accelerated my progress. Highly recommended for players of all levels. His ability to break down complex techniques into simple steps is remarkable.",
      initials: "SJ",
      date: "3 months ago"
    },
    {
      id: 3,
      name: "David Kumar",
      occupation: "Business Owner",
      image: testimonial3,
      rating: 5,
      text: "Professional, dedicated, and results-driven coaching. RJ's approach to building fundamentals while keeping sessions fun and engaging is exceptional. My entire family trains with him now! He's patient with kids and challenging for adults.",
      initials: "DK",
      date: "1 month ago"
    },
    {
      id: 4,
      name: "Emily Watson",
      occupation: "College Student",
      image: testimonial1,
      rating: 5,
      text: "I started as a complete beginner and now I'm playing competitively! RJ's structured approach and constant encouragement kept me motivated. The technical improvements I've made in just 6 months are incredible.",
      initials: "EW",
      date: "4 months ago"
    },
    {
      id: 5,
      name: "Michael Rodriguez",
      occupation: "Teacher",
      image: testimonial2,
      rating: 5,
      text: "Outstanding coaching methodology! RJ doesn't just teach techniques, he teaches you how to think about the game strategically. His feedback is always constructive and helps you improve constantly.",
      initials: "MR",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Lisa Park",
      occupation: "Doctor",
      image: testimonial3,
      rating: 5,
      text: "RJ is incredibly professional and knowledgeable. He adapts his teaching style to each student's needs and pace. The improvement in my game has been phenomenal, and I actually look forward to every training session!",
      initials: "LP",
      date: "5 months ago"
    },
    {
      id: 7,
      name: "James Thompson",
      occupation: "Engineer",
      image: testimonial1,
      rating: 5,
      text: "Best badminton coach I've ever worked with! RJ's attention to detail and ability to spot and correct technical flaws is impressive. He's helped me break through plateaus I thought were impossible to overcome.",
      initials: "JT",
      date: "1 month ago"
    },
    {
      id: 8,
      name: "Rachel Green",
      occupation: "Accountant",
      image: testimonial2,
      rating: 5,
      text: "RJ makes learning badminton enjoyable and rewarding. His positive attitude and expert guidance have made such a difference in my game. I've gained confidence both on and off the court!",
      initials: "RG",
      date: "3 months ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="mr-4 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Student
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Feedbacks
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what our students have to say about their badminton journey with RJ Badminton coaching
            </p>
          </div>

          {/* Statistics */}
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

          {/* All Testimonials */}
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
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, index) => (
                            <Star key={index} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{testimonial.date}</span>
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

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Join our community of satisfied students and transform your badminton game today!
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
    </div>
  );
};

export default Feedbacks;