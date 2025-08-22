import React from "react";

const Universe = () => {
  return (
    <div className="container text-center mt-5">
      <div className="row mt-5">
        <h1>The TradeNest Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 mt-3 p-3">
          <img src="src\assets\images\smallcaseLogo.png" />
          <p className="text-muted text-small  mt-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 mt-3 p-3">
          <img
            src="src\assets\images\streakLogo.png"
            style={{ width: "35%" }}
          />
          <p className="text-muted text-small mt-3">
            Automated Trading Strategies
          </p>
        </div>

        <div className="col-4 mt-3 p-3">
          <img
            src="src\assets\images\sensibullLogo.svg"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small mt-3">
            Options Trading Simplified
          </p>
        </div>

        <div className="col-4 mt-3 p-3">
          <img
            src="src\assets\images\goldenpiLogo.png"
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small mt-3">Bonds Made Easy</p>
        </div>

        <div className="col-4 mt-3 p-3">
          <img src="src\assets\images\dittoLogo.png" style={{ width: "35%" }} />
          <p className="text-muted text-small mt-3">Insurance Made Simple</p>
        </div>

        <div className="col-4 mt-3 p-3">
          <img
            src="src\assets\images\zerodhaFundhouse.png"
            style={{ width: "40%" }}
          />
          <p className="text-muted text-small mt-3">Direct Mutual Funds</p>
        </div>
      </div>
      <button
        className="btn btn-primary p-2 fs-5 mb-5 mt-5"
        style={{ width: "20%", margin: "0 auto", color: "white" }}
      >
        SignUp Now
      </button>
    </div>
  );
};

export default Universe;
