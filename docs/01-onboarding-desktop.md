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
1. Progress bar (3 of 5 filled — shown mid-flow, at the interests step).
2. H1 (30px) “Pick your interests”; subtext “Step 3 of 5 · we’ll suggest clubs and people”.
3. Interest chips (wrap, 10px gap): Live music ✓, Running ✓, Data science, Service, Theatre, Ski.
4. Live suggestion row (card): BC Running Club avatar, name, “Suggested · 214 members”, `Follow` (secondary, small). Updates as chips change.
5. Footer row: `Back` (ghost) and `Continue` (primary, fills remaining width).

## Behavior
- Step 1 replaces the old email-entry form with a single `Continue with your BC Google account` button (`.btn.google`) — Google OAuth restricted to bc.edu is the only sign-in path, so there’s no code-verification screen to lay out.
- Step 2 asks class year plus major (required), second major and minor (both optional); residence hall and campus area are no longer collected anywhere in onboarding.
- The right panel swaps content for each step (sign in, year/major, interests, suggested clubs, suggested people) using the mobile step content; the left panel stays.
- Inline validation; back keeps answers.
- Skipping suggested clubs or suggested people shows a “follow/connect later” empty state pointing to Clubs, Events, or the Following tab on Profile.

## Tablet (768)
Single centered card; the brand panel becomes a top banner.
