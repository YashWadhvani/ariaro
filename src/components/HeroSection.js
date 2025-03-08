import React from "react";
import "../styles/HeroSection.css"; // Ensure styling is applied

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>Ariaro 3.0</h1>
                <h3>National Level Tech Event</h3>
                <p>
                    Join us for an exciting journey into the world of technology, 
                    innovation, and collaboration. Ariaro 3.0 brings together tech 
                    enthusiasts, developers, and innovators from across the nation. 
                    Don't miss out on this amazing experience!
                </p>
                <button className="hero-btn">Find More</button>
            </div>
        </section>
    );
}

export default HeroSection;
