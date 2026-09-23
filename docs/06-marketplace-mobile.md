# 06 Market — Mobile (390 × 800)

**Goal:** scan photos, tap, message. Trust through verified BC sellers and campus safe-meetup spots.
**Style:** Facebook Marketplace pattern on a white canvas (`data-theme="mkt"`). See [style-guide.md](style-guide.md#listing-tile-tile--marketplace-pattern). Active tab: **Market**.

## Screen 1 — Browse
- **Header:** “Marketplace” title · heart icon button (→ Screen 2, Saved) · filter icon button (opens the Filters sheet) · search icon button.
- **Quick chips:** a `Filters` chip (opens the full sheet below) plus **Under $50 (on)** and Free inline.
- **Filters sheet:** Location (Upper ✓, Newton, Off-campus), Price range ($0–$50), Category (Textbooks ✓, Furniture ✓, Bikes), Move-out mode switch, `Clear` + `Show results` — the same fields as the desktop filter rail, now reachable on mobile instead of a single condensed chip row.
- **Move-out banner** (gold-soft): moon icon, “Move-out mode” / “Bulk listings + free curb alerts”, switch (off).
- **H2:** “Today’s picks”. **2-column tile grid**, each tile a tappable link to the item detail page (Screen 3), with its own heart save button on top:
  - $35 Data Science textbook — Walsh · 2m ago.
  - $40 Mini-fridge — badge “Must go Fri” — Lower · 1h ago.
  - $90 Commuter bike + lock — Newton · 1d ago.
  - $25 (for 2) Game tickets — Lower · 3h ago.
  - Free Moving boxes — Mods · 5h ago.
  - $60 Acoustic guitar — Upper · 6h ago.

## Screen 2 — Saved (`id="mkt-saved"`)
- **Header:** back → Browse · “Saved” title.
- Caption “2 saved listings”; the same tile grid filtered to only listings with the heart toggled on (Mini-fridge, Game tickets in this mock).
- **Empty-state note:** “No saves yet? Tap the heart on any listing to keep it here.”

## Screen 3 — Listing detail (`id="mkt-detail"`)
- **Photo:** square gallery with floating circle buttons: back (left), share + heart (right); “1 / 3” counter bottom-right.
- **Price/title:** H1 “$40”; title “Mini-fridge”; caption “Listed 1 hour ago in Lower Campus”; green badge “Available”.
- **Seller card:** avatar SK, “Sarah K. ’26” + verified, “12 sales · 4.9 ★”, `Profile` (secondary).
- **Description:** “Works great, cold in 20 minutes. Selling because I’m graduating. Must go by Friday.”
- **Safe-meetup callout:** shield icon, “Meet at **O’Neill Library lobby**, a well-lit campus spot. Your number stays private in chat.”
- **Map:** 110px preview with pin.
- **Footer links:** Report listing · Safety tips.
- **Sticky CTA** (`#mktcta`, with a Connected / Not connected switch for design review). Messaging is connections-only, so the primary action depends on whether you’re connected to the seller:
  - **Connected:** `Message seller` (chat icon, block). Tap → toast “Sent. Sarah usually replies in about an hour”.
  - **Not connected:** `Connect to message` (users icon, block) with a lock line “Messaging opens once Sarah accepts. Your question about the fridge goes with the request.” Tap → toast “Request sent. You can message Sarah once she accepts”. The seller gets a connection-request notification (in-app + email); accepting opens the thread.

## Screen 4 — Create listing (`id="mkt-create"`, photo first)
- **Header:** close · “New listing” · “Draft saved”.
- **Photo box:** 170px dashed, image icon, “Add photos first”.
- **Fields:** Title “Mini-fridge”; Price “$40”; Category select (Furniture, Textbooks); Description textarea; Meetup spot select (“O’Neill Library lobby (safe spot)”).
- **Callout:** “Campus meetup spots are required for every listing.”
- **Primary:** `Post listing`. Target: under 60 seconds. Reached from the tab-bar Create sheet or the sidebar Create menu.

## States and flows
- Own listings view: inquiry counts and `Mark as sold`.
- Sold → prompt to rate the buyer.
- Error: “Couldn’t load listings” + Retry.
