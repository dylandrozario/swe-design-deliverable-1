# Turma Style Guide

Design system for Turma, the verified social platform for Boston College students. Source of truth: `styles.css` and `app.js`. Every page spec in this folder references components defined here.

## 1. Principles

1. **One brand, three interaction styles.** BC maroon + gold everywhere; layout patterns borrowed per section (see §2).
2. **One primary action per screen.** Usually a single maroon pill button (RSVP, Follow, Message seller, Continue).
3. **Trust is visible.** Verified check next to every name, campus safe-meetup spots, report/block in every thread.
4. **Quiet by default.** Rate-limited club announcements and simple Off / Instant controls.
5. **Never color alone.** Every status pairs color with an icon and/or text label.

## 2. Section modes

| Section | Inspired by | Pattern |
|---|---|---|
| Home, Clubs, Profile, Messages, Settings, Calendar | LinkedIn | Warm-gray canvas, white cards, one shared post component (`.club-post`, reaction pills) used on Home and club pages, a hangout-style club page (cover with the club name, About under the member count, ticket-style upcoming cards), verified check, follow model, 3-column desktop |
| Events | Posh | Poster-first flyers, date badge (top-left), price pill (top-right), title over dark scrim, friends-going faces, sticky RSVP |
| Market | Facebook Marketplace | White canvas, square photo tiles with price first, category pills, left filter rail, “Message seller” as the one action |

The Market section uses `data-theme="mkt"` (white background, neutral chip fill). Everything else uses the default theme. There is no dark theme.

## 3. Color

| Token | Value | Use |
|---|---|---|
| `--maroon` | `#8A1F2F` | Brand, primary buttons, active tab/nav, links |
| `--maroon-d` | `#5E1220` | Gradients, hover depth |
| `--deep` | `#1B0A0E` | Toasts, prototype chrome, flyer scrims |
| `--gold` | `#E2B13C` | Highlights, “Featured” buttons, unread/notification accents, focus ring |
| `--gold-soft` | `#FBF1D6` | Notes, tips, seasonal banners |
| `--gold-ink` | `#6B4A00` | Text on gold-soft |
| `--bg` | `#F3F0EB` | App canvas (Market: `#FFFFFF`) |
| `--card` | `#FFFFFF` | Cards, headers, sidebars |
| `--text` | `#1C1517` | Body text |
| `--muted` | `#665D61` | Secondary text |
| `--line` | `#E6DFD7` | Borders, dividers (Market: `#E9E4DE`) |
| `--chip` | `#FFFFFF` | Chip fill (Market: `#F0EDE9`) |
| `--hover` | `#F7F3EE` | Hover / selected row (Market: `#F0EDE9`) |
| `--blue` | `#2B5FA8` | Verified check, “liked” state |
| `--ok` | `#1E8E4E` | Free, safe, available, switch-on |
| `--danger` | `#C62828` | Errors, notification dot, destructive |

`--accent` (maroon) and `--on-accent` (white) drive buttons, active tab color, chip “on” states and switches. Use them instead of hard-coding maroon.

**Placeholder art gradients** (`.g1`–`.g6`, used for flyers, banners, listing photos until real images exist):
`g1` maroon→coral→gold · `g2` navy→blue→sky · `g3` forest→green→lime · `g4` plum→violet→pink · `g5` bronze→gold→cream · `g6` charcoal→gray.

**Status banners** (`.state`): ok (green tint), warn (gold tint), err (red tint), info (blue tint). Always include an icon.

## 4. Typography

Font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Text", Inter, system-ui, sans-serif`. Mono (labels only): `ui-monospace, Menlo, monospace`.

