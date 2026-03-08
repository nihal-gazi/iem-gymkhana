import { useState } from "react";
import { FiMail } from "react-icons/fi";
import InteractiveMesh from "../components/layout/InteractiveMesh";
import Footer from "../components/layout/Footer";

const members = Array.from({ length: 138 }, (_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  email: "member@gymkhana.com",
  image: "/coming.png",
}));

function MemberCard({ member }) {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "220px",
        aspectRatio: "1/1",
        cursor: "pointer",
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive(!active)}
    >
      {/* BACK CARD */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          border: "2px solid #C0392B",
          background: "rgba(255,255,255,0.95)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: "18px",
          transition: "transform 0.45s ease",
          transform: active ? "translate(14px,50px)" : "translate(0,0)",
          zIndex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: "Orbitron",
            fontSize: "15px",
            fontWeight: "600",
            color: "#111",
            textAlign: "center",
          }}
        >
          {member.name}
        </h3>

        <a href={`mailto:${member.email}`} style={{ marginTop: "6px", color: "#444" }}>
          <FiMail size={18} />
        </a>
      </div>

      {/* FRONT IMAGE CARD */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "12px",
          overflow: "hidden",
          border: "2px solid #C0392B",
          background: "#fff",
          transition: "transform 0.45s ease",
          transform: active ? "translate(-14px,-50px)" : "translate(0,0)",
          zIndex: 2,
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

export default function Members() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          padding: "120px 30px",
          position: "relative",
          fontFamily: "Orbitron",
          overflowX: "hidden",
        }}
      >
        {/* Mesh Background */}
        <InteractiveMesh />

        {/* Heading */}
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            color: "#7A1212",
            marginBottom: "60px",
            letterSpacing: "3px",
            position: "relative",
            zIndex: 1,
          }}
        >
          STUDENT COUNCIL MEMBERS
        </h1>

        {/* Members Grid */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "36px",
            maxWidth: "1300px",
            margin: "auto",
            justifyItems: "center",
          }}
        >
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}