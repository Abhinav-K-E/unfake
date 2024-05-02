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
                <div className="grp-name">John smith</div>
                <div className="divider"></div>
              </div>
              <div className="certi-grp">
                <div className="grp-title">File ID</div>
                <div className="grp-name">#2322267</div>
                <div className="divider"></div>
              </div>
            </div>
            <div className="certi-flex-right">
              <div className="certi-date">17/05/2024</div>
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
        Download Certificate
      </button>
    </div>
  );
};

export default Certificate;
