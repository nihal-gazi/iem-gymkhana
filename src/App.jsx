
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Societies from './pages/Societies';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/societies" element={<Societies />} />
        {/* Add dummy routes for the others so they don't crash when clicked */}
        <Route path="/events" element={<div style={{padding: '20px'}}>Events Page Placeholder</div>} />
        <Route path="/members" element={<div style={{padding: '20px'}}>Members Page Placeholder</div>} />
        <Route path="/faq" element={<div style={{padding: '20px'}}>FAQ Page Placeholder</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;