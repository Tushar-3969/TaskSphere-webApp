import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";

const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        imageURL="src\assets\images\kite.png"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your TradeNest Account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        imageURL="src\assets\images\kite.png"
      />
      <LeftSection
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        imageURL="src\assets\images\coin.png"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase"
        learnMore=""
        imageURL="src\assets\images\kiteconnect.png"
      />
      <LeftSection
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        imageURL="src\assets\images\varsity.png"
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center mt-5">
        Want to know more about our technology stack? Check out the
        TradeNest.tech blog.
      </p>
      <Universe />
    </div>
  );
};

export default ProductPage;
