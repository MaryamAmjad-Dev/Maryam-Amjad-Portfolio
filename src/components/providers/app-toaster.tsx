"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { Toaster } from "sonner";

/** Fixed navbar clearance + breathing room below header */
const TOAST_TOP_OFFSET = 88;

export function AppToaster() {
  return (
    <Toaster
      theme="dark"
      position="top-center"
      offset={TOAST_TOP_OFFSET}
      duration={4500}
      closeButton
      expand={false}
      visibleToasts={3}
      icons={{
        success: (
          <CheckCircle2
            className="h-5 w-5 shrink-0 text-success"
            aria-hidden="true"
          />
        ),
        error: (
          <AlertCircle
            className="h-5 w-5 shrink-0 text-danger"
            aria-hidden="true"
          />
        ),
      }}
      toastOptions={{
        unstyled: false,
        classNames: {
          toast:
            "glass !rounded-2xl !border !border-card-border !bg-card/90 !text-foreground !shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_32px_var(--glow-primary)] !backdrop-blur-xl group !px-4 !py-3.5 !gap-3",
          title: "!text-sm !font-medium !text-heading",
          description: "!text-sm !text-muted",
          actionButton: "!bg-primary !text-white",
          cancelButton: "!bg-card !text-foreground",
          closeButton:
            "!border-card-border !bg-card/80 !text-muted hover:!text-foreground !left-auto !right-0 !top-0 !translate-x-0 !translate-y-0 !border-0 !bg-transparent",
          success: "!border-success/20",
          error: "!border-danger/25",
        },
      }}
    />
  );
}
