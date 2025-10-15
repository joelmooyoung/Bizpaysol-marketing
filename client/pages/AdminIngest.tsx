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
�� Settlement time: 1:00 PM ET (funds often available to recipients by 1:30 PM ET).
• Afternoon window:
◦ Submission deadline: 2:45 PM ET.
◦ Settlement time: 5:00 PM ET (funds often available by end-of-day).
• Late-afternoon/evening window:
◦ Submission deadline: 4:45 PM ET.
◦ Settlement time: 6:00 PM ET (funds available shortly after, but still same-day).
Same-day eligibility depends on the transaction type, and not all banks participate fully. If a submission misses a window, it rolls to the next available one, potentially becoming next-day.
In summary, morning batches (standard or same-day) focus on overnight/next-morning settlements for efficiency, while afternoon windows cater to urgent same-day needs. The exact timing can vary slightly by ACH operator or bank, but these FedACH standards are widely followed.`;

const JOEL_RESOURCES_TEXT = `Here are several high-quality resources (with URLs) on the topics you asked about. You can use them for reading, citing, or further research.

General & ACH Network / How ACH Works
1. What Is the Automated Clearing House (ACH), and How Does It Work? ��� Investopedia
https://www.investopedia.com/terms/a/ach.asp
2. The ABCs of ACH — Nacha
https://www.nacha.org/content/abcs-ach
3. How ACH Works – ACH Guide for Developers (Nacha)
https://achdevguide.nacha.org/how-ach-works
4. ACH Network — Wikipedia
https://en.wikipedia.org/wiki/ACH_Network
5. Automated Clearinghouse Services — Federal Reserve Board
https://www.federalreserve.gov/paymentsystems/fedach_about.htm
6. What to Know About the ACH Network | ACH Payments — Dwolla
https://www.dwolla.com/resources/ach-101-connecting-to-the-ach-network
7. ACH Payments Fact Sheet — Nacha
https://www.nacha.org/content/ach-payments-fact-sheet
8. What Is an ACH Payment? How It Works, Process, & Costs — Ramp
https://ramp.com/blog/ach-payments-101
9. Top 5 ACH Payment Types and ACH Payment Glossary — Modern Treasury
https://www.moderntreasury.com/journal/the-top-5-ach-payment-types-and-an-ach-payment-glossary

Types of ACH / Transaction Variants / SEC Codes
• Modern Treasury’s “Top 5 ACH Payment Types and ACH Payment Glossary” covers common ACH Standard Entry Class (SEC) codes such as PPD, CCD, WEB, TEL, ARC, BOC, CTX.
https://www.moderntreasury.com/journal/the-top-5-ach-payment-types-and-an-ach-payment-glossary
• GBankMO’s ACH Reference Guide (PDF) discusses PPD, CCD, and other entry types.
https://gbankmo.com/files/download/documents/ACH%20Reference%20Guide.pdf
• GoCardless article on ACH Credit vs ACH Debit
https://gocardless.com/en-us/guides/ach/ach-credit-vs-debit/
• EBizCharge on ACH Debit vs. ACH Credit
https://ebizcharge.com/learn/ach-debit-vs-ach-credit/

How Long ACH Transactions Take / Settlement Timing
1. ACH processing 101 (Plaid) — discusses 1–3 business days, same-day ACH, cutoffs
https://plaid.com/resources/ach/ach-processing/
2. How long do ACH payments take to process? — Stripe
https://stripe.com/resources/more/how-long-do-ach-payments-take-to-process-here-is-what-you-need-to-know
3. How Long Do ACH Transfers Take? A Complete Guide — Ramp
https://ramp.com/blog/how-long-do-ach-transfers-take
4. ACH advances & settlement times | Nacha — “Significant Majority of ACH Payments Settle in One Business Day or Less”
https://www.nacha.org/news/significant-majority-ach-payments-settle-one-business-day-or-less
5. ACH More Information (BNY Mellon / Treasury API Library)
https://marketplace.bnymellon.com/treasury/api-library/ach-more-information
6. ACH vs EFT: Understanding differences & benefits — JPMorgan
https://www.jpmorgan.com/insights/treasury/integrated-receivables/ach-vs-eft-understanding-the-differences-and-benefits-of-each

Website / Payment Security for Financial Transactions
1. Best practices for secure online payment processing — Checkout.com
https://www.checkout.com/blog/best-practices-for-secure-online-payment-processing
2. Payment security explained: A guide for businesses — Stripe
https://stripe.com/resources/more/payment-security
3. Top 5 Payment Processing Security Risks and Best Practices — DivergeIT
https://www.divergeit.com/blog/payment-processing-security
4. Digital Payment Security Risks and Best Practices — Comerica
https://www.comerica.com/insights/business-finance/digital-payment-security-risks-and-best-practices.html
5. Protecting Customers | American Bankers Association
https://www.aba.com/banking-topics/technology/cybersecurity/protecting-customers
6. What You Need To Know About Secure Payment Systems — U.S. Chamber (CO site)
https://www.uschamber.com/co/run/finance/secure-payment-systems-guide`;

