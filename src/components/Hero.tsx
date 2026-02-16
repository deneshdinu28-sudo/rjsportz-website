import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1461896836934-bd45ba8fcab7?w=1920" 
          alt="Athletes training together" 
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5"></div>
      </div>
      
      {/* 3D Geometric Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 4, repeat: Infinity } }}
        style={{ transformStyle: "preserve-3d", transform: "perspective(500px) rotateX(15deg) rotateY(15deg)" }}
      />
      <motion.div 
        className="absolute top-40 right-20 w-24 h-24 border-2 border-primary/15"
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
        style={{ transformStyle: "preserve-3d", transform: "perspective(500px) rotateX(30deg) rotateY(-20deg)", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
      />
      <motion.div 
        className="absolute bottom-40 left-20 w-20 h-20 bg-primary/5 border border-primary/20 rounded-full"
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-10 w-16 h-16 bg-primary/8 border border-primary/15"
        animate={{ rotate: 180, y: [0, 15, 0] }}
        transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, y: { duration: 3, repeat: Infinity } }}
        style={{ transformStyle: "preserve-3d", transform: "perspective(400px) rotateX(45deg)" }}
      />
      <motion.div 
        className="absolute bottom-32 right-1/4 w-28 h-28 border border-primary/10 rounded-lg"
        animate={{ rotate: -90, scale: [1, 0.9, 1] }}
        transition={{ rotate: { duration: 18, repeat: Infinity, ease: "linear" }, scale: { duration: 7, repeat: Infinity } }}
        style={{ transformStyle: "preserve-3d", transform: "perspective(600px) rotateX(20deg) rotateZ(10deg)" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/3 w-12 h-12 bg-primary/5 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Neon glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]"></div>
      
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
            Your Trusted Sports Partner
          </motion.p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <span className="text-foreground">Elevate Your</span>
            <span className="block text-primary drop-shadow-[0_0_30px_hsl(105_98%_51%/0.5)]">
              Game With Us
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional multi-sport coaching in badminton, yoga, karate, skating, swimming & table tennis. 
            Expert training delivered at your doorstep.
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
