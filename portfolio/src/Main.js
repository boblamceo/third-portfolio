import { motion } from "framer-motion";
import React from "react";
import "./App.css";

const Main = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    ></motion.div>
  );
};

export default Main;
