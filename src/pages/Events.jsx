import { useState } from "react";
import Footer from "../components/layout/Footer";
import InteractiveMesh from "../components/layout/InteractiveMesh";
import EventCard from "../components/layout/EventCard";
import EventDetailModal from "../components/layout/EventDetailModal";
import { ALL_EVENTS } from "../data/eventsData";

export default function Events() {

  const [selectedEvent, setSelectedEvent] = useState(null);

  const sorted = [...ALL_EVENTS].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          padding: "100px 20px 60px",
          fontFamily: "'Orbitron', sans-serif",
          position: "relative",
          overflowX: "hidden"
        }}
      >

        {/* MESH BACKGROUND */}
        <InteractiveMesh />

        {/* CONTENT */}

        <h1
          style={{
            textAlign: "center",
            fontSize: "44px",
            color: "#7A1212",
            marginBottom: "52px",
            letterSpacing: "3px",
            position: "relative",
            zIndex: 1
          }}
        >
          EVENTS
        </h1>

        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            position: "relative",
            zIndex: 1
          }}
        >

          {/* HEADER */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "28px"
            }}
          >

            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "3px",
                color: "#7A1212",
                textTransform: "uppercase"
              }}
            >
              All Events
            </span>

            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(192,57,43,0.25)"
              }}
            />

            <span
              style={{
                fontSize: "11px",
                color: "rgba(192,57,43,0.5)",
                letterSpacing: "1px"
              }}
            >
              {sorted.length} total
            </span>

          </div>

          {/* EVENTS LIST */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
          >

            {sorted.map((event, i) => (
              <EventCard
                key={event.id}
                event={event}
                index={i}
                onClick={() => setSelectedEvent(event)}
              />
            ))}

          </div>

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