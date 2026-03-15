import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WeFocusOn from "@/components/WeFocusOn";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrainingSessions from "@/components/TrainingSessions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="focus">
          <WeFocusOn />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="services">
          <TrainingSessions />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
