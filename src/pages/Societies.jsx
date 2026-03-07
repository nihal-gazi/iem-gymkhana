import { SOCIETIES_DATA } from '../data/config';
import '../../index.css';

export default function Societies() {
  return (
    <div className="page-wrapper">

      <div style={{ marginBottom: '36px' }}>
        <h1 style={{ marginBottom: '6px' }}>Societies & Committees</h1>
        <p>Explore all student bodies across cultural, technical, sports, and welfare domains.</p>
      </div>

      {Object.entries(SOCIETIES_DATA).map(([category, clubs]) => (
        <div key={category} style={{ marginBottom: '36px' }}>

          {/* Category Header */}
          <div className="category-header">
            <div className="category-dot" />
            <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
            <div className="category-divider" />
          </div>

          {/* Society Cards */}
          <ul className="societies-page-grid">
            {clubs.map((club, index) => (
              <li key={index} className="society-list-item">
                {club}
              </li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  );
}