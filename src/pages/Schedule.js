import React, { useState } from "react";
import "../styles/Schedule.css";

function Schedule() {
  //   const [selectedDay, setSelectedDay] = useState("Day 1");
  //   const [openSection, setOpenSection] = useState(null);
  //   const scheduleData = {
  //       "Day 1": {
  //           "Opening Ceremony": ["09:00 AM - 10:00 AM (Auditorium)"],
  //           "Speaker Sessions & Panel Discussions": ["10:00 AM - 12:00 PM"],
  //           Break: ["12:00 PM - 01:00 PM"],
  //           "Workshops & Non-Tech Events": [
  //               "Cloud (WO2)",
  //               "IoT (WO1)",
  //               "Drone (WO3)",
  //               "Photography (NT01)",
  //               "UI/UX (NT02)",
  //               "Tech Treasure Hunt (TTH)",
  //           ],
  //           Continuation: ["02:00 PM - 05:00 PM"],
  //       },
  //       "Day 2": {
  //           "Panel Discussion": ["09:00 AM - 12:00 PM (Auditorium)"],
  //           Break: ["12:00 PM - 01:00 PM"],
  //           "Workshops & Non-Tech Events": [
  //               "Game Development (WO4)",
  //               "AI (WO5)",
  //               "MUN (NT03)",
  //               "Capture The Flag (CTF)",
  //           ],
  //           "Cultural Night": ["05:30 PM - 08:30 PM (Amphitheater)"],
  //       },
  //       "Day 3": {
  //           "Panel Discussion": ["09:00 AM - 12:00 PM (Auditorium)"],
  //           Break: ["12:00 PM - 01:00 PM"],
  //           "Workshops & Competitions": [
  //               "Cybersecurity (WO6)",
  //               "Drone (WO3)",
  //               "Robotics (TO4)",
  //               "Project Exhibition",
  //           ],
  //           "Closing Ceremony & Prize Distribution": [
  //               "04:00 PM - 05:00 PM (Auditorium)",
  //           ],
  //       },
  //   };
  //   const toggleSection = (section) => {
  //     setOpenSection(openSection === section ? null : section);
  //   };
  
  //   return (
  //     <div className="schedule-container">
  //       <h1>Event Schedule</h1>
  //       <div className="schedule-buttons">
  //         {Object.keys(scheduleData).map((day) => (
  //           <button 
  //             key={day} 
  //             className={selectedDay === day ? "active" : ""}
  //             onClick={() => setSelectedDay(day)}
  //           >
  //             {day}
  //           </button>
  //         ))}
  //       </div>
  //       <div className="schedule-glass">
  //         {Object.entries(scheduleData[selectedDay]).map(([category, events]) => (
  //           <div key={category} className="schedule-category">
  //             <h2 onClick={() => toggleSection(category)} className="accordion-title">{category}</h2>
  //             {openSection === category && (
  //               <ul>
  //                 {events.map((event, index) => (
  //                   <li key={index}>{event}</li>
  //                 ))}
  //               </ul>
  //             )}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  // export default Schedule;

  const [selectedDay, setSelectedDay] = useState("Day 1");
  
  const scheduleData = {
    "Day 1": [
      { time: "09:00 AM - 10:00 AM", event: "Opening Ceremony", location: "Auditorium" },
      { time: "10:00 AM - 12:00 PM", event: "Speaker Sessions & Panel Discussions" },
      { time: "12:00 PM - 01:00 PM", event: "Break" },
      { time: "01:00 PM - 05:00 PM", event: "Workshops & Non-Tech Events", details: ["Cloud (WO2)", "IoT (WO1)", "Drone (WO3)", "Photography (NT01)", "UI/UX (NT02)", "Tech Treasure Hunt (TTH)"] }
    ],
    "Day 2": [
      { time: "09:00 AM - 12:00 PM", event: "Panel Discussion", location: "Auditorium" },
      { time: "12:00 PM - 01:00 PM", event: "Break" },
      { time: "01:00 PM - 05:00 PM", event: "Workshops & Non-Tech Events", details: ["Game Development (WO4)", "AI (WO5)", "MUN (NT03)", "Capture The Flag (CTF)"] },
      { time: "05:30 PM - 08:30 PM", event: "Cultural Night", location: "Amphitheater" }
    ],
    "Day 3": [
      { time: "09:00 AM - 12:00 PM", event: "Panel Discussion", location: "Auditorium" },
      { time: "12:00 PM - 01:00 PM", event: "Break" },
      { time: "01:00 PM - 05:00 PM", event: "Workshops & Competitions", details: ["Cybersecurity (WO6)", "Drone (WO3)", "Robotics (TO4)", "Project Exhibition"] },
      { time: "04:00 PM - 05:00 PM", event: "Closing Ceremony & Prize Distribution", location: "Auditorium" }
    ]
  };

  return (
    <div className="schedule-container">
      <h1>Event Schedule</h1>
      <div className="schedule-buttons">
        {Object.keys(scheduleData).map((day) => (
          <button 
            key={day} 
            className={selectedDay === day ? "active" : ""}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="timeline">
        {scheduleData[selectedDay].map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-time">{item.time}</div>
            <div className="timeline-content">
              <h2>{item.event}</h2>
              {item.location && <p>Location: {item.location}</p>}
              {item.details && (
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Schedule;