# Jong Barbershop — Final Cinematic Portfolio Demo

Unofficial client-pitch demo, not Jong Barbershop's commissioned or official website.

## Preview
Open `index.html` in a modern browser. No npm, build tools, frameworks, servers or keys required. Google Fonts load only if online.

## Branch
Developed from `feat/cinematic-four-section-demo-20261025` and brought together with the ten photos added to `main` in commit `ac9804ae`.

## Sections
1. **Cinematic hero** — authentic Jong haircut photo, staggered BM/EN headline, two CTAs and subtle light-reflection.
2. **Haircut gallery** — six supplied photographs, swipe/scroll-snap on mobile, three-column desktop gallery and accessible tap-to-enlarge dialog with keyboard controls.
3. **Jong shop experience** — supplied barber-at-work and interior images.
4. **Walk-in / contact** — storefront photo, exact supplied address, Google Maps directions, WhatsApp and footer.

## Mobile floating CTA
- Red, 54px tall, maximum 360px wide and 16px minimum side margin.
- Displays only after the hero CTA scrolls away and before the closing section; hidden while menu/viewer is open.
- Diagonal specular shine: 8.5-second cycle with an approximately 2.5-second visible sweep, then a quiet pause. The hero photo and headline also animate more slowly. Reduced-motion users see no sweeps.
- **Live directions link:** The user supplied the exact Jong Barbershop Google Maps place. All `Dapatkan Arah` / `Get Directions` buttons link to it directly.
- The user confirmed WhatsApp **+60 18-985 4070**. WhatsApp buttons open `wa.me/60189854070` with a BM/EN enquiry message. The verified map destination and number are centralized in `CONTACT` in `assets/experience.js`.

## Media
The files `photo_1_2026-10-25_12-19-41.jpg` through `photo_10_2026-10-25_12-19-41.jpg` are the ten photos supplied for this demo. Photos are used directly from the repository root. The current photo ordering assumes the files were uploaded in the same order as the supplied set; **visually verify crops and placement** before client presentation.
- Hero: photo_8
- Gallery: photos_3, _4, _6, _7, _9, _10
- Shop/barber: photos_1 and _2
- Walk-in closing backdrop: photo_5
- Existing logo: `assets/jong-barbershop-logo.jpg`

Only use original photos for official publication with owner's permission and the appropriate consent for identifiable customers.

## Core files
- `index.html`: four sections, photograph viewer and floating CTA markup
- `assets/experience.css`: theme, responsive layout, gallery viewer and CSS-only light reflection
- `assets/experience.js`: BM/EN, menu, gallery, photo viewer, CTA visibility and demo contact safety

## Quality
- Existing BM/EN translations and accessible mobile navigation are retained.
- No prices, claimed hours, reviews, counts or business credentials are invented. WhatsApp +60 18-985 4070 was confirmed by the user.
- Walk-ins were confirmed in the owner's conversation. The user provided the business address: **No 24, 25, Jalan Prima Utama 5/6, Taman Puchong Prima, 47100 Puchong, Selangor**.
- Motion respects `prefers-reduced-motion`.
- No heavy animation libraries, video auto-play, backend or artificial loading screen.

## Important final QA (not yet browser-tested)
Open the branch on mobile and at 320, 375, 390, 430, 768, 1024 and 1440px. Confirm photo ordering and crops, typography, BM/EN translation and WhatsApp prefill, exact maps destination, mobile menu, image dialog and Escape, slower light sweep, floating CTA visibility, safe areas, reduced motion and browser console.

The code has static checks, but actual screenshot/device QA is still required.

## Contact and publishing caveats
These business details were supplied and confirmed in conversation, but this is still an unofficial client-pitch demo. Do not imply the business owner commissioned the website or approved customer images. Obtain permissions before a public/official release.
