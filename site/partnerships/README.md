# the partner page

The E.R.G.O block is built from [`ergo.json`](ergo.json). Edit the JSON. A deploy overwrites `index.html`, so changes there disappear.

Rather send the wording than edit the file? Email `ckazros@owaua.com`.

`name` is the heading, `meta` the small line under it, `mark` the avatar path. `intro` and `note` are the paragraphs. `commands_summary` is the collapsible label, `commands_note` sits above the list, and `groups` is the command groups in order.

A group is `{ "title": "money", "commands": [ { "cmd": "!shop", "desc": "browse the shop" } ] }`. Add one to add a group or a command. Delete the object to remove it. Keep the JSON valid.

Wrap anything that should look like code in backticks, like `` `!menu` ``. Write `<page>` as plain text.

From the repo root, `python3 scripts/render-partnerships.py` rebuilds the page so you can open it and look.
