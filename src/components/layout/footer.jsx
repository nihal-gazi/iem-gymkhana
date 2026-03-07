export default function Footer() {

  const brick = "#C0392B";

  return (
    <footer
      style={{
        marginTop: "110px",
        background: brick,
        color: "#ffffff",
        fontFamily: "'Orbitron', sans-serif",
        padding: "40px 60px",
        borderTop: "1px solid black",
        position: "relative",
        zIndex: 3
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px"
        }}
      >

        {/* INSTAGRAM */}

        <a
          href="https://www.instagram.com/iem.gymkhana?igsh=MXc2YjZvazU1cGhldw=="
          target="_blank"
          rel="noreferrer"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "18px",
            border: "2px solid rgba(255,255,255,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "0.25s"
          }}
          onMouseEnter={(e)=>{
            e.currentTarget.style.transform="scale(1.08)"
          }}
          onMouseLeave={(e)=>{
            e.currentTarget.style.transform="scale(1)"
          }}
        >
          <img
            src="/instagram.svg"
            alt="Instagram"
            style={{
              width: "34px"
            }}
          />
        </a>

        {/* CENTER */}

        <div
          style={{
            fontSize: "15px",
            letterSpacing: "1px"
          }}
        >
          Made with ❤️
        </div>

        {/* QUERY FORM */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minWidth: "260px",
            position: "relative",
            zIndex: 4
          }}
        >

          <div
            style={{
              fontSize: "16px",
              fontWeight: "500"
            }}
          >
            Get in touch
          </div>

          <input
            placeholder="Name"
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#ffffff",
              color: "#000",
              outline: "none"
            }}
          />

          <input
            placeholder="Email"
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#ffffff",
              color: "#000",
              outline: "none"
            }}
          />

          <textarea
            placeholder="Your query..."
            rows="2"
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              background: "#ffffff",
              color: "#000",
              outline: "none",
              resize: "none"
            }}
          />

          <button
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "none",
              background: "#E74C3C",
              color: "#fff",
              cursor: "pointer",
              fontWeight: "500",
              transition: "0.25s"
            }}
            onMouseEnter={(e)=>{
              e.target.style.background="#B22222"
            }}
            onMouseLeave={(e)=>{
              e.target.style.background="#E74C3C"
            }}
          >
            Send
          </button>

        </div>

      </div>

    </footer>
  );
}