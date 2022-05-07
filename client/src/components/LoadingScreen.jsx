import React from "react";
import "../styles/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loadingScreenCont">
      <div className="loadingCircle" />
      <h1>Loading...</h1>
      <h2>Please, wait, untill our song database is loaded <div className="smileCont">:)</div></h2>
    </div>
  );
};

export default LoadingScreen;
