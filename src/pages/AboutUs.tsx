import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";

import founderImage from "@/assets/founder-ranjith.jpg";
import coFounderImage from "@/assets/co-founder.jpg";

const AboutUs = () => {
  const staff = [
    {
      name: "Ranjit Subramaniyam",
      occupation: "Founder & Head Coach",
      image: founderImage,
      description: "BWF Level 3 Certified Coach, Ranked #16 in India & #2 in State"
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
      description: "To train 2000+ students, develop national-level champions, and establish RJ Sportz as the premier choice for home-based sports and fitness training across the region."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 py-20">
        <div className="container mx-auto px-6">
          
          {/* Hero Section with 3D elements */}
          <div className="text-center mb-16 py-12 rounded-3xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              About <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">RJ Sportz</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              RJ Sportz is your trusted at-home sports academy offering expert coaching in badminton, yoga, karate, skating, swimming, table tennis, football, basketball, and zumba for all ages and skill levels.
            </p>
          </div>

          {/* Founder's Story */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                The Journey of <span className="text-primary">Ranjit</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <img 
                    src={founderImage} 
                    alt="Ranjit Subramaniyam - Founder of RJ Sportz"
                    className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
                  />
                </div>
                
                <div className="space-y-5">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    What started as a passion on neighbourhood courts turned into a lifelong mission. Ranjit rose from humble beginnings to become a BWF Level 3 certified coach, training over 1000+ students across 15+ years.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With a dream to make professional sports training accessible to all, he founded <span className="text-primary font-semibold">RJ Sportz</span>, bringing expert coaching in badminton, yoga, karate, skating, swimming, table tennis, football, basketball, and zumba right to your doorstep.
                  </p>
                  
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-5 rounded-xl">
                    <p className="text-primary font-semibold italic">
                      "Every child deserves the chance to chase their dreams, distance should never be a barrier."
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Ranjit Subramaniyam, Founder</p>
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
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold mb-1 text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium mb-2">{member.occupation}</p>
                      <p className="text-muted-foreground text-sm">{member.description}</p>
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
                Join over 1000 students who have transformed their lives through our personalized 
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
