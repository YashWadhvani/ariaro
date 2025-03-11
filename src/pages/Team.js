import React, {useState, useEffect} from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import "../styles/ProfileCards.css"
// import TeamMembers from "../assets/TeamMembers";

function Team() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team-members") // Replace with actual backend URL
      .then((res) => res.json())
      .then((data) => setTeamMembers(data))
      .catch((err) => console.error("Error fetching team members:", err));
  }, []);

  return (
    <div className="profile-cards-container">
      <h1>Meet Our Team</h1>
      <div className="profile-cards-grid">
      {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))
        ) : (
          <p>Loading team members...</p>
        )}
      </div>
    </div>
  )
}

export default Team