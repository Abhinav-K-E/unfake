import React, { useRef } from "react";
import html2canvas from "html2canvas";

import TITLE from "../../assets/certi.png";
import MARK from "../../assets/mark.png";
import DEEPFAKE from "../../assets/certiFake.png";
import QR from "../../assets/qr.png";

import "./Certificate.scss";

const Certificate = () => {
  const certificateRef = useRef(null);

  const downloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = imgData;
      link.click();
    });
  };

  const notDeepFake = true;

  return (
    <div className="certi-wrapper">
      {/* <h1>Certificate of Completion</h1> */}
      <div ref={certificateRef} className="certificate">
        <div className="left-bar"></div>
        <div className="right-side">
          <h1 className="certi-head">
            Un<span>Mask</span>
          </h1>
          <div className="divider"></div>
          <img src={notDeepFake ? TITLE : DEEPFAKE} width={500} alt="" />
          <div className="certi-flex">
            <div className="certi-flex-left">
              <div className="certi-grp">
                <div className="grp-title">Issued for</div>
                <div className="grp-name">Username</div>
                <div className="divider"></div>
              </div>
              <div className="certi-grp">
                <div className="grp-title">File ID</div>
                <div className="grp-name">#2322267</div>
                <div className="divider"></div>
              </div>
            </div>
            <div className="certi-flex-right">
              <div className="certi-date">03/05/2024</div>
              <img src={MARK} width={200} alt="" />
            </div>
          </div>
          <div className="qr-sec">
            <img src={QR} width={80} alt="" />
            <div className="verify">Verified by unmask.com</div>
          </div>
        </div>
      </div>
      <button className="certi-btn" onClick={downloadCertificate}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          fill="none"
        >
          <path
            fill="#fff"
            d="M20.347 29.667h-8.694c-6.546 0-9.346-2.8-9.346-9.347v-.173c0-5.92 2.333-8.774 7.56-9.267.533-.04 1.04.36 1.093.907a1 1 0 0 1-.907 1.093c-4.186.387-5.746 2.36-5.746 7.28v.173c0 5.427 1.92 7.347 7.346 7.347h8.694c5.426 0 7.346-1.92 7.346-7.347v-.173c0-4.947-1.586-6.92-5.853-7.28a1 1 0 0 1-.907-1.08.99.99 0 0 1 1.08-.907c5.307.454 7.68 3.32 7.68 9.28v.174c0 6.52-2.8 9.32-9.346 9.32"
          />
          <path
            fill="#fff"
            d="M16 20.84c-.547 0-1-.453-1-1V2.667c0-.547.453-1 1-1s1 .453 1 1V19.84c0 .56-.453 1-1 1"
          />
          <path
            fill="#fff"
            d="M16 22.333a1 1 0 0 1-.707-.293l-4.466-4.467a1.006 1.006 0 0 1 0-1.413 1.006 1.006 0 0 1 1.413 0L16 19.92l3.76-3.76a1.006 1.006 0 0 1 1.413 0 1.006 1.006 0 0 1 0 1.413l-4.466 4.467a1 1 0 0 1-.707.293"
          />
        </svg>
      </button>
    </div>
  );
};

export default Certificate;
