import Layout from "@/components/layout/Layout";
import { useState } from "react";

const SAMPLE_TEXT1 = `Here’s the neutral comparison between ACH, wire transfers, and card payments — written in the same simple, factual style:

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
Feature\tACH Transfers\tWire Transfers\tCard Payments
Speed\t1–3 business days (same-day possible)\tInstant to 1 day\tInstant authorization, 1–3 day settlement
Cost\tLow\tHigh\tModerate to high for merchants
Best for\tRoutine, recurring, or scheduled payments\tLarge, time-sensitive transfers\tConsumer purchases
Reversible?\tLimited\tNo\tYes (disputes/chargebacks)
Security Oversight\tNACHA & U.S. banks\tBank-to-bank networks\tCard networks & PCI DSS
Typical Users\tEmployers, billers, B2B\tBusinesses, institutions\tRetailers, online stores

8. Summary
• ACH is cost-effective and secure for scheduled or recurring payments.
• Wire transfers are fast and final, used when immediate delivery is critical.
• Card payments prioritize convenience and consumer protection but come with higher fees.
Together, these systems form the backbone of electronic payments in the U.S., each suited for different timing, cost, and risk needs.`;

const SAMPLE_TEXT2 = `What is ACH Settlement?
The Automated Clearing House (ACH) network, operated by Nacha and the Federal Reserve, facilitates electronic funds transfers in the United States, such as direct deposits, bill payments, and business-to-business transactions. “Settlement” in the context of ACH refers to the process where the ACH operator (typically the Federal Reserve or The Clearing House) nets out all the transactions in a batch across participating financial institutions and adjusts their reserve accounts accordingly. This is the point at which funds are officially transferred between the originating depository financial institution (ODFI) and the receiving depository financial institution (RDFI), making the transaction final and irrevocable.
In practice, settlement doesn’t mean the funds instantly appear in the recipient’s account—it’s an interbank process. After settlement, the RDFI must make the funds available to the recipient by specific deadlines outlined in Nacha rules (e.g., by the end of the business day for credits like payroll). Delays can occur due to holidays, weekends, or risk holds, but settlement itself is a fixed, scheduled event that ensures the banking system balances out net debits and credits efficiently.
ACH Settlement Timeline
ACH transactions can be processed as standard (next-day or multi-day) or same-day, with different batch windows for submission and settlement. Batches are groups of transactions submitted together by the ODFI. The Federal Reserve’s FedACH system handles much of this, with all times in Eastern Time (ET). Weekends and federal holidays shift processing to the next business day.
Standard (Next-Day) ACH
These are the most common ACH transfers, often taking 1-2 business days to complete. Submissions occur throughout the prior day or overnight, and settlement happens the following morning:
• Submission deadlines: ODFIs can submit files in multiple windows, but key cutoffs are often around 2:15 AM ET for next-day processing (with earlier files possibly settling sooner).
• Settlement time: Typically at 8:30 AM ET on the next business day (or later if not same-day eligible). This nets and transfers funds interbank, with RDFIs required to post credits by the end of that day.
• Example: A payroll file submitted on Monday evening might settle Tuesday at 8:30 AM ET, with employees seeing funds by Tuesday end-of-day.
Standard ACH can take longer (up to 3-5 days in some cases) due to additional verification or batching, but settlement itself is pegged to that morning window.
Same-Day ACH
Introduced in phases starting in 2016, same-day ACH allows faster processing within the same business day for eligible transactions (up to $1 million per item). It has three batch windows: morning, afternoon, and late-afternoon/evening. These enable quicker settlements but require earlier submissions and may incur fees.
• Morning window:
◦ Submission deadline: 10:30 AM ET.
◦ Settlement time: 1:00 PM ET (funds often available to recipients by 1:30 PM ET).
• Afternoon window:
◦ Submission deadline: 2:45 PM ET.
◦ Settlement time: 5:00 PM ET (funds often available by end-of-day).
• Late-afternoon/evening window:
◦ Submission deadline: 4:45 PM ET.
◦ Settlement time: 6:00 PM ET (funds available shortly after, but still same-day).
Same-day eligibility depends on the transaction type, and not all banks participate fully. If a submission misses a window, it rolls to the next available one, potentially becoming next-day.
In summary, morning batches (standard or same-day) focus on overnight/next-morning settlements for efficiency, while afternoon windows cater to urgent same-day needs. The exact timing can vary slightly by ACH operator or bank, but these FedACH standards are widely followed.`;

