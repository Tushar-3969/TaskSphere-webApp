import React from "react";
import { Link } from "react-router-dom";

const RightSection = ({
  productName,
  productDescription,
  learnMore,
  imageURL,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h2>{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <Link to={learnMore}>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="productImage" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
