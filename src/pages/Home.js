import React from "react";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import CountdownBanner from "../components/Countdown";

function Home() {
    return (
        <>
            <HeroSection />
            <CountdownBanner/>
            <Marquee/>
        </>
    );
}

export default Home;
