
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../data/config';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#222', color: 'white' }}>
      <div className="logo">LOGO PLACEHOLDER</div>
      {NAV_LINKS.map((link, index) => (
        <Link key={index} to={link.path} style={{ color: 'white', textDecoration: 'none' }}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
}