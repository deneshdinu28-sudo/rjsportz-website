import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { icon: Phone, title: "Phone", details: ["+1 (555) 123-4567", "Available 9 AM - 8 PM"] },
    { icon: Mail, title: "Email", details: ["coach@rjsports.com", "Quick response guaranteed"] },
    { icon: Clock, title: "Training Hours", details: ["Mon-Fri: 6 AM - 10 PM", "Sat-Sun: 8 AM - 8 PM"] }
  ];

  return (
    <section className="py-20 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your fitness journey? Contact us to discuss your goals and find the perfect program.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-lg bg-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <Input placeholder="John" className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input placeholder="Doe" className="bg-secondary border-border" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                  <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-secondary border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sport Interest</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md bg-secondary text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
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
                  <Textarea placeholder="Tell us about your goals..." rows={4} className="bg-secondary border-border" />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-md hover:shadow-[0_0_20px_hsl(100_95%_51%/0.1)] transition-all duration-300 bg-card border-border/50 hover:border-primary/30">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
