export function TrustBar() {
  return (
    <div className="border-t bg-white/80 py-3 backdrop-blur">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:gap-6">
          <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 99.95% Uptime</div>
          <div className="hidden h-3 w-px bg-slate-200 sm:block" />
          <div>50K+ Transactions Processed</div>
          <div className="hidden h-3 w-px bg-slate-200 sm:block" />
          <div>Fraud Protection Guarantee</div>
        </div>
      </div>
    </div>
  );
}
