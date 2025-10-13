# Rememra Solutions — Starter Website

A sleek, modern one‑page site you can deploy to Vercel or any static host.

## Quick Start
1. Replace `assets/rememra-logo.png` with your real logo (same filename).
2. Open `index.html` and update copy as needed.
3. In `script.js`, set your contact email at the line with `const to = 'hello@rememra.com'`.
4. (Optional) Replace the Tally link and Google Calendar link in `index.html`:
   - `#tallyLink` href -> your Tally URL
   - Booking links already point to your Google Calendar booking page.

## Deploy to Vercel
- Create a new GitHub repo, add these files, and connect the repo in Vercel.
- Framework preset: **Other** (static). Build command: _None_. Output dir: `/`.

## Contact form options
- Current setup uses a `mailto:` fallback (opens the user’s email client).
- For a serverless form, swap to Formspree or a simple Vercel function:
  - Formspree: replace the form’s `submit` handler with a `fetch()` POST.
  - Serverless function: create `/api/contact.js` and POST to it.

## Sections
- **Hero**: headline, subcopy, CTAs, schedule link
- **What we do**: concise feature bullets
- **Pilot**: program details + Tally link
- **Contact**: simple form

---

© Rememra Solutions
