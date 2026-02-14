import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Award, Clock, Users } from "lucide-react";

const sportData: Record<string, {
  title: string;
  tagline: string;
  heroImage: string;
  description: string;
  benefits: string[];
  coaches: { name: string; role: string; experience: string; image: string; specialties: string[] }[];
  schedule: string;
  pricing: string;
}> = {
  badminton: {
    title: "Badminton",
    tagline: "Master the court with precision and power",
    heroImage: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=1920",
    description: "Our badminton program covers everything from basic techniques to advanced competition strategies. Train with certified BWF coaches who have years of professional experience.",
    benefits: ["Improve reflexes & agility", "Master smash & drop shots", "Competition preparation", "Footwork & court positioning", "Doubles strategy & communication"],
    coaches: [
      { name: "Coach Ranjith", role: "Head Badminton Coach", experience: "12+ years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", specialties: ["Singles Strategy", "Smash Technique", "Footwork"] },
      { name: "Coach Priya", role: "Assistant Coach", experience: "8+ years", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400", specialties: ["Doubles Play", "Youth Training", "Fitness"] }
    ],
    schedule: "Mon-Sat: 6 AM - 9 PM",
    pricing: "Starting from $50/session"
  },
  yoga: {
    title: "Yoga",
    tagline: "Find balance, strength, and inner peace",
    heroImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920",
    description: "Our yoga programs blend traditional practices with modern fitness techniques. From Hatha to Vinyasa, find the style that suits your journey to wellness.",
    benefits: ["Increased flexibility", "Stress reduction", "Core strength building", "Improved breathing", "Mental clarity & focus"],
    coaches: [
      { name: "Guru Anand", role: "Senior Yoga Instructor", experience: "15+ years", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400", specialties: ["Hatha Yoga", "Pranayama", "Meditation"] },
      { name: "Instructor Maya", role: "Yoga Therapist", experience: "10+ years", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400", specialties: ["Vinyasa Flow", "Therapeutic Yoga", "Flexibility"] }
    ],
    schedule: "Daily: 5 AM - 8 PM",
    pricing: "Starting from $40/session"
  },
  karate: {
    title: "Karate",
    tagline: "Discipline, strength, and self-defense mastery",
    heroImage: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=1920",
    description: "Learn traditional karate with modern training methods. Our program builds discipline, confidence, and practical self-defense skills for all ages.",
    benefits: ["Self-defense techniques", "Improved discipline", "Physical conditioning", "Belt progression system", "Competition training"],
    coaches: [
      { name: "Sensei Takeshi", role: "Head Karate Instructor", experience: "20+ years", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400", specialties: ["Shotokan Karate", "Kata", "Kumite"] },
      { name: "Sensei Keiko", role: "Youth Instructor", experience: "12+ years", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400", specialties: ["Kids Karate", "Self-Defense", "Forms"] }
    ],
    schedule: "Mon-Sat: 4 PM - 9 PM",
    pricing: "Starting from $60/session"
  },
  skating: {
    title: "Skating",
    tagline: "Glide with confidence and style",
    heroImage: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=1920",
    description: "From beginner basics to advanced tricks, our skating program teaches balance, coordination, and technique in a safe and fun environment.",
    benefits: ["Balance & coordination", "Cardiovascular fitness", "Trick progression", "Safety techniques", "Speed & agility training"],
    coaches: [
      { name: "Coach Alex", role: "Senior Skating Instructor", experience: "10+ years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400", specialties: ["Inline Skating", "Speed Skating", "Freestyle"] },
      { name: "Coach Nina", role: "Beginner Coach", experience: "7+ years", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400", specialties: ["Kids Classes", "Safety Training", "Balance"] }
    ],
    schedule: "Tue-Sun: 7 AM - 7 PM",
    pricing: "Starting from $45/session"
  },
  swimming: {
    title: "Swimming",
    tagline: "Dive into excellence with expert coaching",
    heroImage: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920",
    description: "Our swimming program covers all strokes and levels. Whether you're learning to float or training for competitions, our certified coaches guide you every step.",
    benefits: ["All stroke techniques", "Water safety", "Endurance building", "Competition prep", "Breathing techniques"],
    coaches: [
      { name: "Coach Michael", role: "Head Swimming Coach", experience: "14+ years", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400", specialties: ["Freestyle", "Butterfly", "Competition"] },
      { name: "Coach Lisa", role: "Beginner & Kids Coach", experience: "9+ years", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400", specialties: ["Water Safety", "Backstroke", "Youth Training"] }
    ],
    schedule: "Daily: 6 AM - 8 PM",
    pricing: "Starting from $55/session"
  },
  "table-tennis": {
    title: "Table Tennis",
    tagline: "Speed, spin, and precision at the table",
    heroImage: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=1920",
    description: "Master the fast-paced world of table tennis with our expert coaches. Learn serves, spins, and strategies that will elevate your game to the next level.",
    benefits: ["Serve & spin mastery", "Quick reflexes", "Strategic play", "Forehand & backhand power", "Match preparation"],
    coaches: [
      { name: "Coach Wei", role: "Head Table Tennis Coach", experience: "16+ years", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400", specialties: ["Spin Techniques", "Strategy", "Competition"] },
      { name: "Coach Emma", role: "Development Coach", experience: "8+ years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400", specialties: ["Beginners", "Footwork", "Serve Training"] }
    ],
    schedule: "Mon-Sat: 8 AM - 9 PM",
    pricing: "Starting from $45/session"
  }
};

const SportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const sport = sportData[slug || ""];

  if (!sport) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-foreground mb-4">Sport Not Found</h1>
          <Link to="/"><Button>Back to Home</Button></Link>
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
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={sport.heroImage} alt={sport.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 pb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-3">
              {sport.title}
            </h1>
            <p className="text-xl text-primary font-semibold">{sport.tagline}</p>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto px-6 py-16">
        {/* Description & Benefits */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-black text-foreground mb-6">About Our <span className="text-primary">{sport.title}</span> Program</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{sport.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" /><span>{sport.schedule}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Award className="w-5 h-5 text-primary" /><span>{sport.pricing}</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">What You'll Learn</h3>
            <ul className="space-y-4">
              {sport.benefits.map((benefit, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 shadow-[0_0_8px_hsl(100_95%_51%/0.5)]"></div>
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Coaches */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-black text-foreground mb-10 text-center">
            Meet Our <span className="text-primary">Coaches</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sport.coaches.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-card border-border/50 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(100_95%_51%/0.15)] transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={coach.image} alt={coach.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  <CardContent className="p-6 -mt-12 relative">
                    <h3 className="text-xl font-bold text-foreground">{coach.name}</h3>
                    <p className="text-primary font-semibold text-sm mb-2">{coach.role}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <Star className="w-4 h-4 text-primary" /> {coach.experience} experience
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {coach.specialties.map((s, i) => (
                        <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">{s}</span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center bg-card border border-border/50 rounded-2xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-black text-foreground mb-4">Ready to Start Your <span className="text-primary">{sport.title}</span> Journey?</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Get in touch with our team to book your first session and take the first step towards mastering {sport.title.toLowerCase()}.</p>
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 font-bold" onClick={scrollToContact}>
            Book a Session
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default SportDetail;
