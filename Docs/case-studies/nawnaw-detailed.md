<!-- Haye's rewrite, live on /work/nawnaw/detailed since 2026-11-23; sign-in, address and tracker screens and the new closing line added the same day. Image lines, figures and callouts come from the page. -->

[NawNaw case study](/work/nawnaw)

Detailed case study · NawNaw

# A cart that does the maths

11 min read

## Overview

NawNaw is a concept for sub-15-minute grocery delivery in Nigeria's largest cities, fulfilled from dark stores: small, closed warehouses that each serve a radius of about 3 km. I designed and built the consumer app. This case study walks through every major decision in the product, and every one of them connects back to a business constraint or a user insight.

NawNaw never launched. Raising the capital to open even one dark store was not feasible, so it remained a concept project. Payments, delivery-time estimates, phone verification, current location, and the map are all mocked. Each mock is evaluated as the real feature it represents, and genuine gaps are called out openly. Because there are no live user numbers, this page focuses on the reasoning rather than launch metrics.

|  |  |
| --- | --- |
| Role | Product designer and frontend engineer |
| Team | Solo |
| Timeline | June 2026 |
| Scope | The consumer app. The warehouse picker tablet is part of the business model, though it was never built and sits outside this scope. |
| Tools | Figma; React Native and Expo (one codebase for mobile and web) |
| Stage | Concept, never launched |

![Home: Delivering in 12 mins, Store 1.2km away](/assets/nawnaw/screens/nawnaw-home.png)

![The cart at ₦6,300: ₦2,700 away from free delivery](/assets/nawnaw/screens/nawnaw-cart-fee.png)

![Checkout at ₦9,100, with the delivery fee shown as FREE](/assets/nawnaw/screens/nawnaw-checkout.png)

*Home, the cart, and checkout, captured from the working app on sample data.*

## The problem and the bet

The core idea is simple: turn a busy, higher-income shopper's unplanned craving or need into a placed order in as few steps as possible, selling speed and convenience rather than low prices. Three things drive this model: the promise of delivery in under 15 minutes, impulse buying, and shoppers who value saving time over saving a few hundred naira.

Nigeria is an expensive market to run fast delivery in, yet a lower-income market to sell into. Only higher-income households, earning ₦6M or more a year, can regularly afford the basket sizes this cost structure requires. Because of that, deciding who to serve is also a unit-economics decision. It shapes the entire product: premium through restraint, calm, and trustworthy, never loud with discounts.

## Who it is for

The app is built around four urban customer profiles who are comfortable with technology and mostly choose convenience over price: Young Guns (21 to 26, impulse-driven, frequent shoppers), Midlife (26 to 35), Pushing 40s (35 to 44, occasional top-ups), and Very Young (18 to 21, more price-conscious).

One key figure shaped the layout: roughly 65% of orders from the youngest group are unplanned. That means browsing and discovery matter more than search, and the app's job is to spark an idea rather than just check off a shopping list. This figure comes from secondary planning research rather than a study I ran myself, and these profiles remain concept-stage.

## The economic spine

Simply converting an Indian quick-commerce benchmark into naira is the weakest way to localise a business model. Instead, I split the problem in two: what local shoppers can comfortably spend, and what a dark store needs to break even. That produced a clear basket ladder: a survival floor of ₦5,700, a target basket of ₦9,000, and a stretch goal of ₦12,000.

At a ₦9,000 basket and a 20% gross margin, each order contributes about ₦1,200. With roughly ₦5.4M in monthly fixed costs per dark store, a single store needs about 150 orders a day to break even. The North Star metric is monthly contribution per active customer rather than average basket size, because pushing baskets higher is not a win if it causes people to order less often.

With inflation hovering around 16%, these figures age quickly and would need to be recalculated before any real investment decision.

## The journey, decision by decision

### Home: a directory for impulse

- **Guests can browse everything.** There is no sign-up wall at launch: the catalogue, search, and cart all work without an account, and the only identity check happens when tapping Place order. The trade-off is having less user data early on and needing to save guest carts locally on the phone so they are not lost.
- **Speed is the hero, not a discount.** The top banner reads "Delivering in 12 mins, Store 1.2km away." Treated as the live estimate it represents, this sets a strict standard for accuracy: over-promising on speed would quickly break the trust the banner is meant to build.
- **A clear directory, not a product dump.** Category tabs open cards that preview four real products alongside a "+X more" pill, leading into full item lists. Global search stays on hand as a fast shortcut for planned shopping.
- **Essentials come first.** Milk, bread, eggs, and water lead the Bestsellers section. Because a manually curated list will eventually fall behind real demand, it would need to become data-driven after launch.

### The cart: economics made UI

The cart is where the business's fee structure turns into everyday interface design.

