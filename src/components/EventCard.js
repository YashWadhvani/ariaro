import React from "react";
import "../styles/EventCard.css";
import LumaButton from "./LumaButton";

function EventCard({ title, date, event_id }) {
    // Function to format date into "26th March, 2025"
    const formatDate = (isoString) => {
        if (!isoString) return "Invalid Date";
        
        const dateObj = new Date(isoString);
        if (isNaN(dateObj.getTime())) return "Invalid Date";

        const day = dateObj.getDate();
        const month = dateObj.toLocaleString("en-US", { month: "long" });
        const year = dateObj.getFullYear();

        // Get ordinal suffix (st, nd, rd, th)
        const getOrdinal = (d) => {
            if (d > 3 && d < 21) return "th";
            const suffixes = ["st", "nd", "rd"];
            return suffixes[(d % 10) - 1] || "th";
        };

        return `${day}${getOrdinal(day)} ${month}, ${year}`;
    };

    return (
        <div className="event-card">
            <h3>{title}</h3>
            <span>{formatDate(date)}</span>
            <br />
            <div className="button-collection">
                <a className="luma-checkout--button" href={`/events/${event_id}`}>Learn More</a>
                <LumaButton eventId={event_id} />
            </div>
        </div>
    );
}

export default EventCard;
