# 01 Onboarding — Desktop (1280)

**Goal:** same five steps as mobile in a split-screen layout. No sidebar, top bar or message dock (`data-nav="none"`). See [style-guide.md](style-guide.md).

## Layout
Two equal columns (`.dbody.two`, min-height 560, no padding or gap).

### Left: brand panel
Full-height `g1` gradient, content bottom-left with 40px padding, white text:
- Glass chip “Boston College students only”.
- Display 44 / 800: “Your campus, all in one place.”
- Three trust lines with icons: shield “Every member is a verified BC student”; ticket “Real RSVPs, real events”; bag “Buy and sell with people you can trust”.

### Right: step panel
White card, 56px / 64px padding, vertical stack:
1. Progress bar (3 of 5 filled).
2. H1 (30px) “Pick your interests”; subtext “Step 3 of 5 · we’ll suggest clubs and events”.
3. Interest chips (wrap, 10px gap): Live music ✓, Running ✓, Data science, Service, Theatre, Ski.
4. Live suggestion row (card): BC Running Club avatar, name, “Suggested · 214 members”, `Follow` (secondary, small). Updates as chips change.
5. Footer row: `Back` (ghost) and `Continue` (primary, fills remaining width).

## Behavior
- The right panel swaps content for each step (email, code, year/area, interests, suggestions) using the mobile step content; the left panel stays.
- Inline validation; back keeps answers; resend after 60s.
- Skipping follows shows the “Follow later from Clubs and Events” empty state.

## Tablet (768)
Single centered card; the brand panel becomes a top banner.
