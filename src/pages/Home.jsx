import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_TEXT, SOCIETIES_DATA, ACHIEVEMENTS_DATA, RANKINGS_DATA, PRESS_RELEASES_DATA } from '../data/basicData';
import InteractiveMesh from '../components/layout/InteractiveMesh';
import Footer from '../components/layout/Footer';

/* ─── shared palette (mirrors Events page) ─── */
const C = {
  brick:      '#C0392B',
  brickDark:  '#A93226',
  brickDeep:  '#7A1212',
  dark:       '#1a0a0a',
  darkCard:   '#1a0a0a',
};

/* ─── Section divider — identical to Events "All Events" divider ─── */
const SectionDivider = ({ label, count }) => (
  <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'28px' }}>
    <span style={{ fontSize:'11px', fontWeight:700, letterSpacing:'3px',
      color: C.brickDeep, textTransform:'uppercase', whiteSpace:'nowrap' }}>
      {label}
    </span>
    <div style={{ flex:1, height:'1px', background:'rgba(192,57,43,0.25)' }} />
    {count != null && (
      <span style={{ fontSize:'11px', color:'rgba(192,57,43,0.5)', letterSpacing:'1px' }}>
        {count}
      </span>
    )}
  </div>
);

/* ─── Dark content card (achievements / press) ─── */
const DarkCard = ({ badge, title, date, desc, index }) => (
  <motion.div
    initial={{ opacity:0, y:40 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }}
    transition={{ duration:0.45, delay: index * 0.08 }}
    whileHover={{ scale:1.03, y:-3 }}
    style={{
      minWidth:'290px', maxWidth:'310px', flexShrink:0,
      background: C.brick,
      borderRadius:'18px', padding:'0',
      border:'1px solid black',
      boxShadow:'0 8px 20px rgba(0,0,0,0.18)',
      cursor:'default', overflow:'hidden',
      display:'grid', gridTemplateColumns:'5px 1fr',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = C.brickDark;
      e.currentTarget.style.boxShadow  = '0 16px 40px rgba(192,57,43,0.4)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = C.brick;
      e.currentTarget.style.boxShadow  = '0 8px 20px rgba(0,0,0,0.18)';
    }}
  >
    <div style={{ background: C.brickDeep, borderRadius:'18px 0 0 18px' }} />
    <div style={{ padding:'22px 22px 22px 18px', display:'flex',
      flexDirection:'column', gap:'6px' }}>
      <span style={{ fontSize:'10px', fontWeight:700, letterSpacing:'2px',
        textTransform:'uppercase', padding:'3px 10px', borderRadius:'20px',
        background:'rgba(255,255,255,0.18)', color:'#fff', width:'fit-content' }}>
        {badge}
      </span>
      <h3 style={{ fontSize:'16px', color:'#fff', fontWeight:700,
        letterSpacing:'1px', lineHeight:1.3, margin:0 }}>
        {title}
      </h3>
      <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.5)',
        fontWeight:500, letterSpacing:'0.5px' }}>
        {date}
      </span>
      <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.75)',
        lineHeight:1.65, margin:0 }}>
        {desc}
      </p>
    </div>
  </motion.div>
);

