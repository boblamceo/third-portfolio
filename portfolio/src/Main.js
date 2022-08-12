import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import Space1 from "./Space1.mp4";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
        <div className="activate">
          <div className="intro-section"></div>
          <div className="intro-section">
            <h1 className="hello">Hello, I am Bob Lam</h1>
          </div>
          <div className="intro-section">
            <motion.div
              animate={{ y: [20, 0, 20] }}
              transition={{ repeat: Infinity, type: "spring" }}
            >
              <ArrowDownwardIcon className="arrow-down" fontSize={"larger"} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
