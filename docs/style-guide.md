# Turma Style Guide

Design system for Turma, the verified social platform for Boston College students. Source of truth: `styles.css` and `app.js`. Every page spec in this folder references components defined here.

## 1. Principles

1. **One brand, three interaction styles.** BC maroon + gold everywhere; layout patterns borrowed per section (see §2).
2. **One primary action per screen.** Usually a single maroon pill button (RSVP, Join, Message seller, Continue).
3. **Trust is visible.** Verified check next to every name, campus safe-meetup spots, report/block in every thread.
4. **Quiet by default.** Digests over pings, rate-limited club announcements, quiet hours.
5. **Never color alone.** Every status pairs color with an icon and/or text label.

## 2. Section modes

| Section | Inspired by | Pattern |
|---|---|---|
| Home, Clubs, Profile, Messages, Alerts/Settings | LinkedIn | Warm-gray canvas, white cards, feed posts with react/comment actions, company-style club pages, verified check, follow model, 3-column desktop |
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
- **Radius:** cards 14, flyers 20, buttons/chips/inputs pills or 12, avatars circle (clubs use rounded square, radius 10–18), sheets 22 top corners, phone frame 40.
- **Elevation:** cards use a 1px border, no shadow. Shadows only for floating layers: message dock (`0 8px 24px` pill, `0 16px 40px` panel), toast, device frames.

## 6. Layout

### Mobile frame
390 × 800, 8px dark bezel, radius 40. Stack: status bar (`.sb`) → header (`.mhdr`) → optional tabs → scrolling body (`.pbody`, padding 12, gap 12) → bottom tab bar (`.tabbar`). Sticky CTAs (`.cta`) pin to the bottom of the body, directly above the tab bar. Sheets and toasts are positioned inside the frame.

**Bottom tab bar:** Home · Events · Create (elevated maroon pill with plus) · Market · Clubs. Active tab uses `--accent`. Search, alerts, messages and profile live in the header.

### Desktop frame
1280 wide, radius 16. CSS grid: left sidebar (200px, full height) + right column (top bar over body).
- **Left sidebar (`.snav`):** logo, then Home, Events, Market, Clubs, Notifications (unread badge), Profile, and a maroon **Create** button. Active item: tinted row + maroon text/icon. Collapses to a 64px icon rail under 1000px.
- **Top bar (`.dnav`):** search field (300px pill) left, avatar right. No navigation links.
- **Body (`.dbody`):** three columns `220px | 1fr | 280px` (left rail, center, right rail). `.dbody.two` is `260px | 1fr`; `.dbody.one` is one column. Rails are sticky (top 64px). Under 1000px everything stacks to one column.
- **Message dock (`.dock`):** fixed bottom-right of the frame (20px from right, 16px from bottom). Collapsed: pill “Messages” with unread badge. Expanded: 340px panel opening upward with header, close button, **All / Market / Clubs** filter, and thread list. Not shown on the Messages page. Body has 76px bottom padding so content is never covered by the collapsed pill.

## 7. Components

### Buttons (`.btn`)
Pill, min height 44, padding 0 20, weight 700.
| Variant | Class | Use |
|---|---|---|
| Primary | `.btn` | The one main action |
| Secondary | `.btn.sec` | Outlined maroon; alternate action |
| Featured | `.btn.gold` | Gold fill, dark text; promotions, “Post event” |
| Ghost | `.btn.ghost` | Neutral chip fill; low-emphasis |
| Danger | `.btn.danger` | Destructive outline |
Modifiers: `.sm` (34px high), `.block` (full width). Icon buttons `.iconbtn` are 40px circles (`.plain` removes the fill).

### Chips (`.chip`)
36px pill, weight 600. Off = chip fill + border; **On** = dark fill (`--text` on `--bg`). `.chip.free` = green tint. Containers: `.chips` (horizontal scroll, no scrollbar) or `.chips.wrap`. Toggle via `data-chips`.

