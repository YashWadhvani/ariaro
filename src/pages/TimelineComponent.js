// import React, { useEffect, useState } from "react";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// const TimelineComponent = () => {
//     const [events, setEvents] = useState([]);
//     const [selectedDate, setSelectedDate] = useState("2025-03-26");

//     useEffect(() => {
//         fetch("https://ariaro-backend.onrender.com/events") // API CALL
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("API Response:", data);

//                 if (!data || !data[0]?.events) {
//                     console.error("Invalid API response:", data);
//                     return;
//                 }

//                 // Extract events and format them
//                 const formattedEvents = data[0].events.map((event) => ({
//                     title: event.title,
//                     date: event.date.split("T")[0],  // Extract YYYY-MM-DD
//                     category: event.category,
//                     description: event.description || "No Description Available",
//                     start_time: formatTime(event.start_time),
//                     end_time: formatTime(event.end_time),
//                     venue: event.venue
//                 }));

//                 console.log("Formatted Events:", formattedEvents);
//                 setEvents(formattedEvents);
//             })
//             .catch((error) => console.error("Error fetching events:", error));
//     }, []);

//     // Function to format time (WITHOUT timezone conversion)
//     const formatTime = (isoString) => {
//         const date = new Date(isoString);
//         return date.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true
//         });
//     };

//     const filteredEvents = events.filter(event => event.date === selectedDate);

//     return (
//         <div style={{ width: "100%", padding: "5rem 2rem" }}>
//             {/* Tabs for Date Selection */}
//             <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
//                 {["2025-03-26", "2025-03-27", "2025-03-28"].map((date) => (
//                     <button
//                         key={date}
//                         onClick={() => setSelectedDate(date)}
//                         style={{
//                             padding: "10px 15px",
//                             cursor: "pointer",
//                             border: "none",
//                             backgroundColor: selectedDate === date ? "#007bff" : "#ccc",
//                             color: "#fff",
//                             fontSize: "16px",
//                             borderRadius: "5px"
//                         }}
//                     >
//                         {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
//                     </button>
//                 ))}
//             </div>

//             {/* Timeline */}
//             {filteredEvents.length > 0 ? (
//                 <VerticalTimeline>
//                     {filteredEvents.map((event, index) => (
//                         <VerticalTimelineElement
//                             key={index}
//                             date={`${event.start_time} - ${event.end_time}`} // ✅ Displays time directly
//                             iconStyle={{
//                                 background: event.category === "Workshop"
//                                     ? "#007bff"
//                                     : event.category === "Technical"
//                                     ? "#f39c12"
//                                     : "#28a745",
//                                 color: "#fff"
//                             }}
//                             contentStyle={{ background: "#f9f9f9", color: "#000" }}
//                         >
//                             <h3>{event.title}</h3>
//                             <h4>{event.category}</h4>
//                             <h5>{event.venue}</h5>
//                             <p>{event.description}</p>
//                         </VerticalTimelineElement>
//                     ))}
//                 </VerticalTimeline>
//             ) : (
//                 <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
//                     🚫 No Events for this day.
//                 </p>
//             )}
//         </div>
//     );
// };

// export default TimelineComponent;

// import React, { useEffect, useState } from "react";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// const TimelineComponent = () => {
//     const [events, setEvents] = useState([]);
//     const [selectedDate, setSelectedDate] = useState("2025-03-26");

//     useEffect(() => {
//         fetch("https://ariaro-backend.onrender.com/events") // API CALL
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("API Response:", data);

//                 if (!data || !data[0]?.events) {
//                     console.error("Invalid API response:", data);
//                     return;
//                 }

//                 // Extract and format events
//                 const formattedEvents = data[0].events.map((event) => ({
//                     title: event.title,
//                     date: event.date.split("T")[0],  // Extract YYYY-MM-DD
//                     category: event.category,
//                     description: event.description || "No Description Available",
//                     start_time: event.start_time,
//                     end_time: event.end_time,
//                     venue: event.venue
//                 }));

//                 console.log("Formatted Events:", formattedEvents);
//                 setEvents(formattedEvents);
//             })
//             .catch((error) => console.error("Error fetching events:", error));
//     }, []);

//     // Function to format time (WITHOUT timezone conversion)
//     const formatTime = (timeString) => {
//         if (!timeString) return "Invalid Time"; // Handle missing values
//         const date = new Date(timeString);
        
//         if (isNaN(date.getTime())) {
//             console.error("Invalid Date:", timeString);
//             return "Invalid Time";
//         }
    
//         return date.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true
//         });
//     };

//     // Filter events by selected date
//     const filteredEvents = events.filter(event => event.date === selectedDate);

//     // Sort events by start time (ascending order)
//     filteredEvents.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

//     // Group events by start time
//     const groupedEvents = filteredEvents.reduce((acc, event) => {
//         if (!acc[event.start_time]) {
//             acc[event.start_time] = [];
//         }
//         acc[event.start_time].push(event);
//         return acc;
//     }, {});

//     // Sort group keys in ascending order
//     const sortedStartTimes = Object.keys(groupedEvents).sort((a, b) => new Date(a) - new Date(b));

//     return (
//         <div style={{ width: "100%", padding: "5rem 2rem" }}>
//             {/* Tabs for Date Selection */}
//             <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
//                 {["2025-03-26", "2025-03-27", "2025-03-28"].map((date) => (
//                     <button
//                         key={date}
//                         onClick={() => setSelectedDate(date)}
//                         style={{
//                             padding: "10px 15px",
//                             cursor: "pointer",
//                             border: "none",
//                             backgroundColor: selectedDate === date ? "#007bff" : "#ccc",
//                             color: "#fff",
//                             fontSize: "16px",
//                             borderRadius: "5px"
//                         }}
//                     >
//                         {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
//                     </button>
//                 ))}
//             </div>

