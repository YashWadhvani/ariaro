// import React, { useEffect, useState } from "react";
// import TeamMemberCard from "../components/TeamMemberCard";
// import "../styles/ProfileCards.css";

// function Team() {
//     const [teamMembers, setTeamMembers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("https://ariaro-backend.onrender.com/team-members") // Replace with actual backend URL
//             .then((res) => res.json())
//             .then((data) => {
//                 setTeamMembers(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Error fetching team members:", err);
//                 setLoading(false);
//             });
//     }, []);

//     // Group team members by section
//     const sections = ["Event Coordinators", "Faculty Members", "Crew Team"];
//     const groupedMembers = sections.reduce((acc, section) => {
//         acc[section] = teamMembers.filter(member => member.section === section);
//         return acc;
//     }, {});

//     return (
//         <div className="profile-cards-container">
//             <h1>Meet Our Team</h1>
//             {loading ? (
//                 <p>Loading team members...</p>
//             ) : (
//                 sections.map((section) => (
//                     groupedMembers[section].length > 0 && (
//                         <div key={section}>
//                             <h2 className="team-section-title">{section}</h2>
//                             <div className="profile-cards-grid">
//                                 {groupedMembers[section].map((member, index) => (
//                                     <TeamMemberCard key={index} {...member} />
//                                 ))}
//                             </div>
//                         </div>
//                     )
//                 ))
//             )}
//         </div>
//     );
// }

// export default Team;

import React, { useEffect, useState } from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import "../styles/ProfileCards.css";

function Team() {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/team-members") // Replace with actual backend URL
            .then((res) => res.json())
            .then((data) => {
                setTeamMembers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching team members:", err);
                setLoading(false);
            });
    }, []);

    // Define sections
    const sections = ["Event Coordinators", "Faculty Members", "Crew Team"];

    // Define predefined order inside each section
    const teamOrder = {
        "Event Coordinators": [
            "Dr. Kusum Lata Agarwal",
            "Dr. Puneet Sharma",
            "Dr. Manivel Kandasamy",
            "Naveen Kandwal",
            "Sarjak Patel",
            "Yash Wadhvani",
        ],
        // "Faculty Members": ["Dr. Robert Brown", "Prof. Emily White"],
        "Crew Team": [
            "Parth Patel",
            "Tirth Borad",
            "Jainam Vora",
            "Ronit Parekh",
            "Dwij Chandnani",
            "Astha Patel",
            "Sneha Agrawal",
            "Sumantu Chhatrodiya",
            "Rishi Mehta",
            "Shiv Gamit",
            "Aalay Kabariya",
            "Shreemad Kumbhani",
            "Honey Gujarati",
            "Khushi Jain",
            "Vedant Thakker",
            "Aarya Maru",
            "Jeel Patel",
            "Vaidehi Shah",
        ],
    };

    // Group and sort team members based on predefined order
    const groupedMembers = sections.reduce((acc, section) => {
        const sectionMembers = teamMembers.filter(
            (member) => member.section === section
        );

        // Sort members based on predefined order
        const orderedMembers = sectionMembers.sort((a, b) => {
            const indexA = teamOrder[section]?.indexOf(a.name) ?? Infinity;
            const indexB = teamOrder[section]?.indexOf(b.name) ?? Infinity;

            if (indexA !== -1 && indexB !== -1) {
                return indexA - indexB; // Sort known names based on order list
            }
            if (indexA !== -1) return -1; // Known name comes first
            if (indexB !== -1) return 1; // Known name comes first

            return 0; // Maintain order for unknown names
        });

        acc[section] = orderedMembers;
        return acc;
    }, {});

    return (
        <div className="profile-cards-container">
            <h1>Meet Our Team</h1>
            {loading ? (
                <p>Loading team members...</p>
            ) : (
                sections.map(
                    (section) =>
                        groupedMembers[section].length > 0 && (
                            <div key={section}>
                                <h2 className="team-section-title">
                                    {section}
                                </h2>
                                <div className="profile-cards-grid">
                                    {groupedMembers[section].map(
                                        (member, index) => (
                                            <TeamMemberCard
                                                key={index}
                                                {...member}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )
                )
            )}
        </div>
    );
}

export default Team;
