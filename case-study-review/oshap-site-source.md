# Source: Oshap short page (/work/oshap) and detailed page (/work/oshap/detailed), Haye's rewrite after the cut, exported 2026-11-21

<!-- Haye's rewrite, cut toward 900 words with Haye's approval, live on /work/oshap since 2026-11-21. Image lines, figures and callouts come from the page. -->

Case study · Oshap

# Any restaurant's colour, readable on every guest's phone

Oshap lets restaurant guests scan a table's QR code to order and pay, with no app download and no login. Every restaurant brings its own brand colour, and the guest app adopts it automatically. Using a fixed text colour fails for roughly half of all brands: on a yellow brand, white text measures 1.40:1, making the button that adds food to an order impossible to read. I built a design system that keeps any brand colour readable, then fixed the deeper visual issues that this work uncovered.

**Role:** Design engineer (owned product design, frontend development, and the design system)  
**Team:** Me, alongside a backend engineer who built the core logic behind the apps  
**Timeline:** August to September 2026, then 16 to 21 November 2026  
**Stage:** One pilot restaurant onboarded with its brand colour switched on (not open to guests yet)  
**How I work:** I design in Figma and build directly in code using the Figma MCP with Claude, and I use Claude to test my design opinions against real-world evidence before changing code

## Problem

Restaurants want their guests to feel on brand at every step, and per-restaurant colour was a feature a restaurant specifically asked for while we were building Oshap. It is only available on Oshap's highest subscription plan, so it also gives restaurants a reason to upgrade.

No fixed text colour works across the board. White text on a brand yellow measures 1.40:1, making it nearly invisible. White text on a brand navy measures 13.24:1. A restaurant owner won't catch that problem during setup, but their guests will notice it at a table in bright daylight. So Oshap calculates the right text colour for each brand instead of assuming white.

## Impact

What the system guarantees: any brand colour stays readable. Across a test sweep of 216 colours, contrast never drops below 4.39:1 against a 3:1 requirement. One token file powers four web apps, including the marketing site, in both light and dark modes.

What is still unknown: nothing has been measured with guests or staff yet because the pilot restaurant has not opened.

## TL;DR

- A restaurant's brand colour can make Oshap unreadable: white text on a yellow brand measures 1.40:1, and the merchant usually never sees it.
- I built a design system in Figma and code that turns any single colour into a full set of readable colours, with automated checks in code to enforce the rules.
- Any brand colour stays readable across a test sweep of 216 colours. Oshap's pilot restaurant has not opened yet, so real-world user metrics are still ahead.

![Oshap's guest menu in a phone browser, at Aji's Kitchen, table T1](/assets/oshap/screens/oshap-guest-menu-hd.png)

![A dish sheet: Chicken Shawarma with a spice level and an extra chosen, and Add · ₦3,000](/assets/oshap/screens/oshap-guest-dish-hd.png)

![Pay Bill: the restaurant's bank details and I've Sent the Money](/assets/oshap/screens/oshap-guest-pay-transfer-hd.png)

## Three decisions, and one I reversed

### 1. The text colour is calculated for each brand, not guessed

My first idea was a rule that preferred white text whenever it passed contrast checks. It did nothing: a colour's contrast against white and against black always multiply to 21, so the stronger option wins anyway. Instead, the system adjusts only the lightness of each colour and checks every pair against contrast standards. A brand yellow deepens to #d7b513 and still looks yellow.

![The dish sheet in Oshap orange, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-orange-hd.png)

![The dish sheet in a yellow brand, with dark text on the Add button](/assets/oshap/brands/oshap-brand-dish-yellow-hd.png)

![The dish sheet in a navy brand, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-navy-hd.png)

![The dish sheet in a magenta brand, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-magenta-hd.png)

*One screen across four brands, on sample data. On the yellow, the Add button switches to dark text.*

### 2. Keeping the brand on buttons, and writing down the trade-off

White text on Oshap's own orange measures 3.11:1: enough for large text, not for sentences. An earlier version used a darker fill for every labelled button, which passed but dulled the brand. I kept the true brand colour and wrote down the trade-off instead: filled button labels are locked to 16px semibold in the Button component, and any sentence in brand colour uses a darker tone at 6.16:1.

[Figure drawn in code: oshap-button-rule]

*The filled button at three heights, and a sentence in the darker tone, from Oshap's tokens.*

### 3. Colour means one thing, especially around money

