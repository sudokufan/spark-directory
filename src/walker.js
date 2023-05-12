import "./walker.css";
import React from "react";

const Walker = (data) => {
  const walkerInfo = data.data;

  return (
    <div className="parent">
      <div
        className={`walkerWrapper ${
          walkerInfo.status ? walkerInfo.status : "unknown"
        }`}
      >
        <a
          href={walkerInfo.source ? walkerInfo.source : ""}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={
              walkerInfo.image
                ? walkerInfo.image
                : "https://www.artofmtg.com/wp-content/uploads/2014/01/Totally-Lost-Art.jpg"
            }
            className="walkerImage"
            alt={walkerInfo.name}
            referrerPolicy="no-referrer"
          />
          <div className="textOverlay">
            <span className="description">
              {walkerInfo.description
                ? `${walkerInfo.status}: ${walkerInfo.description}`
                : "Unknown"}
            </span>
          </div>
        </a>
      </div>
      <span className="name">
        {walkerInfo.name ? walkerInfo.name : "Unknown"}
      </span>
    </div>
  );
};

export default Walker;
