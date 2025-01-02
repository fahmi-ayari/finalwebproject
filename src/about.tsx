import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import BigHome from "./bighome";

function about() {
  return (
    <div className="app-container">
      {/* Video Section */}
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="assets/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Message Section */}
      <div className="content">
        <p>
          We are proud SUP'COM students, and this is a web project crafted to showcase the vibrant and diverse clubs at SUP'COM.
          Our mission is to connect students, foster collaboration, and provide insights into the clubs that define our campus life.
          From coding to creativity, from innovation to entrepreneurship, SUP'COM clubs are the heart of our university experience.
        </p>
        <p>
          This project not only aims to inspire current students to join and engage with these clubs but also serves as a beacon of our creativity, passion, and innovation.
          Let’s embark on this exciting journey together and celebrate the spirit of collaboration and growth!
        </p>
      </div>
      <Link to="/">
               
                 <button className="btn2">
     <span className="spn2">back to Home!</span>
     </button>
               </Link>
    </div>
  );
}

export default about;
