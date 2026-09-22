# Daily CMO website — draft build (22 Sep 2026)

Static HTML draft of the new dailycmo.net, built from the 15 Sep call, the whiteboard, and the brand/copy rules in Sidekick. Open any `.html` file in a browser. Everything is plain HTML and one CSS file, so sections can be lifted straight into WordPress or GHL.

## Pages

| File | Lives on | Purpose |
|---|---|---|
| `index.html` | WordPress | Homepage. Agency pitch, guide opt-in (funnel page 1), logo strip, Events + Workshops tiles, case studies, FAQ, strategy call band. |
| `agency.html` | WordPress | Full-funnel agency page. Pain, six-step build, two ways to work, all case studies, tools and ownership, FAQ. |
| `events.html` | WordPress | What's on list (Basecamp classes style), formats, Underdog Con block with editions table, speak/sponsor, get notified. |
| `workshops.html` | WordPress | Four workshop cards, why different, testimonials, HRD Corp block, submit-interest form. |
| `about.html` | WordPress | Story (Reuben to write), eight principles, team, numbers, HRD Corp line. |
| `contact.html` | WordPress | Book a call + contact form, direct details, quick routes. WhatsApp bubble stays for now. |
| `newsletter.html` | WordPress | Newsletter page, moved off the homepage. Sample issues link to the blog. |
| `thank-you.html` | GHL | Funnel page 2. Guides confirmation + optional TidyCal booking. |

`assets/site.css` — all styles. `assets/site.js` — mobile nav and form simulation only. `assets/img/` — photos pulled from the Underdog and workshop page archives in Sidekick, resized for web (people: reuben-*, sri-*, claudia-ng, king-quah, faisal-hourani, azlan-malik; events: underdog-*; workshops: workshop-*, faisal-presenting).

## Brand rules applied (from Sidekick/knowledge)

- Inter only. Heavy titles (800), light body (300). White editorial background.
- Blue `#1D27C0`: eyebrows, links, feature tiles. Yellow `#F9DB4A`: only the button you want clicked. Dark `#1A1919`: text, one dark block per page at most.
- Copy: "you" not "we", no em dashes, no exclamation marks, no hype words, RM and local names.
- Content column ~44rem for reading, 72rem for grids.

## What still needs Reuben

Each page ends with a collapsed "Draft notes for Reuben" block listing what is still open on that page. Nothing in the visible copy is marked as placeholder; the notes carry that instead. Summary:

- Case study headline numbers (only myFITBOX has one) and corrections to the one-line descriptions.
- Agency client testimonials.
- Logo bar images (text wordmarks for now).
- Reuben's About story, in his words.
- Newer Reuben headshot; Mira photo.
- Workshop landing page links and next cohort dates.
- Claudia webinar exact time and registration link (23 Sep, same day as Breaking Barriers).
- Further, Faster venue and capacity.
- WhatsApp number to publish; response-time promise.
- Whether the money-back guarantee applies to all four workshops.

## Funnel wiring (homepage → thank-you)

1. Homepage opt-in form (`#guideForm`) → GHL form. Fields: name, email.
2. On submit: GHL sends the PDF; Zapier subscribes the contact to the newsletter (welcome email comes from the newsletter, not GHL).
3. Redirect to `thank-you.html` equivalent in GHL. TidyCal link: `https://tidycal.com/reuben/strategy-call`.
4. Bottom-of-page and contact page call buttons also go straight to TidyCal.

## Links used

- Community button → `https://app.dailycmo.net/` (GHL login, replaces the old "Login" label)
- Blog → `https://blog.dailycmo.net/` · Underdog → `https://underdog.dailycmo.net/` · Replays → `https://dailycmo.net/webinars/`
- Breaking Barriers → `https://go.dailycmo.net/breaking/`
- Workshop landing pages → to add per card

## Facts and where they came from

- Workshop prices, seats, partners: `Sidekick/campaigns/2026-08-*.md`, `2026-09-further-faster-king-quah.md`
- Underdog editions, promise lines, stats: `Sidekick/brands/underdog.md`
- Reuben bio and brand list: WhatsApp Sales System trainer section
- Principles: `Sidekick/knowledge/company-learnings.md`
- Old homepage copy and links: `Sidekick/knowledge/references/homepage-2026-08.html`
