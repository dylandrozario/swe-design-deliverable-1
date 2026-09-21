# 05 Clubs — Mobile (390 × 800)

**Goal:** a freshman finds a club and joins in one tap; officers manage events and announcements.
**Style:** LinkedIn company-page pattern (banner, logo, follow/join, tabs). See [style-guide.md](style-guide.md). Active tab: **Clubs**.

## Screen 1 — Directory
- **Header:** “Clubs” title · search icon button.
- **Tabs** (underline card): For you (on) · Browse · My clubs · 3.
- **Section:** H2 “Clubs for you”, caption “Running + music”.
- **Club cards** (banner 96px with icon, then details):
  - **BC Running Club** — `g3`, verified check, green badge “98% match”; faces + “214 members · 2 friends”; “Saturdays 9am at the Reservoir”; `Join` (primary, small, block, plus icon). Tap → toast “Joined. First meeting added to Home”.
  - **Photography Club** — `g4`, “98 members · Thursdays”, `+ Join` (secondary).
  - **Data Science Society** — `g2`, “310 members · 12 friends”, `+ Join` (secondary).

## Screen 2 — Club page (BC Running Club)
- **Hero:** 130px `g3` banner; 96px rounded-square logo “RC” overlapping the bottom-left edge.
- **Identity:** H1 “BC Running Club” + verified; “Sports · Chestnut Hill · 214 members”.
- **Actions:** `Join` (primary) and `Message` (secondary), equal width. Join toast: “Joined BC Running Club”.
- **Tabs:** About (on) · Events · Posts · Members.
- **About card:** “All paces welcome. Weekly runs, race trips and Marathon Monday cheering. Free to join.”
- **Upcoming card:** rows with date tile + title + meta + `RSVP`: SAT 18 Weekly meetup (9am · Reservoir); APR 20 Marathon Monday cheer (Heartbreak Hill).
- **Announcements card:** “No meetup during finals week. See you in spring.” Lock line: “Discussion is members only after you join”.

## Screen 3 — Officer dashboard
- **Header:** back · “Officer dashboard”. Club identity row (RC avatar, “You’re an officer”).
- **RSVP card:** eyebrow “Saturday meetup”; H1 “42 going of 60 invited”; progress bar; `See RSVP list` (ghost).
- **Announce card:** text input “Write an update…”; `Send announcement`; shield line “1 announcement per week keeps the feed quiet”.
- **`Post event in 60s`** (gold, block, plus icon).
- **Start a club card:** inputs “BC Climbing Club” and “All levels, Newton gym”; `Submit for review` (secondary).

## Behavior
- After joining, the first meeting is added to Home and the calendar.
- Discussion and member chat unlock after join.
- Announcements are rate-limited to 1/week and go to a digest by default.
