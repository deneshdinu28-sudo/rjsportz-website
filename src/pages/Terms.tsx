import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Terms & Conditions - RJ Sportz"
        description="The terms that apply to using the RJ Sportz website and submitting an inquiry or application through it."
        path="/terms"
      />
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black mb-2 text-foreground">
            Terms & <span className="text-primary">Conditions</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: 16 September 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">About this site</h2>
              <p>
                This website (rjsportz.com) is operated by RJ Sportz, an at-home sports coaching academy based in
                Bengaluru, Karnataka. By using this site, you agree to these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Using this site</h2>
              <p>
                You're welcome to browse this site and use it to learn about our coaching programs, submit an
                inquiry, or apply to join our coaching team. Please use the forms honestly — don't submit false
                information or use them to send spam, abusive content, or anything unlawful.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Submitting a form</h2>
              <p>
                When you submit the Contact, Get Started, or Hiring form, you're sending us the information you
                entered so we can respond to you. Please make sure the details you provide (especially your
                contact information) are accurate, since we'll use them to get back to you.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Submitting an inquiry does not guarantee enrollment</strong>,
                and submitting a coaching application does not guarantee an interview or a job offer. Enrollment
                and hiring decisions are made separately, after we've had a chance to speak with you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">No professional or medical advice</h2>
              <p>
                The information on this site (program descriptions, training levels, age recommendations, etc.) is
                general in nature. It isn't medical advice, and you should consult a doctor before starting any new
                physical training program, especially if you or your child has an existing health condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Content ownership</h2>
              <p>
                The text, images, and design on this site belong to RJ Sportz (or are used with permission) and
                may not be copied or reused without our consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">No liability for site issues</h2>
              <p>
                We do our best to keep this website accurate and available, but we don't guarantee it will always
                be error-free or uninterrupted. We're not liable for any loss arising from your use of, or
                inability to use, this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Changes to these terms</h2>
              <p>
                We may update these terms from time to time. Continued use of the site after a change means you
                accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Governing law</h2>
              <p>
                These terms are governed by the laws of India, and any disputes will be subject to the
                jurisdiction of the courts in Bengaluru, Karnataka.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Contact us</h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a href="mailto:rjsportzofficial1@gmail.com" className="text-primary hover:text-primary/80">rjsportzofficial1@gmail.com</a>{" "}
                or +91 63744 01518.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
