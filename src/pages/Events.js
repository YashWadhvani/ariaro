import EventCard from "../components/EventCard";
import React from "react";

function Events() {
    // const workshops = [
    //     {
    //         title: "IoT",
    //         description: "MyEquition",
    //         date: "March 26",
    //         event_id: "",
    //     },
    //     {
    //         title: "Cloud Computing",
    //         description: "AWS - Nilesh Vaghela",
    //         date: "March 26",
    //         event_id: "",
    //     },
    //     {
    //         title: "Drone Making",
    //         description: "Through Sandeep Tekwani",
    //         date: "March 26-28",
    //         event_id: "",
    //     },
    //     {
    //         title: "Game Design",
    //         description: "Sundar Sir [UID]",
    //         date: "March 27",
    //         event_id: "",
    //     },
    //     {
    //         title: "AI",
    //         description: "GDE - Harsh Walia",
    //         date: "March 27",
    //         event_id: "",
    //     },
    //     {
    //         title: "Cybersecurity",
    //         description: "Tech Defence",
    //         date: "March 28",
    //         event_id: "",
    //     },
    // ];

    // const technicalEvents = [
    //     {
    //         title: "Tech Treasure Hunt",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    //     {
    //         title: "Code-a-Thon",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    //     {
    //         title: "Capture The Flag",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    //     {
    //         title: "Robo War & Robot/Drone Show",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    // ];

    // const nonTechnicalEvents = [
    //     {
    //         title: "Photography Competition",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    //     {
    //         title: "UI/UX Competition",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    //     {
    //         title: "Tech MUN",
    //         description: "",
    //         date: "",
    //         event_id: "",
    //     },
    // ];

    const events = {
        workshops: [
            {
                title: "IoT [26th]",
                description: "MyEquition",
                date: "March 26",
                event_id: "evt-CHfEF6FsXh9qPLD",
            },
            {
                title: "Cloud Computing [26th]",
                description: "AWS - Nilesh Vaghela",
                date: "March 26",
                event_id: "evt-qtzSqTTROUYAZZY",
            },
            {
                title: "Drone Making [26-28th]",
                description: "Through Sandeep Tekwani",
                date: "March 26-28",
                event_id: "evt-cyatG9syHDiwuMA",
            },
            {
                title: "Game Design [27th]",
                description: "Sundar Sir [UID]",
                date: "March 27",
                event_id: "evt-xjqKLYv0AcxHAQj",
            },
            {
                title: "AI [27th]",
                description: "GDE - Harsh Walia",
                date: "March 27",
                event_id: "evt-gGrcZ0IaAsSBG9d",
            },
            {
                title: "Cybersecurity [28th]",
                description: "Tech Defence",
                date: "March 28",
                event_id: "evt-HxWhPeMBPymT9dO",
            },
        ],
        technicalEvents: [
            {
                title: "Tech Treasure Hunt",
                description:
                    "Show your coding prowess along with clue solving abilities",
                date: "March 26",
                event_id: "evt-GYnDXmZYDeYO4MG",
            },
            {
                title: "Code-a-Thon",
                description: "Problem Solvers' Paradise",
                date: "March 27",
                event_id: "evt-LKUsQ7sl438XEl4",
            },
            {
                title: "Capture The Flag",
                description: "Hackers' Den",
                date: "March 27",
                event_id: "",
            },
            {
                title: "Robo War & Robot/Drone Show",
                description: "Arena for the Mechanical Beasts",
                date: "March 28",
                event_id: "evt-gnbDMZoaTOkgiyB",
            },
        ],
        nonTechnicalEvents: [
            {
                title: "Photography Competition",
                description: "unleash your Photography Skills",
                date: "March 26",
                event_id: "evt-8IDH1SDIbOH2bdz",
            },
            {
                title: "UI/UX Competition",
                description: "Show your Creativity at it's Level Best",
                date: "March 26",
                event_id: "evt-lYDHynG2xp6gpGZ",
            },
            {
                title: "Tech MUN",
                description: "Technical Debates",
                date: "March 27",
                event_id: "evt-EYDxOTlMq0KWqwo",
            },
        ],
    };

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
