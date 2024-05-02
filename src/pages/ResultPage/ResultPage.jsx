import "./ResultPage.scss";
import { useStore } from "../../context/StoreContext";

import { Progress } from "rsuite";

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

  const { finalResult, setFinalResult } = useStore();
  const baseUrl = "https://f478-2a09-bac5-3daa-16a0-00-241-3b.ngrok-free.app";
  return (
    <div className="result-page">
      <h1 className="result-head">Analysis</h1>
      <div className="result-grid">
        <div className="result-grid-left">
          <img src={`${baseUrl}/dwd/${finalResult?.fid}`} alt="" />
        </div>
        <div className="result-grid-right">
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
      </div>
    </div>
  );
};
export default ResultPage;
