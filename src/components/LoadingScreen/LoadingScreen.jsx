import React from "react";
import LoadingGIF from "./loading.gif";
import "./index.css";

function LoadingScreen() {
  return (
    <div className="loading">
      <img src={LoadingGIF} alt="" />
    </div>
  );
}

export default LoadingScreen;
