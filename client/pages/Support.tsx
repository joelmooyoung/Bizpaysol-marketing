import { FormEvent, useCallback, useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { setPageMeta, setFAQSchema } from "@/lib/seo";

const faqs = [
  {
    question: "How do I get started with BizPaySol?",
    answer:
      "Sign up for a free account at bizpaysol.com. You'll get instant access to the sandbox environment and API documentation. You can send your first test ACH in minutes.",
  },
  {
    question: "What's your pricing?",
    answer:
      "We offer three pricing tiers: Essential ($0.25/transaction), Professional ($0.18/transaction), and Enterprise (custom). All include webhooks, NACHA compliance, and 99.95% uptime SLA.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Yes, enterprise customers receive 24/7 dedicated support. Growth plan customers get 4-hour response times. Essential plan includes email support with 24-hour response time.",
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most companies go live in 5-14 days. We provide 5-minute quickstart guides, sandbox environment, and optional white-glove migration assistance.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We're SOC 2 Type II certified, NACHA compliant, ISO 27001 aligned, GDPR compliant, and use AES-256 encryption at rest with TLS 1.2+ in transit.",
  },
  {
    question: "Can you help migrate from my current provider?",
    answer:
      "Yes! Enterprise and Growth plans include free migration assistance. Our team handles the technical setup, testing, and cutover process to minimize your effort.",
  },
  {
    question: "What payment methods do you support?",
    answer:
      "We specialize in ACH payments for B2B use cases: payroll, vendor payments, customer refunds, subscription billing, and marketplace payouts.",
  },
  {
    question: "Do you have SDKs?",
    answer:
      "Yes, we offer SDKs for Node.js, Python, Go, and Java. Our REST API works with any language. Full OpenAPI documentation available.",
  },
];

export default function Support() {
  useEffect(() => {
    setPageMeta({
      title: "Support & Contact - BizPaySol",
      description:
        "Get help with BizPaySol ACH API. 24/7 support for enterprise customers. FAQ, contact form, and customer support documentation.",
      canonicalUrl: "https://www.bizpaysol.com/support/",
      keywords: "customer support, API support, ACH help, contact support",
      ogTitle: "We're Here to Help",
      ogDescription:
        "Contact BizPaySol support for API questions, enterprise setup, and more.",
    });
    setFAQSchema(faqs);
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
        composedSubject,
      )}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
    },
    [name, email, subject, message],
  );

  return (
    <Layout>
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-extrabold tracking-tight">
            We’re here to help.
          </h1>
          <div className="mt-6 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold">Quick Answers</h2>
              <div className="mt-4 space-y-4 text-sm">
                {faqs.slice(0, 4).map((faq, idx) => (
                  <div key={idx} className="pb-3 border-b last:border-b-0">
                    <p className="font-medium text-foreground">
                      {faq.question}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      {faq.answer}
                    </p>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    More questions? Email us at{" "}
                    <a
                      href="mailto:support@bizpaysol.com"
                      className="text-primary underline decoration-dotted"
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
