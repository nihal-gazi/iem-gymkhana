import { useState, useEffect } from "react";

const InteractiveMesh = () => {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* BASE HEX GRID */}

      <svg
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
          pointerEvents: "none",
          zIndex: 0
        }}
      >
        <defs>
          <pattern
            id="hex"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none"
              stroke="#00d9ff"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* INTERACTIVE GLOW GRID */}

      <svg
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,

          maskImage: `radial-gradient(
            260px circle at ${pos.x}px ${pos.y}px,
            white,
            transparent 70%
          )`,
          WebkitMaskImage: `radial-gradient(
            260px circle at ${pos.x}px ${pos.y}px,
            white,
            transparent 70%
          )`
        }}
      >
        <defs>
          <pattern
            id="hexGlow"
            width="120"
            height="104"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none"
              stroke="#00eaff"
              strokeWidth="1.4"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#hexGlow)" />
      </svg>

      {/* SOFT GREY PARTICLES (CHANGED FROM WHITE) */}

      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(200,200,200,0.45) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
          opacity: 0.25,
          pointerEvents: "none",
          zIndex: 0
        }}
      />
    </>
  );
};

export default InteractiveMesh;