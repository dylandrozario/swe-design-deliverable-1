# 10 Core Flows

Three journeys that prove the product. Each is 5 steps or fewer, at most 3 taps from Home, with one primary action per screen. Applies to both mobile and desktop; screen specs are linked.

## 0. Account — Sign in with Google → profile → Home
| # | Step | Detail |
|---|---|---|
| 1 | Continue with Google | bc.edu accounts only ([Onboarding](01-onboarding-mobile.md)); any other account gets the blocked screen |
| 2 | New or returning? | First login goes to profile setup; every later login goes straight to Home |
| 3 | Year + major(s) | Required (second major and minor optional); Home stays locked until saved |
| 4 | Photo, bio, interests | All optional and editable later from Profile |
| 5 | Home | |

Google supplies name, email and photo; class year and major cannot come from sign-in and are asked once.

## 0b. Connections — Request → accept → message
| # | Step | Detail |
|---|---|---|
| 1 | Send a request | From a profile, “People you may know”, or “Connect to message” on a listing ([Market](06-marketplace-mobile.md)) |
| 2 | They’re notified | Bell dropdown/sheet and email |
| 3 | Accept or decline | Connections → Requests ([Messages](07-messaging-mobile.md#screen-3--connections-idconns-m)) |
| 4 | Unlocked | Message and connection-only profile details ([Profile](08-profile-mobile.md)) |
| 5 | Message | Direct thread; Remove ends the connection and closes the DM |

Cancel withdraws a sent request; Decline removes one silently.

## A. Events — Tonight → RSVP → calendar (returning student)
| # | Step | Detail |
|---|---|---|
| 1 | Home | Tonight flyers are the first thing shown ([Home mobile](02-home-mobile.md)) |
| 2 | Open event | Tap the flyer |
| 3 | I’m going | Sticky RSVP button ([Events mobile](04-events-mobile.md)) |
| 4 | Confirmed | Toast “You’re in. Added to your calendar” + add-to-calendar |
| 5 | My calendar | RSVPs and club meetings combined — now a real page: [Calendar](11-calendar-mobile.md) |

Taps: Home (0) → open (1) → RSVP (2) → add (3). States: going, full → waitlist, error → retry.

## B. Clubs — Freshman finds a club → first meeting
| # | Step | Detail |
|---|---|---|
| 1 | Clubs | “For you” directory ([Clubs mobile](05-clubs-mobile.md)) |
| 2 | Club page | Banner, members, upcoming events |
| 3 | Follow | One tap |
| 4 | Welcome | First meeting surfaced |
| 5 | Home + calendar | Both updated |

Empty state: no matches → clear filters. A student can also start their own club or group instead of joining one — see [Create a club or group](05-clubs-mobile.md#screen-4--create-a-club-or-group-idclub-create).

## C. Market — List → message → sold (seller)
| # | Step | Detail |
|---|---|---|
| 1 | Create | Photos first ([Market mobile](06-marketplace-mobile.md)) |
| 2 | Post | Under 60 seconds, safe-spot preset required |
| 3 | Inbox | Verified buyer inquiry ([Messages mobile](07-messaging-mobile.md)) |
| 4 | Meet + sold | On campus; mark as sold |
| 5 | Rate | Rating prompt |

## Key decisions
0. Messaging is connections-only everywhere; Market sellers included (“Connect to message”). Notifications cover new connection requests, RSVPs to your events and new messages, in-app and by email.
1. Desktop navigation lives in a left sidebar (**Home, Calendar, Events, Market, Clubs, Profile**) plus a Create button (Post / Event / Listing / Club or group); messages float bottom-right, Instagram-style, with All / Market / Clubs filters; notifications are a bell dropdown and settings a gear icon next to the profile picture, not sidebar items.
2. One sticky primary action per detail screen (RSVP, Follow, Message seller) — Events and Market now also have a full web detail page on desktop, not just a mobile screen.
3. Templates and presets replace typing (event templates, safe-spot list, price defaults).
4. Rate limits keep clubs from spamming.
5. Verified badge plus campus meetup spots build trust.
6. The calendar unifies RSVPs and club meetings — it now has its own page and sidebar slot instead of being an unbuilt promise.
7. Events “View more” opens an infinite list with filters, keeping the overview scannable.
8. Any student can start a club or a private group, not only officers; new ones are reviewed before they’re listed (exact verification path still open — see the note on the create form).
9. There is no standalone notifications feed page — each notification links straight to the event, thread or club it’s about.

## Risks and first tests
- **Club spam** → 1 announcement per week.
- **Scams** → verified-only DMs, report and block, safe spots.
- **Cold start** → seed Welcome Week and Game Day events; recruit 10 officer clubs.
- **Unmoderated club/group creation** → review queue before public listing; TBD how quickly recognized-org officers vs. new students get approved.
- **Test plan:** 5 freshmen, 5 officers, 5 sellers. Measure success, time and taps. Iterate filter labels and safe-spot presets first.
