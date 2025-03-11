import React, { useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import "../styles/ProfileCards.css";

function Speakers() {
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    fetch("https://ariaro-backend.onrender.com/speakers") // Replace with actual backend URL
      .then((res) => res.json())
      .then((data) => setSpeakers(data))
      .catch((err) => console.error("Error fetching speakers:", err));
  }, []);

  return (
    <div className="profile-cards-container">
      <h1>Meet Our Speakers</h1>
      <div className="profile-cards-grid">
        {speakers.length > 0 ? (
          speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))
        ) : (
          <p>Loading speakers...</p>
        )}
      </div>
    </div>
  );
}

export default Speakers;
