import { Card } from "@/components/ui/card";
import coachingImage from "@/assets/coaching-session.jpg";

const About = () => {
  const achievements = [
    { number: "10+", label: "Years Experience" },
    { number: "500+", label: "Students Trained" },
    { number: "15", label: "Championships Won" },
    { number: "98%", label: "Success Rate" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={coachingImage} 
              alt="Professional badminton coaching session"
              className="rounded-2xl shadow-lg w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-energy-orange to-champion-gold p-6 rounded-xl shadow-xl">
              <p className="text-white font-bold text-lg">Certified Coach</p>
              <p className="text-white/90">BWF Level 3</p>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Your
              <span className="block text-primary">Coach</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over a decade of experience in professional badminton, I've dedicated my career 
              to helping players of all levels achieve their goals. From beginners learning basic 
              techniques to advanced players preparing for competitions.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My coaching philosophy focuses on building strong fundamentals, developing mental 
              toughness, and creating personalized training programs that maximize each player's potential.
            </p>
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-4 text-center bg-card shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;