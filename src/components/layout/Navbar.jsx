import { useState, useId } from 'react';
import { NavLink } from 'react-router-dom';



const NAV_ITEMS = [
  { label: 'Home',      to: '/' },
  { label: 'Societies', to: '/societies' },
  { label: 'Events',    to: '/events' },
  { label: 'Members',   to: '/members' },
  { label: 'FAQ',       to: '/faq' },
  { label: 'Contact',   to: '/contact' },
];


// ─────────────────────────────────────────────────────────────
//  so this i had this cool idea
// generate a vector noise map
// capture whats behind a div
// apply this vector displacement to create distortion
// apply blur and yea
// also it gives different distortion everytime user loads - its lightweight and cool
// ─────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
//  CONFIG — only change these two values to tune the effect
// ─────────────────────────────────────────────────────────────────────────────
const DISTORTION_INTENSITY = 18;   // max pixel warp (try 4–18)
const NOISE_FREQUENCY      = 0.008; // spatial scale of warp (try 0.008–0.04)

// ─────────────────────────────────────────────────────────────────────────────
//  Generate a random seed once per page load.
//  We perturb baseFrequency slightly per-axis to break symmetry.
// ─────────────────────────────────────────────────────────────────────────────
const SEED_X = (Math.random() * 1000 | 0);
const SEED_Y = (Math.random() * 1000 | 0);
const FREQ_X = (NOISE_FREQUENCY + (Math.random() - 0.5) * 0.006).toFixed(4);
const FREQ_Y = (NOISE_FREQUENCY + (Math.random() - 0.5) * 0.006).toFixed(4);



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Unique IDs for SVG filter refs — safe even with multiple Navbar instances
  const uid        = useId().replace(/:/g, '');
  const filterId   = `nd-${uid}`;   // noise-distortion filter
  const clipId     = `nc-${uid}`;   // clip-path for the pill shape

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/*
        ── Hidden SVG defs ───────────────────────────────────────────────
        Two separate filters:
          1. `filterId`  — feTurbulence → feDisplacementMap
             This is applied to .navbar-backdrop which sits behind all content.
             The backdrop div has `backdrop-filter: blur(...)` in CSS; the SVG
             filter then warps the *result* of that, creating distorted glass.

        Note: browsers apply SVG filter AFTER backdrop-filter compositing,
        so the warp truly distorts the already-blurred background capture.
      */}
      <svg
        width="0" height="0"
        style={{ position: 'absolute', pointerEvents: 'none', overflow: 'hidden' }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id={filterId}
            x="-2%" y="-20%"
            width="104%" height="140%"
            colorInterpolationFilters="sRGB"
          >
            {/*
              feTurbulence generates the noise field.
              type="turbulence" gives Perlin-style smooth gradients.
              seed is randomised per page load via the module-level constants.
              numOctaves=3 gives good detail without being expensive.
            */}
            <feTurbulence
              type="turbulence"
              baseFrequency={`${FREQ_X} ${FREQ_Y}`}
              numOctaves="3"
              seed={SEED_X}
              result="noise"
            />

            {/*
              feDisplacementMap uses the noise as a vector field.
              R channel → X displacement, G channel → Y displacement.
              scale = DISTORTION_INTENSITY controls max pixel shift.
            */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={DISTORTION_INTENSITY}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* ── Positioning shell ── */}
      <div className="navbar-shell">
        <nav className="navbar">

          {/*
            .navbar-backdrop is a full-size absolutely-positioned layer.
            It has backdrop-filter (blur + saturate) in CSS, PLUS the SVG
            displacement filter applied via `filter` property.
            This is the only element that gets warped — brand/links sit above it
            untouched and perfectly readable.
          */}
          <div
            className="navbar-backdrop"
            style={{ filter: `url(#${filterId})` }}
            aria-hidden="true"
          />

          {/* Brand */}
          <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
            <span className="navbar-brand-dot" />
            IEM Gymkhana
          </NavLink>

          {/* Desktop links */}
          <ul className="nav-links">
            {NAV_ITEMS.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>

        </nav>
      </div>

      {/* ── Mobile drawer ── */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}