import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Asteroids from "./Asteroids.mp4";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Modal from "@mui/material/Modal";
import Click from "./click.wav";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Music from "./Space.mp3";

function App() {
  const [opacity, setOpacity] = useState(1);
  const [clickplay] = useSound(Click, {
    volume: 0.5,
  });
  const [musicPlay] = useSound(Music);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setOpen(true);
      }, 3000);
    }
  }, []);

  return (
    <motion.div animate={{ opacity: opacity }} className="activate-container">
      <div className="Screen">
        <video loop autoPlay muted>
          <source src={Asteroids} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="activate first">
          <motion.div
            className="activate-button"
            onClick={() => {
              setOpacity(0);
              clickplay();
              setTimeout(() => {
                navigate("main");
              }, 1000);
            }}
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 6, stiffness: 200 }}
          >
            Activate
          </motion.div>{" "}
        </div>
      </div>
      <Modal open={open} className={"modal"}>
        <div className={"Box"}>
          <div className="musicConfirm">Do you want music?</div>
          <div className="icons">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring" }}
            >
              <SentimentSatisfiedAltIcon
                className={"icon"}
                onClick={() => {
                  musicPlay();
                  setOpen(false);
                }}
                fontSize="larger"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring" }}
              onClick={() => setOpen(false)}
            >
              <SentimentVeryDissatisfiedIcon
                className={"icon"}
                fontSize="larger"
              />
            </motion.div>
          </div>
        </div>
      </Modal>
    </motion.div>
  );
}

export default App;
