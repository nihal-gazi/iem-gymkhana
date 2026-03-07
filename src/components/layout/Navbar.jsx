import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '20px', background: '#f0f0f0' }}>
      <Link to="/">HOME</Link>
      <Link to="/societies">SOCIETIES</Link>
      <Link to="/events">EVENTS</Link>
      <Link to="/members">MEMBERS</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  );
}