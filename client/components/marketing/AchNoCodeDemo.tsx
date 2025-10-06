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
    const cents = Math.round(parseFloat(amount || "0") * 100);
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

  const curl = useMemo(() => {
    return [
      "curl -X POST https://api.bizpaysol.com/v1/ach/transfers",
      "  -H 'Authorization: Bearer sk_test_...'",