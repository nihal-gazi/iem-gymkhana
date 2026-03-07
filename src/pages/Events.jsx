import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";

/* INTERACTIVE MESH BACKGROUND */

const InteractiveMesh = () => {

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
      {/* BASE HEX GRID */}

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

      {/* DARKER MESH NEAR CURSOR */}

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

      {/* CURSOR GLOW */}

      <div
        style={{
          position: "fixed",
          left: pos.x - 120,
          top: pos.y - 120,
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          background:
            "radial-gradient(circle, rgba(192,57,43,0.25) 0%, rgba(192,57,43,0.12) 40%, transparent 70%)",
          filter: "blur(40px)"
        }}
      />
    </>
  );
};

export default function Events() {

  const events = [
    "IEMPACT",
    "INNOVACION",
    "MARATHON",
    "FILM FESTIVAL",
    "ALUMNI MEET"
  ];

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          padding: "100px 20px",
          fontFamily: "'Orbitron', sans-serif",
          background: "#ffffff",
          position: "relative",
          overflow: "hidden"
        }}
      >

        <InteractiveMesh />

        {/* TITLE */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "44px",
            color: "#7A1212",
            marginBottom: "70px",
            letterSpacing: "3px",
            position: "relative",
            zIndex: 1
          }}
        >
          EVENTS
        </h1>

        {/* EVENTS */}

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            position: "relative",
            zIndex: 1
          }}
        >

          {events.map((event, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.06,
                y: -4
              }}
              style={{
                background: "#C0392B",
                borderRadius: "18px",
                padding: "28px",
                height: "110px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid black",   // thin border
                boxShadow: "0 8px 20px rgba(0,0,0,0.18)",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#A93226";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(192,57,43,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#C0392B";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.18)";
              }}
            >

              <h2
                style={{
                  fontSize: "22px",
                  color: "#ffffff",
                  fontWeight: "600"
                }}
              >
                {event}
              </h2>

              <motion.span
                whileHover={{ x: 12 }}
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: "#ffffff"
                }}
              >
                &gt;
              </motion.span>

            </motion.div>

          ))}

        </div>

      </div>

      {/* FOOTER */}

      <Footer />

    </>
  );
}