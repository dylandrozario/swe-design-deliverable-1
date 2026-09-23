# 05 Clubs — Desktop (1280)

**Style:** hangout-style club page in a 3-column layout (posts-first, About under the member count). Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Clubs**. Message dock collapsed.

## Layout: `220px | 1fr | 280px`

### Left rail (sticky)
- **Clubs menu card:** Browse clubs (active), My clubs, Officer tools.
- **`Create a club or group`** (primary, block, plus icon) — opens the create-club modal; available to every student, not just officers.
- **Categories card:** chips Sports, Arts, Service, Academic.

### Center: club page (Data Science Society)
Components (cover, About, ticket cards, `.club-post`, lock card) are defined in [style-guide.md](style-guide.md#club-page-components-club-page); posts here are the same component as on Home.
Wrapped in `.col.club-page`. Landing shows **Posts**. Panels switch with `data-show`/`data-for="clubtabs-d"`. No stickers, match scores or “free to join” badges, and no About tab.

1. **Header card:**
   - **Cover** (`.club-cover.g2.pattern`, 170px): blue gradient, dot pattern, large translucent code icon, scrim. 56px avatar “DS” beside the name **Data Science Society** (H1, white) + gold verified check and “Academic · Fulton Hall”.
   - **Info row** (left): faces + “**310 members** · 12 friends”, then the **About** `<details>` directly underneath: two-line bio and a **View more** button; opening reveals `.kv` details (Category, Privacy, Location, Meets Wed 6pm · Fulton 310, Contact @bcdatasci, Dues Free), **Officers · 3** (Priya N. President, Leo K. Events lead, Ana G. Treasurer, each with a message button) and a `Club files` link. **View less** collapses it.
   - **Actions** (right of the info row): `Join` (primary) · `Message` (secondary) · bell icon button, all 44px.
   - **Tabs:** **Posts** (on) · Events · 3.
2. **Posts panel — single column:**
   - **Upcoming sessions:** H2 + `View all →` (opens Events). Three ticket-style `.event-strip` cards (maroon date block, dashed divider, title, meta, going count, `RSVP`): Oct 22 Intro to Pandas workshop, Oct 29 Kaggle build night, Nov 5 Guest talk: data at Fenway.
   - **Fresh from the club:** two `.club-post` cards (pinned workshop reminder from the club; Priya N. ’26’s Kaggle build night post) with reaction pills and a share button, then the gold **members-only** lock card.
3. **Events panel:** date-tile list of the three sessions with going counts and `RSVP`; `← Back to posts`.

### Right rail (sticky)
- **Officer view card** (gold-soft): “Invite link · member list · RSVP export · announcements (1/week).” `Post event in 60s` (gold, small).
- **Similar clubs card:** Photography Club (98 members) and Running Club (214 members), each with `Join`.
- **Members preview card:** six overlapping faces + “and 304 others”.

## Create a club or group (modal)
Centered `.modal` opened from the sidebar button: Type chips (Club/Group), Name, Category + Privacy (side by side), Description, a “Create a group chat for members” switch (on by default — makes the auto-chat behavior an explicit, visible choice), and the same open-decision verification note as mobile (review queue, auto-approve for recognized-org officers, ~2 business days otherwise, TBD with Student Programs). `Submit for review` closes the modal.

## Behavior
- Directory view (Browse clubs) shows a grid of club cards with join buttons and category filters.
- Fair mode (swipeable club cards) is available for Involvement Fair.
- Announcements are rate-limited to 1/week.
- Tablet 768: the upcoming strip stays horizontally scrollable; rails stack below.
