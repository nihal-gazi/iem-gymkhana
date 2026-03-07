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
      <section style={{ height: '50vh', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px', borderRadius: '8px' }}>
        <h1>[HERO IMAGE / CAROUSEL PLACEHOLDER]</h1>
      </section>

      {/* 2. ABOUT US */}
      <section className="about-box">
        <h2 style={{ marginBottom: '15px', color: '#f59e0b' }}>{ABOUT_TEXT.title}</h2>
        <p style={{ lineHeight: '1.6', color: '#555' }}>{ABOUT_TEXT.content}</p>
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
                <div style={{ fontSize: '0.8rem', color: '#888' }}>
                  {society.links.map(link => `[${link}] `)}
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
              <h3 style={{ marginBottom: '8px' }}>
                <span className="rank-badge">{item.rank}</span> 
                {item.year} - {item.publisher}
              </h3>
              <p style={{ color: '#555' }}>{item.desc}</p>
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