Status colours never follow the brand: a restaurant with a red brand must never get a red "paid" chip. The same principle caught a clash on the staff dashboard, where a "Take payment" button and an "Owes" chip shared the same pale pink. Secondary buttons are now grey, and the brand colour marks only the main action in a view.

Before · Light

![Before, light mode: the "Take payment" button is the same pale pink as the "OWES" chip beside it](/assets/oshap/ds/oshap-owes-before-light.webp)

Before · Dark

![Before, dark mode: a brown-orange "Take payment" button beside a red "OWES" chip](/assets/oshap/ds/oshap-owes-before-dark.webp)

After · Light

![After, light mode: a grey "Take payment" button, and the pink "OWES" chip is the only warm colour](/assets/oshap/ds/oshap-owes-after-light.webp)

After · Dark

![After, dark mode: a grey "Take payment" button, and the red "OWES" chip is the only warm colour](/assets/oshap/ds/oshap-owes-after-dark.webp)

*The staff dashboard on sample data, before PR #152 and on master, in light and dark. The button's fill (#FFDBCC) sat just ΔE 1.3 from the chip's (#FFDAD5).*

### The call I reversed: surfaces

Cards on cards were blending together, because each step of the light surface scale sat only 1.06:1 from the next. My first fix flipped the scale so higher surfaces got lighter. Mobbin research supported it (Square, Swiggy, and Mercury), and it matched my own taste. The same afternoon I reversed it: Material 3, Apple, and Radix all keep the page lightest and make nested containers darker. The problem was the size of each step, not the direction, so I kept the direction and widened the steps to between 1.09:1 and 1.20:1.

[Figure drawn in code: oshap-surfaces]

*One table card on each version of the light surface scale, from Oshap's tokens.*

## How the rules hold

- **One change rebrands the guest app.** Swapping a single group of colour tokens rebrands every guest screen, without editing any individual page.
- **Tests catch silent failures.** A test fails if the code uses a colour name that does not exist, and the branding tests sweep the colour wheel every 15 degrees.
- **Testing opinions before writing code.** I thought Refresh on the waiter dashboard should be the main orange button, so I asked Claude to check Mobbin first. No product there fills Refresh with its brand colour: most use a quiet or outlined button, an icon, or an "updated" note. I followed the evidence, and Refresh shipped as an outlined button with an "Updated just now" note.

## What's next

The pilot restaurant has not opened yet, so there is no live feedback. Once it opens, the pilot will test Oshap against these launch targets:

- median time from scan to first order under 90 seconds;
- drop-off between scan and first order under 20%;
- median time to pay under 60 seconds;
- waiters notified of a guest's request within 15 seconds.

None of these metrics measure colour or spacing on their own, so they won't prove by themselves whether the design system succeeded.

## What I'd do differently

- **Define neutrals before generating any palette.** Our greys changed three times in two days. Asking "should the page carry the brand?" first would have skipped two rewrites.
- **Check the math before adding a rule.** The rule preferring white text did nothing, and the contrast arithmetic proved why.
- **Check platform standards before changing a foundation.** Reviewing Material 3, Apple UIKit, and Radix first would have saved the surface flip and its reversal.

[Read the detailed case study](/work/oshap/detailed)

Next project

[NawNawA cart that does the maths, for sub-15-minute grocery delivery in Nigeria.](/work/nawnaw)

---

<!-- Haye's rewrite, live on /work/oshap/detailed since 2026-11-21. Image lines, figures and callouts come from the page. -->

[Oshap case study](/work/oshap)

Detailed case study · Oshap

# Any restaurant's colour, readable on every guest's phone

10 min read

## Overview

Oshap lets restaurant guests scan a table's QR code to order and pay, with no app download and no login. Because every restaurant brings its own brand colour, the design system has to hold up for colours I will never see. This is the story of how I made any brand colour readable, and how those same rules later fixed the surfaces, spacing, and colour meanings underneath, including one decision I reversed the very same afternoon.

|  |  |
| --- | --- |
| Role | Design engineer (owned product design, frontend development, and the design system) |
| Team | Me, alongside a backend engineer who built the core logic behind the apps |
| Timeline | August to September 2026: branding from 20 August; v2 on 1 September, v3 on 2 September, fixed neutrals on 3 September, full adoption through 16 September. Then 16 to 21 November 2026 |
| Scope | 4 web apps (guest, staff, operator, and marketing site), light and dark modes |
| Tools | Figma library; Tailwind CSS v4 tokens in tokens.css; React components in a shared package |
| Stage | One pilot restaurant onboarded with its brand colour switched on (not open to guests yet) |
| How I work | I design in Figma and build directly in code using the Figma MCP with Claude, and I use Claude to test my design opinions against real-world evidence before changing code |

