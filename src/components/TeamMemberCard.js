import React from "react";
import "../styles/Speakers.css"
import LinkedInIcon from "../assets/Socials/LinkedIn.png"

function TeamMemberCard({ name, image, role, domain, linkedIn }) {
    return (
        <div className="speaker-card">
            <img src={image} alt={name} className="speaker-image" />
            <h2>{name}</h2>
            <h3>{role}</h3>
            <h3>{domain}</h3>
            {/* <p>Topic: {topic}</p> */}
            <a href={linkedIn}><img src={LinkedInIcon} width={"40px"}></img></a>
        </div>
    );
}

export default TeamMemberCard;
