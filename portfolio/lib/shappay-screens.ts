import type { Shot } from "@/components/site/before-after";
import type { ScreenPairFigure } from "@/components/case/screen-pair";

/**
 * Shappay's before and after pairs, shared by the short and detailed case studies so the
 * crops match. The callouts are the detailed page's wording (Haye's rewrite, 2026-11-21); the
 * short page sets its own in lib/case-studies.ts. Marker positions are percentages of the cropped screen: recheck them if a crop changes.
 */

const shot = (name: string, alt: string): Shot => ({ src: `/assets/shappay/redesign/${name}.png`, alt });

export const shappayScreens = {
  home: {
    label: "Shappay Home",
    before: shot("before-01-home", "Home before the redesign: Fund, Send, Split and Request"),
    after: shot("after-01-home", "Home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money"),
    // Cropped just below the action row (Haye, 2026-11-15): the "before" has a request card under it that the "after" doesn't.
    crop: { aspect: "1170 / 925", position: "top" },
    callouts: [
      { on: "before", x: 45, y: 61, text: "“Send” was too vague and made people think of bank accounts." },
      { on: "after", x: 25, y: 61, text: "“Scan to pay” comes first because QR payments are the core of the product." },
      { on: "after", x: 66, y: 61, text: "“Send to ShapID” and “Send to bank” spell out exactly where the money goes." },
      { on: "after", x: 87, y: 61, text: "“Add money” matches the screen it opens." },
    ],
  },
  payHub: {
    label: "The payments tab",
    before: shot("before-02-pay-hub", "The Pay tab before the redesign"),
    after: shot("after-02-pay-hub", "The Payments tab, with the same names as Home and Request or split"),
    crop: { aspect: "1170 / 2000", position: "top" },
    callouts: [
      { on: "before", x: 22, y: 5, text: "“Pay” didn't signal to new users that requests, splits, and withdrawals were inside." },
      { on: "after", x: 41, y: 5, text: "Monzo and Wise use “Payments” for the same group of actions." },
      { on: "after", x: 90, y: 19, text: "The tiles inside now match the exact labels on Home." },
    ],
  },
  sendEmpty: {
    label: "The Send screen, before anything is typed",
    before: shot("before-03-send-empty", "Before: a blank Send screen"),
    after: shot("after-03-send-empty", "After: recent people listed before anything is typed"),
    crop: { aspect: "1170 / 1500", position: "top" },
    callouts: [
      { on: "before", x: 90, y: 17, text: "Previously, nothing appeared until a full ID was entered." },
      { on: "after", x: 26, y: 30, text: "Recent contacts now show up right away." },
    ],
  },
  sendUnknown: {
    label: "The Send screen, for an ID that doesn't exist",
    before: shot("before-05-send-unknown", "Before: no answer for an ID that doesn't exist"),
    after: shot("after-05-send-unknown", "After: No one on Shappay with that ID. Check the spelling, or send to a bank account"),
    crop: { aspect: "1170 / 1500", position: "top" },
    callouts: [
      { on: "before", x: 90, y: 17, text: "Previously, typing an invalid ID gave no feedback at all." },
      { on: "after", x: 95, y: 28, text: "Now it tells the user no match was found and offers a direct path to bank transfer." },
    ],
  },
  cantRead: {
    label: "A code the app can't read",
    before: shot("before-07-cant-read", "Before: two equal options, Send to bank and Send money"),
    after: shot("after-07-cant-read", "After: Send to bank as the main button, Send to ShapID second"),
    crop: { aspect: "1170 / 1400", position: "bottom" },
    callouts: [
      { on: "before", x: 86, y: 55, text: "Previously, both buttons had equal visual weight. Four testers tapped “Send money” (which pays a ShapID) even when the sign showed a bank account number." },
      { on: "after", x: 64, y: 40, text: "The heading stays neutral, since the code may be valid and just belong to another provider." },
      { on: "after", x: 86, y: 62, text: "“Send to bank” is now the primary button, with “Send to ShapID” placed second." },
    ],
  },
  pending: {
    label: "A pending payment",
    before: shot("before-08-pending", "Before: Pending, with the line shows as sent in your balance"),
    after: shot("after-08-pending", "After: On its way, Adaeze Bakery hasn't received this yet"),
    crop: { aspect: "1170 / 1600", position: "top" },
    callouts: [
      { on: "before", x: 70, y: 27, text: "In the first test, 3/8 testers thought the shop had already been paid." },
      { on: "before", x: 72, y: 61, text: "The phrase “shows as sent” caused confusion because people focused on the word “sent.”" },
      { on: "after", x: 73, y: 27, text: "“Pending” was rewritten as “On its way.”" },
      { on: "after", x: 81, y: 61, text: "The copy now names the shop and explains that the money has left your balance while still in transit." },
    ],
  },
} satisfies Record<string, ScreenPairFigure>;
