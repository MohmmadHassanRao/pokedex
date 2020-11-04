import React from "react";
import Lottie from "react-lottie";
import "./index.css";
import animationData from "../lottie/4366-game-east-west.json";
const PikaLoad = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  );
};

export default PikaLoad;
