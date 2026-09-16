import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type ContactSubmission = Database["public"]["Tables"]["contact_submissions"]["Row"];
type CoachApplication = Database["public"]["Tables"]["coach_applications"]["Row"];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });

const Admin = () => {
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [applications, setApplications] = useState<CoachApplication[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setCheckingSession(false);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session) return;
    setLoadingData(true);
    setLoadError(null);
    Promise.all([
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }),
      supabase.from("coach_applications").select("*").order("created_at", { ascending: false }),
    ])
      .then(([contactsRes, applicationsRes]) => {
        if (contactsRes.error) throw contactsRes.error;
        if (applicationsRes.error) throw applicationsRes.error;
        setContacts(contactsRes.data ?? []);
        setApplications(applicationsRes.data ?? []);
      })
      .catch((error) => {
        console.error("Admin data load error:", error);
        setLoadError("Could not load leads. Your account may not have admin access.");
      })
      .finally(() => setLoadingData(false));
  }, [session]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSigningIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      toast({
        title: "Sign in failed",
        description: error instanceof Error ? error.message : "Check your email and password.",
        variant: "destructive",
      });
    } finally {
      setSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (checkingSession) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
        <Card className="w-full max-w-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-center">Admin Sign In</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <Button type="submit" className="w-full" disabled={signingIn}>
                {signingIn ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet><meta name="robots" content="noindex, nofollow" /></Helmet>
      <Navigation />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-foreground">Leads</h1>
            <Button variant="outline" onClick={handleSignOut}>Sign Out</Button>
          </div>

          {loadError && <p className="text-destructive mb-6">{loadError}</p>}

          <Tabs defaultValue="contacts">
            <TabsList>
              <TabsTrigger value="contacts">Contact Messages ({contacts.length})</TabsTrigger>
              <TabsTrigger value="applications">Coach Applications ({applications.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts">
              <Card className="border-border/50">
                <CardContent className="p-0 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Sport</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Source</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loadingData && (
                        <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground">Loading...</TableCell></TableRow>
                      )}
                      {!loadingData && contacts.length === 0 && (
                        <TableRow><TableCell colSpan={7} className="text-center text-muted-foreground">No submissions yet.</TableCell></TableRow>
                      )}
                      {contacts.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell className="whitespace-nowrap">{formatDate(c.created_at)}</TableCell>
                          <TableCell>{c.full_name}</TableCell>
                          <TableCell>{c.email}</TableCell>
                          <TableCell>{c.phone}</TableCell>
                          <TableCell>{c.sport_interest}</TableCell>
                          <TableCell className="max-w-xs truncate">{c.message ?? "-"}</TableCell>
                          <TableCell>{c.source ?? "-"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications">
              <Card className="border-border/50">
                <CardContent className="p-0 overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Sport</TableHead>
                        <TableHead>Experience</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Availability</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {loadingData && (
                        <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground">Loading...</TableCell></TableRow>
                      )}
                      {!loadingData && applications.length === 0 && (
                        <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground">No applications yet.</TableCell></TableRow>
                      )}
                      {applications.map((a) => (
                        <TableRow key={a.id}>
                          <TableCell className="whitespace-nowrap">{formatDate(a.created_at)}</TableCell>
                          <TableCell>{a.full_name}</TableCell>
                          <TableCell>{a.email}</TableCell>
                          <TableCell>{a.phone}</TableCell>
                          <TableCell>{a.sport}</TableCell>
                          <TableCell>{a.experience}</TableCell>
                          <TableCell>{a.location ?? "-"}</TableCell>
                          <TableCell>{a.availability ?? "-"}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
