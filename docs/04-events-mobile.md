# 04 Events — Mobile (390 × 800)

**Goal:** make people want to go, and RSVP in one tap.
**Style:** Posh-inspired flyers on the standard light canvas (no dark theme). See [style-guide.md](style-guide.md#event-flyer-flyer). Active tab: **Events**.

## Screen 1 — List (overview)
- **Header:** “Events” title · search icon button · calendar icon button (→ [Calendar](11-calendar-mobile.md), your personal calendar of RSVPs and club meetings — separate from the in-page List/Calendar/Map view switch below).
- **View switch** (segmented): List (on) · Calendar · Map.
- **Chips:** Tonight (on), This weekend, Free, Lower (pin), Music.
- **Hero flyer** (4:5, now a tappable link to the detail screen `#ev-detail`): `g1`, music icon. Top: date badge “OCT 17”, white “Free” pill. Bottom scrim: “Acoustic Night at The Rat” (22 / 800); clock + “Fri 7–10pm”, pin + “The Rat”; faces + “3 friends + 39 going”.
- **Event rows** (84px art, maroon uppercase date eyebrow, link to “View more”):
  - SAT · 8PM — BC vs. Wake Forest watch party — Mods · 120 going.
  - THU · 5PM — Fall photo shoot signups — O’Neill steps · 12 spots.
- **View more:** `View more events →` (secondary, block) → Screen 2.

## Screen 2 — All events (view more)
- **Header:** back · title “All events” · filter icon button (opens sheet).
- **Chips:** This week (on), Free, Music, Sports, Academic.
- **Body:** infinite list of event cards (`.evcard`): 16:8 flyer with date badge + price pill; title; “Host · time · place”; faces + “N going”; `I’m going` button. 3 cards per batch, spinner “Loading more…”, ends with “You’re all caught up.”
- **Filter sheet:** When (Tonight / This week / Weekend) · Type (Social, Music, Sports, Academic, Service) · Price (Free / Paid) · `Clear` + `Show 24 events`. Scrim tap closes.

## Screen 3 — Event detail (`id="ev-detail"`)
- **Hero:** square flyer art with floating white circle buttons: back (left); share and heart (right).
- **Title block:** H1 “Acoustic Night at The Rat”; host row “Hosted by **Music Club**” + verified.
- **Key facts** (label/value grid): When — Fri Oct 17 · 7–10pm; Where — The Rat, Lower; Price — Free · BC ID required.
- **Social proof:** faces + “3 friends are going”.
- **About:** “Live acoustic sets from BC’s best. Shuttle from Newton at 7:30.”
- **Comments:** Priya asks about BC ID; Music Club replies “Yes, bring your BC ID.” (report link on each).
- **Sticky CTA:** `I’m going` (ticket icon, block). Tap → toast “You’re in. Added to your calendar”; offer add-to-calendar.
- **States:** full → Waitlist; error → Retry.
- This screen is also where the notification-panel “Event reminder” row and any event link elsewhere in the prototype land.

## Screen 4 — Create event (`id="ev-create"`, under 60s)
- **Header:** close · “New event”. Progress 2/3.
- **Flyer upload:** 150px dashed box “Add a flyer”.
- **Fields:** Title (prefilled “Study break: pancakes at late night”); Type chips (Social on, Study, Sports, Meeting); When select (“Tonight 9pm (suggested)”); Where select (“O’Neill Library lobby”, “The Rat”); Capacity (optional, blank = no limit — supports the non-critical “capacity with waitlist” requirement).
- **Primary:** `Publish and invite my club`.
- Reached from the tab-bar **Create** sheet, the sidebar **Create** menu, or “Post an event” on the desktop Events page.
