import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./App";
import About from "./About";

const AppRouting = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouting;
