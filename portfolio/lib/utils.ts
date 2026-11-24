import { createCn } from "cn/config";

/**
 * Class merging that knows the design system's custom tokens (Docs/Design-System.md).
 * Without this, `text-button` or `text-label` look like text colours and get dropped
 * whenever a colour class such as `text-primary-foreground` sits beside them, and the
 * golden spacing steps (`p-g17`) don't override stock ones.
 */
export const cn = createCn({
  extend: {
    theme: {
      spacing: ["g4", "g6", "g10", "g17", "g27", "g44", "g72", "g116"],
    },
    classGroups: {
      "font-size": [
        {
          text: ["display", "title-xl", "heading", "title", "lead", "body", "button", "caption", "label"],
        },
      ],
    },
  },
});
