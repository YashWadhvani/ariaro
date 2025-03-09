import React from "react";
import SpeakerCard from "../components/SpeakerCard";
import TeamMemberCard from "../components/TeamMemberCard";
import "../styles/Speakers.css"
import TeamMembers from "../assets/Team";

// const speakersData = [
//   { name: "Dr. Jane Smith", title: "AI Researcher", topic: "Future of AI", image: "speaker1.jpg" },
//   { name: "Mr. John Doe", title: "Cybersecurity Expert", topic: "Cyber Threats in 2025", image: "speaker2.jpg" },
//   { name: "Ms. Emily White", title: "Blockchain Developer", topic: "Decentralization & Web3", image: "speaker3.jpg" },
// ];

function Team() {
  return (
    <div className="speakers-container">
      <h1>Meet Our Team</h1>
      <div className="speakers-grid">
        {TeamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  )
}

export default Team