const JOEL_URLS: string[] = [
  "https://www.investopedia.com/terms/a/ach.asp",
  "https://www.nacha.org/content/abcs-ach",
  "https://achdevguide.nacha.org/how-ach-works",
  "https://en.wikipedia.org/wiki/ACH_Network",
  "https://www.federalreserve.gov/paymentsystems/fedach_about.htm",
  "https://www.dwolla.com/resources/ach-101-connecting-to-the-ach-network",
  "https://www.nacha.org/content/ach-payments-fact-sheet",
  "https://ramp.com/blog/ach-payments-101",
  "https://www.moderntreasury.com/journal/the-top-5-ach-payment-types-and-an-ach-payment-glossary",
  "https://gbankmo.com/files/download/documents/ACH%20Reference%20Guide.pdf",
  "https://gocardless.com/en-us/guides/ach/ach-credit-vs-debit/",
  "https://ebizcharge.com/learn/ach-debit-vs-ach-credit/",
  "https://plaid.com/resources/ach/ach-processing/",
  "https://stripe.com/resources/more/how-long-do-ach-payments-take-to-process-here-is-what-you-need-to-know",
  "https://ramp.com/blog/how-long-do-ach-transfers-take",
  "https://www.nacha.org/news/significant-majority-ach-payments-settle-one-business-day-or-less",
  "https://marketplace.bnymellon.com/treasury/api-library/ach-more-information",
  "https://www.jpmorgan.com/insights/treasury/integrated-receivables/ach-vs-eft-understanding-the-differences-and-benefits-of-each",
  "https://www.checkout.com/blog/best-practices-for-secure-online-payment-processing",
  "https://stripe.com/resources/more/payment-security",
  "https://www.divergeit.com/blog/payment-processing-security",
  "https://www.comerica.com/insights/business-finance/digital-payment-security-risks-and-best-practices.html",
  "https://www.aba.com/banking-topics/technology/cybersecurity/protecting-customers",
  "https://www.uschamber.com/co/run/finance/secure-payment-systems-guide",
];

const JOEL_NEUTRAL_SUMMARY = `Here’s a neutral, vendor-free summary that covers the ACH network, transaction types, settlement timing, and website security for financial transactions — written in plain, factual language:

⸻

1. The ACH Network – Concept and Overview
The Automated Clearing House (ACH) network is a nationwide electronic payment system that moves funds between banks in the United States. It is operated by two main entities: the Federal Reserve and The Clearing House. ACH transactions are batch-processed and settle at specific times each business day.

The network allows individuals, businesses, and government agencies to send and receive payments such as direct deposits, bill payments, tax refunds, and vendor disbursements. Instead of relying on paper checks, the ACH system transmits payment instructions securely between financial institutions.

Key characteristics:
• Operates as a batch clearing system, not real-time.
• Used for both credits (pushing funds to another account) and debits (pulling funds from another account).
• Governed by NACHA operating rules, which set security, timing, and error-handling standards.
• Common for payroll, utility payments, insurance premiums, and B2B transfers.

⸻

2. Types of ACH Transactions
ACH payments fall into two broad categories:
• ACH Credit – The sender’s bank pushes funds to the receiver’s bank. Example: an employer sends payroll deposits to employees.
• ACH Debit – The receiver’s bank pulls funds from the payer’s account. Example: a business pulls funds to collect a customer’s monthly bill.

Transactions are further classified by Standard Entry Class (SEC) codes, which describe how authorization was obtained and what type of accounts are involved. Examples include:
• PPD – Prearranged Payment and Deposit (consumer transactions like payroll or bill payments)
• CCD – Corporate Credit or Debit (business-to-business payments)
• WEB – Internet-initiated entries
• TEL – Telephone-initiated entries
• ARC / BOC / POP – Check conversion entries
• CTX – Corporate Trade Exchange (large, structured data for business use)

Each code determines what authorization is required and how disputes are handled.

⸻

3. Settlement and Processing Time
ACH transactions are not instantaneous; they move through a defined cycle:
1. Initiation – A payment instruction is sent to the originating bank.
2. Batching – Transactions are grouped and submitted to the ACH operator (Federal Reserve or The Clearing House).
3. Clearing and Settlement – Funds are transferred between banks, and accounts are updated.

Traditional ACH payments typically settle within one to three business days, depending on when they are submitted and the receiving bank’s posting schedule.
• Same-Day ACH allows certain transactions to settle within hours.
• Most modern ACH payments clear in one business day or less due to extended settlement windows.

Weekends and holidays do not count toward processing time, and cutoff times vary between institutions.

⸻

4. Security and Website Practices for Financial Transactions
Because ACH transactions involve sensitive financial data, maintaining strong security practices is essential. Key measures include:
• Encryption: Use secure, encrypted connections (HTTPS/TLS) for all data transmission.
• Authentication: Require multi-factor authentication for system and user logins.
• Data protection: Store account information in encrypted form and limit access to authorized personnel only.
• Monitoring: Implement continuous monitoring for unusual or unauthorized activity.
• Regular updates: Keep software and servers patched and up to date to prevent known vulnerabilities.
• User education: Inform users and staff about phishing, social engineering, and password security.
• Compliance: Follow relevant standards such as NACHA Operating Rules, PCI DSS, and U.S. federal data protection laws.

Banks and processors also use digital certificates, tokenization, and secure APIs to safeguard transactions end to end.

⸻

5. Summary
• The ACH network enables electronic fund transfers across U.S. banks through batch processing.
• ACH credits push money; ACH debits pull it.
• Different SEC codes govern authorization methods.
• Settlement normally takes one business day; same-day options exist.
• Security relies on encryption, authentication, and strict data-handling controls.`;

