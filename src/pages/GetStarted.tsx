import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const GetStarted = () => {
  const [searchParams] = useSearchParams();
  const source = searchParams.get("source") || "Get Started";
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
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
        source,
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
    } catch (error) {
      console.error("Get Started form error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <SEO title="Message Received - RJ Sportz" description="Thanks for reaching out to RJ Sportz." path="/get-started" />
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <CheckCircle className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
              Message <span className="text-primary">Sent!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Thanks for reaching out to RJ Sportz. We'll get back to you soon to get your training started.
            </p>
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ firstName: "", lastName: "", email: "", phone: "", sportInterest: "Badminton", message: "" });
              }}
              variant="outline"
            >
              Send Another Message
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Get Started - RJ Sportz"
        description="Ready to start your sports journey? Tell us a bit about yourself and RJ Sportz will get back to you soon."
        path="/get-started"
      />
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Get <span className="text-primary">Started</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to start your sports journey? Tell us a bit about yourself and we'll get back to you soon.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 max-w-2xl">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">Get In Touch</CardTitle>
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
                    <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 63744 01518" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Sport Interest</label>
                    <select
                      name="sportInterest"
                      value={formData.sportInterest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option>Arts</option>
                      <option>Badminton</option>
                      <option>Basketball</option>
                      <option>Chess</option>
                      <option>Dance</option>
                      <option>Football</option>
                      <option>Gym</option>
                      <option>Gymnastics</option>
                      <option>Karate</option>
                      <option>MMA-Kung Fu</option>
                      <option>Skating</option>
                      <option>Swimming</option>
                      <option>Table Tennis</option>
                      <option>Yoga</option>
                      <option>Zumba</option>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;