| Style | Class | Size / weight | Use |
|---|---|---|---|
| Display | inline | 32–44 / 800, tracking -.03em | Onboarding hero |
| H1 | `.h1` | 24 / 800, tracking -.03em | Screen and page titles, prices on detail |
| H2 | `.h2` | 17 / 800 | Section headings, card titles |
| Body | default | 14 / 400, line-height 1.45 | Content |
| Small | `.sm` | 12.5 | Secondary lines |
| Caption | `.xs` | 11.5 | Metadata, timestamps |
| Label | `.h3` | 11 / 700 mono, uppercase, .08em | Filter group titles, section eyebrows |
| Header title | `.mhdr .ttl` | 20 / 800 | Mobile screen header |

Bold is 700 (`.b`); names and prices are 700–800.

## 5. Spacing, radius, elevation

- **Spacing grid:** 4 / 8 / 12 / 16 / 20 / 24 / 32. Phone body padding 12; card padding 14 (`.pad`); desktop body padding 20, column gap 20.
- **Radius:** cards 14; posts, club-page cards and ticket cards 20; flyers 20; buttons/chips/inputs pills or 12; avatars circle (`.sq` rounded square only for club rows on Profile); sheets 22 top corners; modals 20; phone frame 40.
- **Elevation:** cards use a 1px border, no shadow. Shadows only for floating layers: message dock (`0 8px 24px` pill, `0 16px 40px` panel), dropdowns and modals (`0 16px 40px` / `0 24px 60px`), toast, device frames.

## 6. Layout

### Mobile frame
390 × 800, 8px dark bezel, radius 40. Stack: status bar (`.sb`) → header (`.mhdr`) → optional tabs → scrolling body (`.pbody`, padding 12, gap 12) → bottom tab bar (`.tabbar`). Sticky CTAs (`.cta`) pin to the bottom of the body, directly above the tab bar. Sheets and toasts are positioned inside the frame.

**Bottom tab bar:** Home · Events · Create (elevated maroon pill with plus) · Market · Clubs — unchanged at 5 slots. Search, notifications, messages and profile live in the header (where a header exists); Calendar is one tap from the Events header, and Settings is one tap from your own Profile — both were deliberately kept off the tab bar rather than crowding it to six-plus icons. **Create** opens a bottom sheet (Post / Event / Listing / Club or group) instead of doing nothing.

