import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { RECENT_EVENTS, CAROUSEL_INTERVAL } from "../../data/eventsData";

const slideVariants = {
  enter: (d) => ({ opacity:0, x: d > 0 ?  60 : -60 }),
  center:       ({ opacity:1, x: 0 }),
  exit:  (d) => ({ opacity:0, x: d > 0 ? -60 :  60 }),
};

/**
 * RecentCarousel
 * Displays RECENT_EVENTS as an auto-advancing card with a rAF-driven progress bar.
 * Hover pauses; dot indicators + arrow buttons allow manual navigation.
 */
export default function RecentCarousel() {
  const [current,  setCurrent]  = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused,   setPaused]   = useState(false);
  const [dir,      setDir]      = useState(1);   // 1 = fwd, -1 = back

  const startTimeRef = useRef(null);
  const elapsed      = useRef(0);
  const total        = RECENT_EVENTS.length;

  const goTo = (idx, direction = 1) => {
    setDir(direction);
    setCurrent((idx + total) % total);
    setProgress(0);
    elapsed.current    = 0;
    startTimeRef.current = performance.now();
  };

  const goNext = () => goTo(current + 1,  1);
  const goPrev = () => goTo(current - 1, -1);

  // rAF loop — resumes from where it left off when unpaused
  useEffect(() => {
    if (paused) return;

    let rafId;
    startTimeRef.current =
      performance.now() - elapsed.current * CAROUSEL_INTERVAL;

    const tick = (now) => {
      const pct = Math.min(
        (now - startTimeRef.current) / CAROUSEL_INTERVAL,
        1
      );
      setProgress(pct);
      elapsed.current = pct;

      if (pct >= 1) goNext();
      else          rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [current, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  const slide = RECENT_EVENTS[current];

  return (
    <div
      style={{ position:"relative", maxWidth:"900px", margin:"0 auto 64px",
        borderRadius:"22px", overflow:"hidden", border:"1px solid black",
        boxShadow:"0 16px 48px rgba(0,0,0,0.22)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide body ── */}
      <div style={{ position:"relative", minHeight:"200px"  ,  background:"#C0392B",
        padding:"36px 70px 52px" }}>

        <div style={{ fontSize:"11px", letterSpacing:"3px", fontWeight:700,
          color:"rgba(255,255,255,0.55)", textTransform:"uppercase",
          marginBottom:"20px" }}>
          Recent Events
        </div>

        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={slide.id}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration:0.35, ease:[0.4, 0, 0.2, 1] }}
          >
            <span style={{ display:"inline-block", fontSize:"11px", fontWeight:700,
              letterSpacing:"2px", textTransform:"uppercase", padding:"4px 12px",
              borderRadius:"20px", border:"1px solid rgba(255,255,255,0.4)",
              color:"#fff", marginBottom:"14px" }}>
              {slide.tag}
            </span>

            <h2 style={{ fontSize:"28px", color:"#fff", fontWeight:700,
              letterSpacing:"2px", marginBottom:"6px" }}>
              {slide.title}
            </h2>

            <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.65)", fontWeight:500,
              marginBottom:"14px", letterSpacing:"1px" }}>
              {slide.subtitle}&nbsp;·&nbsp;{slide.date}
            </p>

            <p style={{ fontSize:"15px", color:"rgba(255,255,255,0.85)",
              lineHeight:1.7, maxWidth:"640px" }}>
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Arrow buttons */}
        {[{ d:-1, label:"‹", side:"left" }, { d:1, label:"›", side:"right" }].map(btn => (
          <button key={btn.side}
            onClick={() => btn.d === -1 ? goPrev() : goNext()}
            style={{ position:"absolute", top:"50%", [btn.side]:"18px",
              transform:"translateY(-50%)", background:"rgba(255,255,255,0.15)",
              border:"1px solid rgba(255,255,255,0.3)", color:"#fff",
              width:"36px", height:"36px", borderRadius:"50%", fontSize:"20px",
              cursor:"pointer", display:"flex", alignItems:"center",
              justifyContent:"center", lineHeight:1, transition:"background 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.background="rgba(255,255,255,0.28)"}
            onMouseLeave={e => e.currentTarget.style.background="rgba(255,255,255,0.15)"}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* ── Progress bar row ── */}
      <div style={{ background:"#A93226", padding:"14px 40px 18px",
        display:"flex", alignItems:"center", gap:"12px" }}>

        {/* Dot indicators */}
        <div style={{ display:"flex", gap:"6px", marginRight:"4px" }}>
          {RECENT_EVENTS.map((_, i) => (
            <button key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              style={{ width: i === current ? "22px" : "7px", height:"7px",
                borderRadius:"4px", border:"none", padding:0,
                background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                cursor:"pointer", transition:"all 0.3s ease" }}
            />
          ))}
        </div>

        {/* Fill bar */}
        <div style={{ flex:1, height:"3px", background:"rgba(255,255,255,0.2)",
          borderRadius:"2px", overflow:"hidden" }}>
          <div style={{ width:`${progress * 100}%`, height:"100%",
            background:"#fff", borderRadius:"2px",
            transition: paused ? "none" : "width 0.08s linear" }} />
        </div>

        {/* Pause / count */}
        <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.4)",
          letterSpacing:"1px", whiteSpace:"nowrap" }}>
          {paused ? "PAUSED" : `${current + 1} / ${total}`}
        </span>
      </div>
    </div>
  );
}