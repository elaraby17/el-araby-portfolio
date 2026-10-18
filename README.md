# Mohamed El Araby — Cinematic Portfolio

Full single-page site: Hero → About → Skills → Projects → Experience →
Contact. Dark black-and-red identity, sticky scroll scenes, Framer Motion +
Lenis smooth scrolling.

## Run it

npm install
npm run dev

Then open the local URL Vite prints (usually http://localhost:5173).

Production build: `npm run build` → `dist/`.

## What to check

- Hero: name + "Laravel Backend / Full-Stack Developer" positioning, View
  Projects / Contact Me CTAs, tech strip, architecture panel (xl+ only).
- Scroll (200vh hero scene): intro lifts out ~20–35%, the backend/full-stack
  statement lands ~45–55%, then hands off to About.
- Reduced motion: Lenis skipped, Framer Motion collapses via
  `MotionConfig reducedMotion="user"`, custom cursor disabled and the system
  cursor stays visible.
- Keyboard: skip link appears on Tab, focus-visible outlines everywhere,
  Escape closes the mobile menu.
- Nav anchors scroll smoothly through Lenis with an 80px offset.

## Design tokens (src/index.css)

- Background: #050505 / #000 / #0a0a0a
- Text: bone #efece5 (primary), ash #9a968f (secondary), iron #57534e
  (borders/muted)
- Accent: blood-text #e05050 (readable red for text/UI), blood-bright
  #7a1414 (decorative glow/underlines only)
- Display: Anton · Body: Inter · Mono: Space Mono

## Structure

src/
  components/
    Navbar.jsx         fixed nav, blur + border on scroll, Escape-closable menu
    Hero.jsx           200vh sticky intro scene + CTAs + architecture panel
    PortraitScene.jsx  portrait + red atmospheric glow, scroll parallax
    FloatingInfo.jsx   floating metadata tags around the portrait
    About.jsx          240vh sticky scene — "WHO AM I?" + line-reveal bio
    Skills.jsx         numbered skill groups (backend/database/frontend/tools)
    Projects.jsx       section header + project list
    ProjectCard.jsx    alternating text/screenshot scene per project
    Experience.jsx     capability timeline (era labels, not fabricated dates)
    Contact.jsx        closing scene + footer
    CustomCursor.jsx   spring-driven custom cursor (desktop only)
    NoiseOverlay.jsx   subtle film-grain overlay
    ScrollProgress.jsx thin top progress bar
  data/
    projects.js   Peak Burger, E-Learning, VCare (real screenshots in public/)
    skills.js
    experience.js
  assets/portrait.jpg

## Still needed from the owner

- Email address + LinkedIn URL for the contact section
- GitHub repo links per project (profile is linked)
- Facebook/Instagram handles (placeholders were removed)
- A 1200×630 `og-image.png` for social sharing
- Live demo/repo URL for VCare
