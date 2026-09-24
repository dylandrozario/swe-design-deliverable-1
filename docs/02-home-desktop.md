# 02 Home — Desktop (1280)

**Style:** 3-column feed using the shared post component (`.club-post`). Shell (sidebar, top bar, message dock) per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Home**. The message dock is shown **open** on this page. Top bar carries the notification bell dropdown, a settings gear and the profile-picture link — see the Notifications and Settings notes in the style guide.

## Layout: `220px | 1fr | 280px`

### Left rail (sticky)
**Profile card:** `g1` cover strip (60px); overlapping 72px avatar “JD”; “Jordan D. ’29” + verified check; “CS major · Running, Live music, CS”. Stat rows: Events attended **14**, Clubs **3** (values in maroon).

### Center column
1. **Composer card:** avatar · fake input “Share something with BC…” · `Post` (gold, small). Either control opens the **New post** modal (see Behavior).
2. **Feed tabs** (`.tabs`): **All** (on) · **Friends & following** · **Suggested** — same three states as mobile.
3. **Filters button:** opens a `.ndrop` dropdown with the same When / Price / Interests controls as mobile, plus a caption summarising active filters — replaces the loose interest-chip row and the “Happening tonight” header’s own time chips.
4. **All tab:** section row “Happening tonight”; flyer pair (2 columns, 16:11), each with its own small RSVP button; club post (`.club-post`: BC Running Club + verified, “1h”, meta “Club · 214 members”, `+ Follow` in the head row, body, run art, heart 54 / comment 12 pills and a share icon — no Like/Comment/Repost bar).
5. **Friends & following tab:** info banner, Mateo J.’s text-only `.club-post` (meta “Friend”), an event friends are going to.
6. **Suggested tab:** explanatory banner, a suggested Photography Club `.club-post` with `+ Follow` and camera art, a suggested event card.

### Right rail (sticky)
- **Trending at BC:** Game Day tailgate (1.2k going), Involvement Fair (640 interested), Move-out freebies (88 listings).
- **Market near you:** two square tiles, $35 textbook and $90 bike.

## Message dock (open)
Bottom-right panel: header “Messages” with close; **All / Market / Clubs** filter; threads Sarah K., Running Club, Mike T., Photography Club (unread dots on Sarah and Running Club); “Messages 3” pill beneath.

## New post modal
Centered `.modal` overlay opened from the composer: Post-as chips (you or a club/group), Source/link (optional), description textarea, When/Where selects, Capacity input, Interest tags, Club tags, `Post` button. Same fields as the mobile New post screen, laid out in one column.

## Behavior
- Feed scrolls with the page; rails stay sticky.
- Chips toggle in place; Like increments/decrements; feed tabs and interest chips swap the center column without a page reload.
- Seasonal hero rotates (Welcome Week, Game Day, Move-out).
- Tablet 768: two columns; right rail drops below the feed.
