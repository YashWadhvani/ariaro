import React from "react";
import "../styles/ProfileCards.css"
import LinkedInIcon from "../assets/Socials/LinkedIn.png"

function SpeakerCard({ name, image, title, linkedIn }) {
    return (
        <div className="profile-card">
            <img src={image} alt={name} className="profile-image" />
            <h2>{name}</h2>
            {/* <h3>{designation}</h3> */}
            <h3>{title}</h3>
            {/* <p>Topic: {topic}</p> */}
            <a href={linkedIn}><img src={LinkedInIcon} width={"40px"} alt="Profile"></img></a>
        </div>
    );
}

export default SpeakerCard;
