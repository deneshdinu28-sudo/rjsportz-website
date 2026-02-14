import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-[0_2px_20px_hsl(100_95%_51%/0.1)] border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-black">
              <span className="text-foreground">RJ</span> <span className="text-primary drop-shadow-[0_0_10px_hsl(100_95%_51%/0.5)]">Sports</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors duration-200">Home</button>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors duration-200">About</Link>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors duration-200">Programs</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors duration-200">Testimonials</button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors duration-200">Gallery</button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-200">Contact</button>
            <Button onClick={() => scrollToSection('contact')} variant="default">Book Session</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Home</button>
              <Link to="/about" className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">About</Link>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Programs</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-secondary rounded-md transition-colors">Contact</button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('contact')} variant="default" className="w-full">Book Session</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
