import EventCard from "../components/EventCard";
import React from "react";
import events from "../assets/EventInfo_updated";
import "../styles/Events.css"

function Events() {
    return (
        <>
            <section className="events-page">
                <h1>Events</h1>
                {/* <section className="events-grid">
                <div className="event-category">
                    <h2>Workshops</h2>
                    {events.workshops.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>

                <div className="event-category">
                    <h2>Technical Events</h2>
                    {events.technicalEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>

                <div className="event-category">
                    <h2>Non-Technical Events</h2>
                    {events.nonTechnicalEvents.map((event) => (
                        <EventCard key={event.id} {...event} />
                    ))}
                </div>
            </section> */}

                <div>
                    <h2>Workshops</h2>
                    <h4>
                        Learn from leading Industry Experts and gain Hands-On
                        Experience
                    </h4>
                    <section className="events-grid">
                        {events.workshops.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </section>
                </div>

                <div>
                    <h2>Technical Competetions</h2>
                    <h4>
                        For all the techies. Compete with eachother and show
                        your technical skills.
                    </h4>
                    <section className="events-grid">
                        {events.technicalEvents.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </section>
                </div>

                <div>
                    <h2>Non Technical Competetions</h2>
                    <h4>
                        Competetions for everyone to enjoy. No or Low Technical
                        Background People are Welcome.
                    </h4>
                    <section className="events-grid">
                        {events.nonTechnicalEvents.map((event, index) => (
                            <EventCard key={index} {...event} />
                        ))}
                    </section>
                </div>
            </section>
        </>
    );
}

export default Events;