### Desktop frame
1280 wide, radius 16. CSS grid: left sidebar (200px, full height) + right column (top bar over body).
- **Left sidebar (`.snav`):** logo, then **Home, Calendar, Events, Market, Clubs, Profile**, and a maroon **Create** button that opens a small dropdown menu (Post, Event, Listing, Club or group). Active item: tinted row + maroon text/icon. Collapses to a 64px icon rail under 1000px. There is no separate Notifications item — see below.
- **Top bar (`.dnav`):** search field (300px pill) on the left; on the right, a **notification bell** (opens a dropdown of recent items — event reminders, market messages, club updates — each row linking straight to the page it's about, not to a standalone feed), a **settings gear** (→ Settings), and the **profile picture** (→ your own Profile). Settings is reachable this way *or* via Profile's Privacy card, matching mobile's gear-on-Profile pattern.
- **Body (`.dbody`):** three columns `220px | 1fr | 280px` (left rail, center, right rail). `.dbody.two` is `260px | 1fr`; `.dbody.one` is one column. Rails are sticky (top 64px). Under 1000px everything stacks to one column.
- **Message dock (`.dock`):** fixed bottom-right of the frame (20px from right, 16px from bottom). Collapsed: pill “Messages” with unread badge. Expanded: 340px panel opening upward with header, close button, **All / Market / Clubs** filter, and thread list. Not shown on the Messages page. Body has 76px bottom padding so content is never covered by the collapsed pill.

### Notifications (no standalone page)
There used to be a full “Alerts” page. It's gone: notifications are a `.ndrop` dropdown (desktop, off the top-bar bell) or a `.sheet` (mobile, off the Home header bell), always showing the same handful of recent items, each a direct link into the event, thread or club it concerns. The **Settings** page (09) now holds only notification *preferences* (Off / Instant) plus Privacy, Verification and Blocked — not a feed of past notifications.

## 7. Components

### Buttons (`.btn`)
Pill, min height 44, padding 0 20, weight 700.
| Variant | Class | Use |
|---|---|---|
| Primary | `.btn` | The one main action |
| Secondary | `.btn.sec` | Outlined maroon; alternate action |
| Featured | `.btn.gold` | Gold fill, dark text; promotions, “Post event” |
| Ghost | `.btn.ghost` | Neutral chip fill; low-emphasis |
| Google | `.btn.google` | White fill, `--line` border, Google mark; the one and only sign-in action on Onboarding |
| Danger | `.btn.danger` | Destructive outline |
Modifiers: `.sm` (34px high; 44px inside `.club-post` and `.club-page`), `.block` (full width). Icon buttons `.iconbtn` are 40px circles (44px inside posts and the club page); `.plain` removes the fill.

### Chips (`.chip`)
36px pill, weight 600. Off = chip fill + border; **On** = dark fill (`--text` on `--bg`). `.chip.free` = green tint. **Reaction pill** (`.chip.react`, inside `.cp-react`): 44px, icon + count; the liked state (`.liked`) is gold-soft fill, maroon text, gold border. Containers: `.chips` (horizontal scroll, no scrollbar) or `.chips.wrap`. Toggle via `data-chips`.

### Tabs
- **Underline tabs** (`.tabs`): 44px, active = maroon text + 3px maroon underline. Content filters (Home's All/Friends & following/Suggested) and profile sections (RSVPs/Clubs/Listings/Following) — these now actually swap content via `data-show`/`data-for` (see below), not just restyle the active button.
- **One panel at a time:** a tab or segment button with `data-show="x" data-for="id"` shows the `[data-state="x"]` panel and hides its siblings. Only panels whose nearest `id` ancestor is the target are toggled, so a tab set nested inside another panel (e.g. Requests / Sent / Connected inside the Connections view) has its own `id` and stays independent of the outer Messages / Connections switch.
- **Segmented** (`.seg`): tinted track, active segment is a raised white pill. View switches (List/Calendar/Map, New chat's DM/Group) and notification frequency.

### Dropdowns and modals (new)
- **Dropdown (`.ndrop`):** a small floating panel anchored inside a `.desk` frame (top-right by default, e.g. the notification bell; `.ndrop.menu` anchors bottom-left near the sidebar's Create button). Used for content that's quick to scan and dismiss — recent notifications, the Create shortcut list.
- **Modal (`.modal-scrim` + `.modal`):** a centered overlay for real forms on desktop — New post, New chat, Create a club or group, Edit profile, and Market's item detail/create flows use the equivalent full-page state instead when the content is long. Mobile equivalents are either a `.sheet` (short choices, e.g. New chat) or a dedicated full-screen `data-nav="none"` figure (longer forms, matching the existing Create-event/Create-listing convention).
- Both share the existing `[data-sheet]` show/hide behavior in `app.js` — a trigger's `data-sheet="id"` toggles `#id` (and `#id-scrim` if present) on click. No new JS was needed for either component.

### Avatars and identity
`.av` 40px circle with initials; sizes `.s` 24, `.lg` 72, `.xl` 96. Colors `c2` blue, `c3` green, `c4` bronze, `c5` violet, default maroon. `.sq` = rounded square for clubs. `.faces` overlaps avatars for “friends going”. Verified: blue check (`.vt`) directly after the name. On desktop, the top-bar avatar is a link to your own Profile.

### Badges (`.badge`)
Small 11px pill. Variants: default, `.ok` green, `.gold`, `.red`.

### Cards (`.card`)
White, 1px `--line` border, radius 14, overflow hidden. Inside `.club-page`, and for `.club-post`, radius is 20 and padding 14–16.

### Event flyer (`.flyer`)
Aspect 4:5 (`.wide` 16:11, `.sq` 1:1). Layers: gradient/photo art → `.top` row (date badge left, price pill right) → `.bot` scrim with title (22 / 800), meta line, friends-going faces. Free events use a white price pill; paid use gold. Flyers are clickable through to the event's detail page on both mobile and desktop.
**Event row** (`.evrow`): 84px square art + date/time eyebrow (maroon, 800) + title + meta.
**Event card** (`.evcard`, infinite list): 16:8 flyer with date + price, then title, host · time · place, going count, “I’m going” button.

### Post (`.club-post`) — the one post component
Used for every post: Home feed (All, Friends & following, Suggested; mobile and desktop) and the club page. There is no separate Home post style.
- **Layout:** `.card.club-post` is a two-column grid: 40px avatar (`.av`) on the left, content column (`.cp`) on the right.
- **Head row:** name (bold) + verified check, timestamp right-aligned (`.xs.muted.sp`), then an optional action on the same row: gold **Pinned** badge (club page) or `+ Follow` (`.btn.sm.sec`, suggested posts).
- **Meta line** (`.cp-meta`, optional): “Club · 214 members”, “Friend”, “Suggested · 98 members”, “Club · officer post”. The club page omits it because the club is implied.
- **Body:** paragraph, 14px.
- **Media** (`.cp-media.art.gN`, optional): rounded 14px, 150px high, gradient art with an icon. Not full-bleed. Text-only posts (a friend’s update) simply omit it.
- **Actions** (`.cp-react`): **reaction pills** — heart with count (`data-like`, toggles the liked state and count) and comment count — then a spacer and a share icon button. A post about an event adds a `View event` secondary button on its own line above the pills. There is no Like/Comment/Repost bar.
- Nothing decorative is added to posts: no match scores or promo badges.

### Club page components (`.club-page`)
The club page is a hangout-style layout, not a company profile. Added classes are scoped so other pages are unaffected.
- **Cover** (`.club-cover.gN.pattern`): 150px mobile / 170px desktop gradient with a faint dot pattern (`.pattern`), a large translucent icon watermark (`.wm`) and a bottom scrim. A 56px club avatar with a white ring sits beside the club name (H1, white) with a gold verified check and a one-line “Category · Place”. No stickers, badges or overlapping logo.
- **Members line + About (`.club-meta`):** faces + “**214 members** · 2 friends”, then About directly underneath as a native `<details class="about-teaser">`: bio clamped to two lines and a **View more** button (small, fill `--hover`); opening shows the `.kv` details (Category, Privacy, Location, Meets, Contact, Dues), the officers (avatar, name, role, message icon button) and a Club files link, and the button reads **View less**. There is no About tab.
- **Action row** (`.club-actions`): `Follow` · `Message` · bell icon button, 44px. On mobile it is sticky at the top of the scroll area so Follow stays pinned; on desktop it sits right-aligned in the header.
- **Tabs:** underline tabs Posts (default) and Events, switched with `data-show`/`data-for`. When “View all →” switches the panel, CSS `:has()` moves the underline to match.
- **Ticket card** (`.event-strip .card`, 270px, snap-scrolling `.strip`): maroon date block (`.tk-date`, month over day), dashed divider, then title, meta, “N going” and `RSVP`. Used for the Upcoming strip.
- **Lock card** (`.lock-card`): gold-soft card with a gold lock circle, “The group chat is members only”, and `Follow the club`. Shown to non-members instead of the chat.

### Listing tile (`.tile`) — Marketplace pattern
Square art (radius 12) with heart save button top-right and optional badge bottom-left. Below: **price** (16 / 800), title (13.5), location · time (12, muted). Grids: 2 columns mobile, 3–4 desktop. Tiles are clickable through to the listing's detail page.

### Inputs
46px high, 12px radius, 1.5px `--line` border, 14px horizontal padding. `textarea` follows the same treatment at a taller default height. Labels (`label.f`) sit above, 12.5 / 700. Selects match. Focus: 3px gold outline.

### Other controls
- **Switch** (`.switch`): 46×28; on = green.
- **Checkbox row** (`.chk`): 18px box with maroon check; used in desktop filter rails.
- **Progress** (`.progress`): segmented 5px bars for onboarding and create flows.
- **Toast** (`.toast`): dark, bottom of the phone, icon + one line, auto-dismiss 2.6s.
- **Bottom sheet** (`.sheet` + `.scrim`): 22px top radius, drag handle, filter content or a short form, Clear/Close + primary result button.
- **Safe-meetup callout** (`.safe`): green tint, shield icon, campus spot in bold.
- **Message bubble** (`.bubble`): them = chip fill, left; me = maroon fill, right. 18px radius with one 5px corner.
- **Unread dot** (`.unread`): 10px accent dot.
- **Skeleton** (`.skel`): shimmering block for loading.
- **Connection row** (`.item.card.pad`): avatar, name + class year + verified check, one-line reason (mutual friends, shared club, “Pending · sent 2d ago”), then actions: `Accept` (primary, small) + `Decline` (ghost, small) for received requests, `Cancel` for sent, `+ Connect` (secondary) for suggestions, `Message` (secondary) + remove (x icon) for connected. Non-connected profiles show a gold lock card (“Connect to see more”) and a disabled Message button.
- **Note** (`.note`): gold-soft callout with left gold rule (documentation only). `.note.open` switches to a red/maroon tint for a flagged, still-open design decision (e.g. club verification) rather than a settled one.

## 8. Icons
Inline SVG line icons, 24px grid, 1.9 stroke, round caps/joins, `currentColor`. Inserted with `<i data-i="name">`. Set: home, cal, bag, users, plus, search, bell, chat, user, heart, pin, filter, check, shield, share, image, more, back, x, like, repeat, send, star, ticket, clock, flame, gear, lock, moon, bookmark, spark, arrow, mail, book, music, run, camera, code, fridge, bike, ball, verified, google. Default size 1.25em; tab bar 21px; sidebar 26px. Never use emoji in UI. Note: Events now uses the `ticket` icon (sidebar and tab bar) so `cal` is free for the Calendar page's own icon.

## 9. Interaction and motion
- Touch targets ≥ 44px on mobile; pressed buttons shift 1px down.
- Focus ring: 3px gold outline, 2px offset, on every focusable element.
- Infinite lists load 3 items per batch when the sentinel is within 300px of the viewport; a 500ms skeleton/spinner precedes each batch; ends with “You’re all caught up.”
- Toggles (chips, tabs, switches, save hearts, likes) respond instantly; no page reload.
- Transitions are minimal: switch knob slide (150ms), skeleton shimmer (1.3s loop).

## 10. Accessibility
- Text contrast ≥ 4.5:1; muted text on white is `#665D61`.
- Icon buttons carry `aria-label`; inputs have labels or `aria-label`.
- Status is icon + text, never color alone.
- Verified check has a title (“Verified BC student”).
- Keyboard: all controls are native buttons, links or inputs.

## 11. Responsive rules
| Breakpoint | Behavior |
|---|---|
| ≥ 1000px | Full desktop: sidebar, 3-column body, message dock |
| 768–999px (tablet) | Sidebar → 64px icon rail; body stacks to one column with 2-column card grids; filter rails become drawers; right rail moves below; dropdown widths shrink to 260–280px |
| < 480px | Phone frame fills the width |

## 12. Content voice
Friendly and plain: “You’re in.” not “RSVP confirmed.” Errors say what happened and what to do (“That code didn’t match. Check your spam folder or resend.”). Use “Message seller”, “I’m going”, “Follow”, “View more events”. Campus place names are real (O’Neill Library lobby, The Rat, Reservoir, Walsh, Mods).
