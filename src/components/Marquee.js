import React from "react";
import "../styles/Marquee.css";
import MeitY from "../assets/Logos/Meity.png";
import SSIP from "../assets/Logos/SSIP.png";
import KIIF from "../assets/Logos/KIFF.png";
import AWS from "../assets/Logos/AWS.png";
import RedHat from "../assets/Logos/redhat.png";
import ElectroMech from "../assets/Logos/electromech.png";
import IIC from "../assets/Logos/iiclogo.png";
import SeedFund from "../assets/Logos/seedfund.png";
import GDG from "../assets/Logos/GDG.png";
import EduNet from "../assets/Logos/edunet.png";

const partners = [
    MeitY,
    SSIP,
    KIIF,
    AWS,
    RedHat,
    ElectroMech,
    IIC,
    SeedFund,
    GDG,
    EduNet,
]; // Add more as needed

function Marquee() {
    return (
        <>
        <h2 style={{textAlign:"center", margin:"1rem 0"}}>Eco System Partners :</h2>
        <div className="marquee-container">
            <div className="marquee">
                <div className="marquee-track">
                    {partners.concat(partners).map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Partner ${index + 1}`}
                            className="marquee-logo"
                        />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

export default Marquee;
