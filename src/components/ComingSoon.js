import React from "react";
import "../styles/ComingSoon.css"; 

function ComingSoon()  {
    return (
        <div className="coming-soon-container">
            <h1 className="coming-soon-title">Schedule Coming Soon!</h1>
            <p className="coming-soon-text">
                Stay tuned! The detailed event schedule will be available soon.
            </p>
            <div className="loading-animation">Loading...</div>
        </div>
    );
};

export default ComingSoon;
