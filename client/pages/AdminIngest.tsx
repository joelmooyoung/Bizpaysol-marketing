import Layout from "@/components/layout/Layout";
import { useEffect, useState } from "react";

const TEXT = `Here’s the neutral comparison between ACH, wire transfers, and card payments — written in the same simple, factual style:

6. ACH vs. Wire Transfers vs. Card Payments

ACH Transfers
• Method: Electronic batch processing through the Automated Clearing House network.
• Speed: Typically 1–3 business days; same-day ACH is available for many transactions.
• Cost: Usually very low or free for consumers; businesses pay small per-transaction fees.
• Reversibility: Can be reversed in limited cases (e.g., errors or unauthorized debits).
• Use Cases: Payroll, bill payments, B2B payments, recurring transfers.
• Security: Protected by NACHA rules, encryption, and bank authentication controls.

Wire Transfers
• Method: Direct, real-time communication between banks through wire systems such as Fedwire or SWIFT.
• Speed: Near-instant for domestic wires; international wires may take 1–2 business days.
• Cost: Higher fees per transaction (often $15–$40 domestic, $30–$50 international).
• Reversibility: Generally final and irreversible once sent.
• Use Cases: Large, one-time payments, real estate closings, urgent business transfers.
• Security: Highly controlled by banks; fraud prevention focuses on sender verification and confirmation.

Card Payments (Credit or Debit)
• Method: Processed through card networks (Visa, Mastercard, etc.) via payment gateways.
• Speed: Authorization is instant; settlement takes 1–3 business days.
• Cost: Merchants pay percentage-based fees (often 1.5%–3% + fixed cost per transaction).
• Reversibility: Chargebacks and disputes are supported, giving more consumer protection.
• Use Cases: Retail, e-commerce, point-of-sale, and online payments.
• Security: Relies on PCI DSS standards, encryption, and tokenization of card data.

7. Key Differences at a Glance
Feature	ACH Transfers	Wire Transfers	Card Payments
Speed	1–3 business days (same-day possible)	Instant to 1 day	Instant authorization, 1–3 day settlement
Cost	Low	High	Moderate to high for merchants
Best for	Routine, recurring, or scheduled payments	Large, time-sensitive transfers	Consumer purchases
Reversible?	Limited	No	Yes (disputes/chargebacks)
Security Oversight	NACHA & U.S. banks	Bank-to-bank networks	Card networks & PCI DSS
Typical Users	Employers, billers, B2B	Businesses, institutions	Retailers, online stores

8. Summary
• ACH is cost-effective and secure for scheduled or recurring payments.
• Wire transfers are fast and final, used when immediate delivery is critical.
• Card payments prioritize convenience and consumer protection but come with higher fees.
Together, these systems form the backbone of electronic payments in the U.S., each suited for different timing, cost, and risk needs.`;

export default function AdminIngest() {
  const [status, setStatus] = useState<string>("Ready");
  useEffect(() => {
    const run = async () => {
      try {
        setStatus("Ingesting...");
        const res = await fetch("/.netlify/functions/rag?action=ingest", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ texts: [{ title: "ACH vs Wires vs Cards", url: "/docs/ach-wire-card", content: TEXT }] }),
        });
        const data = await res.json();
        setStatus(res.ok ? `Done (inserted ${data?.inserted ?? 0})` : `Error: ${JSON.stringify(data)}`);
      } catch (e: any) {
        setStatus(`Error: ${e.message}`);
      }
    };
    run();
  }, []);

  return (
    <Layout>
      <div className="container py-20">
        <h1 className="text-2xl font-semibold">Admin: Ingest Text</h1>
        <p className="mt-2 text-sm text-muted-foreground">Status: {status}</p>
        <pre className="mt-6 whitespace-pre-wrap rounded-md border p-4 text-xs max-h-[50vh] overflow-auto">{TEXT}</pre>
      </div>
    </Layout>
  );
}
