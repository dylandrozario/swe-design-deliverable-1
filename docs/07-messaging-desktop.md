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

## Connections view (desktop)
Where a student handles connection requests on desktop. The wireframe page shows it **two ways**: as a switchable state of the inbox frame (`#msgdesk`) and as its own always-visible frame (`#conns-d`, “Desktop · 1280 · Connections”), so it can be reviewed without clicking.

**Ways in**
- The **Messages | Connections · 2** switch in the left-pane header (`data-show`/`data-for="msgdesk"`).
- A gold **Requests · 2** banner (“Dana L. and Theo B.”, arrow) at the top of the inbox list; it stays visible under every All / Market / Clubs filter.
- The gold **Connection requests · 2** row at the top of the Messages dock on every other desktop page (see below), which links to the Connections frame.
- The bell dropdown’s “Dana L. sent you a connection request” row.

**Layout** (`260px | 1fr`, same as the inbox)
- **Left pane:** the switch (Connections selected), then a summary list: Requests (2 waiting, gold badge), Sent (1 pending), Connected (5 people).
- **Right pane:** H2 “Connections” with a “Find people at BC” search on the right, then four cards:
  - **Requests received · 2:** Dana L. ’28 (Economics · 2 mutual friends) and Theo B. ’29 (Running · also in BC Running Club), each with `Accept` (primary, small) and `Decline` (ghost, small).
  - **Sent · 1:** Nora W. ’27, “Pending · sent 2d ago”, `Cancel`.
  - **Connected · 5:** Mateo J., Amara K., Priya S., Sarah K., Mike T., each with `Message` and a remove (x) icon button.
  - **People you may know:** Kai R. ’28 (3 mutual clubs), Lena P. ’27 (also in Photography Club), Omar S. ’29 (Running · 2 mutual friends), each with `+ Connect` — this is how a desktop student sends a request.
  - Rule line (shield): “Only accepted connections can message each other or see connection-only profile details.”

**Outcomes:** Accept adds the person to Connected and unlocks Message and connection-only profile details; Decline removes the request silently; Cancel withdraws a sent request; Connect adds the person to Sent; Remove ends the connection and closes the DM. New requests notify the recipient in-app and by email.

The Messages side also has Mateo J. as a direct-message thread, and Sarah K.’s thread header shows “Connected since Oct 3”.

## New chat modal
Centered `.modal`: Direct message / Group chat segmented control, a “To” search field, a checkbox list of accepted connections, a group-name field (group chats only), and `Start chat`. Same fields and logic as the mobile New chat sheet.

## Message dock (all other desktop pages)
Bottom-right pill “Messages” with unread badge; expands to a 340px panel with the same **All / Market / Clubs** filter and thread list. The first row is always the gold **Connection requests · 2** shortcut (it ignores the filter) and links to the Connections frame; each thread row links here.

## Behavior
- Filters hide non-matching threads instantly in both the inbox and the dock.
- Sold flow → rating prompt. Report and block available from the thread menu.
- Only accepted connections appear as New chat candidates — a student can’t message someone who isn’t connected.
- Tablet 768: the list overlays the thread.
