import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../data/config';
import '../../../index.css'; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '1px' }}>
        LOGO
      </div>
      
      <div className="nav-links">
        {NAV_LINKS.map((link, index) => (
          <Link key={index} to={link.path} className="nav-link">
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}