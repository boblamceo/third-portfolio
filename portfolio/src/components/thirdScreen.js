import { motion } from "framer-motion";
import React, { useState } from "react";
import useSound from "use-sound";
import button from "../binoculars-buttonsound.mp3";

const Binoculars = () => {
  const [buttonSound] = useSound(button);
  const [binocularsShow, setBinocularsShow] = useState(false);
  return (
    <div className="activate third">
      <div className="binoculars-left">
        <motion.div
          className="binoculars-imgcontainer"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="binoculars-image"
            whileHover={{ opacity: 0.7 }}
          ></motion.div>
        </motion.div>
      </div>
      <div className="binoculars-text">
        <div className="binoculars-header">
          <motion.h1
            className="binoculars-title"
            onHoverStart={() => {
              setBinocularsShow(true);
            }}
            onHoverEnd={() => {
              setBinocularsShow(false);
            }}
            animate={{ opacity: Number(!binocularsShow) }}
          >
            Binoculars
          </motion.h1>
          <motion.h1
            className="binoculars-icon"
            animate={{ opacity: Number(binocularsShow) }}
          >
            🔭
          </motion.h1>
        </div>
        <div className="binoculars-description">A weather app</div>
        <motion.div
          className="binoculars-foot"
          onMouseDown={() => {
            buttonSound();
          }}
          onClick={() => {
            setTimeout(() => {
              window.location.href =
                "https://apps.apple.com/hk/app/binoculars-weather-app/id1632741879?l=en";
            }, 500);
          }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="binoculars-button">Find out more</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Binoculars;
