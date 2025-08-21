import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className=" fs-2 text-center">
          We pioneered the discount broking model in India <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 mb-5 border-top text-muted" style={{lineHeight:"1.9",fontSize:"1.2em" ,lineBreak:"2px"}} >
        <div className="col-6 p-5">
          <p>
            We kick-started TradeNest with the vision of creating a smart and
            seamless platform where traders and investors can connect, learn,
            and grow together. Our goal is to remove all barriers in trading by
            offering simplified tools, transparent services, and modern
            technology. The name TradeNest comes from the idea of a "Nest" — a
            safe place where opportunities are nurtured and grow. Just like a
            nest supports life, TradeNest supports every trader and investor by
            giving them the right environment to build their financial journey
            with confidence.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" >Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
