import React from "react";
import { Link } from "react-router-dom";
import "./Support.css";

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWraper">
        <h4 className="">Support Portol</h4>
        <a href="" style={{ color: "white", textDecoration: "underline" }}>
          Track Tickets
        </a>
      </div>

      <div className=" row p-5">
        <div className=" col-6" id="search">
          <h1 className="fs-3">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input type="text" placeholder="Eg. how do I activate F&O" />
          <br />
          <span>
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="" style={{ marginLeft: "24rem" }}>
              Kite user manual
            </a>
          </span>
        </div>
        <div className=" col-6" id="feature">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Hero;
