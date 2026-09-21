# 01 Onboarding — Mobile (390 × 800)

**Goal:** verify a BC student and personalise their feed in under a minute. One decision per screen. No bottom tab bar or header navigation during onboarding (`data-nav="none"`).
**Style:** LinkedIn-style profile setup. See [style-guide.md](style-guide.md).

Progress: a 5-segment bar in the header of steps 2–5 (`.progress`), with a back button (`.iconbtn.plain`) on the left.

## Screen 1 — Welcome + email
- **Hero** (240px, `g1` gradient, content bottom-left): glass chip “Boston College students only”; Display headline “Find your BC in a minute.” (32 / 800, white).
- **Form:** `BC email` input (prefilled `jdoe27@bc.edu`); helper line with shield icon: “We only accept bc.edu addresses. No spam, ever.”
- **Primary:** `Send my code →` (block).
- **Footer:** “By continuing you agree to the Community Guidelines” (caption, centered).
- **Interaction:** tapping Send shows toast “Code sent to jdoe27@bc.edu”.
- **Validation:** non-bc.edu addresses show inline error under the field.

## Screen 2 — Verify code (error state shown)
- Progress 2/5. H1 “Enter your code”; subtext “We sent 6 digits to jdoe27@bc.edu”.
- **Code entry:** six boxes, 22 / 800 centered digits; filled with `4 8 1`.
- **Error banner** (`.state.err`, x icon): “That code didn’t match. Check your spam folder or resend.”
- **Resend:** link “Resend code in 0:42” (enabled after 60s).
- **Primary:** `Verify` (block, pinned to bottom).

## Screen 3 — Class year + area
- Progress 3/5. H1 “Where are you at BC?”; subtext “Powers your local feed. Only visible to BC students.”
- **Class year** chips (single select): 2026, 2027, 2028, **2029 (on)**, Grad.
- **Campus area** chips: **Upper (on)**, Lower, Newton, Off-campus.
- **Residence hall** select, prefilled from area (Walsh Hall / Edmond’s Hall).
- **Primary:** `Continue`.

## Screen 4 — Interests
- Progress 4/5. H1 “Pick 3 or more interests”; subtext “We’ll tune Home, clubs and events to you.”
- **Chips (multi-select, wrap):** Live music ✓, Running ✓, CS ✓, Theatre, Service, Ski, Finance, Photography, Pre-med, Intramurals, Entrepreneurship. Music, running, code, camera and ball chips carry icons.
- Counter “3 selected”; **Primary:** `See my BC` (disabled below 3 selections).

## Screen 5 — Suggested + done
- Progress 5/5. H1 “You’re in, Jordan.”; subtext “Here’s what matches you. Follow to fill your feed.”
- **Club card:** `g3` banner with run icon; “BC Running Club” + green badge “98% match”; “214 members · Sat 9am at the Reservoir”; `+ Follow` (secondary, small).
- **Event card:** `g1` banner with music icon; “Acoustic Night at The Rat”; “Tonight 7pm · 42 going · Free”; `RSVP` (secondary, small).
- **Primary:** `Go to Home` (gold, block) → Home.
- **Skip:** link “Skip, I’ll follow later from Clubs and Events” → Home with empty-follow state.

## States
- Back keeps all previous answers.
- Code error → resend available after cooldown.
- Skipping follows leads to a Home empty state pointing to Events and Clubs.
