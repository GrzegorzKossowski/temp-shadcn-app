import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority"

// Definicja wariantów linku
const linkVariants = cva(
  // Bazowe klasy (obowiązkowe dla każdego linku)
  "inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
  {
    variants: {
      // Warianty kolorystyczne
      variant: {
        default: "text-primary hover:text-primary/80",
        destructive: "text-destructive hover:text-destructive/80",
        secondary: "text-secondary hover:text-secondary/80",
        ghost: "hover:text-accent-foreground",
      },
      // Warianty rozmiaru
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
      },
    },
    // Domyślne warianty
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Typy propsów
export interface LinkProps 
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  ref?: React.Ref<HTMLAnchorElement>; // Ref jako zwykły prop
}

const Link = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: LinkProps) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(linkVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
};

Link.displayName = "Link";

export { Link, linkVariants };