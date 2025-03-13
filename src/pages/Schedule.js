import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
// import axios from "axios";

const TimelineComponent = () => {
    const [events, setEvents] = useState([]);
    const events_new = {
        workshops: [
            {
                title: "IoT",
                description: "Description",
                date: "March 26",
            },
            {
                title: "IoT",
                description: "Description",
                date: "March 26",
            },
            {
                title: "IoT",
                description: "Description",
                date: "March 27",
            },
            {
                title: "IoT",
                description: "Description",
                date: "March 28",
            },
        ],
        technical: [
            {
                title: "TTH",
                description: "Description",
                date: "March 26",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 27",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 27",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 28",
            },
        ],
        nonTechnical: [
            {
                title: "TTH",
                description: "Description",
                date: "March 26",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 27",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 28",
            },
            {
                title: "TTH",
                description: "Description",
                date: "March 28",
            },
        ],
    };

    useEffect(() => {
        // Fetch events from backend
        fetch("https://ariaro-backend.onrender.com/events") // Replace with your API URL
            .then((response) => response.json()) // Convert response to JSON
            .then((data) => {
                data = data.workshops
                console.log(data); // Check what the API returns

                // Transform API data to Chrono format
                const formattedEvents = data.map((event) => ({
                    title: event.date, // Assuming API gives a date field
                    cardTitle: event.name, // Event name/title
                    cardSubtitle: `${event.time} | ${event.location}`, // Event timing & location
                    cardDetailedText: "Hands on Workshop", // Full event details
                }));

                setEvents(formattedEvents);
            })
            .catch((error) => console.error("Error fetching events:", error));
    }, []);

    return (
        <div style={{ width: "100%", height: "600px" }}>
            {events.length > 0 ? (
                <Chrono
                    items={events}
                    mode="VERTICAL_ALTERNATING"
                    hidecontrols
                />
            ) : (
                <p>Loading events...</p>
            )}
        </div>
    );
};

export default TimelineComponent;
