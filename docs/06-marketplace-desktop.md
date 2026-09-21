# 06 Market — Desktop (1280)

**Style:** Facebook Marketplace layout, white canvas (`data-theme="mkt"`). Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Market**. Message dock collapsed.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail (sticky): marketplace navigation + filters
- H “Marketplace” (22 / 800).
- Links: **Browse all** (active), Saved, Inbox, Your listings.
- `Create listing` (primary, block, plus icon). Divider.
- **Filters:**
  - Location — Upper ✓, Newton, Off-campus.
  - Price — range slider ($0 to $50).
  - Category — Textbooks ✓, Furniture ✓, Bikes.
  - **Move-out mode** row (moon icon) with switch.

### Center
1. **Header row:** H2 “Today’s picks · near Upper” · chips Under $50 (on), Textbooks, Free.
2. **Tile grid (4 columns):** heart-save on each. Data Science textbook $35 (Walsh), Mini-fridge $40 (Lower), Commuter bike $90 (Newton), Game tickets ×2 $25 (Lower), Moving boxes Free (Mods), Acoustic guitar $60 (Upper), Econ 1131 notes $20 (O’Neill), Desk lamp $15 (Walsh).
3. **Selected-listing card:** 180px photo; H1 “$40 · Mini-fridge”; seller row (Sarah K. ’26 + verified, “12 sales · 4.9”); safe-meetup callout “Meet at O’Neill Library lobby. No phone number shared.”; buttons `Message seller` (primary) and `Save` (ghost, heart).

## Behavior
- Filters apply live; chips and checkboxes toggle in place.
- Selecting a tile opens the listing in place of the selected-listing card (gallery, seller card, map, report/block).
- Sold flow prompts for a rating.
- Verified-only DMs; report and block in every thread.
- Tablet 768: 3-column grid; filter rail becomes a drawer.
