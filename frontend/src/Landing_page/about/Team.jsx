import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.9", fontSize: "1.2em", lineBreak: "2px" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="src\assets\images\tusharPathare.jpg"
            alt="coeImg"
            style={{ height: "18rem", width: "18rem", borderRadius: "10rem" }}
          />
          <h4 className="mt-5">Tushar Pathare</h4>
          <h6 className="mt-3">Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Tushar bootstrapped and founded TradeNest to simplify trading and
            investing for everyone by solving the challenges he observed in
            traditional platforms. Today, TradeNest is shaping the future of
            smart and accessible trading solutions.
          </p>
          <p>
            He is passionate about building technology that empowers traders and
            investors to grow without barriers.
          </p>
          <p>
            When not working on TradeNest, he enjoys fitness, running, and
            exploring innovative ideas.
          </p>
          <p>
            Connect on <Link to="/">Homepage</Link> / <a href="">TradingQnA</a>{" "}
            / <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
