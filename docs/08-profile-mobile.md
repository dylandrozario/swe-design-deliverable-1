# 08 Profile — Mobile (390 × 800)

**Goal:** show who you are at BC; let others message you safely; give a working home base for your RSVPs, clubs, listings and who you follow. Privacy is per field.
**Style:** LinkedIn profile (banner, avatar, verified, tabs); Marketplace tiles for seller listings. See [style-guide.md](style-guide.md).

## Screen 1 — Your profile (`id="following"`, anchor target for the Following tab)
- **Banner:** 130px `g1` strip, no header bar. Tab bar: Home highlighted.
- **Identity:** 96px avatar “JD” overlapping the banner; H1 “Jordan D. ’29” + verified; “CS major · Econ minor · Class of 2029” (residence hall is no longer collected, so it’s gone from here too).
- **Bio:** “Freshman looking for running buddies and an Econ study group.”
- **Interest chips:** Running (on), Live music (on), CS.
- **Actions:** `Edit profile` (secondary → Screen 2), share icon button, and a **gear (settings)** icon button → [Settings](09-notifications-settings-mobile.md). This, plus the gear next to the profile picture on desktop, is how settings are reached “via PFP or sidebar”.
- **Tabs (now functional, swap real content via show/hide):** RSVPs · 2 (on) · Clubs · 3 · Listings · 2 · **Following** (new).
  - **RSVPs:** date-tile rows (FRI 17 Acoustic Night, SAT 18 Running meetup) + `Add all to Google or Apple Calendar` + a link to the full [Calendar](11-calendar-mobile.md) page.
  - **Clubs:** the three clubs you belong to, with your role (Officer/Member) and a `Leave` action, plus `Start another club or group`.
  - **Listings:** your active and sold marketplace listings with inquiry counts and `Mark sold`, plus `Post a listing`.
  - **Following:** the answer to “where do I see who I follow?” — a **People** list (accepted connections, with `Remove`) and a **Clubs & groups** list (followed clubs, with `Unfollow`), covering all three of clubs, groups and people in one tab.

## Screen 2 — Edit profile (`id="edit-profile"`)
- **Header:** close · “Edit profile” · `Save` link.
- Avatar with `Change photo`.
- **Name** input (from Google, editable).
- **Class year** chips, **Major** select (required), **Second major** and **Minor** selects (optional, side by side).
- **Bio** textarea, **Interests** chips (add/remove).
- **Privacy** list: Bio & interests, Major & minor, Direct messages — each a row that opens a per-field visibility picker (BC only / Everyone / Connections, matching the existing Privacy card pattern).
- **Primary:** `Save changes` → toast “Profile updated”.

## Screen 3 — Seller / other student’s profile (Sarah K.)
Market theme (white canvas). Active tab: **Market**.
- **Header:** back · “Sarah K.” · more (⋯).
- **Identity:** 72px avatar SK; “Sarah K. ’26” + verified; “Communication major · Photography Club”; “**4.9** · 12 sales”.
- **Connection state:** green “Connected” badge under the name. **Actions:** `Message` (primary, chat icon) and `Report` (ghost, shield icon).
- **Listings:** H2 “Listings”; 3 tiles — Mini-fridge $40, Bike $90, Desk lamp $10 with “Sold” badge.
- **Note:** check icon, “Connected since Oct 3. You can see her bio and clubs.”

## Screen 4 — Someone you’re not connected to (Dana L.)
What a student sees on the profile of a verified BC student they haven’t connected with. Only what that student made public is shown.
- **Header:** back · “Dana L.” · more (⋯; Report, Block).
- **Identity:** 72px avatar DL; “Dana L. ’28” + verified; “Economics major · Class of 2028” (major and year are public by default); grey “Not connected” badge.
- **Locked card:** gold lock circle, H2 “Connect to see more”, “Dana’s bio, interests, clubs and RSVPs are only visible to connections.”
- **Actions:** `Connect` (primary, users icon, block) and a disabled ghost button “Message unlocks after Dana accepts”. Report / Block links below.
- Your own People list now holds 5 connections (Mateo J., Amara K., Priya S., Sarah K., Mike T.), each with `Remove`; see [Messages](07-messaging-mobile.md#screen-3--connections-idconns-m) for requests.

## Behavior
- Own profile: edit name, year, major/second major/minor, bio, interests, photo; per-field privacy (BC only / everyone / connections).
- Empty RSVP tab: “No RSVPs yet. See what’s on tonight” → Events.
- Other profiles show only fields the owner allows; report and block always available.
