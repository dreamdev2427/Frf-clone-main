import React from "react";
import { Link } from "@reach/router";

export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Marketplace</h5>
              <ul>
                <li>
                  <Link to="">All NFTs</Link>
                </li>
                <li>
                  <Link to="">Art</Link>
                </li>
                <li>
                  <Link to="">Music</Link>
                </li>
                <li>
                  <Link to="">Domain Names</Link>
                </li>
                <li>
                  <Link to="">Virtual World</Link>
                </li>
                <li>
                  <Link to="">Collectibles</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Resources</h5>
              <ul>
                <li>
                  <Link to="">Help Center</Link>
                </li>
                <li>
                  <Link to="">Partners</Link>
                </li>
                <li>
                  <Link to="">Suggestions</Link>
                </li>
                <li>
                  <Link to="">Discord</Link>
                </li>
                <li>
                  <Link to="">Docs</Link>
                </li>
                <li>
                  <Link to="">Newsletter</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Community</h5>
              <ul>
                <li>
                  <Link to="">Community</Link>
                </li>
                <li>
                  <Link to="">Documentation</Link>
                </li>
                <li>
                  <Link to="">Brand Assets</Link>
                </li>
                <li>
                  <Link to="">Blog</Link>
                </li>
                <li>
                  <Link to="">Forum</Link>
                </li>
                <li>
                  <Link to="">Mailing List</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-1">
            <div className="widget">
              <h5>Newsletter</h5>
              <p>
                Signup for our newsletter to get the latest news in your inbox.
              </p>
              <div className="spacer-10"></div>
              <small>Your email is safe with us. We don't spam.</small>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="bottom-most">
              <div
                className="de-flex-col"
                onClick={() => window.open("", "_self")}
              >
                <img src="/images/favicon.png" alt="logo" />
                <p>Friktion</p>
              </div>
              <div className="de-flex-col">
                <div className="social-icons">
                  <span onClick={() => window.open("", "_self")}>
                    <i className="fa fa-facebook fa-lg"></i>
                  </span>
                  <span onClick={() => window.open("", "_self")}>
                    <i className="fa fa-twitter fa-lg"></i>
                  </span>
                  <span onClick={() => window.open("", "_self")}>
                    <i className="fa fa-linkedin fa-lg"></i>
                  </span>
                  <span onClick={() => window.open("", "_self")}>
                    <i className="fa fa-pinterest fa-lg"></i>
                  </span>
                  <span onClick={() => window.open("", "_self")}>
                    <i className="fa fa-rss fa-lg"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
