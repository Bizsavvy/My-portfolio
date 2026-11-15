import type { Shot } from "@/components/site/before-after";
import type { ScreenPairFigure } from "@/components/case/screen-pair";

/**
 * Shappay's before and after pairs, shared by the short and detailed case studies so the
 * crops and callouts match. Callout text must stay within the approved case study doc's
 * facts. Marker positions are percentages of the cropped screen: recheck them if a crop changes.
 */

const shot = (name: string, alt: string): Shot => ({ src: `/assets/shappay/redesign/${name}.png`, alt });

export const shappayScreens = {
  home: {
    label: "Shappay Home",
    before: shot("before-01-home", "Home before the redesign: Fund, Send, Split and Request"),
    after: shot("after-01-home", "Home after the redesign: Scan to pay, Send to ShapID, Send to bank and Add money"),
    crop: { aspect: "1170 / 1100", position: "top" },
    callouts: [
      { on: "before", x: 45, y: 51, text: "“Send” read as “send to a bank account”." },
      { on: "after", x: 25, y: 51, text: "Scan to pay comes first, because the product is built on it." },
      { on: "after", x: 66, y: 51, text: "Send to ShapID and Send to bank say where the money goes." },
      { on: "after", x: 87, y: 51, text: "“Add money” matches the screen it opens." },
    ],
  },
  payHub: {
    label: "The payments tab",
    before: shot("before-02-pay-hub", "The Pay tab before the redesign"),
    after: shot("after-02-pay-hub", "The Payments tab, with the same names as Home and Request or split"),
    crop: { aspect: "1170 / 2000", position: "top" },
    callouts: [
      { on: "before", x: 22, y: 5, text: "“Pay” didn't tell a new user that requests, splits and withdrawals live here." },
      { on: "after", x: 41, y: 5, text: "Monzo and Wise call the same set Payments." },
      { on: "after", x: 90, y: 19, text: "The tiles use the same names as Home." },
    ],
  },
  sendEmpty: {
    label: "The Send screen, before anything is typed",
    before: shot("before-03-send-empty", "Before: a blank Send screen"),
    after: shot("after-03-send-empty", "After: recent people listed before anything is typed"),
    crop: { aspect: "1170 / 1500", position: "top" },
    callouts: [
      { on: "before", x: 90, y: 17, text: "Nothing showed until a full ID was typed." },
      { on: "after", x: 26, y: 30, text: "Recent people show before anything is typed." },
    ],
  },
  sendUnknown: {
    label: "The Send screen, for an ID that doesn't exist",
    before: shot("before-05-send-unknown", "Before: no answer for an ID that doesn't exist"),
    after: shot("after-05-send-unknown", "After: No one on Shappay with that ID. Check the spelling, or send to a bank account"),
    crop: { aspect: "1170 / 1500", position: "top" },
    callouts: [
      { on: "before", x: 90, y: 17, text: "An ID that doesn't exist got no answer." },
      { on: "after", x: 95, y: 28, text: "Now it says so, and points to a bank account." },
    ],
  },
  cantRead: {
    label: "A code the app can't read",
    before: shot("before-07-cant-read", "Before: two equal options, Send to bank and Send money"),
    after: shot("after-07-cant-read", "After: Send to bank as the main button, Send to ShapID second"),
    crop: { aspect: "1170 / 1400", position: "bottom" },
    callouts: [
      { on: "before", x: 86, y: 55, text: "Two equal options. Four testers tapped Send money, which pays a ShapID, when the sign showed a bank account number." },
      { on: "after", x: 64, y: 40, text: "The title stays: the code may be fine and simply belong to another provider." },
      { on: "after", x: 86, y: 62, text: "Send to bank is the main button, and Send to ShapID comes second." },
    ],
  },
  pending: {
    label: "A pending payment",
    before: shot("before-08-pending", "Before: Pending, with the line shows as sent in your balance"),
    after: shot("after-08-pending", "After: On its way, Adaeze Bakery hasn't received this yet"),
    crop: { aspect: "1170 / 1600", position: "top" },
    callouts: [
      { on: "before", x: 70, y: 27, text: "3/8 testers said the shop had been paid." },
      { on: "before", x: 72, y: 61, text: "“Shows as sent” gave people the word they kept: “sent”." },
      { on: "after", x: 73, y: 27, text: "“Pending” became “On its way”." },
      { on: "after", x: 81, y: 61, text: "The sentence names the shop and says the money has left your balance." },
    ],
  },
} satisfies Record<string, ScreenPairFigure>;
