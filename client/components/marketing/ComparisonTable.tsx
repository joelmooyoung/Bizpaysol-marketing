export function ComparisonTable() {
  return (
    <section className="border-t bg-white py-14">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Why BizPaySol vs. Others</h2>
          <p className="mt-2 text-muted-foreground">Simple pricing and speed-focused workflow—no bloated extras.</p>
        </div>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-left">
                <th className="p-3 font-semibold">Feature</th>
                <th className="p-3 font-semibold">BizPaySol</th>
                <th className="p-3 font-semibold">Gusto</th>
                <th className="p-3 font-semibold">Stripe</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">Setup time</td>
                <td className="p-3 font-medium text-emerald-600">Under 5 minutes</td>
                <td className="p-3">Varies</td>
                <td className="p-3">Varies</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Pricing model</td>
                <td className="p-3 font-medium">Flat monthly</td>
                <td className="p-3">Per-employee + fees</td>
                <td className="p-3">Per-transaction</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">Fraud alerts</td>
                <td className="p-3">Included</td>
                <td className="p-3">Add-on</td>
                <td className="p-3">Add-on</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">ACH-first workflows</td>
                <td className="p-3">Optimized</td>
                <td className="p-3">General payroll suite</td>
                <td className="p-3">Payments platform</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
