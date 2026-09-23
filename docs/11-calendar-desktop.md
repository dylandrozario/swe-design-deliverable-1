# 11 Calendar — Desktop (1280)

**Style:** LinkedIn-style shell. Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Calendar** (new — sits between Home and Events; replaces the old Notifications slot, since notifications moved to the top-bar bell dropdown). Message dock collapsed.

## Layout: `260px | 1fr` (`.dbody.two`)

### Left rail (sticky)
- **Calendar card:** same “October” mini calendar as the Events page’s overview.
- **`Sync to Google or Apple`** (block).
- **Filter card:** All / Events / Club meetings chips.
- **`Post an event`** (ghost, block) → [Create event](04-events-desktop.md).

### Center
Agenda grouped by week (“This week”, “Next week”): each row is a date tile, title, time/place plus the hosting club where relevant, and a badge — green “Going” for an RSVP’d event, gold “Club” for a club meeting.

## Behavior
- This is the “My calendar” step referenced in [10 Core Flows](10-flows.md) (“RSVPs and club meetings combined”) — previously described but not built; it now has both a page and a sidebar slot.
- Populated from Events RSVPs and the meeting schedules of clubs you belong to.
- Linked from the Events sidebar’s “Your events” card, Profile’s Upcoming tab, and the sidebar itself.
- Tablet 768: same agenda-list collapse as Events.
