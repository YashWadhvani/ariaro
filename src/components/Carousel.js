import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

const Carousel = ({ images = [], autoplay = true, speed = 3000 }) => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        setKey(prevKey => prevKey + 1);
    }, [images]); // Rerender when images change

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
        <div className="custom-carousel" key={key}>
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={img} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
