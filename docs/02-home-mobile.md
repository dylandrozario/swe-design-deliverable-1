# 02 Home — Mobile (390 × 800)

**Goal:** answer “what’s on tonight?” in two seconds. ≤ 3 taps to RSVP, join or message.
**Style:** LinkedIn feed frame, with Posh-style flyers for events and Marketplace tiles for listings. See [style-guide.md](style-guide.md). Active tab: **Home**.

## Screen 1 — Home feed
**Header:** avatar (JD) · pill search field “Search Turma” · chat icon button · bell icon button (red unread dot).

**Body (scrolls):**
1. **Greeting:** “Good evening, Jordan” (H2); “Upper Campus · 3 things tonight” (caption).
2. **Filter chips:** Tonight (on), Weekend, Free, Near me (pin icon).
3. **Flyer carousel** (horizontal strip, 250px cards, 4:4.6):
   - Acoustic Night at The Rat — `g1`, date badge “TONIGHT 7PM”, white price pill “Free”, “Music Club · 42 going”.
   - Mod social · sophomores — `g2`, “TONIGHT 8PM”, “60 going · 5 friends”.
4. **Primary CTA:** `RSVP to Acoustic Night` (ticket icon, block). Tap → toast “You’re in! Added to your calendar”.
5. **Club post card:** Photography Club avatar, name + verified, “Officer post · 3h”; text “Fall shoot signups are open, only **12 spots** left. Thursday 5pm on the O’Neill steps.”; `View event` (secondary, small).
6. **Market row:** heading “Near you in Market” + “See all” link → Market. 2-column tiles: Data Sci textbook $35 (Walsh · 2m ago); Mini-fridge $40 (Lower · 1h ago).
7. **Seasonal banner:** maroon gradient card, label “Welcome Week”, “Involvement fair Saturday · Newton shuttle info · roommate mixers”. Swaps seasonally (Game Day, Move-out).

**Tab bar:** Home (active) · Events · Create · Market · Clubs.

## Screen 2 — Feed states
Header: avatar + “Home” title. Segmented control switches the state panel (for design review):
- **Loaded:** green banner “Picks ready: running + live music” and explanatory card.
- **Loading:** skeleton blocks (220px hero + two rows). Maximum 2s before content.
- **Empty:** centered card with spark avatar, “Nothing here yet”, “Add interests or browse Events to fill your feed.”, `Browse events` button.
- **Error:** red banner “Couldn’t load your feed. Check your connection.” + `Retry` (secondary, block).
