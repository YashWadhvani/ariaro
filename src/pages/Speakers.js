// import React, { useEffect, useState } from "react";
// import SpeakerCard from "../components/SpeakerCard";
// import "../styles/ProfileCards.css";

// // Predefined Order of Speaker Names
// const speakerOrder = [
//   "Dr. Rupesh Vasani",
//   "Dr. Nilesh Modi",
//   "Nilesh Vaghela",
//   "Dr. Nidhi Arora",
//   "Viral Parmar",
//   "Pratik Rathod",
//   "Harsh Walia",
//   "Tilak Masrani",
//   "Manthan Tripathi",
//   "Dr. Puneet Sharma",
//   "Dr. Animesh Agrawal",
//   "Dr. Gaurav Londhe",
//   "Sundar Mahalingam",
//   "Sanjay Ajani",
//   "Manender Dutt",
//   "Divya Mohan"
// ];

// function Speakers() {
//     const [speakers, setSpeakers] = useState([]);
//     // const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("https://ariaro-backend.onrender.com/speakers") // Replace with actual backend URL
//             .then((res) => res.json())
//             .then((data) => {
//                 // Sort speakers based on the predefined order
//                 const sortedSpeakers = data.sort((a, b) => {
//                     const indexA = speakerOrder.indexOf(a.name);
//                     const indexB = speakerOrder.indexOf(b.name);

//                     if (indexA !== -1 && indexB !== -1) {
//                         return indexA - indexB; // Sort known names based on order list
//                     }
//                     if (indexA !== -1) return -1; // Known name comes first
//                     if (indexB !== -1) return 1; // Known name comes first

//                     return 0; // Maintain order for unknown names
//                 });

//                 setSpeakers(sortedSpeakers);
//                 // setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Error fetching speakers:", err);
//                 // setLoading(false);
//             });
//     }, []);

//     return (
//         <div className="profile-cards-container">
//             <h1>Meet Our Speakers</h1>
//             <div className="profile-cards-grid">
//                 {speakers.length > 0 ? (
//                     speakers.map((speaker, index) => (
//                         <SpeakerCard key={index} {...speaker} />
//                     ))
//                 ) : (
//                     <p>Loading speakers...</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Speakers;

import React, { useEffect, useState } from "react";
import SpeakerCard from "../components/SpeakerCard";
import "../styles/ProfileCards.css";

function Speakers() {
    const [speakers, setSpeakers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/speakers") // Replace with actual backend URL
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

    // Define sections
    const sections = ["Chief Guest", "Guest of Honour", "Panel Discussion", "Workshops"];

    // Define predefined order inside each section
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

    // Group and sort speakers based on predefined order, allowing multiple sections
    const groupedSpeakers = sections.reduce((acc, section) => {
        const sectionSpeakers = speakers.filter(speaker => 
            Array.isArray(speaker.section) 
                ? speaker.section.includes(section) // If speaker belongs to multiple sections
                : speaker.section === section
        );

        // Sort speakers based on predefined order
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
                        <div key={section}>
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