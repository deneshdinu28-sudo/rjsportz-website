import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="RJ Sportz" className="h-14 object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => goToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <button onClick={() => goToSection('services')} className="text-foreground hover:text-primary transition-colors">Programs</button>
            <Link to="/feedbacks" onClick={() => setIsOpen(false)} className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/hiring" className="text-foreground hover:text-primary transition-colors">Hiring</Link>
            <button onClick={() => goToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            <Button onClick={() => goToSection('contact')} variant="default">Book Session</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => goToSection('home')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Home</button>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">About</Link>
              <button onClick={() => goToSection('services')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Programs</button>
              <Link to="/feedbacks" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Testimonials</Link>
              <Link to="/hiring" onClick={() => setIsOpen(false)} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Hiring</Link>
              <button onClick={() => goToSection('contact')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Contact</button>
              <div className="px-3 py-2">
                <Button onClick={() => goToSection('contact')} variant="default" className="w-full">Book Session</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
