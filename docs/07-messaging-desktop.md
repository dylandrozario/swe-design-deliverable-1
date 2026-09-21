# 07 Messages — Desktop (1280)

**Style:** two-pane messenger. Shell per [style-guide.md](style-guide.md#desktop-frame) (sidebar + top bar). The floating message dock is **not** shown here because this page is the full inbox. On every other desktop screen, the dock is the entry point into this page.

## Layout: `260px | 1fr`, no padding or gap, min-height 520

### Left pane: conversation list
- H2 “Messaging”.
- **Filter** (segmented, functional): **All** · Market · Clubs.
- Thread rows (avatar, name, preview): Sarah K. — Mini-fridge $40 (selected row tint, unread dot) *(Market)*; Running Club — 14 new *(Club)*; Mike T. — Textbook $35 *(Market)*; Photography Club — Shoot signups open *(Club)*.

### Right pane: thread
- **Header:** “Sarah K.” + verified · `Mark as sold` (gold, small, check icon).
- **Listing card:** 64px art, “$40 · Mini-fridge”, “Available · meet at O’Neill lobby”.
- **Bubbles:** them “See you at 5. Should I bring a dolly?”; me “Yes please! I’ll meet you at the front desk.”
- **Composer:** chips `Insert safe spot` (pin) and `Suggest another time`; text input + `Send` (send icon).

## Message dock (all other desktop pages)
Bottom-right pill “Messages” with unread badge; expands to a 340px panel with the same **All / Market / Clubs** filter and thread list. Each row links here.

## Behavior
- Filters hide non-matching threads instantly in both the inbox and the dock.
- Sold flow → rating prompt. Report and block available from the thread menu.
- Tablet 768: the list overlays the thread.
