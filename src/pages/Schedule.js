// import React, { useState } from "react";
// import "../styles/Schedule.css";

// function Schedule() {
//   //   const [selectedDay, setSelectedDay] = useState("Day 1");
//   //   const [openSection, setOpenSection] = useState(null);
//   //   const scheduleData = {
//   //       "Day 1": {
//   //           "Opening Ceremony": ["09:00 AM - 10:00 AM (Auditorium)"],
//   //           "Speaker Sessions & Panel Discussions": ["10:00 AM - 12:00 PM"],
//   //           Break: ["12:00 PM - 01:00 PM"],
//   //           "Workshops & Non-Tech Events": [
//   //               "Cloud (WO2)",
//   //               "IoT (WO1)",
//   //               "Drone (WO3)",
//   //               "Photography (NT01)",
//   //               "UI/UX (NT02)",
//   //               "Tech Treasure Hunt (TTH)",
//   //           ],
//   //           Continuation: ["02:00 PM - 05:00 PM"],
//   //       },
//   //       "Day 2": {
//   //           "Panel Discussion": ["09:00 AM - 12:00 PM (Auditorium)"],
//   //           Break: ["12:00 PM - 01:00 PM"],
//   //           "Workshops & Non-Tech Events": [
//   //               "Game Development (WO4)",
//   //               "AI (WO5)",
//   //               "MUN (NT03)",
//   //               "Capture The Flag (CTF)",
//   //           ],
//   //           "Cultural Night": ["05:30 PM - 08:30 PM (Amphitheater)"],
//   //       },
//   //       "Day 3": {
//   //           "Panel Discussion": ["09:00 AM - 12:00 PM (Auditorium)"],
//   //           Break: ["12:00 PM - 01:00 PM"],
//   //           "Workshops & Competitions": [
//   //               "Cybersecurity (WO6)",
//   //               "Drone (WO3)",
//   //               "Robotics (TO4)",
//   //               "Project Exhibition",
//   //           ],
//   //           "Closing Ceremony & Prize Distribution": [
//   //               "04:00 PM - 05:00 PM (Auditorium)",
//   //           ],
//   //       },
//   //   };
//   //   const toggleSection = (section) => {
//   //     setOpenSection(openSection === section ? null : section);
//   //   };
  
//   //   return (
//   //     <div className="schedule-container">
//   //       <h1>Event Schedule</h1>
//   //       <div className="schedule-buttons">
//   //         {Object.keys(scheduleData).map((day) => (
//   //           <button 
//   //             key={day} 
//   //             className={selectedDay === day ? "active" : ""}
//   //             onClick={() => setSelectedDay(day)}
//   //           >
//   //             {day}
//   //           </button>
//   //         ))}
//   //       </div>
//   //       <div className="schedule-glass">
//   //         {Object.entries(scheduleData[selectedDay]).map(([category, events]) => (
//   //           <div key={category} className="schedule-category">
//   //             <h2 onClick={() => toggleSection(category)} className="accordion-title">{category}</h2>
//   //             {openSection === category && (
//   //               <ul>
//   //                 {events.map((event, index) => (
//   //                   <li key={index}>{event}</li>
//   //                 ))}
//   //               </ul>
//   //             )}
//   //           </div>
//   //         ))}
//   //       </div>
//   //     </div>
//   //   );
//   // };
//   // export default Schedule;

//   const [selectedDay, setSelectedDay] = useState("Day 1");
  
//   const scheduleData = {
//     "Day 1": [
//       { time: "09:00 AM - 10:00 AM", event: "Opening Ceremony", location: "Auditorium" },
//       { time: "10:00 AM - 12:00 PM", event: "Speaker Sessions & Panel Discussions" },
//       { time: "12:00 PM - 01:00 PM", event: "Break" },
//       { time: "01:00 PM - 05:00 PM", event: "Workshops & Non-Tech Events", details: ["Cloud (WO2)", "IoT (WO1)", "Drone (WO3)", "Photography (NT01)", "UI/UX (NT02)", "Tech Treasure Hunt (TTH)"] }
//     ],
//     "Day 2": [
//       { time: "09:00 AM - 12:00 PM", event: "Panel Discussion", location: "Auditorium" },
//       { time: "12:00 PM - 01:00 PM", event: "Break" },
//       { time: "01:00 PM - 05:00 PM", event: "Workshops & Non-Tech Events", details: ["Game Development (WO4)", "AI (WO5)", "MUN (NT03)", "Capture The Flag (CTF)"] },
//       { time: "05:30 PM - 08:30 PM", event: "Cultural Night", location: "Amphitheater" }
//     ],
//     "Day 3": [
//       { time: "09:00 AM - 12:00 PM", event: "Panel Discussion", location: "Auditorium" },
//       { time: "12:00 PM - 01:00 PM", event: "Break" },
//       { time: "01:00 PM - 05:00 PM", event: "Workshops & Competitions", details: ["Cybersecurity (WO6)", "Drone (WO3)", "Robotics (TO4)", "Project Exhibition"] },
//       { time: "04:00 PM - 05:00 PM", event: "Closing Ceremony & Prize Distribution", location: "Auditorium" }
//     ]
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
//       <div className="timeline">
//         {scheduleData[selectedDay].map((item, index) => (
//           <div key={index} className="timeline-item">
//             <div className="timeline-time">{item.time}</div>
//             <div className="timeline-content">
//               <h2>{item.event}</h2>
//               {item.location && <p>Location: {item.location}</p>}
//               {item.details && (
//                 <ul>
//                   {item.details.map((detail, idx) => (
//                     <li key={idx}>{detail}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Schedule;