- **One cart, three live states.** Below ₦3,000, a ₦700 small-cart fee applies; between ₦3,000 and ₦9,000, there is a ₦600 delivery fee; from ₦9,000 upward, delivery is free. The cart responds live to the subtotal: crossing ₦3,000 or ₦9,000 switches the screen into the matching state, and one shared rule routes every entry point to the right view. Maintaining three near-identical screens creates some code duplication, which I accepted in exchange for keeping each state crisp and unmistakable.
- **A fee you can remove.** Under ₦3,000, the cart displays "Add ₦X more to remove the ₦700 fee" in amber rather than red, signalling that it is easy to fix rather than an error. Charging a fee on a premium app risks feeling petty; clear framing and a modest threshold help soften that reaction.
- **A goal you can see.** A progress bar shows the exact amount left to unlock free delivery.
- **Keeping the reward visible.** Once delivery becomes free, the delivery row stays visible and reads FREE so shoppers see the value they earned.
- **Suggestions matched to the gap.** Small baskets suggest larger everyday staples, while nearly-free baskets suggest cheap add-ons. One honest limitation: the suggestions currently match by category and rough price band rather than the exact naira gap, so they can still miss the mark.
- **No surprise fees.** The running total stays visible at all times, and the full breakdown is always one tap away.
- **One welcome offer: free delivery on the first 5 orders.** This replaced an earlier ₦500-off promo code that stacked awkwardly with a free first delivery and used a ₦2,000 minimum below our ₦3,000 threshold. The new offer waives only the ₦600 delivery fee (so the ₦700 small-cart fee still protects thin baskets) and applies automatically without a code. Across those first 5 orders, any cart of ₦3,000 or more jumps straight to free delivery and displays "N welcome orders left."

![The cart at ₦1,800: add ₦1,200 more to remove the ₦700 small cart fee](/assets/nawnaw/screens/nawnaw-cart-small.png)

![The cart at ₦6,300: ₦2,700 away from free delivery](/assets/nawnaw/screens/nawnaw-cart-fee.png)

![The cart at ₦9,100: free delivery unlocked](/assets/nawnaw/screens/nawnaw-cart-free.png)

