import { useCallback, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function EmailCaptureDialog({
  triggerClassName,
  children,
}: {
  triggerClassName?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const subject = "API Sandbox Access";
      const body = `Please grant API sandbox access.\n\nEmail: ${email}`;
      const mailto = `mailto:sales@bizpaysol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setOpen(false);
    },
    [email]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName}>{children ?? "Start Free Sandbox"}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get API sandbox access</DialogTitle>
          <DialogDescription>
            Enter your work email to get set up. We'll follow up with onboarding details.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-2 space-y-3">
          <Input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <div className="flex items-center gap-2">
            <Button type="submit" className="w-full">Request Access</Button>
          </div>
          <p className="text-xs text-muted-foreground">No credit card required.</p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
