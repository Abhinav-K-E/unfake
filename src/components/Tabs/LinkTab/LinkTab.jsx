import React, { useEffect, useState } from "react";
import "./LinkTab.scss";
import ICON from "../../../assets/link.svg";

import toast from "react-hot-toast";
import useFetch from "../../../hooks/useFetch";

import { baseUrl } from "../../../constant";
import { useStore } from "../../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const LinkTab = () => {
  const [link, setLink] = useState("");
  const[result,setResult]=useState([]);

  const {setFinalResult}=useStore();
  const navigate =useNavigate();

  const getImages = async (id) => {
    const res = await fetch(`${baseUrl}/split_vid?fid=${id}`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const images = await res.json();
    console.log(images.snap);
    return images;
  };

  const handleUpload = async() => {
    console.log("link : ", link);
    if (link.length > 0) {
      toast.success(link);
      const id = await useFetch(link);
      console.log(id);
      const imageSet = await getImages(id);
      setResult(imageSet.snap);
    } else {
      toast.error("Enter a valid link");
    }
  };

  const imageRedirect = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/unmask?fid=${id}`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      const result = await res.json();
      setFinalResult(result);
      navigate("/result");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("can't upload the file");
    }
  };

  return result?.length > 0 ? (
    <div className="popup">
      <div className="popup-window">
        <div className="img-container">
          {result.map((item, index) => (
            <img
              key={index}
              src={`${baseUrl}/dwd/${item}`}
              alt="shot-img"
              className="img-shot"
              onClick={()=>imageRedirect(item)}
            ></img>
          ))}
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
  ) : (
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
