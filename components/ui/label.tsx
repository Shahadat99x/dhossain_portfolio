"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors data-[required=true]:after:ml-1 data-[required=true]:after:text-primary data-[required=true]:after:content-['*']",
          className,
        )}
        {...props}
      />
    );
  },
);
Label.displayName = "Label";
