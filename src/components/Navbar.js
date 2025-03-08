import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            {/* <h1>AriaRo 3.0</h1> */}
            {/* <div> */}
                <Link to="/" className="px-4">
                    Home
                </Link>
                <Link to="/events" className="px-4">
                    Events
                </Link>
                <Link to="/speakers" className="px-4">
                    Speakers
                </Link>
                <Link to="/sponsors" className="px-4">
                    Sponsors
                </Link>
            {/* </div> */}
        </nav>
    );
}

export default Navbar;