/* ─── Society card ─── */
const SocietyCard = ({ society, index }) => (
  <motion.div
    initial={{ opacity:0, y:30 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true }}
    transition={{ duration:0.4, delay: index * 0.05 }}
    whileHover={{ scale:1.03, y:-2 }}
    style={{
      display:'flex', alignItems:'center', gap:'14px',
      background: C.brick, borderRadius:'16px',
      padding:'16px 18px',
      border:'1px solid black',
      boxShadow:'0 6px 16px rgba(0,0,0,0.15)',
      cursor:'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = C.brickDark;
      e.currentTarget.style.boxShadow  = '0 12px 32px rgba(192,57,43,0.35)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = C.brick;
      e.currentTarget.style.boxShadow  = '0 6px 16px rgba(0,0,0,0.15)';
    }}
  >
    <span style={{ fontSize:'1.8rem', width:'42px', height:'42px', minWidth:'42px',
      display:'flex', alignItems:'center', justifyContent:'center',
      background:'rgba(255,255,255,0.15)', borderRadius:'10px' }}>
      {society.icon}
    </span>
    <div style={{ minWidth:0 }}>
      <h4 style={{ fontSize:'13px', fontWeight:700, color:'#fff',
        letterSpacing:'1px', marginBottom:'6px' }}>
        {society.name}
      </h4>
      <div style={{ display:'flex', gap:'5px', flexWrap:'wrap' }}>
        {society.links.map((link, i) => (
          <span key={i} style={{
            fontSize:'9px', fontWeight:700, letterSpacing:'1.5px',
            textTransform:'uppercase', padding:'2px 8px', borderRadius:'20px',
            background:'rgba(255,255,255,0.18)', color:'rgba(255,255,255,0.85)',
          }}>
            {link}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ─── Rankings timeline item — vertical brick-red timeline ─── */
const RankItem = ({ item, index }) => (
  <div style={{ display:'flex', gap:'0', marginBottom:'0' }}>
    {/* Spine column */}
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center',
      width:'36px', flexShrink:0, paddingTop:'4px' }}>
      {/* Dot */}
      <motion.div
        initial={{ scale:0 }}
        whileInView={{ scale:1 }}
        viewport={{ once:true }}
        transition={{ duration:0.3, delay: index * 0.1 }}
        style={{
          width: index === 0 ? '16px' : '12px',
          height: index === 0 ? '16px' : '12px',
          borderRadius:'50%',
          background: index === 0 ? C.brick : C.brickDeep,
          border: index === 0 ? `2px solid black` : `2px solid ${C.brick}`,
          flexShrink:0, zIndex:1,
          boxShadow: index === 0 ? '0 0 10px rgba(192,57,43,0.6)' : 'none',
        }}
      />
      {/* Vertical line below dot (not on last item) */}
      <div style={{
        flex:1, width:'2px', minHeight:'24px',
        background:`linear-gradient(180deg, ${C.brick}, rgba(192,57,43,0.15))`,
        marginTop:'4px',
      }} />
    </div>

    {/* Card */}
    <motion.div
      initial={{ opacity:0, x:20 }}
      whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true }}
      transition={{ duration:0.45, delay: index * 0.1 }}
      style={{
        flex:1, marginLeft:'12px', marginBottom:'20px',
        background: C.brick,
        borderRadius:'16px', overflow:'hidden',
        border:'1px solid black',
        boxShadow:'0 6px 18px rgba(0,0,0,0.18)',
        display:'grid', gridTemplateColumns:'5px 1fr',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = C.brickDark;
        e.currentTarget.style.boxShadow  = '0 12px 32px rgba(192,57,43,0.4)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = C.brick;
        e.currentTarget.style.boxShadow  = '0 6px 18px rgba(0,0,0,0.18)';
      }}
    >
      <div style={{ background: index === 0 ? '#FFD700' : C.brickDeep }} />
      <div style={{ padding:'18px 22px' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px',
          marginBottom:'8px', flexWrap:'wrap' }}>
          <span style={{
            fontSize:'10px', fontWeight:700, letterSpacing:'2px',
            textTransform:'uppercase', padding:'3px 12px', borderRadius:'20px',
            background:'rgba(255,255,255,0.2)', color:'#fff',
          }}>
            {item.rank}
          </span>
          <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.55)',
            letterSpacing:'1px' }}>
            {item.year} · {item.publisher}
          </span>
        </div>
        <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.8)',
          lineHeight:1.65, margin:0 }}>
          {item.desc}
        </p>
      </div>
    </motion.div>
  </div>
);

/* ─── Show More button (matches Events page) ─── */
const ShowMoreBtn = ({ label, onClick }) => (
  <div style={{ textAlign:'center', marginTop:'28px' }}>
    <button
      onClick={onClick}
      style={{
        background:'transparent', border:`1.5px solid ${C.brick}`,
        color: C.brickDeep, padding:'11px 32px', borderRadius:'50px',
        fontFamily:"'Orbitron', sans-serif", fontSize:'11px',
        fontWeight:700, letterSpacing:'3px', cursor:'pointer',
        textTransform:'uppercase', transition:'all 0.25s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background  = C.brick;
        e.currentTarget.style.color       = '#fff';
        e.currentTarget.style.boxShadow   = '0 8px 24px rgba(192,57,43,0.35)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background  = 'transparent';
        e.currentTarget.style.color       = C.brickDeep;
        e.currentTarget.style.boxShadow   = 'none';
      }}
    >
      {label}
    </button>
  </div>
);