![Oshap's guest menu in a phone browser, at Aji's Kitchen, table T1](/assets/oshap/screens/oshap-guest-menu-hd.png)

![A dish sheet: Chicken Shawarma with a spice level and an extra chosen, and Add · ₦3,000](/assets/oshap/screens/oshap-guest-dish-hd.png)

![The cart sheet: two items, the total and Place Order](/assets/oshap/screens/oshap-guest-cart-hd.png)

![Pay Bill: the restaurant's bank details and I've Sent the Money](/assets/oshap/screens/oshap-guest-pay-transfer-hd.png)

*A guest's order in a mobile browser, running on Oshap's main branch with sample data: the menu, a dish with options, the cart, and paying by bank transfer.*

## Why one colour is hard

A restaurant gives Oshap a single hex code, and the guest app has to adopt it automatically. From that one input, the system has to generate the main colour, the text on top of it, a tinted container, and the text inside that container, while making sure every pair stays readable on a phone screen in bright daylight.

Restaurants want the guest experience to stay on brand everywhere. Per-restaurant colour was a feature a restaurant specifically asked for while we were building Oshap.

No fixed text colour works across the board. White text on a brand yellow measures 1.40:1, making it nearly invisible. White text on a brand navy measures 13.24:1. Because the right answer flips across the colour wheel, any hard-coded choice fails for roughly half of all brands. A restaurant owner won't catch that during setup, but their guests will notice it immediately at a table in daylight. That is why Oshap calculates the right text colour for each brand instead of assuming white.

Oshap's own orange had the same problem on a smaller scale. White text on #F56500 measures 3.11:1: readable for large text and icons, yet too low for a full sentence.

Version 1 had no colour system built to support more than one restaurant.

## The decisions, and what I tried first

Four core decisions hold the system together, and three of them started with the wrong answer. Every failure was measured, and the measurement pointed directly to the fix. Two quick terms help here: contrast is how far apart two colours are visually, from 1:1 (identical) to 21:1 (black on white), and the seed is the restaurant's own brand colour.

| Decision | Tried first | Why it failed | What shipped |
| --- | --- | --- | --- |
| Text on any brand colour | A rule that preferred white text whenever it passed | A colour's contrast against white and against black always multiply to 21, so the stronger option wins automatically; the extra rule did nothing | Adjust only the lightness of each colour (in the OKLCH colour space) and verify every pair against WCAG contrast; a brand yellow deepens to #d7b513 while staying unmistakably yellow |
| Brand colour on buttons (v2 to v3) | v2 generated a darker fill, #C24E00 at 4.79:1, for every labelled button | It found passing values by stepping through a list until one worked, which was hard to trace or reproduce, and it dulled the brand colour | v3 keeps the seed colour and states the trade-off clearly: filled button labels are locked to 16px semibold at every size inside the Button component, while body-size brand text uses a darker tone at 6.16:1 |
| How far the seed reaches | v3 generated the greys from the seed too, with a slight tint of colour | A restaurant seeded near blue ended up with blue-grey pages, not just blue buttons; two restaurants side by side looked like completely different products | Fixed neutral greys shared across every restaurant, keeping the seed strictly on accents |
| What "neutral" means | A borrowed grey scale | It wasn't truly neutral: its dark shades leaned navy and blue-grey, causing warm brand tints to clash with it | True greys built from black and white with zero colour (R = G = B). Outline contrast rose from 3.11:1 back up to 4.5:1 |

![The dish sheet in Oshap orange, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-orange-hd.png)

![The dish sheet in a yellow brand, with dark text on the Add button](/assets/oshap/brands/oshap-brand-dish-yellow-hd.png)

![The dish sheet in a navy brand, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-navy-hd.png)

![The dish sheet in a magenta brand, with white text on the Add button](/assets/oshap/brands/oshap-brand-dish-magenta-hd.png)

*One screen across four brands: the dish sheet styled automatically by the app's branding engine on sample data. On the yellow theme, the Add button automatically switches to dark text.*

[Figure drawn in code: oshap-button-rule]

*The 16px rule, generated from Oshap's tokens: the filled button across its three heights, paired with a sentence in the darker text tone.*

[Figure drawn in code: oshap-greys]

*Three grey scales: the same brand colours placed on the seed-tinted grey, the borrowed grey, and the true neutral, drawn from each version's tokens.*

Three more rules complete the system:

