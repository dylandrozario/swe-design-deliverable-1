# 07 Messages — Desktop (1280)

**Style:** two-pane messenger. Shell per [style-guide.md](style-guide.md#desktop-frame) (sidebar + top bar). The floating message dock is **not** shown here because this page is the full inbox. On every other desktop screen, the dock is the entry point into this page.

## Layout: `260px | 1fr`, no padding or gap, min-height 520

### Left pane: conversation list
- H2 “Messaging” · plus icon button → opens the **New chat** modal.
- **Filter** (segmented, functional): **All** · Market · Clubs.
- Thread rows (avatar, name, preview): Sarah K. — Mini-fridge $40 (selected row tint, unread dot) *(Market)*; Running Club — 14 new *(Club)*; Mike T. — Textbook $35 *(Market)*; Photography Club — Shoot signups open *(Club)*.

### Right pane: thread
- **Header:** “Sarah K.” + verified · `Mark as sold` (gold, small, check icon).
- **Listing card:** 64px art, “$40 · Mini-fridge”, “Available · meet at O’Neill lobby”.
- **Bubbles:** them “See you at 5. Should I bring a dolly?”; me “Yes please! I’ll meet you at the front desk.”
- **Composer:** chips `Insert safe spot` (pin) and `Suggest another time`; text input + `Send` (send icon).

## Connections view
The left-pane header has a **Messages | Connections · 2** switch (`data-show`/`data-for="msgdesk"`). Choosing Connections swaps the whole frame to:
- **Left pane:** the same switch, then a summary list: Requests (2 waiting, gold badge), Sent (1 pending), Connected (5 people).
- **Right pane:** H2 “Connections” with a “Find people at BC” search on the right, then three cards:
  - **Requests received · 2:** Dana L. ’28 and Theo B. ’29, each with reason line, `Accept` and `Decline`.
  - **Sent · 1:** Nora W. ’27, “Pending · sent 2d ago”, `Cancel`.
  - **Connected · 5:** Mateo J., Amara K., Priya S., Sarah K., Mike T., each with `Message` and a remove (x) button.
  - Rule line: “Only accepted connections can message each other or see connection-only profile details.”
- The Messages side also gains Mateo J. as a direct-message thread, and Sarah K.’s thread header shows “Connected since Oct 3”.

## New chat modal
Centered `.modal`: Direct message / Group chat segmented control, a “To” search field, a checkbox list of accepted connections, a group-name field (group chats only), and `Start chat`. Same fields and logic as the mobile New chat sheet.

## Message dock (all other desktop pages)
Bottom-right pill “Messages” with unread badge; expands to a 340px panel with the same **All / Market / Clubs** filter and thread list. Each row links here.

## Behavior
- Filters hide non-matching threads instantly in both the inbox and the dock.
- Sold flow → rating prompt. Report and block available from the thread menu.
- Only accepted connections appear as New chat candidates — a student can’t message someone who isn’t connected.
- Tablet 768: the list overlays the thread.
