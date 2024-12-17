import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage.jsx";
import DriftPage from "./Components/DriftPage.jsx";
import TimeAttackPage from "./Components/TimeAttackPage.jsx";
import ForzaPage from "./Components/ForzaPage.jsx";
import Menu from "./Components/Menu.jsx";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
