# 06 Market — Desktop (1280)

**Style:** Facebook Marketplace layout, white canvas (`data-theme="mkt"`). Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Market**. Message dock collapsed.
The page has four states inside one frame (`#mktdesk`, `data-state`): **Browse** (default), **Saved**, **Detail** (web version of the item detail page) and **Create** (web version of the new-listing form) — each reachable without leaving the page.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail (sticky): marketplace navigation + filters
- H “Marketplace” (22 / 800).
- Links: **Browse all** (active) and **Saved · 2** now actually switch the center column between states. Inbox links out to [Messages](07-messaging-desktop.md); Your listings stays a placeholder link.
- `Create listing` (primary, block, plus icon) → Create state. Divider.
- **Filters:**
  - Location — Upper ✓, Newton, Off-campus.
  - Price — range slider ($0 to $50).
  - Category — Textbooks ✓, Furniture ✓, Bikes.
  - **Move-out mode** row (moon icon) with switch.

## Browse
1. **Header row:** H2 “Today’s picks · near Upper” · chips Under $50 (on), Textbooks, Free.
2. **Tile grid (4 columns):** heart-save on each; every tile is clickable and opens Detail. Data Science textbook $35 (Walsh), Mini-fridge $40 (Lower), Commuter bike $90 (Newton), Game tickets ×2 $25 (Lower), Moving boxes Free (Mods), Acoustic guitar $60 (Upper), Econ 1131 notes $20 (O’Neill), Desk lamp $15 (Walsh).
3. **Selected-listing preview card:** 180px photo; H1 “$40 · Mini-fridge”; seller row; safe-meetup callout; `Message seller` / `Save` — also opens Detail.

## Saved
Back-to-browse link, then a 4-column grid filtered to only saved tiles (Mini-fridge, Game tickets in this mock) and a short unsave hint.

## Detail (web version of the item detail page)
Two-column layout: left rail has the photo and a compact seller card (`View profile` link); center column has price/title, availability badge, description, the safe-meetup callout, a map preview, `Message seller` (toast confirms) / `Save`, and Report/Safety links. Back-to-browse link at top.

## Create (web version of the new-listing page)
Left rail repeats the safe-spot requirement; center column (max 520px) has the photo dropzone, Title, Price + Category (side by side), Description, Meetup spot select and `Post listing` (toast “Listing posted”).

## Behavior
- Filters apply live; chips and checkboxes toggle in place.
- Selecting a tile or the selected-listing card opens Detail in place of the browse grid.
- Sold flow prompts for a rating.
- Verified-only DMs; report and block in every thread.
- Tablet 768: 3-column grid; filter rail becomes a drawer.
