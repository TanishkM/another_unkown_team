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
