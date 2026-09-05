import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sportInterest: "Badminton",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.phone) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        full_name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        sport_interest: formData.sportInterest,
        message: formData.message || null,
      });
      if (error) throw error;
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      setFormData({ firstName: "", lastName: "", email: "", phone: "", sportInterest: "Badminton", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: "Location", details: ["Bengaluru, Karnataka", "Training at your preferred venue"] },
    { icon: Phone, title: "Phone", details: ["+91 88700 18565", "Available 9 AM - 8 PM"] },
    { icon: Mail, title: "Email", details: ["rjsportzofficial1@gmail.com", "Quick response guaranteed"] },
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name *</label>
                    <Input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <Input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 88700 18565" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Sport Interest</label>
                  <select name="sportInterest" value={formData.sportInterest} onChange={handleChange} className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Badminton</option>
                    <option>Yoga</option>
                    <option>Karate</option>
                    <option>Skating</option>
                    <option>Swimming</option>
                    <option>Table Tennis</option>
                    <option>Football</option>
                    <option>Basketball</option>
                    <option>Zumba</option>
                    <option>Chess</option>
                    <option>Arts</option>
                    <option>MMA & Kung Fu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..." rows={4} />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
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
