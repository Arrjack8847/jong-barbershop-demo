# Jong Barbershop — Cinematic Portfolio Concept

An **unofficial** mobile-first client-pitch concept for Jong Barbershop. Not commissioned, endorsed, or the official business website.

## Run locally
Download or clone the repository, then open `index.html` in Chrome, Edge, Safari or Firefox. No npm, build, backend, auth or API keys.
Keep `assets/` beside `index.html`. Example photos and Google Fonts require internet. CSS fallback surfaces still render offline.

PowerShell:
```powershell
git clone https://github.com/Arrjack8847/jong-barbershop-demo.git
cd jong-barbershop-demo
Start-Process .\index.html
```

## Four sections
1. **Cinematic hero** — logo, BM/EN controls, photo (explicitly illustrative), staggered headline and two anchored CTAs.
2. **Haircut inspiration** — labeled reference imagery, touch swipe and CSS scroll snapping on mobile, editorial desktop grid, keyboard arrows and index.
3. **Shop experience concept** — atmospheric editorial images clearly labeled as placeholders, not Jong's real staff or interior.
4. **Contact / closing CTA** — prominent demo-only contact disclosure and Jong-branded footer.

On phones/tablets a full-screen menu provides Escape handling, focus trapping between visible menu controls, focus return, and scroll lock.

## Implementation
- `index.html`: four semantic sections; links are local anchors. No inline CSS or scripts.
- `assets/experience.css`: theme tokens, mobile/desktop responsive rules, menu, image and reveal motion.
- `assets/experience.js`: BM/EN translation dictionaries, persistence, menu logic, gallery position and scroll reveals.
- `assets/jong-barbershop-logo.jpg`: existing supplied Jong logo image, retained without reworking artwork.
- Vanilla HTML/CSS/JS only. No Lovable, frameworks, animation dependencies or booking/payment flow.

## Accessibility / performance
- Language defaults to BM; EN is fully translated including labels and metadata. Preference persists when storage is available, including `file://` when permitted.
- Native gallery touch scrolling and contact `<details>` function without JavaScript. Animated effects degrade gracefully and respect `prefers-reduced-motion`.
- Section reveals use IntersectionObserver, not scroll-loop animation. No loading screen.

## Authenticity and verification
**Business contact is intentionally disabled**. The previous demo contained an unverified number, address and WhatsApp/Maps links; those were removed. `CONTACT` in `assets/experience.js` centralizes empty/unverified contact configuration. Do not activate links until the owner verifies them.

The uploaded logo is the only Jong-specific image asset used. No approved real haircut, barber-at-work, red-wall interior, storefront or shop photograph was available in this repository. Unsplash photos are explicitly illustrative and must not be described as Jong's work or premises.

Before official deployment: obtain owner approval, licensed original photos, verified contact/location/services/hours and permission to use branding. Do not remove the portfolio disclaimer without authorization.

## Demo constraints
No fabricated prices, hours, services, reviews, customer counts, credentials, history, booking system or official affiliation.
