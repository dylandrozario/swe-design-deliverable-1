# 05 Clubs — Desktop (1280)

**Style:** LinkedIn company page in a 3-column layout. Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Clubs**. Message dock collapsed.

## Layout: `220px | 1fr | 280px`

### Left rail (sticky)
- **Clubs menu card:** Browse clubs (active), My clubs, Officer tools.
- **`Create a club or group`** (primary, block, plus icon) — opens the create-club modal; available to every student, not just officers.
- **Categories card:** chips Sports, Arts, Service, Academic.

### Center: club page (Data Science Society)
1. **Header card:**
   - 170px `g2` banner with code icon; 96px rounded-square logo “DS” overlapping the bottom-left.
   - H1 “Data Science Society” + verified; “Academic · Public club · 310 members · 12 friends are members”.
   - Buttons on the right: `Join` (primary, plus icon) and `Message` (secondary). Join stays pinned when scrolling.
   - Tabs: About (on) · Events · 3 · Posts · Members · Files.
2. **Upcoming card:** date tile OCT 22, “Intro to Pandas workshop”, “Wed 6pm · Fulton 310 · snacks”, `RSVP`.
3. **Members card:** four overlapping avatars + “and 306 others”.

### Right rail (sticky)
- **Officer view card** (gold-soft): “Invite link · member list · RSVP export · announcements (1/week).” `Post event in 60s` (gold, small).
- **Similar clubs card:** Photography Club (98 members) and Running Club (214 members), each with `Join`.

## Create a club or group (modal)
Centered `.modal` opened from the sidebar button: Type chips (Club/Group), Name, Category + Privacy (side by side), Description, a “Create a group chat for members” switch (on by default — makes the auto-chat behavior an explicit, visible choice), and the same open-decision verification note as mobile (review queue, auto-approve for recognized-org officers, ~2 business days otherwise, TBD with Student Programs). `Submit for review` closes the modal.

## Behavior
- Directory view (Browse clubs) shows a grid of club cards with join buttons and category filters.
- Fair mode (swipeable club cards) is available for Involvement Fair.
- Announcements are rate-limited and digest by default.
- Tablet 768: members grid becomes 3 columns; rails stack below.
