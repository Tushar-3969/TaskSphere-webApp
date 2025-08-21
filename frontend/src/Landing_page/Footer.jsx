import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col mb-5 logo">
            <img
              src="src\assets\images\logo.png"
              alt="logo"
              style={{ width: "70%" }}
            />
            <p>
              &copy; 2010 - 2024, Not TradeNest Broking Ltd. All rights
              reserved.
            </p>
            <span>
              <a href="" className="social">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              &nbsp; &nbsp;
              <a href="" className="social">
                <i class="fa-brands fa-twitter"></i>
              </a>
              &nbsp; &nbsp;
              <a href="" className="social">
                <i class="fa-brands fa-telegram"></i>
              </a>
              &nbsp; &nbsp;
              <a href="" className="social">
                <i class="fa-brands fa-instagram"></i>
              </a>
              &nbsp; &nbsp;
              <a href="" className="social">
                <i class="fa-brands fa-facebook"></i>{" "}
              </a>
            </span>
          </div>

          <div className="col">
            <p>Company</p>
            <a href="" className="text-muted">
              About
            </a>
            <br />
            <a href="" className="text-muted">
              Products
            </a>
            <br />
            <a href="" className="text-muted">
              Pricing
            </a>
            <br />
            <a href="" className="text-muted">
              Referral programme
            </a>
            <br />
            <a href="" className="text-muted">
              Careers
            </a>
            <br />
            <a href="" className="text-muted">
              TradeNest.tech
            </a>
            <br />
            <a href="" className="text-muted">
              Press & media
            </a>
            <br />
            <a href="" className="text-muted">
              TradeNest cares (CSR)
            </a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>
            <a href="" className="text-muted">
              Contact
            </a>
            <br />
            <a href="" className="text-muted">
              Support portal
            </a>
            <br />
            <a href="" className="text-muted">
              Z-Connect blog
            </a>
            <br />
            <a href="" className="text-muted">
              List of charges
            </a>
            <br />
            <a href="" className="text-muted">
              Downloads & resources
            </a>
            <br />
          </div>

          <div className="col">
            <p>Account</p>
            <a href="" className="text-muted">
              Open an account
            </a>
            <br />
            <a href="" className="text-muted">
              Fund transfer
            </a>
            <br />
            <a href="" className="text-muted">
              60 day challenge
            </a>
            <br />
          </div>
        </div>

        <div
          className="mt-5 text-small text-muted"
          style={{ fontSize: "14px" }}
        >
          <p>
            TradeNest Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000293847 CDSL: Depository services through TradeNest Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-564-2019 Commodity Trading
            through TradeNest Commodities Pvt. Ltd. MCX: 58749 – SEBI
            Registration no.: INZ000302948 Registered Address: TradeNest Broking
            Ltd., #21, 2nd Floor, Tech Park Road, HSR Layout, Bengaluru -
            560102, Karnataka, India. For any complaints pertaining to
            securities broking please write to{" "}
            <a href="mailto:complaints@tradenest.com">
              complaints@tradenest.com
            </a>
            , for DP related to{" "}
            <a href="mailto:dp@tradenest.com">dp@tradenest.com</a>. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeNest and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className="text-center">
          <a href="#" className="mx-4 text-muted">
            NSE
          </a>
          <a href="#" className="mx-4 text-muted">
            BSE
          </a>
          <a href="#" className="mx-4 text-muted">
            MSX
          </a>
          <a href="#" className="mx-4 text-muted">
            Terms & Conditions
          </a>
          <a href="#" className="mx-4 text-muted">
            Policy and Procedure
          </a>
          <a href="#" className="mx-4 text-muted">
            Privacy Policy
          </a>
          <a href="#" className="mx-4 text-muted">
            Disclosure
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
