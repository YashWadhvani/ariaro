import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Slideshow } from "yet-another-react-lightbox/plugins";
import "../styles/PastEventsGallery.css";

const PastEventsGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const [scrollY, setScrollY] = useState(0);
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        fetch("/assets/Events/pastEvents.json")
        .then((response) => response.json())
        .then((data) => setPastEvents(data))
        .catch((error) => console.log("Error in fetching Events: ", error))
    }, [])

    const openLightbox = (images) => {
        setScrollY(window.scrollY); 
        setSelectedImages(images.map((img) => ({ src: img })));
        setLightboxOpen(true);
        document.body.style.position = "fixed"; 
        document.body.style.top = `-${window.scrollY}px`; 
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, scrollY); 
    };

    return (
        <section className="past-events-gallery">
            <h2>Past Events</h2>
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

            {lightboxOpen && (
                <Lightbox
                    open={lightboxOpen}
                    close={closeLightbox}
                    slides={selectedImages}
                    plugins={[Slideshow]}
                    slideshow={{autoplay: 5000, controls: false}}
                />
            )}
        </section>
    );
};

export default PastEventsGallery;