import React, { useState } from "react";
import "../styles/Schedule.css";

const events = {
  workshops: [
    {
      title: "IoT [26th]",
      description:
        "Step into the future with IoT and Arduino! This hands-on workshop at Ariaro 3.0 will introduce you to the Internet of Things (IoT) and guide you through building smart projects using Arduino. Learn how to connect devices, collect data, and automate processes using IoT technologies.<br/><br/>💡 What You’ll Learn?<br/>✅ Introduction to IoT & Arduino<br/>✅ Working with Sensors & Actuators<br/>✅ IoT Communication & Data Handling<br/>✅ Hands-on Project: Building Smart IoT Solutions<br/><br/>📅 Date: 26th March 2025<br/>⏰ Time: 11:00 AM – 5:00 PM<br/>📍 Venue: Karnavati University<br/>💰 Price: ₹2,500 per participant<br/><br/>⚠ Important Payment Information:<br/>As this is a highly specialized workshop, registrations will be scrutinized before confirmation. Once shortlisted, a payment link will be shared via email for final registration.",
      date: "March 26",
      event_id: "evt-CHfEF6FsXh9qPLD",
    },
    {
      title: "Cloud Computing [26th]",
      description:
        "Unlock the power of the cloud! This workshop at Ariaro 3.0 will introduce you to AWS, cloud infrastructure, deployment strategies, and security best practices. Learn how cloud technologies are transforming industries and gain hands-on experience with real-world cloud solutions.<br/><br/>💡 What You’ll Learn?<br/>✅ Introduction to Cloud Computing & AWS<br/>✅ Cloud Deployment & Management<br/>✅ Security & Scalability in Cloud Environments<br/>✅ Practical Hands-on Session<br/><br/>📅 Date: 26th March 2025<br/>⏰ Time: 1:00 PM – 5:00 PM<br/>📍 Venue: Karnavati University<br/>💰 Price: ₹2,500 per participant",
      date: "March 26",
      event_id: "evt-XYZ123ABC",
    },
  ],
};

function Schedule() {
  const [selectedDay, setSelectedDay] = useState("Day 1");

  const scheduleData = {
    "Day 1": [
      { time: "09:00 AM - 10:00 AM", events: [{ title: "Opening Ceremony", location: "Auditorium" }] },
      { time: "10:00 AM - 12:00 PM", events: [{ title: "Speaker Sessions & Panel Discussions" }] },
      { time: "12:00 PM - 01:00 PM", events: [{ title: "Break" }] },
      { time: "01:00 PM - 05:00 PM", events: events.workshops.map(w => ({ title: w.title })) },
    ],
    "Day 2": [
      { time: "09:00 AM - 12:00 PM", events: [{ title: "Panel Discussion", location: "Auditorium" }] },
      { time: "12:00 PM - 01:00 PM", events: [{ title: "Break" }] },
      { time: "01:00 PM - 05:00 PM", events: [
        { title: "Game Development", location: "Lab A" },
        { title: "AI", location: "Lab B" },
        { title: "MUN", location: "Conference Room" },
        { title: "Capture The Flag", location: "Cyber Lab" },
      ] },
      { time: "05:30 PM - 08:30 PM", events: [{ title: "Cultural Night", location: "Amphitheater" }] },
    ],
    "Day 3": [
      { time: "09:00 AM - 12:00 PM", events: [{ title: "Panel Discussion", location: "Auditorium" }] },
      { time: "12:00 PM - 01:00 PM", events: [{ title: "Break" }] },
      { time: "01:00 PM - 05:00 PM", events: [
        { title: "Cybersecurity", location: "Lab C" },
        { title: "Drone", location: "Lab D" },
        { title: "Robotics", location: "Robotics Lab" },
        { title: "Project Exhibition", location: "Main Hall" },
      ] },
      { time: "04:00 PM - 05:00 PM", events: [{ title: "Closing Ceremony & Prize Distribution", location: "Auditorium" }] },
    ],
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
        {scheduleData[selectedDay].map((slot, index) => (
          <div key={index} className="timeline-slot">
            <div className="timeline-time">{slot.time}</div>
            <div className="timeline-events">
              {slot.events.map((event, idx) => (
                <div key={idx} className="data-card">
                  <h2>{event.title}</h2>
                  {event.location && <p>📍 {event.location}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
