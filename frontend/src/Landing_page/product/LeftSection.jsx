import React from "react";
import { Link } from "react-router-dom";

const LeftSection = ({
  productName,
  productDescription,
  imageURL,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6">
          <img src={imageURL} alt="productImage" />
        </div>

        {/* <div className="col-2"></div> */}

        <div className="col-6 p-5 mt-5">
          <h2>{productName}</h2>
          <p className="text-muted">{productDescription}</p>
          <div>
            <Link to={tryDemo}>
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to={learnMore} style={{ marginLeft: "20px" }}>
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="mt-3">
            <Link to={googlePlay}>
              <img src="src\assets\images\googlePlayBadge.svg" />
            </Link>
            &nbsp; &nbsp;
            <Link to={appStore} style={{ marginLeft: "20px" }}>
              <img src="src\assets\images\appstoreBadge.svg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
