import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Footer from "./components/footer";


function App() {
  const location = useLocation();

  return (
    <React.Fragment key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/fields-of-science" element={<ScienceFields />} />
        <Route path="/gaming-zone" element={<ElementGames />} />
        <Route path="/space-game" element={<SpaceGame />} />
        <Route path="/fire-game" element={<FireGame />} />
        <Route path="/air-game" element={<AirGame />} />
        <Route path="/water-game" element={<WaterGame />} />
        <Route path="/earth-game" element={<EarthGame />} /> */}
      </Routes>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
