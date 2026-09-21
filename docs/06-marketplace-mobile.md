# 06 Market — Mobile (390 × 800)

**Goal:** scan photos, tap, message. Trust through verified BC sellers and campus safe-meetup spots.
**Style:** Facebook Marketplace pattern on a white canvas (`data-theme="mkt"`). See [style-guide.md](style-guide.md#listing-tile-tile--marketplace-pattern). Active tab: **Market**.

## Screen 1 — Browse
- **Header:** “Marketplace” title · heart (saved) icon button · search icon button.
- **Chips:** Walsh (pin), **Under $50 (on)**, Textbooks, Furniture, Free.
- **Move-out banner** (gold-soft): moon icon, “Move-out mode” / “Bulk listings + free curb alerts”, switch (off).
- **H2:** “Today’s picks”. **2-column tile grid**, each with a heart save button:
  - $35 Data Science textbook — Walsh · 2m ago.
  - $40 Mini-fridge — badge “Must go Fri” — Lower · 1h ago.
  - $90 Commuter bike + lock — Newton · 1d ago.
  - $25 (for 2) Game tickets — Lower · 3h ago.
  - Free Moving boxes — Mods · 5h ago.
  - $60 Acoustic guitar — Upper · 6h ago.

## Screen 2 — Listing detail
- **Photo:** square gallery with floating circle buttons: back (left), share + heart (right); “1 / 3” counter bottom-right.
- **Price/title:** H1 “$40”; title “Mini-fridge”; caption “Listed 1 hour ago in Lower Campus”; green badge “Available”.
- **Seller card:** avatar SK, “Sarah K. ’26” + verified, “12 sales · 4.9 ★”, `Profile` (secondary).
- **Description:** “Works great, cold in 20 minutes. Selling because I’m graduating. Must go by Friday.”
- **Safe-meetup callout:** shield icon, “Meet at **O’Neill Library lobby**, a well-lit campus spot. Your number stays private in chat.”
- **Map:** 110px preview with pin.
- **Footer links:** Report listing · Safety tips.
- **Sticky CTA:** `Message seller` (chat icon, block). Tap → toast “Sent. Sarah usually replies in about an hour”.

## Screen 3 — Create listing (photo first)
- **Header:** close · “New listing” · “Draft saved”.
- **Photo box:** 170px dashed, image icon, “Add photos first”.
- **Fields:** Title “Mini-fridge”; Price “$40”; Category select (Furniture, Textbooks); Meetup spot select (“O’Neill Library lobby (safe spot)”).
- **Callout:** “Campus meetup spots are required for every listing.”
- **Primary:** `Post listing`. Target: under 60 seconds.

## States and flows
- Saved / My listings view: saved tiles with unsave; own listings with inquiry counts and `Mark as sold`.
- Sold → prompt to rate the buyer.
- Empty saves: “No saves yet. Tap the heart on anything.” Error: “Couldn’t load listings” + Retry.
