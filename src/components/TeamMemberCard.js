import React from "react";
import "../styles/ProfileCards.css"
import LinkedInIcon from "../assets/Socials/linkedin-new.png"

function TeamMemberCard({ name, image, role, domain, linkedIn }) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <h4>{name}</h4>
            <p>{role}</p>
            <p>{domain}</p>
            <a href={linkedIn}><img src={LinkedInIcon} width={"40px"} alt="Profile"></img></a>
        </div>
    );
}

export default TeamMemberCard;
