import React from "react";
import LoadingGIF from "./loading.gif";
import "./index.css";

const LoadingScreen = () => {
  return (
    <div className="loading">
      <img src={LoadingGIF} alt="" />
    </div>
  );
};

export default LoadingScreen;
