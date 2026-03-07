// src/pages/Societies.jsx
import { SOCIETIES_DATA } from '../data/config';
import '../../index.css';

export default function Societies() {
  return (
    <div className="page-wrapper">
      <h1 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Societies & Committees</h1>
      
      {Object.entries(SOCIETIES_DATA).map(([category, clubs]) => (
        <div key={category} style={{ marginBottom: '40px' }}>
          <h3 style={{ textTransform: 'uppercase', borderBottom: '2px solid #eaeaea', paddingBottom: '10px' }}>
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          
          <ul className="societies-grid">
            {clubs.map((club, index) => (
              <li key={index} style={{ background: '#f8f9fa', padding: '15px', borderRadius: '6px', listStyle: 'none', border: '1px solid #eaeaea' }}>
                {club}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}