### Tabs
- **Underline tabs** (`.tabs`): 44px, active = maroon text + 3px maroon underline. Content filters and profile sections.
- **Segmented** (`.seg`): tinted track, active segment is a raised white pill. View switches (List/Calendar/Map) and notification frequency.

### Avatars and identity
`.av` 40px circle with initials; sizes `.s` 24, `.lg` 72, `.xl` 96. Colors `c2` blue, `c3` green, `c4` bronze, `c5` violet, default maroon. `.sq` = rounded square for clubs. `.faces` overlaps avatars for “friends going”. Verified: blue check (`.vt`) directly after the name.

### Badges (`.badge`)
Small 11px pill. Variants: default, `.ok` green, `.gold`, `.red`.

### Cards (`.card`)
White, 1px `--line` border, radius 14, overflow hidden.

### Event flyer (`.flyer`)
Aspect 4:5 (`.wide` 16:11, `.sq` 1:1). Layers: gradient/photo art → `.top` row (date badge left, price pill right) → `.bot` scrim with title (22 / 800), meta line, friends-going faces. Free events use a white price pill; paid use gold.
**Event row** (`.evrow`): 84px square art + date/time eyebrow (maroon, 800) + title + meta.
**Event card** (`.evcard`, infinite list): 16:8 flyer with date + price, then title, host · time · place, going count, “I’m going” button.

### Feed post (`.post`) — LinkedIn pattern
Head (avatar, name + verified, type · meta, “+ Follow” link) → body text → media (with tag chip and price pill) → stats row (faces, reactions, comments) → action row (Like, Comment, Repost, primary CTA).

### Listing tile (`.tile`) — Marketplace pattern
Square art (radius 12) with heart save button top-right and optional badge bottom-left. Below: **price** (16 / 800), title (13.5), location · time (12, muted). Grids: 2 columns mobile, 3–4 desktop.

### Inputs
46px high, 12px radius, 1.5px `--line` border, 14px horizontal padding. Labels (`label.f`) sit above, 12.5 / 700. Selects match. Focus: 3px gold outline.

### Other controls
- **Switch** (`.switch`): 46×28; on = green.
- **Checkbox row** (`.chk`): 18px box with maroon check; used in desktop filter rails.
- **Progress** (`.progress`): segmented 5px bars for onboarding and create flows.
- **Toast** (`.toast`): dark, bottom of the phone, icon + one line, auto-dismiss 2.6s.
- **Bottom sheet** (`.sheet` + `.scrim`): 22px top radius, drag handle, filter content, Clear + primary result button.
- **Safe-meetup callout** (`.safe`): green tint, shield icon, campus spot in bold.
- **Message bubble** (`.bubble`): them = chip fill, left; me = maroon fill, right. 18px radius with one 5px corner.
- **Unread dot** (`.unread`): 10px accent dot.
- **Skeleton** (`.skel`): shimmering block for loading.
- **Note** (`.note`): gold-soft callout with left gold rule (documentation only).

## 8. Icons
Inline SVG line icons, 24px grid, 1.9 stroke, round caps/joins, `currentColor`. Inserted with `<i data-i="name">`. Set: home, cal, bag, users, plus, search, bell, chat, user, heart, pin, filter, check, shield, share, image, more, back, x, like, repeat, send, star, ticket, clock, flame, gear, lock, moon, bookmark, spark, arrow, mail, book, music, run, camera, code, fridge, bike, ball, verified. Default size 1.25em; tab bar 21px; sidebar 26px. Never use emoji in UI.

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
| 768–999px (tablet) | Sidebar → 64px icon rail; body stacks to one column with 2-column card grids; filter rails become drawers; right rail moves below |
| < 480px | Phone frame fills the width |

## 12. Content voice
Friendly and plain: “You’re in.” not “RSVP confirmed.” Errors say what happened and what to do (“That code didn’t match. Check your spam folder or resend.”). Use “Message seller”, “I’m going”, “Join”, “View more events”. Campus place names are real (O’Neill Library lobby, The Rat, Reservoir, Walsh, Mods).
