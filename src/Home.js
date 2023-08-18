import React from "react";
import './Home.css';
import vhs1 from './assets/img-vhs1.jpeg';
import vhs2 from './assets/img-vhs2.webp';

const Home = () => {

  return (
    <div>
        <div className="header">
          <h4>VHS Direct</h4>
          <button className="sign-in-button button">SIGN IN</button>
        </div>
      <div className="chunk ch1">
        <div className="content-box">
          <h3>SKIP THE WAIT</h3>
          <p>GET VHS CASSETTES STREAMED DIRECTLY TO YOUR PREFRONTAL CORTEX</p>
          <div>
            <button className="button">PLEDGE FEALTY</button>
            <input type="email" name="email" placeholder="EMAIL ADDRESS" className="place-holder"/>
          </div>
        </div>
      </div>
      <div className="chunk img-bg-1">
        <div className="img-container">
          <div className="text-box">
            <h3>THE BEST ESCAPISM MONEY CAN BUY.</h3>
            <p>GIVE YOUR BRAIN A BREAK FROM WORK. WE'LL TAKE GOOD CARE OF IT WHILE YOU'RE AWAY</p>
          </div>
          <div>
            {/* <p>IMG goes here</p> */}
            <img src={vhs1} alt='horror cassette 1' className="vhs-img"/>
          </div>
        </div>
      </div>
      <div className="chunk img-bg-2">
         <div className="img-container">
          <div>
            {/* <p>IMG goes here</p> */}
            <img src={vhs2} alt="horror cassette 2" className="vhs-img" />
          </div>
          <div className="text-box">
            <h3>EMBRACE THE SPOOK.</h3>
            <p>UNLEASH THE HALLOWEEN SPIRIT UPON YOUR UNSUSPECTING PEERS EVERY DAY OF THE YEAR.</p>
          </div>
        </div>
      </div>
      <div className="chunk ch4">
        <div className="content-box">
          <h3>NOT READY TO SEAL YOUR FATE?</h3>
          <p>BROWSE LIBRARY FOR FREE</p>
          <button className="button">FEAST YOUR EYES</button>
        </div>
      </div>
    </div>
  )
}

export default Home