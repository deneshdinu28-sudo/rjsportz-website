import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroCollage from "@/assets/hero-sports-collage.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCollage} 
          alt="Badminton, Yoga, Karate, Skating, Swimming & Table Tennis" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
      </div>
      

      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-[100px]"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-primary font-semibold tracking-[0.3em] uppercase mb-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Expert Coaching At Your Doorstep
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <span className="text-foreground">Elevate Your</span>
            <span className="block bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(105_98%_51%/0.5)]">
              Game With Us
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional coaching in badminton, yoga, karate, skating, swimming & table tennis, delivered right to your apartment, community clubhouse, or society grounds. No travel, no hassle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              className="text-lg px-10 py-7 font-bold"
              onClick={() => scrollToSection('contact')}
            >
              Start Training
            </Button>
            <Button 
              variant="outline-hero" 
              size="lg"
              className="text-lg px-10 py-7 font-bold"
              onClick={() => scrollToSection('services')}
            >
              View Programs
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
