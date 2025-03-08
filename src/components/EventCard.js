import React from "react";
import "../styles/EventCard.css";
import LumaButton from "./LumaButton";

function EventCard({ title, description, date, event_id }) {
    return (
        <>
            <div className="event-card">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{date}</span>
                <br/>
                <LumaButton eventId={event_id}/>
            </div>
        </>
    );
}

export default EventCard;
