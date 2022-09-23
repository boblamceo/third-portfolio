import React from "react";

const Binoculars = () => {
  return (
    <div className="activate third">
      <div className="binoculars-left">
        <div className="binoculars-image"></div>
      </div>
      <div className="binoculars-text">
        <h1 className="binoculars-title">Binoculars</h1>
        <div className="binoculars-description">A weather app</div>
        <div
          className="binoculars-foot"
          onClick={() => {
            window.location.href =
              "https://apps.apple.com/hk/app/binoculars-weather-app/id1632741879?l=en";
          }}
        >
          <div className="binoculars-button">Find out more</div>
        </div>
      </div>
    </div>
  );
};

export default Binoculars;
