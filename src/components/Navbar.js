import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        
        document.documentElement.classList.toggle("no-scroll", menuOpen);
        document.body.classList.toggle("no-scroll", menuOpen);
    
        const contentOverlay = document.querySelector(".content-overlay");
        if (contentOverlay) {
            contentOverlay.style.overflowY = menuOpen ? "auto" : "hidden";
        }
    }; 

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="px-4">
                    <img className="nav-logo" src={Logo} alt="Logo" />
                </Link>

                {/* Desktop Menu Links */}
                <div className="menu-links">
                    <Link to="/" className="px-4">Home</Link>
                    <Link to="/speakers" className="px-4">Speakers</Link>
                    <Link to="/events" className="px-4">Events</Link>
                    <Link to="/team" className="px-4">Team</Link>
                    <Link to="/schedule" className="px-4">Schedule</Link>
                </div>

                {/* Hamburger Menu (Only on Mobile) */}
                <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={toggleMenu}>Home</Link>
                <Link to="/speakers" onClick={toggleMenu}>Speakers</Link>
                <Link to="/events" onClick={toggleMenu}>Events</Link>
                <Link to="/team" onClick={toggleMenu}>Team</Link>
                <Link to="/schedule" onClick={toggleMenu}>Schedule</Link>
            </div>
        </>
    );
}

export default Navbar;
