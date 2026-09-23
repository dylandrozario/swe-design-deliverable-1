# 09 Settings — Mobile (390 × 800)

**Goal:** quiet by default. Digests over pings, granular control, quiet hours, easy privacy. There is no standalone Alerts screen anymore.
**Style:** LinkedIn-style settings list. See [style-guide.md](style-guide.md).

## Where notifications live now
The old full-page “Alerts” list has been removed. Tapping the bell in the Home header opens a small bottom sheet with the same recent items (event reminder, market message, club digest), but each row is a **direct link to the page it’s about** — the event detail, the message thread, the club page — instead of staying inside a generic feed. See [Home](02-home-mobile.md#screen-1--home-feed) for the sheet itself. This page is reached from the gear icon on your own profile, or from the gear next to your picture in the desktop top bar (mobile doesn’t have a persistent top bar, so it’s reached via Profile there).

## Screen — Settings
- **Header:** back · “Settings”.
- **Notify me about** (card of switch rows; the three things the app must notify on): **Connection requests** — when someone wants to connect, or accepts — on; **RSVPs to my events** — when someone RSVPs to an event you posted — on; **New messages** — direct messages from your connections — on.
- **Delivery** (card): **In-app** — bell icon, always on (badge “Always on”); **Email** — sent to jdoe27@bc.edu — switch, on. Notifications go in-app and by email.
- **Reminders and digests** (card of switch rows; each row = title + description + switch):
  - Event reminders — 2 hours before — on.
  - Club digest — Weekly summary — on.
  - Saved-price drops — when a listing you saved gets cheaper — on.
  - Quiet hours — 11pm to 8am — on.
- **Privacy** (card of navigation rows, arrow at right): Bio & interests visible to — BC students only; Major & minor visible to — Everyone; Who can message me — Accepted connections only.
- **`Report, block and safety`** (ghost, block, shield icon).
- **`Save changes`** (primary, block). Tap → toast “Preferences saved”. Failure → “Couldn’t save. Retry.”

## Behavior
- Switches respond immediately; Save commits.
- Defaults are low-noise: club announcements arrive as a digest.
- These are notification *preferences* (how often/loud); the notifications *themselves* now surface contextually via the bell dropdown/sheet described above, not on this page.
