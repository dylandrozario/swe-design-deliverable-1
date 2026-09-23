# 05 Clubs — Mobile (390 × 800)

**Goal:** a freshman finds a club and joins in one tap; any student — not only officers — can start a club or group; officers manage events and announcements.
**Style:** LinkedIn company-page pattern (banner, logo, follow/join, tabs). See [style-guide.md](style-guide.md). Active tab: **Clubs**.

## Screen 1 — Directory
- **Header:** “Clubs” title · search icon button.
- **Tabs** (underline card): For you (on) · Browse · My clubs · 3.
- **`+ Create a club or group`** (ghost, block) — the general entry point non-officers use too; opens Screen 4.
- **Section:** H2 “Clubs for you”, caption “Running + music”.
- **Club cards** (banner 96px with icon, then details):
  - **BC Running Club** — `g3`, verified check, green badge “98% match”; faces + “214 members · 2 friends”; “Saturdays 9am at the Reservoir”; `Join` (primary, small, block, plus icon). Tap → toast “Joined. First meeting added to Home”.
  - **Photography Club** — `g4`, “98 members · Thursdays”, `+ Join` (secondary).
  - **Data Science Society** — `g2`, “310 members · 12 friends”, `+ Join` (secondary).

## Screen 2 — Club page (`id="club-page"`, BC Running Club)
- **Hero:** 130px `g3` banner; 96px rounded-square logo “RC” overlapping the bottom-left edge.
- **Identity:** H1 “BC Running Club” + verified; “Sports · Public club · Chestnut Hill · 214 members”.
- **Actions:** `Join` (primary) and `Message` (secondary), equal width. Join toast: “Joined BC Running Club”.
- **Tabs:** About (on) · Events · Posts · Members.
- **About card:** “All paces welcome. Weekly runs, race trips and Marathon Monday cheering. Free to join.”
- **Upcoming card:** rows with date tile + title + meta + `RSVP`: SAT 18 Weekly meetup (9am · Reservoir); APR 20 Marathon Monday cheer (Heartbreak Hill).
- **Announcements card:** “No meetup during finals week. See you in spring.” Lock line: “Discussion is members only after you join”.
- This is where a club-related notification (e.g. “Running Club weekly digest”) lands.

## Screen 3 — Officer dashboard
- **Header:** back · “Officer dashboard”. Club identity row (RC avatar, “You’re an officer”).
- **RSVP card:** eyebrow “Saturday meetup”; H1 “42 going of 60 invited”; progress bar; `See RSVP list` (ghost).
- **Announce card:** text input “Write an update…”; `Send announcement`; shield line “1 announcement per week keeps the feed quiet”.
- **`Post event in 60s`** (gold, block, plus icon) → [Create event](04-events-mobile.md).
- **Start another club or group card:** now links to the same general create form (Screen 4) instead of a separate mini-form, so officers and regular students go through one consistent, reviewable flow.

## Screen 4 — Create a club or group (`id="club-create"`)
- **Header:** close · “Create a club or group”.
- **Type** chips: **Club** (on, public, listed in Browse) or **Group** (smaller, can stay invite-only).
- **Name** input, **Category** select, **Description** textarea.
- **Privacy** chips: Public (on) / Private (invite only) — independent of Type, so a “private club” or a listed “public group” are both possible.
- **Create a group chat for members** switch (on by default): resolves the open “does creating a group auto-create a chat?” question by making it an explicit, visible choice at creation time rather than an invisible default — officers can turn it off for a club that doesn’t want a group thread.
- **Verification note** (open decision, flagged in gold/red like the flows page’s “Risks” callout): new clubs go to a review queue before they’re listed publicly (“Pending review” badge). Officers of a recognized BC org can auto-approve; everyone else waits roughly 2 business days for a manual check. The exact process still needs to be finalised with Student Programs — called out here rather than silently decided.
- **Primary:** `Submit for review` → toast “Submitted. Pending review, usually within 2 days”.

## Behavior
- After joining, the first meeting is added to Home and the calendar.
- Discussion and member chat unlock after join.
- Announcements are rate-limited to 1/week and go to a digest by default.
