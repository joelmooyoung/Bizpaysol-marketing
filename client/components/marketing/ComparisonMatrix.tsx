import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  bizpay: string | boolean;
  stripe: string | boolean;
  dwolla: string | boolean;
  modernTreasury: string | boolean;
}

const comparisonData: ComparisonItem[] = [
  {
    feature: "API-First Architecture",
    bizpay: true,
    stripe: true,
    dwolla: "Partial",
    modernTreasury: true,
  },
  {
    feature: "Same-Day ACH",
    bizpay: true,
    stripe: false,
    dwolla: true,
    modernTreasury: true,
  },
  {
    feature: "Automated Retry Logic",
    bizpay: true,
    stripe: "Manual only",
    dwolla: "Basic",
    modernTreasury: true,
  },
  {
    feature: "Webhook Support",
    bizpay: "Signed webhooks",
    stripe: true,
    dwolla: true,
    modernTreasury: true,
  },
  {
    feature: "Cost per Transaction",
    bizpay: "$0.25-0.50",
    stripe: "$0.80-1.50",
    dwolla: "$0.50-1.00",
    modernTreasury: "Custom",
  },
  {
    feature: "SOC 2 Type II",
    bizpay: true,
    stripe: true,
    dwolla: true,
    modernTreasury: true,
  },
  {
    feature: "NACHA Compliance",
    bizpay: "Full compliance",
    stripe: "Limited",
    dwolla: "Full compliance",
    modernTreasury: "Full compliance",
  },
  {
    feature: "Reconciliation Tools",
    bizpay: "Real-time via webhooks",
    stripe: "Manual export",
    dwolla: "Limited",
    modernTreasury: "Advanced",
  },
  {
    feature: "Developer Onboarding",
    bizpay: "5 minutes",
    stripe: "30 minutes",
    dwolla: "15 minutes",
    modernTreasury: "1+ days",
  },
  {
    feature: "Free Migration",
    bizpay: "Yes (all tiers)",
    stripe: false,
    dwolla: false,
    modernTreasury: "Enterprise only",
  },
];

function FeatureCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <div className="flex justify-center">
        <Check className="h-5 w-5 text-emerald-600" />
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-5 w-5 text-red-400" />
      </div>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonMatrix() {
  return (
    <section className="bg-white py-16 border-t">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Feature Comparison
          </h2>
          <p className="mt-2 text-muted-foreground">
            See how BizPaySol stacks up against leading payment processors
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-center font-semibold text-primary">
                  BizPaySol
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-600">
                  Stripe
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-600">
                  Dwolla
                </th>
                <th className="px-4 py-3 text-center font-semibold text-slate-600">
                  Modern Treasury
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b hover:bg-slate-50 transition">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-center bg-blue-50/30">
                    <FeatureCell value={row.bizpay} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <FeatureCell value={row.stripe} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <FeatureCell value={row.dwolla} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <FeatureCell value={row.modernTreasury} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-900">
            💡 <strong>Need custom features?</strong> Enterprise plans include
            white-glove support and custom integrations.{" "}
            <a href="/support#contact" className="underline">
              Contact our team
            </a>{" "}
            to discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
