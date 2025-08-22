import React from "react";
import { Link } from "react-router-dom";

const Brokerage = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8">
          <Link to="" style={{ textDecoration: "none", marginBottom: "8px" }}>
            <h4 className="text-center">Brokerage Calculator</h4>
          </Link>
          <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "0.9rem" }}
            className="text-muted"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4">
          <Link to="" style={{ textDecoration: "none" }}>
            <h4>List of Charges</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
