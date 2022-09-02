import React from "react";
import "../App.css";
import { motion } from "framer-motion";

const Second = () => {
  const Titlevariant = {
    offscreen: {
      x: -1000,
      rotate: 0,
    },
    onscreen: {
      x: 0,
      rotate: 360,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
      },
    },
  };
  const descriptionVariant = {
    offscreen: {
      x: 1000,
      rotate: 50,
    },
    onscreen: {
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1,
        x: {
          delay: 1,
        },
        rotate: {
          delay: 1,
        },
      },
    },
  };
  const imageVariant = {
    offscreen: {
      rotate: 0,
    },
    onscreen: {
      rotate: [0, -5, 5, -5, 5, 0],
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 0.001,
        x: {
          delay: 1.5,
        },
        rotate: {
          delay: 1.5,
        },
      },
    },
  };
  return (
    <div className="activate second">
      <motion.div
        className="half-section titleContainer"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h1 className="descriptionTitle" variants={Titlevariant}>
          I am a 12 year old student
        </motion.h1>
      </motion.div>
      <motion.div
        className="half-section"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.p className="description" variants={descriptionVariant}>
          Currently studying at ESF West Island School. I like to play the
          violin and program in Javascript. In my spare time, I like to do math
          problems and play Minecraft.
        </motion.p>
        <motion.div className="me-image" variants={imageVariant}></motion.div>
      </motion.div>
    </div>
  );
};

export default Second;
