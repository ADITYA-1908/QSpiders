import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3 border-top border-secondary">
      <div className="container text-center">
        <div className="row justify-content-center gx-4">
          <div className="col-auto">
            <small className="footer-link">SPACEX © 2024</small>
          </div>
          <div className="col-auto">
            <small className="footer-link">PRIVACY POLICY</small>
          </div>
          <div className="col-auto">
            <small className="footer-link">SUPPLIERS</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
