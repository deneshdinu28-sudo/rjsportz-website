import { Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { name: "Badminton", slug: "badminton" },
    { name: "Yoga", slug: "yoga" },
    { name: "Karate", slug: "karate" },
    { name: "Skating", slug: "skating" },
    { name: "Swimming", slug: "swimming" },
    { name: "Table Tennis", slug: "table-tennis" },
  ];
  const programs = ["Group Programs", "Personal Coaching", "Competition Prep", "Intensive Camps"];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="RJ Sportz" className="h-14 object-contain mb-4" />
            <p className="text-muted-foreground mb-6">
              Professional multi-sport training delivered at your doorstep. Expert coaching in badminton, yoga, karate, skating, swimming, and table tennis.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_15px_hsl(105_98%_51%/0.4)]">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link to={`/sport/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Training Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, i) => (
                <li key={i}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">{program}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>contact@rjsports.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Sun: 6 AM - 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} RJ Sportz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
