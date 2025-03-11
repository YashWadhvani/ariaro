import React from "react";
import Countdown from "react-countdown";
import "../styles/Countdown.css"

const CountdownBanner = () => {
    const eventDate = new Date("2025-03-26T03:30:00Z");

    const renderer = ({ days, hours, minutes, seconds }) => {
        return (
            <div className="countdown-container">
                <h2>AriaRo 3.0 Begins In</h2>
                <div className="countdown-timer">
                    <div className="time-box">
                        <span>{days}</span>
                        <p>Days</p>
                    </div>
                    <div className="time-box">
                        <span>{hours}</span>
                        <p>Hours</p>
                    </div>
                    <div className="time-box">
                        <span>{minutes}</span>
                        <p>Minutes</p>
                    </div>
                    <div className="time-box">
                        <span>{seconds}</span>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="countdown-banner">
            <Countdown date={eventDate} renderer={renderer} />
        </div>
    );
};

export default CountdownBanner;
