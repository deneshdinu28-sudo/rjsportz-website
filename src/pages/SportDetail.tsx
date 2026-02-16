import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, MapPin, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const sportsData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  description: string;
  benefits: string[];
  details: string[];
  gallery: string[];
}> = {
  badminton: {
    title: "Badminton",
    tagline: "Master the court with precision and power",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1920",
    description: "Our badminton program covers everything from basic footwork and grip techniques to advanced smash strategies and competitive match play. Whether you're picking up a racket for the first time or preparing for tournaments, our certified coaches will guide you every step of the way.",
    benefits: ["Improved reflexes and agility", "Full body cardiovascular workout", "Strategic thinking development", "Social and competitive play", "Professional tournament preparation"],
    details: ["Beginner to advanced level training available", "Focus on singles and doubles strategy", "Footwork drills, smash techniques, and net play", "Regular practice matches and friendly tournaments", "Equipment guidance and racket selection advice"],
    gallery: ["https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800", "https://images.unsplash.com/photo-1613918431703-aa50889e3be9?w=800"]
  },
  yoga: {
    title: "Yoga",
    tagline: "Find balance, strength, and inner peace",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920",
    description: "Our yoga program blends traditional asanas with modern wellness practices. From Hatha to Vinyasa flow, we offer classes for all levels. Build flexibility, strength, and mental clarity with expert guidance in a supportive environment.",
    benefits: ["Enhanced flexibility and balance", "Stress relief and mental clarity", "Core strength development", "Better posture and alignment", "Mindfulness and meditation"],
    details: ["Hatha, Vinyasa, and Power Yoga sessions", "Breathwork and pranayama techniques", "Suitable for all ages and fitness levels", "Morning and evening batches available", "Special sessions for stress management"],
    gallery: ["https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800", "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800"]
  },
  karate: {
    title: "Karate",
    tagline: "Discipline, strength, and self-defense mastery",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920",
    description: "Learn traditional Shotokan karate from experienced martial artists. Our program covers kata, kumite, and self-defense techniques. Build discipline, confidence, and physical fitness while learning an ancient art form.",
    benefits: ["Self-defense skills", "Improved discipline and focus", "Physical conditioning", "Belt progression system", "Competition preparation"],
    details: ["Traditional Shotokan and Wado-Ryu styles", "Belt grading from white to black belt", "Kata, kumite, and self-defense modules", "Children and adult batches", "Competition coaching for state and national levels"],
    gallery: ["https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800"]
  },
  skating: {
    title: "Skating",
    tagline: "Glide, spin, and conquer the rink",
    image: "https://images.unsplash.com/photo-1591491653056-4e9d563a42d0?w=1920",
    description: "From inline skating to roller skating, our program teaches balance, tricks, and safety. Perfect for beginners wanting to learn or experienced skaters looking to level up their skills with professional guidance.",
    benefits: ["Balance and coordination", "Lower body strength", "Cardiovascular fitness", "Trick progression", "Outdoor fitness activity"],
    details: ["Inline and quad roller skating programs", "Safety-first approach with protective gear guidance", "Speed skating and freestyle techniques", "Weekend outdoor skating sessions", "Fun group activities and skating games"],
    gallery: ["https://images.unsplash.com/photo-1591491653056-4e9d563a42d0?w=800"]
  },
  swimming: {
    title: "Swimming",
    tagline: "Dive in and make waves",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920",
    description: "Our swimming program covers all strokes and techniques from beginner water safety to competitive swimming. Train in a supportive environment with certified swimming coaches who prioritize safety and skill development.",
    benefits: ["Full body workout", "Water safety skills", "All four competitive strokes", "Endurance building", "Low-impact exercise"],
    details: ["Learn freestyle, backstroke, breaststroke, and butterfly", "Water safety and survival techniques", "Lap swimming and endurance training", "Age-appropriate batches for kids and adults", "Pool facilities with trained lifeguards"],
    gallery: ["https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800"]
  },
  "table-tennis": {
    title: "Table Tennis",
    tagline: "Speed, spin, and precision at the table",
    image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=1920",
    description: "Master the fast-paced world of table tennis with our expert coaching. Learn serves, spins, footwork, and match strategy. Our program caters to recreational players and competitive athletes alike.",
    benefits: ["Lightning-fast reflexes", "Hand-eye coordination", "Strategic game play", "Mental sharpness", "Social sport activity"],
    details: ["Forehand, backhand, and serve mastery", "Spin techniques and counter-spin strategies", "Footwork and positioning drills", "Match play and tournament simulation", "Equipment selection and table setup guidance"],
    gallery: ["https://images.unsplash.com/photo-1611251135345-18c56206b863?w=800"]
  }
};

const SportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const sport = sportsData[slug || ""];

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
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
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

              {/* Program Details */}
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

              {/* Gallery */}
              <div>
                <h2 className="text-3xl font-black text-foreground mb-6">Gallery</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sport.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${sport.title} training`} className="w-full h-48 object-cover rounded-lg border border-border/50" />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/50 sticky top-20">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" /> Location
                    </h3>
                    <p className="text-muted-foreground">Training at your apartment or our facility</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" /> Class Size
                    </h3>
                    <p className="text-muted-foreground">Individual & small groups (max 8)</p>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-accent" size="lg" onClick={scrollToContact}>
                    Book a Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportDetail;
