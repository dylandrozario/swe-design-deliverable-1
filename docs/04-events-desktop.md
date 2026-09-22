# 04 Events — Desktop (1280)

**Style:** Posh-inspired flyers, light canvas. Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Events**. Message dock collapsed.
The page has **three** views inside the same frame (`#evdesk`, `data-state`): Overview → **View more events** → All events (infinite list); Overview → click any flyer → **Detail** (the web version of the mobile event detail page). Each non-overview view has a “Back to overview” link.

## View A — Overview (`.dbody.two`, `260px | 1fr`)

### Left rail (sticky)
- **Calendar card:** “October” label; 7-column mini calendar (M–S). Dots mark days with events (2, 4, 15, 18); today (17) is a filled maroon circle.
- **Your events card:** row with date tile FRI 17, “Acoustic Night”, “7pm · Going”; `Open my calendar` (block, small, links to the full [Calendar](11-calendar-desktop.md) page) and `Post an event` (block, small, secondary, plus icon → the create-event flow).

### Center
1. **Header row:** H2 “Happening this week” · chips This week (on), Weekend, Free.
2. **Flyer grid** (3 columns, 4:5 flyers, 18px titles, each clickable → Detail):
   - Acoustic Night at The Rat — OCT 17, Free, “Music Club · 42 going”.
   - Watch party vs. Wake Forest — OCT 18, gold “$5” pill, “Mods · 120 going”.
   - Fall photo shoot — OCT 16, Free, “Photography Club · 12 spots”.
3. **`View more events →`** (secondary, centered) → View B.
4. **Selected-event card:** 120px art; H2 title; “Fri Oct 17 · 7–10pm · The Rat, Lower · Hosted by Music Club”; faces + “3 friends going”; buttons `I’m going` (primary) and `Add to calendar` (ghost). Also clickable → Detail.

## View B — All events (infinite scroll + filters)

### Left rail: filters (sticky)
Card titled “Filters” with `Clear all` link. Checkbox groups (`.chk`):
- **When:** This week ✓, This weekend, Next week.
- **Type:** Social ✓, Music ✓, Sports, Academic, Service.
- **Price:** Free ✓, Paid.
- **Where:** Upper, Lower ✓, Newton, Mods.
- Divider, then switch row “Alert me to new matches”.

### Center (max 640px, centered)
- Top row: `← Back to overview` link · “24 events match”.
- **Infinite list** of event cards (16:8 flyer with date + price, title, “Host · time · place”, faces + “N going”, `I’m going`). Batches of 3 load as the loader nears the viewport; “Loading more events…” between batches; ends “You’re all caught up.”
- Filter changes re-query the list and update the count.

## View C — Event detail (web version)
Two-column layout mirroring the mobile detail screen:
- **Left rail:** flyer art (220px), “Hosted by” card (club avatar + verified + name, `Share` button), a small comments preview card.
- **Center (max 720px):** H1 title; key-facts grid (When / Where / Price); social proof (“3 friends are going”); About paragraph; primary actions `I’m going` (toast confirms + “added to your calendar”) and `Add to calendar` (ghost).
- `← Back to overview` link returns to View A.

## Behavior
- Chips and checkboxes toggle in place.
- Full events show a Waitlist button instead of `I’m going`.
- Tablet 768: calendar becomes an agenda list, flyers 2-up, filters move to a drawer.
