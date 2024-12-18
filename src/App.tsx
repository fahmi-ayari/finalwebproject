import BigHome from "./bighome";
import Header from "./header";
import Events from "./events"
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clubs from "./components/Clubs";
import ClubDetails from "./components/ClubDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import Explore from "./explore";
import Chatbot from "./chatbot";



function App(){

  return(
    <>
    
    <Router>
    
      <Routes>
        <Route path="/" element={<BigHome />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/club/:id" element={<ClubDetails />} />

      </Routes>
      
    </Router>
   
   
    </>
  )
}


export default App
