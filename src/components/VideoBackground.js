import React from "react";
import "../styles/VideoBackground.css";
import Video from "../assets/tech.mp4" 

const VideoBackground = ({ children }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content-overlay">{children}</div>
    </div>
  );
};

export default VideoBackground;
