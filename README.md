# Mohamed El Araby — Cinematic Portfolio

Full single-page site: Hero → About → Skills → Projects → Experience →
Contact.

Before you deploy, fill in the real values in `src/components/Contact.jsx`
(email, GitHub, LinkedIn are placeholders) and swap the "SCREENSHOT PREVIEW"
panels in `src/data/projects.js` / `ProjectCard.jsx` for real project images
once you have them.

## Run it

npm install
npm run dev

Then open the local URL Vite prints (usually http://localhost:5173).

## What to check

- Portrait: sits right-of-center on desktop, ~65% of the ellipse feathered
  into the black background so the edges disappear (no hard rectangle).
- Entrance: background -> portrait -> title -> subtitle -> metadata -> nav,
  staged over ~1.3s, no bounce.
- Scroll (0-200vh, i.e. two full screens of scroll):
  - 0-20%: hero sits still.
  - 20-35%: title/eyebrow/subtitle lift and fade out, portrait starts a
    small drift (scale/x/y).
  - 45-55%: "I BUILD DIGITAL EXPERIENCES." fades/slides in.
  - 65-80%: that line fades back out, portrait keeps drifting up-and-left.
  - 80-100%: settles, ready to hand off into the About scene.
- Floating tags ("BASED IN EGYPT", "AVAILABLE FOR WORK") sit in the empty
  corners above/beside the portrait and never cross the face; they drift at
  a slower parallax rate than the portrait.
- Custom cursor (desktop only, disabled under prefers-reduced-motion):
  small dot by default, expands over nav links.
- Reduced motion: parallax and scroll drift collapse to static values,
  Lenis smoothing is skipped, and the cursor falls back to the system arrow.

## Design tokens (see src/index.css)

- Background: #050505 / #000 / #0a0a0a
- Text: bone #efece5 (primary), ash #8a8782 (secondary), iron #3d3b38 (muted)
- Accent: blood #2b0808 / blood-glow #5c1010 / blood-bright #7a1414
  (used sparingly — the second line of the name, the scroll-progress bar,
  the atmospheric glow behind the portrait)
- Display type: Anton (large editorial headlines)
- Body type: Inter
- Mono/label type: Space Mono — used for nav, eyebrows, metadata tags and
  the floating info badges, echoing the developer/terminal identity

## Structure

src/
  components/
    Navbar.jsx        fixed nav, scroll-in on load
    Hero.jsx           the 200vh sticky intro scroll scene
    PortraitScene.jsx  portrait + red atmospheric glow, scroll parallax
    FloatingInfo.jsx   floating metadata tags around the portrait
    About.jsx           180vh sticky scene — "WHO AM I?" + line-reveal bio
    Skills.jsx          editorial numbered skill groups (backend/frontend/tools)
    Projects.jsx         wraps the project list
    ProjectCard.jsx       one alternating text/visual scene per project
    Experience.jsx      capability timeline (era labels, not fabricated dates)
    Contact.jsx          closing scene + footer
    CustomCursor.jsx   spring-driven custom cursor (desktop only)
    NoiseOverlay.jsx   subtle film-grain overlay
    ScrollProgress.jsx thin top progress bar
  data/
    projects.js  VCare, the restaurant SaaS, and the LMS API
    skills.js
    experience.js
  assets/portrait.jpg  the supplied portrait, used as-is

Project screenshots are placeholders — there was no real screenshot to use,
so each project scene shows a bordered panel instead of a fabricated image.
Swap in real screenshots via `ProjectCard.jsx` when you have them.
