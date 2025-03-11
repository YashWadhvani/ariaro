import React from "react";
import "../styles/EventCard.css";
import LumaButton from "./LumaButton";

function EventCard({ title, date, event_id }) {
    return (
        <>
            <div className="event-card">
                <h3>{title}</h3>
                <span>{date}</span>
                <br/>
                <div className="button-collection">
                <a className="luma-checkout--button" href={`/events/${event_id}`}>Learn More</a>
                <LumaButton eventId={event_id}/></div>
            </div>
        </>
    );
}

export default EventCard;
