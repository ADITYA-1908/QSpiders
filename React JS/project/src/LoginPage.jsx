// LoginPage.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import Buttons from "./components/LoginPage/Buttons";
import InputField from "./components/LoginPage/InputField";
import SocialIcons from "./components/LoginPage/SocialMedia";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <div className="fluid-container p-0 m-0">
      <div className="row g-0">
        <div className="col-md-8 p-4">
          <div className="logo mb-5">
            <div className="d-flex align-items-center">
              <span className="ms-2 fw-bold text-secondary">Diprella</span>
            </div>
          </div>

          <div className="login-form mt-5 pt-1">
            <h1 className="text-center mb-4 fw-bold">Login to Your Account</h1>
            <p className="text-center text-secondary mb-4">
              Login using social networks
            </p>

            <div className="d-flex justify-content-center gap-3 mb-4">
              <SocialIcons icon={<FaFacebook />} color="#3b5998" />
              <SocialIcons icon={<FaGoogle />} color="#dd4b39" />
              <SocialIcons icon={<FaLinkedin />} color="#0077b5" />
            </div>

            <div className="text-center mb-4">
              <span className="text-secondary line-main">
                <span className="line"></span> OR <span className="line"></span>
              </span>
            </div>

            <form>
              <InputField
                type="email"
                placeholder="Email"
                name="email"
                className="mb-3"
              />

              <InputField
                type="password"
                placeholder="Password"
                name="password"
                className="mb-6"
              />

              <div className="d-flex align-content-center justify-content-center">
                <Buttons
                  text="Sign In"
                  bgcolor={"#36B37E"}
                  Tcolor={"#ffffff"}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="right-section col-md-4 d-flex flex-column justify-content-center align-items-center text-center text-white">
          {/* Background Shapes */}
          <div className="background-shapes">
            <div className="circle small-circle"></div>
            <div className="circle big-circle"></div>
            <div className="triangle"></div>
          </div>

          <div className="inner-right">✕</div>

          <div className="p-2">
            <h1 className="mb-4">New Here?</h1>
            <p className="mb-3">Sign up and discover a great amount</p>
            <p className="mt-3"> of new opportunities!</p>
            <Buttons text="Sign Up" bgcolor={"white"} Tcolor={"black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
