import { useParams, Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, CheckCircle, Users, Clock, Award, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

import { useEffect } from "react";
import skatingImage from "@/assets/skating-focus.jpg";
import chessImage from "@/assets/chess-board.jpg";
import artsImage from "@/assets/arts-drawing.jpg";
import mmaKungFuImage from "@/assets/mma-kung-fu.jpg";

const sportsData: Record<string, {
  title: string;
  tagline: string;
  image: string;
  description: string;
  benefits: string[];
  details: string[];
  ageGroups: string[];
  trainingLevels: { level: string; description: string }[];
  equipment: string[];
}> = {
  badminton: {
    title: "Badminton",
    tagline: "Master the court with precision and power",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800",
    description: "Our badminton program covers everything from basic footwork and grip techniques to advanced smash strategies and competitive match play.",
    benefits: ["Improved reflexes and agility", "Full body cardiovascular workout", "Strategic thinking development", "Social and competitive play", "Professional tournament preparation"],
    details: ["Beginner to advanced level training available", "Focus on singles and doubles strategy", "Footwork drills, smash techniques, and net play", "Regular practice matches and friendly tournaments", "Equipment guidance and racket selection advice"],
    ageGroups: ["Kids (6-12 years)", "Teens (13-17 years)", "Adults (18+ years)", "Senior players (40+ years)"],
    trainingLevels: [
      { level: "Beginner", description: "Grip, stance, basic serves, and rally practice" },
      { level: "Intermediate", description: "Smash, drop shots, footwork drills, and match strategy" },
      { level: "Advanced", description: "Tournament prep, deception shots, and competitive play" },
    ],
    equipment: ["Badminton racket (guidance provided)", "Non-marking shoes", "Comfortable sportswear", "Shuttlecocks (provided during training)"],
  },
  yoga: {
    title: "Yoga",
    tagline: "Find balance, strength, and inner peace",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800",
    description: "Our yoga program blends traditional asanas with modern wellness practices. From Hatha to Vinyasa flow, we offer classes for all levels.",
    benefits: ["Enhanced flexibility and balance", "Stress relief and mental clarity", "Core strength development", "Better posture and alignment", "Mindfulness and meditation"],
    details: ["Hatha, Vinyasa, and Power Yoga sessions", "Breathwork and pranayama techniques", "Suitable for all ages and fitness levels", "Morning and evening batches available", "Special sessions for stress management"],
    ageGroups: ["Kids (8-14 years)", "Teens & Adults (15-50 years)", "Seniors (50+ years)", "Prenatal yoga available"],
    trainingLevels: [
      { level: "Foundation", description: "Basic asanas, breathing, and body awareness" },
      { level: "Flow", description: "Vinyasa sequences, balance poses, and flexibility" },
      { level: "Mastery", description: "Advanced inversions, meditation, and pranayama" },
    ],
    equipment: ["Yoga mat (can be provided)", "Comfortable stretch clothing", "Water bottle", "Towel"],
  },
  karate: {
    title: "Karate",
    tagline: "Discipline, strength, and self-defense mastery",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800",
    description: "Learn traditional Shotokan karate from experienced martial artists. Our program covers kata, kumite, and self-defense techniques.",
    benefits: ["Self-defense skills", "Improved discipline and focus", "Physical conditioning", "Belt progression system", "Competition preparation"],
    details: ["Traditional Shotokan and Wado-Ryu styles", "Belt grading from white to black belt", "Kata, kumite, and self-defense modules", "Children and adult batches", "Competition coaching for state and national levels"],
    ageGroups: ["Little Warriors (5-8 years)", "Juniors (9-14 years)", "Seniors (15+ years)", "Women's self-defense batch"],
    trainingLevels: [
      { level: "White to Yellow Belt", description: "Basic stances, blocks, punches, and kata" },
      { level: "Green to Brown Belt", description: "Advanced kata, kumite, and sparring drills" },
      { level: "Black Belt Prep", description: "Competition-level training and grading preparation" },
    ],
    equipment: ["Karate Gi (uniform)", "Belt (provided on grading)", "Protective gear for sparring", "Mouth guard"],
  },
  skating: {
    title: "Skating",
    tagline: "Glide, spin, and conquer the rink",
    image: skatingImage,
    description: "From inline skating to roller skating, our program teaches balance, tricks, and safety. Perfect for beginners and experienced skaters.",
    benefits: ["Balance and coordination", "Lower body strength", "Cardiovascular fitness", "Trick progression", "Outdoor fitness activity"],
    details: ["Inline and quad roller skating programs", "Safety-first approach with protective gear guidance", "Speed skating and freestyle techniques", "Weekend outdoor skating sessions", "Fun group activities and skating games"],
    ageGroups: ["Kids (5-10 years)", "Teens (11-16 years)", "Adults (17+ years)", "Family sessions available"],
    trainingLevels: [
      { level: "Beginner", description: "Balance, standing, gliding, and safe stopping" },
      { level: "Intermediate", description: "Turning, crossovers, backward skating, and speed" },
      { level: "Advanced", description: "Freestyle tricks, slalom, and speed skating" },
    ],
    equipment: ["Inline or quad skates", "Helmet (mandatory)", "Knee & elbow pads", "Wrist guards"],
  },
  swimming: {
    title: "Swimming",
    tagline: "Dive in and make waves",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
    description: "Our swimming program covers all strokes and techniques from beginner water safety to competitive swimming.",
    benefits: ["Full body workout", "Water safety skills", "All four competitive strokes", "Endurance building", "Low-impact exercise"],
    details: ["Learn freestyle, backstroke, breaststroke, and butterfly", "Water safety and survival techniques", "Lap swimming and endurance training", "Age-appropriate batches for kids and adults", "Pool facilities with trained lifeguards"],
    ageGroups: ["Toddlers (3-5 years)", "Kids (6-12 years)", "Teens & Adults (13+ years)", "Aqua fitness for seniors"],
    trainingLevels: [
      { level: "Water Comfort", description: "Floating, kicking, breathing, and water confidence" },
      { level: "Stroke Development", description: "Freestyle, backstroke, and basic breaststroke" },
      { level: "Competitive", description: "Butterfly, race starts, turns, and endurance laps" },
    ],
    equipment: ["Swimsuit", "Swimming goggles", "Swim cap", "Towel and flip-flops"],
  },
  "table-tennis": {
    title: "Table Tennis",
    tagline: "Speed, spin, and precision at the table",
    image: "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=800",
    description: "Master the fast-paced world of table tennis with our expert coaching. Learn serves, spins, footwork, and match strategy.",
    benefits: ["Lightning-fast reflexes", "Hand-eye coordination", "Strategic game play", "Mental sharpness", "Social sport activity"],
    details: ["Forehand, backhand, and serve mastery", "Spin techniques and counter-spin strategies", "Footwork and positioning drills", "Match play and tournament simulation", "Equipment selection and table setup guidance"],
    ageGroups: ["Kids (7-12 years)", "Teens (13-17 years)", "Adults (18+ years)", "Recreational players"],
    trainingLevels: [
      { level: "Beginner", description: "Grip, basic strokes, and rally consistency" },
      { level: "Intermediate", description: "Spin serves, loop drives, and footwork patterns" },
      { level: "Advanced", description: "Match tactics, counter-attacks, and tournament prep" },
    ],
    equipment: ["Table tennis paddle (guidance provided)", "TT balls (provided)", "Comfortable sportswear", "Non-marking indoor shoes"],
  },
  football: {
    title: "Football",
    tagline: "Teamwork, skill, and passion on the field",
    image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800",
    description: "Our football program develops technical skills, tactical awareness, and team play. From dribbling fundamentals to match-day strategies, we train players to compete at every level.",
    benefits: ["Cardiovascular endurance", "Teamwork and communication", "Ball control and dribbling", "Tactical thinking", "Leadership development"],
    details: ["Dribbling, passing, and shooting drills", "Positional play and formation tactics", "Set-piece training and game scenarios", "Small-sided games and scrimmages", "Fitness conditioning for match readiness"],
    ageGroups: ["Kids (5-10 years)", "Juniors (11-15 years)", "Teens & Adults (16+ years)", "Recreational weekend batches"],
    trainingLevels: [
      { level: "Beginner", description: "Ball control, basic passing, and movement" },
      { level: "Intermediate", description: "Tactical play, shooting accuracy, and set pieces" },
      { level: "Advanced", description: "Match strategy, competitive drills, and tournament prep" },
    ],
    equipment: ["Football boots (studs or turf)", "Shin guards", "Comfortable sportswear", "Football (provided during training)"],
  },
  basketball: {
    title: "Basketball",
    tagline: "Shoot, dribble, and dominate the court",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
    description: "Our basketball program covers shooting mechanics, dribbling drills, defensive strategies, and game intelligence. Train to play smarter and stronger on the court.",
    benefits: ["Height and agility development", "Hand-eye coordination", "Team strategy and IQ", "Endurance and stamina", "Competitive match experience"],
    details: ["Shooting form and free throw practice", "Dribbling handles and crossover drills", "Defensive stance and rebounding techniques", "Pick-and-roll and fast break strategies", "3v3 and 5v5 game simulations"],
    ageGroups: ["Kids (6-11 years)", "Teens (12-17 years)", "Adults (18+ years)", "Open recreational batches"],
    trainingLevels: [
      { level: "Beginner", description: "Dribbling basics, layups, and passing fundamentals" },
      { level: "Intermediate", description: "Jump shots, defensive drills, and team plays" },
      { level: "Advanced", description: "Game film analysis, advanced tactics, and competition prep" },
    ],
    equipment: ["Basketball shoes (non-marking)", "Comfortable sportswear", "Basketball (provided)", "Water bottle"],
  },
  zumba: {
    title: "Zumba",
    tagline: "Dance your way to fitness",
    image: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=800",
    description: "Our Zumba classes combine high-energy Latin dance moves with heart-pumping cardio. A fun, full-body workout that feels more like a dance party than exercise.",
    benefits: ["Calorie burning and weight management", "Improved coordination and rhythm", "Stress relief and mood boost", "Full body toning", "Social and fun group activity"],
    details: ["Latin-inspired dance fitness routines", "Mix of salsa, merengue, cumbia, and reggaeton", "Low-impact and high-impact options", "Morning and evening batch timings", "No dance experience required"],
    ageGroups: ["Teens (13-17 years)", "Adults (18-50 years)", "Seniors (50+ years)", "Women-only batches available"],
    trainingLevels: [
      { level: "Beginner", description: "Basic steps, rhythm building, and easy routines" },
      { level: "Intermediate", description: "Complex choreography, faster tempo, and endurance" },
      { level: "Advanced", description: "High-intensity intervals, toning moves, and performance routines" },
    ],
    equipment: ["Comfortable workout shoes", "Breathable sportswear", "Water bottle", "Towel"],
  },
  chess: {
    title: "Chess",
    tagline: "Think ahead, play smart, win strategically",
    image: chessImage,
    description: "Our chess program builds strategic thinking, patience, and concentration through structured lessons covering openings, tactics, and endgame mastery. Suitable for absolute beginners through tournament-ready players.",
    benefits: ["Sharper analytical and critical thinking", "Improved concentration and patience", "Better decision-making under pressure", "Memory and pattern recognition development", "Tournament and competitive readiness"],
    details: ["One-on-one and small group coaching formats", "Opening theory, middlegame tactics, and endgame technique", "Puzzle-solving and calculation training", "Practice games with post-game analysis", "Preparation for school and district-level tournaments"],
    ageGroups: ["Kids (5-10 years)", "Juniors (11-16 years)", "Adults (17+ years)", "Competitive tournament track available"],
    trainingLevels: [
      { level: "Beginner", description: "Piece movement, basic rules, and simple checkmates" },
      { level: "Intermediate", description: "Opening principles, tactical patterns, and basic endgames" },
      { level: "Advanced", description: "Deep calculation, positional play, and tournament strategy" },
    ],
    equipment: ["Chess set (provided during training)", "Notebook for recording games", "Chess clock (for advanced practice)", "Comfortable seating space"],
  },
  arts: {
    title: "Arts",
    tagline: "Express, create, and discover your artistic voice",
    image: artsImage,
    description: "Our arts program nurtures creativity through drawing, painting, and mixed-media craft, guided by experienced instructors. Students explore different styles and techniques while building confidence in their own artistic expression.",
    benefits: ["Enhanced creativity and imagination", "Fine motor skill development", "Improved focus and patience", "Confidence in self-expression", "Exposure to diverse art forms and techniques"],
    details: ["Drawing, painting, and craft-based sessions", "Sketching fundamentals and color theory", "Mixed-media and creative exploration projects", "Portfolio building for young artists", "Showcase sessions to display student work"],
    ageGroups: ["Kids (5-10 years)", "Teens (11-17 years)", "Adults (18+ years)", "Family art sessions available"],
    trainingLevels: [
      { level: "Beginner", description: "Basic shapes, shading, and color mixing" },
      { level: "Intermediate", description: "Composition, perspective, and varied mediums" },
      { level: "Advanced", description: "Personal style development and portfolio projects" },
    ],
    equipment: ["Drawing/painting supplies (provided during training)", "Sketchbook or canvas", "Apron or old clothing", "Personal art kit (optional, for take-home practice)"],
  },
  "mma-kung-fu": {
    title: "MMA-Kung Fu",
    tagline: "Strike, grapple, and master the art of combat",
    image: mmaKungFuImage,
    description: "Learn discipline, self-defense, and strength-building through dynamic MMA and traditional Kung Fu training. Our expert coaches guide students of all ages in building confidence, technique, and physical fitness through structured martial arts practice.",
    benefits: ["Full-body strength and conditioning", "Real-world self-defense skills", "Improved discipline and mental toughness", "Enhanced flexibility and reflexes", "Confidence-building through skill progression"],
    details: ["Striking, kicks, and combination drills", "Grappling and ground control basics", "Traditional Kung Fu forms (taolu) and stances", "Pad work and controlled sparring sessions", "Belt/rank progression and grading opportunities"],
    ageGroups: ["Kids (7-12 years)", "Teens (13-17 years)", "Adults (18+ years)", "Women's self-defense batch"],
    trainingLevels: [
      { level: "Beginner", description: "Basic stances, strikes, and body conditioning" },
      { level: "Intermediate", description: "Combination striking, defensive drills, and forms" },
      { level: "Advanced", description: "Sparring, advanced techniques, and competition prep" },
    ],
    equipment: ["Training uniform/gi (guidance provided)", "Hand wraps and gloves", "Mouth guard", "Shin guards (for sparring)"],
  }
};

const SportDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const sport = sportsData[slug || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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
          </div>
        </div>
      </section>

      {/* Training Levels */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 text-center">
              Training <span className="text-primary">Levels</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {sport.trainingLevels.map((item, i) => (
                <Card key={i} className="border-border/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.level}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Age Groups & Equipment */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Age Groups */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black text-foreground">Age Groups</h2>
              </div>
              <div className="space-y-3">
                {sport.ageGroups.map((group, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{group}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Dumbbell className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-black text-foreground">What You Need</h2>
              </div>
              <div className="space-y-3">
                {sport.equipment.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-black text-foreground mb-4">Ready to Start {sport.title}?</h2>
            <p className="text-muted-foreground mb-8">Book a free trial session and experience our expert coaching firsthand. Training at your doorstep, on your schedule.</p>
            <Button className="bg-gradient-to-r from-primary to-accent px-10" size="lg" onClick={scrollToContact}>
              Book a Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SportDetail;
