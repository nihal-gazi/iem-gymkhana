import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const brick     = "#C0392B";
const brickDark = "#A93226";

const NAV_LINKS = [
  { name: "Home",    path: "/" },
  { name: "Events",  path: "/events" },
  { name: "Clubs",   path: "/clubs" },
   { name: "members",   path: "/members" },
  { name: "FAQ",     path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);
  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <style>{`
        .iem-nav-wrapper {
          display: flex;
          justify-content: center;
          padding: 20px 16px 0;
          font-family: 'Orbitron', sans-serif;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 900;
        }

        .iem-nav {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 1200px;
          padding: 14px 28px;
          background: ${brick};
          border-radius: 22px;
          border: 1px solid black;
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
          position: relative;
        }

        /* ---- Logo ---- */
        .iem-logo {
          height: 52px;
          cursor: pointer;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .iem-logo:hover { transform: scale(1.07); }

        /* ---- Desktop centred links ---- */
        .iem-links {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 36px;
          align-items: center;
          list-style: none;
          margin: 0; padding: 0;
        }
        .iem-links a {
          text-decoration: none;
          color: rgba(255,255,255,0.82);
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 1.5px;
          transition: color 0.15s, transform 0.15s;
          white-space: nowrap;
          display: inline-block;
        }
        .iem-links a:hover  { color: #fff; transform: scale(1.08); }
        .iem-links a.active { color: #fff; text-decoration: underline; text-underline-offset: 4px; }

        /* ---- Hamburger (hidden on desktop) ---- */
        .iem-burger {
          display: none;
          margin-left: auto;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 38px; height: 38px;
          flex-shrink: 0;
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 10px;
          padding: 0;
        }
        .iem-burger span {
          display: block;
          width: 18px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.2s;
          transform-origin: center;
        }
        .iem-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .iem-burger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .iem-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ---- Mobile dropdown ---- */
        .iem-mobile {
          position: absolute;
          /* sits just below the nav bar, not the viewport */
          top: calc(100% + 8px);
          left: 0; right: 0;
          background: ${brickDark};
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.8);
          box-shadow: 0 16px 40px rgba(0,0,0,0.45);
          /* above the page, below navbar itself */
          z-index: 999;
          overflow: hidden;
          /* closed by default */
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: max-height 0.28s cubic-bezier(0.4,0,0.2,1),
                      opacity    0.22s ease;
        }
        .iem-mobile.open {
          max-height: 400px;
          opacity: 1;
          pointer-events: all;
        }
        .iem-mobile a {
          display: block;
          padding: 15px 28px;
          text-decoration: none;
          color: rgba(255,255,255,0.85);
          font-family: 'Orbitron', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 1.5px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: background 0.15s, color 0.15s;
        }
        .iem-mobile a:last-child { border-bottom: none; }
        .iem-mobile a:hover,
        .iem-mobile a.active {
          background: rgba(255,255,255,0.1);
          color: #fff;
        }

        /* ---- Responsive ---- */
        @media (max-width: 768px) {
          .iem-nav-wrapper { padding: 12px 12px 0; }
          .iem-nav         { padding: 12px 18px; border-radius: 18px; }
          .iem-logo        { height: 42px; }
          .iem-links       { display: none; }
          .iem-burger      { display: flex; }
        }
      `}</style>

      <div className="iem-nav-wrapper">
        <nav className="iem-nav">

          {/* Logo */}
          <img src="/IEM_logo.png" alt="IEM Gymkhana" className="iem-logo" />

          {/* Desktop links */}
          <ul className="iem-links">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={isActive(link.path) ? "active" : ""}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            className={`iem-burger ${open ? "open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>

          {/* Mobile dropdown — child of nav so it's clipped/positioned correctly */}
          <div className={`iem-mobile ${open ? "open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={isActive(link.path) ? "active" : ""}
                onClick={close}
              >
                {link.name}
              </Link>
            ))}
          </div>

        </nav>
      </div>

      {/* Push page content below the fixed navbar */}
      <div style={{ height: "96px" }} />
    </>
  );
}