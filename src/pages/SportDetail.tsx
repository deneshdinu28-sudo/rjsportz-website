import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Star, CheckCircle, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const sportsData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  description: string;
  benefits: string[];
  details: string[];
  testimonials: { name: string; occupation: string; image: string; initials: string; rating: number; text: string }[];
}> = {
  badminton: {
    title: "Badminton",
    tagline: "Master the court with precision and power",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1920",
    description: "Our badminton program covers everything from basic footwork and grip techniques to advanced smash strategies and competitive match play.",
    benefits: ["Improved reflexes and agility", "Full body cardiovascular workout", "Strategic thinking development", "Social and competitive play", "Professional tournament preparation"],
    details: ["Beginner to advanced level training available", "Focus on singles and doubles strategy", "Footwork drills, smash techniques, and net play", "Regular practice matches and friendly tournaments", "Equipment guidance and racket selection advice"],
    testimonials: [
      { name: "Alex Chen", occupation: "Software Engineer", image: testimonial1, initials: "AC", rating: 5, text: "RJ Sports coaching transformed my badminton game completely! From barely hitting the shuttlecock to winning local tournaments." },
      { name: "James Thompson", occupation: "Engineer", image: testimonial2, initials: "JT", rating: 5, text: "Best badminton coach I've ever worked with! The attention to detail in correcting my technique is impressive." },
    ]
  },
  yoga: {
    title: "Yoga",
    tagline: "Find balance, strength, and inner peace",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920",
    description: "Our yoga program blends traditional asanas with modern wellness practices. From Hatha to Vinyasa flow, we offer classes for all levels.",
    benefits: ["Enhanced flexibility and balance", "Stress relief and mental clarity", "Core strength development", "Better posture and alignment", "Mindfulness and meditation"],
    details: ["Hatha, Vinyasa, and Power Yoga sessions", "Breathwork and pranayama techniques", "Suitable for all ages and fitness levels", "Morning and evening batches available", "Special sessions for stress management"],
    testimonials: [
      { name: "Sarah Johnson", occupation: "Marketing Manager", image: testimonial2, initials: "SJ", rating: 5, text: "The yoga sessions have completely transformed my flexibility and mental clarity. Highly recommend!" },
      { name: "Lisa Park", occupation: "Doctor", image: testimonial3, initials: "LP", rating: 5, text: "Perfect blend of traditional yoga with modern wellness. I feel so much more balanced after each session." },
    ]
  },
  karate: {
    title: "Karate",
    tagline: "Discipline, strength, and self-defense mastery",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920",
    description: "Learn traditional Shotokan karate from experienced martial artists. Our program covers kata, kumite, and self-defense techniques.",
    benefits: ["Self-defense skills", "Improved discipline and focus", "Physical conditioning", "Belt progression system", "Competition preparation"],
    details: ["Traditional Shotokan and Wado-Ryu styles", "Belt grading from white to black belt", "Kata, kumite, and self-defense modules", "Children and adult batches", "Competition coaching for state and national levels"],
    testimonials: [
      { name: "David Kumar", occupation: "Business Owner", image: testimonial3, initials: "DK", rating: 5, text: "My kids love karate training with RJ Sports. The discipline and focus they've gained is remarkable." },
      { name: "Emily Watson", occupation: "College Student", image: testimonial1, initials: "EW", rating: 5, text: "Started karate for self-defense, stayed for the incredible fitness benefits and confidence boost." },
    ]
  },
  skating: {
    title: "Skating",
    tagline: "Glide, spin, and conquer the rink",
    image: "https://images.unsplash.com/photo-1591491653056-4e9d563a42d0?w=1920",
    description: "From inline skating to roller skating, our program teaches balance, tricks, and safety. Perfect for beginners and experienced skaters.",
    benefits: ["Balance and coordination", "Lower body strength", "Cardiovascular fitness", "Trick progression", "Outdoor fitness activity"],
    details: ["Inline and quad roller skating programs", "Safety-first approach with protective gear guidance", "Speed skating and freestyle techniques", "Weekend outdoor skating sessions", "Fun group activities and skating games"],
    testimonials: [
      { name: "Michael Rodriguez", occupation: "Teacher", image: testimonial2, initials: "MR", rating: 5, text: "My daughter learned skating in just a few weeks! The coaches are patient and safety-conscious." },
      { name: "Rachel Green", occupation: "Accountant", image: testimonial3, initials: "RG", rating: 5, text: "Fun and engaging skating sessions. I never thought I'd learn to skate at my age!" },
    ]
  },
  swimming: {
    title: "Swimming",
    tagline: "Dive in and make waves",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920",
    description: "Our swimming program covers all strokes and techniques from beginner water safety to competitive swimming.",
    benefits: ["Full body workout", "Water safety skills", "All four competitive strokes", "Endurance building", "Low-impact exercise"],
    details: ["Learn freestyle, backstroke, breaststroke, and butterfly", "Water safety and survival techniques", "Lap swimming and endurance training", "Age-appropriate batches for kids and adults", "Pool facilities with trained lifeguards"],
    testimonials: [
      { name: "Alex Chen", occupation: "Software Engineer", image: testimonial1, initials: "AC", rating: 5, text: "Went from being afraid of water to swimming laps confidently. The coaches are incredibly supportive!" },
      { name: "Sarah Johnson", occupation: "Marketing Manager", image: testimonial2, initials: "SJ", rating: 5, text: "Great swimming program for both my kids. They now look forward to every session." },
    ]
  },
  "table-tennis": {
    title: "Table Tennis",
    tagline: "Speed, spin, and precision at the table",
    image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=1920",
    description: "Master the fast-paced world of table tennis with our expert coaching. Learn serves, spins, footwork, and match strategy.",
    benefits: ["Lightning-fast reflexes", "Hand-eye coordination", "Strategic game play", "Mental sharpness", "Social sport activity"],
    details: ["Forehand, backhand, and serve mastery", "Spin techniques and counter-spin strategies", "Footwork and positioning drills", "Match play and tournament simulation", "Equipment selection and table setup guidance"],
    testimonials: [
      { name: "David Kumar", occupation: "Business Owner", image: testimonial3, initials: "DK", rating: 5, text: "Table tennis sessions are super fun and competitive. My reflexes have improved dramatically!" },
      { name: "James Thompson", occupation: "Engineer", image: testimonial1, initials: "JT", rating: 5, text: "Great coaching methodology for table tennis. Love the strategic gameplay training." },
    ]
  }
};

const SportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const sport = sportsData[slug || ""];
  const { ref: feedbackRef, isVisible: feedbackVisible } = useScrollAnimation();

  if (!sport) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">Sport Not Found</h1>
          <Link to="/"><Button variant="outline">Go Home</Button></Link>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img src={sport.image} alt={sport.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30"></div>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
        <motion.div 
          className="relative z-10 container mx-auto px-6 pb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-2">{sport.title}</h1>
          <p className="text-xl text-primary font-semibold">{sport.tagline}</p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-black text-foreground mb-4">About This Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{sport.description}</p>
            </div>

            <div>
              <h2 className="text-3xl font-black text-foreground mb-6">Key Benefits</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {sport.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <Star className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-foreground mb-6">Program Details</h2>
              <div className="space-y-3">
                {sport.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <Button className="bg-gradient-to-r from-primary to-accent px-10" size="lg" onClick={scrollToContact}>
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sport-specific Feedback */}
      <section className="py-16 bg-secondary/20" ref={feedbackRef}>
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-700 ${feedbackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              What Our <span className="text-primary">{sport.title} Students</span> Say
            </h2>
            <p className="text-muted-foreground">Real feedback from athletes training with us</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {sport.testimonials.map((t, i) => (
              <Card 
                key={i}
                className={`border-border/50 transition-all duration-500 hover:scale-[1.02] ${feedbackVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-14 h-14 mr-4 ring-2 ring-primary/30">
                      <AvatarImage src={t.image} alt={t.name} />
                      <AvatarFallback className="bg-primary text-primary-foreground font-bold">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-foreground">{t.name}</h3>
                      <p className="text-muted-foreground text-sm">{t.occupation}</p>
                      <div className="flex mt-1">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-foreground leading-relaxed pl-6 italic">"{t.text}"</p>
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

      <Footer />
    </div>
  );
};

export default SportDetail;
