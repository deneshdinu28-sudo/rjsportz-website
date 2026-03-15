import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Users, Trophy, Heart, Upload, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

const Hiring = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    sport: "",
    experience: "",
    certifications: "",
    location: "",
    availability: "",
    about: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        toast({ title: "File too large", description: "Please upload a file under 5MB.", variant: "destructive" });
        return;
      }
      setResumeFile(file);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.sport || !formData.experience) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("coach_applications").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        sport: formData.sport,
        experience: formData.experience,
        certifications: formData.certifications || null,
        location: formData.location || null,
        availability: formData.availability || null,
        about: formData.about || null,
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
    } catch (error) {
      console.error("Hiring form error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const perks = [
    { icon: Briefcase, title: "Flexible Schedule", description: "Choose your own training hours and locations across Bengaluru." },
    { icon: Users, title: "Growing Community", description: "Join a team of passionate coaches making sports accessible to all." },
    { icon: Trophy, title: "Career Growth", description: "Opportunities to lead programs, attend workshops, and grow professionally." },
    { icon: Heart, title: "Make an Impact", description: "Help students of all ages discover their passion and reach their potential." },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[60vh] text-center">
            <CheckCircle className="w-20 h-20 text-primary mb-6" />
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
              Application <span className="text-primary">Received!</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Thank you for your interest in joining RJ Sportz. Our team will review your application and reach out to you within 3-5 business days.
            </p>
            <Button onClick={() => { setIsSubmitted(false); setFormData({ fullName: "", email: "", phone: "", sport: "", experience: "", certifications: "", location: "", availability: "", about: "" }); setResumeFile(null); }} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-20">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-foreground">
              Join Our <span className="text-primary">Coaching Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're looking for passionate and experienced sports coaches to join RJ Sportz. If you love training, mentoring, and making a difference, we'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16" ref={ref}>
          <div className="container mx-auto px-6">
            <h2 className={`text-3xl md:text-4xl font-black text-center mb-12 text-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Why Coach With <span className="text-primary">Us?</span>
            </h2>
            <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {perks.map((perk, i) => (
                <Card key={i} className="border-border/50 text-center hover:shadow-[0_0_20px_hsl(105_98%_51%/0.1)] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <perk.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-2">{perk.title}</h3>
                    <p className="text-muted-foreground text-sm">{perk.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <Card className="border-border/50 w-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">
                  Coach Application <span className="text-primary">Form</span>
                </CardTitle>
                <p className="text-center text-muted-foreground mt-2">Fill in your details below. Fields marked with * are required.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                      <Input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email Address *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                      <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Primary Sport *</label>
                      <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a sport</option>
                        <option>Badminton</option>
                        <option>Yoga</option>
                        <option>Karate</option>
                        <option>Skating</option>
                        <option>Swimming</option>
                        <option>Table Tennis</option>
                        <option>Football</option>
                        <option>Basketball</option>
                        <option>Zumba</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Years of Experience *</label>
                      <Input name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 5 years" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Certifications</label>
                      <Input name="certifications" value={formData.certifications} onChange={handleChange} placeholder="e.g. NIS, SAI certified" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Location</label>
                      <Input name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Whitefield, Bengaluru" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Availability</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full h-10 px-3 py-2 border border-input rounded-md bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select availability</option>
                        <option>Full-time</option>
                        <option>Part-time (Mornings)</option>
                        <option>Part-time (Evenings)</option>
                        <option>Weekends Only</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">About You</label>
                    <Textarea name="about" value={formData.about} onChange={handleChange} placeholder="Tell us about your coaching philosophy, achievements, and why you'd like to join RJ Sportz..." rows={5} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Upload Resume / CV</label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        {resumeFile ? resumeFile.name : "PDF, DOC, or DOCX (max 5MB)"}
                      </p>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                      />
                      <Button type="button" variant="outline" size="sm" onClick={() => document.getElementById('resume-upload')?.click()}>
                        {resumeFile ? "Change File" : "Choose File"}
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Application"}
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

export default Hiring;