/* ══════════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════════ */
export default function Home() {
  const [activeTab,       setActiveTab]       = useState(Object.keys(SOCIETIES_DATA)[0]);
  const [showAllSoc,      setShowAllSoc]       = useState(false);
  const [showAllAch,      setShowAllAch]       = useState(false);
  const [showAllPress,    setShowAllPress]     = useState(false);

  const INITIAL = 3;

  const visibleSoc   = showAllSoc   ? SOCIETIES_DATA[activeTab]          : SOCIETIES_DATA[activeTab].slice(0, 6);
  const visibleAch   = showAllAch   ? ACHIEVEMENTS_DATA                  : ACHIEVEMENTS_DATA.slice(0, INITIAL);
  const visiblePress = showAllPress ? PRESS_RELEASES_DATA                : PRESS_RELEASES_DATA.slice(0, INITIAL);

  return (
    <>
      <div style={{
        minHeight:'100vh',
        fontFamily:"'Orbitron', sans-serif",
        background:'#ffffff',
        position:'relative',
        overflowX:'hidden',
      }}>
        <InteractiveMesh />

        {/* ══ 1. HERO ══════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ duration:0.6 }}
          style={{
            minHeight:'calc(100vh - 88px)',
            display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center',
            textAlign:'center',
            padding:'80px 24px 60px',
            position:'relative', zIndex:1,
          }}
        >
          {/* Subtle brick glow behind headline */}
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%, -50%)',
            width:'600px', height:'300px',
            background:'radial-gradient(ellipse, rgba(192,57,43,0.08) 0%, transparent 70%)',
            pointerEvents:'none',
          }} />

          <motion.div
            initial={{ opacity:0, y:24 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.55, delay:0.1 }}
            style={{ position:'relative' }}
          >
            <div style={{ fontSize:'11px', fontWeight:700, letterSpacing:'4px',
              color:'rgba(192,57,43,0.6)', textTransform:'uppercase',
              marginBottom:'20px' }}>
              IEM Gymkhana
            </div>

            <h1 style={{
              fontSize:'clamp(2.2rem, 6vw, 4rem)',
              color: C.brickDeep,
              fontWeight:700,
              letterSpacing:'3px',
              lineHeight:1.15,
              marginBottom:'20px',
            }}>
              Behind the Wheels,<br />
              <span style={{ color: C.brick }}>it's IEM Gymkhana.</span>
            </h1>

            <p style={{
              fontSize:'15px', color:'rgba(0,0,0,0.5)',
              maxWidth:'520px', margin:'0 auto 40px',
              lineHeight:1.75, letterSpacing:'0.3px',
              fontFamily:"'Orbitron', sans-serif",
            }}>
              The apex student governing body — nurturing talent, amplifying voices, and building a vibrant campus community.
            </p>

            {/* Stat chips */}
            <div style={{ display:'flex', gap:'10px', justifyContent:'center',
              flexWrap:'wrap' }}>
              {[
                ['35+', 'Societies'],
                ['12K+', 'Students'],
                ['200+', 'Events/Year'],
                ['Est.', '1962'],
              ].map(([num, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ scale:1.06, y:-2 }}
                  style={{
                    background: C.brick,
                    border:'1px solid black',
                    borderRadius:'50px',
                    padding:'8px 20px',
                    boxShadow:'0 6px 16px rgba(192,57,43,0.25)',
                    display:'flex', alignItems:'center', gap:'6px',
                    cursor:'default',
                  }}
                >
                  <span style={{ fontSize:'15px', fontWeight:700,
                    color:'#fff', letterSpacing:'1px' }}>{num}</span>
                  <span style={{ fontSize:'10px', fontWeight:600,
                    color:'rgba(255,255,255,0.7)', letterSpacing:'2px',
                    textTransform:'uppercase' }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── Content sections wrapper ── */}
        <div style={{ maxWidth:'960px', margin:'0 auto',
          padding:'0 20px 80px', position:'relative', zIndex:1 }}>

          {/* ══ 2. ABOUT ══════════════════════════════════════════ */}
          <motion.section
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration:0.5 }}
            style={{ marginBottom:'72px' }}
          >
            <SectionDivider label="About Us" />
            <div style={{
              background: C.dark,
              borderRadius:'20px',
              border:'1px solid black',
              boxShadow:'0 12px 32px rgba(0,0,0,0.2)',
              padding:'36px 40px',
              position:'relative', overflow:'hidden',
            }}>
              {/* left accent */}
              <div style={{ position:'absolute', left:0, top:0, bottom:0,
                width:'4px', background:`linear-gradient(180deg, ${C.brick}, transparent)`,
                borderRadius:'20px 0 0 20px' }} />
              <h2 style={{ fontSize:'20px', color:'#fff', fontWeight:700,
                letterSpacing:'2px', marginBottom:'16px' }}>
                {ABOUT_TEXT.title}
              </h2>
              <p style={{ fontSize:'14px', color:'rgba(255,255,255,0.72)',
                lineHeight:1.8, margin:0 }}>
                {ABOUT_TEXT.content}
              </p>
            </div>
          </motion.section>

          {/* ══ 3. SOCIETIES ══════════════════════════════════════ */}
          <section style={{ marginBottom:'72px' }}>
            <SectionDivider
              label="Societies"
              count={`${Object.values(SOCIETIES_DATA).flat().length} total`}
            />

            {/* Tab buttons */}
            <div style={{ display:'flex', gap:'8px', flexWrap:'wrap',
              marginBottom:'24px' }}>
              {Object.keys(SOCIETIES_DATA).map(cat => (
                <button
                  key={cat}
                  onClick={() => { setActiveTab(cat); setShowAllSoc(false); }}
                  style={{
                    padding:'7px 18px', borderRadius:'50px',
                    border: activeTab === cat ? '1px solid black' : `1px solid rgba(192,57,43,0.35)`,
                    background: activeTab === cat ? C.brick : 'transparent',
                    color: activeTab === cat ? '#fff' : C.brickDeep,
                    fontFamily:"'Orbitron', sans-serif",
                    fontSize:'10px', fontWeight:700,
                    letterSpacing:'2px', textTransform:'uppercase',
                    cursor:'pointer', transition:'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Societies grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity:0, y:12 }}
                animate={{ opacity:1, y:0 }}
                exit={{ opacity:0 }}
                transition={{ duration:0.25 }}
                style={{
                  display:'grid',
                  gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))',
                  gap:'12px',
                }}
              >
                {visibleSoc.map((society, i) => (
                  <SocietyCard key={i} society={society} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {SOCIETIES_DATA[activeTab].length > 6 && !showAllSoc && (
              <ShowMoreBtn
                label={`See All — ${SOCIETIES_DATA[activeTab].length - 6} more`}
                onClick={() => setShowAllSoc(true)}
              />
            )}
          </section>

          {/* ══ 4. ACHIEVEMENTS ═══════════════════════════════════ */}
          <section style={{ marginBottom:'72px' }}>
            <SectionDivider label="News & Achievements" count={`${ACHIEVEMENTS_DATA.length} total`} />
            <div style={{ display:'flex', gap:'16px', overflowX:'auto',
              paddingBottom:'12px', scrollbarWidth:'none' }}>
              {visibleAch.map((item, i) => (
                <DarkCard key={item.id} badge="🏆 Achievement"
                  title={item.title} date={item.date} desc={item.desc} index={i} />
              ))}
            </div>
            {ACHIEVEMENTS_DATA.length > INITIAL && !showAllAch && (
              <ShowMoreBtn
                label={`Show More — ${ACHIEVEMENTS_DATA.length - INITIAL} more`}
                onClick={() => setShowAllAch(true)}
              />
            )}
          </section>

          {/* ══ 5. RANKINGS ═══════════════════════════════════════ */}
          <section style={{ marginBottom:'72px' }}>
            <SectionDivider label="Rankings" count={`${RANKINGS_DATA.length} entries`} />
            <div>
              {RANKINGS_DATA.map((item, i) => (
                <RankItem key={i} item={item} index={i} />
              ))}
            </div>
          </section>

          {/* ══ 6. PRESS RELEASES ═════════════════════════════════ */}
          <section style={{ marginBottom:'40px' }}>
            <SectionDivider label="Press Releases" count={`${PRESS_RELEASES_DATA.length} total`} />
            <div style={{ display:'flex', gap:'16px', overflowX:'auto',
              paddingBottom:'12px', scrollbarWidth:'none' }}>
              {visiblePress.map((item, i) => (
                <DarkCard key={item.id} badge="📰 Press"
                  title={item.title} date={item.date} desc={item.desc} index={i} />
              ))}
            </div>
            {PRESS_RELEASES_DATA.length > INITIAL && !showAllPress && (
              <ShowMoreBtn
                label={`Show More — ${PRESS_RELEASES_DATA.length - INITIAL} more`}
                onClick={() => setShowAllPress(true)}
              />
            )}
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}