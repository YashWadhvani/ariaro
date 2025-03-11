import React from "react";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import CountdownBanner from "../components/Countdown";
import About from "../components/About";

function Home() {
    return (
        <>
            <HeroSection />
            <CountdownBanner/>
            <About />
            <Marquee/>
        </>
    );
}

export default Home;
