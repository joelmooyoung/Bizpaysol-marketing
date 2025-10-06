import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function AchNoCodeDemo() {
  const [amount, setAmount] = useState("100.00");
  const [direction, setDirection] = useState<"debit" | "credit">("debit");
  const [sec, setSec] = useState("PPD");
  const [customerId, setCustomerId] = useState("cust_12345");
  const [description, setDescription] = useState("Sample ACH transaction");
  const [date, setDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [result, setResult] = useState<string>("");

  const payload = useMemo(() => {
    const cents = Math.round((parseFloat(amount || "0") || 0) * 100);
    return {
      direction,
      amount: cents,
      currency: "USD",
      sec_code: sec,
      customer_id: customerId,
      description,
      schedule_date: date,
      idempotency_key: `demo_${Date.now()}`,
    };
  }, [amount, direction, sec, customerId, description, date]);

  const json = useMemo(() => JSON.stringify(payload, null, 2), [payload]);

  const curl = useMemo(() => {
    return (
      "curl -X POST https://api.bizpaysol.com/v1/ach/transfers\n" +
      "  -H 'Authorization: Bearer sk_test_XXXX'\n" +
      "  -H 'Content-Type: application/json'\n" +
      `  -d '${JSON.stringify(payload).replace(/'/g, "'\\''")}'`
    );
  }, [payload]);

  function simulate() {
    setResult(
      JSON.stringify(
        {
          id: `tr_${Math.random().toString(36).slice(2)}`,
          status: "pending",
          created_at: new Date().toISOString(),
          ...payload,
        },
        null,
        2
      )
    );
  }

  return (
    <section className="border-t bg-white py-12">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">Build a Sample ACH</h2>
          <p className="mt-2 text-sm text-muted-foreground">No code required—configure and preview the exact API request.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium">Direction</label>
                  <Select value={direction} onValueChange={(v) => setDirection(v as any)}>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="debit">Debit (pull)</SelectItem>
                      <SelectItem value="credit">Credit (push)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">SEC code</label>
                  <Select value={sec} onValueChange={setSec}>
                    <SelectTrigger><SelectValue placeholder="SEC" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PPD">PPD (consumer)</SelectItem>
                      <SelectItem value="CCD">CCD (business)</SelectItem>
                      <SelectItem value="WEB">WEB (internet)</SelectItem>
                      <SelectItem value="TEL">TEL (phone)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-xs font-medium">Amount (USD)</label>
                  <Input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="100.00" />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium">Schedule date</label>
                  <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium">Customer ID</label>
                <Input value={customerId} onChange={(e) => setCustomerId(e.target.value)} placeholder="cust_12345" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium">Description</label>
                <Textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button onClick={simulate}>Simulate</Button>
                <Button asChild variant="outline">
                  <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(curl)}`} download="ach_curl.txt">Download curl</a>
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="mb-1 text-xs font-medium">Request JSON</div>
                <pre className="max-h-64 overflow-auto rounded-md border bg-slate-50 p-3 text-xs"><code>{json}</code></pre>
              </div>
              <div>
                <div className="mb-1 text-xs font-medium">curl</div>
                <pre className="max-h-64 overflow-auto rounded-md border bg-slate-50 p-3 text-xs"><code>{curl}</code></pre>
              </div>
              {result && (
                <div>
                  <div className="mb-1 text-xs font-medium">Simulated response</div>
                  <pre className="max-h-64 overflow-auto rounded-md border bg-emerald-50 p-3 text-xs"><code>{result}</code></pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
