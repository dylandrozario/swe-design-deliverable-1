# 07 Messages — Mobile (390 × 800)

**Goal:** a verified-only inbox with marketplace context and safety built in, and a quick way to start something new.
**Style:** LinkedIn-style inbox; Marketplace-style listing context in threads. See [style-guide.md](style-guide.md). On mobile, Messages opens from the chat icon in the Home header (no tab bar slot; the Home tab stays highlighted).

## Screen 1 — Inbox
- **Header:** “Messages” title · compose (plus) icon button → opens the **New chat** sheet.
- **Filter tabs** (underline, functional): **All** · Market · 2 · Clubs · 2. Selecting a tab shows only that thread type.
- **Thread list** (one row per thread: avatar, name, preview, right-side indicator):
  - Sarah K. + verified — “Mini-fridge · ‘Still available? Can meet at O’Neill?’” — unread dot. *(Market)*
  - Running Club chat — “Coach: ‘Sat 9am Reservoir, rain or shine’” — gold count badge “14”. *(Club)*
  - Mike T. + verified — “Textbook · ‘Sounds good, see you at Walsh’”. *(Market)*
  - Photography Club — “Shoot signups open, 12 spots”. *(Club)*

## New chat sheet
Bottom sheet opened from the plus icon:
- **Segmented control:** Direct message (on) / Group chat.
- **To** search input.
- **Suggested connections:** checkbox rows (avatar + name) drawn from accepted connections only — the same pool as [Following](08-profile-mobile.md#following) and the suggested-people step in onboarding.
- **Group name** input, used only when Group chat is selected.
- Safety line: “You can only message accepted connections” with a link into the Following tab.
- **Primary:** `Start chat`.

## Screen 2 — Thread (Sarah K., Mini-fridge)
- **Header:** back · avatar SK · “Sarah K.” + verified, “Usually replies in ~1h” · more (⋯) icon button (report, block).
- **Pinned listing card:** 48px `g2` thumb, “Mini-fridge · $40”, “Available · O’Neill lobby”.
- **Safety banner** (green): “Meet on campus. Don’t share your phone number or payment info outside Turma.”
- **Bubbles:** them “Is pickup Friday possible?”; me “Yes! O’Neill lobby at 5pm?”; them “Perfect, see you then.”
- **Quick replies (chips):** O’Neill lobby (pin, inserts safe spot), “Still available?”, “Lowest price?”.
- **Input bar:** pill text field “Message” + send icon button.

## Behavior
- Sold and rating prompts appear in-thread after a meetup.
- Club chats are moderated and muted by default.
- Only verified students, and only accepted connections, can start or receive a DM — enforced the same way in the New chat sheet (only connections are listed) and per Critical Requirement #7.
