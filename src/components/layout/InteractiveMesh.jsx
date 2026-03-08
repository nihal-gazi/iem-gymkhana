import { useState, useEffect } from "react";

export default function InteractiveMesh() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Base hex grid */}
      <svg style={{ position:"fixed", inset:0, width:"100%", height:"100%",
        opacity:0.35, pointerEvents:"none", zIndex:0 }}>
        <defs>
          <pattern id="hex" width="120" height="104" patternUnits="userSpaceOnUse">
            <polygon points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none" stroke="#D84343" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex)" />
      </svg>

      {/* Darker mesh near cursor */}
      <svg style={{ position:"fixed", inset:0, width:"100%", height:"100%",
        pointerEvents:"none", zIndex:0,
        maskImage:`radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)`,
        WebkitMaskImage:`radial-gradient(260px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)` }}>
        <defs>
          <pattern id="hexHover" width="120" height="104" patternUnits="userSpaceOnUse">
            <polygon points="60,2 110,28 110,76 60,102 10,76 10,28"
              fill="none" stroke="#B71C1C" strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexHover)" />
      </svg>

      {/* Cursor glow */}
      <div style={{ position:"fixed", left:pos.x - 120, top:pos.y - 120,
        width:"240px", height:"240px", borderRadius:"50%",
        pointerEvents:"none", zIndex:0,
        background:"radial-gradient(circle, rgba(192,57,43,0.25) 0%, rgba(192,57,43,0.12) 40%, transparent 70%)",
        filter:"blur(40px)" }} />
    </>
  );
}