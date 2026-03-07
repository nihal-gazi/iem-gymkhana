import { useState } from 'react';
import { ABOUT_TEXT, SOCIETIES_DATA, ACHIEVEMENTS_DATA, RANKINGS_DATA, PRESS_RELEASES_DATA } from '../data/basicData';
import '../../index.css';

export default function Home() {
  // State to track which Society tab is currently active. Defaults to the first key in the object.
  const [activeTab, setActiveTab] = useState(Object.keys(SOCIETIES_DATA)[0]);

  // Determine how many items to show in the horizontal scrolls (N achievements)
  const itemsToShow = 3;

  return (
    <div className="page-wrapper">

      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <h1>Behind the wheels, it's  <strong> IEM Gymkhana</strong></h1>
        <p>The apex student governing body — nurturing talent, amplifying voices, and building a vibrant campus community. We are building it, slowly and steadily.</p>
        <div className="hero-chip-row">
          <span className="hero-chip"><span className="chip-dot" />35+ Societies</span>
          <span className="hero-chip"><span className="chip-dot" />12K+ Students</span>
          <span className="hero-chip"><span className="chip-dot" />200+ Events/Year</span>
          <span className="hero-chip"><span className="chip-dot" />Est. 1962</span>
        </div>
      </section>

      {/* 2. ABOUT US */}
      <section className="about-box">
        <h2 style={{ marginBottom: '15px' }}>{ABOUT_TEXT.title}</h2>
        <p style={{ lineHeight: '1.6' }}>{ABOUT_TEXT.content}</p>
      </section>

      {/* 3. SOCIETIES (Tabbed Interface) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Societies</h2>

        {/* The Tab Buttons */}
        <div className="tabs-container">
          {Object.keys(SOCIETIES_DATA).map((category) => (
            <button
              key={category}
              className={`tab-btn ${activeTab === category ? 'active' : ''}`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* The Grid displaying the active tab's data */}
        <div className="societies-grid">
          {SOCIETIES_DATA[activeTab].map((society, index) => (
            <div key={index} className="society-card">
              <span className="society-icon">{society.icon}</span>
              <div>
                <h4 style={{ marginBottom: '5px' }}>{society.name}</h4>
                <div className="society-links">
                  {society.links.map((link, i) => (
                    <span key={i} className="society-link-chip">{link}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="show-more-btn" style={{ marginTop: '30px' }}>SEE MORE</button>
      </section>

      {/* 4. NEWS AND ACHIEVEMENTS */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px' }}>News & Achievements</h2>
        <div className="horizontal-scroll">
          {ACHIEVEMENTS_DATA.slice(0, itemsToShow).map(item => (
            <div key={item.id} className="content-card">
              <span className="card-badge">🏆 Achievement</span>
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="show-more-btn">Show More Achievements</button>
      </section>

      {/* 5. RANKINGS (Timeline) */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '30px' }}>Rankings</h2>
        <div className="timeline">
          {RANKINGS_DATA.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-meta">
                  <span className="rank-badge">{item.rank}</span>
                  <span className="timeline-year">{item.year} · {item.publisher}</span>
                </div>
                <p style={{ color: '#555' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PRESS RELEASES (Same design as achievements) */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px' }}>Press Releases</h2>
        <div className="horizontal-scroll">
          {PRESS_RELEASES_DATA.slice(0, itemsToShow).map(item => (
            <div key={item.id} className="content-card">
              <span className="card-badge">📰 Press</span>
              <h3>{item.title}</h3>
              <span className="date">{item.date}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="show-more-btn">Show More Releases</button>
      </section>

    </div>
  );
}