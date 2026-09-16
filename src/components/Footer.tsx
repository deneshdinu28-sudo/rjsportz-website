import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const services = [
    { name: "Arts", slug: "arts" },
    { name: "Badminton", slug: "badminton" },
    { name: "Basketball", slug: "basketball" },
    { name: "Chess", slug: "chess" },
    { name: "Dance", slug: "dance" },
    { name: "Football", slug: "football" },
    { name: "Gym", slug: "gym" },
    { name: "Gymnastics", slug: "gymnastics" },
    { name: "Karate", slug: "karate" },
    { name: "MMA-Kung Fu", slug: "mma-kung-fu" },
    { name: "Skating", slug: "skating" },
    { name: "Swimming", slug: "swimming" },
    { name: "Table Tennis", slug: "table-tennis" },
    { name: "Yoga", slug: "yoga" },
    { name: "Zumba", slug: "zumba" },
  ];
  const servicesMid = Math.ceil(services.length / 2);
  const servicesCol1 = services.slice(0, servicesMid);
  const servicesCol2 = services.slice(servicesMid);
  const programs = ["Group Programs", "Personal Coaching", "Competition Prep", "Intensive Camps"];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="RJ Sportz" className="h-14 object-contain mb-4" />
            <p className="text-muted-foreground mb-6">
              Professional multi-sport training delivered at your doorstep. Expert coaching across 15 sports and fitness disciplines, from badminton and karate to chess, dance, and gymnastics.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Services</h4>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="space-y-3">
                {servicesCol1.map((service, i) => (
                  <li key={i}>
                    <Link to={`/sport/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{service.name}</Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {servicesCol2.map((service, i) => (
                  <li key={i}>
                    <Link to={`/sport/${service.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
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
                <span>+91 63744 01518</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>rjsportzofficial1@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Mon-Sun: 6 AM - 10 PM</span>
              </li>
            </ul>
          </div>
        </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} RJ Sportz. All rights reserved.
          </p>
          <Link to="/hiring" className="text-primary hover:text-primary/80 font-medium transition-colors">
            We're Hiring Coaches →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
