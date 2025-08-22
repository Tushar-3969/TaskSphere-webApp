import React from "react";
import { Link } from "react-router-dom";

const CreateTicket = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className=" fs-2">To Create a ticket, Select a relevant topic</h1>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-solid fa-circle-plus fa-sm"></i> Account Opening
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Online Account Opening
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Offline Account Opening
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Company, Partnership and HUF Account
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Opening
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            NRI Account Opening
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Charges at TradeNest
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            TradeNest IDFC FIRST Bank 3-in-1 Account
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Getting Started
          </Link>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-solid fa-user fa-sm"></i> Your TradeNest Account
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Login Credentials
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Account Modification and Segment Addition
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            DP ID and bank details
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Your profile
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Transfer and conversion of shares
          </Link>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-solid fa-chart-column fa-sm"></i> Your TradeNest
            Account
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Margin/leverage, Product and Order types
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            kite Web and Mobile
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Trading FAQs
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Corporate Actions
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Sentinel
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Kite API
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Pi and other platforrr
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            Stockreports+
          </Link>
          <Link style={{ lineHeight: "2.5" }} to="">
            GTT
          </Link>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-solid fa-credit-card fa-sm"></i> Funds
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Adding Funds
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Fund Withdrawal
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            eMandates
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Adding Bank Accounts
          </Link>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-regular fa-circle fa-sm"></i> Console
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Reports
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Ledger
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Portfolio
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            60 Day Challenge
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            IPO
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Referral Program
          </Link>
        </div>

        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="mb-5">
            <i class="fa-regular fa-circle fa-sm"></i> Coin
          </h4>
          <Link style={{ lineHeight: "2.5" }} to="">
            Understanding Mutual Funds
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            About Coin
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Buying and Selling the shares
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Starting an SIP
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Managing your Portfolio
          </Link>
          <br />
          <Link style={{ lineHeight: "2.5" }} to="">
            Coin App
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
