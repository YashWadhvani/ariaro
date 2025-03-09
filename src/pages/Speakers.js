import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import "../styles/ProfileCards.css"
import SpeakerInfo from "../assets/SpeakerInfo";

// const speakersData = [
//   { name: "Dr. Jane Smith", title: "AI Researcher", topic: "Future of AI", image: "speaker1.jpg" },
//   { name: "Mr. John Doe", title: "Cybersecurity Expert", topic: "Cyber Threats in 2025", image: "speaker2.jpg" },
//   { name: "Ms. Emily White", title: "Blockchain Developer", topic: "Decentralization & Web3", image: "speaker3.jpg" },
// ];

function Speakers() {
  return (
    <div className="profile-cards-container">
      <h1>Meet Our Speakers</h1>
      <div className="profile-cards-grid">
        {SpeakerInfo.map((speaker, index) => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </div>
  )
}

export default Speakers