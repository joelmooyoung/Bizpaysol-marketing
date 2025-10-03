import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}
