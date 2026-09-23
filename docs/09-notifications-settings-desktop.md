# 09 Settings — Desktop (1280)

**Style:** LinkedIn-style settings page. Shell per [style-guide.md](style-guide.md#desktop-frame). No sidebar item is active here — Settings is no longer one of the six primary sidebar destinations; it’s reached from the gear icon next to the profile picture in the top bar, or from the Privacy card on [Profile](08-profile-desktop.md). Message dock collapsed.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail: settings menu
Card “Settings”: **Notifications** (active), Privacy, Verification, Blocked. This is a settings-only sub-menu, separate from the app-wide sidebar.

### Center: notification preferences card
H2 “Notification preferences”, then a list. Each row: icon avatar · title + description · segmented control **Off / Digest / Instant** (220px):
| Row | Description | Default |
|---|---|---|
| Events (ticket) | Reminders and friend RSVPs | Digest |
| Clubs (users) | Announcements (1 per week max) | Digest |
| Market (bag) | Inquiries and saved-price drops | Instant |
| System (shield) | Safety and verification only | “Always on” badge (not editable) |

Footer: `Save` (primary) and helper “Errors show ‘Couldn’t save. Retry.’”

## What changed
The alert feed (the scrollable list of past notifications) is no longer a page reached from the sidebar. It’s a small dropdown off the bell icon in the top bar (see [style-guide.md](style-guide.md#6-layout)), and every row routes straight to the event, thread or club it concerns. This page only holds the *preferences* for how those notifications are delivered (off/digest/instant, quiet hours) plus Privacy, Verification and Blocked.

## Behavior
- Success toast “Preferences saved”; failure shows a retry banner.
- Tablet 768: the matrix stacks into a simple list.
