import { BrowserRouter, Routes, Route } from "react-router-dom";

import InteractiveMesh from "./components/layout/InteractiveMesh";
import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Events from "./pages/Events";
import Societies from "./pages/Societies";
import Clubs from "./pages/Clubs";
import Members from "./pages/Members";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      {/* 🔥 GLOBAL BACKGROUND (ALL PAGES) */}
      <InteractiveMesh />

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/events" element={<Events />} />
          <Route path="/societies" element={<Societies />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;