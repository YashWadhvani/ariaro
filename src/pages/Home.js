import React from "react";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import CountdownBanner from "../components/Countdown";
import About from "../components/About";
import PastEventsGallery from "../components/PastEventsGallery";

function Home() {
    return (
        <>
            <>
                <HeroSection />
                <CountdownBanner />
            </>
            <>
                <About />
                <Marquee />
                <PastEventsGallery/>
            </>
        </>
    );
}

export default Home;