![A new shopper's cart at ₦3,600: Free delivery, 5 welcome orders left; delivery fee FREE](/assets/nawnaw/screens/nawnaw-welcome-cart.png)

*The three cart states on sample data for a returning shopper past the welcome offer, then the same cart for a new shopper during the 5-order welcome offer.*

**The number I got wrong.** My initial fee thresholds came straight from early Figma mock-ups. When I checked them against the financial model, free delivery at ₦5,000 sat below the ₦5,700 survival floor, meaning the cart was actively steering shoppers toward unprofitable orders. I recalculated every threshold from scratch:

[Figure drawn in code: nawnaw-fee-ladder]

*The basket scale with the three cart states, the business's basket ladder, and the old free-delivery point below the floor, with the recalculated rules.*

The trade-off is that a higher threshold widens the gap a shopper has to close, which could lower how often they order. That would be the very first thing to test.

### Checkout and the one identity check

- **One lightweight gate at Place order.** When a guest taps Place order, a bottom sheet slides up over checkout; once verified, the order goes through immediately without pulling them off the screen.
- **Phone, code, name, and nothing else.** There are no email fields, passwords, or extra address forms at sign-up. The trade-off is having no email address on file for account recovery or email marketing.
- **WhatsApp first, SMS one tap away.** The verification code arrives on WhatsApp by default, submits automatically as soon as the sixth digit is entered, and offers a resend option after 30 seconds.
- **Reassurance right where people pay.** The estimated delivery time, a secure-payment note, and a small pinned map sit together at checkout. Every detail here has to be accurate, because misleading reassurance hurts trust more than showing nothing at all.
- **Payment methods Nigerians actually use.** Card, bank transfer, USSD ("Dial a code, no internet needed"), and cash on delivery. Offering cash on delivery introduces real risk to the prepaid cash flow that the business model assumes.

![Checkout: delivering to Home with a pinned map, an estimate of 12 to 15 minutes, and the itemised total](/assets/nawnaw/screens/nawnaw-checkout.png)

![A guest taps Place order: a Confirm your number sheet slides up over checkout, with WhatsApp selected and SMS one tap away](/assets/nawnaw/screens/nawnaw-signin-flag.png)

*Checkout for a signed-in shopper, and the same screen for a guest at Place order: one sheet asks for a phone number and sends the code on WhatsApp.*

### Location: the typed address is the truth

- **Asked only when needed, never up front.** Shoppers can explore the entire catalogue before sharing a location.
- **Landmarks provide real precision.** An explicit "Landmark (helps the rider)" field, such as "Near Unity Fountain," solves a common local problem: in Nigerian cities, a map pin often lands on the right building but the wrong gate, so the typed address and landmark remain the source of truth.

![Add address: a map pin to drag to the doorstep, the street address, and a Landmark (helps the rider) field reading Near Unity Fountain](/assets/nawnaw/screens/nawnaw-address.png)

*The address form: the pin helps, but the typed street address and the landmark are what the rider follows.*

### After the order

- **A staged tracker, not a generic spinner.** Orders move clearly through Confirmed, Packing, Picked Up, and Delivered, complete with a live countdown during packing. A live countdown is a public promise: missing it damages trust far more than not showing a timer.
- **One-tap reorder everywhere.** Every post-order screen lets shoppers rebuild their cart from a past order and jump straight to checkout.
- **A receipt that matches the cart.** The order summary itemises every single fee, reinforcing the promise of no hidden charges.

![Packing your order: the tracker at the Packing stage, after Confirmed, with a live countdown](/assets/nawnaw/screens/nawnaw-tracking.png)

*The tracker during packing: four named stages and a live countdown.*

## Tensions and honest gaps

- **Discounts clashing with the premium stance, resolved.** Product cards initially showed a "% OFF" badge on every item, generated from the product ID, which clashed directly with our speed-over-discounts positioning. Discounts now appear only when a product has a real original price.
- **The welcome offer is not factored into the model yet.** Waiving delivery on 5 orders can cost up to 5 × ₦600 = ₦3,000 per new shopper, which is not yet included in the break-even math. It also pauses the cart's nudge toward ₦9,000 across those first 5 orders. Whether 5 orders is the right window to build a habit is still an assumption to validate, and tracking "first" per device means switching phones resets the offer.
- **The model moved after the cart was built.** I later revised the break-even model to pay riders per trip instead of a salary. That lowers the break-even to about 89 orders a day, but raises the cost of each order from ₦600 to ₦650 (₦500 for the rider and ₦150 for packaging). The cart still follows the first model. Before launch, I would move the small-cart line from ₦3,000 to about ₦3,250 and recheck free delivery at ₦9,000, which now earns ₦1,150 per order rather than ₦1,200.
- **Two disconnected address stores.** Adding a new address and picking an existing one appear connected in the demo, though they currently read from different data sources. It is a straightforward fix that has not been wired up yet.
- **One fee with two names.** The receipt labels the small-cart fee as a "Handling fee," while the cart and checkout call it a "Small cart fee."
- **Placeholder social proof.** Product ratings and review counts are currently generated placeholders and would need to be replaced with genuine customer reviews before launch.

## What I'd test next

- Does putting the sign-up sheet at checkout cool down impulse buying?
- Does a speed-first home banner outperform a discount-first banner?
- Does the ₦9,000 free-delivery threshold change how often people order?
- Do product previews on category cards drive more taps than plain text labels?
- Do two separate reorder screens perform better than one combined screen?

## How it's built

Built with React Native and Expo from a single codebase for mobile and web. All fee rules live in one place in the code with the business rationale written beside each number, and one shared rule routes every entry point to the right cart state. Both the cart and wishlist save locally on the device so guests never lose their baskets. Phone verification sits behind a single swappable service layer, making it easy to replace the mock with a live provider without touching any screens. One dependency in the phone country picker currently breaks web builds, requiring a workaround for web.

I logged every product decision as I went, 48 in all, each with the options I considered, the reason for my choice, and the trade-off.

## Where I'd take NawNaw next

Today, NawNaw represents the customer's half of the story, designed and built end to end. The natural next chapter is the half shoppers never see: the warehouse engine that makes a 15-minute promise physically possible, including the pick-and-pack and dispatch tools that turn a placed order into a rider arriving at the gate. That operational layer is where the real competitive advantage lives, and it is the piece I am most excited to design next. It is the exact same puzzle as the consumer app, focused on the fewest steps, fewest mistakes, and every second handed back, just built for the team on the inside.

Beyond operations, the consumer app would grow richer through everyday use: smarter recommendations as it learns a shopper's staples, a membership tier for frequent buyers so delivery simply feels free, and deeper personalisation rooted in the same belief that inspired the sensitive-items toggle: the store should adapt to the shopper.

## What building it taught me

The lesson I keep coming back to is how early the most important decision was made, and how deeply it shaped everything else. Deciding who to serve was not a branding exercise; it came straight out of the unit economics, driven by a hard reality about local operating costs and income. From that single decision, everything else followed naturally: sell speed and convenience instead of low prices, design for unplanned needs, build a cart that gently nudges instead of nickel-and-diming, and name the product after the one promise that matters.

NawNaw remains a deeply researched concept because dark stores are capital intensive, which is why this case study focuses on the thinking rather than a chart of launch metrics. Still, the one thing I want anyone reading this to take away is a claim I will stand behind even without live numbers:

> Every number on the screen now traces back to the model, and every decision to a real person who is simply out of time, and to what it honestly takes to give some of it back.

Next project

[ShappayRedesigning how people pay on Shappay.](/work/shappay)
