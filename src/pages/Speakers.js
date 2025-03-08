import SpeakerCard from "../components/SpeakerCard";
import React from "react";

function Speaker() {
    const speakers = [
        {
            name: "Hiten Codes",
            designation: "Guest Speaker",
            image: "/assets/hiten.jpg",
        },
    ];

    return (
        <>
            <h1>Speakers</h1>
            {speakers.map((speaker, index) => (
                <SpeakerCard key={index} {...speaker} />
            ))}
        </>
    );
}

export default Speaker;
