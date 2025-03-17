import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

const Carousel = ({ images = [], autoplay = true, speed = 3000 }) => {
    const [loadedImages, setLoadedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let loadedCount = 0;
        const imagePromises = images.map((src) => 
            new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === images.length) {
                        setLoadedImages(images);
                        setLoading(false);
                    }
                    resolve();
                };
                img.onerror = reject;
            })
        );

        Promise.all(imagePromises).catch((err) => console.error("Error loading images:", err));
    }, [images]); 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: speed,
        arrows: false,
    };

    return (
        <div className="custom-carousel">
            {loading ? (
                <p className="carousel-loader">Loading images...</p> 
            ) : (
                <Slider {...settings}>
                    {loadedImages.map((img, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={img} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Carousel;
