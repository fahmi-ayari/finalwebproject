import React from "react";
import { useNavigate } from "react-router-dom";
import "./clubs.css";

const clubs = [
  { id: 1, name: "Sup'Com Cyber Security Club", image: "/sc2.jpg" },
  { id: 2, name: "IEEE", image: "/ieee.jpg" },
  { id: 3, name: "Sup'Com Junior Entreprise", image: "/junior.jpg" },
  { id: 4, name: "Team Sup'Com", image: "/team.jpg" },
  { id: 5, name: "Machine Learning Sup'Com", image: "/mls.jpg" },
  { id: 6, name: "ACM Sup'Com", image: "/acm.jpeg" },
  { id: 7, name: "Nateg", image: "/nateg.jpg" },
  { id: 8, name: "Sup'Bike", image: "/supbike.jpg" },
  {
    id: 9,
    name: "Google Developer Student Club Sup'Com",
    image: "/google.jpg",
  },
];

function Clubs() {
  const navigate = useNavigate();

  const handleLearnMore = (clubId: number) => {
    navigate(`/club/${clubId}`);
  };

  return (
    <div className="clubs-list">
      <h1 className="title">Explore Our Clubs</h1>
      <div className="clubs-container">
        {clubs.map((club) => (
          <div
            className="club-card"
            key={club.id}
            onClick={() => handleLearnMore(club.id)}
          >
            <img src={club.image} alt={club.name} className="club-image" />
            <div className="club-info">
              <h3 className="club-name">{club.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
