import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LumaButton from "../components/LumaButton";
import "../styles/EventDetails.css"; // Import the CSS file

function EventDetails() {
    const { eventId } = useParams(); // Get eventId from URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://ariaro-backend.onrender.com/events/${eventId}`) // Check if backend is running on 5000
            .then((res) => {
                if (!res.ok) throw new Error("Event not found");
                return res.json();
            })
            .then((data) => {
                console.log("Fetched Event Details:", data);
                setEvent(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching event details:", err);
                setError(err.message);
                setLoading(false);
            });
    }, [eventId]);
    

    if (loading) return <h2>Loading event details...</h2>;
    if (error) return <h2 className="not-found">{error}</h2>;

    return (
        <div className="event-container">
            <div className="event-box">
                <h1 className="event-title">{event.title}</h1>
                <p className="event-description" dangerouslySetInnerHTML={{ __html: event.description }}></p>
                <LumaButton eventId={eventId} />
            </div>
        </div>
    );
}

export default EventDetails;
