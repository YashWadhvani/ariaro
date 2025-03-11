import React from "react";
import "../styles/ProfileCards.css"
import LinkedInIcon from "../assets/Socials/linkedin-new.png"

function SpeakerCard({ name, image, position, company, linkedin_url }) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <h4>{name}</h4>
            <p>{position}</p>
            <p>{company}</p>
            {linkedin_url && (
                <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
                    <img src={LinkedInIcon} width="40px" alt="LinkedIn Profile" />
                </a>
            )}
        </div>
    );
}

export default SpeakerCard;
