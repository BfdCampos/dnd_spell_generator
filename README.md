# dnd_spell_generator (retired)

> **This extension has been replaced by a web page.**
> Live site: **https://bfdcampos.github.io/dnd-random-spell/**
> Source (private): https://github.com/BfdCampos/dnd-random-spell

The extension only ran in Chromium browsers that allowed custom extensions. The new site runs anywhere with a browser, no install. Output is identical: a random Player's Handbook spell, formatted as markdown, copied to the clipboard.

This repo is kept as an archive of the original Arc-era build.

---

## Original install instructions (Chrome, unpacked)

### Step 1: Enable Developer Mode
- Open Google Chrome.
- Click on the three-dot menu in the upper right corner.
- Select More Tools, then Extensions.
- Turn on the Developer mode toggle in the top-right corner.

### Step 2: Load the unpacked extension
- Click the **Load unpacked** button.
- Select this directory.

### Step 3: Verify
- The extension appears in your list of installed extensions.
- Click its icon (next to the address bar) to roll a spell.

## Files

- `manifest.json`, `popup.html`, `popup.css`, `popup.js`: the extension
- `spells.json`: the spell list (shared with the new site)
- `dnddice.png`: extension icon
