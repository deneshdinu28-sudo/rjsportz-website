import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, Trophy } from "lucide-react";
import founderImage from "@/assets/founder-ranjith.jpg";
import coFounderImage from "@/assets/co-founder.jpg";

const AboutUs = () => {
  const staff = [
    {
      name: "Ranjith Kumar",
      occupation: "Founder & Head Coach",
      image: founderImage,
      description: "BWF Level 3 Certified Coach, State Level Champion"
    },
    {
      name: "Priya Sharma", 
      occupation: "Co-Founder & Yoga Instructor",
      image: coFounderImage,
      description: "Certified Yoga Instructor, Fitness Specialist"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To make professional sports training accessible by bringing expert coaching directly to your home, transforming lives through badminton, yoga, and fitness."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      description: "To become the leading at-home sports academy, creating a healthier community by making fitness training convenient and personalized for every individual."
    },
    {
      icon: Trophy,
      title: "Our Goals",
      description: "To train 1000+ students, develop champions, and establish RJ Academy as the premier choice for home-based sports and fitness training across the region."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              RJ Academy
            </h1>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About
              <span className="block text-primary">RJ Academy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Founded with a vision to make professional sports training accessible to everyone, 
              RJ Academy brings expert coaching in badminton, yoga, and fitness directly to your doorstep.
            </p>
          </div>

          {/* Founder's Story */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                The Journey of <span className="text-primary">Ranjith</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={founderImage} 
                    alt="Ranjith Kumar - Founder of RJ Academy"
                    className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    From playing badminton on the streets with makeshift rackets to becoming a state-level champion, 
                    Ranjith's journey is one of determination and passion. Growing up in a modest family, he discovered 
                    his love for badminton at the age of 12 when he first held a proper racket.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Despite financial constraints, Ranjith's dedication never wavered. He practiced for hours, 
                    often using public courts and borrowed equipment. His breakthrough came when he won his first 
                    district championship at 16, which opened doors to better training facilities.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    After achieving success at the state level and earning his BWF Level 3 certification, 
                    Ranjith realized his true calling was to make quality sports training accessible to everyone, 
                    regardless of their location or circumstances. This vision led to the birth of RJ Academy.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl">
                    <p className="text-primary font-semibold italic">
                      "Every child deserves the chance to pursue their dreams. If I can bring professional training 
                      to their doorstep, then distance and accessibility will never be barriers to success."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">- Ranjith Kumar, Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {staff.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 font-medium mb-2">{member.occupation}</p>
                      <p className="text-white/80 text-sm">{member.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Mission, Vision, Goals */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of students who have transformed their lives through our personalized 
                at-home training programs.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="px-8">
                  Get Started Today
                </Button>
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default AboutUs;