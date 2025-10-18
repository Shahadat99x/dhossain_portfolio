"use client";

import { Toaster } from "sonner";

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        className:
          "rounded-2xl border border-border/60 bg-card text-foreground shadow-soft",
      }}
    />
  );
}
