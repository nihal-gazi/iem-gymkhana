
import { SOCIETIES_DATA } from '../data/config';

export default function Societies() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Societies & Committees</h1>
      
      {/* Map through the config object to generate categories dynamically */}
      {Object.entries(SOCIETIES_DATA).map(([category, clubs]) => (
        <div key={category} style={{ marginBottom: '30px' }}>
          <h3 style={{ textTransform: 'uppercase', borderBottom: '2px solid #ccc' }}>
            {category.replace(/([A-Z])/g, ' $1').trim()} {/* Adds spaces to camelCase */}
          </h3>
          
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px' }}>
            {clubs.map((club, index) => (
              <li key={index} style={{ background: '#f4f4f4', padding: '10px', listStyle: 'none' }}>
                {club}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}