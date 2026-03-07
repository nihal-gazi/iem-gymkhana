import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';


function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside the Routes so it appears on every page */}
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        {/* Add routes for /societies, /members, and /faq here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;