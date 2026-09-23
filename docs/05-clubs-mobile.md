# 05 Clubs — Mobile (390 × 800)

**Goal:** a freshman finds a club and joins in one tap; any student — not only officers — can start a club or group; officers manage events and announcements.
**Style:** the directory uses the standard card pattern; the club page is a hangout-style layout (cover with the club name, About under the member count, posts-first). See [style-guide.md](style-guide.md). Active tab: **Clubs**.

## Screen 1 — Directory
- **Header:** “Clubs” title · search icon button.
- **Tabs** (underline card): For you (on) · Browse · My clubs · 3.
- **`+ Create a club or group`** (ghost, block) — the general entry point non-officers use too; opens Screen 4.
- **Section:** H2 “Clubs for you”, caption “Running + music”.
- **Club cards** (banner 96px with icon, then details):
  - **BC Running Club** — `g3`, verified check; faces + “214 members · 2 friends”; “Saturdays 9am at the Reservoir”; `Join` (primary, small, block, plus icon). Tap → toast “Joined. First meeting added to Home”.
  - **Photography Club** — `g4`, “98 members · Thursdays”, `+ Join` (secondary).
  - **Data Science Society** — `g2`, “310 members · 12 friends”, `+ Join` (secondary).

## Screen 2 — Club page (`id="club-page"`, BC Running Club)
A hangout-style page, not a company profile: the club’s name sits on the cover, who’s in it comes next, About is tucked under the member count, and the main content is the club’s posts. No promo stickers, match scores or “free to join” badges. The `.club-page` class on the phone scopes the extra styling. The post, cover, About, ticket-card and lock-card components are defined in [style-guide.md](style-guide.md#post-club-post--the-one-post-component); the same `.club-post` is used for posts on Home.

- **Cover (`.club-cover.g3.pattern`, 150px):** green gradient with a faint dot pattern, a large translucent run icon, and a bottom scrim. A 56px club avatar “RC” (white ring) sits beside the name **BC Running Club** (H1, white) with a gold verified check and a small line “Sports · Chestnut Hill”.
- **Members line:** four overlapping faces + “**214 members** · 2 friends”.
- **About (`<details class="about-teaser">`, directly under the members line):** bio clamped to two lines, then a **View more** button (small ghost). Opening it shows the rest in place and the button becomes **View less**:
  - `.kv` grid: Category Sports · Privacy Public club · Location Chestnut Hill · Meets Sat 9am · Reservoir · Contact @bcrun · Dues Free (icon + label).
  - **Officers · 3:** rows with avatar, name, role (Maya R. President, Dev P. Treasurer, Sam O. Social chair) and a message icon button.
  - `Club files` link.
  There is **no About tab**.
- **Action row (`.club-actions`, sticky at the top of the scroll area):** `Join` (primary, flexible) · `Message` (secondary, flexible) · bell icon button (“Get club alerts”), all 44px. It stays pinned while the feed scrolls. Join → toast “Joined BC Running Club. First run added to your calendar”.
- **Tabs (underline, `data-tabs`):** **Posts** (on, default) · **Events**. Panels switch with `data-show`/`data-for="clubtabs"`.

### Posts tab (default)
1. **Upcoming runs:** H2 + `View all →` (opens Events). Horizontal snap-scrolling `.strip.event-strip` of **ticket-style cards** (270px, radius 20): a maroon date block (SAT 18 / APR 20) then a dashed divider, title, meta, “N going” and `RSVP` (secondary, small). Weekly meetup (9am · Reservoir · 42 going); Marathon Monday cheer (Heartbreak Hill · 63 going).
2. **Fresh from the club:** two officer posts (`.card.club-post`): avatar column on the left; right column has name + verified check, time, optional gold **Pinned** badge, text, a rounded 150px `.art` image (not full-bleed), and a row of **reaction pills** (heart with count, comment count) plus a share icon button. No Like/Comment/Repost bar.
   - BC Running Club, 1h, pinned — “Saturday long run is ON, rain or shine…”
   - Maya R. ’26, 1d — “Marathon Monday cheer squad signups are open…”
3. **Members-only card (`.lock-card`, gold-soft):** lock circle, “The group chat is members only”, “Join to chat, post and see who’s coming to each run.”, `Join the club`.

### Events tab
H2 “Upcoming runs”; card of date-tile rows (Sat 18 Weekly meetup, Sat 25 Long run 8 miles, Apr 20 Marathon Monday cheer) each with going count and `RSVP`; `← Back to posts`.

### Interactions (existing handlers only)
Tabs `data-tabs` + `data-show`/`data-for`; Join `data-toast="cj2"`; reaction pills `data-like` (heart count toggles, gold-soft “liked” state). The tab underline follows the visible panel even when switched from “View all →” (CSS `:has()`).

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
- Announcements are rate-limited to 1/week.