//             {/* Timeline */}
//             {sortedStartTimes.length > 0 ? (
//                 <VerticalTimeline>
//                     {sortedStartTimes.map((start_time, index) => (
//                         <VerticalTimelineElement
//                             key={index}
//                             date={`${formatTime(start_time)} - ${formatTime(groupedEvents[start_time][0].end_time)}`}
//                             iconStyle={{ background: "#444", color: "#fff" }}
//                             contentStyle={{ background: "#f9f9f9", color: "#000" }}
//                         >
//                             <h3>🕒 {formatTime(start_time)}</h3>

//                             {/* Nested Timeline for events at the same start time */}
//                             <div style={{ paddingLeft: "20px", borderLeft: "3px solid #ccc" }}>
//                                 {groupedEvents[start_time].map((event, idx) => (
//                                     <div key={idx} style={{ marginBottom: "10px" }}>
//                                         <h4 style={{ color: event.category === "Workshop" ? "#007bff" : event.category === "Technical" ? "#f39c12" : "#28a745" }}>
//                                             {event.title} ({event.category})
//                                         </h4>
//                                         <h5>{event.venue}</h5>
//                                         {/* <p>{event.description}</p> */}
//                                     </div>
//                                 ))}
//                             </div>
//                         </VerticalTimelineElement>
//                     ))}
//                 </VerticalTimeline>
//             ) : (
//                 <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
//                     🚫 No Events for this day.
//                 </p>
//             )}
//         </div>
//     );
// };

// export default TimelineComponent;


import React, { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComponent = () => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState("2025-03-26");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/events") // ✅ Replace with actual API URL
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response:", data);

                if (!data || !Array.isArray(data)) {
                    setError("Invalid event data received.");
                    setLoading(false);
                    return;
                }

                // Extract and format events
                const formattedEvents = data.map((event) => ({
                    title: event.title,
                    date: event.date ? event.date.split("T")[0] : "Unknown Date", // Extract YYYY-MM-DD
                    category: event.category || "Uncategorized",
                    description: event.description || "No Description Available",
                    start_time: event.start_time || "Unknown Start Time",
                    end_time: event.end_time || "Unknown End Time",
                    venue: event.venue || "Unknown Venue"
                }));

                setEvents(formattedEvents);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
                setError("Failed to fetch events.");
                setLoading(false);
            });
    }, []);

    // Function to format time (without timezone conversion)
    const formatTime = (timeString) => {
        if (!timeString) return "Invalid Time"; // Handle missing values
        const date = new Date(timeString);
        
        if (isNaN(date.getTime())) {
            console.error("Invalid Date:", timeString);
            return "Invalid Time";
        }
    
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };

    // Filter events by selected date
    const filteredEvents = events.filter(event => event.date === selectedDate);

    // Sort events by start time (ascending order)
    filteredEvents.sort((a, b) => new Date(a.start_time) - new Date(b.start_time));

    // Group events by start time
    const groupedEvents = filteredEvents.reduce((acc, event) => {
        if (!acc[event.start_time]) {
            acc[event.start_time] = [];
        }
        acc[event.start_time].push(event);
        return acc;
    }, {});

    // Sort group keys in ascending order
    const sortedStartTimes = Object.keys(groupedEvents).sort((a, b) => new Date(a) - new Date(b));

    return (
        <div style={{ width: "100%", padding: "5rem 2rem" }}>
            {/* Loading & Error Handling */}
            {loading && <p style={{ textAlign: "center", fontSize: "18px" }}>Loading events...</p>}
            {error && <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>{error}</p>}

            {/* Tabs for Date Selection */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
                {["2025-03-26", "2025-03-27", "2025-03-28"].map((date) => (
                    <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        style={{
                            padding: "10px 15px",
                            cursor: "pointer",
                            border: "none",
                            backgroundColor: selectedDate === date ? "#007bff" : "#ccc",
                            color: "#fff",
                            fontSize: "16px",
                            borderRadius: "5px"
                        }}
                    >
                        {new Date(date).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            {!loading && !error && sortedStartTimes.length > 0 ? (
                <VerticalTimeline>
                    {sortedStartTimes.map((start_time, index) => (
                        <VerticalTimelineElement
                            key={index}
                            date={`${formatTime(start_time)} - ${formatTime(groupedEvents[start_time][0].end_time)}`}
                            iconStyle={{ background: "#444", color: "#fff" }}
                            contentStyle={{ background: "#f9f9f9", color: "#000" }}
                        >
                            <h3>🕒 {formatTime(start_time)}</h3>

                            {/* Nested Timeline for events at the same start time */}
                            <div style={{ paddingLeft: "20px", borderLeft: "3px solid #ccc" }}>
                                {groupedEvents[start_time].map((event, idx) => (
                                    <div key={idx} style={{ marginBottom: "10px" }}>
                                        <h4 style={{ color: event.category === "Workshop" ? "#007bff" : event.category === "Technical" ? "#f39c12" : "#28a745" }}>
                                            {event.title} ({event.category})
                                        </h4>
                                        <h5>{event.venue}</h5>
                                        <p>{event.description}</p>
                                    </div>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            ) : (
                !loading &&
                !error && (
                    <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                        🚫 No Events for this day.
                    </p>
                )
            )}
        </div>
    );
};

export default TimelineComponent;
