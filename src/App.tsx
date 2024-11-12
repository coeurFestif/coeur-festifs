import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Event";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";
import { EventDetail } from "./pages/EventDetails";
import "./services/i18n"; // Importer la configuration i18n

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar is outside Routes so it appears on every page */}
        <NavBar />

        {/* Define Routes for each page */}
        <Routes>
          <Route path="/coeur-festifs" element={<HomePage />} />
          <Route path="/coeur-festifs/about" element={<AboutUs />} />
          <Route path="/coeur-festifs/events" element={<Events />} />
          <Route path="/coeur-festifs/event/:id" element={<EventDetail />} />
          <Route path="*" element={<Navigate to="/coeur-festifs" replace />} />
        </Routes>

        {/* Footer is outside Routes so it appears on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