const ACH_SYSTEM_SUMMARY = `This is a full-stack ACH (Automated Clearing House) processing system for financial institutions. It enables the creation, management, and processing of ACH transactions, generating NACHA-compliant files for bank transmission. Key capabilities include robust authentication, secure file encryption, SFTP transmission, and real-time dashboard monitoring with reporting. The system supports a dual reference number system for improved customer service and transaction reconciliation, and includes comprehensive security features based on OWASP guidelines.`;

export default function AdminIngest() {
  const [status, setStatus] = useState<string>("Idle");

  const [title, setTitle] = useState("");
  const [srcUrl, setSrcUrl] = useState("");
  const [content, setContent] = useState("");

  const [urlsInput, setUrlsInput] = useState("");

  const [adminToken, setAdminToken] = useState<string>(() => {
    try {
      return localStorage.getItem("admin_ingest_token") || "";
    } catch {
      return "";
    }
  });

  async function ingest(payload: any) {
    setStatus("Submitting...");
    try {
      const headers: Record<string, string> = {
        "content-type": "application/json",
      };
      const token = adminToken.trim();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
        headers["x-admin-token"] = token;
      }

      const res = await fetch("/api/rag-ingest", {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      let data: any = {};
      try {
        data = JSON.parse(text);
      } catch {
        data = text;
      }

      setStatus(
        res.ok
          ? `Done (inserted ${typeof data === "object" && data && typeof data.inserted === "number" ? data.inserted : 0})`
          : `Error ${res.status}: ${typeof data === "string" ? data : JSON.stringify(data)}`,
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
          <h2 className="text-lg font-semibold">Authorization</h2>
          <div className="grid gap-2">
            <input
              className="rounded-md border px-3 py-2"
              type="password"
              placeholder="Admin token (Bearer)"
              value={adminToken}
              onChange={(e) => {
                const v = e.target.value;
                setAdminToken(v);
                try {
                  localStorage.setItem("admin_ingest_token", v);
                } catch {}
              }}
            />
            <p className="text-xs text-muted-foreground">
              If protected, paste your token. It will be sent as Authorization:
              Bearer ...
            </p>
          </div>
        </section>

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
          <div className="flex flex-wrap gap-2">
            <button type="button"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground"
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
            <button
              className="rounded-md bg-secondary px-4 py-2"
              onClick={() =>
                ingest({
                  texts: [
                    {
                      title: "ACH Resources Curated",
                      url: "/docs/ach-resources-curated",
                      content: JOEL_RESOURCES_TEXT,
                    },
                  ],
                  urls: JOEL_URLS,
                })
              }
            >
              Ingest ACH Resources (Joel)
            </button>
            <button
              className="rounded-md bg-secondary px-4 py-2"
              onClick={() =>
                ingest({
                  texts: [
                    {
                      title: "ACH Neutral Overview",
                      url: "/docs/ach-neutral-overview",
                      content: JOEL_NEUTRAL_SUMMARY,
                    },
                  ],
                })
              }
            >
              Ingest ACH Neutral Summary
            </button>
            <button
              className="rounded-md bg-secondary px-4 py-2"
              onClick={() =>
                ingest({
                  texts: [
                    {
                      title: "Full-stack ACH Processing System Overview",
                      url: "/docs/ach-system-overview",
                      content: ACH_SYSTEM_SUMMARY,
                    },
                  ],
                })
              }
            >
              Ingest ACH System Summary
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
