import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    { icon: MapPin, title: "Location", details: ["Bengaluru, Karnataka", "Training at your preferred venue"] },
    { icon: Phone, title: "Phone", details: ["+1 (555) 123-4567", "Available 9 AM - 8 PM"] },
    { icon: Mail, title: "Email", details: ["contact@rjsports.com", "Quick response guaranteed"] },
    { icon: Clock, title: "Training Hours", details: ["Mon-Fri: 6 AM - 10 PM", "Sat-Sun: 8 AM - 8 PM"] }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your sports journey? Contact us to discuss your goals and find the perfect program.
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <Input type="tel" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Sport Interest</label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Badminton</option>
                  <option>Yoga</option>
                  <option>Karate</option>
                  <option>Skating</option>
                  <option>Swimming</option>
                  <option>Table Tennis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea placeholder="Tell us about your goals..." rows={4} />
              </div>
              <Button className="w-full" size="lg">Send Message</Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-border/50 hover:shadow-[0_0_20px_hsl(105_98%_51%/0.1)] transition-all duration-300">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground">{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
