import React, { useState } from "react";
import Schedule from "../assets/schedule";
import "./ScheduleTimeline.css";

const ScheduleTimeline = () => {
    const [selectedDay, setSelectedDay] = useState(Object.keys(Schedule)[0]);

    return (
        <div className="schedule-container">
            {/* Tabs for Days */}
            <div className="tab-container">
                {Object.keys(Schedule).map((day, index) => (
                    <button
                        key={index}
                        className={`tab-button ${selectedDay === day ? "active" : ""}`}
                        onClick={() => setSelectedDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Timeline */}
            <div className="timeline">
                {Schedule[selectedDay].map((event, idx) => (
                    <div key={idx} className="time-block" style={{ height: calculateHeight(event.time) }}>
                        <div className="time-range">{event.time}</div>
                        <div className="events">
                            {event.events.map((e, i) => (
                                <div key={i} className="event-card">
                                    <strong>{e.title}</strong>
                                    <p>{e.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Helper function to calculate block height dynamically
const calculateHeight = (timeRange) => {
    const [start, end] = timeRange.split(" - ").map(convertToMinutes);
    return `${(end - start) * 1.5}px`; // Adjust multiplier for spacing
};

// Convert time to minutes for calculations
const convertToMinutes = (time) => {
    const [hour, minute, period] = time.match(/(\d+):(\d+) (AM|PM)/).slice(1);
    let totalMinutes = parseInt(hour) % 12 * 60 + parseInt(minute);
    if (period === "PM") totalMinutes += 12 * 60;
    return totalMinutes;
};

export default ScheduleTimeline;
