# 09 Settings — Desktop (1280)

**Style:** LinkedIn-style settings page. Shell per [style-guide.md](style-guide.md#desktop-frame). No sidebar item is active here — Settings is no longer one of the six primary sidebar destinations; it’s reached from the gear icon next to the profile picture in the top bar, or from the Privacy card on [Profile](08-profile-desktop.md). Message dock collapsed.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail: settings menu
Card “Settings”: **Notifications** (active), Privacy, Verification, Blocked. This is a settings-only sub-menu, separate from the app-wide sidebar.

### Center: notification preferences card
H2 “Notification preferences”, then a list. Each row: icon avatar · title + description · segmented control **Off / Instant** (220px):
| Row | Description | Default |
|---|---|---|
| Connection requests (users) | New requests to you, and when yours is accepted | Instant |
| Messages (chat) | New direct messages from connections | Instant |
| RSVPs to my events (ticket) | When someone RSVPs to an event you posted | Instant |
| Events (ticket) | Reminders for events you’re going to | Instant |
| Clubs (users) | Announcements (1 per week max) | Instant |
| Market (bag) | Inquiries about your listings | Instant |
| System (shield) | Safety and verification only | “Always on” badge (not editable) |

**Deliver via** row: “In-app · always on” badge plus an **Email** switch (on). Footer: `Save` (primary) and helper “Errors show ‘Couldn’t save. Retry.’”

## What changed
The alert feed (the scrollable list of past notifications) is no longer a page reached from the sidebar. It’s a small dropdown off the bell icon in the top bar (see [style-guide.md](style-guide.md#6-layout)), and every row routes straight to the event, thread or club it concerns. This page only holds the *preferences* for how those notifications are delivered (off/instant) plus Privacy, Verification and Blocked.

## Behavior
- Success toast “Preferences saved”; failure shows a retry banner.
- Tablet 768: the matrix stacks into a simple list.
