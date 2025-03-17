import React from "react";
import { Link } from "react-router-dom";
import kuLogo from "../assets/Logos/KU.png";
import uitLogo from "../assets/Logos/UIT.png";
import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Column - Logos & Address */}
                <div className="footer-left">
                    <div className="footer-logos">
                        <a href="https://karnavatiuniversity.edu.in/">
                            <img src={kuLogo} alt="KU Logo" className="logo" />
                        </a>
                        <a href="https://karnavatiuniversity.edu.in/uit/">
                            <img
                                src={uitLogo}
                                alt="UIT Logo"
                                className="logo"
                            />
                        </a>
                    </div>
                    <p>
                        <strong>Address:</strong> Karnavati University,
                        Gandhinagar, Gujarat, India
                    </p>
                    <p>
                        <strong>Contact:</strong> +91 75748 11135, +91 75748 11136, +91 75748 11137, +91 90999 93506 <br/>
                        <strong>E Mail :</strong> info@karnavatiuniversity.edu.in
                    </p>
                </div>

                {/* Right Column - Menu Links */}
                <div className="footer-right">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/speakers">Speakers</Link>
                        </li>
                        <li>
                            <Link to="/team">Team</Link>
                        </li>
                        <li>
                            <Link to="/schedule">Schedule</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section - Credits */}
            <div className="footer-bottom">
                <p>
                    Made with ❤️ by{" "}
                    <strong>
                        <a href="https://yashwadhvani.vercel.app" target="_blank" rel="noreferrer">
                            Yash Wadhvani
                        </a>
                    </strong>
                </p>
                <p>© 2025 AriaRo 3.0 | Karnavati University</p>
            </div>
        </footer>
    );
}

export default Footer;
