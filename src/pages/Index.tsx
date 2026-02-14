import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WeFocusOn from "@/components/WeFocusOn";
import TrainingSessions from "@/components/TrainingSessions";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to contact from other pages
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    // Handle hash-based scroll
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="focus"><WeFocusOn /></section>
        <section id="services"><TrainingSessions /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="gallery"><Gallery /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
