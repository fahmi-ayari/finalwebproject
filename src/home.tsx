import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clubs from "./components/Clubs";
import ClubDetails from "./components/ClubDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "./chatbot";
import "./index.css";


function Body() {
  return (
    

      <div className="welcome-content">
        <div className="welcome">
          WELCOME
          <div>WELCOME</div>
          <div>WELCOME</div>
          <div>WELCOME</div>
          <div>WELCOME</div>
        </div>
        <h3 className="box">
          <span style={{ color: "blue" }}>SUP</span>'
          <span style={{ color: "red" }}>COM</span> more than just a place of
          learning—it's a canvas for your dreams. Whether you're into <br />
          coding, creativity, or entrepreneurship, this is where your ambitions
          meet boundless opportunities.
          <br /> Let your adventure begin!
        </h3>
        <Link to="./Clubs">
          <p className="explore">
            <button className="button-86"> Explore</button>
          </p>
        </Link>

        <div className="App">
          <Chatbot />
        </div>
      </div>
   
  );
}

export default Body;

