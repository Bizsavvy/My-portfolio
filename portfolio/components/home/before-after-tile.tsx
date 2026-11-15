import { BeforeAfter, type Shot } from "@/components/site/before-after";
import { card, CardLabel } from "@/components/home/phone-card";
import { cn } from "@/lib/utils";

type Props = {
  /** Shown as the card's label, e.g. "Shappay · Home". */
  label: string;
  before: Shot;
  after: Shot;
  className?: string;
};

/** A card around the before and after slider, full width, cropped to the top of the screen. */
export function BeforeAfterTile({ label, before, after, className }: Props) {
  return (
    <figure className={cn(card, "px-g17 pt-g17 pb-g44", className)}>
      <BeforeAfter
        before={before}
        after={after}
        label={label}
        crop={{ aspect: "1170 / 1100", position: "top" }}
        sizes="(min-width: 1024px) 380px, 90vw"
        className="w-full"
      />
      <CardLabel>{label}</CardLabel>
    </figure>
  );
}
