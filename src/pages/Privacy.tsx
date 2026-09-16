import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Privacy Policy - RJ Sportz"
        description="How RJ Sportz collects, uses, and protects the personal information you share through this website."
        path="/privacy"
      />
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black mb-2 text-foreground">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: 16 September 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Who we are</h2>
              <p>
                RJ Sportz is an at-home sports coaching academy based in Bengaluru, Karnataka, India. This policy
                explains what personal information we collect through this website (rjsportz.com), why we collect
                it, and what rights you have over it, in accordance with India's Digital Personal Data Protection
                Act, 2023 (DPDPA).
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Contact us about privacy:</strong><br />
                Phone: +91 63744 01518<br />
                Email: rjsportzofficial1@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">What information we collect</h2>
              <p>We only collect information you choose to give us, through the forms on this site:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-foreground">Contact / Get Started forms:</strong> your name, email address, phone number, sport of interest, and any message you write.</li>
                <li><strong className="text-foreground">Coaching Team (Hiring) application form:</strong> your name, email, phone number, primary sport, years of experience, certifications, location, availability, a short "about you" note, and an optional resume/CV file upload.</li>
              </ul>
              <p className="mt-3">
                We do not collect any information beyond what you actively type into these forms. We do not use
                cookies, analytics, or tracking scripts of any kind on this site. Nothing is collected about you
                just by browsing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Why we collect it</h2>
              <p>We use the information you submit only to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiry about our coaching programs</li>
                <li>Follow up on your interest in enrolling in a sport or training program</li>
                <li>Review and respond to coaching job applications</li>
              </ul>
              <p className="mt-3">We do not use your information for advertising, and we do not sell it to anyone.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Who else sees it</h2>
              <p>
                We use a small number of trusted service providers to run this website and respond to you. They
                process your data on our behalf and are not permitted to use it for their own purposes:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-foreground">Database hosting:</strong> our database service provider securely stores form submissions</li>
                <li><strong className="text-foreground">Email delivery:</strong> our email service provider delivers the notification that alerts us to a new inquiry</li>
              </ul>
              <p className="mt-3">
                Your information is protected by access controls that restrict it to RJ Sportz staff only. It is
                never publicly readable, listable, or searchable on this site or elsewhere.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">How long we keep it</h2>
              <p>
                We keep your information for as long as reasonably necessary to respond to your inquiry or
                application, or until you ask us to delete it (see below).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Your rights</h2>
              <p>Under the DPDPA, you (as a "Data Principal") have the right to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li><strong className="text-foreground">Access</strong> the personal information we hold about you</li>
                <li><strong className="text-foreground">Correct or update</strong> it if it's inaccurate or incomplete</li>
                <li><strong className="text-foreground">Request deletion</strong> of it, at any time, for any reason</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, email us at{" "}
                <a href="mailto:rjsportzofficial1@gmail.com" className="text-primary hover:text-primary/80">rjsportzofficial1@gmail.com</a>{" "}
                with your name and the contact details you originally submitted. We'll act on your request as soon
                as reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Children's information</h2>
              <p>
                Some of our coaching programs are for children. If you're a parent or guardian inquiring on behalf
                of a child, the form asks for <strong className="text-foreground">your own</strong> contact
                details, not your child's. We don't knowingly collect personal information directly from children
                through this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Changes to this policy</h2>
              <p>
                If we ever start using cookies, analytics, or other tracking, or otherwise change how we handle
                your data, we'll update this page and revise the "last updated" date above.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
