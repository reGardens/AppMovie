import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "././../../../configs/redux";

// pages
import Popular from "../Popular";
import Rating from "../Rating";

// styles
import "./style.scss";
import Dashboard from "../Dashboard";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="left">
          <p>TestLogo</p>
        </div>
        <div className="right">
          <Link to="/">Home</Link>
          <Link to="detail">Popular</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="detail/:id" element={<Popular />} />
        {/* <Route path="rating" element={<Rating />} /> */}
      </Routes>
    </div>
  );
}

export default App;
