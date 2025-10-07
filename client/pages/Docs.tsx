import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";

const sections = [
  "Getting Started",
  "Authentication",
  "API Endpoints",
  "Webhooks",
  "Error Codes",
  "SDK Downloads",
];

export default function Docs() {
  return (
    <Layout>
      <section className="bg-white py-12">
        <div className="container grid gap-8 md:grid-cols-[260px_1fr]">
          <aside className="space-y-4">
            <h1 className="text-2xl font-bold">Enterprise ACH Developer Docs</h1>
            <Input placeholder="Search docs..." className="w-full" />
            <nav className="mt-4 space-y-2">
              {sections.map((s) => (
                <div key={s} className="text-sm text-muted-foreground">{s}</div>
              ))}
            </nav>
          </aside>
          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-semibold">Developer Portal Overview</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Integrate BizPay Solutions in minutes. Secure, NACHA‑compliant ACH with modern APIs, idempotency, and signed webhooks.
            </p>

            <h3>Getting Started</h3>
            <ul>
              <li><strong>Base URL:</strong> https://api.bizpaysol.com/v1</li>
              <li><strong>Auth:</strong> Send a Bearer API key in the Authorization header</li>
              <li><strong>Idempotency:</strong> Include a unique Idempotency-Key for each write request</li>
              <li><strong>Webhooks:</strong> HMAC‑SHA256 signatures via <code>X-BizPay-Signature</code> with timestamp and replay protection</li>
            </ul>

            <h3>Common Objects</h3>
            <ul>
              <li><code>customer</code>, <code>bank_account</code> (tokenized), <code>mandate</code></li>
              <li><code>payment</code> (ach_debit/ach_credit), <code>payout</code>, <code>event</code></li>
            </ul>

            <h3>Authentication</h3>
            <pre><code>{`# example API key (use your own from the dashboard)
SK=sk_test_1234567890abcdef1234567890abcd

curl -s https://api.bizpaysol.com/v1/customers \
  -H "Authorization: Bearer ${'${'}SK}" \
  -H "Content-Type: application/json"`}</code></pre>

            <h3>Create a Customer</h3>
            <pre><code>{`curl -X POST https://api.bizpaysol.com/v1/customers \
  -H "Authorization: Bearer sk_test_1234567890abcdef1234567890abcd" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Acme Inc",
    "email": "ap@acme.com",
    "metadata": {"segment": "SaaS"}
  }'`}</code></pre>

            <h3>Tokenize a Bank Account</h3>
            <pre><code>{`curl -X POST https://api.bizpaysol.com/v1/bank_accounts \
  -H "Authorization: Bearer sk_test_1234567890abcdef1234567890abcd" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_id": "cus_9f2b1c",
    "plaid_public_token": "public-sandbox-abc123xyz"
  }'`}</code></pre>

            <h3>Create an ACH Debit</h3>
            <pre><code>{`curl -X POST https://api.bizpaysol.com/v1/payments \
  -H "Authorization: Bearer sk_test_1234567890abcdef1234567890abcd" \
  -H "Idempotency-Key: 8b2f1d6e-0b74-4e6a-9c2a-1d7391a2de9e" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "ach_debit",
    "customer_id": "cus_9f2b1c",
    "bank_account_id": "ba_48d7e0",
    "amount": 125000,
    "currency": "USD",
    "description": "Invoice #4821"
  }'`}</code></pre>

            <h3>Webhook: payment.succeeded</h3>
            <pre><code>{`POST /webhooks/bizpay (example payload)
Headers:
  X-BizPay-Signature: t=1730959200,v1=0a2b3c4d5e6f... (HMAC-SHA256)

{
  "id": "evt_7c1a2f",
  "type": "payment.succeeded",
  "data": {
    "payment": {
      "id": "pay_d1e27a",
      "amount": 125000,
      "currency": "USD",
      "status": "succeeded"
    }
  }
}`}</code></pre>

            <h3>Error Codes</h3>
            <ul>
              <li>400 <code>validation_error</code> • 401 <code>unauthorized</code> • 403 <code>forbidden</code></li>
              <li>404 <code>not_found</code> • 409 <code>idempotency_conflict</code> • 422 <code>unprocessable</code></li>
              <li>429 <code>rate_limited</code> • 5xx <code>server_error</code></li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
