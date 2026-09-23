# 02 Home — Mobile (390 × 800)

**Goal:** answer “what’s on tonight?” in two seconds. ≤ 3 taps to RSVP, join or message.
**Style:** feed frame using the shared post component (`.club-post`), with Posh-style flyers for events and Marketplace tiles for listings. See [style-guide.md](style-guide.md). Active tab: **Home**.

## Screen 1 — Home feed
**Header:** avatar (JD, links to your profile) · pill search field “Search Turma” · chat icon button (→ Messages) · bell icon button (red unread dot, opens the notification sheet below — there’s no separate Alerts page anymore).

**Body (scrolls):**
1. **Greeting:** “Good evening, Jordan” (H2); “CS ’29 · 3 things tonight” (caption).
2. **Feed tabs** (`.tabs`): **All** (prioritises what’s tonight, on) · **Friends & following** (only people/clubs you follow) · **Suggested** (interest/club-matched discovery, mirrors the onboarding suggestion logic). Swaps the whole body below via the same show/hide pattern as the loading-state demo.
3. **Time/price filter chips:** Tonight (on), Weekend, Free, Near me (pin icon).
4. **Interest filter chips** (new row): Running, Live music (on), CS (on), Service, Sports — narrows the flyer strip and posts to matching tags.
5. **Flyer carousel** (horizontal strip, 250px cards, 4:4.6) — unchanged content, shown in the **All** tab.
6. **Primary CTA:** `RSVP to Acoustic Night` (ticket icon, block). Tap → toast “You’re in! Added to your calendar”.
7. **Photography Club post** (`.club-post`: avatar, name + verified, “3h”, meta “Club · 98 members · officer post”, body, 150px camera art, `View event` button, then heart 33 / comment 8 pills and a share icon), then the **Market row** and **Seasonal banner** — all inside the **All** tab.
8. **Friends & following tab:** an info banner explaining the scope, Mateo J.’s text-only `.club-post` (meta “Friend”, heart 8 / comment 3), an event friends are going to, and a followed club update.
9. **Suggested tab:** a banner explaining the signal (interests/clubs), a suggested Photography Club `.club-post` with `+ Follow` in the head row and camera art (no match score), and a suggested event from a club you don’t follow yet.

**Notification sheet** (bell icon): bottom sheet listing the same recent notifications as the desktop dropdown (connection request, event RSVP, event reminder, market message, club update), each row a link straight to its source page, plus a “Notification settings” link. Replaces the old full-page Alerts screen.

**Tab bar:** Home (active) · Events · Create · Market · Clubs. The **Create** button opens the create sheet (Post / Event / Listing / Club or group) — see [style-guide.md](style-guide.md#6-layout).

## Screen 2 — Feed states
Unchanged: segmented control demos Loaded / Loading / Empty / Error for design review.

## Screen 3 — New post
Full-screen create flow (`data-nav="none"`, close (x) + “New post” + `Post` link in the header), reached from the Create sheet or the desktop composer:
- **Post as** chips: Jordan (you, on), or any club/group you belong to — lets an officer post as their club instead of personally.
- **Source or link** (optional) input — for sharing an article, form or outside link.
- **Description** textarea — “What’s happening?”.
- **Interest tags** and **Club tags** — separate multi-select chip rows; interest tags drive the interest filter and Suggested tab, club tags associate the post with a specific community.
- **Event details (optional):** When, Where selects and a Capacity input — filled in only when the post is about a gathering; left blank for a plain update.
- **Primary:** `Post` (also mirrored as a link in the header). Tap → toast “Posted to BC”.
