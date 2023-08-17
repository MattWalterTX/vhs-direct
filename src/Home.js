import React from "react";
import './Home.css';

const Home = () => {

  return (
    <div>
        <div className="header">
          <h4>VHS Direct</h4>
          <button>SIGN IN</button>
        </div>
      <div className="chunk">
        <div className="content-box">
          <h3>SKIP THE WAIT</h3>
          <p>GET VHS CASSETTES STREAMED DIRECTLY TO YOUR PREFRONTAL CORTEX</p>
          <div>
            <button>PLEDGE FEALTY</button>
            <input type="email" name="email" placeholder="EMAIL ADDRESS"/>
          </div>
        </div>
      </div>
      <div className="chunk">
        <div className="img-container">
          <div>
            <h3>THE BEST ESCAPISM MONEY CAN BUY.</h3>
            <p>GIVE YOUR BRAIN A BREAK FROM WORK. WE'LL TAKE GOOD CARE OF IT WHILE YOU'RE AWAY</p>
          </div>
          <div>
            <p>IMG goes here</p>
          </div>
        </div>
      </div>
      <div className="chunk">
         <div className="img-container">
          <div>
            <p>IMG goes here</p>
          </div>
          <div>
            <h3>EMBRACE THE SPOOK.</h3>
            <p>UNLEASH THE HALLOWEEN SPIRIT UPON YOUR UNSUSPECTING PEERS EVERY DAY OF THE YEAR.</p>
          </div>
        </div>
      </div>
      <div className="chunk">
        <div className="content-box">
            <h3>NOT READY TO SEAL YOUR FATE?</h3>
            <p>BROWSE LIBRARY FOR FREE</p>
            <button>FEAST YOUR EYES</button>
          </div>
      </div>
    </div>
  )
}

export default Home