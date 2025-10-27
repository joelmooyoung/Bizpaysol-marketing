import { FormEvent, useCallback, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { setPageMeta } from "@/lib/seo";

export default function Support() {
  useEffect(() => {
    setPageMeta({
      title: "Support & Contact - BizPaySol",
      description: "Get help with BizPaySol ACH API. 24/7 support for enterprise customers. FAQ, contact form, and customer support documentation.",
      canonicalUrl: "https://www.bizpaysol.com/support/",
      keywords: "customer support, API support, ACH help, contact support",
      ogTitle: "We're Here to Help",
      ogDescription: "Contact BizPaySol support for API questions, enterprise setup, and more."
    });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const to = "support@bizpaysol.com";
      const composedSubject = subject.trim() || "Support request";
      const bodyLines = [
        name ? `Name: ${name}` : null,
        email ? `Email: ${email}` : null,
        "",
        message || "",
      ].filter(Boolean) as string[];
      const body = bodyLines.join("\n");
      const mailto = `mailto:${to}?subject=${encodeURIComponent(
        composedSubject
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    },
    [name, email, subject, message]
  );

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">We’re here to help.</h1>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold">FAQ</h2>
              <div className="mt-4 space-y-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground">How do I start using the API?</p>
                  <p>Sign up for an account and generate your API key from the dashboard.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Do you offer 24/7 support?</p>
                  <p>Yes, enterprise customers receive around-the-clock coverage.</p>
                </div>
                <div>
                  <p className="font-medium text-foreground">Support email</p>
                  <p>
                    <a
                      href="mailto:support@bizpaysol.com"
                      className="underline decoration-dotted"
                    >
                      support@bizpaysol.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div id="contact">
              <h2 className="text-lg font-semibold">Contact Form</h2>
              <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
                <div className="grid gap-3 md:grid-cols-2">
                  <Input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Textarea
                  placeholder="Message"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
