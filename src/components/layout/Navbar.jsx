import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const brick = "#C0392B";
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Clubs", path: "/clubs" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
        fontFamily: "'Orbitron', sans-serif",
        position: "relative",
        zIndex: 20
      }}
    >

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          width: "92%",
          maxWidth: "1200px",
          padding: "18px 36px",
          background: brick,
          borderRadius: "22px",
          border: "1px solid black",
          boxShadow: "0 12px 28px rgba(0,0,0,0.35)",
          position: "relative"
        }}
      >

        {/* LOGO */}

        <img
          src="/IEM_logo.png"
          alt="IEM Gymkhana Logo"
          style={{
            height: "65px",
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
          }}
        />

        {/* NAV LINKS CENTERED */}

        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "40px"
          }}
          className={`nav-links ${open ? "open" : ""}`}
        >

          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              style={{
                textDecoration: "none",
                color: "#f5f5f5",
                fontWeight: "600",
                fontSize: "18px",
                letterSpacing: "1.5px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#ffffff";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#f5f5f5";
                e.target.style.transform = "scale(1)";
              }}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* MOBILE MENU BUTTON */}

        <div
          onClick={() => setOpen(!open)}
          style={{
            marginLeft: "auto",
            display: "none",
            fontSize: "30px",
            color: "#fff",
            cursor: "pointer"
          }}
          className="menu-button"
        >
          ☰
        </div>

      </nav>

      <style>
        {`
        @media (max-width: 768px) {

          .menu-button {
            display: block;
          }

          .nav-links {
            position: absolute;
            top: 80px;
            right: 0;
            left: auto;
            transform: none;
            background: ${brick};
            flex-direction: column;
            gap: 22px;
            padding: 24px;
            border-radius: 16px;
            border: 1px solid black;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }
        }
        `}
      </style>

    </div>
  );
}