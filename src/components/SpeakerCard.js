import React from 'react'

function SpeakerCard({ name, designation, image }) {
    return (
        <div className="speaker-card">
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      );
    };

export default SpeakerCard