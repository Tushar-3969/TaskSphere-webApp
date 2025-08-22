import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container border-bottom mb-5">
      <div className="row text-center mt-5 p-3">
        <h1>Technology</h1>
        <h3 className="mt-3 text-muted fs-4">
          Sleek, modern and intuitive trading platforms
        </h3>
        <p className="mt-3 text-muted  mb-5">
          {" "}
          Check out our{" "}
          <Link to="">
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Hero;
