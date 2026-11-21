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
