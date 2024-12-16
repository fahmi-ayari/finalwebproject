import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ClubDetails.css";

const ClubDetails = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const clubsData = [
    {
      id: "1",
      name: "Sup'Com Cyber Security Club",
      description:
        "The Sup'Com Cyber Security Club is a vibrant community for cybersecurity enthusiasts. We aim to foster learning, innovation, and collaboration in the field of cybersecurity.",
      staff: [
        { name: "", image: "/sc22.jpg" },
        { name: "", image: "/sc23.jpg" },
        { name: "", image: "/sc24.jpg" },
        { name: "", image: "/sc25.jpg" },
        { name: "", image: "/sc26.jpg" },
        { name: "", image: "/sc27.jpg" },
      ],
      events: [
        {
          name: "Hackfest'9",
          image: "/sc210.png",
        },
        {
          name: "Capture The Flag Competition",
          image: "/sc211.jpg",
        },
        {
          name: "Web Exploitation Workshop",
          image: "/sc212.jpg",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image: "/sc21.jpg",
    },
    {
      id: "2",
      name: "IEEE",
      description:
        "The IEEE Sup'Com Student Branch empowers students through workshops, competitions, and events, fostering innovation, collaboration, and leadership in technology and engineering.",
      staff: [
        { name: "", image: "/ieee2.jpg" },
        { name: "", image: "/ieee3.jpg" },
        { name: "", image: "/ieee4.jpg" },
        { name: "", image: "/ieee5.jpg" },
        { name: "", image: "/ieee6.jpg" },
        { name: "", image: "/ieee7.jpg" },
      ],
      events: [
        {
          name: "TSYP'12",
          image: "/ieee9.jpg",
        },
        {
          name: "IEEE Day",
          image: "/ieee10.jpg",
        },
        {
          name: "Hack 4 IoT 2.0",
          image: "/ieee11.jpg",
        },
      ],
      activities: ["Workshops", "Competitions", "Training Sessions"],
      image: "/ieee1.png",
    },
  ];

  const club = clubsData.find((club) => club.id === id);

  if (!club) {
    return <h1>Club not found</h1>;
  }

  return (
    <div className="club-details">
      {/* Sticky Navbar */}
      <nav className="sticky-navbar">
        <a href="#info">About</a>
        <a href="#staff">Staff</a>
        <a href="#events">Events</a>
      </nav>

      {/* Hero Section */}
      <header className="hero-section" data-aos="fade-in">
        <img src={club.image} alt={club.name} className="hero-image" />
        <div className="hero-overlay">
          <h1>{club.name}</h1>
        </div>
      </header>

      {/* Club Info Section */}
      <section id="info" className="club-info" data-aos="fade-up">
        <h1>About {club.name}</h1>
        <p>{club.description}</p>
        <ul className="activities-list">
          {club.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </section>

      {/* Staff Members Section */}
      <section id="staff" className="club-section" data-aos="fade-up">
        <h2>Staff Members</h2>
        <div className="staff-list">
          {club.staff.map((member, index) => (
            <div key={index} className="staff-card">
              <img
                src={member.image}
                alt={member.name}
                className="staff-image"
              />
              <p>{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="club-section" data-aos="fade-up">
        <h2>Upcoming Events</h2>
        <div className="events-grid">
          {club.events.map((event, index) => (
            <div key={index} className="event-card">
              <img src={event.image} alt={event.name} className="event-image" />
              <p>{event.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Sup'Com Clubs. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ClubDetails;
