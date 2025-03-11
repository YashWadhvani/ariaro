import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/Events.css";

function Events() {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/events") // Replace with actual backend URL
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error fetching events:", err));
    }, []);

    if (!events) {
        return <p>Loading events...</p>;
    }

    return (
        <section className="events-page">
            <h1>Events</h1>

            <div>
                <h2>Workshops</h2>
                <h4>Learn from leading Industry Experts and gain Hands-On Experience</h4>
                <section className="events-grid">
                    {events.workshops.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </section>
            </div>

            <div>
                <h2>Technical Competitions</h2>
                <h4>For all the techies. Compete with each other and show your technical skills.</h4>
                <section className="events-grid">
                    {events.technicalEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </section>
            </div>

            <div>
                <h2>Non-Technical Competitions</h2>
                <h4>Competitions for everyone to enjoy. No or Low Technical Background People are Welcome.</h4>
                <section className="events-grid">
                    {events.nonTechnicalEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </section>
            </div>
        </section>
    );
}

export default Events;
