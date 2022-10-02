import { motion } from "framer-motion";
import React from "react";
import "./App.css";
import Space1 from "./Space1.mp4";
import Space2 from "./Space2.mp4";
import Space3 from "./Space3.mp4";
import { BsArrowDownShort } from "react-icons/bs";
import Second from "./components/secondScreen";
import Earth from "./earth.mp4";
import Binoculars from "./components/thirdScreen";
import useSound from "use-sound";
import Boing from "./boing.mp3";
import Fourth from "./components/fourthScreen";

const Main = () => {
  const [boingnoise] = useSound(Boing, {
    volume: 0.5,
  });
  return (
    <div className="main">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        onScroll={() => {
          boingnoise();
        }}
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
                <motion.div
                  whileHover={{
                    y: [0, 20, -90, 0],
                    transition: { duration: 1, type: "spring" },
                  }}
                >
                  Hello,&nbsp;
                </motion.div>{" "}
                I am Bob Lam
              </motion.h1>
            </div>
            <motion.div
              className="third-section arrow-section"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.div
                drag
                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
                dragSnapToOrigin
                dragElastic={0.2}
                whileDrag={{ scale: 1.2 }}
                onDragStart={() => {
                  boingnoise();
                }}
              >
                <motion.div
                  animate={{ y: [20, 0, 20] }}
                  transition={{ repeat: Infinity, type: "spring" }}
                >
                  <motion.div
                    className="arrow-clickme"
                    animate={{ opacity: [1, 0] }}
                    transition={{ delay: 4.5 }}
                  >
                    Drag Me!
                  </motion.div>
                  <BsArrowDownShort className="arrow-down" />
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="border1"></div>
          </div>
        </div>

        <div className="screen">
          <video loop autoPlay muted>
            <source src={Space2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Second />
          <div className="border2"></div>
        </div>
        <div className="screen">
          <video loop autoPlay muted>
            <source src={Earth} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="binoculars-background"></div>
          <Binoculars />
          <div className="border3"></div>
        </div>
        <div className="screen">
          <video loop autoPlay muted>
            <source src={Space3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div class="smake-background"></div>
          <Fourth />
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
