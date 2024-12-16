import React from "react";
import "./clubCard.css";

type Club = {
  name: string;
  image: string;
};

type ClubCardProps = {
  club: Club;
  onClick: () => void;
};

const ClubCard: React.FC<ClubCardProps> = ({ club, onClick }) => {
  return (
    <div className="club-card" onClick={onClick}>
      <img src={club.image} alt={club.name} className="club-image" />
      <h3>{club.name}</h3>
    </div>
  );
};

export default ClubCard;
