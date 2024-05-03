import "./ResultPage.scss";
import { useStore } from "../../context/StoreContext";

import { Progress } from "rsuite";

import { baseUrl } from "../../constant";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const customProgressBarStyle = {
    width: "200px", // Adjust the width of the progress bar
    height: "200px", // Adjust the height of the progress bar
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Adjust the font size of the progress bar text
  };

  const { finalResult, setFinalResult, certiId, setCertiId } = useStore();

  const navigate = useNavigate();

  return (
    <div className="result-page">
      <div className="result-wrapper">
        <h1 className="result-head">Analysis</h1>
        <div className="result-grid">
          <div className="result-grid-left">
            <img src={`${baseUrl}/dwd/${finalResult?.fid}`} alt="" />
          </div>
          <div className="result-grid-right">
            <div className="progress-grp">
              <div className="result-grp">
                <div className="result-grp-name">Fake</div>
                <Progress.Circle
                  percent={Math.round(finalResult?.fake * 100)} // Set the percentage value
                  strokeColor={"#0072FA"} // Set the stroke color
                  strokeWidth={10} // Set the stroke width
                  trailWidth={10} // Set the trail width (background)
                  style={customProgressBarStyle}
                  strokeLinecap="round"
                  trailColor="rgba(0, 114, 250, 0.09)"
                />
              </div>
              <div className="result-grp">
                <div className="result-grp-name">Real</div>
                <Progress.Circle
                  percent={Math.round(finalResult?.real * 100)} // Set the percentage value
                  strokeColor={"#0072FA"} // Set the stroke color
                  strokeWidth={10} // Set the stroke width
                  trailWidth={10} // Set the trail width (background)
                  style={customProgressBarStyle}
                  strokeLinecap="round"
                  trailColor="rgba(0, 114, 250, 0.09)"
                />
              </div>
            </div>
            <button
              className="certi-btn"
              onClick={() => {
                setCertiId(finalResult?.hash);
                navigate("/certification");
              }}
            >
              Generate certification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResultPage;
