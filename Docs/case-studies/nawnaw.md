<!-- Haye's rewrite, live on /work/nawnaw since 2026-11-23; review fixes applied the same day (new closing line, trimmed toward 900 words, success signal named). Image lines, figures and callouts come from the page. -->

Case study · NawNaw

# A cart that does the maths

NawNaw is a concept for sub-15-minute grocery delivery in Nigeria's largest cities, fulfilled from small closed warehouses called dark stores. Fast delivery adds real cost to every order, so the cart has to guide each basket toward a size the business can survive on, without feeling like a toll booth. I designed and built the consumer app, and every fee rule in its cart comes from the business's break-even model.

**Role:** Product designer and frontend engineer  
**Team:** Solo  
**Timeline:** June 2026  
**Tools:** Figma, React Native, and Expo  
**Stage:** Concept. Raising the capital to open even one dark store was not feasible, so NawNaw never launched. Payments, delivery times, phone verification, and the map are mocked to behave like a live system.

## Problem

Every order carries about ₦600 in delivery and packaging costs. At a 20% margin, any basket under ₦3,000 cannot even cover its own delivery, and each dark store needs roughly 150 orders a day just to break even. Nigeria is an expensive market to run fast delivery in while having lower average incomes, so NawNaw targets households earning ₦6M or more a year and needs their baskets to average ₦9,000.

These shoppers often buy on impulse and expect a smooth, premium experience. A fee they do not understand, or a total that suddenly jumps at checkout, is the fastest way to lose them.

## Impact

What the design guarantees: every fee in the cart is grounded in the break-even model, and all fee rules live in a single place in the code so the interface and the business numbers can never drift apart.

What is still unknown: NawNaw never launched, so nothing has been measured with real shoppers. The signal I would watch is the model's North Star, contribution per active customer per month, alongside the share of baskets that clear ₦3,000 and reach ₦9,000.

## TL;DR

- Fast grocery delivery loses money on small orders: under ₦3,000, a basket cannot pay for its own delivery.
- So the fee rules shape the cart: three states, a clear next step in each, and no surprise fees at checkout.
- My first free-delivery point sat below the business's survival floor. I raised it to ₦9,000, the target basket.

![Home: Delivering in 12 mins, Store 1.2km away, above the search and the Bestsellers grid](/assets/nawnaw/screens/nawnaw-home.png)

![The cart at ₦6,300: ₦2,700 away from free delivery, with a progress bar and a ₦600 delivery fee](/assets/nawnaw/screens/nawnaw-cart-fee.png)

![Checkout at ₦9,100: delivering to Home in 12 to 15 minutes, with the delivery fee shown as FREE](/assets/nawnaw/screens/nawnaw-checkout.png)

## Three decisions, and one number I got wrong

### 1. One cart, three states that follow the basket

Fees work as a ladder: a small-cart fee under ₦3,000, a ₦600 delivery fee in the middle, and free delivery from ₦9,000. So the cart has three states that update live with the subtotal: as a basket crosses ₦3,000 or ₦9,000, the cart switches to the matching state. I rejected a single static cart that showed fees only at checkout, because fees that late do not encourage bigger baskets and feel like an ambush.

![The cart at ₦1,800: add ₦1,200 more to remove the ₦700 small cart fee; total ₦3,100](/assets/nawnaw/screens/nawnaw-cart-small.png)

![The cart at ₦6,300: ₦2,700 away from free delivery; total ₦6,900](/assets/nawnaw/screens/nawnaw-cart-fee.png)

![The cart at ₦9,100: free delivery unlocked; the delivery fee reads FREE](/assets/nawnaw/screens/nawnaw-cart-free.png)

*One cart across its three states on sample data: small-cart fee, standard delivery fee, and free delivery.*

### 2. A fee you can remove, and a goal you can see

Under ₦3,000, the cart shows the exact amount that removes the ₦700 fee. Between ₦3,000 and ₦9,000, a progress bar shows how much more unlocks free delivery. Each state suggests products sized to the gap: larger everyday items when the basket is small, cheap add-ons when it is close. The trade-off is real: a fee on a premium service can feel petty, and thresholds can push shoppers to pad their baskets.

![The small-cart state: add ₦1,200 more to remove the ₦700 fee, an amber notice, and suggested items](/assets/nawnaw/screens/nawnaw-cart-small.png)

1. "Add ₦1,200 more": the exact amount that removes the fee.
2. Amber rather than red: the fee is fixable, not an error.
3. Suggested products matched to the remaining gap.

*The small-cart state on sample data.*

### 3. No surprise fees

The running total is always visible, and the full breakdown is one tap away. Once delivery is free, that row stays and reads FREE, because a saving the shopper cannot see does not reward them for the bigger basket.

![The cart summary at ₦9,100: subtotal ₦9,100, delivery fee FREE, total ₦9,100](/assets/nawnaw/screens/nawnaw-cart-free.png)

1. The full breakdown: subtotal, any small-cart fee, delivery fee, and final total.
2. Once delivery is free, the row stays visible and reads FREE.

*The free-delivery state on sample data.*

### The number I got wrong: the thresholds

My first fee thresholds came straight from early Figma mock-ups: free delivery at ₦5,000 and a small-cart fee under ₦2,000. When I checked those numbers against the actual business model, free delivery sat below ₦5,700, the lowest basket size the business could survive on. The cart was actively encouraging shoppers to place unprofitable orders. I recalculated every number from the ground up.

[Figure drawn in code: nawnaw-fee-ladder]

*The old free-delivery point sat below the floor. Numbers from the app's fee rules and the first break-even model.*

The trade-off is that a higher threshold widens the gap a shopper has to close, which could make them order less often. That would be the first thing to test.

## What's next

New shoppers now get free delivery on their first 5 orders. It costs up to ₦3,000 per new shopper, which the model does not include yet. I later revised the break-even model to pay riders per trip instead of a salary. That lowers the break-even to about 89 orders a day, but raises the cost of each order from ₦600 to ₦650 (₦500 for the rider and ₦150 for packaging). So before launch, I would move the small-cart line from ₦3,000 to about ₦3,250.

I would also test whether the ₦9,000 threshold changes how often people order, and compare a speed-first home banner with a discount-first one.

## What building it taught me

The lesson I keep coming back to is how early the most important decision was made, and how far down into the product it reached. Deciding who to serve was not a branding exercise; it came straight out of the unit economics, driven by a hard reality about operating costs and local income. From that single decision, everything else fell into place: selling speed and convenience instead of low prices, designing for unplanned needs, building a cart that gently nudges instead of nickel-and-diming, and naming the whole product after the one promise that matters.

> Every number on the screen now traces back to the model, and every decision to a real person who is simply out of time, and to what it honestly takes to give some of it back.

[Read the detailed case study](/work/nawnaw/detailed)

Next project

[ShappayRedesigning how people pay on Shappay.](/work/shappay)
