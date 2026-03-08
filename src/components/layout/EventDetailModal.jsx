import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const CATEGORY_COLORS = {
  Flagship:   "#7A1212",
  Innovation: "#A04000",
  Sports:     "#1A5276",
  Cultural:   "#6C3483",
  Community:  "#145A32",
  Technical:  "#1B2631",
  Literary:   "#784212",
};

const HexWatermark = ({ color }) => (
  <svg style={{ position:"absolute", right:"-30px", bottom:"-30px",
    width:"220px", height:"220px", opacity:0.07, pointerEvents:"none" }}
    viewBox="0 0 120 104">
    <polygon points="60,2 110,28 110,76 60,102 10,76 10,28"
      fill="none" stroke={color} strokeWidth="2" />
    <polygon points="60,14 100,34 100,70 60,90 20,70 20,34"
      fill="none" stroke={color} strokeWidth="1.2" />
    <polygon points="60,26 90,40 90,64 60,78 30,64 30,40"
      fill="none" stroke={color} strokeWidth="0.6" />
  </svg>
);

// Webkit scrollbar hide — injected once
const scrollbarStyle = `
  .edm-scroll::-webkit-scrollbar { display: none; }
`;

export default function EventDetailModal({ event, onClose }) {
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open, restore on close
  useEffect(() => {
    if (!event) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [event]);

  const accent = CATEGORY_COLORS[event?.category] || "#C0392B";

  return (
    <AnimatePresence>
      {event && (
        <>
          <style>{scrollbarStyle}</style>

          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
            transition={{ duration:0.22 }}
            onClick={onClose}
            style={{
              position:"fixed", inset:0, zIndex:900,
              background:"rgba(0,0,0,0.72)",
              backdropFilter:"blur(6px)",
              WebkitBackdropFilter:"blur(6px)",
              cursor:"pointer",
            }}
          />

          {/*
            Modal card.
            Centered via: position fixed + inset 0 + margin auto.
            This lets Framer own `transform` for scale/y animation
            without fighting with translate(-50%,-50%) centering.
          */}
          <motion.div
            key="modal"
            className="edm-scroll"
            initial={{ opacity:0, scale:0.88, y:40 }}
            animate={{ opacity:1, scale:1,    y:0  }}
            exit={{   opacity:0, scale:0.92,  y:16 }}
            transition={{ duration:0.32, ease:[0.22, 1, 0.36, 1] }}
            style={{
              position:"fixed",
              inset:0,
              margin:"auto",
              zIndex:901,
              width:"min(680px, 92vw)",
              height:"fit-content",
              maxHeight:"82vh",
              overflowY:"auto",
              overflowX:"hidden",
              WebkitOverflowScrolling:"touch",
              scrollbarWidth:"none",
              borderRadius:"24px",
              border:"1px solid black",
              boxShadow:"0 32px 80px rgba(0,0,0,0.5)",
              fontFamily:"'Orbitron', sans-serif",
              cursor:"default",
            }}
          >
            {/* Header band */}
            <div style={{
              background:"#C0392B",
              padding:"32px 36px 28px",
              position:"relative",
              overflow:"hidden",
            }}>
              <HexWatermark color="#fff" />

              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position:"absolute", top:"18px", right:"18px",
                  width:"34px", height:"34px", borderRadius:"50%",
                  border:"1px solid rgba(255,255,255,0.35)",
                  background:"rgba(255,255,255,0.12)", color:"#fff",
                  fontSize:"18px", cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  lineHeight:1, transition:"background 0.2s",
                  fontFamily:"sans-serif",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.28)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
                aria-label="Close"
              >
                x
              </button>

              {/* Badges */}
              <div style={{ display:"flex", gap:"8px", marginBottom:"16px", flexWrap:"wrap" }}>
                <span style={{
                  fontSize:"10px", fontWeight:700, letterSpacing:"2px",
                  textTransform:"uppercase", padding:"4px 12px", borderRadius:"20px",
                  background:"rgba(255,255,255,0.18)", color:"#fff",
                  border:"1px solid rgba(255,255,255,0.3)",
                }}>
                  {event.category}
                </span>
                {event.status === "upcoming" && (
                  <span style={{
                    fontSize:"10px", fontWeight:700, letterSpacing:"2px",
                    textTransform:"uppercase", padding:"4px 12px", borderRadius:"20px",
                    background:"rgba(255,255,220,0.22)", color:"#ffe08a",
                    border:"1px solid rgba(255,224,138,0.3)",
                  }}>
                    Upcoming
                  </span>
                )}
              </div>

              <h2 style={{
                fontSize:"30px", color:"#fff", fontWeight:700,
                letterSpacing:"3px", marginBottom:"8px", lineHeight:1.15,
              }}>
                {event.title}
              </h2>

              <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.6)", letterSpacing:"1px", margin:0 }}>
                {event.dateDisplay}
              </p>
            </div>

            {/* Body */}
            <div style={{
              background:"#1a0a0a",
              padding:"30px 36px 36px",
              borderRadius:"0 0 24px 24px",
              position:"relative",
            }}>
              {/* Left accent gradient rule */}
              <div style={{
                position:"absolute", left:0, top:0, bottom:0, width:"4px",
                background:`linear-gradient(180deg, ${accent}, transparent)`,
                borderRadius:"0 0 0 24px",
              }} />

              {/* Meta tiles */}
              <div style={{
                display:"grid", gridTemplateColumns:"1fr 1fr",
                gap:"16px", marginBottom:"26px",
              }}>
                {[
                  { label:"Venue", value: event.venue },
                  { label:"Date",  value: event.dateDisplay },
                ].map(item => (
                  <div key={item.label} style={{
                    background:"rgba(192,57,43,0.12)",
                    borderRadius:"12px", padding:"14px 16px",
                    border:"1px solid rgba(192,57,43,0.22)",
                  }}>
                    <div style={{
                      fontSize:"9px", fontWeight:700, letterSpacing:"2px",
                      textTransform:"uppercase", color:"rgba(255,255,255,0.35)",
                      marginBottom:"6px",
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize:"13px", color:"rgba(255,255,255,0.85)",
                      fontWeight:600, lineHeight:1.4,
                    }}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div style={{ marginBottom:"28px" }}>
                <div style={{
                  fontSize:"9px", fontWeight:700, letterSpacing:"2px",
                  textTransform:"uppercase", color:"rgba(255,255,255,0.3)",
                  marginBottom:"10px",
                }}>
                  About This Event
                </div>
                <p style={{
                  fontSize:"15px", color:"rgba(255,255,255,0.78)",
                  lineHeight:1.75, margin:0,
                }}>
                  {event.description}
                </p>
              </div>

              {/* CTAs */}
              <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
                <motion.button
                  whileHover={{ scale:1.04 }}
                  whileTap={{ scale:0.97 }}
                  style={{
                    background:"#C0392B", color:"#fff",
                    border:"1px solid black",
                    padding:"12px 28px", borderRadius:"50px",
                    fontFamily:"'Orbitron', sans-serif",
                    fontSize:"11px", fontWeight:700,
                    letterSpacing:"2px", cursor:"pointer",
                    textTransform:"uppercase",
                    boxShadow:"0 6px 20px rgba(192,57,43,0.4)",
                  }}
                >
                  Register Now
                </motion.button>

                <motion.button
                  whileHover={{ scale:1.04 }}
                  whileTap={{ scale:0.97 }}
                  onClick={onClose}
                  style={{
                    background:"transparent",
                    color:"rgba(255,255,255,0.55)",
                    border:"1px solid rgba(255,255,255,0.15)",
                    padding:"12px 28px", borderRadius:"50px",
                    fontFamily:"'Orbitron', sans-serif",
                    fontSize:"11px", fontWeight:700,
                    letterSpacing:"2px", cursor:"pointer",
                    textTransform:"uppercase",
                  }}
                >
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}