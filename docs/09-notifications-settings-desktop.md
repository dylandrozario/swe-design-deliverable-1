# 09 Notifications & Settings — Desktop (1280)

**Style:** LinkedIn-style settings page. Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Notifications** (badge shows unread count). Message dock collapsed.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail: settings menu
Card “Settings”: **Notifications** (active), Privacy, Verification, Blocked.

### Center: notification preferences card
H2 “Notification preferences”, then a list. Each row: icon avatar · title + description · segmented control **Off / Digest / Instant** (220px):
| Row | Description | Default |
|---|---|---|
| Events (ticket) | Reminders and friend RSVPs | Digest |
| Clubs (users) | Announcements (1 per week max) | Digest |
| Market (bag) | Inquiries and saved-price drops | Instant |
| System (shield) | Safety and verification only | “Always on” badge (not editable) |

Footer: `Save` (primary) and helper “Errors show ‘Couldn’t save. Retry.’”

## Behavior
- The alert feed itself (All / Events / Market / Clubs tabs, unread dots, quiet-hours badge) is reached from the sidebar’s Notifications item.
- Success toast “Preferences saved”; failure shows a retry banner.
- Tablet 768: the matrix stacks into a simple list.
