import React, { useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import "../styles/ProfileCards.css";

function Speakers() {
    const [speakers, setSpeakers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/speakers") 
            .then((res) => res.json())
            .then((data) => {
                setSpeakers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching speakers:", err);
                setLoading(false);
            });
    }, []);

    const sections = ["Chief Guest", "Guest of Honour", "Panel Discussion", "Workshops"];

    const speakerOrder = {
        "Chief Guest": ["Dr. Rupesh Vasani"],
        "Guest of Honour": ["Nilesh Vaghela","Dr. Nilesh Modi"],
        "Panel Discussion": [
            "Nilesh Vaghela",
            "Dr. Nidhi Arora",
            "Viral Parmar",
            "Dr. Ravi Mundra",
            "Col. Vinod Shah",
            "Manmeet Thakur",
            "Pratik Rathod",
            "Harsh Walia",
            "Tilak Masrani",
            "Manthan Tripathi",
            "Dr. Puneet Sharma",
            
            "Dr. Animesh Agrawal",
            "Dr. Gaurav Londhe",
        ],
        "Workshops": [
            "Nilesh Vaghela",
            "Harsh Walia",
            "Sundar Mahalingam",
            "Kaustuv Mohanty",
            "Vasu Shah"
        ]
    };

    const groupedSpeakers = sections.reduce((acc, section) => {
        const sectionSpeakers = speakers.filter(speaker => 
            Array.isArray(speaker.section) 
                ? speaker.section.includes(section) 
                : speaker.section === section
        );

        const orderedSpeakers = sectionSpeakers.sort((a, b) => {
            const indexA = speakerOrder[section]?.indexOf(a.name) ?? Infinity;
            const indexB = speakerOrder[section]?.indexOf(b.name) ?? Infinity;
            return indexA - indexB;
        });

        acc[section] = orderedSpeakers;
        return acc;
    }, {});

    return (
        <div className="profile-cards-container">
            <h1>Meet Our Speakers</h1>
            {loading ? (
                <p>Loading speakers...</p>
            ) : (
                sections.map((section) => (
                    groupedSpeakers[section].length > 0 && (
                        <div key={section} className="speaker-container">
                            <h2 className="team-section-title">{section}</h2>
                            <div className="profile-cards-grid">
                                {groupedSpeakers[section].map((speaker, index) => (
                                    <SpeakerCard key={index} {...speaker} />
                                ))}
                            </div>
                        </div>
                    )
                ))
            )}
        </div>
    );
}

export default Speakers;