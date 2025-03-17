import React, { useEffect, useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Timeline.css";

const TimelineComponent = () => {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState("2025-03-26");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/events") 
            .then((response) => response.json())
            .then((data) => {
                console.log("API Response:", data);

                if (!data || !Array.isArray(data)) {
                    setError("Invalid event data received.");
                    setLoading(false);
                    return;
                }

                const formattedEvents = data.map((event) => ({
                    title: event.title,
                    date: event.date
                        ? event.date.split("T")[0]
                        : "Unknown Date",
                    category: event.category || "Uncategorized",
                    description:
                        event.description || "No Description Available",
                    start_time: event.start_time || "Unknown Start Time",
                    end_time: event.end_time || "Unknown End Time",
                    venue: event.venue || "Unknown Venue",
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

    const formatTime = (timeString) => {
        if (!timeString) return "Invalid Time"; 
        const date = new Date(timeString);

        if (isNaN(date.getTime())) {
            console.error("Invalid Date:", timeString);
            return "Invalid Time";
        }

        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    const filteredEvents = events.filter(
        (event) => event.date === selectedDate
    );

    filteredEvents.sort(
        (a, b) => new Date(a.start_time) - new Date(b.start_time)
    );

    const groupedEvents = filteredEvents.reduce((acc, event) => {
        if (!acc[event.start_time]) {
            acc[event.start_time] = [];
        }
        acc[event.start_time].push(event);
        return acc;
    }, {});

    const sortedStartTimes = Object.keys(groupedEvents).sort(
        (a, b) => new Date(a) - new Date(b)
    );

    return (
        <div className="timeline-conatiner">
            {loading && <p className="loading">Loading events...</p>}
            {error && <p className="error">{error}</p>}

            <div className="date-selector">
                {["2025-03-26", "2025-03-27", "2025-03-28"].map((date) => (
                    <button
                        className={
                            selectedDate === date
                                ? "date-button selected"
                                : "date-button"
                        }
                        key={date}
                        onClick={() => setSelectedDate(date)}
                    >
                        {new Date(date).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                        })}
                    </button>
                ))}
            </div>

            {!loading && !error && sortedStartTimes.length > 0 ? (
                <VerticalTimeline key={selectedDate}>
                    {sortedStartTimes.map((start_time, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="timeline-element"
                            iconClassName="timeline-icon"
                        >
                            <h4 className="time">
                                🕒 {formatTime(start_time)}
                            </h4>

                            <div className="nested-timeline">
                                {groupedEvents[start_time].map((event, idx) => (
                                    <div className="event-info" key={idx}>
                                        <h4
                                            className={
                                                event.category === "Workshop"
                                                    ? "workshop"
                                                    : event.category ===
                                                      "Technical"
                                                    ? "technical"
                                                    : event.category ===
                                                      "Non-Technical"
                                                    ? "non-technical"
                                                    : "general"
                                            }
                                        >
                                            {event.title}
                                        </h4>
                                        <h5>{event.venue}</h5>
                                    </div>
                                ))}
                            </div>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            ) : (
                !loading &&
                !error && <p className="error">🚫 No Events for this day.</p>
            )}
        </div>
    );
};

export default TimelineComponent;
