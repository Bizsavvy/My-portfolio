<!-- Haye's rewrite, live on /work/shappay since 2026-11-21. -->

Case study · Shappay

# Redesigning how people pay on Shappay

A usability test showed that people struggled to find Shappay's main payment options, so I redesigned the payment screens and ran the same test again. Shappay is building a universal QR payment system for Nigeria: one code that customers of any bank can pay, and one scanner that reads any code built to the national standard. I lead product design and build my designs directly in code for our frontend engineer to review.

**Role:** Design engineer, leading product design

**Timeline:** 2025 to present (usability tests in November 2026)

**Team:** Me, a product manager who approved the redesign scope, a frontend engineer who reviewed and merged my code, and a backend engineer who built the ShapID lookup

## Problem

Shappay's first design made its two core payment options hard to find. During testing, people who had a QR code or a ShapID right in front of them still defaulted to bank transfers. As a result, only 4/8 to 6/8 testers completed each task.

## Impact

Measured

After the redesign, successful payments by QR scan rose from 5/8 to 8/8 testers, and completing a payment when a code couldn't be read rose from 4/8 to 8/8. These results were measured in usability tests on a web build using a simulated scanner.

## TL;DR

* In initial usability tests, people with a QR code or a ShapID right in front of them still defaulted to bank transfers.
* I renamed and reordered the payment options, made Send to bank the main fallback for unreadable codes, and rewrote pending payment messages to clearly show the money is still on its way. I then ran the exact same test on the redesign with 8 new testers.
* Paying by scan rose from 5/8 to 8/8, and paying when a code couldn't be read rose from 4/8 to 8/8. Paying a ShapID reached 5/8, which is still below our target of 7/8.

## The redesign

### Four payment options named in plain language, with Scan first.

Before

After

1. "Send" was too vague, so people assumed it meant sending to a bank account.
2. "Scan to pay" now comes first because QR payments are the core of the product.
3. "Send to ShapID" and "Send to bank" clearly tell users where their money is going.
4. "Add money" matches the heading of the screen it opens.

### Helping users pay even when a code can't be scanned. Send to bank leads because shop signs show an account number.

Before

After

1. Previously, both buttons had equal emphasis. Four testers tapped "Send money" (which pays a ShapID) even when the shop sign showed a bank account number.
2. The heading stays neutral because the QR code may work fine and simply belong to another provider.
3. "Send to bank" is now the primary button, with "Send to ShapID" placed second.

### "On its way" makes it clear the payment hasn't arrived yet.

Before

After

1. In the first test, 3/8 testers thought the shop had already been paid.
2. The phrase "shows as sent" caused confusion because people focused on the word "sent."
3. I changed the status label from "Pending" to "On its way."
4. The message now names the shop directly and clarifies that the money has left your balance, even though the shop hasn't received it yet.

*useshappay.com* [Visit site](https://useshappay.com/)

## Results

| Task | First design | Redesign |
| --- | --- | --- |
| Scan a shop's QR code and pay | 5/8 | 8/8 |
| Pay when the code can't be read | 4/8 | 8/8 |
| Tell whether a pending payment has arrived | 5/8 | 7/8 |
| Add money, then pay | 6/8 | 7/8 |
| Send to a friend's ShapID | 4/8 | 5/8 |
| Ask a friend for money | Not tested | 4/8 |

Both rounds used the same tasks, 8 different testers, and the same passing rule: paying the right person through the right method. Paying a ShapID still falls short of our 7/8 target. Moving Request off the home screen also meant only 4/8 testers could find it, so the next build brings it back to Home (not yet tested). Shappay is still in development. After launch, we will measure success by the share of payments made through QR scan or ShapID instead of a typed account number, with a target of 90%.

[Read the detailed case study](/work/shappay/detailed)

Next project

[Oshap: Any restaurant's colour, readable on every guest's phone.](/work/oshap)
