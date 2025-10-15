import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyFunnelBar } from "@/components/marketing/StickyFunnelBar";
import { QuickDemoWidget } from "@/components/marketing/QuickDemoWidget";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <StickyFunnelBar />
      <main className="pt-20">{children}</main>
      <Footer />
      <ExitSurveyModal />
      <QuickDemoWidget />
    </div>
  );
}
