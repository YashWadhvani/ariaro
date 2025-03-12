import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import "../styles/Events.css";

function Events() {
    const [events, setEvents] = useState(null);

    useEffect(() => {
        fetch("https://ariaro-backend.onrender.com/events") // Replace with actual backend URL
            .then((res) => res.json())
            .then((data) => setEvents(data))
            .catch((err) => console.error("Error fetching events:", err));
    }, []);

    if (!events) {
        return <p style={{position:"absolute",top:"50%", right:"50%", transform:"translate(-50%,-50%)"}}>Loading events...</p>;
    }

    return (
        <section className="events-page">
            <h1>Events</h1>

            <div>
                <h2>Workshops</h2>
                <h4>Hands-on learning sessions led by industry experts.</h4>
                <section className="events-grid">
                    {events.workshops.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </section>
            </div>

            <div>
                <h2>Technical Competitions</h2>
                <h4>Compete, innovate, and test your tech expertise.</h4>
                <section className="events-grid">
                    {events.technicalEvents.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </section>
            </div>

            <div>
                <h2>Non-Technical Competitions</h2>
                <h4>Fun-filled challenges and creative activities for all.</h4>
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