export default function AdminIngest() {
  const [status, setStatus] = useState<string>("Idle");

  const [title, setTitle] = useState("");
  const [srcUrl, setSrcUrl] = useState("");
  const [content, setContent] = useState("");

  const [urlsInput, setUrlsInput] = useState("");

  async function ingest(payload: any) {
    setStatus("Submitting...");
    try {
      const res = await fetch("/.netlify/functions/rag?action=ingest", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(
        res.ok
          ? `Done (inserted ${data?.inserted ?? 0})`
          : `Error: ${JSON.stringify(data)}`,
      );
    } catch (e: any) {
      setStatus(`Error: ${e.message}`);
    }
  }

  return (
    <Layout>
      <div className="container py-20 space-y-8">
        <h1 className="text-2xl font-semibold">Admin: Ingest</h1>
        <p className="text-sm text-muted-foreground">Status: {status}</p>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Paste Text</h2>
          <div className="grid gap-2">
            <input
              className="rounded-md border px-3 py-2"
              placeholder="Title (optional)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="rounded-md border px-3 py-2"
              placeholder="Source URL (optional)"
              value={srcUrl}
              onChange={(e) => setSrcUrl(e.target.value)}
            />
            <textarea
              className="min-h-[180px] w-full rounded-md border px-3 py-2 font-mono text-xs"
              placeholder="Paste content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div>
              <button
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
                onClick={() => {
                  if (!content.trim())
                    return setStatus("Error: content required");
                  ingest({
                    texts: [
                      {
                        title: title || undefined,
                        url: srcUrl || undefined,
                        content,
                      },
                    ],
                  });
                }}
              >
                Ingest Text
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Ingest URLs</h2>
          <textarea
            className="min-h-[120px] w-full rounded-md border px-3 py-2 font-mono text-xs"
            placeholder="One URL per line"
            value={urlsInput}
            onChange={(e) => setUrlsInput(e.target.value)}
          />
          <div>
            <button
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
              onClick={() => {
                const urls = urlsInput
                  .split(/\r?\n/)
                  .map((s) => s.trim())
                  .filter((s) => s.length);
                if (!urls.length) return setStatus("Error: at least one URL");
                ingest({ urls });
              }}
            >
              Ingest URLs
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Sample Docs</h2>
          <p className="text-sm text-muted-foreground">
            Use these to quickly seed your KB.
          </p>
          <div className="flex gap-2">
            <button
              className="rounded-md bg-secondary px-4 py-2"
              onClick={() =>
                ingest({
                  texts: [
                    {
                      title: "ACH vs Wires vs Cards",
                      url: "/docs/ach-wire-card",
                      content: SAMPLE_TEXT1,
                    },
                    {
                      title: "ACH Settlement",
                      url: "/docs/ach-settlement",
                      content: SAMPLE_TEXT2,
                    },
                  ],
                })
              }
            >
              Ingest Sample Docs
            </button>
          </div>
          <h3 className="mt-4 font-medium">Preview</h3>
          <pre className="mt-2 whitespace-pre-wrap rounded-md border p-4 text-xs max-h-[30vh] overflow-auto">
            {SAMPLE_TEXT1}
          </pre>
          <pre className="mt-2 whitespace-pre-wrap rounded-md border p-4 text-xs max-h-[30vh] overflow-auto">
            {SAMPLE_TEXT2}
          </pre>
        </section>
      </div>
    </Layout>
  );
}
