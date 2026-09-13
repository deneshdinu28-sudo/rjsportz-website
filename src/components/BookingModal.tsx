import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useBookingModal } from "@/contexts/BookingModalContext";

const BookingModal = () => {
  const { isOpen, source, closeModal } = useBookingModal();
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

  useEffect(() => {
    if (isOpen) {
      setFormData({ firstName: "", lastName: "", email: "", phone: "", sportInterest: "Badminton", message: "" });
    }
  }, [isOpen]);

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
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      closeModal();
    } catch (error) {
      console.error("Booking modal submit error:", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Get In Touch</DialogTitle>
          <DialogDescription>
            Ready to start your sports journey? Tell us a bit about yourself and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
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
            <select
              name="sportInterest"
              value={formData.sportInterest}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
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
              <option>MMA-Kung Fu</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Message</label>
            <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..." rows={3} />
          </div>
          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
