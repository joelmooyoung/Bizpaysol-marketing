import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ExitSurveyModal() {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (!sessionStorage.getItem("exit_survey_shown")) {
          setOpen(true);
          sessionStorage.setItem("exit_survey_shown", "1");
        }
      }
    };
    window.addEventListener("mouseout", handler);
    return () => window.removeEventListener("mouseout", handler);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = "Exit feedback";
    const body = `Reason: ${reason}`;
    window.location.href = `mailto:support@bizpaysol.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Before you go—what held you back?</DialogTitle>
          <DialogDescription>Share quick feedback to help us improve.</DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-3">
          <select value={reason} onChange={(e) => setReason(e.target.value)} className="w-full rounded border p-2 text-sm">
            <option value="">Select a reason</option>
            <option>Just browsing</option>
            <option>Pricing unclear</option>
            <option>No needed features</option>
            <option>Confusing UI</option>
          </select>
          <Button type="submit" disabled={!reason}>Send feedback</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
