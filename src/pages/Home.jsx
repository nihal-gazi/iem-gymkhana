import '../../index.css';

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      {/* 1. HERO SECTION */}
      <section style={{ height: '60vh', background: '#ddd', marginBottom: '20px' }}>
        <h1>1. HERO SECTION (Title & Background)</h1>
      </section>

      {/* 2. ABOUT */}
      <section style={{ marginBottom: '40px' }}>
        <h2>2. ABOUT US</h2>
        <p>[Placeholder for About details...]</p>
      </section>

      {/* 3. SOCIETIES PREVIEW */}
      <section style={{ marginBottom: '40px' }}>
        <h2>3. SOCIETIES</h2>
        <p>[Placeholder: A mini-grid showing Cultural, Technical, Sports, etc.]</p>
      </section>

      {/* 4. NEWS & ACHIEVEMENTS */}
      <section style={{ marginBottom: '40px' }}>
        <h2>4. NEWS AND ACHIEVEMENTS</h2>
        <p>[Placeholder for News...]</p>
      </section>

      {/* 5. RANKING */}
      <section style={{ marginBottom: '40px' }}>
        <h2>5. RANKING</h2>
        <p>[Placeholder for Rankings...]</p>
      </section>

      {/* 6. PRESS RELEASES */}
      <section style={{ marginBottom: '40px' }}>
        <h2>6. PRESS RELEASES</h2>
        <p>[Placeholder for Press...]</p>
      </section>
    </div>
  );
}