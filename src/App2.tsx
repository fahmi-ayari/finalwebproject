import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clubs from "./components/Clubs";
import ClubDetails from "./components/ClubDetails";
import AOS from "aos";
import "aos/dist/aos.css";

function Appli() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Clubs />} />
        <Route path="/club/:id" element={<ClubDetails />} />
      </Routes>
    </Router>
  );
}

AOS.init({
  duration: 600,
  offset: 50,
});

export default Appli;
