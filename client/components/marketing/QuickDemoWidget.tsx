import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DEMO_URL = import.meta.env.VITE_QUICK_DEMO_URL as string | undefined;

export function QuickDemoWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if URL is configured
    setVisible(Boolean(DEMO_URL));
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="shadow-lg">Quick Demo</Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Quick Demo</DialogTitle>
          </DialogHeader>
          <div className="aspect-video w-full overflow-hidden rounded-md border bg-white">
            <iframe
              src={DEMO_URL}
              title="Quick Demo"
              className="h-full w-full"
              allow="camera; microphone; autoplay; clipboard-read; clipboard-write"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
