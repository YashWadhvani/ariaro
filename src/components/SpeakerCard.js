import React from "react";
import "../styles/Speakers.css"

function SpeakerCard({ name, designation, image, title, topic }) {
    return (
        <div className="speaker-card">
            <img src={image} alt={name} className="speaker-image" />
            <h2>{name}</h2>
            <h3>{designation}</h3>
            <h3>{title}</h3>
            <p>Topic: {topic}</p>
        </div>
    );
}

export default SpeakerCard;
