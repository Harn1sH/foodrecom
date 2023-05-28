/* eslint-disable no-unused-vars */
import { useState } from "react";
import Detailed from "./components/Detailed";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/index.css";
import Comp1 from "./components/comp1";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Comp1 />}></Route>
        <Route path="/:id" element={<Detailed />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
