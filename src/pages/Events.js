import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/Events.css";

// Define categories with their respective API names
const categories = {
    workshops: "Workshop",
    technicalEvents: "Technical",
    nonTechnicalEvents: "Non-Technical",
};

const categoryDescriptions = {
    workshops: "Hands-on learning sessions led by industry experts.",
    technicalEvents: "Compete, innovate, and test your tech expertise.",
    nonTechnicalEvents:
        "Fun-filled challenges and creative activities for all.",
};

function Events() {
    const [events, setEvents] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to format category name for display
    const formatCategoryName = (categoryKey) => {
        return categoryKey
            .replace(/([A-Z])/g, " $1") // Add space before capital letters
            .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
            .trim();
    };

    // Function to fetch events by category
    const fetchCategoryEvents = async (categoryKey, categoryName) => {
        try {
            const response = await fetch(
                `http://localhost:5000/events/category/${categoryName}`
            ); // Correct URL
            const data = await response.json();

            if (response.ok) {
                setEvents((prev) => ({ ...prev, [categoryKey]: data }));
            } else {
                console.error(`No events found for ${categoryName}`);
            }
        } catch (err) {
            console.error(`Error fetching ${categoryName} events:`, err);
        }
    };

    useEffect(() => {
        // Fetch all categories in parallel
        Promise.allSettled(
            Object.entries(categories).map(([key, name]) =>
                fetchCategoryEvents(key, name)
            )
        )
            .then(() => setLoading(false))
            .catch((err) => {
                console.error("Error fetching events:", err);
                setError("Failed to load events.");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <p
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                }}
            >
                Loading events...
            </p>
        );
    }

    if (error) {
        return (
            <p style={{ textAlign: "center", fontSize: "18px", color: "red" }}>
                {error}
            </p>
        );
    }

    return (
        <section className="events-page">
            <h1>Events</h1>

            {/* Render categories dynamically */}
            {Object.entries(events).map(
                ([category, eventList]) =>
                    eventList.length > 0 && (
                        <div key={category}>
                            <h2>{formatCategoryName(category)}</h2>
                            <h4>{categoryDescriptions[category]}</h4>
                            <section className="events-grid">
                                {eventList.map((event, index) => (
                                    <EventCard key={index} {...event} />
                                ))}
                            </section>
                        </div>
                    )
            )}
        </section>
    );
}

export default Events;
