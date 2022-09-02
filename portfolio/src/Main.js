import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import Space1 from "./Space1.mp4";
import Space2 from "./Space2.mp4";
import { BsArrowDownShort } from "react-icons/bs";
import Second from "./components/secondScreen";

const Main = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      <div className="screen">
        <video loop autoPlay muted>
          <source src={Space1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="activate first">
          <div className="third-section"></div>
          <div className="third-section">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2 }}
              className="hello"
            >
              Hello, I am Bob Lam
            </motion.h1>
          </div>
          <div className="third-section">
            <motion.div
              animate={{ y: [20, 0, 20] }}
              transition={{ repeat: Infinity, type: "spring" }}
            >
              <BsArrowDownShort className="arrow-down" />
            </motion.div>
          </div>
          <div className="border"></div>
        </div>
      </div>

      <div className="screen">
        <video loop autoPlay muted>
          <source src={Space2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Second />
      </div>
    </motion.div>
  );
};

export default Main;
