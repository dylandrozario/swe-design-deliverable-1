# 11 Calendar — Mobile (390 × 800)

**Goal:** one place to see everything you’re committed to — RSVP’d events and club meetings — without digging through Events or each club page. New page; new sidebar/tab-bar-adjacent destination (see [style-guide.md](style-guide.md#6-layout)).
**Style:** LinkedIn-style list on the standard canvas, reusing the Events page’s mini-calendar component. See [style-guide.md](style-guide.md#event-flyer-flyer).

## Screen — My calendar
- **Header:** “My calendar” title · search icon button (→ browse Events, for adding more).
- **Mini calendar card:** “October” label, 7-column grid; dots mark days with something on the calendar, today (17) is a filled circle — the same `.cal` component as the Events page’s desktop calendar.
- **Filter chips:** All (on), Events, Club meetings.
- **Agenda, grouped by week** (“This week”, “Next week”): date-tile rows with title, time/place, and a badge — green “Going” for an event you RSVP’d to, gold “Club” for a club meeting (attending is implied by membership).
- **`Sync to Google or Apple Calendar`** (ghost, block) — exports the combined agenda.
- **Empty state:** “Nothing on the calendar yet? RSVP to events or join clubs and they’ll show up here automatically.”

## Behavior
- Populated automatically from Events RSVPs and the meeting schedule of any club you’re a member of — nothing to configure.
- Reached from the Events page’s header calendar icon, Profile’s Upcoming/RSVPs tab (“Open full calendar”), and — on desktop — the sidebar.
- Not one of the 5 mobile tab-bar icons (Home/Events/Create/Market/Clubs stay as-is per the style guide’s bottom-tab-bar spec); it’s reached via the icon buttons above instead, to avoid crowding the tab bar.
