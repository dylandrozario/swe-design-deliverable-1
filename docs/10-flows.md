# 10 Core Flows

Three journeys that prove the product. Each is 5 steps or fewer, at most 3 taps from Home, with one primary action per screen. Applies to both mobile and desktop; screen specs are linked.

## A. Events — Tonight → RSVP → calendar (returning student)
| # | Step | Detail |
|---|---|---|
| 1 | Home | Tonight flyers are the first thing shown ([Home mobile](02-home-mobile.md)) |
| 2 | Open event | Tap the flyer |
| 3 | I’m going | Sticky RSVP button ([Events mobile](04-events-mobile.md)) |
| 4 | Confirmed | Toast “You’re in. Added to your calendar” + add-to-calendar |
| 5 | My calendar | RSVPs and club meetings combined |

Taps: Home (0) → open (1) → RSVP (2) → add (3). States: going, full → waitlist, error → retry.

## B. Clubs — Freshman finds a club → first meeting
| # | Step | Detail |
|---|---|---|
| 1 | Clubs | “For you” directory ([Clubs mobile](05-clubs-mobile.md)) |
| 2 | Club page | Banner, members, upcoming events |
| 3 | Join | One tap |
| 4 | Welcome | First meeting surfaced |
| 5 | Home + calendar | Both updated |

Empty state: no matches → clear filters.

## C. Market — List → message → sold (seller)
| # | Step | Detail |
|---|---|---|
| 1 | Create | Photos first ([Market mobile](06-marketplace-mobile.md)) |
| 2 | Post | Under 60 seconds, safe-spot preset required |
| 3 | Inbox | Verified buyer inquiry ([Messages mobile](07-messaging-mobile.md)) |
| 4 | Meet + sold | On campus; mark as sold |
| 5 | Rate | Rating prompt |

## Key decisions
1. Desktop navigation lives in a left sidebar (Home, Events, Market, Clubs, Notifications, Profile) and messages float bottom-right, Instagram-style, with All / Market / Clubs filters.
2. One sticky primary action per detail screen (RSVP, Join, Message seller).
3. Templates and presets replace typing (event templates, safe-spot list, price defaults).
4. Digests and rate limits keep clubs from spamming.
5. Verified badge plus campus meetup spots build trust.
6. The calendar unifies RSVPs and club meetings.
7. Events “View more” opens an infinite list with filters, keeping the overview scannable.

## Risks and first tests
- **Club spam** → 1 announcement per week, digest default.
- **Scams** → verified-only DMs, report and block, safe spots.
- **Cold start** → seed Welcome Week and Game Day events; recruit 10 officer clubs.
- **Test plan:** 5 freshmen, 5 officers, 5 sellers. Measure success, time and taps. Iterate filter labels and safe-spot presets first.
