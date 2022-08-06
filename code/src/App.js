import React from 'react'
import "./App.css";
import Asteroids from "./Asteroids.mp4";

function App() {
  return (
    <div>
      <div className="Screen">
        <video loop autoPlay muted >

          <source src={Asteroids} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       <div className="activate"><div className='activate-button'>Activate</div></div>
      </div>
    </div>
  );
}

export default App;
