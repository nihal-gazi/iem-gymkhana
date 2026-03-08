import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer            from "../components/layout/Footer";
import InteractiveMesh   from "../components/layout/InteractiveMesh";
import RecentCarousel    from "../components/layout/RecentCarousel";
import EventCard         from "../components/layout/EventCard";
import EventDetailModal  from "../components/layout/EventDetailModal";
import { ALL_EVENTS, EVENTS_INITIAL_SHOW } from "../data/eventsData";

export default function Events() {
  const [showAll,       setShowAll]       = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const sorted  = [...ALL_EVENTS].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );
  const visible = showAll ? sorted : sorted.slice(0, EVENTS_INITIAL_SHOW);
  const hasMore = sorted.length > EVENTS_INITIAL_SHOW;

  return (
    <>
      <div style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
        fontFamily: "'Orbitron', sans-serif",
        background: "#ffffff",
        position: "relative",
        /*
          overflowX hidden stops any child from widening the page.
          overflowY stays as default (scroll) so the page scrolls normally.
        */
        overflowX: "hidden",
        overflowY: "visible",
      }}>

        <InteractiveMesh />

        <h1 style={{
          textAlign: "center",
          fontSize: "44px",
          color: "#7A1212",
          marginBottom: "52px",
          letterSpacing: "3px",
          position: "relative",
          zIndex: 1,
        }}>
          EVENTS
        </h1>

        <div style={{ position: "relative", zIndex: 1 }}>
          <RecentCarousel />
        </div>

        <div style={{ maxWidth: "900px", margin: "auto", position: "relative", zIndex: 1 }}>

          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "28px",
          }}>
            <span style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#7A1212",
              textTransform: "uppercase",
            }}>
              All Events
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(192,57,43,0.25)" }} />
            <span style={{ fontSize: "11px", color: "rgba(192,57,43,0.5)", letterSpacing: "1px" }}>
              {sorted.length} total
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {visible.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>

          {hasMore && !showAll && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: "center", marginTop: "36px" }}
              >
                <button
                  onClick={() => setShowAll(true)}
                  style={{
                    background: "transparent",
                    border: "1.5px solid #C0392B",
                    color: "#7A1212",
                    padding: "12px 36px",
                    borderRadius: "50px",
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    cursor: "pointer",
                    textTransform: "uppercase",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#C0392B";
                    e.currentTarget.style.color      = "#fff";
                    e.currentTarget.style.boxShadow  = "0 8px 24px rgba(192,57,43,0.35)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color      = "#7A1212";
                    e.currentTarget.style.boxShadow  = "none";
                  }}
                >
                  Show More — {sorted.length - EVENTS_INITIAL_SHOW} more events
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      <Footer />

      <EventDetailModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}