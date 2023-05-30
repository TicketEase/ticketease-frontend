import React from "react";
import './Footer.css';
const Footer = () => <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <div className="footer">
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-12 col-sm-12 col-xs-12">
          <div className="footer_profile">
            <ul>
              <li>
                <a href="https://jo.linkedin.com/">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://github.com/">
                  <i className="fa fa-github"/>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/?lang=ar">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_copyright">
            <p>© 2023 Ticket Ease. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
export default Footer;