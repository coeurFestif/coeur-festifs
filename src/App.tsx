import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Events } from "./pages/Event";
import { AboutUs } from "./pages/AboutUs";
import { NavBar } from "./components/navBar";
import { Footer } from "./components/footer";
import { EventDetail } from "./pages/EventDetails";
import { NotFound } from "./pages/NotFound";
import "./services/i18n";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <NavBar />
        <ScrollToTop />
        <main id="main-content">
          <Routes>
            <Route path="/coeur-festifs" element={<HomePage />} />
            <Route path="/coeur-festifs/about" element={<AboutUs />} />
            <Route path="/coeur-festifs/events" element={<Events />} />
            <Route path="/coeur-festifs/event/:id" element={<EventDetail />} />
            <Route path="/" element={<Navigate to="/coeur-festifs" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
