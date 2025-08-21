import React from "react";

const HeroSection = () => {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="src\assets\images\homeHero.png"
          alt="heroImage"
          className="mb-5"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="text-muted">
          Online Platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <button
          className="btn btn-primary p-2 fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto", color: "white" }}
        >
          SignUp Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
