"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/utils";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

const Checkbox = ({className, icon, checkedIcon, ref, ...props}:CheckboxProps)=>(
  <CheckboxPrimitive.Root
    ref={ref}
    
    className={cn(
      "group peer h-6 w-6 shrink-0 rounded-sm border border-primary p-1 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <span className="flex items-center justify-center text-secondary group-data-[state=checked]:hidden">
      {icon}
    </span>
    {checkedIcon && (
      <span className="flex h-4 w-4 items-center justify-center text-primary group-data-[state=unchecked]:hidden">
        {checkedIcon}
      </span>
    )}
    {!checkedIcon && (
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    )}
  </CheckboxPrimitive.Root>
);

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default function CheckboxIcon(
  props: React.ComponentProps<typeof Checkbox>,
) {
  return <Checkbox {...props} icon={<X size={16} />} />;
}
