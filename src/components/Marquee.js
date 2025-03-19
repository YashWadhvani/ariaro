import React from "react";
import "../styles/Marquee.css";
import MeitY from "../assets/Logos/Meity.png";
import SSIP from "../assets/Logos/SSIP.png";
import KIIF from "../assets/Logos/KIFF.png";
import AWS from "../assets/Logos/AWS.png";
import ElectroMech from "../assets/Logos/electromech.png";
import IIC from "../assets/Logos/iiclogo.png";
import SeedFund from "../assets/Logos/seedfund.png";
import MyEquation from "../assets/Logos/MyEquation.png";
import GDG from "../assets/Logos/GDG.png";
import EduNet from "../assets/Logos/edunet.png";
import RockRobotics from "../assets/Logos/RockRobotics.png";
import AWS_UG_AHM from "../assets/Logos/AWS-UG-AHM.png"

const partners = [
    MeitY,
    SSIP,
    KIIF,
    AWS,
    AWS_UG_AHM,
    ElectroMech,
    IIC,
    SeedFund,
    MyEquation,
    GDG,
    RockRobotics,
    EduNet
]; 

function Marquee() {
    return (
        <>
        <h2 className="marquee-header">Eco System Partners</h2>
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
