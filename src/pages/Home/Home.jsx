import React, { useEffect, useState } from "react";
import "./Home.scss";
import Tabs from "../../components/Tabs/Tabs";

const Home = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="home">
      <div className="sec-1">
        <h1 className="main-txt">
          Spot the <span className="grad">Truth</span> : Unmasking <br></br>
          Deepfakes
        </h1>
      </div>
      <div className="sec-2">
        <Tabs/>
      </div>
      {images.length > 0 && (
        <div className="popup">
          <div className="popup-window">
            <div className="img-container">
              <img alt="shot-img" className="img-shot"></img>
              <img alt="shot-img" className="img-shot"></img>
              <img alt="shot-img" className="img-shot"></img>
              <img alt="shot-img" className="img-shot"></img>
            </div>
            <div className="button-container">
              <button className="button">
                Check Now
                <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
