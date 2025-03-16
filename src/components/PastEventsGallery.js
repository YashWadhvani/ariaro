import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles/PastEventsGallery.css";

const pastEvents = [
    {
        title: "Tech Fest 2024",
        description: "A thrilling event showcasing the latest in AI & Robotics.",
        cover: "/Logo-Banner.png",
        images: ["/Logo-Banner.png", "/Logo-Banner.png", "/Logo-Banner.png"],
    },
    {
        title: "Cybersecurity Conference",
        description: "Industry experts sharing insights on digital security.",
        cover: "/Logo-Banner.png",
        images: ["/Logo-Banner.png", "/Logo-Banner.png", "/Logo-Banner.png"],
    },
    {
        title: "AriaRo 2.0",
        description: "An unforgettable fest with workshops and competitions.",
        cover: "/Logo-Banner.png",
        images: ["/Logo-Banner.png", "/Logo-Banner.png", "/Logo-Banner.png"],
    },
];

const PastEventsGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [scrollY, setScrollY] = useState(0);

    // Function to open Lightbox at the current scroll position
    const openLightbox = (images) => {
        setScrollY(window.scrollY); // Save current scroll position
        setSelectedImages(images.map(img => ({ src: img })));
        setLightboxOpen(true);
        document.body.style.position = "fixed"; // Prevent body scrolling
        document.body.style.top = `-${window.scrollY}px`; // Maintain scroll position
    };

    // Function to close Lightbox and restore scroll position
    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY); // Restore previous scroll position
    };

    return (
        <section className="past-events-gallery">
            <h1>Past Events</h1>
            <div className="gallery-grid">
                {pastEvents.map((event, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openLightbox(event.images)}
                    >
                        <img src={event.cover} alt={event.title} />
                        <div className="text-overlay">
                            <h3>{event.title}</h3>
                            <h4>{event.description}</h4>
                        </div>
                    </div>
                ))}
            </div>

            {/* React Lightbox */}
            {lightboxOpen && (
                <Lightbox
                    open={lightboxOpen}
                    close={closeLightbox}
                    slides={selectedImages}
                />
            )}
        </section>
    );
};

export default PastEventsGallery;
