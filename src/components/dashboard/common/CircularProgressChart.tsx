import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = ({ percentage }:any) => {
  return (
    <div style={{ width: 80, height: 80 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#35DE97", // Green Progress
          trailColor: "#D4D5D9", // Grey Background
          textSize: "20px",
        })}
      />
    </div>
  );
};

export default CircularProgress;