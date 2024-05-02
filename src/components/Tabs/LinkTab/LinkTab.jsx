import React, { useEffect, useState } from "react";
import "./LinkTab.scss";
import ICON from "../../../assets/link.svg";

import toast from "react-hot-toast";
import useFetch from "../../../hooks/useFetch";

const LinkTab = () => {
  const [link, setLink] = useState("");

  const handleUpload = () => {
    console.log("link : ", link);
    if (link.length > 0) {
      toast.success(link);
      const data = useFetch(link);
    } else {
      toast.error("Enter a valid link");
    }
  };

  return (
    <div className="tab-content">
      <div className="i-box">
        <img src={ICON} className="icon" alt="icon" />
        <input
          type="url"
          className="input-box"
          placeholder="https://google.com"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
      </div>

      <button onClick={handleUpload} className="create-btn">
        Upload
      </button>
    </div>
  );
};

export default LinkTab;
