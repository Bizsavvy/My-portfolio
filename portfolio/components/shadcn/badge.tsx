import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "radix-ui"

// Styled to Docs/Design-System.md: the outcome tag (Measured, Projected) in the
// mono `label` style, pill-shaped, 4 + 20 + 4 = 28px tall.
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-g4 overflow-hidden rounded-full px-g10 py-g4 font-mono text-label uppercase whitespace-nowrap focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        // Measured outcomes carry the brand colour; text uses brand-text for contrast.
        measured: "bg-primary/12 text-brand-text",
        projected: "bg-raised text-muted-foreground",
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-input text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
