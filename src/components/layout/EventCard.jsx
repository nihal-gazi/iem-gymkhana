import { motion } from "framer-motion";

export const CATEGORY_COLORS = {
  Flagship:   "#7A1212",
  Innovation: "#A04000",
  Sports:     "#1A5276",
  Cultural:   "#6C3483",
  Community:  "#145A32",
  Technical:  "#1B2631",
  Literary:   "#784212",
};

/**
 * EventCard
 * @param {object}   event    — event object from eventsData
 * @param {number}   index    — position in list (for stagger delay)
 * @param {function} onClick  — called when card is clicked
 */
export default function EventCard({ event, index, onClick }) {
  const accent = CATEGORY_COLORS[event.category] || "#C0392B";

  return (
    <motion.div
      initial={{ opacity:0, y:60 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.5, delay: index * 0.07 }}
      whileHover={{ scale:1.025, y:-3 }}
      onClick={onClick}
      style={{ background:"#C0392B", borderRadius:"18px", padding:0,
        border:"1px solid black", boxShadow:"0 8px 20px rgba(0,0,0,0.18)",
        cursor:"pointer", overflow:"hidden",
        display:"grid", gridTemplateColumns:"6px 1fr" }}
      onMouseEnter={e => {
        e.currentTarget.style.background = "#A93226";
        e.currentTarget.style.boxShadow  = "0 16px 40px rgba(192,57,43,0.4)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "#C0392B";
        e.currentTarget.style.boxShadow  = "0 8px 20px rgba(0,0,0,0.18)";
      }}
    >
      {/* Left accent bar — colour-coded by category */}
      <div style={{ background:accent, borderRadius:"18px 0 0 18px" }} />

      {/* Content */}
      <div style={{ padding:"24px 28px 24px 22px",
        display:"flex", alignItems:"center", justifyContent:"space-between",
        gap:"16px", flexWrap:"wrap" }}>

        {/* Left: badges + title + description */}
        <div style={{ flex:1, minWidth:"200px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"8px" }}>
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px",
              textTransform:"uppercase", padding:"3px 10px", borderRadius:"20px",
              background:"rgba(255,255,255,0.18)", color:"#fff" }}>
              {event.category}
            </span>
            {event.status === "upcoming" && (
              <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"2px",
                textTransform:"uppercase", padding:"3px 10px", borderRadius:"20px",
                background:"rgba(255,255,220,0.25)", color:"#ffe08a" }}>
                Upcoming
              </span>
            )}
          </div>

          <h2 style={{ fontSize:"20px", color:"#ffffff", fontWeight:700,
            letterSpacing:"2px", marginBottom:"5px" }}>
            {event.title}
          </h2>

          <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.75)",
            lineHeight:1.6, margin:0 }}>
            {event.description}
          </p>
        </div>

        {/* Right: date + venue + arrow */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end",
          gap:"6px", minWidth:"140px" }}>
          <span style={{ fontSize:"13px", fontWeight:600,
            color:"rgba(255,255,255,0.9)", letterSpacing:"0.5px" }}>
            {event.dateDisplay}
          </span>
          <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.55)",
            textAlign:"right", lineHeight:1.4 }}>
            {event.venue}
          </span>
          <motion.span
            whileHover={{ x:8 }}
            style={{ fontSize:"22px", fontWeight:700, color:"#fff", marginTop:"4px" }}
          >
            ›
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}