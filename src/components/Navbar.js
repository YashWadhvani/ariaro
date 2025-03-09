import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
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
            </nav>

            {/* Mobile Menu
            <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
                <Link to="/speakers" onClick={() => setMenuOpen(false)}>Speakers</Link>
                <Link to="/sponsors" onClick={() => setMenuOpen(false)}>Sponsors</Link>
            </div> */}
        </>
    );
}

export default Navbar;
