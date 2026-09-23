# 08 Profile — Desktop (1280)

**Style:** LinkedIn profile. Shell per [style-guide.md](style-guide.md#desktop-frame). Sidebar active item: **Profile**. Message dock collapsed.

## Layout: `1fr | 300px` (main column + right rail)

### Main column
1. **Profile header card:**
   - 150px `g1` banner; 96px avatar “JD” overlapping the bottom-left.
   - H1 “Jordan D. ’29” + verified; “CS major · Econ minor · Class of 2029 · 14 events attended”; `Edit profile` (secondary, opens the Edit profile modal) on the right.
   - Tabs (functional): Upcoming (on) · Clubs · 3 · Marketplace · **Following** (new).
2. **Upcoming panel:** rows with date tile, title, meta, green “Going” badge — FRI 17 Acoustic Night (7pm · The Rat); SAT 18 Running meetup (9am · Reservoir); link to the full [Calendar](11-calendar-desktop.md).
3. **Clubs panel:** the three clubs you belong to with role and `Leave`.
4. **Marketplace panel:** your active listings with inquiry counts and `Mark sold`.
5. **Following panel:** People (connections, `Remove`) and Clubs & groups (`Unfollow`) as two cards — clubs, groups and people all reachable from one tab.

### Right rail
- **Privacy card:** “Bio & interests — BC only”; “Major & minor — Everyone”; “Direct messages — Verified”; link to the full Settings page.
- **Viewing others** (gold-soft note): “Message, shared clubs and friends, report or block. Hidden fields stay hidden.”

## Edit profile modal
Centered `.modal` opened from the `Edit profile` button: photo, Name, Class year + Major (side by side), Second major + Minor (side by side, optional), Bio, Interest chips, `Save changes`.

## Behavior
- Editing opens inline fields with a privacy selector per field.
- Settings is reachable from the gear icon next to the avatar in the top bar (see [style-guide.md](style-guide.md#6-layout)) as well as from this page’s Privacy card — “PFP or sidebar”, either way.
- Empty Upcoming state links to Events.
- Tablet 768: cover stacks above details; stats become two columns.
