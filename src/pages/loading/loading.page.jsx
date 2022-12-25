import React from "react";

function LoadingPage() {
  return (
    <div className="page-loader">
      <div className="landing-info" style={{ position: "initial" }}>
        <h1 className="landing-info-title">CK</h1>
        <h1 className="landing-info-pretitle">Loading...</h1>
      </div>
      <div className="page-loader-indicator loader-bars">
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
        <div className="loader-bar" />
      </div>
    </div>
  );
}

export default LoadingPage;