- **Status colours never follow the brand.** A restaurant with a red brand must never get a red "paid" chip, so error, success, and warning states keep fixed colours.
- **The staff app stays Oshap orange.** Staff look at it all shift, and group owners switch branches from the top bar. If the app changed colour with each branch, the whole workspace would shift mid-shift.
- **Elevation comes from tone, not shadows.** Drop shadows are reserved strictly for elements that genuinely float above the page.

## The same rules, applied underneath

In November, I audited the interface and uncovered two deeper problems sitting underneath the colour work. First, cards on cards and buttons on cards blended together because each step of the light surface scale sat only 1.06:1 apart from the next. Second, colour was sending mixed signals: on the staff dashboard, an "Owes" chip and a "Take payment" button looked like the exact same pink. The secondary button's light brand tint (#FFDBCC) sat just ΔE 1.3 away from the error container (#FFDAD5), a gap too small for the eye to tell apart.

### Surfaces: I fixed the wrong thing first

My first fix flipped light mode to a "lighter is higher" layout: a light grey page (#F2F2F2) underneath white cards. Mobbin research supported this pattern (Square, Swiggy, and Mercury all use it), and it matched my own taste.

That same afternoon, I reversed it. Products I trust, including Apple, Calendly, Kuda, and Grey, keep the page lightest and step nested containers slightly darker. Platform guidelines agree: Material 3's light containers step down from tone 98 to 90, Apple layers #F2F2F7 on white, and Radix Colors follows the same direction. The flaw was the size of each contrast step, not the direction. I kept the original direction and widened the steps.

| Light mode | Tone | Step |
| --- | --- | --- |
| Page | White |  |
| Card | #F2F2F2 | 1.12:1 darker than the page |
| Field or well | #E8E8E8 | 1.09:1 darker than a card |
| Control on a card | #DEDEDE | 1.20:1 darker than a card |

[Figure drawn in code: oshap-surfaces]

*A single table card shown on each version of the light surface scale, generated from Oshap's tokens at each stage. The numbered callouts explain each stage, and the steps measure contrast between neighbouring layers: card on page, block on card, and button on card.*

Material 3 gives you the tone scale, yet it sets no nesting rule of its own. "Nesting steps away from the page" is Oshap's rule built on top of that scale. Wherever Oshap departs from Material 3, the colour guide now explains what changed and why, checked directly against Google's own component tokens.

### Colour that carries meaning

The pink colour clash had a clear root cause. Material 3 generates secondary and tertiary palettes from the seed colour, and for Oshap's orange, the secondary palette's tone 90 turned out byte-identical to the primary palette's tone 90. As a workaround, tonal buttons had been moved onto the primary container without anyone deciding what that colour should actually signal.

- **Secondary buttons became neutral.** They now use a grey fill with near-black text, reserving the brand colour for the single main action in a view. The button hierarchy now runs clearly from filled, to neutral, to outlined or text, and finally destructive.
- **Secondary and tertiary palettes were removed.** Nothing in the product relied on them intentionally; they only served four plan tags, two chart series, and two unused component options. Accents now use the primary brand colour only.
- **Warning received its own seed.** #F5A524 now runs through the same colour solver as the other palettes. In light mode, the warning fill (#835400) holds white text at 6.50:1 contrast.

Before · Light

![Before, light mode: the "Take payment" button is the same pale pink as the "OWES" chip beside it](/assets/oshap/ds/oshap-owes-before-light.webp)

Before · Dark

![Before, dark mode: a brown-orange "Take payment" button beside a red "OWES" chip](/assets/oshap/ds/oshap-owes-before-dark.webp)

After · Light

![After, light mode: a grey "Take payment" button, and the pink "OWES" chip is the only warm colour](/assets/oshap/ds/oshap-owes-after-light.webp)

After · Dark

![After, dark mode: a grey "Take payment" button, and the red "OWES" chip is the only warm colour](/assets/oshap/ds/oshap-owes-after-dark.webp)

*The staff dashboard on sample data, before PR #152 and on master, in light and dark modes. Previously, the button's fill (#FFDBCC) sat just ΔE 1.3 away from the chip (#FFDAD5). Secondary buttons are now grey.*

The dashboard followed the same rule: use colour only when action is needed. Stat cards used to fill completely with amber or red, stayed lit even at zero (Low stock showed red when nothing was low), and spent the brand colour on "Active tables." Now every card stays neutral, and a tinted row names the task only when something needs attention: "Review payments ›" or "Restock 2 items ›". Table cards dropped their amber fill, "Dining" became neutral, and red now means only "Owes." Neutral cards are standard in Snowflake, Asana, Zendesk, and 7shifts, while Deel, Vapi, and Stripe apply colour only to a small marker or an action row.

### Spacing: fewer choices

I replaced the 4pt grid because its fifteen steps gave too many choices, and too many options caused screens to look inconsistent. The new scale uses eight steps based on the golden ratio: 4, 6, 10, 17, 27, 44, 72, and 116. Because the token names stayed the same while the underlying values changed, a single codemod pass updated 76 files, and an automated test now fails on any off-scale padding, margin, or gap. Figma was updated to match: roughly 1,500 spacing bindings were updated across 34 pages, and 17 old variables were deleted.

## How the rules hold

The design system lives in two places that must stay in sync: a Figma library and the codebase. I made the code the single source of truth and added automated checks to keep everything aligned.

- **Rebranding takes one override.** Tokens run in three tiers, from Tailwind utility classes to semantic roles to raw colour values. Swapping the primary group on a single wrapper rebrands the entire guest app without touching individual screens.
- **Catching silent failures.** The branding code was still referencing two token names retired in v2. Because CSS fails silently on missing variables, every restaurant would have quietly fallen back to Oshap orange. An automated test now reads the token file directly and fails if the code writes any name that isn't declared there.
- **Testing the whole colour wheel.** Automated branding tests sweep the hue wheel every 15 degrees across three chroma levels and three lightness levels in both modes, because the colours you think to test by hand are rarely the ones that break.
- **Keeping code aligned with Figma.** One dedicated pass closed five gaps where the rules and the Figma library agreed but the code had drifted: 12 dialogs moved to 28px corners, hover shadows switched to tone steps, and interactive borders moved off decorative border tones.
- **Accessibility built into rules, not manual reviews.** Six spots placed 11px or 14px text on the orange fill, and each got a targeted fix. Destructive confirmations, such as rejecting a guest's payment claim, now use the error colour instead of the brand colour. Field error states also start with an alert icon so users never have to rely on seeing red alone.
- **Testing opinions before writing code.** I thought Refresh on the waiter dashboard should be the main filled orange button, so I asked Claude to check real examples on Mobbin first. No product there fills Refresh with its brand colour: Attio, Browserbase, and Gumloop use a quiet or outlined button, Cloudflare and Supabase use only an icon, and Mixpanel and ClickUp show an "updated" note. I followed the evidence, and Refresh shipped as a neutral outlined button with an "Updated just now" note beside it.

[Figure drawn in code: oshap-token-flow]

*How one restaurant colour becomes the guest app's colours, from Oshap's branding code and tokens. The staff app and the status colours stay fixed.*

## Result

What the system guarantees, verified by its own tests:

- **Any brand colour stays readable.** Across a sweep of 216 colours, contrast never drops below 4.39:1 against a 3:1 requirement, meaning the brand-colour generator has never needed to trigger its fallback.
- **One system across four apps.** The guest, staff, operator, and marketing web apps share a single token file in light and dark modes, and the three product apps share one component library.
- **Rules enforced automatically in code.** The 16px button label rule lives inside the Button component, the token-name test protects branding, a spacing test blocks off-scale values, and the test suite passed 688 of 688 tests after the latest change.

What is still unknown: nothing has been measured with guests or staff yet. Oshap has one pilot restaurant onboarded with its brand colour switched on, though the restaurant has not started operations yet, so there is no live feedback. Once it opens, the pilot will test the brand colour system against these targets:

- median time from scan to first order under 90 seconds;
- drop-off between scan and first order under 20%;
- median time to pay under 60 seconds;
- waiters notified of a guest's request within 15 seconds.

None of these metrics measure colour or spacing on their own, so they won't prove by themselves whether the design system worked.

## What I'd do differently

- **Define neutrals before generating any palette.** Our greys changed three times in two days: first tinted by the seed, then a borrowed scale that leaned navy, and finally a true neutral. Asking "should the page carry the brand?" upfront would have skipped two full rewrites.
- **Check the math before adding a rule.** The rule preferring white text did nothing, and the contrast arithmetic proved why. Because the colours anyone thinks to test manually are rarely the ones that break, sweeping the entire colour wheel is essential.
- **Check platform standards before changing a foundation.** Reviewing Material 3, Apple UIKit, and Radix first would have saved me from flipping the surface scale and reversing it the same afternoon.

Next project

[NawNawA cart that does the maths, for sub-15-minute grocery delivery in Nigeria.](/work/nawnaw)
