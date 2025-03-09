import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav
                className="navbar"
                style={{ width: "90vw", justifyContent: "space-between" }}
            >
                <Link to="/" className="px-4">
                    <img className="nav-logo" src={Logo} alt="Logo"/>
                </Link>
                <div className="menu-links">
                    <Link to="/" className="px-4">
                        Home
                    </Link>
                    <Link to="/schedule" className="px-4">
                        Schedule
                    </Link>
                    <Link to="/events" className="px-4">
                        Events
                    </Link>
                    <Link to="/speakers" className="px-4">
                        Speakers
                    </Link>
                    <Link to="/team" className="px-4">
                        Team
                    </Link>
                    <Link to="/sponsors" className="px-4">
                        Sponsors
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </Link>
                <Link to="/events" onClick={() => setMenuOpen(false)}>
                    Events
                </Link>
                <Link to="/speakers" onClick={() => setMenuOpen(false)}>
                    Speakers
                </Link>
                <Link to="/sponsors" onClick={() => setMenuOpen(false)}>
                    Sponsors
                </Link>
            </div>
        </>
    );
}

export default Navbar;
