# 01 Onboarding — Mobile (390 × 800)

**Goal:** verify a BC student and personalise their feed in under a minute. One decision per screen. No bottom tab bar or header navigation during onboarding (`data-nav="none"`).
**Style:** LinkedIn-style profile setup. See [style-guide.md](style-guide.md).

Progress: a 5-segment bar in the header of steps 2–5 (`.progress`), with a back button (`.iconbtn.plain`) on the left. Step 1 has no header — just the sign-in hero.

## Screen 1 — Sign in with Google
- **Hero** (280px, `g1` gradient, content bottom-left): glass chip “Boston College students only”; Display headline “Find your BC in a minute.” (32 / 800, white).
- **Primary:** `Continue with your BC Google account` (`.btn.google`, white pill with the Google mark, block). This is the *only* way to create or access an account — Critical Requirement #1 (no separate username/password system).
- **Helper line** (shield icon): “Restricted to @bc.edu addresses. Signing in verifies you instantly — no code, no password, ever.”
- **Footer:** “By continuing you agree to the Community Guidelines” (caption, centered).
- **Interaction:** tapping the button shows toast “Verified jdoe27@bc.edu” — verification is instant because bc.edu domain restriction happens inside the OAuth consent screen itself, so there is no separate email-code step to design or build.

## Screen 2 — Class year, major(s) and minor
- Progress 2/5. H1 “Class year and major”; subtext “Required so we can verify and personalise your feed. Google already gave us your name and photo.” (per the critical requirements note: Google already has name/photo, so onboarding doesn’t re-ask for them.)
- **Class year** chips (single select): 2026, 2027, 2028, **2029 (on)**, Grad.
- **Major** select (required) — the one field the Critical Requirements call mandatory alongside class year.
- **Second major** select (optional) and **Minor** select (optional), side by side — resolves the open “up to two majors / minors?” question by supporting a second major and a minor, both clearly labelled optional so nothing blocks a student with only one major.
- Residence hall and campus area are **not** collected here — dropped from onboarding; hall/area added noise without changing what Home shows a freshman vs. a senior, and location-flavoured content (near-me listings, campus spot names) reads fine from major/year/interests alone.
- **Primary:** `Continue`.

## Screen 3 — Interests
- Progress 3/5. H1 “Pick 3 or more interests”; subtext “We’ll tune Home, clubs and events to you.”
- **Chips (multi-select, wrap):** Live music ✓, Running ✓, CS ✓, Theatre, Service, Ski, Finance, Photography, Pre-med, Intramurals, Entrepreneurship. Music, running, code, camera and ball chips carry icons.
- Counter “3 selected”; **Primary:** `Continue` (disabled below 3 selections).

## Screen 4 — Suggested clubs
- Progress 4/5. H1 “Clubs picked for you”; subtext “Based on your major and interests. Follow to fill your feed.”
- **Club card:** `g3` banner with run icon; “BC Running Club” + green badge “98% match”; “214 members · Sat 9am at the Reservoir”; `+ Follow` (secondary, small).
- **Club card:** Data Science Society — matched on CS major.
- **Event card:** Acoustic Night at The Rat; “Tonight 7pm · 42 going · Free”; `RSVP` (secondary, small).
- **Primary:** `Continue` → Screen 5. **Skip:** link “Skip, I’ll follow later from Clubs and Events”.

## Screen 5 — Suggested people + done
- Progress 5/5 (all filled). H1 “You’re in, Jordan.”; subtext “People at BC who match you. Connect to fill your feed with friends, not just strangers.”
- **Filter chips:** By year (on), By interest, By club — the three signals the suggestions are drawn from.
- **People cards** (avatar, name + class year, match reason, `+ Connect`): Amara K. ’29 (shared club), Mateo J. ’29 (shared interest + 2 mutual clubs), Priya S. ’29 (shared interests).
- **Primary:** `Go to Home` (gold, block) → Home.
- **Skip:** link “Skip, I’ll connect with people later” → Home.

## States
- Back keeps all previous answers.
- Skipping clubs or people leads to a Home empty state, and the skipped step stays reachable later from Clubs, Events or the **Following** tab on your own profile ([Profile](08-profile-mobile.md)).
