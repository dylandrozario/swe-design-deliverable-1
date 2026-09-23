# Turma Design Docs

Written specs for the Turma wireframes (HTML in the project root). Each page has a mobile (390 × 800) and desktop (1280) spec. Start with the style guide.

- [Style guide](style-guide.md): colors, type, spacing, components, layout shells, icons, accessibility

| Page | Mobile | Desktop |
|---|---|---|
| 01 Onboarding | [mobile](01-onboarding-mobile.md) | [desktop](01-onboarding-desktop.md) |
| 02 Home | [mobile](02-home-mobile.md) | [desktop](02-home-desktop.md) |
| 04 Events | [mobile](04-events-mobile.md) | [desktop](04-events-desktop.md) |
| 05 Clubs | [mobile](05-clubs-mobile.md) | [desktop](05-clubs-desktop.md) |
| 06 Market | [mobile](06-marketplace-mobile.md) | [desktop](06-marketplace-desktop.md) |
| 07 Messages | [mobile](07-messaging-mobile.md) | [desktop](07-messaging-desktop.md) |
| 08 Profile | [mobile](08-profile-mobile.md) | [desktop](08-profile-desktop.md) |
| 09 Settings | [mobile](09-notifications-settings-mobile.md) | [desktop](09-notifications-settings-desktop.md) |
| 11 Calendar | [mobile](11-calendar-mobile.md) | [desktop](11-calendar-desktop.md) |
| 10 Core flows | [flows](10-flows.md) | (same for both) |

File numbers match the HTML wireframes; there is no 03 (the Discover page was removed) and 11 was added later for Calendar, after the numbering was already set.

## Revision notes (post-Delivery-1 pass)

A round of edits added: a Calendar page and sidebar slot (11); a settings gear + profile-picture link in the desktop top bar and on Profile (mobile); a Following tab on Profile covering people, clubs and groups; general club/group creation (not just from the officer dashboard) with an explicit "create a group chat" toggle and a flagged-open verification-review process; Google OAuth sign-in replacing the email/code onboarding steps, with residence hall and campus area dropped and major/second major/minor added, plus a suggested-people onboarding step; Home feed tabs (All / Friends & following / Suggested) and an interest filter; a New post pop-up/page, a New chat pop-up, and web (desktop) detail pages for both Events and Market, plus a Market "Saved" view and a full desktop create-listing page. The standalone Alerts list page was removed in favor of a notification dropdown (desktop) / sheet (mobile) where every row links straight to what it's about. See each page's spec and [style-guide.md](style-guide.md) for the details.

## Requirements pass

A later pass closed the gaps against the course requirements: a **Connections** view (requests received/sent/connected with accept, decline, cancel, remove) inside Messages; connections-only messaging, including “Connect to message” on Market listings; a required description on event creation; notifications and settings for connection requests, RSVPs to your events and new messages (in-app + email); optional interests and a non-bc.edu sign-in error in onboarding; the first-login vs returning-login routing on the flows page; and a locked profile view for people you’re not connected to.
