import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Event";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";
import { EventDetail } from "./pages/EventDetails";
import { ContactUs } from "./pages/ContactUs";
import "./services/i18n"; // Importer la configuration i18n

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is outside Routes so it appears on every page */}
        <NavBar />

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/event/:id" element={<EventDetail />} />
        </Routes>

        {/* Footer is outside Routes so it appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
