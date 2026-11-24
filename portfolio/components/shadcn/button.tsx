import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

// Styled to Docs/Design-System.md: 44px pill (10 + 24 + 10), `button` text style,
// 2px focus ring with a 2px gap, 150ms on the standard curve.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-g6 rounded-full border border-transparent text-button whitespace-nowrap transition-colors duration-150 ease-standard outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Lime: one per view.
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // Raised surface: the nav email pill and every other action.
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border-input bg-transparent text-foreground hover:bg-accent",
        ghost: "text-foreground hover:bg-accent",
        destructive: "bg-destructive/15 text-destructive hover:bg-destructive/25",
        // Lime fails as text in light mode (1.12:1), so links use brand-text.
        link: "rounded-none px-0 text-brand-text underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-g17",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
