import { useParams } from "react-router-dom";
import events from "../assets/EventInfo_updated"; // Event data
import LumaButton from "../components/LumaButton";
import "../styles/EventDetails.css"; // Import the CSS file

function EventDetails() {
    const { eventId } = useParams(); // Get eventId from URL
    const allEvents = [...events.workshops, ...events.technicalEvents]; // Merge all event categories
    const event = allEvents.find(event => event.event_id === eventId);

    if (!event) {
        return <h2 className="not-found">Event not found!</h2>;
    }

    return (
        <div className="event-container">
            <div className="event-box">
                <h1 className="event-title">{event.title}</h1>
                <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
                {/* <p className="event-date"><strong>Date:</strong> {event.date}</p> */}
                <LumaButton eventId={eventId} />
            </div>
        </div>
    );
}

export default EventDetails;
