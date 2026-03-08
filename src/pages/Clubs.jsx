import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* INTERACTIVE MESH */

function InteractiveMesh() {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <svg
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.35,
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        <defs>
          <pattern id="hex" width="120" height="104" patternUnits="userSpaceOnUse">
            <polygon
              points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none"
              stroke="#D84343"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      <svg
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          maskImage: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)`
        }}
      >
        <defs>
          <pattern id="hexHover" width="120" height="104" patternUnits="userSpaceOnUse">
            <polygon
              points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none"
              stroke="#B71C1C"
              strokeWidth="1.2"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hexHover)" />
      </svg>
    </>
  );
}

/* EVENTS PAGE */

export default function Events() {

  const societies = [
    { name: "Cultural", path: "/societies/cultural" },
    { name: "Technical", path: "/societies/technical" },
    { name: "Sports", path: "/societies/sports" },
    { name: "Student Welfare", path: "/societies/welfare" }
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 40px",
        fontFamily: "'Orbitron', sans-serif",
        background: "#ffffff",
        position: "relative"
      }}
    >

      <InteractiveMesh />

      <h1
        style={{
          textAlign: "center",
          fontSize: "44px",
          marginBottom: "70px",
          color: "#7A1212",
          letterSpacing: "3px",
          position: "relative",
          zIndex: 1
        }}
      >
        SOCIETIES
      </h1>

      {/* GRID */}

      <div
        style={{
          maxWidth: "700px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",  // 2 CARDS PER ROW
          gap: "35px",
          position: "relative",
          zIndex: 1
        }}
      >

        {societies.map((society, index) => (

          <Link key={index} to={society.path} style={{ textDecoration: "none" }}>

            <div
              style={{
                aspectRatio: "1 / 1",
                background: "#C0392B",
                borderRadius: "18px",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                color: "#fff",
                fontWeight: "600",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: "all 0.25s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.background = "#A93226";
                e.currentTarget.style.boxShadow =
                  "0 14px 35px rgba(192,57,43,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.background = "#C0392B";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.2)";
              }}
            >

              {society.name}

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}